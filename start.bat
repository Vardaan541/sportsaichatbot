@echo off
echo 🏆 Starting Sports AI Chatbot...
echo.

echo 📦 Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install frontend dependencies
    pause
    exit /b 1
)

cd server
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install backend dependencies
    pause
    exit /b 1
)
cd ..

echo.
echo 🚀 Starting backend server...
start "Sports AI Backend" cmd /k "cd server && npm start"

echo.
echo ⏳ Waiting for backend to start...
timeout /t 3 /nobreak > nul

echo.
echo 🌐 Starting frontend...
start "Sports AI Frontend" cmd /k "npm run dev"

echo.
echo ✅ Sports AI Chatbot is starting up!
echo 📡 Backend: http://localhost:5000
echo 🌐 Frontend: http://localhost:3000
echo.
echo ⚠️  Make sure Ollama is running with llama3.2 model loaded!
echo    Run: ollama serve
echo    Then: ollama pull llama3.2
echo.
pause
