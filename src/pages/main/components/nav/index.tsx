import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { ReactComponentLike } from 'prop-types';

import menuConfig, { MenuRoute } from '@config/menu';
import logo from '@assets/images/main/logo.png';
import './index.less';

const { Sider } = Layout;
// const { SubMenu } = Menu;
const { useState } = React;

interface Props {
  collapsed: boolean;
}

const currentKey = window.location.hash.slice(1);
export default function Nav({ collapsed }: Props) {
  const [activeKey, setActiveKey] = useState(currentKey);

  function sideBarMenu(list: MenuRoute) {
    const { icon, path, name } = list;
    const Icon = icon as ReactComponentLike;
    return (
      <Menu.Item key={path} icon={<Icon className="menu-item-icon" />} onClick={() => setActiveKey(path as string)}>
        <Link to={path as string}>{name}</Link>
      </Menu.Item>
    );
  }

  return (
    <Sider collapsible collapsed={collapsed} trigger={null} style={{ width: collapsed ? 80 : 200 }}>
      <a className="ant-layout-logo-link" href="/">
        <img className="ant-layout-logo" src={logo} alt="logo" style={{ height: collapsed ? '50%' : '80%' }} />
      </a>
      <Menu theme="dark" selectedKeys={[activeKey]} mode="inline">
        {menuConfig.map((menu: MenuRoute) => {
          return sideBarMenu(menu);
        })}
      </Menu>
    </Sider>
  );
}
