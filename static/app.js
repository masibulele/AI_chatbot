const chatBody = document.querySelector(".chat-body");
const textInput = document.querySelector("#text-input");
const send = document.querySelector(".send");

// send messages with mouse click
send.addEventListener('click',()=> renderUserMessage());
//send message with enter key
textInput.addEventListener('keyup',(event)=>{
    if(event.keyCode===13){
        renderUserMessage();
    }
});

//  helper function to render message on chat
function renderUserMessage() {
    const userInput = textInput.value ;
    textInput.value="";
    renderMessageEle(userInput,"user");
    setTimeout(()=>{
        renderChatBotResponse(userInput);
        setScrollPosition()
    },600);
    
    
    
}


//helper function to create message for chat
function renderMessageEle(inputText,type){
    let className= "user-message";
    if(type !=="user"){
        className = "chatbot-message";
    }
    const messageElm = document.createElement("div");
    const textNode = document.createTextNode(inputText);
    messageElm.classList.add(className);
    messageElm.append(textNode);
    chatBody.append(messageElm);
}

// helper function to get bot response

function getBotResponse(userInput){

    return (responseObj[userInput] == undefined ? "Please try something else" : responseObj[userInput]);
}

//  render chat bot responses
function renderChatBotResponse(userInput) {
    const res = getBotResponse(userInput);
    renderMessageEle(res)
}


//  scroll helper function automatically scrolls up

function setScrollPosition() {
    if  (chatBody.scrollHeight>0){
       chatBody.scrollTop= chatBody.scrollHeight;
    }
    
}

