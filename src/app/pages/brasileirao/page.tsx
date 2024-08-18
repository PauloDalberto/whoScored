'use client';

import Image from 'next/image';
import './brasileirao.css';
import { useState, useEffect } from 'react';

export default function Brasileirao() {
  const [playerName, setPlayerName] = useState<string>('');
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

  const leagueId = 39;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '34ba5f18f2msh826a9705ea11cb0p16a5b2jsne38545fbbf18',
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    if (playerName) {
      const fetchPlayers = async () => {
        const url = `https://api-football-v1.p.rapidapi.com/v3/players?search=${encodeURIComponent(playerName)}&league=${leagueId}`;

        try {
          const response = await fetch(url, options);
          const result = await response.json();

          if (result.response && result.response.length > 0) {
            setPlayers(result.response);
          } else {
            setPlayers([]);
          }
        } catch (error) {
          console.error('Erro ao buscar os dados:', error);
        }
      };

      fetchPlayers();
    } else {
      setPlayers([]);
    }
  }, [playerName]);

  function handlePlayer(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value);
  }

  function handleSelection(playerData: Player) {
    if (selectedPlayers.length < 3) {
      setSelectedPlayers((prevSelected) => [...prevSelected, playerData]);
      setPlayerName('');
    }
  }

  return (
    <section className="container">
      <div className="content">
        <Image src="/provisorio.png" alt="Logo do vant" width={550} height={300} priority />

        <input 
          type="text" 
          placeholder="1 tentativa de 2 possiveis" 
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
                onClick={() => handleSelection(playerData)}
              >
                <Image src={playerData.player.photo} alt='' className="player-photo" width={50} height={50} />
                <span>{playerData.player.name}</span>
              </div>
            ))}
          </div>
        )}

        {selectedPlayers.map((player, index) => (
          <div key={index} className='result'>
            <h3>{player.player.name}</h3>

            <div className='container-items'>
              <div className='item-wrapper'>
                <div className='item-content'>
                  <p>{player.player.nationality}</p>
                </div>
                <h3>NAT</h3>
              </div>

              <div className='item-wrapper'>
                <div className='item-content'>
                  <Image src={player.statistics[0].team.logo} alt={player.player.name} width={50} height={50} />
                </div>
                <h3>TEAM</h3>
              </div>

              <div className='item-wrapper'>
                <div className='item-content'>
                  <p>{player.statistics[0].games.position}</p>
                </div>
                <h3>position</h3>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
