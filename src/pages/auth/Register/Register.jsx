import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { registerAction } from "../../../stores/slices/user.slice";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const schema = yup
  .object({
    email: yup
      .string()
      .required("Vui lòng nhập đúng Email!")
      .matches(emailRegex),
    password: yup
      .string()
      .min(5, "Mật khẩu không phải trên 5 ký tự!")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Require password")
      .oneOf([yup.ref("password")], "Mật khẩu chưa khớp"),
  })
  .required();

export default function Register() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    dispatch(registerAction(values));
    navigate(`/login`);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    register("email", { required: true });
    register("password", { required: true });
    register("confirmPassword", { required: true });
  }, [register]);

  return (
    <>
      <div className="profile__member">
        <div className="info__member">
          <h1>Đăng ký</h1>
          <div className="form__profile">
            <Form
              {...layout}
              name="nest-messages"
              onFinish={handleSubmit(onFinish, (err) => console.log(errors))}
            >
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, name, ref } }) => (
                  <Form.Item
                    validateStatus={errors.email && "error"}
                    help={errors?.email?.message}
                    name={["email"]}
                    label="Email"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      style={{ width: "400px" }}
                      onChange={onChange}
                      value={value}
                      name={name}
                      placeholder="Email"
                      ref={ref}
                    />
                  </Form.Item>
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value, name, ref } }) => (
                  <Form.Item
                    validateStatus={errors.password && "error"}
                    help={errors?.password?.message}
                    name={["password"]}
                    label="Mật khẩu"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input.Password
                      style={{ width: "400px" }}
                      onChange={onChange}
                      value={value}
                      name={name}
                      placeholder="Password"
                      ref={ref}
                    />
                  </Form.Item>
                )}
              />
            <Controller
               control={control}
               name='confirmPassword'
               render={({ field: { onChange, value, name, ref } }) => (
                     <Form.Item
                        validateStatus={errors.confirmPassword && "error"}
                        help={errors?.confirmPassword?.message}
                        name={["confirmPassword"]}
                        label="Xác nhận mật khẩu"
                        rules={[
                           {
                             required: true,
                           },
                         ]}
                     >
                  <Input.Password 
                     style={{ width: "400px" }} 
                     onChange={onChange}
                      value={value}
                      name={name}
                      placeholder="Nhập lại mật khẩu"
                      ref={ref}
                  />
               </Form.Item>
               )}
            />
              
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
