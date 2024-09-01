import { useEffect } from 'react';

export function useGameState(leagueId: number, selectedPlayers: Player[], handleSelection: (player: Player) => void) {
  function generateStorageKey(leagueId: number) {
    return `selectedPlayers_${leagueId}`;
  }

  function saveGameState(selectedPlayers: Player[]) {
    const storageKey = generateStorageKey(leagueId);
    localStorage.setItem(storageKey, JSON.stringify(selectedPlayers));
  }

  function loadGameState() {
    const storageKey = generateStorageKey(leagueId);
    const savedPlayers = localStorage.getItem(storageKey);
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  }

  useEffect(() => {
    const loadedPlayers = loadGameState();
    if (loadedPlayers.length) {
      loadedPlayers.forEach((player: Player) => handleSelection(player));
    }
  }, [leagueId]); 

  useEffect(() => {
    saveGameState(selectedPlayers);
  }, [selectedPlayers, leagueId]);
}
