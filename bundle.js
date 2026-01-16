const fs = require('fs');
const path = require('path');

// Read all the source files
const questionsJs = fs.readFileSync(path.join(__dirname, 'data', 'questions.js'), 'utf8');
const timerJs = fs.readFileSync(path.join(__dirname, 'utils', 'timer.js'), 'utf8');
const storageJs = fs.readFileSync(path.join(__dirname, 'utils', 'storage.js'), 'utf8');
const appJs = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');

// Remove import/export statements
const cleanCode = (code) => {
    return code
        .replace(/import\s+.*?from\s+['"].*?['"];?\s*/g, '')
        .replace(/export\s+/g, '');
};

// Combine all files
const bundled = `// Bundled JavaScript for Yakuniy Imtixon
// Generated: ${new Date().toISOString()}

${cleanCode(questionsJs)}

${cleanCode(timerJs)}

${cleanCode(storageJs)}

${cleanCode(appJs)}
`;

// Write the bundled file
fs.writeFileSync(path.join(__dirname, 'app-bundled.js'), bundled, 'utf8');

console.log('✅ Successfully bundled app-bundled.js');
