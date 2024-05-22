import React from 'react';
import styled from 'styled-components';

// Styled component cho tiêu đề
const AboutHeader = styled.section`
  text-align: center;
  margin-bottom: 20px;
`;

// Styled component cho các phần
const AboutSection = styled.section`
  margin-bottom: 30px;
`;

// Styled component cho footer
const AboutFooter = styled.footer`
  text-align: center;
  margin-top: 50px;
`;

const AboutPage = () => {
  return (
    <div>
      <AboutHeader>
        <h1>Giới thiệu về chúng tôi</h1>
      </AboutHeader>
      <AboutSection>
        <h2>Lợi ích của việc mua điện thoại trực tuyến</h2>
        <p>Trong thời đại công nghệ phát triển như hiện nay, việc mua sắm điện thoại qua internet mang lại sự tiện lợi vô cùng đáng kể. Người tiêu dùng không cần phải di chuyển tới các cửa hàng vật lý, mà chỉ cần kết nối internet để có thể lựa chọn từ hàng trăm, thậm chí hàng ngàn mẫu mã khác nhau một cách dễ dàng.</p>
      </AboutSection>
      <AboutSection>
        <h2>Nhược điểm và cách tránh rủi ro</h2>
        <p>Mặc dù việc mua sắm điện thoại trực tuyến mang lại nhiều lợi ích, nhưng cũng đi kèm với một số nhược điểm và rủi ro. Trong số đó, nguy cơ mua phải hàng giả, hàng nhái là điều không thể tránh khỏi. Để tránh rủi ro này, người tiêu dùng nên mua hàng từ các trang web uy tín, có đánh giá tốt từ cộng đồng người dùng.</p>
      </AboutSection>
      <AboutSection>
        <h2>Hướng dẫn và mẹo khi mua sắm</h2>
        <p>Để có trải nghiệm mua sắm trực tuyến tốt nhất, người tiêu dùng cần lưu ý một số hướng dẫn và mẹo như: nắm vững thông tin về sản phẩm, so sánh giá cả, kiểm tra chính sách đổi trả và bảo hành trước khi quyết định mua hàng.</p>
      </AboutSection>
      <AboutFooter>
        <p>Copyright © 2024. All rights reserved.</p>
      </AboutFooter>
    </div>
  );
};

export default AboutPage;
