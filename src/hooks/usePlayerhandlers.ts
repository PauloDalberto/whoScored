import { useState, useEffect } from 'react';

export function usePlayerHandlers(leagueId: number) {
  const [playerName, setPlayerName] = useState<string>('');
  
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>(() => {
    if (typeof window !== 'undefined') {
      const savedProgress = localStorage.getItem(`selectedPlayers_${leagueId}`);
      return savedProgress ? JSON.parse(savedProgress) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(`selectedPlayers_${leagueId}`, JSON.stringify(selectedPlayers));
  }, [selectedPlayers, leagueId]);

  const handlePlayer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  const handleSelection = (playerData: Player) => {
    if (selectedPlayers.length < 3) {
      setSelectedPlayers((prevSelected) => [...prevSelected, playerData]);
      setPlayerName('');
    }
  };

  return {
    playerName,
    selectedPlayers,
    handlePlayer,
    handleSelection,
  };
}
