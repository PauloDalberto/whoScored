'use client'

import Link from 'next/link';
import BrasilSvg from '../../../public/svg/countries/Brasil';
import IngleterraSvg from '../../../public/svg/countries/Inglaterra';
import ItaliaSvg from '../../../public/svg/countries/Italia';
import './home.css';
import { Locale } from '@/config/i18n.config';
import ModalScoredInfo from '@/components/modal/ModalScoredInfo';
import { useParams } from 'next/navigation';
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client';

export default function Home() {
  const { lang } = useParams();
  const dict = getDictionaryUseClient(lang as Locale);

  const getCurrentLang = () => {
    return localStorage.getItem('selectedLang') || 'en-US';
  };

  const currentLang = getCurrentLang()

  return (
    <main className="container">
      <h1 className='title'>
        {dict.home.name}
      </h1>

      <ul className='ul-container'>
        <li><Link className='link' href={`/${currentLang}/pages/brasileirao`}><BrasilSvg /><p>{dict.header.brazilian}</p></Link></li>
        <li><Link className='link' href={`/${currentLang}/pages/premierLeague`}><IngleterraSvg /><p>{dict.header.premierLeague}</p></Link></li>
        <li><Link className='link' href={`/${currentLang}/pages/serieA`}><ItaliaSvg /><p>{dict.header.serieA}</p></Link></li>
      </ul>

      <section className='home-infos'>
        <h2>{dict.home.welcome}</h2>

        <div className='what-its'>
          <h3>{dict.home.about}</h3>
          <p>{dict.home.explanationAbout}</p>
        </div>

        <div className="rules">
          <h3>{dict.home.rules}</h3>
          <ul className="ul">
            <li>{dict.modalInfo.goalsAnyDate}</li>
            <li>{dict.modalInfo.retiredPlayers}</li>
            <li>{dict.modalInfo.transferredPlayers}</li>
            <li>{dict.modalInfo.currentAge}</li>
            <li>{dict.modalInfo.retiredAge}</li>
          </ul>
        </div>
      </section>

      {/* <ModalScoredInfo /> */}
    </main>
  );
}
