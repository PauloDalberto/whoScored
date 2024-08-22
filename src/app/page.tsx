import Link from 'next/link';
import BrasilSvg from '../../public/svg/countries/Brasil';
import IngleterraSvg from '../../public/svg/countries/Inglaterra';
import ItaliaSvg from '../../public/svg/countries/Italia';
import './home.css';
import ModalSuccess from '@/components/modal/ModalSuccess';
import ModalError from '@/components/modal/ModalError';

export default function Home() {
  return (
    <main className="container">
      <h1 className='title'>
        Se divirta com nossos jogos de futebol
      </h1>

      <ul className='ul-container'>
        <li><Link className='link' href={'/pages/brasileirao'}><BrasilSvg /><p>Brasileirão</p></Link></li>
        <li><Link className='link' href={'/pages/premierLeague'}><IngleterraSvg /><p>Premier League</p></Link></li>
        <li><Link className='link' href={'/pages/serieA'}><ItaliaSvg /><p>Serie A</p></Link></li>
      </ul>

      <ModalError />
    </main>
  );
}
