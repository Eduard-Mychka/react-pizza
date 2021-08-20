import React from 'react'
import CopyrightArea from './CopyrightArea'
import MainContent from './MainContent'

export default function Footer() {
  return (
    <footer >
      <div className="footer-section">
        <MainContent />
        <CopyrightArea />
      </div>
    </footer >
  )
}