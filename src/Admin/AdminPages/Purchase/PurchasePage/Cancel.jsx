import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  Pagination,
  Popconfirm,
  Table,
  Typography,
} from "antd";


import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import { fetchProductAction, PRODUCT_LIMIT } from "store/slices/product.slice";


export function Cancel() {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.productState);
  console.log("🚀 ~ file: Confirm.jsx ~ line 23 ~ Confirm ~ productState", productState)
  const [showAddModal, setShowAddModal] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  const defaultPage = 1;

  const _page = searchParams.get("page") ?? `${defaultPage}`;
  const _limit = searchParams.get("limit") ?? `${PRODUCT_LIMIT}`;

  const loading = productState?.loading;
  const data = productState?.data;
  console.log("🚀 ~ file: Confirm.jsx ~ line 34 ~ Confirm ~ data", data)
  const total = productState.pagination.total;

  useEffect(() => {
    dispatch(fetchProductAction({ page: _page, limit: _limit }));
  }, [dispatch, _page, _limit]);

  const onPaginationChange = (page, limit) => {
    setSearchParams({ page, limit });
  };

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "NameProduct",
      dataIndex: "NameProduct",
      key: "NameProduct",
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "Address",
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        // const editable = isEditing(record);
        return true ? (
          <span>
            <Typography.Link
              onClick={() => setShowAddModal(true)}
              style={{
                marginRight: 8,
              }}
            >
              Confirmed
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={() => {}}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link onClick={() => {}}></Typography.Link>
        );
      },
    },
  ];

  return (
    <div className="confirm">
      <h1 style={{textAlign:'center'}}>Product Management</h1>
      {/* <Button onClick={() => setShowAddModal(true)}>+ Add Product</Button>
      <Modal
        title="Confirm"
        visible={showAddModal}
        onOk={() => {}}
        onCancel={() => setShowAddModal(false)}
        okText={"submit"}
      >
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </Modal> */}
      <Table
        pagination={false}
        // loading={loading}
        columns={columns}
        dataSource={data}
      />
      <div style={{textAlign:'center', width:'100%'}}>
      <Pagination
        onChange={onPaginationChange}
        pageSize={+_limit}
        current={+_page}
        total={total}
      />
      </div>
    </div>
  );
}
