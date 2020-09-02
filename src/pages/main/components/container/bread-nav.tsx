import React from 'react';
import { Breadcrumb } from 'antd';
import { useLocation, matchPath } from 'react-router-dom';

import menuConfig, { MenuRoute } from '@config/menu';
import { ReactComponentLike } from 'prop-types';

const { useState, useEffect } = React;

export default function BreadNav() {
  const [currentMenu, setCurrentMenu] = useState<MenuRoute[]>([]);

  const { pathname } = useLocation();

  useEffect(() => {
    const data: MenuRoute[] = [];

    function checkPathName(menuList: MenuRoute[]) {
      return menuList.some(menu => {
        const { child, path, exact = true, strict = false } = menu;
        const match = matchPath(pathname, {
          path,
          exact,
          strict,
        });
        if (match) {
          data.unshift(menu);
          return true;
        } else if (child) {
          if (checkPathName(child)) {
            data.unshift(menu);
            return true;
          }
        }
        return false;
      });
    }

    checkPathName(menuConfig);
    setCurrentMenu(data);
  }, [pathname]);

  const bread = currentMenu.map(item => {
    const { icon, name, path } = item;
    const Icon = icon as ReactComponentLike;
    return (
      <Breadcrumb.Item key={path}>
        <Icon /> {name}
      </Breadcrumb.Item>
    );
  });

  return <Breadcrumb style={{ margin: '16px 0' }}>{bread}</Breadcrumb>;
}
