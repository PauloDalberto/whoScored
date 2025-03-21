interface Player {
  player: {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    nationality: string;
    photo: string;
    age: number;
  };

  statistics: {
    team: {
      id: number;
      name: string;
      logo: string;
    };
    
    games: {
      position: string;
    };
  }[];
}