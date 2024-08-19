import { useState } from 'react';

export function usePlayerHandlers() {
  const [playerName, setPlayerName] = useState<string>('');
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

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
    handleSelection
  };
}
