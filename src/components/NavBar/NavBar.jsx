import React from 'react'
import LogoPage from '../../assets/logo-page.png'
import coffee from '../../assets/coffee.jpg'
import { NavLink } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { category } from './category';
import { Button, Drawer, Dropdown, Menu, Space } from 'antd';
import { useState } from 'react';

const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <NavLink to={'/Login'}>
                        <p target="_blank" rel="noopener noreferrer">
                            Login
                        </p>
                    </NavLink>
                ),
            },
        ]}
    />
);

export default function NavBar() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };


    return (
        <>
            <header>
                <img src={LogoPage} alt="" className='logo' />
                <nav className='nav__links'>
                    <ul>
                        <NavLink to={'/'}>
                            <li>Home</li>
                        </NavLink>
                        <li className='menu'>Menu
                            <ul className='category'>
                                {category.map((item, index) => <NavLink to={item.path} key={index}>
                                    <li>{item.title}</li>
                                </NavLink>)}
                            </ul>
                        </li>
                        <NavLink to={'/cart'}>
                            <li>Cart</li>
                        </NavLink>
                    </ul>
                </nav>
                <div className="icons">
                    <Button style={
                        {
                            fontSize: '28px',
                            background: 'none',
                            border: 'none',
                            color: 'black'
                        }
                    }
                        type="primary" onClick={showDrawer}>
                        <BsSearch />
                    </Button>
                    <Drawer title="Search" placement="right" onClose={onClose} visible={visible}>
                        <input type="Search" placeholder='Nhập tên sản phẩm' className='search__input' />
                        <div className="product__listing">
                            <img src={coffee} alt="" />
                            <p>Name Product</p>
                            <span>19.000đ</span>
                        </div>
                    </Drawer>

                    <Space direction="vertical">
                        <Space wrap>
                            <Dropdown overlay={menu} placement="bottom">
                                <Button style={
                                    {
                                        fontSize: '30px',
                                        background: 'none',
                                        border: 'none',
                                        color: 'black'
                                    }
                                }><BiUserCircle /></Button>
                            </Dropdown>
                        </Space>
                    </Space>
                </div>
            </header>

        </>
    )
}