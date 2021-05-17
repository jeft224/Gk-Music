import * as React from 'react'

import './index.less'

const prefixCls = 'rank'

interface RankProps {}

interface RankState {
  loading: boolean
  ranks: Partial<queryRankUsingGET.Response>
}

export default class Rank extends React.Component<RankProps, RankState> {
  constructor(props: any) {
    super(props)
  }

  state: RankState = {
    loading: false,
    ranks: {},
  }

  componentDidMount(): void {
    this.fetchTopList()
  }

  fetchTopList(): void {
    this.setState({ loading: true })
    $api
      .queryRankList()
      .then((resData) => {
        console.log(resData)

        this.setState({ ranks: resData })
      })
      .finally(() => this.setState({ loading: false }))
  }

  render(): JSX.Element {
    const { ranks } = this.state
    const { list, artistToplist } = ranks
    const topRankList = list?.filter((item) => item.tracks.length)
    const topSubRankList = list?.filter((item) => !item.tracks.length)
    return (
      <div className={prefixCls}>
        <h3>官方榜</h3>
        <ul className={`${prefixCls}-top`} style={{ marginBottom: '20px' }}>
          {topRankList?.map(({ coverImgUrl, id, tracks }: queryRankUsingGET.RankItem) => {
            return (
              <li key={id} className="rank-item">
                <img className="rank-image" src={coverImgUrl} alt="" />
                <div className="rank-right">
                  {tracks?.map(({ first, second }) => {
                    return (
                      <p className="rank-song" key={first}>
                        {first}/{second}
                      </p>
                    )
                  })}
                  <p className="music-name">全部</p>
                </div>
              </li>
            )
          })}
          <li className="rank-item">
            <img className="rank-image" src={artistToplist?.coverUrl} alt="" />
            <div className="rank-right">
              {artistToplist?.artists?.map(({ first }) => {
                return (
                  <p className="rank-song" key={first}>
                    {first}
                  </p>
                )
              })}
              <p className="music-name">全部</p>
            </div>
          </li>
        </ul>
        <h3>全球榜</h3>
        <ul className="music-list">
          {topSubRankList?.map(({ name, coverImgUrl, id }: queryRankUsingGET.RankItem) => {
            return (
              <li key={id} className=" music-item flex column  center">
                <img className="music-image" src={coverImgUrl} alt="" />
                <p className="music-name">{name}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
