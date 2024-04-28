import React, { useState } from 'react';

function ThemeController() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <label className="theme-toggle">
      <input
        type="checkbox"
        className="theme-toggle-checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <div className="theme-toggle-track">
        <div className="theme-toggle-thumb"></div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="theme-icon"
        viewBox="0 0 24 24"
      >
        {theme === 'light' ? (
          <path d="M21,13H20a1,1,0,0,1-.86-1.5A8,8,0,0,0,9.5,3a1,1,0,0,1-.86-1.5A10,10,0,0,1,20,13h1a1,1,0,0,1,0,2Z" />
        ) : (
          <path d="M12,3A10,10,0,0,0,2,13a1,1,0,0,1-2,0A12,12,0,0,1,12,1a1,1,0,0,1,0,2Z" />
        )}
      </svg>
    </label>
  );
}

export default ThemeController;
