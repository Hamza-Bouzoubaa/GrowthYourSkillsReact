import './Chat.css';
import React from 'react';



function Chat() {
  return (
    <div class="position-fixed bottom-0 end-0 p-3">
    <div class="d-flex justify-content-end">
      <div class="chat-image">
        <a href="#">
          <img src={`${process.env.PUBLIC_URL}/chat.svg `}alt="Chat" height="60" width="60" />
        </a>
      </div>
    </div>
  </div>
  );
}


export default Chat;



