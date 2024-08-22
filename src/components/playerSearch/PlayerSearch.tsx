'use client';

import Image from 'next/image';
import { usePlayerHandlers } from '@/hooks/usePlayerhandlers';
import { useFetchPlayers } from '@/hooks/useEffectPlayers';
import './playerSearch.css';
import { comparePlayerData } from '@/hooks/useComparePlayers';
import { useState } from 'react';

export default function PlayerSearch({ leagueId, title }: PlayerSearchProps) {
  const { playerName, selectedPlayers, handlePlayer, handleSelection } = usePlayerHandlers();
  const players = useFetchPlayers({ playerName, leagueId });
  const [result, setResult] = useState(false)

  function handleSelectionWithComparison(playerData: Player) {
    const comparisonResult = comparePlayerData(playerData);

    handleSelection(playerData);

    if (comparisonResult && comparisonResult.isCorrect) {
      setResult(true)
    } else if (selectedPlayers.length === 2) {
      alert('Você errou todas as tentativas!');
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
                <Image src={playerData.player.photo} alt={playerData.player.name} className="player-photo" width={50} height={50} />
                <span>{playerData.player.name}</span>
              </div>
            ))}
          </div>
        )}

        {selectedPlayers.map((player, index) => {
          const comparisonResult = comparePlayerData(player);

          return (
            <div key={index} className="result">
              <h3>{player.player.name}</h3>

              <div className="container-items">
                <div className={`item-wrapper`}>
                  <div className={`item-content ${comparisonResult?.isNationalityCorrect ? 'correct' : ''}`}>
                    <p>{player.player.nationality}</p>
                  </div>
                  <h3>NAT</h3>
                </div>

                <div className={`item-wrapper`}>
                  <div className={`item-content ${comparisonResult?.isAgeCorrect ? 'correct' : ''}`}>
                    <p>{player.player.age}</p>
                  </div>
                  <h3>AGE</h3>
                </div>

                <div className={`item-wrapper`}>
                  <div className={`item-content ${comparisonResult?.isPositionCorrect ? 'correct' : ''}`}>
                    <p>{player.statistics[0].games.position}</p>
                  </div>
                  <h3>POSITION</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
