interface Player {
  id: number;
  name: string;
  nationality: string;
  team: string;
  year: number;
  position: string;
  description: string;
  goalLink: string;
}

interface PlayerResponse {
  player: Player;
}

interface ApiResponse {
  response: PlayerResponse[];
}