import { fetchPlayersData } from "@/data/fetchPlayers";

export async function showVideo(leagueId: number): Promise<string | null> {
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

  return correctPlayer.videoUrl;
}
