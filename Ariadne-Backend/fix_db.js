const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ariadne').then(async () => {
  const Project = require('./models/Project');
  const projects = await Project.find({ 'media.url': /<div/ });
  for (const p of projects) {
    for (const m of p.media) {
      if (m.url.includes('<div')) {
        const srcMatch = m.url.match(/src=["']([^"']+)["']/);
        if (srcMatch) m.url = srcMatch[1];
      }
    }
    await p.save();
    console.log('Fixed', p.title);
  }
  process.exit(0);
}).catch(console.error);
