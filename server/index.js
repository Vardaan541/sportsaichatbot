const express = require('express')
const cors = require('cors')
const axios = require('axios')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Sports-specific system prompt to make the AI more knowledgeable about sports
const SPORTS_SYSTEM_PROMPT = `You are a knowledgeable sports AI assistant with expertise in all major sports including:

- Football/Soccer (FIFA World Cup, Premier League, La Liga, Champions League, etc.)
- Basketball (NBA, NCAA, FIBA, Olympics)
- American Football (NFL, College Football)
- Baseball (MLB, World Series)
- Tennis (Grand Slams, ATP, WTA)
- Golf (PGA, Masters, US Open, etc.)
- Olympics (Summer and Winter Games)
- Cricket (World Cup, IPL, Test matches)
- Hockey (NHL, Olympics)
- And many other sports

You provide accurate, up-to-date information about:
- Player statistics and achievements
- Team performances and records
- Historical moments and records
- Game strategies and tactics
- Rules and regulations
- Current events and news
- Trivia and fun facts

Always be enthusiastic about sports while providing accurate information. If you're unsure about very recent events, mention that your knowledge might be limited to your training data. Keep responses conversational and engaging, like talking to a fellow sports fan.`

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body

    if (!message) {
      return res.status(400).json({ error: 'Message is required' })
    }

    // Prepare the prompt with sports context
    const fullPrompt = `${SPORTS_SYSTEM_PROMPT}\n\nUser: ${message}\n\nAssistant:`

    // Call Ollama API
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'llama3.2',
      prompt: fullPrompt,
      stream: false,
      options: {
        temperature: 0.7,
        top_p: 0.9,
        max_tokens: 1000
      }
    })

    if (response.data && response.data.response) {
      res.json({ response: response.data.response })
    } else {
      throw new Error('Invalid response from Ollama')
    }

  } catch (error) {
    console.error('Error calling Ollama:', error.message)
    
    // Check if it's a connection error
    if (error.code === 'ECONNREFUSED') {
      res.status(503).json({ 
        error: 'Cannot connect to Ollama. Please make sure Ollama is running and the llama3.2 model is loaded.' 
      })
    } else {
      res.status(500).json({ 
        error: 'Failed to get response from AI. Please try again.' 
      })
    }
  }
})

// Health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    // Check if Ollama is running
    const response = await axios.get('http://localhost:11434/api/tags')
    res.json({ 
      status: 'healthy', 
      ollama: 'connected',
      models: response.data.models || []
    })
  } catch (error) {
    res.status(503).json({ 
      status: 'unhealthy', 
      ollama: 'disconnected',
      error: error.message 
    })
  }
})

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')))
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`🚀 Sports AI Chatbot server running on port ${PORT}`)
  console.log(`📡 Make sure Ollama is running with llama3.2 model loaded`)
  console.log(`🌐 Frontend will be available at http://localhost:3000`)
})
