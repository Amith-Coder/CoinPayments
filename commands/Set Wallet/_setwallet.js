/*CMD
  command: /setwallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Set Wallet
  answer: 
  keyboard: 
  aliases: âï¸ set wallet âï¸
CMD*/

let stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  let wallet = User.getProperty("wallet")
  var button = [[{ title: "ð¼ Set / Change TRX Wallet", command: "/wallet" }]]
  Bot.sendInlineKeyboard(
    button,
    "*ð¡ Your currently set TRX wallet is:* \n `" +
      wallet +
      "`\n\nð¹It will be used for *all future withdrawals.*"
  )
}

