import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import common from '../assets/index';
import { IconTrophy, IconMessageChatbot } from '@tabler/icons-react'
import styles from './side-bar.module.scss';
import {  } from '@tabler/icons-react'
export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClasses = ({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.active : ''}`;

  const iconClasses = ({ isActive }) =>
    `${styles.icon} ${!isOpen ? styles.centered : ''} ${
      isActive ? styles.active : ''
    }`;

  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <button
        className={styles.toggleButton}
        onClick={toggleSidebar}
      >
        <img
          src={common.arrow}
          alt="Toggle icon"
          className={`${styles.toggleIcon} ${!isOpen ? styles.rotated : ''}`}
        />
      </button>

      <div className={styles.logoContainer}>
        <img
          src={common.logo}
          alt="Logo"
        />
        {isOpen && <h2 className={styles.logoTitle}>Gamefy</h2>}
      </div>

      <nav className={styles.nav}>
        <NavLink 
          to="/ranking" 
          className={navLinkClasses}
        >
          <IconTrophy
            stroke={2} 
            className={iconClasses}
          />
          {isOpen && 'Ranking'}
        </NavLink>

        <NavLink
          to="/help"
          className={navLinkClasses}
        >
          <IconMessageChatbot
            stroke={2} 
            className={iconClasses}
          />
          {isOpen && 'Asistencia'}
        </NavLink>
      </nav>
    </div>
  );
}