@echo off
echo 🏆 Setting up Sports AI Chatbot...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first:
    echo    https://nodejs.org/
    pause
    exit /b 1
)

REM Check if Ollama is installed
ollama --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Ollama is not installed. Please install Ollama first:
    echo    https://ollama.ai/
    pause
    exit /b 1
)

echo ✅ Node.js and Ollama are installed
echo.

REM Install frontend dependencies
echo 📦 Installing frontend dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install frontend dependencies
    pause
    exit /b 1
)

REM Install backend dependencies
echo 📦 Installing backend dependencies...
cd server
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install backend dependencies
    pause
    exit /b 1
)
cd ..

REM Check if llama3.2 model is available
echo 🤖 Checking for Llama 3.2 model...
ollama list | findstr "llama3.2" >nul
if %errorlevel% neq 0 (
    echo 📥 Downloading Llama 3.2 model (this may take a while)...
    ollama pull llama3.2
    if %errorlevel% neq 0 (
        echo ❌ Failed to download Llama 3.2 model
        pause
        exit /b 1
    )
)

echo.
echo ✅ Setup complete!
echo.
echo 🚀 To start the application:
echo    1. Start Ollama: ollama serve
echo    2. Start backend: npm run server
echo    3. Start frontend: npm run dev
echo.
echo 🌐 The app will be available at: http://localhost:3000
echo.
pause
