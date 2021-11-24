/*CMD
  command: /mainSettings
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel
  answer: 
  keyboard: 
  aliases: /mains
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
    [{ title: "⚙️Set Currency 💵", command: "⚙️Set Currency 💵" }],
    [
      { title: "⚙️Set Daily Bonus", command: "⚙️Set Daily Bonus" },
      { title: "⚙️ Set Refer Bonus 🤴", command: "⚙️ Set Refer Bonus 🤴" }
    ],
    [{ title: "🔙Back", command: "Admin" }]
  ]
  Bot.sendInlineKeyboard(button, "*🚨Main Setting Area*")
} else {
  Bot.sendMessage("❌You are Not Admin")
}

