import React, { useState, useRef, useEffect } from 'react'
import ChatInterface from './components/ChatInterface'
import Header from './components/Header'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "🏆 Sports AI Assistant Ready!\n\n• Player Stats & Achievements - Get detailed career statistics, records, and major accomplishments for any athlete\n• Team Performance Insights - Analyze current form, rankings, win-loss records, and key performance metrics\n• Game Strategies & Tactics - Learn about formations, plays, coaching approaches, and tactical analysis\n• Historical Moments - Discover legendary games, record-breaking performances, and iconic sporting events\n• Current News & Updates - Stay informed with the latest sports news, transfers, and developments\n\nWhat would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (text) => {
    const userMessage = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      
      const botMessage = {
        id: Date.now() + 1,
        text: data.response,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting to the AI service. Please make sure Ollama is running with Llama 3.2 model loaded.",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="app">
      <Header />
      <ChatInterface 
        messages={messages}
        onSendMessage={sendMessage}
        isLoading={isLoading}
        messagesEndRef={messagesEndRef}
      />
    </div>
  )
}

export default App
