const fs = require('fs');
const path = require('path');

function scan(folder) {
  fs.readdirSync(folder).forEach(item => {
    const full = path.join(folder, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory() && !['node_modules','docs','dist'].includes(item)) {
      scan(full);
    } else if (['.tsx','.ts','.css','.html'].includes(path.extname(item))) {
      let content = fs.readFileSync(full, 'utf8');
      let orig = content;
      content = content.replace(/src\/assets\/images\//g, '/images/');
      content = content.replace(/\/src\/assets\/images\//g, '/images/');
      if (content !== orig) {
        fs.writeFileSync(full, content);
        console.log('Fixed:', full);
      }
    }
  });
}

scan('src');
console.log('Done!');