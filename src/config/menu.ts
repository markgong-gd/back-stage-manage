import Home from '@pages/home';
import ChatRoom from '@pages/chat-room';
import GoShop from '@pages/go-shop';

import icons from '@config/icon';

import { ReactComponentLike } from 'prop-types';

const { AudioOutlined, ShoppingCartOutlined, HomeOutlined } = icons;

export type MenuRoute = {
  name: string;
  icon?: ReactComponentLike;
  path?: string;
  showInMenu?: boolean;
  component?: ReactComponentLike;
  child?: MenuRoute[];
  exact?: boolean;
  strict?: boolean;
  authority?: object; // 用户鉴权
  onClick?: Function;
};

const menu: MenuRoute[] = [
  {
    name: '主页',
    icon: HomeOutlined,
    path: '/',
    component: Home,
    exact: true,
  },
  {
    name: '聊天室',
    icon: AudioOutlined,
    path: '/chat-room',
    component: ChatRoom,
  },
  {
    name: '购物',
    icon: ShoppingCartOutlined,
    path: '/go-shop',
    component: GoShop,
  },
];
export default menu;
