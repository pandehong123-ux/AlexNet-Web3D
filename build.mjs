import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
await build({absWorkingDir:fileURLToPath(new URL('.',import.meta.url)),entryPoints:['assets/app.mjs'],bundle:true,outfile:'script.js',format:'iife',loader:{'.glb':'binary'},target:['chrome110','firefox110','safari16'],minify:true,legalComments:'eof'});
console.log('AlexNet offline bundle built: script.js');
