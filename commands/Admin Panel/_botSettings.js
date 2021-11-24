/*CMD
  command: /botSettings
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel
  answer: 
  keyboard: 
  aliases: /bots
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var admin = Bot.getProperty("admin")
if (user.telegramid == "" + admin + "") {
  var button = [
    [
      { title: "👥Clone This Bot🤖", command: "/cloneThis" },
      { title: "🚦User Illertaion", command: "🚦User Illertaion" }
    ],
    [{ title: "🔙Back", command: "Admin" }]
  ]
  Bot.sendInlineKeyboard(button, "*🤖Bot Setting Area*")
} else {
  Bot.sendMessage("❌You are Not Admin")
}

