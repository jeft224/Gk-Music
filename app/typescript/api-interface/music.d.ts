declare namespace queryRecommendSongUsingGET {
  interface Params {
    limit: number
  }

  interface SongItem {
    id: number
    type: number
    name: string
    copywriter: string
    picUrl: string
    canDislike: boolean
    trackNumberUpdateTime: number
    playCount: number
    trackCount: number
    highQuality: boolean
    alg: string
  }

  interface Response {
    hasTaste: boolean
    category: number
    code: number
    result: SongItem[]
  }
}
