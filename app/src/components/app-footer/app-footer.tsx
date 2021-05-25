import React from 'react'
import $c from 'classnames'

import './app-footer.less'

interface AppFooterProps {
  createConfig: CreateConfig
  children: any
}

export class AppFooter extends React.Component {
  render(): JSX.Element {
    // const { createConfig } = this.props
    // console.log(createConfig)
    const prefixCls = 'app-footer'
    return (
      <div className={$c('flex app-footer center-v between')}>
        <section className={`${prefixCls}-music`}>
          <div className={`${prefixCls}-music__avatar`}>
            <img src="http://p1.music.126.net/moAO9w0T6N0DT9L2pExjog==/109951166002468676.jpg" alt="" />
          </div>
          <div className={`${prefixCls}-music__content`}>
            <p>
              <span>sadsadsadsadadadadadadadsa</span>
              <i className="ri-video-line"></i>
            </p>
            <div className={`${prefixCls}-music__icon`}>
              <i className="ri-heart-line"></i>
              <i className="ri-download-2-line"></i>
              <i className="ri-share-box-line"></i>
            </div>
          </div>
        </section>
        <section className={`${prefixCls}-play`}>播放</section>
        <section className={`${prefixCls}-word`}>播放</section>
      </div>
    )
  }
} // class AppFooter end
