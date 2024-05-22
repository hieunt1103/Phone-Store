import React from 'react';

function ContactPage() {
    const contacts = [
        {
            name: 'Nguyễn Trung Hiếu',
            email: 'hieunt@gmail.com',
            phone: '0382573737',
            address: 'Đường A, Thành phố HCM',
            github: 'https://github.com/hieunt1103',
        },
        {
            name: 'Trần Minh Chiến',
            email: 'chientm@gmail.com',
            phone: '0582909099',
            address: 'Đường B, Thành phố HCM',
            github: 'https://github.com/TMChi3n',
        },
        {
            name: 'Trương Xuân Việt',
            email: 'viettx@gmail.com',
            phone: '0909858588',
            address: 'Đường C, Thành phố HCM',
            github: 'https://github.com/xuanvietcode',
        },
        {
            name: 'Lê Thị Phương Chung',
            email: 'chungltp@gmail.com',
            phone: '0937460064',
            address: 'Đường D, Thành phố HCM',
            github: 'https://github.com/chung021203',
        },
    ];

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(0, 0, 0, 0.1)',
                minHeight: '100vh',
                padding: '50px', // Thêm padding để tạo khoảng cách từ viền trang
            }}
        >
            <div
                style={{
                    maxWidth: '800px',
                    width: '100%',
                    background: '#fff',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2rem' }}>Thông tin liên hệ</h1>
                {contacts.map((contact, index) => (
                    <div
                        key={index}
                        style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '15px' }}
                    >
                        <h3 style={{ marginBottom: '10px', fontSize: '1.5rem' }}>{contact.name}</h3>
                        <p style={{ marginBottom: '5px' }}>Email: {contact.email}</p>
                        <p style={{ marginBottom: '5px' }}>Số điện thoại: {contact.phone}</p>
                        <p style={{ marginBottom: '5px' }}>Địa chỉ: {contact.address}</p>
                        <p style={{ marginBottom: '5px' }}>
                            GitHub: <a href={contact.github}>{contact.github}</a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContactPage;
