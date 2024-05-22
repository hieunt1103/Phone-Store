import React from 'react';
import { Drawer, Form, Input, Button, notification } from 'antd';
import InputComponent from '../../InputComponent/InputComponent';

const EditProductDrawer = ({ form, isDrawerOpen, onClose, updateProduct }) => (
    <Drawer title="Edit Product" visible={isDrawerOpen} onClose={onClose} width={480}>
        <Form
            form={form}
            layout="vertical"
            onFinish={(values) => {
                const productId = parseInt(values.id_product, 10); // Chuyển sang số
                if (isNaN(productId)) {
                    notification.error({
                        message: 'Invalid product ID',
                        description: 'Please enter a valid product ID.',
                    });
                    return;
                }

                const productData = {
                    nameProduct: values.nameProduct,
                    price: parseFloat(values.price),
                    stock_quantity: parseInt(values.stock_quantity, 10),
                    brand: values.brand,
                    descrip_product: values.descrip_product,
                    url_picture: values.url_picture,
                };
                console.log(productId, productData);
                updateProduct(productId, productData);
                // Gọi mutation để cập nhật sản phẩm
            }}
        >
            <Form.Item
                label="ID Product"
                name="id_product"
                rules={[{ required: true, message: 'Please enter the product ID' }]}
            >
                <InputComponent />
            </Form.Item>

            <Form.Item
                label="Product Name"
                name="nameProduct"
                rules={[{ required: true, message: 'Please enter the product name' }]}
            >
                <InputComponent />
            </Form.Item>

            <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please enter the price' }]}>
                <InputComponent />
            </Form.Item>

            <Form.Item
                label="Stock Quantity"
                name="stock_quantity"
                rules={[{ required: true, message: 'Please enter the stock quantity' }]}
            >
                <InputComponent />
            </Form.Item>

            <Form.Item label="Brand" name="brand" rules={[{ required: true, message: 'Please enter the brand' }]}>
                <InputComponent />
            </Form.Item>

            <Form.Item
                label="Description"
                name="descrip_product"
                rules={[{ required: true, message: 'Please enter the product description' }]}
            >
                <Input.TextArea
                    rows={4} // Số dòng ban đầu cho textarea
                    placeholder="Enter product description" // Nội dung gợi ý
                    allowClear // Cho phép người dùng xóa nội dung
                />
            </Form.Item>

            <Form.Item
                label="Image URL"
                name="url_picture"
                rules={[{ required: true, message: 'Please enter an image URL' }]}
            >
                <InputComponent allowClear placeholder="Enter image URL" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Update
                </Button>
            </Form.Item>
        </Form>
    </Drawer>
);

export default EditProductDrawer;
