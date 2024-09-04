'use client'

import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { locales } from "./locales";
import Link from "next/link";
import './lang.css';

export const Lang = () => {
  const { lang } = useParams();
  const pathname = usePathname();

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const [currentLang, setCurrentLang] = useState(lang || localStorage.getItem('selectedLang') || locales[0].code);

  useEffect(() => {
    setCurrentLang(lang || localStorage.getItem('selectedLang') || locales[0].code);
  }, [lang]);

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const handleLangChange = (lng: string) => {
    localStorage.setItem('selectedLang', lng);
    setCurrentLang(lng);
  };

  const getPathname = (lng: string) => {
    const paths = pathname.split('/');
    const newPath = paths.slice(2).join('/')
    return '/' + lng + '/' + newPath;
  }

  return (
    <div className='dropdown' onTouchStart={toggleDropdown} onClick={toggleDropdown}>
      <Cog6ToothIcon className='config'/>
      <ul className={`dropdown-menu ${isOpenDropdown ? 'active' : ''}`}>
        <p>Linguagem:</p>
        {locales.map(lng => (
          <li key={lng.code}>
            <Link 
              href={getPathname(lng.code)} 
              onClick={() => handleLangChange(lng.code)}
              className="text"
            >
              {lng.code}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
