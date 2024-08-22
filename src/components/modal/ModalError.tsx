'use client'

import './modal.css';
import Image from 'next/image';
import { useFetchPlayers } from '@/hooks/useEffectPlayers';
import { useState } from 'react';

export default function ModalError(){
  const [isOpen, setIsOpen] = useState(true);
  const players = useFetchPlayers({ playerName: 'neymar', leagueId: 71 });

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;
  
  return(
    <section className='modal-container' onClick={closeModal}>
      <div className='modal modal-error'>
        <div className='close' onClick={closeModal}>
          X
        </div>
        <div className='content content-error'>
          <h1>Foi por pouco</h1>
          O jogador era:
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