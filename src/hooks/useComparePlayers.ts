import premierLeague from '@/data/PlayerDataPremierLeague.json';
import serieA from '@/data/PlayerDataSerieA.json';
import brasileirao from '@/data/PlayerDataBrasileirao.json';

let correctPlayerId = 1;
let lastUpdate = new Date().toLocaleDateString();

export function comparePlayerData(playerData: Player, leagueId: number): ComparisonResult | null {
  const currentDate = new Date().toLocaleDateString();

  if (currentDate !== lastUpdate) {
    correctPlayerId += 1;
    lastUpdate = currentDate;
  }

  let players;
  switch (leagueId) {
    case 39:
      players = premierLeague;
      break;
    case 71:
      players = brasileirao;
      break;
    case 135:
      players = serieA;
      break;
    default:
      return null;
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
