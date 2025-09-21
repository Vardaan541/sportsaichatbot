import React from 'react'
import { Send, Mic } from 'lucide-react'
import './MessageInput.css'

const MessageInput = ({ value, onChange, onSend, isLoading }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSend(e)
    }
  }

  return (
    <div className="message-input-container">
      <form onSubmit={onSend} className="message-input-form">
        <div className="input-wrapper">
          <textarea
            value={value}
            onChange={onChange}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about sports... (e.g., 'Who won the last World Cup?')"
            className="message-input"
            rows="1"
            disabled={isLoading}
          />
          <div className="input-actions">
            <button
              type="button"
              className="mic-button"
              disabled={isLoading}
              title="Voice input (coming soon)"
            >
              <Mic className="mic-icon" />
            </button>
            <button
              type="submit"
              className="send-button"
              disabled={!value.trim() || isLoading}
            >
              <Send className="send-icon" />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default MessageInput
