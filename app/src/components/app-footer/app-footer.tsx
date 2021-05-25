import React from 'react'
import $c from 'classnames'

import './app-footer.less'

interface AppFooterProps {
  createConfig: CreateConfig
  children: any
}

export class AppFooter extends React.Component<AppFooterProps> {
  render(): JSX.Element {
    const { createConfig } = this.props
    console.log(createConfig)

    return (
      <div className={$c('flex app-footer')}>
        <div className="flex-1 app-content-wrap">
          <div className="">播放</div>
        </div>
      </div>
    )
  }
} // class AppFooter end
