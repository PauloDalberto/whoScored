'use client'

import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import { locales } from "./locales";
import Link from "next/link";

export const Lang = () => {
  const { lang } = useParams();
  const pathname = usePathname();

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const getPathname = (lng: string) => {
    const paths = pathname.split('/');

    const newPath = paths.slice(2).join('/')

    return '/' + lng + newPath;
  }

  console.log(getPathname)
  
  return(
    <div className='dropdown' onTouchStart={toggleDropdown} onClick={toggleDropdown}>
      <Cog6ToothIcon className='config'/>
      <ul className={`dropdown-menu ${isOpenDropdown ? 'active' : ''}`}>
        <li>
          <label htmlFor="language">Linguagem:</label>
          {locales.map(lng => {
            return(
              <li key={lng.code}>
                <Link href='/en-US'>{lng.code}</Link>
              </li>
            )
          })}
        </li>
      </ul>
    </div>
  )
}