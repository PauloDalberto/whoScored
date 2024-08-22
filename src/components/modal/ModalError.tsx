'use client'

import './modal.css';
import Image from 'next/image';
import { useFetchPlayers } from '@/hooks/useEffectPlayers';

export default function ModalError(){
  const players = useFetchPlayers({ playerName: 'neymar', leagueId: 71 });

//aqui nos jogaodres mudar para o player certo conforme o erro:
  return(
    <section className='modal-container'>
    <div className='modal modal-error'>
      <div className='close'>
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