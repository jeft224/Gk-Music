import * as React from 'react'
import { Tabs } from 'antd'
import { StickyContainer, Sticky } from 'react-sticky'

import './video.less'

interface DemoProps extends PageProps, StoreProps {
  count: StoreStates['count']
  countAlias: StoreStates['count']
}

declare interface VideoState {
  loading: boolean
  BannerData: Partial<queryDJBannerGET.Response>
}

const { TabPane } = Tabs

/**
 * DemoProps 是组件的 props 类型声明
 * TransceiverState 是组件的 state 类型声明
 * props 和 state 的默认值需要单独声明
 */
export default class Video extends React.Component<DemoProps, VideoState> {
  // state 初始化
  state: VideoState = {
    loading: false,
    BannerData: {},
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
      .queryDJBannerList({}, { method: 'GET' })
      .then((resData) => {
        console.log(resData)

        this.setState({ BannerData: resData })
      })
      .finally(() => this.setState({ loading: false }))
  }

  render(): JSX.Element {
    const { BannerData } = this.state
    const { data } = BannerData
    console.log(data)

    const arr = [1, 2, 4, 5, 6, 7]

    return (
      <div className="music">
        <h3 className="title">标题</h3>
        <StickyContainer style={{ overflow: 'auto', height: '100%' }}>
          <Tabs defaultActiveKey="1" type="line" renderTabBar={this.renderTabBar}>
            <TabPane tab="推荐" key="1">
              1
            </TabPane>
            <TabPane tab="视频" key="2">
              2
            </TabPane>
            <TabPane tab="MV" key="3">
              3
            </TabPane>
          </Tabs>
        </StickyContainer>
      </div>
    )
  }
} // class Demo end
