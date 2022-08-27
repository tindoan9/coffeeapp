import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  logoutAction,
  updateUserInfoAction,
} from "../../../stores/slices/user.slice";
import { useNavigate } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default function Profile() {
  const userInfo = useSelector((state) => state.user.userInfoState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = userInfo?.data?.name;
  const email = userInfo?.data?.email;
  const phone = userInfo?.data?.phone;
  const address = userInfo?.data?.address;
  const decentralization = userInfo?.data?.decentralization
  const userID = userInfo?.data?.id

  const [userNameInput, setUserNameInput] = useState(userName);
  const [emailInput, setEmailInput] = useState(email);
  const [phoneInput, setPhoneInput] = useState(phone);
  const [addressInput, setAddressInput] = useState(address);

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate(`/`);
  };

  const onFinish = (values) => {
    dispatch(updateUserInfoAction({values, decentralization, userID}));
    navigate(`/profile`);
  };

  return (
    <>
      <div className="profile__member">
        <div className="info__member">
          <h1>Thông tin cá nhân</h1>
          <div className="form__profile">
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              onFinishFailed={() => {}}
            >
              <Form.Item
                name={["name"]}
                label="Name"
                rules={[
                  {
                    type: "name",
                  },
                ]}
              >
                <Input
                  style={{ width: "400px" }}
                  placeholder={userNameInput}
                  onChange={(e) => setUserNameInput(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Email"
                rules={[
                  {
                    type: "email",
                  },
                ]}
              >
                <Input
                  style={{ width: "400px" }}
                  disabled
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                name={["phone"]}
                label="Số Điện Thoại"
                rules={[
                  {
                    type: "text",
                  },
                ]}
              >
                <Input
                  type="number"
                  style={{ width: "400px" }}
                  placeholder={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                />
              </Form.Item>
              <Form.Item name={["address"]} label="Địa chỉ">
                <Input
                  style={{ width: "400px" }}
                  placeholder={addressInput}
                  onChange={(e) => setAddressInput(e.target.value)}
                />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Cập nhật
                </Button>
                <button
                  onClick={handleLogout}
                  className="btn__logout"
                  type="primary"
                  htmlType="submit"
                >
                  Thoát
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
