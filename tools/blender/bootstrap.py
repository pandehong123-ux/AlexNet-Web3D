import bpy
import sys
from pathlib import Path

addon_directory = Path.home() / 'AppData/Roaming/Blender Foundation/Blender/5.2/scripts/addons'
sys.path.insert(0, str(addon_directory))
import blender_mcp

if not hasattr(bpy.types.Scene, 'blender_mcp_running'):
    try:
        blender_mcp.register()
    except ValueError:
        pass
if not hasattr(bpy.types, 'museum_mcp_server'):
    bpy.types.museum_mcp_server = blender_mcp.BlenderMCPServer(host='127.0.0.1', port=9876)
    bpy.types.museum_mcp_server.start()
print('Museum Blender MCP ready on localhost:9876', flush=True)
