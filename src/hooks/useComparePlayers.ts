import players from '@/data/playerData.json';

let correctPlayerId = 1;
let lastUpdate = new Date().toLocaleDateString(); 

export function comparePlayerData(playerData: Player): ComparisonResult | null {
  const currentDate = new Date().toLocaleDateString();

  if (currentDate !== lastUpdate) {
    correctPlayerId += 1; 
    lastUpdate = currentDate; 
  }

  const correctPlayer = players.find((player) => player.id === correctPlayerId);

  if (!correctPlayer) return null;

  const isNationalityCorrect = playerData.player.nationality === correctPlayer.nationality;
  const isAgeCorrect = playerData.player.age === correctPlayer.age;
  const isPositionCorrect = playerData.statistics[0].games.position === correctPlayer.position;

  return {
    isNationalityCorrect,
    isAgeCorrect,
    isPositionCorrect,
    isCorrect: isNationalityCorrect && isAgeCorrect && isPositionCorrect,
  };
}
