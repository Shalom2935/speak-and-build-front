import React, { useState } from 'react'
import AppList from '../../components/AppList/AppList'
import Conversation from '../../components/Conversation/Conversation'
import ChatInput from '../../components/ChatInput/ChatInput'
import AppRender from '../../components/AppRender/AppRender'

function ChatMainWindow() {
  const [messages, setMessages] = useState([
    { id: Date.now(), text: 'Hello! How can I assist you?', sender: 'bot' },
  ]);
  const userMessage = { id: Date.now(), text: message, sender: 'user' };
  setMessages((prevMessages) => [...prevMessages, userMessage]);

  return (
    <div className='chatwindow'>
      <AppList />
      <div className="chatwindow_chat">
        <Conversation />
        <ChatInput  />
      </div>
      <AppRender />
    </div>
  )
}

export default ChatMainWindow