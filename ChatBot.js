$(document).ready(function() {
  $("#BackBtn").click(function() {
    goBack();
  });
  
  function goBack(){
    console.log("dfhsa");
    window.location.href="ChatBotMain.html";
  }
  $("#ChatBot").show();
  let userInputEl = $("#userInput");
  let chatContainerEl = $("#chatContainer");
  let formInfo = JSON.parse(localStorage.getItem("formData"));
  let questionReplies = {
    "Hi": "Hello! " + formInfo['name'] + ", How can I help you?",
    "Hey": "Hey there!",
    "Good Morning": "Good Morning! How can I assist you today?",
    "Good Evening": "Good Evening! How may I help you?",
    "How can I help you?": "I'm here to answer your questions. What would you like to know?",
    "Thank You": "You're welcome!",
    "nice to chat with you": "Likewise!",
    "hi": "Hello! " + formInfo['name'] + ", How can I help you?",
    "Helo": "Hello! " + formInfo['name'] + ", How can I help you?",
    "hello": "Hello! " + formInfo['name'] + ", How can I help you?",
    "good morning": "Good Morning! How can I assist you today?",
    "good evening": "Good Evening! How may I help you?",
    "I Want to change field":"which field do You want to Switch to?",
    "Knowledge":function(){
      formInfo.field="Knowledge";
      localStorage.removeItem("formData");
      localStorage.setItem("formData",JSON.stringify(formInfo));
      changeFiled();
   },
   "Entertainment":function(){
    formInfo.field="Entertainment";
    localStorage.removeItem("formData");
    localStorage.setItem("formData",JSON.stringify(formInfo));
    letsChatGo();
 },
   "Shopping":function(){
    formInfo.field="Shopping";
    localStorage.setItem("formData",JSON.stringify(formInfo));
    letsChatGo();
 }
    

  };
 
  function letsChatGo() {
    let userMsg = userInputEl.val();
    let userMsgEl = $("<span>").text(userMsg).addClass("msg-to-chatbot");

    let chatbotContainer = $("<div>").addClass("msg-to-chatbot-container");
    chatContainerEl.append(chatbotContainer);
    chatbotContainer.append(userMsgEl);
    userInputEl.val("");
   
    replyFromChatbot(userMsg);
  }

  function replyFromChatbot(userMsg) {
    let selectedField = formInfo.field;
  
    let msgContainerEl = $("<div>").addClass("msg-from-chatbot-container");
  chatContainerEl.append(msgContainerEl);

  let replyMsg = questionReplies[userMsg] || "I'm sorry, I don't have a specific answer to that question.";
  let chatbotMsgEl = $("<span>").addClass("msg-from-chatbot");
  msgContainerEl.append(chatbotMsgEl);
  if (typeof questionReplies[userMsg] === 'function') {
    // If the value is a function, execute it and assign the result to replyMsg
    replyMsg = questionReplies[userMsg]();
  } else {
    // If the value is a string, assign it directly to replyMsg
    replyMsg = questionReplies[userMsg] || "I'm sorry, I don't have a specific answer to that question.";
  }
    animateBotReply(replyMsg, chatbotMsgEl);
    
    if (selectedField === "Entertainment") {
      replyMsg = questionReplies[userMsg] || "Entertainment Ke liye WelCome!!!";
      let chatbotMsgEl1 = $("<span>").addClass("msg-from-chatbot");
      msgContainerEl.append(chatbotMsgEl1);

      animateBotReply(replyMsg, chatbotMsgEl1);
      
      setTimeout(function() {
        let replyMsg1 = "Wanna Learn Java  ";
        replyMsg1 += "You can explore it";
        let chatbotMsgEl1 = $("<span>").addClass("msg-from-chatbot");
        msgContainerEl.append(chatbotMsgEl1);
        
        animateBotReply(replyMsg1, chatbotMsgEl1);
        let linkEl = $("<a>")
        .attr("href", "https://jokesjone.ccbp.tech/")
        .attr("target", "_blank")
        .text("here");
      
      let chatbotMsgEl2 = $("<span>").addClass("msg-from-chatbot");
      msgContainerEl.append(chatbotMsgEl2);
      chatbotMsgEl2.append(linkEl);
      
      animateBotReply(linkEl,chatbotMsgEl2);
      }, 2000);
    }
    else if (selectedField === "Knowledge") {
      replyMsg = "Try to get more knowledge. All we know is just a drop in the whole Ocean of Knowledge.";
      let chatbotMsgEl1 = $("<span>").addClass("msg-from-chatbot");
      msgContainerEl.append(chatbotMsgEl1);

      animateBotReply(replyMsg, chatbotMsgEl1);
      
      setTimeout(function() {
        let replyMsg1 = "Wanna Learn Java  ";
        replyMsg1 += "You can explore it";
        let chatbotMsgEl1 = $("<span>").addClass("msg-from-chatbot");
        msgContainerEl.append(chatbotMsgEl1);
        
        animateBotReply(replyMsg1, chatbotMsgEl1);
        let linkEl = $("<a>")
        .attr("href", "https://www.javatpoint.com/java-tutorial")
        .attr("target", "_blank")
        .text("here");
      
      let chatbotMsgEl2 = $("<span>").addClass("msg-from-chatbot");
      msgContainerEl.append(chatbotMsgEl2);
      chatbotMsgEl2.append(linkEl);
      
      animateBotReply(linkEl,chatbotMsgEl2);
      }, 2000);
    } else if (selectedField === "Shopping") {
      replyMsg = questionReplies[userMsg] || "Choose the Best Food. Health is Wealth!";
      let chatbotMsgEl1 = $("<span>").addClass("msg-from-chatbot");
      msgContainerEl.append(chatbotMsgEl1);

      animateBotReply(replyMsg, chatbotMsgEl1);
      
      setTimeout(function() {
        let replyMsg1 = "Wanna Order some Food ?";
        replyMsg1 += "You can explore it";
        let chatbotMsgEl1 = $("<span>").addClass("msg-from-chatbot");
        msgContainerEl.append(chatbotMsgEl1);
        
        animateBotReply(replyMsg1, chatbotMsgEl1);
        let linkEl = $("<a>")
        .attr("href","https://areyoufoody.ccbp.tech/")
        .attr("target", "_blank")
        .text("here");
      
      let chatbotMsgEl2 = $("<span>").addClass("msg-from-chatbot");
      msgContainerEl.append(chatbotMsgEl2);
      chatbotMsgEl2.append(linkEl);
      
      animateBotReply(linkEl,chatbotMsgEl2);
      }, 2000);
    } else {
      replyMsg = "I'm sorry, I don't have a specific answer to that question.";
      let chatbotMsgEl1 = $("<span>").addClass("msg-from-chatbot");
      msgContainerEl.append(chatbotMsgEl1);

      animateBotReply(replyMsg, chatbotMsgEl1);
    }
  }
  function changeFiled(){
    let userMsg = userInputEl.val();
    let userMsgEl = $("<span>").text(userMsg).addClass("msg-to-chatbot");

    let chatbotContainer = $("<div>").addClass("msg-to-chatbot-container");
    chatContainerEl.append(chatbotContainer);
    chatbotContainer.append(userMsgEl);
    userInputEl.val("");

    let selectedField = formInfo.field;
  
    let msgContainerEl = $("<div>").addClass("msg-from-chatbot-container");
  chatContainerEl.append(msgContainerEl);
    if (selectedField === "Entertainment") {
      replyMsg = questionReplies[userMsg] || "Entertainment Ke liye WelCome!!!";
      let chatbotMsgEl1 = $("<span>").addClass("msg-from-chatbot");
      msgContainerEl.append(chatbotMsgEl1);

      animateBotReply(replyMsg, chatbotMsgEl1);
      
      setTimeout(function() {
        let replyMsg1 = "Wanna Learn Java  ";
        replyMsg1 += "You can explore it";
        let chatbotMsgEl1 = $("<span>").addClass("msg-from-chatbot");
        msgContainerEl.append(chatbotMsgEl1);
        
        animateBotReply(replyMsg1, chatbotMsgEl1);
        let linkEl = $("<a>")
        .attr("href", "https://jokesjone.ccbp.tech/")
        .attr("target", "_blank")
        .text("here");
      
      let chatbotMsgEl2 = $("<span>").addClass("msg-from-chatbot");
      msgContainerEl.append(chatbotMsgEl2);
      chatbotMsgEl2.append(linkEl);
      
      animateBotReply(linkEl,chatbotMsgEl2);
      }, 2000);
    }
    else if (selectedField === "Knowledge") {
      replyMsg = questionReplies[userMsg] || "Try to get more knowledge. All we know is just a drop in the whole Ocean of Knowledge.";
      let chatbotMsgEl1 = $("<span>").addClass("msg-from-chatbot");
      msgContainerEl.append(chatbotMsgEl1);

      animateBotReply(replyMsg, chatbotMsgEl1);
      
      setTimeout(function() {
        let replyMsg1 = "Wanna Learn Java  ";
        replyMsg1 += "You can explore it";
        let chatbotMsgEl1 = $("<span>").addClass("msg-from-chatbot");
        msgContainerEl.append(chatbotMsgEl1);
        
        animateBotReply(replyMsg1, chatbotMsgEl1);
        let linkEl = $("<a>")
        .attr("href", "https://www.javatpoint.com/java-tutorial")
        .attr("target", "_blank")
        .text("here");
      
      let chatbotMsgEl2 = $("<span>").addClass("msg-from-chatbot");
      msgContainerEl.append(chatbotMsgEl2);
      chatbotMsgEl2.append(linkEl);
      
      animateBotReply(linkEl,chatbotMsgEl2);
      }, 2000);
    } else if (selectedField === "Shopping") {
      replyMsg = questionReplies[userMsg] || "Choose the Best Food. Health is Wealth!";
      let chatbotMsgEl1 = $("<span>").addClass("msg-from-chatbot");
      msgContainerEl.append(chatbotMsgEl1);

      animateBotReply(replyMsg, chatbotMsgEl1);
      
      setTimeout(function() {
        let replyMsg1 = "Wanna Order some Food ?";
        replyMsg1 += "You can explore it";
        let chatbotMsgEl1 = $("<span>").addClass("msg-from-chatbot");
        msgContainerEl.append(chatbotMsgEl1);
        
        animateBotReply(replyMsg1, chatbotMsgEl1);
        let linkEl = $("<a>")
        .attr("href","https://areyoufoody.ccbp.tech/")
        .attr("target", "_blank")
        .text("here");
      
      let chatbotMsgEl2 = $("<span>").addClass("msg-from-chatbot");
      msgContainerEl.append(chatbotMsgEl2);
      chatbotMsgEl2.append(linkEl);
      
      animateBotReply(linkEl,chatbotMsgEl2);
      }, 2000);
    }
     else {
      replyMsg = "I'm sorry, I don't have a specific answer to that question.";
      let chatbotMsgEl1 = $("<span>").addClass("msg-from-chatbot");
      msgContainerEl.append(chatbotMsgEl1);

      animateBotReply(replyMsg, chatbotMsgEl1);
    }
  }

  function animateBotReply(replyMsg, chatbotMsgEl) {
    let words = replyMsg.split(" ");
    let index = 0;

    let interval = setInterval(function() {
      chatbotMsgEl.html(chatbotMsgEl.html() + " " + words[index]);
      index++;

      if (index >= words.length) {
        clearInterval(interval);
      }
    }, 200);
  }

  $("#sendMsgBtn").click(function() {
    letsChatGo();
  });
  
  localStorage.removeItem("name");
  localStorage.removeItem("email");

  userInputEl.on("keyup", function(event) {
    if (event.keyCode === 13) {
      letsChatGo();
    }
  });
 
});
