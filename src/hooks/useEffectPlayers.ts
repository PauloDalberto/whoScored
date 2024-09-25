import { useState, useEffect } from 'react';

export function useFetchPlayers({ playerName, leagueId }: UseFetchPlayersProps) {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    if (playerName && playerName.length >= 4) {
      const fetchPlayers = async () => {
        const url = `https://api-football-v1.p.rapidapi.com/v3/players?search=${encodeURIComponent(playerName)}&league=${leagueId}`;

        const apiKey = process.env.NEXT_PUBLIC_API_KEY;

        if (!apiKey) {
          throw new Error('API key is not defined. Please set NEXT_PUBLIC_API_KEY in your environment variables.');
        }

        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': apiKey,
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
