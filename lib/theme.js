const fs = require('fs')
const chalk = require('chalk')
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

const theme1 = [
     "https://i.pinimg.com/564x/6f/9c/59/6f9c59c71edb09bae4436abe43d763e3.jpg",
     "https://i.pinimg.com/564x/32/20/e1/3220e14017dac711b4da5606a729c1e0.jpg",
     "https://i.pinimg.com/564x/35/ff/1e/35ff1edad1b3d7c1bd7e622b9d8ccf15.jpg",
     "https://i.pinimg.com/564x/b1/2c/f8/b12cf890a846c0fc9ed2908a83fd2558.jpg",
     "https://i.pinimg.com/564x/ba/c4/bc/bac4bc2835e557904fa93914d1225f6b.jpg",
     "https://i.pinimg.com/564x/ce/ad/fd/ceadfdae39db598babb1418a4778dc9f.jpg",
     "https://i.pinimg.com/564x/e5/9b/99/e59b997964bb44051cadb9fe33415240.jpg"
    ]
const theme2 = [
    "https://i.pinimg.com/564x/55/d9/a3/55d9a3e30c855b9a6471ba0023143204.jpg",
    "https://i.pinimg.com/564x/57/ac/1f/57ac1ff8deff5152e093cb5cc40c289d.jpg",
    "https://i.pinimg.com/564x/65/5e/04/655e04f0510e16a5dbb90535f89fc1ce.jpg",
    "https://i.pinimg.com/564x/1f/82/de/1f82dedb9bfe38e107f15cc38083f123.jpg",
    "https://i.pinimg.com/564x/76/f8/83/76f883d9c12928386f8b640ab8f955e1.jpg",
    "https://i.pinimg.com/564x/8e/fb/44/8efb44e2ae77e3d5bdc6ebe3125fc784.jpg",
    "https://i.pinimg.com/564x/be/a0/b8/bea0b8aeca9457357e293dbaaf04afb7.jpg"
]
global.themeluffy = pickrandom(theme2)
global.themeDeku = pickrandom(theme1)

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})  
