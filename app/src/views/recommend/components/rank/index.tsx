import * as React from 'react'

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
    const { list } = ranks
    return (
      <div className={prefixCls}>
        <h3>rank</h3>
        <ul className="music-list">
          {list?.map(({ name, coverImgUrl, id }: queryRankUsingGET.RankItem) => {
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
