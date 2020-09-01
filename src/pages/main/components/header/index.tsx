import React from 'react';
import { Layout, Avatar } from 'antd';
import icon from '@config/icon';

import './index.less';

const { Header } = Layout;
const { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } = icon;

interface Props {
  setCollapsed: Function;
  collapsed: boolean;
}

export default function App({ setCollapsed, collapsed }: Props) {
  return (
    <Header className="site-layout-background layout-header" style={{ padding: 0, height: 64 }}>
      {collapsed ? (
        <MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)} className="slider-collapsed-icon" />
      ) : (
        <MenuFoldOutlined onClick={() => setCollapsed(!collapsed)} className="slider-collapsed-icon" />
      )}
      <div className="help">This project need you, welcome you join!</div>
      <div style={{ padding: '0 15px' }} className="sign-in">
        {/* {userInfo ? `欢迎, ${userInfo.role === 1 ? '管理员' : ''} ${userInfo.loginName}` : '未登陆'} */}
        <span className="sign-state-text">未登录</span>
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
    </Header>
  );
}
