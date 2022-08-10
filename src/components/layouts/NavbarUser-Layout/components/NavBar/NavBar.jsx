import React from "react";
import LogoPage from "../../../../../assets/logo-page.png";
import { NavLink, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { GrUserAdmin } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { category } from "./category";
import { Button, Drawer, Dropdown, Menu, Space, Badge } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTotalItem } from "../../../../../stores/slices/cart.slice";
import { searchProductAction } from "../../../../../stores/slices/product.slice";

const unauthenticatedMenu = [
  {
    key: "1",
    label: (
      <NavLink to={"/Login"}>
        <p target="_blank" rel="noopener noreferrer">
          Đăng nhập
        </p>
      </NavLink>
    ),
  },
];

const authenticatedMenu = [
  {
    key: "2",
    label: (
      <NavLink to={"/profile"}>
        <p target="_blank" rel="noopener noreferrer">
          Thông tin tài khoản
        </p>
      </NavLink>
    ),
  },
  {
    key: "3",
    label: (
      <NavLink to={"/order-list/confirm"}>
        <p target="_blank" rel="noopener noreferrer">
          Lịch sử mua hàng
        </p>
      </NavLink>
    ),
  },
];

const urlDashboard = (
  <>
    <Button
      style={{
        fontSize: "28px",
        background: "none",
        border: "none",
        color: "black",
      }}
    >
        <NavLink to={'/dashboard'}>
            <GrUserAdmin />
        </NavLink>
      
    </Button>
  </>
);

export default function NavBar() {
  const userInfo = useSelector((state) => state.user.userInfoState);
  const productState = useSelector((state) => state.product.productState);
  const cartState = useSelector((state) => state.cart.cartState);

  const cartItem = cartState.cartItem;
  const listCartItem = cartState.cart;
  const userInfoDashboard = userInfo?.data?.decentralization

  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [menuList, setMenuList] = useState([]);
  const [urlAdmin, setUrlAmin] = useState();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    dispatch(getTotalItem());
  }, [listCartItem]);

  useEffect(() => {
    return !userInfo.data
      ? setMenuList(unauthenticatedMenu)
      : setMenuList(authenticatedMenu);
  }, [userInfo]);
    
  useEffect(() => {
    return userInfo?.data?.decentralization === 'admin'
        ? setUrlAmin(urlDashboard)
        : setUrlAmin('');
  }, [userInfoDashboard])

  const handleSearchChange = (keyword) => {
    const values = keyword.target.value;
    dispatch(searchProductAction(values));
  };

  const navigate = useNavigate();
  const handleCoffeeDetail = (item) => {
    navigate(`/product-detail/${item.id}`, { state: { ...item } });
  };

  return (
    <>
      <header className="header__user">
        <img src={LogoPage} alt="" className="logo" />
        <nav className="nav__links">
          <ul>
            <NavLink to={"/"}>
              <li>Trang chủ</li>
            </NavLink>
            <li className="menu">
              Sản phẩm
              <ul className="category">
                {category.map((item, index) => (
                  <NavLink to={item.path} key={index}>
                    <li>{item.title}</li>
                  </NavLink>
                ))}
              </ul>
            </li>
            <NavLink to={"/cart"}>
              <Badge count={cartItem}>
                <li>Giỏ hàng</li>
              </Badge>
            </NavLink>
          </ul>
        </nav>
        <div className="icons">
          {urlAdmin}
          <Button
            style={{
              fontSize: "28px",
              background: "none",
              border: "none",
              color: "black",
            }}
            type="primary"
            onClick={showDrawer}
          >
            <BsSearch />
          </Button>
          <Drawer
            title="Search"
            placement="right"
            onClose={onClose}
            visible={visible}
          >
            <input
              type="Search"
              onChange={handleSearchChange}
              placeholder="Nhập tên sản phẩm"
              className="search__input"
            />
            {(productState?.search ?? []).map?.((item, index) => {
              return (
                <div
                  onClick={() => handleCoffeeDetail(item)}
                  key={index}
                  className="product__listing"
                >
                  <img src={item.image} alt="" />
                  <p>{item.productName}</p>
                  <span>{item.price}.000đ</span>
                </div>
              );
            })}
          </Drawer>

          <Space direction="vertical">
            <Space wrap>
              <Dropdown overlay={<Menu items={menuList} />} placement="bottom">
                <Button
                  style={{
                    fontSize: "30px",
                    background: "none",
                    border: "none",
                    color: "black",
                  }}
                >
                  <BiUserCircle />
                </Button>
              </Dropdown>
            </Space>
          </Space>
        </div>
      </header>
    </>
  );
}
