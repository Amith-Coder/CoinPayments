/*CMD
  command: /setReferBonus 
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: ð*Send How Much You Want To Set*
  keyboard: 
  aliases: âï¸ Set Refer Bonus ð¤´
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid == "" + admin + "") {
  Bot.sendMessage("â Done: Your New Refer Bonus is\n " + "`" + message + "`")
  Bot.setProperty("rebon", message, "integer")
} else {
  Bot.sendMessage("âYou are Not Admin")
}

