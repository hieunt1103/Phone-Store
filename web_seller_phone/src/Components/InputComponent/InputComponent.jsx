import React from 'react'; // Kiểm tra import React
import Input from 'antd/lib/input'; // Đảm bảo import từ đúng nguồn

const InputComponent = ({ size, placeholder, bordered, style, ...rests }) => {
  return (
    <Input
      size={size}
      placeholder={placeholder}
      bordered={bordered}
      style={style}
      {...rests}
    />
  );
};

export default InputComponent; // Export đúng cách
