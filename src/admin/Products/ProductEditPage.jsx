import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, message, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "antd/es/form/Form";

const ProductEditPage = ({ product, categories }) => {
  const [form] = useForm();
  const queryClient = useQueryClient();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  if (!product || !categories) return <Skeleton active />;

  const { mutate } = useMutation({
    mutationFn: async (formData) => {
      await axios.put(`http://localhost:3000/products/${product.id}`, formData);
    },
    onSuccess: () => {
      messageApi.success("Cập nhật sản phẩm thành công");
      queryClient.invalidateQueries({ queryKey: ["PRODUCTS_KEY"] });
      form.resetFields();
      navigate("/admin/products");
    },
  });

  return (
    <div>
      {contextHolder}
      <h1 className="text-3xl font-semibold mb-5">Cập nhật sản phẩm</h1>
      <Form
        form={form}
        initialValues={{ ...product }}
        name="product-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={(formData) => mutate(formData)}
      >
        <Form.Item
          label="Tên sản phẩm"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Mô tả sản phẩm" name="description">
          <TextArea />
        </Form.Item>

        <Form.Item
          label="Danh mục"
          name="category_id"
          rules={[{ required: true, message: "Vui lòng chọn danh mục" }]}
        >
          <Select>
            {categories?.map((category) => (
              <Select.Option key={category.id} value={category.id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Trạng thái" name="status">
          <Select>
            <Select.Option value="Active">Active</Select.Option>
            <Select.Option value="Deactive">Deactive</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Cập nhật sản phẩm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductEditPage;
