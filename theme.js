require('./settings');
const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./GODMEDIA/theme/'+global.theme+'.json')) {
    console.log(
        chalk.green.bold('Loading' + global.theme + 'theme...')
    );
    var json = JSON.parse(fs.readFileSync('./GODMEDIA/theme/'+ global.mess+'.json'));
} else {
    console.log(
        chalk.red.bold('You entered an invalid theme name. DEKU THEME was chosen.')
    );
    var json = JSON.parse(fs.readFileSync('./GODMEDIA/theme/DEKU.json'));
}
function getString(file) {
    return json['STRINGS'][file];
}
module.exports = {
    language: json,
    getString: getString
}
