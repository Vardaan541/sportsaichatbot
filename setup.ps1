Write-Host "🏆 Setting up Sports AI Chatbot..." -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js is installed: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js first:" -ForegroundColor Red
    Write-Host "   https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if Ollama is installed
try {
    $ollamaVersion = ollama --version
    Write-Host "✅ Ollama is installed: $ollamaVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Ollama is not installed. Please install Ollama first:" -ForegroundColor Red
    Write-Host "   https://ollama.ai/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

# Install frontend dependencies
Write-Host "📦 Installing frontend dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install frontend dependencies" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

# Install backend dependencies
Write-Host "📦 Installing backend dependencies..." -ForegroundColor Yellow
Set-Location server
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install backend dependencies" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}
Set-Location ..

# Check if llama3.2 model is available
Write-Host "🤖 Checking for Llama 3.2 model..." -ForegroundColor Yellow
$ollamaList = ollama list
if ($ollamaList -notmatch "llama3.2") {
    Write-Host "📥 Downloading Llama 3.2 model (this may take a while)..." -ForegroundColor Yellow
    ollama pull llama3.2
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to download Llama 3.2 model" -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit 1
    }
}

Write-Host ""
Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 To start the application:" -ForegroundColor Cyan
Write-Host "   1. Start Ollama: ollama serve" -ForegroundColor White
Write-Host "   2. Start backend: npm run server" -ForegroundColor White
Write-Host "   3. Start frontend: npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "🌐 The app will be available at: http://localhost:3000" -ForegroundColor Green
Write-Host ""
Read-Host "Press Enter to exit"
