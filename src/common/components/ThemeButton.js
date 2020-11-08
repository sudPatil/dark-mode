import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/_main.scss'

const ThemeButton = () => {
  const DARK_CLASS = 'dark-mode';
  const [isDarkMode, setDarkMode] = useState(false)
  const handleDarkMode = useCallback(() => {
    isDarkMode ?
      document.body.classList.remove(DARK_CLASS)
      : document.body.classList.add(DARK_CLASS)
    setDarkMode(!isDarkMode)
  }, [isDarkMode]);

  return (
    <button className="app__dark-mode-btn icon level-right" onClick={handleDarkMode}>
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} color={isDarkMode ? styles.sunlight : ''} />
    </button>
  )
}

export default ThemeButton;