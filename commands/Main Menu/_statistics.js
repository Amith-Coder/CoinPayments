/*CMD
  command: /statistics
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Main Menu
  answer: 
  keyboard: 
  aliases: š Statistics š
CMD*/

let cur = Bot.getProperty("cur")
var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
    .value()
    .toFixed(0)

  var stat =
    "*š Total members : " +
    status +
    " Users\n\nā Total successful Withdraw : " +
    userPayment.value().toFixed(0) +
    " " +
    cur +
    "\n\nš Support Us š*"

  Bot.sendInlineKeyboard([[{ title: "šāāļø Back", command: "back" }]], stat)
}

