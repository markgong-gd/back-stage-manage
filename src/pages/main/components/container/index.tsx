import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';

import menuConfig, { MenuRoute } from '@config/menu';
import Header from '../header';
import Nav from '../nav';
import BreadNav from './bread-nav';

const { Content, Footer } = Layout;
const { useState } = React;

export function renderRouteItem(list: MenuRoute) {
  const { path, exact, component } = list;

  return <Route key={path} path={path} exact={exact} component={component as React.ComponentType<any>} />;
}

export default function Container() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Nav collapsed={collapsed} />
      <Layout className="site-layout">
        <Header setCollapsed={setCollapsed} collapsed={collapsed} />
        <Content style={{ margin: '0 16px' }}>
          <BreadNav />
          <Switch>
            {menuConfig.map((menu: MenuRoute) => {
              return renderRouteItem(menu);
            })}
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>This Project ©2020 Created by gongding</Footer>
      </Layout>
    </Layout>
  );
}
