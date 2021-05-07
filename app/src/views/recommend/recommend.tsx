import * as React from 'react'
import { Button, Input, Spin, Card } from 'antd'

import { withStore } from '@/src/components'

import './recommend.less'

interface DemoProps extends PageProps, StoreProps {
  count: StoreStates['count']
  countAlias: StoreStates['count']
}

declare interface RecommendState {
  loading: boolean
  songData: Partial<queryRecommendSongUsingGET.Response>
}

/**
 * DemoProps 是组件的 props 类型声明
 * RecommendState 是组件的 state 类型声明
 * props 和 state 的默认值需要单独声明
 */

@withStore(['count', { countAlias: 'count' }])
export default class Recommend extends React.Component<DemoProps, RecommendState> {
  // state 初始化
  state: RecommendState = {
    loading: false,
    songData: {},
  }

  // 构造函数
  constructor(props: DemoProps) {
    super(props)
  }

  componentDidMount(): void {
    this.fetchSongList()
  }

  fetchSongList(): void {
    this.setState({ loading: true })
    $api
      .queryRecommendSong({ limit: 30 }, { method: 'GET' })
      .then((resData) => {
        console.log(resData)

        this.setState({ songData: resData })
      })
      .finally(() => this.setState({ loading: false }))
  }

  render(): JSX.Element {
    const { songData } = this.state
    const { playlists } = songData
    return (
      <div className="layout-padding">
        <Card title="推荐">
          <ul className=" music-list">
            {playlists?.map(({ name, coverImgUrl, id }) => {
              return (
                <li key={id} className=" music-item flex column  center">
                  <img className="music-image" src={coverImgUrl} alt="" />
                  <p className="music-name">{name}</p>
                </li>
              )
            })}
          </ul>
        </Card>
      </div>
    )
  }
} // class Demo end
