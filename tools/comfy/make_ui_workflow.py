"""Convert the recorded API graph to a reviewable ComfyUI canvas, without execution."""
import json
import sys
from pathlib import Path
from run_local import write_json


def main():
    out = Path(sys.argv[1]).resolve()
    graph = json.loads((out/'attempt-1.api.json').read_text('utf-8'))
    schemas = json.loads((out/'object-info-used.json').read_text('utf-8'))
    nodes, links = [], []
    by_id = {}
    for i,(key,api) in enumerate(graph.items()):
        schema = schemas[api['class_type']]
        inputs, widgets = [], []
        required = schema['input'].get('required',{})
        optional = schema['input'].get('optional',{})
        for name in schema.get('input_order',{}).get('required',list(required)) + schema.get('input_order',{}).get('optional',list(optional)):
            if name not in api['inputs']:
                if api['class_type'] == 'ModelSamplingAuraFlow' and name == 'sampling':
                    widgets.append('flow')
                continue
            value = api['inputs'][name]
            if isinstance(value,list) and len(value)==2 and str(value[0]) in graph:
                spec = (required.get(name) or optional[name])[0]
                inputs.append({'name':name,'type':spec if isinstance(spec,str) else 'COMBO','link':None})
            else:
                widgets.append(value)
                if api['class_type']=='KSampler' and name=='seed':
                    widgets.append('fixed')
                if api['class_type']=='LoadImage' and name=='image':
                    widgets.append('image')
        node = {'id':int(key),'type':api['class_type'],'pos':[(i//3)*340,(i%3)*330],
                'size':[310,270], 'flags':{},'order':i,'mode':0, 'inputs':inputs,
                'outputs':[{'name':n,'type':t,'links':[]} for n,t in zip(schema.get('output_name',[]),schema.get('output',[]))],
                'properties':{'Node name for S&R':api['class_type']}, 'widgets_values':widgets}
        nodes.append(node)
        by_id[key] = node
    for key,api in graph.items():
        for slot,inp in enumerate(by_id[key]['inputs']):
            source, source_slot = api['inputs'][inp['name']]
            link_id = len(links)+1
            inp['link'] = link_id
            by_id[source]['outputs'][source_slot]['links'].append(link_id)
            links.append([link_id,int(source),source_slot,int(key),slot,inp['type']])
    workflow = {'last_node_id':max(n['id'] for n in nodes), 'last_link_id':len(links),
                'nodes':nodes,'links':links,'groups':[],'config':{},
                'extra':{'ds':{'scale':0.75,'offset':[30,30]},
                         'description':'Local Hunyuan3D Learning Core; API graph/history are execution authority.'},
                'version':0.4}
    write_json(out/'learning-core.workflow.json', workflow)
    write_json(Path(__file__).parent/'learning-core.workflow.json',workflow)
    print('UI_WORKFLOW_WRITTEN', len(nodes), 'nodes',len(links),'links')


if __name__=='__main__':
    main()
