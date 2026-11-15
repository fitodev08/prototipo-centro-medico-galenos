const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..','_site'),errors=[];let links=0,pages=0;
function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(path.join(d,x.name)):[path.join(d,x.name)])}
for(const file of walk(root).filter(p=>p.endsWith('.html'))){pages++;const text=fs.readFileSync(file,'utf8');for(const match of text.matchAll(/(?:href|src)="([^"]+)"/g)){const url=match[1].replace(/&amp;/g,'&');if(/^(https?:|mailto:|tel:|data:|#)/i.test(url))continue;let raw=url.split(/[?#]/)[0];if(!raw)continue;const target=path.resolve(path.dirname(file),decodeURIComponent(raw));links++;if(!target.startsWith(root+path.sep)||!fs.existsSync(target))errors.push(path.relative(root,file)+' → '+url)}}
const documents=fs.readFileSync(path.join(root,'Lectura/contenido.js'),'utf8');
for(const m of fs.readFileSync(path.join(root,'Recursos/index.html'),'utf8').matchAll(/archivo=([^"&]+)/g)){const name=decodeURIComponent(m[1]);if(!documents.includes(JSON.stringify(name)))errors.push('Lector sin documento: '+name)}
for(const p of walk(root)){if(p.endsWith('.docx')||p.includes('Historico')||path.basename(p)==='procedencia.json')errors.push('Original interno en sitio público: '+path.relative(root,p))}
if(errors.length){console.error(errors.join('\n'));process.exitCode=1}else console.log(JSON.stringify({pages,localLinks:links,errors:0}));
