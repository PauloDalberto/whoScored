import premierLeague from '@/data/PlayerDataPremierLeague.json';
import serieA from '@/data/PlayerDataSerieA.json';
import brasileirao from '@/data/PlayerDataBrasileirao.json';

export function showVideo(leagueId: number): string | null {
  const correctPlayerId = 1;

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

  return correctPlayer.videoUrl;
}