import React from 'react'
import Message from './Message'
import LoadingMessage from './LoadingMessage'
import './MessageList.css'

const MessageList = ({ messages, isLoading, messagesEndRef }) => {
  return (
    <div className="message-list">
      <div className="messages-container">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        {isLoading && <LoadingMessage />}
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}

export default MessageList
