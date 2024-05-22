import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3001', // Thay đổi dựa trên cấu hình máy chủ của bạn
});

const ProductService = {
  getAll: async () => {
    try {
      const res = await request.get('/api/get/product');
      return res.data; // Trả về dữ liệu từ máy chủ
    } catch (error) {
      console.error('Lỗi khi tải tất cả sản phẩm:', error);
      throw new Error('Không thể tải sản phẩm');
    }
  },

  create: async (product) => {
    try {
      // Kiểm tra dữ liệu sản phẩm trước khi gửi yêu cầu
      if (!product.nameProduct || typeof product.nameProduct !== 'string' || product.nameProduct.trim() === '') {
        throw new Error('Tên sản phẩm không hợp lệ');
      }

      const res = await request.post('/api/post/product', product); // Yêu cầu tạo sản phẩm
      return res.data;
    } catch (error) {
      console.error('Lỗi khi tạo sản phẩm:', error);
      if (error.response) {
        throw new Error(`Không thể tạo sản phẩm: ${error.response.data.message || 'Yêu cầu không hợp lệ'}`);
      }
      throw new Error('Đã xảy ra lỗi không mong muốn khi tạo sản phẩm');
    }
  },
  update: async (id, product) => {
    try {
      const res = await request.put(`/api/put/product/${id}`, product);
      return res.data;
    } catch (error) {
      console.error('Lỗi khi cập nhật sản phẩm:', error);
      throw new Error('Không thể cập nhật sản phẩm');
    }
  },
  delete: async (id) => {
    try {
      const res = await request.delete(`/api/delete/product/${id}`);
      return res.data; // Trả về phản hồi từ hoạt động xóa
    } catch (error) {
      console.error('Lỗi khi xóa sản phẩm:', error);
      throw new Error('Không thể xóa sản phẩm');
    }
  },
};


export default ProductService;
