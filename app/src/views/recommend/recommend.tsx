import * as React from 'react'
import { Tabs } from 'antd'
import { StickyContainer, Sticky } from 'react-sticky'

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

const { TabPane } = Tabs
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
    console.log(this.props)

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

  renderTabBar(props: any, DefaultTabBar: React.ComponentType): React.ReactElement {
    return (
      <Sticky topOffset={80} relative={true}>
        {({ style }) => <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />}
      </Sticky>
    )
  }

  render(): JSX.Element {
    const { songData } = this.state
    const { playlists } = songData
    return (
      <div className="music">
        <h3 className="title">标题</h3>
        <StickyContainer style={{ overflow: 'auto', height: '100%' }}>
          <Tabs defaultActiveKey="1" type="line" renderTabBar={this.renderTabBar}>
            <TabPane tab="精选" key="1">
              <ul className="music-list">
                {playlists?.map(({ name, coverImgUrl, id }) => {
                  return (
                    <li key={id} className=" music-item flex column  center">
                      <img className="music-image" src={coverImgUrl} alt="" />
                      <p className="music-name">{name}</p>
                    </li>
                  )
                })}
              </ul>
            </TabPane>
            <TabPane tab="电台" key="2">
              2
            </TabPane>
            <TabPane tab="歌手" key="3">
              3
            </TabPane>
            <TabPane tab="排行" key="4">
              4
            </TabPane>
            <TabPane tab="歌单" key="5">
              5
            </TabPane>
          </Tabs>
        </StickyContainer>
      </div>
    )
  }
} // class Demo end
