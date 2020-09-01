import React from 'react';
import { Layout, Menu } from 'antd';
import { ReactComponentLike } from 'prop-types';

import menuConfig from '@config/menu';
import logo from '@assets/images/main/logo.png';
import './index.less';

const { Sider } = Layout;
// const { SubMenu } = Menu;

interface Props {
  collapsed: boolean;
}

export default function Nav({ collapsed }: Props) {
  return (
    <Sider collapsible collapsed={collapsed} trigger={null} style={{ width: collapsed ? 80 : 200 }}>
      <a className="ant-layout-logo-link" href="/">
        <img className="ant-layout-logo" src={logo} alt="logo" style={{ height: collapsed ? '50%' : '80%' }} />
      </a>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {menuConfig.map(menu => {
          const Icon = menu.icon as ReactComponentLike;
          return (
            <Menu.Item key={menu.path} icon={<Icon className="menu-item-icon" />}>
              {menu.name}
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
}
