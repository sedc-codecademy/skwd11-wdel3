export interface Movie {
    id: string,
    name: string,
    genre: string,
    director: string,
    year: number,
    description: string,
    rating: {
        votes: number[],
        averageValue: number
      },
    imageUrl: string
  }