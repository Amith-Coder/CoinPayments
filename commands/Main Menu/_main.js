/*CMD
  command: /main
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Main Menu
  answer: 
  keyboard: 
  aliases: πback to menu, π back, /menu, back
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var button = [
  [{ title: "π¨βπ« Balance", command: "π΅ Balance π΅" }],
  [
    { title: "π¨βπ€ Referral", command: "π€΄Referralπ€΄" },
    { title: "π Bonus", command: "π Bonus π" }
  ],
  [
    { title: "π¨βπ¨ Withdraw", command: "βοΈWithdrawβοΈ" },
    { title: "π Set Wallet", command: "/setwallet" }
  ],
  [{ title: "π Statistics", command: "π Statistics π" }]
]
var user = User.getProperty("status")
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  var balance = Libs.ResourcesLib.userRes("balance")
  var withdrawn = Libs.ResourcesLib.userRes("withdrawn")
  var ref = Libs.ResourcesLib.userRes("referral")
  var msgid = User.getProperty("msgid")
  Api.deleteMessage({
    message_id: msgid
  })
  Bot.sendInlineKeyboard(button, "*π¨βπ¦³ Refer and Earn TRX*")
}
if (user == "left") {
  Bot.runCommand("/start")
}
Bot.runCommand("reff")

