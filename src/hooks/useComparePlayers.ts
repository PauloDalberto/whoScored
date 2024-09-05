import { fetchPlayersData } from "@/data/fetchPlayers";

export async function comparePlayerData(playerData: Player, leagueId: number): Promise<ComparisonResult | null> {
  const currentDate = new Date().toLocaleDateString();
  let players;

  try {
    players = await fetchPlayersData(leagueId);
  } catch (error) {
    console.error('Erro ao buscar jogadores:', error);
    return null;
  }

  const correctPlayer = players.find((player: any) => player.date === currentDate);
  if (!correctPlayer) return null;

  const isNationalityCorrect = playerData.player.nationality === correctPlayer.nationality;
  const isAgeCorrect = playerData.player.age === correctPlayer.age;
  const isPositionCorrect = playerData.statistics[0].games.position === correctPlayer.position;
  const isNameCorrect = playerData.player.name === correctPlayer.name;

  return {
    isNationalityCorrect,
    isAgeCorrect,
    isPositionCorrect,
    isCorrect: isNationalityCorrect && isAgeCorrect && isPositionCorrect && isNameCorrect,
  };
}