'use client'

import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import './header.css';
import './sidebar.css';
import Link from 'next/link';
import BrasilSvg from '../../../public/svg/countries/Brasil';
import IngleterraSvg from '../../../public/svg/countries/Inglaterra';
import ItaliaSvg from '../../../public/svg/countries/Italia';
import { Lang } from '../nav/lang';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const getCurrentLang = () => {
    return localStorage.getItem('selectedLang') || 'en_US'; // Valor padrão
  };

  const currentLang = getCurrentLang();

  return (
    <div>
      <header className="header">
        <Bars3Icon className='menu' onClick={toggleSidebar}/>
        <Link href={`/${currentLang}`}>
          <h1>Who Scored?</h1>
        </Link>
        <Lang />
      </header>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className={`close`} onClick={toggleSidebar}>
          <span>x</span>
        </div>
        <ul>
          <li>
            <Link className='link' href={`/${currentLang}/pages/brasileirao`}>
              <BrasilSvg /><p>Brasileirão</p>
            </Link>
          </li>
          <li>
            <Link className='link' href={`/${currentLang}/pages/premierLeague`}>
              <IngleterraSvg /><p>Premier League</p>
            </Link>
          </li>
          <li>
            <Link className='link' href={`/${currentLang}/pages/serieA`}>
              <ItaliaSvg /><p>Serie A</p>
            </Link>
          </li>
        </ul>
      </aside>

      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
    </div>
  );
}
