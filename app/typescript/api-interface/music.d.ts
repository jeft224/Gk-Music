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

declare namespace queryRankUsingGET {
  interface Params {}

  interface TrackItem {
    first: string
    second: string
  }

  interface RankItem {
    subscribers: array
    subscribed: string
    creator: string
    artists: string
    tracks: TrackItem[]
    updateFrequency: string
    backgroundCoverId: number
    backgroundCoverUrl: string
    titleImage: number
    titleImageUrl: string
    englishTitle: string
    opRecommend: boolean
    recommendInfo: string
    adType: number
    trackNumberUpdateTime: number
    subscribedCount: number
    cloudTrackCount: number
    userId: number
    createTime: number
    highQuality: boolean
    coverImgId: number
    newImported: boolean
    anonimous: boolean
    updateTime: number
    totalDuration: number
    trackCount: number
    coverImgUrl: string
    specialType: number
    commentThreadId: string
    trackUpdateTime: number
    privacy: number
    playCount: number
    ordered: boolean
    tags: Array<any>
    description: string
    status: number
    name: string
    id: number
    coverImgId_str: string
    ToplistType: string
  }

  interface ArtistTop {
    artists: TrackItem[]
    coverUrl: string
    name: string
    upateFrequency: string
    position: number
    updateFrequency: string
  }

  interface Response {
    // hasTaste: boolean
    // category: number
    // code: number
    artistToplist: ArtistTop
    code: number
    list: RankItem[]
  }
}

declare namespace queryDJBannerGET {
  interface Params {}

  interface BannerItem {
    targetId: number
    targetType: number
    pic: string
    url: string
    typeTitle: string
    exclusive: boolean
  }
  interface Response {
    data: BannerItem[]
    code: number
  }
}
