import React from 'react'
// import { Tooltip } from 'antd'

import AppSideMenus from './side-menus.json'
import './app-sidebar.less'

interface SideMenuItem {
  key: string
  href: string
  title: string
  icon: string
}
interface SideMenuCategory {
  title: string
  children: Array<SideMenuItem>
}

interface State {
  activeMenuKey: string
}

export class AppSidebar extends React.Component<unknown, State> {
  state: State = {
    activeMenuKey: '', // AppSideMenus[0]?.key
  }

  componentDidMount(): void {
    window.addEventListener('router_update', (e: any) => {
      const routeProps: PageProps = e.detail
      this.setState({ activeMenuKey: routeProps.name })
    })
  }

  render(): JSX.Element {
    return (
      <div className="app-sidebar">
        <div className="mt-24 flex center app-sidebar-header">
          <img width="40" src={$tools.APP_ICON} />
        </div>

        <div className="flex column side-menu">{AppSideMenus.map(this.renderMenuItem)}</div>
      </div>
    )
  }

  renderMenuItem = ({ title, children }: SideMenuCategory): JSX.Element => {
    const { activeMenuKey } = this.state
    // const isActive = activeMenuKey === key
    // const iconProps: IconProps = { type: icon, className: 'fs-24' }
    // if (activeMenuKey === key) {
    //   iconProps.theme = 'filled'
    //   iconProps.style = { color: '#fff' }
    // }
    return (
      <div className={'side-menu-box'}>
        <span>{title}</span>
        <div className={'side-menu-children'}>
          {children.map(({ key, title: subTitle, icon, href }: SideMenuItem) => {
            const isActive = activeMenuKey === key
            return (
              <a
                key={key}
                className={`side-menu-item fs-24 ri-${icon}-${isActive ? 'fill' : 'line'}`}
                style={{ color: isActive ? '#808695' : '#000' }}
                href={href}
              >
                {subTitle}
              </a>
            )
          })}
        </div>
      </div>
      // <Tooltip key={key} overlayClassName="side-menu-item-tooltip" placement="right" title={title}>
      //  <a
      //     className={`side-menu-item fs-24 ri-${icon}-${isActive ? 'fill' : 'line'}`}
      //     style={{ color: isActive ? '#fff' : '#000' }}
      //     href={href}
      //   ></a>
      // </Tooltip>
    )
  }
} // class AppSidebar end
