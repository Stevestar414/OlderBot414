const mineflayer = require('mineflayer')
const autoeat = require("mineflayer-auto-eat")
// const fs = require('fs');
// let rawdata = fs.readFileSync('config.json');
// let data = JSON.parse(rawdata);
// var host = data["ip"];
// var username = data["name"]

// var bot = mineflayer.createBot({
//   host: host,
//   username: username
// });


const bot = mineflayer.createBot({
  host:'ir.skyblock.uz',
  // port: 57285,
  username: 'OlderBot'
 })
 
 let continue_digging = true; 

 
bot.once("spawn", () => {
  bot.chat("/login plokplok");
})

bot.on("spawn", () => {
  bot.chat("/is home");
})


bot.on('chat', (username, message) => {
  if (message == 'digolderbot') {
    continue_digging=true;
    dig()  
  }
})

async function dig() {
  if(!continue_digging){return};
  if (!bot.heldItem || !bot.heldItem.name.includes('pickaxe')) {
    var pickaxe = bot.inventory.items().filter(i => i.name.includes('pickaxe'))[0]; 
  if (pickaxe) await bot.equip(pickaxe, 'hand')
  }
  var block = bot.blockAtCursor(4);
  if (!block) return setTimeout (function () { dig(); }, 100);
  await bot.dig(block, 'ignore')
  dig()
}

// bot.on('chat', (username, message) => {
//   if (message == 'stopdigolderbot') {
//     continue_digging=false;
//   }
// })