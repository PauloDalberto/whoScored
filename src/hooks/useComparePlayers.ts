import players from '@/data/playerData.json';

interface ComparisonResult {
  nationalityCorrect: boolean;
  clubCorrect: boolean;
  positionCorrect: boolean;
  isCorrect: boolean;
}

export function comparePlayerData(playerData: Player) {
  const correctPlayer = players.find((player) => player.id === 1); 

  if (!correctPlayer) return null;

  return {
    isCorrect: playerData.player.id === correctPlayer.id,
    isNationalityCorrect: playerData.player.nationality === correctPlayer.nationality,
    isClubCorrect: playerData.statistics[0].team.name === correctPlayer.club,
    isPositionCorrect: playerData.statistics[0].games.position === correctPlayer.position,
  };
}


