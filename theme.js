require('./settings')
const fs = require('fs');
const path = require('path');
// Function to get a random image from the theme directory
function getRandomThemeImage() {
const themeDir = `./GODMEDIA/+${global.theme}`
if (!fs.existsSync(themeDir)) {
throw new Error('Theme directory not found!');
}
const files = fs.readdirSync(themeDir).filter(file => {
// Assuming you want jpg images, but you can extend this
return path.extname(file) === '.jpg';
});
if (files.length === 0) {
throw new Error('No images found in theme directory!');
}
const randomImage = files[Math.floor(Math.random() * files.length)];
return path.join(themeDir, randomImage);
}
const randomImagePath = getRandomThemeImage();

module.export = { randomImagePath }
