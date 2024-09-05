export async function fetchPlayersData(leagueId: number): Promise<any[]> {
  const apiUrls: { [key: number]: string } = {
    39: 'https://who-scored-backend-hjvs.vercel.app/api/premierLeague',
    71: 'https://who-scored-backend-hjvs.vercel.app/api/brasileirao',
    135: 'https://who-scored-backend-hjvs.vercel.app/api/serieA',
  };

  const url = apiUrls[leagueId];
  if (!url) {
    throw new Error(`URL para leagueId ${leagueId} não encontrada`);
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return [];
  }
}
