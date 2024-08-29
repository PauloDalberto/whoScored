'use client'

import './modal.css';
import Image from 'next/image';
import { useFetchPlayers } from '@/hooks/useEffectPlayers';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client';
import { Locale } from '@/config/i18n.config';

export default function ModalError(){
  const [isOpen, setIsOpen] = useState(true);
  const players = useFetchPlayers({ playerName: 'neymar', leagueId: 71 });

  const { lang } = useParams();
  const dict = getDictionaryUseClient(lang as Locale);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  
  return(
    <section className="modal-container" onClick={handleClickOutside}>
      <div className='modal modal-error'>
        <div className='close-modal' onClick={closeModal}>
          X
        </div>
        <div className='content content-error'>
          <h1>{dict.modalError.wasClose}</h1>
          {dict.modalError.wasPlayer}
          {players.map((playerData) => (
            <div className='player' key={playerData.player.id}>
              <Image src={playerData.player.photo} width={70} height={70} alt='player'/>
              <p>{playerData.player.name}</p>
            </div>
          ))}
        </div>
      </div>
  </section>
  )
}