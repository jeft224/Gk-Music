declare namespace queryRecommendSongUsingGET {
  interface Params {
    limit: number
  }

  interface SongItem {
    id: number
    type: number
    name: string
    copywriter: string
    coverImgUrl: string
    canDislike: boolean
    trackNumberUpdateTime: number
    playCount: number
    trackCount: number
    highQuality: boolean
    alg: string
  }

  interface Response {
    // hasTaste: boolean
    // category: number
    // code: number
    code: number
    lasttime: number
    more: boolean
    total: number
    playlists: SongItem[]
  }
}
