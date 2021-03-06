/*CMD
  command: /withtrx
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var withdraw = Libs.ResourcesLib.userRes("withdraw")
var wallet = User.getProperty("wallet")
var balance = Libs.ResourcesLib.userRes("balance")
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*š Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  return
}

if (message < 1) {
  Bot.sendMessage("ā Minimum amount to withdraw 1 TRX")
} else {
  if (message > balance.value()) {
    Bot.sendMessage(
      "_š« You Can Withdraw Maximum: " + balance.value().toFixed(6) + " TRX"
    )
  } else {
    if (message >= 1 && message <= 20000) {
      var amo = message
      User.setProperty("amo", amo, "string")
      Libs.CoinPayments.apiCall({
        fields: {
          cmd: "create_withdrawal",
          amount: message,
          currency: "TRX",
          address: wallet,
          auto_confirm: 1
        },
        onSuccess: "/onSuccesstrx"
      })

      balance.add(-message)
      withdraw.add(+message)
      userPayment.add(+message)
    } else {
      Bot.sendInlineKeyboard(
    [[{ title: "šāāļø Back", command: "back" }]],
        "*ā Withdrawal Requested\nYou will receive your payment in 24 hours*\n\n*š³ Transaction Details:*\n" +
          amo +
          " *TRX* to the wallet\n" +
          wallet
      )
      Bot.sendMessageToChatWithId(
        1493164653,
        "[" +
          user.telegramid +
          "](tg://user?id=" +
          user.telegramid +
          ")" +
          "\n\nā Withdrawal RequesteD" +
          "\n" +
          "\n" +
          "\nš³ Transaction Details:\n" +
          amo +
          " TRX to the wallet\n" +
          wallet
      )
      balance.add(-message)
      withdraw.add(+message)
      userPayment.add(+message)
    }
  }
}

