import React from 'react';
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const CheckoutPage = () => {
  return (
    <div className="checkout-wrapper py-5 home-wrapper-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="checkout-left-data">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark total-price">
                      Giỏ hàng
                    </Link>
                  </li>
                  <li className="breadcrumb-item total-price active" aria-current="page">
                    Thanh toán
                  </li>
                  <li className="breadcrumb-item total-price active">Vận chuyển</li>
                </ol>
              </nav>
              <h4 className="title total">Thông tin liên hệ</h4>
              <p className="user-details total">John Doe (johndoe@example.com)</p>
              <h4 className="mb-3">Địa chỉ giao hàng</h4>
              <form action="" className="needs-validation">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">Họ</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Họ" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Tên</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Tên" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address">Địa chỉ</label>
                  <input type="text" className="form-control" id="address" placeholder="123 Đường ABC" />
                </div>
                <div className="mb-3">
                  <label htmlFor="address2">Địa chỉ 2 <span className="text-muted">(Tùy chọn)</span></label>
                  <input type="text" className="form-control" id="address2" placeholder="Căn hộ, số nhà" />
                </div>
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="city">Thành phố</label>
                    <input type="text" className="form-control" id="city" placeholder="Thành phố" />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">Tỉnh/Thành phố</label>
                    <select className="form-select d-block w-100" id="state" required>
                      <option value="">Chọn...</option>
                      <option>Hà Nội</option>
                      <option>Hồ Chí Minh</option>
                      <option>Đà Nẵng</option>
                      <option>Hải Phòng</option>
                    </select>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Mã bưu chính</label>
                    <input type="text" className="form-control" id="zip" placeholder="Mã bưu chính" />
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/cart" className="btn btn-link text-dark">
                    <BiArrowBack className="me-2" />
                    Quay lại giỏ hàng
                  </Link>
                  <button className="btn btn-primary btn-lg" type="submit">Xác nhận đơn hàng</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
