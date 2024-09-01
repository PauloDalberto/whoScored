import Link from 'next/link';
import BrasilSvg from '../../../public/svg/countries/Brasil';
import IngleterraSvg from '../../../public/svg/countries/Inglaterra';
import ItaliaSvg from '../../../public/svg/countries/Italia';
import './home.css';
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-server-only';
import { Locale } from '@/config/i18n.config';
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client';
import ModalScoredInfo from '@/components/modal/ModalScoredInfo';

export default function Home({params}: {params: {lang: Locale}}) {
  const dict = getDictionaryServerOnly(params.lang)

  return (
    <main className="container">
      <h1 className='title'>
        {dict.site.name}
      </h1>

      <ul className='ul-container'>
        <li><Link className='link' href={'/pages/brasileirao'}><BrasilSvg /><p>Brasileirão</p></Link></li>
        <li><Link className='link' href={'/pages/premierLeague'}><IngleterraSvg /><p>Premier League</p></Link></li>
        <li><Link className='link' href={'/pages/serieA'}><ItaliaSvg /><p>Serie A</p></Link></li>
      </ul>

      <ModalScoredInfo />
    </main>
  );
}
