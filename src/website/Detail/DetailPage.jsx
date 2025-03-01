import React from "react";
import { Button, Rate } from "antd";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

const DetailPage = () => {
  return (
    <>
      <section>
        <div style={{ backgroundColor: "#333" }}>
          <div
            className="container py-5 text-light"
            style={{ backgroundColor: "#333" }}
          >
            <div className="row mb-5">
              <div className="col-md-5">
                <div className="d-flex">
                  <div className="me-3 d-flex flex-column gap-2">
                    <img
                      src="https://cdn.tgdd.vn/Products/Images/42/334864/s16/iphone-16e-black-thumbtz-650x650.png"
                      alt="1"
                      className="img-fluid rounded shadow"
                      style={{ width: 80, height: 60, backgroundColor: "#fff" }}
                    />
                    <img
                      src="https://cdn.tgdd.vn/Products/Images/42/334864/s16/iphone-16e-black-thumbtz-650x650.png"
                      alt="2"
                      className="img-fluid rounded shadow"
                      style={{ width: 80, height: 60, backgroundColor: "#fff" }}
                    />
                    <img
                      src="https://cdn.tgdd.vn/Products/Images/42/334864/s16/iphone-16e-black-thumbtz-650x650.png"
                      alt="3"
                      className="img-fluid rounded shadow"
                      style={{ width: 80, height: 60, backgroundColor: "#fff" }}
                    />
                    <img
                      src="https://cdn.tgdd.vn/Products/Images/42/334864/s16/iphone-16e-black-thumbtz-650x650.png"
                      alt="4"
                      className="img-fluid rounded shadow"
                      style={{ width: 80, height: 60, backgroundColor: "#fff" }}
                    />
                    <img
                      src="https://cdn.tgdd.vn/Products/Images/42/334864/s16/iphone-16e-black-thumbtz-650x650.png"
                      alt="5"
                      className="img-fluid rounded shadow"
                      style={{ width: 80, height: 60, backgroundColor: "#fff" }}
                    />
                  </div>
                  <div>
                    <img
                      src="https://cdn.tgdd.vn/Products/Images/42/334864/s16/iphone-16e-black-thumbtz-650x650.png"
                      alt="Main"
                      className="img-fluid rounded shadow"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-7">
                <h3 className="text-light">iPhone 16 Pro Max</h3>
                <h2 className="text-warning">33.590.000đ</h2>
                <p className="text-light">
                  iPhone 16E mang lại trải nghiệm chụp ảnh, chơi game và làm
                  việc tuyệt vời nhất với màn hình OLED siêu nét, hiệu năng mạnh
                  mẽ từ A18 Bionic.
                </p>

                <div className="mb-3">
                  <span className="text-light">Color: </span>
                  <div className="d-flex gap-2 mt-2">
                    <div
                      className="rounded-circle bg-primary"
                      style={{ width: 30, height: 30 }}
                    ></div>
                    <div
                      className="rounded-circle bg-dark"
                      style={{ width: 30, height: 30 }}
                    ></div>
                    <div
                      className="rounded-circle bg-warning"
                      style={{ width: 30, height: 30 }}
                    ></div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3 mt-3">
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="form-control"
                    style={{ width: 80 }}
                  />
                  <Link to="">
                    <Button
                      type="primary"
                      icon={<ShoppingCartOutlined />}
                      className="bg-warning border-0 text-dark"
                    >
                      Add to Cart
                    </Button>
                  </Link>
                </div>

                <hr className="bg-light mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5">
        <section className="font-poppins">
          <h4 className="text-dark fw-bold">Mô tả sản phẩm</h4>
          <p className="text-secondary">
            iPhone 16 Pro Max mang lại trải nghiệm đẳng cấp với thiết kế sang
            trọng, cụm camera đột phá cùng chip A18 Bionic mạnh mẽ. Máy hỗ trợ
            5G tốc độ cao, pin dài cả ngày và hệ điều hành iOS mới nhất. Đây
            chính là lựa chọn hoàn hảo cho công việc và giải trí.
          </p>

          <h4 className="text-dark fw-bold mt-4">Đánh giá & Bình luận</h4>
          <div className="mb-4">
            <Rate defaultValue={5} className="mb-2" />
            <textarea
              rows={3}
              className="form-control"
              placeholder="Nhập bình luận của bạn..."
            />
            <button className="btn btn-warning mt-2">Gửi bình luận</button>
          </div>

          <div className="border p-3 rounded bg-light mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <strong>user1</strong>
              <Rate disabled defaultValue={5} />
            </div>
            <p className="mb-0">Sản phẩm rất tốt, đáng tiền!</p>
          </div>
        </section>

        <section className="font-poppins">
          <div style={{ backgroundColor: "#fff" }}>
            <div className="text-center mb-5 mt-5">
              <h2 className="text-dark fw-bold">Sản phẩm khác</h2>
            </div>

            <div className="container mb-4">
              <div className="row g-3">
                <div className="col-md-3">
                  <div className="card border-0 shadow-sm">
                    <Link to="detail">
                      <img
                        src="https://cdn.tgdd.vn/Products/Images/42/334864/s16/iphone-16e-black-thumbtz-650x650.png"
                        className="card-img-top img-fluid hover-scale"
                        alt="Product Image"
                      />
                    </Link>
                    <div className="card-body text-center">
                      <Link
                        to="detail"
                        className="text-decoration-none text-light"
                      >
                        <h5 className="text-secondary">iPhone 16 Pro Max</h5>
                      </Link>
                      <p className="text-secondary">iPhone</p>
                      <p className="text-warning fw-semibold fs-5">
                        33.590.000đ
                      </p>
                      <Link to="">
                        <button className="btn border border-warning text-secondary w-100 py-2 px-3 custom-hover">
                          Add to cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card border-0 shadow-sm">
                    <Link to="detail">
                      <img
                        src="https://cdn.tgdd.vn/Products/Images/42/334864/s16/iphone-16e-black-thumbtz-650x650.png"
                        className="card-img-top img-fluid hover-scale"
                        alt="Product Image"
                      />
                    </Link>
                    <div className="card-body text-center">
                      <Link
                        to="detail"
                        className="text-decoration-none text-light"
                      >
                        <h5 className="text-secondary">iPhone 16 Pro Max</h5>
                      </Link>
                      <p className="text-secondary">iPhone</p>
                      <p className="text-warning fw-semibold fs-5">
                        33.590.000đ
                      </p>
                      <Link to="">
                        <button className="btn border border-warning text-secondary w-100 py-2 px-3 custom-hover">
                          Add to cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card border-0 shadow-sm">
                    <Link to="detail">
                      <img
                        src="https://cdn.tgdd.vn/Products/Images/42/334864/s16/iphone-16e-black-thumbtz-650x650.png"
                        className="card-img-top img-fluid hover-scale"
                        alt="Product Image"
                      />
                    </Link>
                    <div className="card-body text-center">
                      <Link
                        to="detail"
                        className="text-decoration-none text-light"
                      >
                        <h5 className="text-secondary">iPhone 16 Pro Max</h5>
                      </Link>
                      <p className="text-secondary">iPhone</p>
                      <p className="text-warning fw-semibold fs-5">
                        33.590.000đ
                      </p>
                      <Link to="">
                        <button className="btn border border-warning text-secondary w-100 py-2 px-3 custom-hover">
                          Add to cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card border-0 shadow-sm">
                    <Link to="detail">
                      <img
                        src="https://cdn.tgdd.vn/Products/Images/42/334864/s16/iphone-16e-black-thumbtz-650x650.png"
                        className="card-img-top img-fluid hover-scale"
                        alt="Product Image"
                      />
                    </Link>
                    <div className="card-body text-center">
                      <Link
                        to="detail"
                        className="text-decoration-none text-light"
                      >
                        <h5 className="text-secondary">iPhone 16 Pro Max</h5>
                      </Link>
                      <p className="text-secondary">iPhone</p>
                      <p className="text-warning fw-semibold fs-5">
                        33.590.000đ
                      </p>
                      <Link to="">
                        <button className="btn border border-warning text-secondary w-100 py-2 px-3 custom-hover">
                          Add to cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailPage;
