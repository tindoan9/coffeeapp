import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const [isModalVisible, setIsModalVisible] = useState(false);
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const navigate = useNavigate()
    const handleLoginForm = () => {
    }

    return (
        <div className='form__login'>
            <h2>Login</h2>
            <Form
                className='form'
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input style={{ width: '400px' }} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password style={{ width: '400px' }} />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Đăng Nhập
                    </Button>
                </Form.Item>
            </Form>
            <span className='link__register'>
                Bấm vào đây để tạo tài khoản!
                <span className='modal__register' type="primary" onClick={showModal}>
                    Đăng ký
                </span>
                <Modal title="Register"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <div className="form__register">
                        <input type="text" placeholder='Username' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Password' />
                        <input type="text" placeholder='Confirm Password' />
                    </div>
                </Modal>
            </span>

        </div >
    )
}