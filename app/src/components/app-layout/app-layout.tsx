import React from 'react'
import $c from 'classnames'

import { AppTitlebar, AppSidebar } from '../'

import './app-layout.less'

interface AppLayoutProps {
  createConfig: CreateConfig
  children: any
}

export class AppLayout extends React.Component<AppLayoutProps> {
  render(): JSX.Element {
    const { createConfig } = this.props
    console.log(createConfig)

    return (
      <div className={$c('flex app-layout', { 'has-titlebar': createConfig.showTitlebar }, process.platform)}>
        {createConfig.showSidebar ? <AppSidebar /> : null}
        <div className="flex-1 app-content-wrap">
          {createConfig.showTitlebar ? <AppTitlebar /> : null}
          <div className="app-content">{this.props.children}</div>
          <div className="app-footer">播放</div>
        </div>
      </div>
    )
  }
} // class AppLayout end
