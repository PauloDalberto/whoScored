import { useState, useEffect } from 'react';
import { showVideo, comparePlayerData } from '@/hooks'; // Certifique-se de ajustar os caminhos conforme necessário

export function useGetData(leagueId: number, selectedPlayers: Player[]) {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [comparisonResults, setComparisonResults] = useState<{ [key: string]: ComparisonResult | null }>({});

  useEffect(() => {
    async function fetchVideoUrl() {
      try {
        const url = await showVideo(leagueId);
        setVideoUrl(url);
      } catch (error) {
        console.error('Erro ao buscar o vídeo:', error);
        setVideoUrl(null);
      } finally {
        setLoading(false);
      }
    }

    fetchVideoUrl();
  }, [leagueId]);

  useEffect(() => {
    async function updateComparisonResults() {
      const results: { [key: string]: ComparisonResult | null } = {};
      for (const player of selectedPlayers) {
        try {
          const result = await comparePlayerData(player, leagueId);
          results[player.player.id] = result;
        } catch (error) {
          console.error('Erro ao comparar jogador:', error);
          results[player.player.id] = null;
        }
      }
      setComparisonResults(results);
    }

    if (selectedPlayers.length > 0) {
      updateComparisonResults();
    }
  }, [selectedPlayers, leagueId]);

  return { videoUrl, loading, comparisonResults, setComparisonResults };
}
