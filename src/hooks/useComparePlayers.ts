import players from '@/data/playerData.json';

interface ComparisonResult {
  isCorrect: boolean;
  isNationalityCorrect: boolean;
  isClubCorrect: boolean;
  isPositionCorrect: boolean;
}

export function comparePlayerData(playerData: Player): ComparisonResult | null {
  const correctPlayer = players.find((player) => player.id === 1);

  if (!correctPlayer) return null;

  const isNationalityCorrect = playerData.player.nationality === correctPlayer.nationality;
  const isClubCorrect = playerData.statistics[0].team.name === correctPlayer.club;
  const isPositionCorrect = playerData.statistics[0].games.position === correctPlayer.position;

  return {
    isNationalityCorrect,
    isClubCorrect,
    isPositionCorrect,
    isCorrect: isNationalityCorrect && isClubCorrect && isPositionCorrect
  };
}