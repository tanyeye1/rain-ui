import React from 'react';
import './home.less';
import packageJson from '../../package.json';
import { Link } from 'dumi';
const { version } = packageJson;
export default () => {
  const characteristics = [
    {
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
      title: '开箱即用',
      txt: '简单易用，降低使用者的代码量',
    },
    {
      img: 'https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg',
      title: 'TypeScript',
      txt: '使用 TypeScript 开发，提供完整的类型定义文件，提供更多的代码提示',
    },
    {
      img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr',
      title: '预设行为',
      txt: '更少的代码，更少的 Bug',
    },
    {
      img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr',
      title: '简单易用',
      txt: '在 Ant Design 上进行了自己的封装，更加易用',
    },
  ];
  return (
    <div className={'homePage'}>
      {/* 内容部分 */}
      <div className={'main'}>
        <div className={'header'}>
          <div className={'headerLeft'}>
            <h1 className={'title'}>Rain-ui</h1>
            <p className={'description'}>
              体验轻量级React Web开发体验
              <span className={version}>v{version}</span>
            </p>
            <p className={'buttons'}>
              <Link to="/guide">使用指南</Link>
              <Link to="/components">组件</Link>
              <a href="https://github.com/liufashi-Mr/rain-ui">在Github上查看</a>
            </p>
          </div>
          <div className={'headerRight'}>
            <img
              className={'headerImage'}
              alt="header-image"
              src="https://blog.liufashi.top/img/rain-ui.png"
            />
            <span className={'plus'}>+</span>
            <img
              className={'headerImage'}
              alt="header-image"
              src="http://concis.org.cn/images/react-icon.svg"
            />
          </div>
        </div>
        {/* 功能特性 */}
        <div className={'group'}>
          <div className={'groupTitle'}>
            <div />
            <span>功能特性</span>
            <div />
          </div>
          <ul className={'features'}>
            {characteristics.map((item) => {
              return (
                <li key={item.title}>
                  <p>
                    <img src={item.img} style={{ width: 74, height: 84 }} />
                  </p>
                  <p>{item.title}</p>
                  <p>{item.txt}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
