import * as React from 'react'
import { Carousel } from 'antd'

import './transceiver.less'

interface DemoProps extends PageProps, StoreProps {
  count: StoreStates['count']
  countAlias: StoreStates['count']
}

declare interface TransceiverState {
  loading: boolean
  BannerData: Partial<queryDJBannerGET.Response>
}

/**
 * DemoProps 是组件的 props 类型声明
 * TransceiverState 是组件的 state 类型声明
 * props 和 state 的默认值需要单独声明
 */

export default class Transceiver extends React.Component<DemoProps, TransceiverState> {
  // state 初始化
  state: TransceiverState = {
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
        <Carousel infinite slidesToShow={3} centerMode>
          {arr?.map((item) => {
            return (
              <div key={item} className="banner-item">
                <img src={'http://p1.music.126.net/moAO9w0T6N0DT9L2pExjog==/109951166002468676.jpg'} />
              </div>
            )
          })}
        </Carousel>
        <h3 className="title">标题</h3>
      </div>
    )
  }
} // class Demo end
