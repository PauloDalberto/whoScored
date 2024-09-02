import { useState, useEffect } from 'react';
import { useStorageProgress } from '@/hooks';

export function usePlayerHandlers(leagueId: number) {
  const [playerName, setPlayerName] = useState<string>('');
  const currentDate = new Date().toLocaleDateString();
  const [selectedPlayers, setSelectedPlayers] = useStorageProgress<Player[]>(`selectedPlayers_${leagueId}`, []);

  useEffect(() => {
    const savedDate = localStorage.getItem(`date_${leagueId}`);

    if (savedDate !== currentDate) {
      localStorage.setItem(`date_${leagueId}`, currentDate);
      setSelectedPlayers([]);
    }
  }, [currentDate, leagueId, setSelectedPlayers]);

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
