import React, { useState } from "react";
import { Button, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteCartItemAction,
  getTotalBill,
  paymentAction,
  removeCartAction,
} from "../../../stores/slices/cart.slice";
import { v4 } from "uuid";
import EmptyComp from "./Empty/Empty";
import NoUser from "./Empty/NoUser";

export default function Cart() {
  const userInfo = useSelector((state) => state.user.userInfoState);
  const cartState = useSelector((state) => state.cart.cartState);

  const userName = userInfo?.data?.name;
  const phone = userInfo?.data?.phone;
  const address = userInfo?.data?.address;
  const totalBill = cartState.totalBill;
  const listCartItem = cartState?.cart;
  const idUser = userInfo?.data?.id;
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [infoOrder, setInfoOrder] = useState({
    name: `${userName}`,
    phone: `${phone}`,
    address: `${address}`,
    status: "Chờ xác nhận",
  });

  useEffect(() => {
    dispatch(getTotalBill());
  }, [listCartItem]);

  const handleDeleteItem = (id) => {
    dispatch(deleteCartItemAction(id));
    notification.success({
      message: `Bạn đã xóa một sản phẩm!`,
    });
  };

  const handleSubmitPayment = () => {
    if (!infoOrder.name || !infoOrder.phone || !infoOrder.address) {
      return notification.error({
        message: `Vui lòng nhập đầy đủ thông tin!`,
      });
    }
    let newOnlPayment = {
      id: v4(),
      userId: idUser,
      userName: infoOrder.name,
      phone: infoOrder.phone,
      address: infoOrder.address,
      totalBill: totalBill,
      status: infoOrder.status,
      date: date,
      listProductOrder: [...cartState.cart],
    };
    dispatch(paymentAction(newOnlPayment));
    dispatch(removeCartAction(cartState.cart.length));
    navigate(`/cart/success/${newOnlPayment.id}`);
  };

  if (!userInfo?.data) return <NoUser />;
  if (listCartItem.length === 0) return <EmptyComp />;

  return (
    <>
      <div className="cart">
        <h1>Xác Nhập đơn hàng</h1>
        <div className="order">
          <div className="info__member">
            <h2>Giao hàng</h2>
            <input
              type="text"
              value={infoOrder.name}
              onChange={(e) =>
                setInfoOrder({
                  ...infoOrder,
                  name: e.target.value,
                })
              }
            />
            <input
              type="number"
              value={infoOrder.phone}
              onChange={(e) =>
                setInfoOrder({
                  ...infoOrder,
                  phone: e.target.value,
                })
              }
            />
            <input
              type="text"
              value={infoOrder.address}
              onChange={(e) =>
                setInfoOrder({
                  ...infoOrder,
                  address: e.target.value,
                })
              }
            />
          </div>
          <div className="order__product">
            <h2>Sản phẩm đả chọn</h2>
            {listCartItem?.map?.((item) => {
              return (
                <div key={item.id} className="select__product">
                  <div className="img">
                    <img src={item.image} alt="OT" />
                  </div>
                  <div className="info">
                    <b>
                      <span>{item.count}</span> x {item.productName}
                    </b>
                    <p>
                      Size <span>{item.size.label}</span>
                    </p>
                    <b onClick={() => handleDeleteItem(item.id)}>Xóa</b>
                  </div>
                  <div className="price">
                    <span>{item.total}.000đ</span>
                  </div>
                </div>
              );
            })}

            <h2>Tổng cộng</h2>
            <div className="total">
              <span>thành tiền</span>
              <span>{totalBill}.000đ</span>
            </div>
            {/* <div className="transport__fee">
                        <span>Phí vận chuyển</span>
                        <span>10.000đ</span>
                    </div> */}
            <div className="payment">
              <div className="bill">
                <p>
                  Đơn hàng: <span>{totalBill}.000đ</span>
                </p>
              </div>
              <div className="payment__btn">
                <Button onClick={() => handleSubmitPayment()}>
                  Đặt Hàng
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
