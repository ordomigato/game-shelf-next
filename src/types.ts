export interface IGame {
  id: string
  name: string
  cover: {
    id: number
    image_id: string
  }
}

export interface IGetGamesRequest {
  search: string,
}