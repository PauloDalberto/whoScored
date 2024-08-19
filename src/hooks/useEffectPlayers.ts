import { useState, useEffect } from 'react';

export function useFetchPlayers({ playerName, leagueId }: UseFetchPlayersProps) {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    if (playerName) {
      const fetchPlayers = async () => {
        const url = `https://api-football-v1.p.rapidapi.com/v3/players?search=${encodeURIComponent(playerName)}&league=${leagueId}`;

        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '34ba5f18f2msh826a9705ea11cb0p16a5b2jsne38545fbbf18',
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
          }
        };

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
  }, [playerName, leagueId]);

  return players;

}
