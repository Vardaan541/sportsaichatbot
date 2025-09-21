import React from 'react'
import { Bot } from 'lucide-react'
import './LoadingMessage.css'

const LoadingMessage = () => {
  return (
    <div className="message bot-message fade-in">
      <div className="message-avatar">
        <Bot className="avatar-icon bot-avatar" />
      </div>
      <div className="message-content">
        <div className="message-text loading-text">
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="loading-text-content">Thinking about sports...</span>
        </div>
      </div>
    </div>
  )
}

export default LoadingMessage
