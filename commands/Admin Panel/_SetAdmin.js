/*CMD
  command: /SetAdmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 📌*Send Id*
  keyboard: 
  aliases: /SetAd
CMD*/

var key = "1493164653"
if (user.telegramid == key) {
  Bot.sendMessage("✅ Done: Admin Id is\n " + "`" + message + "`")
  Bot.setProperty("admin", message, "string")
} else {
  Bot.sendMessage("*❌ You Are Not Allowed To Set Admin*")
}

