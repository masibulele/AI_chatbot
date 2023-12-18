const chatBody = document.querySelector(".chat-body");
const textInput = document.querySelector("#text-input");
const send = document.querySelector(".send");

// send messages with mouse click
send.addEventListener('click',()=> {
    
    renderUserMessage()
});
//send message with enter key
textInput.addEventListener('keyup',(event)=>{
    if(event.keyCode===13){
        
        renderUserMessage();
    }
});

//  helper function to render message on chat
function renderUserMessage() {
    const userInput = textInput.value ;
    
    renderMessageEle(userInput,"user");
    setTimeout(()=>{
        sendData(userInput);
        setScrollPosition()
    },1);
    
    textInput.value="";
    
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
// function renderChatBotResponse(userInput) {
//     // const res = getBotResponse(userInput);
//     const res = sendData(userInput);
//     //renderMessageEle(res)
// }


//  scroll helper function automatically scrolls up

function setScrollPosition() {
    if  (chatBody.scrollHeight>0){
       chatBody.scrollTop= chatBody.scrollHeight;
    }
    
}

// test function send data to server
function sendData(userInput) {
    let botAns 
    $.ajax({
        url: '/get',
        type: 'POST',
        data: {
            msg: userInput,	
        }
        
    }).done((data)=>{
        console.log('i am in the done function');
        botAns = data;
        renderMessageEle(data)
        console.log(botAns);
    })
    


  return  botAns
}

