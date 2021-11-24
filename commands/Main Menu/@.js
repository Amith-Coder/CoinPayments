/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
//var isAdmin = ( user && (user.id == 3027702) )
//if((command.folder=="Admin Panel")&&(isAdmin){
  // only admin can run command from Admin Panel's folder
  // any common bjs here for admin
 // Bot.sendMessage("Hello, admin!")
//}else{
 // Bot.sendMessage("Access denied");
 // return // exit from command now

//} 
