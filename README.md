# 🏆 Sports AI Chatbot

A modern, sports-themed AI chatbot powered by Llama 3.2 via Ollama. Ask questions about any sport and get intelligent, contextual responses!

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/Vardaan541/sportsaichatbot)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Ollama](https://img.shields.io/badge/Ollama-Llama%203.2-orange?style=for-the-badge)](https://ollama.ai/)

## ✨ Features

- **Sports-Focused AI**: Specialized prompts for comprehensive sports knowledge
- **Modern UI**: Beautiful, responsive design with sports star imagery
- **Real-time Chat**: Instant responses with typing indicators
- **Quick Questions**: Pre-built questions to get you started
- **Mobile Responsive**: Works perfectly on all devices
- **Sports Context**: AI understands sports terminology, stats, and history

## 🚀 Quick Start

### Prerequisites

1. **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
2. **Ollama** - [Download here](https://ollama.ai/)
3. **Git** - [Download here](https://git-scm.com/)

### Easy Setup (Recommended)

**For Windows:**
```bash
git clone https://github.com/Vardaan541/sportsaichatbot.git
cd sportsaichatbot
setup.bat
```

**For macOS/Linux:**
```bash
git clone https://github.com/Vardaan541/sportsaichatbot.git
cd sportsaichatbot
chmod +x setup.sh
./setup.sh
```

**For PowerShell:**
```powershell
git clone https://github.com/Vardaan541/sportsaichatbot.git
cd sportsaichatbot
.\setup.ps1
```

### Manual Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vardaan541/sportsaichatbot.git
   cd sportsaichatbot
   ```

2. **Install Llama 3.2 model**:
   ```bash
   ollama pull llama3.2
   ```

3. **Install dependencies**:
   ```bash
   # Install frontend dependencies
   npm install
   
   # Install backend dependencies
   cd server
   npm install
   cd ..
   ```

4. **Start the application**:
   ```bash
   # Terminal 1: Start Ollama
   ollama serve
   
   # Terminal 2: Start the backend server
   npm run server
   
   # Terminal 3: Start the frontend
   npm run dev
   ```

5. **Open your browser** and go to `http://localhost:3000`

## 🎯 Usage

### Sample Questions to Try:

- "Who won the last FIFA World Cup?"
- "Tell me about LeBron James' career"
- "What are the rules of cricket?"
- "Who holds the record for most Olympic gold medals?"
- "Explain the offside rule in football"
- "What's the history of the Super Bowl?"
- "Who are the greatest tennis players of all time?"

### Quick Questions

The chatbot includes quick question buttons to help you get started:
- World Cup winners
- Player information
- Olympic history
- Football tactics
- Tennis legends

## 🏗️ Project Structure

```
sports-ai-chatbot/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx      # App header with sports stars
│   │   ├── ChatInterface.jsx
│   │   ├── MessageList.jsx
│   │   ├── Message.jsx
│   │   ├── MessageInput.jsx
│   │   └── LoadingMessage.jsx
│   ├── App.jsx             # Main app component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── server/
│   └── index.js           # Express backend server
├── package.json           # Frontend dependencies
└── README.md
```

## 🎨 Design Features

- **Sports Theme**: Gradient backgrounds, sports star images, trophy icons
- **Modern UI**: Glass-morphism effects, smooth animations
- **Responsive**: Works on desktop, tablet, and mobile
- **Accessibility**: Proper contrast, keyboard navigation
- **Loading States**: Typing indicators and smooth transitions

## 🔧 Technical Details

### Frontend
- **React 18** with modern hooks
- **Vite** for fast development and building
- **Lucide React** for beautiful icons
- **CSS3** with gradients and animations

### Backend
- **Express.js** server
- **Axios** for HTTP requests to Ollama
- **CORS** enabled for cross-origin requests
- **Sports-specific prompts** for better AI responses

### AI Integration
- **Ollama** with Llama 3.2 model
- **Custom system prompts** for sports expertise
- **Error handling** for connection issues
- **Health checks** for service monitoring

## 🛠️ Development

### Available Scripts

```bash
# Frontend development
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Backend development
npm run server       # Start Express server
cd server && npm run dev  # Start with nodemon
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
NODE_ENV=development
```

## 🐛 Troubleshooting

### Common Issues

1. **"Cannot connect to Ollama"**
   - Make sure Ollama is running: `ollama serve`
   - Verify llama3.2 model is loaded: `ollama list`

2. **Frontend not loading**
   - Check if backend is running on port 5000
   - Verify Vite dev server is running on port 3000

3. **Slow responses**
   - Llama 3.2 is a large model, responses may take 10-30 seconds
   - Consider using a smaller model for faster responses

### Health Check

Visit `http://localhost:5000/api/health` to check if Ollama is connected.

## 🚀 Deployment

### Production Build

```bash
# Build frontend
npm run build

# Start production server
NODE_ENV=production npm run server
```

### Docker (Optional)

```dockerfile
# Dockerfile example
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "run", "server"]
```

## 📝 License

MIT License - feel free to use this project for your own sports chatbot!

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Ollama](https://ollama.ai/) for providing the AI infrastructure
- [Llama 3.2](https://ollama.ai/library/llama3.2) for the language model
- [React](https://reactjs.org/) for the frontend framework
- [Express.js](https://expressjs.com/) for the backend server

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/Vardaan541/sportsaichatbot/issues) page
2. Create a new issue with detailed information
3. Join our discussions for community support

---

**Enjoy chatting about sports with your AI assistant! 🏆⚽🏀🎾**

⭐ **Star this repository if you found it helpful!**
