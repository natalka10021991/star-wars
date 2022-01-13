import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import './Nav';

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
  return (
    <Menu className='menu' mode='horizontal'>
      <Menu.Item>
        <Link to='/'>Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/people'>People</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/planets'>Planets</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/starships'>Starships</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
