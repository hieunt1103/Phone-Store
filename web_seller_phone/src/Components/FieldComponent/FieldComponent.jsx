import React from 'react';
import { Form, Input, InputNumber } from 'antd';

// Component để tạo các field trong form
const FieldComponent = () => {
  const [form] = Form.useForm(); // Sử dụng form từ Ant Design

  return (
    <Form form={form} layout="vertical">
      {/* Trường tên sản phẩm */}
      <Form.Item
        label="Product Name"
        name="nameProduct"
        rules={[{ required: true, message: 'Please enter the product name' }]}
      >
        <Input placeholder="Enter product name" />
      </Form.Item>

      {/* Trường giá */}
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please enter the price' }]}
      >
        <InputNumber placeholder="Enter price" min={0} />
      </Form.Item>

      {/* Trường số lượng hàng tồn kho */}
      <Form.Item
        label="Stock Quantity"
        name="stock_quantity"
        rules={[{ required: true, message: 'Please enter the stock quantity' }]}
      >
        <InputNumber placeholder="Enter stock quantity" min={0} />
      </Form.Item>

      {/* Trường thương hiệu */}
      <Form.Item
        label="Brand"
        name="brand"
        rules={[{ required: true, message: 'Please enter the brand' }]}
      >
        <Input placeholder="Enter brand" />
      </Form.Item>

      {/* Trường mô tả */}
      <Form.Item
        label="Description"
        name="descrip_product"
        rules={[{ required: true, message: 'Please enter the description' }]}
      >
        <Input.TextArea placeholder="Enter description" />
      </Form.Item>
    </Form>
  );
};

export default FieldComponent; // Export đúng cách
