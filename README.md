# Database MySQL

1. Tạo Database và bảng cùng các mối liên hệ

create database phone_data;
use phone_data;
CREATE TABLE users (
id_user INT PRIMARY KEY AUTO_INCREMENT,
username NVARCHAR(255) NOT NULL,
email NVARCHAR(255) NOT NULL,
password NVARCHAR(255) NOT NULL
);

CREATE TABLE tokens (
id_token INT PRIMARY KEY AUTO_INCREMENT,
id_user INT,
token NVARCHAR(255),
FOREIGN KEY (id_user) REFERENCES users(id_user)
);

CREATE TABLE products(
id_product INT PRIMARY KEY AUTO_INCREMENT,
nameProduct NVARCHAR(255) NOT NULL,
price DECIMAL(10, 2) NOT NULL,
stock_quantity INT NOT NULL
);

CREATE TABLE descriptions (
id_product INT PRIMARY KEY,
descrip_product LONGTEXT NOT NULL,
FOREIGN KEY (id_product) REFERENCES products(id_product)
);

CREATE TABLE carts (
id_cart INT PRIMARY KEY AUTO_INCREMENT,
id_user INT,
FOREIGN KEY (id_user) REFERENCES users(id_user)
);

CREATE TABLE cart_items (
id_cart_item INT PRIMARY KEY AUTO_INCREMENT,
id_cart INT,
id_product INT,
quantity INT NOT NULL,
FOREIGN KEY (id_cart) REFERENCES carts(id_cart),
FOREIGN KEY (id_product) REFERENCES products(id_product)
);

CREATE TABLE pictures (
id_picture INT PRIMARY KEY AUTO_INCREMENT,
id_product INT,
url_picture LONGBLOB NOT NULL,
FOREIGN KEY (id_product) REFERENCES products(id_product)
);

CREATE TABLE orders(
id_order INT PRIMARY KEY AUTO_INCREMENT,
id_user INT,
total_amount DECIMAL(10, 2) NOT NULL,
FOREIGN KEY (id_user) REFERENCES users(id_user)
);

CREATE TABLE order_details(
id_order_detail INT PRIMARY KEY AUTO_INCREMENT,
id_order INT,
id_product INT,
quantity INT NOT NULL,
price DECIMAL(10, 2) not null,
FOREIGN KEY (id_order) REFERENCES orders(id_order),
FOREIGN KEY (id_product) REFERENCES products(id_product)
);

CREATE TABLE order_items (
  id_order_item INT AUTO_INCREMENT PRIMARY KEY,
  id_order INT NOT NULL,
  id_product INT NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (id_order) REFERENCES orders(id_order),
  FOREIGN KEY (id_product) REFERENCES products(id_product)
);

use phone_data;
insert into products(nameProduct, price, stock_quantity, descrip_product, url_picture, brand) values 
("iPhone 15", 27689999, 50, "iPhone 15 Pro Max được thiết kế mới với khung viền từ titan chuẩn hàng không vũ trụ, mang lại trọng lượng nhẹ và độ bền cao, cùng viền cạnh mỏng tạo cảm giác cầm nắm thoải mái. Với chip A17 Pro mạnh mẽ, điện thoại này mang lại hiệu năng Pro cho trải nghiệm chiến game sống động và chân thực. Ngoài ra, iPhone 15 Pro Max cũng có cụm 3 camera sau đến 48MP và nhiều chế độ quay phim chuyên nghiệp. Sản phẩm còn được trang bị nút tác vụ mới giúp kích hoạt tính năng yêu thích nhanh chóng. Chip A17 Pro của iPhone 15 Pro Max được sản xuất trên tiến trình 3nm, cải thiện hiệu suất CPU và GPU lên tới 10% và 20% lần lượt, cùng tiết kiệm năng lượng.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone15-pro-max-titan-trang.jpg", "Apple"),
("iPhone 13", 11690000, 30, "Sản phẩm iPhone 13 là flagship được mong chờ của năm 2021, tiếp tục mang đến nhiều đột phá trong thiết kế và tính năng. Không thay đổi kích thước so với iPhone 12, iPhone 13 vẫn giữ nguyên 4 phiên bản khác nhau. Thiết kế của iPhone 13 tiếp tục duy trì vẻ đẹp vuông vắn, với khung viền thép và mặt lưng kính. Apple tiếp tục cung cấp 4 phiên bản là iPhone 13, 13 mini, 13 Pro và 13 Pro Max, đáp ứng nhu cầu đa dạng của người dùng.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/_/h_ng_4.jpg", "Apple"),
("iPhone 14", 15200000, 40, "iPhone 14 dự kiến sẽ là một bước tiến đáng chú ý trong thế hệ điện thoại di động của Apple, với các cải tiến vượt trội trong thiết kế, hiển thị, hiệu suất và camera. Dự kiến sẽ có cải thiện đáng kể về màn hình và pin, cùng với sự tiếp tục phát triển về công nghệ chip xử lý. Ngoài ra, iPhone 14 cũng có thể mang lại nhiều tính năng mới và cải tiến trong kết nối và công nghệ nhận diện. Tuy nhiên, để biết thông tin chính xác và chi tiết, người dùng cần chờ đợi thông báo chính thức từ Apple khi sản phẩm được ra mắt.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/_/t_m_19.png", "Apple"),
("Samsung Galaxy S24 Ultra", 23490000, 100, "Samsung Galaxy S24 Ultra là siêu phẩm smartphone đỉnh cao mở đầu năm 2024 từ Samsung, hứa hẹn mang lại nhiều sự thay đổi lớn trong thiết kế và cấu hình. Với chip Snapdragon 8 Gen 3 For Galaxy mạnh mẽ và công nghệ tương lai Galaxy AI tích hợp, điện thoại này sẽ cung cấp trải nghiệm tuyệt vời cho người dùng. Thiết kế với vỏ ngoài bằng titan mới và màu sắc lấy cảm hứng từ đá tự nhiên tạo nên vẻ đẹp sang trọng và hoàn hảo. S24 Ultra cũng tích hợp S-Pen cực nhạy và camera 200MP hỗ trợ khả năng xử lý AI, cùng nhiều tính năng tiện ích như khoanh tròn để tìm kiếm và Live Translate. Với pin 5000mAh và màn hình Dynamic AMOLED 2X tần số quét 120Hz, người dùng có thể thỏa sức sử dụng cả ngày dài mà không lo hết pin. Đây chính là lựa chọn lý tưởng cho những ai đang tìm kiếm một chiếc smartphone hiện đại và mạnh mẽ.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/g/a/galaxy-s24-ultra-vang_1_3.png", "Samsung"),
("Samsung Galaxy S23 Ultra", 22390000, 40, "Samsung Galaxy S23 Ultra là dòng điện thoại cao cấp mới ra mắt từ đầu năm 2023, được Samfans săn đón với nhiều tính năng nổi bật. Với camera đến 200MP, chip Snapdragon 8 Gen 2 mạnh mẽ và pin 5.000mAh, S23 Ultra mang lại trải nghiệm chụp ảnh, quay video chuyên nghiệp và chiến game bùng nổ. Điểm nhấn của sản phẩm là Siêu bút S Pen tích hợp, giúp nâng cao hiệu suất làm việc và tương tác dễ dàng trên màn hình. Thiết kế cao cấp, thanh lịch và tinh tế với khung viền vuông vức, màn hình tràn viền mang đến vẻ đẹp thời thượng và sang trọng cho người dùng.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/2/s23-ultra-den_1.png", "Samsung"),
("Samsung Galaxy Z Fold5", 31900000, 50, "Samsung Galaxy Z Fold5 12GB 256GB là một trong những smartphone gập hàng đầu với thiết kế tinh tế và tính năng ấn tượng. Với nếp gấp vô hình được cải tiến thẩm mỹ, Z Fold5 mang lại trải nghiệm gập không kẽ hở và độ bền bỉ vượt trội với chuẩn kháng bụi và nước IPX8 cùng chất liệu nhôm Armor Aluminum. Màn hình trong 7.6 cùng bản lề Flex dẫn đầu công nghệ mở ra không gian giải trí cực đại, kèm theo đó là sự thoải mái sáng tạo mọi lúc với bút Spen tiện dụng. Với chip Snapdragon 8 Gen 2 for Galaxy và RAM 12GB, Z Fold5 đảm bảo hiệu năng vượt trội và xử lý mượt mà mọi tác vụ. Ngoài ra, cụm camera hiện đại với độ phân giải lên đến 50MP và viên pin 4400mAh cũng nâng tầm khả năng quay chụp của điện thoại này lên một tầm cao mới.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/g/a/galaxy-z-fold-5-xanh-1_1.jpg", "SamSung"),
("Xiaomi 14 ", 20490000, 40, "Xiaomi 14 5G là một trong những điện thoại hàng đầu với hiệu năng mạnh mẽ và trải nghiệm hình ảnh sống động. Với chip Snapdragon 8 Gen 3 (4nm) và RAM 12GB, điện thoại này có khả năng đa nhiệm cực đỉnh và xử lí mượt mà mọi tác vụ. Màn hình 6.36” với công nghệ LTPO OLED và tần số quét 120Hz mang lại trải nghiệm hình ảnh sống động và mượt mà. Bộ ba camera sau 50MP cùng chống rung OIS tạo ra những bức ảnh sắc nét và chất lượng. Dung lượng pin lớn 4610mAh và sạc nhanh 90W giúp đảm bảo năng lượng tràn đầy và sức mạnh cho thiết bị. Với các tính năng và công nghệ tiên tiến, Xiaomi 14 5G là một lựa chọn xuất sắc cho những người dùng đòi hỏi sự hiệu quả và chất lượng cao trong trải nghiệm điện thoại di động.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/x/i/xiaomi-14-pre-xanh-la_1.png", "Xiaomi"),
("Xiaomi Redmi Note 13", 6800000, 10, "Redmi Note 13 Pro 4G, một bước tiến vượt trội so với phiên bản tiền nhiệm, đem đến cho người dùng trải nghiệm đỉnh cao với thiết kế đẹp mắt, màn hình lớn Full HD+ 120Hz, hiệu năng mạnh mẽ với chip MediaTek Helio G99-Ultra, và hệ thống camera tiên tiến. Đây là một lựa chọn đáng chú ý trong phân khúc điện thoại tầm trung, đảm bảo đáp ứng được mọi nhu cầu sử dụng của người dùng hiện đại.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/x/i/xiaomi-redmi-note-13-pro-4g_12_.png", "Xiaomi"),
("Xiaomi POCO X6 Pro", 8290000, 50, "Xiaomi Poco X6 Pro là một lựa chọn hấp dẫn trong phân khúc tầm trung với màn hình AMOLED 120Hz sắc nét, hiệu năng mạnh mẽ từ chip Dimensity 8300 Ultra, bộ ba camera chất lượng và viên pin dung lượng lớn. Với những tính năng này, X6 Pro hứa hẹn mang lại trải nghiệm sử dụng mượt mà và đa dạng cho người dùng, đồng thời đảm bảo sự thoải mái trong quá trình sử dụng suốt cả ngày dài.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/_/t_i_xu_ng_22__6_1.png", "Xiaomi"),
("OPPO Reno11 F 5G", 8700000, 50, "OPPO Reno11 F 5G là một lựa chọn hấp dẫn với thiết kế thời thượng, hiệu năng mạnh mẽ và bộ ba camera chất lượng. Với màn hình AMOLED 120Hz sắc nét, chip Dimensity 7050 5G và pin dung lượng lớn, điện thoại này đáp ứng mọi nhu cầu của người dùng từ giải trí đến công việc, mang lại trải nghiệm mượt mà và đa dạng suốt cả ngày dài.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/_/t_i_xu_ng_11__2_4.png", "Oppo"),
("OPPO Find N3", 41990000, 50, "OPPO Find N3 là một bậc thầy thiết kế với độ mỏng nhẹ ấn tượng, kết hợp với màn hình rộng lớn và độ phân giải cao. Đi kèm là bộ ba camera hàng đầu và chip MediaTek Dimensity 9200 5G mạnh mẽ, máy đáp ứng tốt nhu cầu sử dụng đa nhiệm và chụp ảnh. OPPO Find N3 có giá khởi điểm từ 44.990.000đ tại thị trường Việt Nam.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/f/i/find_n3_-_combo_product_-_gold_1.png", "Oppo"),
("OPPO Reno7 ", 7590000, 50, "OPPO Reno7 5G là một lựa chọn đáng mua với thiết kế trang nhã, màn hình AMOLED sắc nét, hiệu năng ổn định do sử dụng chip MediaTek Dimensity 900 5G và RAM 8GB, pin dung lượng lớn 4500mAh cùng sạc nhanh 65W, và hệ thống camera chất lượng với camera chính 64MP. Thiết kế của OPPO Reno7 5G mang lại sự sang trọng với góc cạnh bo tròn mềm mại và khả năng cầm nắm dễ dàng.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/c/o/combo_product_-_blue_-_reno7_5g_1.png", "Oppo"),
("OPPO Reno6", 6790000, 50, "Oppo Reno6 Z 5G là một lựa chọn mạnh mẽ với thiết kế sang trọng, hiệu năng ổn định nhờ chip Dimensity 800U 5G, bộ 3 camera chất lượng lên đến 64MP, màn hình AMOLED 6.4 inch sắc nét, viên pin dung lượng lớn 4310mAh và công nghệ sạc nhanh 30W. Điện thoại này đem lại trải nghiệm đỉnh cao cho người dùng.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/o/p/oppo_reno6_1.jpg", "Oppo"),
("realme C60", 2790000, 50, "Realme C60 là một chiếc điện thoại mạnh mẽ và thời thượng, với chip xử lý Unisoc T612, RAM 4 GB và bộ nhớ 64 GB giúp đem lại trải nghiệm mượt mà. Màn hình IPS LCD 6.74 inches cung cấp hình ảnh sắc nét và sinh động. Điểm nhấn của sản phẩm là hệ thống camera 13MP và viên pin dung lượng lớn 5000 mAh, đảm bảo sử dụng suốt cả ngày mà không cần lo lắng về việc hết pin.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/x/i/xiaomi-c60-den.png", "Real me"),
("realme 11 Pro ", 9690000, 50, "Realme 11 Pro là một chiếc điện thoại cao cấp với màn hình cong hiển thị đục lỗ ở giữa, đạt tần số quét 120Hz, mang lại trải nghiệm hình ảnh mượt mà và sống động. Điểm nhấn của sản phẩm là ống kính cảm biến chính lên đến 100MP, cho phép ghi lại hình ảnh chi tiết và rõ nét từng chi tiết nhỏ. Vi xử lý MediaTek Dimensity 7050 cung cấp hiệu năng mạnh mẽ, đáp ứng tốt cho các nhu cầu sử dụng hàng ngày và chơi game. Thiết kế mặt lưng giả da sang trọng với đường chỉ căn giữa và cụm camera hình tròn đầy nổi bật làm cho sản phẩm trở nên ấn tượng.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/r/e/realme-11-pro_1.png", "Real me"),
("vivo V29E", 7490000, 50, "Vivo V29e là một điện thoại thông minh với hiệu năng mạnh mẽ từ chip Snapdragon 695, màn hình AMOLED 120Hz sắc nét, pin khủng 4800 mAh kèm sạc siêu tốc 44W, và hệ thống camera cải tiến. Điều này giúp Vivo V29e trở thành một trong những lựa chọn hàng đầu cho người dùng muốn trải nghiệm sự mạnh mẽ và đa dạng trong một chiếc điện thoại di động.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/v/i/vivo-v29e-xanh.png", "Vivo"),
("vivo Y02t", 1250000, 50, "Vivo Y02t là một chiếc điện thoại với thiết kế cổ điển kết hợp với công nghệ hiện đại, tạo ra một cụm camera đơn giản và tinh tế. Điểm đáng chú ý của Y02t là dung lượng pin lớn lên đến 5000mAh, giúp giải quyết nỗi lo về pin yếu. Màn hình tràn viền với độ phân giải HD+ mang lại trải nghiệm thị giác rộng lớn và hình ảnh sắc nét. Thiết kế cong cạnh 2.5D và khung viền phẳng tạo nên một vẻ đẹp riêng biệt và độc đáo. Vivo Y02t được trang bị chipset Helio P35 đảm bảo hiệu suất xử lý mạnh mẽ cùng hệ thống camera sắc nét, viên pin lớn và khả năng sạc nhanh, là một lựa chọn ổn định trong phân khúc smartphone giá rẻ.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/v/i/vivo-y02t_2.png", "Vivo"),
("Nokia G22", 27689999, 50, "Nokia G22 là một chiếc điện thoại được đánh giá cao với thiết kế thanh lịch và nhỏ gọn, màn hình AMOLED rõ nét, camera chất lượng cao, và hiệu suất ổn định. So với đời tiền nhiệm Nokia G21, G22 có nhiều cải tiến về màn hình, bộ nhớ và camera. Điểm đáng chú ý là khả năng tự sửa chữa QuickFix và công nghệ âm thanh OZO của Nokia G22, tạo nên sự hấp dẫn đặc biệt cho người dùng.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/d/g/dgtyi8899_2__1.jpg", "Nokia"),
("Nokia 105", 640000, 50, "Nokia 105 4G là một chiếc điện thoại đơn giản nhưng hoạt động bền bỉ cả ngày dài nhờ dung lượng pin lớn 1020mAh. Với màn hình 1.8 inch rõ nét và bàn phím nhạy êm, điện thoại này mang lại trải nghiệm sử dụng tiện lợi và thoải mái. Bạn có thể lưu trữ hơn 2000 danh bạ và tối đa 500 tin nhắn. Thiết kế nhỏ gọn, mỏng nhẹ và lựa chọn màu sắc đa dạng cùng với loa speaker 3 trong 1 làm cho Nokia 105 4G trở thành một lựa chọn phổ biến cho nhu cầu nghe gọi hàng ngày.", "https://cdn2.cellphones.com.vn/358x/media/catalog/product/1/0/105_4g.jpg", "Nokia")
