import React from 'react';
import { Menu } from 'antd';
import { Coins, Film, Home } from 'lucide-react';
import { CheckSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({title = "Pirate Movies"}) => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <>
            <Menu mode="horizontal" theme="dark" style={{ top: 0, position: 'fixed', zIndex: 2, width: '100%' }} selectedKeys={[currentPath]}>
                <Menu.Item key="/none" icon={<Film size={24} />} style={{ marginRight: 'auto', pointerEvents: 'none' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>{title}</span>
                </Menu.Item>
                <Menu.Item key="/" style={{ display: 'flex', alignItems: 'center' }} icon={<Home />}>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Movies</Link>
                </Menu.Item>
                <Menu.Item key="/coin-tracker" style={{ display: 'flex', alignItems: 'center' }} icon={<Coins />}>
                    <Link to="/coin-tracker" style={{ color: 'inherit', textDecoration: 'none' }}>Coin Tracker</Link>
                </Menu.Item>
                <Menu.Item key="/todo-list" style={{ display: 'flex', alignItems: 'center' }} icon={<CheckSquare />}>
                    <Link to="/todo-list" style={{ color: 'inherit', textDecoration: 'none' }}>ToDo List</Link>
                </Menu.Item>
            </Menu>
            <div style={{ marginTop: 52 }} />
        </>
    );
};

export default Navigation;