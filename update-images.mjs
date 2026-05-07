import fs from 'fs';
import path from 'path';

const contentDir = '/Users/praveen/Programming/IQLine/pr4veen/src/content/projects';

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

for (const file of files) {
  const filePath = path.join(contentDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace ../images/name.jpg with /images/projects/name.png
  content = content.replace(/projectImage:\s*['"]\.\.\/images\/([^\.]+)\.jpg['"]/, 'projectImage: "/images/projects/$1.png"');
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
