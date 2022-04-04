import './Header.css';
import React from 'react';

export default function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="title">랜덤스톤</div>
    </div>
  );
}
