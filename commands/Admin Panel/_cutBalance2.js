/*CMD
  command: /cutBalance2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: _✍️Enter How Much You Want To Add_
  keyboard: 
  aliases: /CutBal 
CMD*/

var admin = Bot.getProperty("admin")
let cur = Bot.getProperty("cur")
if (user.telegramid == "" + admin + "") {
  let amount = parseFloat(message)
  let tgid = User.getProperty("id")
  let res = Libs.ResourcesLib.anotherUserRes("balance", tgid)
  res.remove(parseFloat(amount))
  Bot.sendMessage(
    "*The amount " +
      amount +
      " " +
      cur +
      " has been added to the User ID: * " +
      tgid +
      " * balance*"
  )
} else {
  if (user.telegramid == "" + admin + "") {
    let amount = parseFloat(message)
    let tgid = User.getProperty("id")
    let res = Libs.ResourcesLib.anotherUserRes("balance", tgid)
    res.remove(parseFloat(amount))
    Bot.sendMessage(
      "*The amount " +
        amount +
        " " +
        cur +
        " has been added to the User ID: * " +
        tgid +
        " * balance*"
    )
  } else {
    return
  }
}

