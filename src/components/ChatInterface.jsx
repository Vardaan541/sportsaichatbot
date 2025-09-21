import React, { useState } from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import './ChatInterface.css'

const ChatInterface = ({ messages, onSendMessage, isLoading, messagesEndRef }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue.trim())
      setInputValue('')
    }
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const quickQuestions = [
    "Who won the last World Cup?",
    "Tell me about LeBron James",
    "What's the history of the Olympics?",
    "Explain football tactics",
    "Who are the best tennis players?"
  ]

  const handleQuickQuestion = (question) => {
    onSendMessage(question)
  }

  return (
    <div className="chat-interface">
      <MessageList 
        messages={messages} 
        isLoading={isLoading}
        messagesEndRef={messagesEndRef}
      />
      
      {messages.length === 1 && (
        <div className="quick-questions">
          <h3>Quick Questions:</h3>
          <div className="question-buttons">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                className="quick-question-btn"
                onClick={() => handleQuickQuestion(question)}
                disabled={isLoading}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <MessageInput
        value={inputValue}
        onChange={handleInputChange}
        onSend={handleSend}
        isLoading={isLoading}
      />
    </div>
  )
}

export default ChatInterface
