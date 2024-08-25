'use client'

import { useState } from 'react';
import { Bars3Icon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import './header.css';
import './sidebar.css';
import './dropdown.css'
import Link from 'next/link';
import BrasilSvg from '../../../public/svg/countries/Brasil';
import IngleterraSvg from '../../../public/svg/countries/Inglaterra';
import ItaliaSvg from '../../../public/svg/countries/Italia';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <div>
      <header className="header">
        <Bars3Icon className='menu' onClick={toggleSidebar}/>
        <Link href={'/'}>
          <h1>Who Scored?</h1>
        </Link>
        <div className='dropdown' onTouchStart={toggleDropdown} onClick={toggleDropdown}>
          <Cog6ToothIcon className='config'/>
          <ul className={`dropdown-menu ${isOpenDropdown ? 'active' : ''}`}>
            <li>
              <label htmlFor="language">Linguagem:</label>
              <select name="language" id="language">
                <option value="english">Inglês</option>
                <option value="portuguese">Português</option>
              </select>
            </li>
          </ul>
        </div>
      </header>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className={`close`} onClick={toggleSidebar}>
          <span>x</span>
        </div>
        <ul>
          <li>
            <Link className='link' href={'/lang/pages/brasileirao'}>
              <BrasilSvg /><p>Brasileirão</p>
            </Link>
          </li>
          <li>
            <Link className='link' href={'/lang/pages/premierLeague'}>
              <IngleterraSvg /><p>Premier League</p>
            </Link>
          </li>
          <li>
            <Link className='link' href={'/lang/pages/serieA'}>
              <ItaliaSvg /><p>Serie A</p>
            </Link>
          </li>
        </ul>
        
      </aside>

      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
    </div>
  );
}
