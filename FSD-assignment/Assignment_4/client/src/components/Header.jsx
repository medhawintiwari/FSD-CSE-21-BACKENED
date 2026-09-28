import React from 'react';
import { Student, SquaresFour } from '@phosphor-icons/react';

function Header() {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-brand">
          <div className="brand-icon">
            <Student weight="fill" />
          </div>
          <div>
            <h1>Campus Help Desk</h1>
            <p>Report campus issues. Track requests. Get things resolved.</p>
          </div>
        </div>
        <div className="header-nav">
          <span className="nav-item active">
            <SquaresFour weight="bold" /> Dashboard
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
