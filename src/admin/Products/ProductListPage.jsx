import { PlusCircleOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Image,
  Input,
  message,
  Popconfirm,
  Select,
  Skeleton,
  Space,
  Table,
  Tag,
} from "antd";
import React, { useState } from "react";
import axios from "axios";
import { Drawer } from "antd";
import ProductEditPage from "./ProductEditPage";
import ProductsAddPage from "./ProductAddPage";

const ProductListPage = () => {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState();
  const [categoryFilter, setCategoryFilter] = useState();
  const [statusFilter, setStatusFilter] = useState();

  const { data, isLoading } = useQuery({
    queryKey: ["PRODUCTS_KEY"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/products");
      return data.map((item, index) => ({
        ...item,
        key: item.id,
        stt: index + 1,
      }));
    },
  });

  const { data: categories } = useQuery({
    queryKey: ["CATEGORIES_KEY"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/categories");
      return data;
    },
  });

  const { data: variants } = useQuery({
    queryKey: ["PRODUCT_VARIANTS_KEY"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:3000/product_variants"
      );
      return data;
    },
  });

  const { data: variantValues } = useQuery({
    queryKey: ["VARIANT_VALUES_KEY"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/variant_values");
      return data;
    },
  });

  const { data: variantImages } = useQuery({
    queryKey: ["VARIANT_IMAGES_KEY"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/variant_images");
      return data;
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (id) => {
      await fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" });
    },
    onSuccess: () => {
      messageApi.success("Xóa sản phẩm thành công");
      queryClient.invalidateQueries({ queryKey: ["PRODUCTS_KEY"] });
    },
  });

  const columns = [
    { title: "#", dataIndex: "stt", key: "stt" },
    {
      title: "Ảnh",
      dataIndex: "product_id",
      key: "image_url",
      render: (productId) => {
        const variant = variants?.find((v) => v.product_id === productId);
        const variantId = variant?.variant_id;

        const imageUrl = variantImages?.find(
          (img) => img.variant_id === variantId
        )?.image_url;

        const fallbackImage = data?.find(
          (p) => p.product_id === productId
        )?.image_url;

        return <Image width={50} height={50} src={imageUrl || fallbackImage} />;
      },
    },
    { title: "Tên sản phẩm", dataIndex: "name", key: "name" },
    {
      title: "Màu sắc",
      dataIndex: "product_id",
      key: "color_name",
      render: (productId) =>
        variantValues?.find((v) => v.variant_id === productId)?.color_name ||
        "-",
    },
    { title: "Dung lượng", dataIndex: "size", key: "size" },
    {
      title: "Giá",
      dataIndex: "product_id",
      key: "price",
      render: (productId) => {
        const value = variantValues?.find((v) => v.variant_id === productId);
        return value ? value.price.toLocaleString("vi-VN") + " VND" : "-";
      },
    },
    {
      title: "Số lượng",
      dataIndex: "product_id",
      key: "stock",
      render: (productId) =>
        variantValues?.find((v) => v.variant_id === productId)?.stock || "-",
    },
    {
      title: "Danh mục",
      dataIndex: "category_id",
      key: "category_id",
      render: (categoryId) =>
        categories?.find((c) => c.category_id === categoryId)?.name || "-",
    },
    {
      title: "Tình trạng",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status.trim() === "Active" ? "green" : "red"}>{status}</Tag>
      ),
    },
    {
      key: "action",
      width: 200,
      render: (_, item) => (
        <Space>
          <Popconfirm
            title="Xóa sản phẩm"
            description="Bạn có chắc chắn muốn xóa không?"
            onConfirm={() => mutate(item.id)}
            okText="Có"
            cancelText="Không"
          >
            <Button type="primary" danger>
              Xóa
            </Button>
          </Popconfirm>
          <Button type="primary">Cập nhật</Button>
        </Space>
      ),
    },
  ];

  const filteredData = data?.filter((product) => {
    const matchesName = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter
      ? product.category_id === categoryFilter
      : true;
    const matchesStatus = statusFilter ? product.status === statusFilter : true;
    return matchesName && matchesCategory && matchesStatus;
  });

  // Mở Drawer để thêm sản phẩm mới
  const showDrawer = () => setIsDrawerVisible(true);

  // Đóng Drawer
  const onClose = () => {
    setCurrentProduct(null);
    setIsDrawerVisible(false);
  };

  return (
    <div>
      {contextHolder}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-3xl font-semibold">Quản lý sản phẩm</h1>
        <Button type="default" onClick={showDrawer}>
          <PlusCircleOutlined /> Thêm sản phẩm
        </Button>
      </div>

      <Space style={{ marginBottom: 20 }}>
        <Input
          placeholder="Tìm kiếm sản phẩm theo tên"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: 300 }}
        />
        <Select
          placeholder="Chọn danh mục"
          style={{ width: 200 }}
          value={categoryFilter}
          onChange={setCategoryFilter}
        >
          <Select.Option value={null}>Tất cả</Select.Option>
          {categories?.map((category) => (
            <Select.Option
              key={category.category_id}
              value={category.category_id}
            >
              {category.name}
            </Select.Option>
          ))}
        </Select>
        <Select
          placeholder="Chọn tình trạng"
          style={{ width: 200 }}
          value={statusFilter}
          onChange={setStatusFilter}
        >
          <Select.Option value={null}>Tất cả</Select.Option>
          <Select.Option value="Active">Active</Select.Option>
          <Select.Option value="Deactive">Deactive</Select.Option>
        </Select>
      </Space>
      <Skeleton loading={isLoading} active>
        <Table dataSource={filteredData} columns={columns} rowKey="id" />
      </Skeleton>
      {/* Drawer cho việc thêm sản phẩm */}
      <Drawer
        title={currentProduct ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
        width={500}
        placement="right"
        onClose={onClose}
        open={isDrawerVisible}
        style={{ padding: 0, height: "100%" }}
        styles={{ body: { padding: 20, height: "100%" } }}
      >
        <div style={{ height: "100%", overflowY: "auto", padding: "20px" }}>
          {currentProduct ? (
            <ProductEditPage product={currentProduct} />
          ) : (
            <ProductsAddPage />
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default ProductListPage;
