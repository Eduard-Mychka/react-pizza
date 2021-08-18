import React from 'react'
import ContsctUs from './ContsctUs'
import CopyrightArea from './CopyrightArea'
import MainContent from './MainContent'

export default function Footer() {
  return (
    <footer >
      <div className="footer-section">
        <ContsctUs />
        <MainContent />
        <CopyrightArea />
      </div>
    </footer >
  )
}