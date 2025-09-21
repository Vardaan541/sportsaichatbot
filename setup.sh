#!/bin/bash

echo "🏆 Setting up Sports AI Chatbot..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first:"
    echo "   https://nodejs.org/"
    exit 1
fi

# Check if Ollama is installed
if ! command -v ollama &> /dev/null; then
    echo "❌ Ollama is not installed. Please install Ollama first:"
    echo "   https://ollama.ai/"
    exit 1
fi

echo "✅ Node.js and Ollama are installed"
echo ""

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd server
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install backend dependencies"
    exit 1
fi
cd ..

# Check if llama3.2 model is available
echo "🤖 Checking for Llama 3.2 model..."
if ! ollama list | grep -q "llama3.2"; then
    echo "📥 Downloading Llama 3.2 model (this may take a while)..."
    ollama pull llama3.2
    if [ $? -ne 0 ]; then
        echo "❌ Failed to download Llama 3.2 model"
        exit 1
    fi
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "🚀 To start the application:"
echo "   1. Start Ollama: ollama serve"
echo "   2. Start backend: npm run server"
echo "   3. Start frontend: npm run dev"
echo ""
echo "🌐 The app will be available at: http://localhost:3000"
echo ""
