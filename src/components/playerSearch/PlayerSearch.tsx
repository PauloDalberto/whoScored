// playerSearch.tsx
'use client';

import Image from 'next/image';
import './playerSearch.css';
import { useState } from 'react';
import ModalSuccess from '../modal/ModalSuccess';
import ModalError from '../modal/ModalError';
import { Locale } from '@/config/i18n.config';
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client';
import { useParams } from 'next/navigation';
import { usePlayerHandlers, useFetchPlayers, showVideo, comparePlayerData } from '@/hooks';

export default function PlayerSearch({ leagueId, title }: PlayerSearchProps) {
  const { playerName, selectedPlayers, handlePlayer, handleSelection } = usePlayerHandlers();
  const players = useFetchPlayers({ playerName, leagueId });
  const [correctResult, setCorrectResult] = useState(false);
  const [errorResult, setErrorResult] = useState(false);
  const videoUrl = showVideo(leagueId) || '';
  const isDisabled = selectedPlayers.length >= 3 || correctResult;
  
  const { lang } = useParams();
  const dict = getDictionaryUseClient(lang as Locale);
  
  function handleSelectionWithComparison(playerData: Player) {
    const comparisonResult = comparePlayerData(playerData, leagueId);
    
    handleSelection(playerData);
    
    if (comparisonResult && comparisonResult.isCorrect) {
      setCorrectResult(true);
    } else if (selectedPlayers.length === 2) {
      setErrorResult(true);
    }
  }

  return (
    <section className="container">
      <div className="content">
        <video autoPlay muted loop className='video'>
          <source src={videoUrl} type='video/mp4' />
        </video>

        <input 
          type="text" 
          placeholder={`${
            selectedPlayers.length + 1 == 4 
            ? dict.playerSearch.exhausted
            : dict.playerSearch.guess + ' ' + (selectedPlayers.length + 1) + ' ' + dict.playerSearch.to3}`}
          className="search" 
          onChange={handlePlayer} 
          value={playerName}
          disabled={isDisabled || undefined}
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
          const comparisonResult = comparePlayerData(player, leagueId);

          return (
            <div key={index} className="result">
              <h3>{player.player.name}</h3>

              <div className="container-items">
                <div className="item-wrapper">
                  <div className={`item-content ${comparisonResult?.isNationalityCorrect ? 'correct' : ''}`}>
                    <p>{player.player.nationality}</p>
                  </div>
                  <h3>{dict.playerSearch.nat}</h3>
                </div>

                <div className="item-wrapper">
                  <div className={`item-content ${comparisonResult?.isAgeCorrect ? 'correct' : ''}`}>
                    <p>{player.player.age}</p>
                  </div>
                  <h3>{dict.playerSearch.age}</h3>
                </div>

                <div className="item-wrapper">
                  <div className={`item-content ${comparisonResult?.isPositionCorrect ? 'correct' : ''}`}>
                    <p>{player.statistics[0].games.position}</p>
                  </div>
                  <h3>{dict.playerSearch.position}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {correctResult && <ModalSuccess correctPlayerName={selectedPlayers[0].player.name} leagueId={leagueId} />}
      {errorResult && <ModalError />}
    </section>
  );
}
