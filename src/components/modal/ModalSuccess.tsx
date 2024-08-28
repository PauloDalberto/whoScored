'use client'

import './modal.css';
import Image from 'next/image';
import { useFetchPlayers } from '@/hooks/useEffectPlayers';
import { useState } from 'react';

export default function ModalSuccess({ correctPlayerName, leagueId }: ModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  const players = useFetchPlayers({ playerName: correctPlayerName, leagueId });

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="modal-container" onClick={handleClickOutside}>
      <div className='modal modal-success'>
        <div className='close-modal' onClick={closeModal}>
          X
        </div>
        <div className='content content-success'>
          <h1>Parabéns</h1>
          Você acertou o jogador 
          {players.map((playerData) => (
            <div className='player' key={playerData.player.id}>
              <Image src={playerData.player.photo} width={70} height={70} alt='player'/>
              <p>{playerData.player.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
