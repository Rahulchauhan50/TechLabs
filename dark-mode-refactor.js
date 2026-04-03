const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'components', 'pages');

const readFiles = (directory) => {
  const files = fs.readdirSync(directory);
  let allFiles = [];
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      allFiles = allFiles.concat(readFiles(fullPath));
    } else if (fullPath.endsWith('.tsx') && file !== 'Home.tsx') {
      allFiles.push(fullPath);
    }
  }
  return allFiles;
};

const mapReplacements = {
  // exact class word replacements
  'text-slate-900': 'text-white',
  'text-slate-800': 'text-white',
  'text-slate-700': 'text-slate-200',
  'text-slate-600': 'text-slate-300',
  'text-slate-500': 'text-slate-400',
  'hover:text-slate-900': 'hover:text-white',
  'hover:text-slate-800': 'hover:text-white',
  'hover:text-slate-700': 'hover:text-slate-200',
  'hover:text-slate-600': 'hover:text-slate-300',
  'hover:text-slate-500': 'hover:text-slate-400',
  'bg-slate-50': 'bg-white/5',
  'bg-slate-100': 'bg-white/5',
  'bg-slate-200': 'bg-white/10',
  'hover:bg-slate-50': 'hover:bg-white/5',
  'hover:bg-slate-100': 'hover:bg-white/10',
  'hover:bg-slate-200': 'hover:bg-white/20',
  'hover:bg-surface-container-high': 'hover:bg-white/5',
  'bg-white': 'glass-panel', // Default assumption, though it turns sections into glass panels, it matches the premium aesthetic
};

// Replace function
const replaceClasses = (content) => {
  let newContent = content;
  
  // Custom tweaks for sections which shouldn't be glass-panel but transparent or body background
  // If it's a large section bg-white, remove it or change to transparent
  newContent = newContent.replace(/<section className="([^"]*?)bg-white([^"]*?)"/g, '<section className="$1bg-[#030509]$2"');
  newContent = newContent.replace(/className="\s*bg-white\s*"/g, 'className="bg-[#030509]"');
  // the tricky ternary in Services.tsx
  newContent = newContent.replace(/bg-surface-container-low' \: 'bg-white/g, "bg-[#0B0F19]' : 'bg-[#030509]");
  
  // Replace the rest by whole word
  Object.keys(mapReplacements).forEach(key => {
    const val = mapReplacements[key];
    const regex = new RegExp(`\\b${key}\\b`, 'g');
    newContent = newContent.replace(regex, val);
  });
  
  return newContent;
};

const main = () => {
  const tsxFiles = readFiles(dir);
  for (const file of tsxFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const newContent = replaceClasses(content);
    if (content !== newContent) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log(`Updated ${path.basename(file)}`);
    }
  }
};

main();
