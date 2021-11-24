/*CMD
  command: /addBalance2
  help: AddBal
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: _✍️Enter How Much You Want To Add_
  keyboard: 
  aliases: /AddBal
CMD*/

var admin = Bot.getProperty("admin")
let cur = Bot.getProperty("cur")
if (user.telegramid == "" + admin + "") {
  let amount = parseFloat(message)
  let tgid = User.getProperty("id")
  let res = Libs.ResourcesLib.anotherUserRes("balance", tgid)
  res.add(parseFloat(amount))
  Bot.sendMessage(
    "*The amount " +
      amount +
      " " +
      cur +
      " has been added to the User ID: * " +
      tgid +
      " * balance*"
  )
  Bot.sendMessageToChatWithId(
    tgid,
    "*🎁 You have just received " + amount + " " + cur + " from admin.*"
  )
} else {
  if (user.telegramid == "" + admin + "") {
    let amount = parseFloat(message)
    let tgid = User.getProperty("id")
    let res = Libs.ResourcesLib.anotherUserRes("balance", tgid)
    res.add(parseFloat(amount))
    Bot.sendMessage(
      "*The amount " +
        amount +
        " " +
        cur +
        " has been added to the User ID: * " +
        tgid +
        " * balance*"
    )
    Bot.sendMessageToChatWithId(
      tgid,
      "*🎁 You have just received " + amount + " " + cur + " from admin.*"
    )
  } else {
    return
  }
}

