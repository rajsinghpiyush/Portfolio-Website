import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = [
  'src/components/Footer.jsx',
  'src/components/Navbar.jsx',
  'src/components/sections/AchievementsSection.jsx',
  'src/components/sections/ContactSection.jsx',
  'src/components/sections/EducationSection.jsx',
  'src/components/sections/ExperienceSection.jsx',
  'src/components/sections/HeroSection.jsx',
  'src/components/sections/ProjectsSection.jsx',
  'src/components/sections/SkillsSection.jsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // For single import { motion } from 'framer-motion'
    content = content.replace(/import \{\s*motion\s*\}\s*from\s*'framer-motion';\r?\n?/g, '');
    // For combined imports like { motion, something }
    content = content.replace(/import \{\s*motion\s*,\s*(.*?)\s*\}\s*from\s*'framer-motion';/g, "import { $1 } from 'framer-motion';");
    content = content.replace(/import \{\s*(.*?)\s*,\s*motion\s*\}\s*from\s*'framer-motion';/g, "import { $1 } from 'framer-motion';");
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log('Fixed ESLint issues.');
