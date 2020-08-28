import React from "react";
import dotenv from "dotenv";
dotenv.config();

function Home () {
  let chatUrl = "https://webchat.botframework.com/embed/stem_center_bot?s="+process.env.REACT_APP_CHAT_KEY;
  return (
  <div class = "w3-container">        
        <div class= "w3-container w3-display-middle">
          <h1 id = "h1" class= "w3-animate-top">Fancy a chat?</h1>
          <hr class="w3-border-grey"></hr>      
          <iframe id =  "iframe" title = "Chat with Leo" src={chatUrl}>
          <p>This browser does not support iframes.</p>
          </iframe>
        </div>        
  </div>  
  );
}

export default Home;
