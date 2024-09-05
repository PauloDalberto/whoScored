'use client'

import { useState, useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import './header.css';
import './sidebar.css';
import Link from 'next/link';
import BrasilSvg from '../../../public/svg/countries/Brasil';
import IngleterraSvg from '../../../public/svg/countries/Inglaterra';
import ItaliaSvg from '../../../public/svg/countries/Italia';
import { Lang } from '../nav/lang';
import { useParams } from 'next/navigation';
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client';
import { Locale } from '@/config/i18n.config';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en-US');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const { lang } = useParams();
  const dict = getDictionaryUseClient(lang as Locale);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('selectedLang');
      setCurrentLang(savedLang || 'en-US');
    }
  }, []);

  return (
    <div>
      <header className="header">
        <Bars3Icon className='menu' onClick={toggleSidebar}/>
        <Link href={`/${currentLang}`}>
          <h1>{dict.home.name}</h1>
        </Link>
        <Lang />
      </header>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className={`close`} onClick={toggleSidebar}>
          <span>x</span>
        </div>

        <h1 className='sidebar-title'>{dict.home.name}</h1>

        <ul>
          <li>
            <Link className='link-header' href={`/${currentLang}/pages/brasileirao`}>
              <BrasilSvg /><p>{dict.header.brazilian}</p>
            </Link>
          </li>
          <li>
            <Link className='link-header' href={`/${currentLang}/pages/premierLeague`}>
              <IngleterraSvg /><p>{dict.header.premierLeague}</p>
            </Link>
          </li>
          <li>
            <Link className='link-header' href={`/${currentLang}/pages/serieA`}>
              <ItaliaSvg /><p>{dict.header.serieA}</p>
            </Link>
          </li>
        </ul>
      </aside>

      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
    </div>
  );
}
