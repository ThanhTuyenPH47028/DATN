import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, message, Select, Skeleton } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "antd/es/form/Form";

const CategoryEditPage = ({ category }) => {
  const [form] = useForm();
  const queryClient = useQueryClient();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  if (!category) return <Skeleton active />;
  const { mutate } = useMutation({
    mutationFn: async (formData) => {
      await axios.put(
        `http://localhost:3000/categories/${category.id}`,
        formData
      );
    },
    onSuccess: () => {
      messageApi.success("Cập nhật danh mục thành công");
      queryClient.invalidateQueries({ queryKey: ["CATEGORIES_KEY"] });
      form.resetFields();
      navigate("/admin/categories");
    },
  });

  return (
    <div>
      {contextHolder}
      <h1 className="text-3xl font-semibold mb-5">Cập nhật danh mục</h1>
      <Form
        form={form}
        initialValues={{ ...category }}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={(formData) => mutate(formData)}
      >
        <Form.Item
          label="Tên danh mục"
          name="name"
          rules={[
            { required: true, message: "Vui lòng nhập tên danh mục" },
            { min: 3, message: "Tên ít nhất 3 ký tự" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Mô tả danh mục" name="description">
          <TextArea />
        </Form.Item>
        <Form.Item
          label="Tình trạng danh mục"
          name="status"
          rules={[
            { required: true, message: "Vui lòng chọn tình trạng danh mục" },
          ]}
        >
          <Select>
            <Select.Option value="Active">Active</Select.Option>
            <Select.Option value="Deactive">Deactive</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CategoryEditPage;
