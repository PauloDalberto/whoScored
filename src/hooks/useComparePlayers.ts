import premierLeague from '@/data/PlayerDataPremierLeague.json';
import serieA from '@/data/PlayerDataSerieA.json';
import brasileirao from '@/data/PlayerDataBrasileirao.json';

const LOCAL_STORAGE_KEY = 'lastUpdateDate';
const ID_INCREMENT = 1;

function getStoredDate() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(LOCAL_STORAGE_KEY);
  }
  return null;
}

function setStoredDate(date: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_STORAGE_KEY, date);
  }
}

export function comparePlayerData(playerData: Player, leagueId: number): ComparisonResult | null {
  const currentDate = new Date().toLocaleDateString();
  let correctPlayerId = 1;
  let lastUpdate = getStoredDate();

  if (lastUpdate !== currentDate) {
    correctPlayerId += ID_INCREMENT;
    setStoredDate(currentDate);
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
