import React from 'react'
import { User, Bot } from 'lucide-react'
import './Message.css'

const Message = ({ message }) => {
  const isUser = message.sender === 'user'
  
  // Format text with proper bullet points and line breaks
  const formatText = (text) => {
    if (isUser) {
      return text
    }
    
    // Split by lines and format bullet points
    const lines = text.split('\n')
    return lines.map((line, index) => {
      const trimmedLine = line.trim()
      
      // Skip empty lines
      if (!trimmedLine) {
        return null
      }
      
      // Check if line starts with bullet point indicators
      if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-') || trimmedLine.startsWith('*')) {
        // Remove the bullet character and format the content
        const content = trimmedLine.substring(1).trim()
        return (
          <div key={index} className="bullet-point">
            <span className="point-content">{content}</span>
          </div>
        )
      }
      
      // Check if line starts with numbers (numbered lists)
      if (/^\d+\./.test(trimmedLine)) {
        return (
          <div key={index} className="numbered-point">
            <span className="point-content">{trimmedLine}</span>
          </div>
        )
      }
      
      // Regular text with better formatting
      return (
        <div key={index} className="regular-text">
          {trimmedLine}
        </div>
      )
    }).filter(Boolean) // Remove null entries
  }
  
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
          {formatText(message.text)}
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
