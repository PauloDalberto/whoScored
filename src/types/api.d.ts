interface Player {
  player: {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    nationality: string;
    height: string;
    weight: string;
    injured: boolean;
    photo: string;
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