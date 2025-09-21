import React from 'react'
import { User, Bot } from 'lucide-react'
import './Message.css'

const Message = ({ message }) => {
  const isUser = message.sender === 'user'
  
  return (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'} fade-in`}>
      <div className="message-avatar">
        {isUser ? (
          <User className="avatar-icon" />
        ) : (
          <Bot className="avatar-icon bot-avatar" />
        )}
      </div>
      <div className="message-content">
        <div className="message-text">
          {message.text}
        </div>
        <div className="message-time">
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </div>
  )
}

export default Message
