import React from 'react'
import { Button, Form, Input, InputNumber } from 'antd';

const layout = {
   labelCol: {
      span: 8,
   },
   wrapperCol: {
      span: 16,
   },
};

const validateMessages = {
   required: '${label} is required!',
   types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
   },
   number: {
      range: '${label} must be between ${min} and ${max}',
   },
};

export default function Profile() {
   const onFinish = (values) => {
      console.log(values);
   };


   return (
      <>
         <div className="profile__member">
            <div className="info__member">
               <h1>Thông tin tài khoản</h1>
               <div className="form__profile">
                  <Form {...layout}
                     name="nest-messages"
                     onFinish={onFinish}
                     validateMessages={validateMessages}>
                     <Form.Item
                        name={['user', 'name']}
                        label="Name"
                        rules={[
                           {
                              required: true,
                           },
                        ]}
                     >
                        <Input style={{ width: '400px' }} />
                     </Form.Item>
                     <Form.Item
                        name={['user', 'email']}
                        label="Email"
                        rules={[
                           {
                              type: 'email',
                           },
                        ]}
                     >
                        <Input style={{ width: '400px' }} />
                     </Form.Item>
                     <Form.Item
                        name={['user', 'age']}
                        label="Số Điện Thoại"
                        rules={[
                           {
                              type: 'number',
                              min: 0,
                              max: 99,
                           },
                        ]}
                     >
                        <Input style={{ width: '400px' }} />
                     </Form.Item>
                     <Form.Item name={['user', 'website']} label="Địa chỉ">
                        <Input style={{ width: '400px' }} />
                     </Form.Item>
                     <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                           Cập nhật
                        </Button>
                     </Form.Item>
                  </Form>
               </div>
            </div>
         </div>
      </>
   )
}