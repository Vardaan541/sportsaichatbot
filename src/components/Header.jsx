import React from 'react'
import { Trophy, Zap } from 'lucide-react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">
            <Trophy className="trophy-icon" />
            <Zap className="zap-icon" />
          </div>
          <div className="logo-text">
            <h1>Sports AI</h1>
            <p>Powered by Llama 3.2</p>
          </div>
        </div>
        <div className="sports-stars">
          <div className="star-image" title="Lionel Messi">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=40&h=40&fit=crop&crop=face" alt="Lionel Messi" />
          </div>
          <div className="star-image" title="LeBron James">
            <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=40&h=40&fit=crop&crop=face" alt="LeBron James" />
          </div>
          <div className="star-image" title="Serena Williams">
            <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=40&h=40&fit=crop&crop=face" alt="Serena Williams" />
          </div>
          <div className="star-image" title="Tom Brady">
            <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=40&h=40&fit=crop&crop=face" alt="Tom Brady" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
