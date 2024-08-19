'use client';

import Image from 'next/image';
import { usePlayerHandlers } from '@/hooks/usePlayerhandlers';
import { useFetchPlayers } from '@/hooks/useEffectPlayers';
import './playerSearch.css';
import { comparePlayerData } from '@/hooks/useComparePlayers';


export default function PlayerSearch({ leagueId, title }: PlayerSearchProps) {
  const { playerName, selectedPlayers, handlePlayer, handleSelection } = usePlayerHandlers();
  const players = useFetchPlayers({ playerName, leagueId });

  function handleSelectionWithComparison(playerData: Player) {
    handleSelection(playerData);

    const comparisonResult = comparePlayerData(playerData);
    if (comparisonResult !== null && comparisonResult.isCorrect) {
      alert('Parabéns, você acertou!');
    }
  }

  return (
    <section className="container">
      <div className="content">
        <Image src="/provisorio.png" alt={title} width={550} height={300} priority />

        <input 
          type="text" 
          placeholder={`${selectedPlayers.length + 1} tentativa de 3 possíveis`}
          className="search" 
          onChange={handlePlayer} 
          value={playerName}
          disabled={selectedPlayers.length >= 3} 
        />

        {players.length > 0 && (
          <div className="autocomplete-suggestions">
            {players.map((playerData) => (
              <div 
                key={playerData.player.id} 
                className="autocomplete-suggestion" 
                onClick={() => handleSelectionWithComparison(playerData)}
              >
                <Image src={playerData.player.photo} alt='' className="player-photo" width={50} height={50} />
                <span>{playerData.player.name}</span>
              </div>
            ))}
          </div>
        )}

        {selectedPlayers.map((player, index) => (
          <div key={index} className="result">
            <h3>{player.player.name}</h3>

            <div className="container-items">
              <div className="item-wrapper">
                <div className="item-content">
                  <p>{player.player.nationality}</p>
                </div>
                <h3>NAT</h3>
              </div>

              <div className="item-wrapper">
                <div className="item-content">
                  <Image src={player.statistics[0].team.logo} alt={player.player.name} width={50} height={50} />
                </div>
                <h3>TEAM</h3>
              </div>

              <div className="item-wrapper">
                <div className="item-content">
                  <p>{player.statistics[0].games.position}</p>
                </div>
                <h3>POSITION</h3>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


