#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'checklist.md');
const target = path.join(process.cwd(), 'WEBDEV-CHECKLIST.md');

if (fs.existsSync(target)) {
  console.log('⚠️ WEBDEV-CHECKLIST.md already exists. Skipping copy.');
} else {
  fs.copyFile(source, target, (err) => {
    if (err) {
      console.error('❌ Failed to copy checklist:', err);
    } else {
      console.log('✅ Webdev checklist added as WEBDEV-CHECKLIST.md');
    }
  });
}
