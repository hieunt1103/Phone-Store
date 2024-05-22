import Header from '../../Header';
function AdminLayout({ children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Header isHiddenSearch isHiddenCart />
            <div style={{ width: '100%', height: '3000px', marginTop: '60px' }}>{children}</div>
        </div>
    );
}

export default AdminLayout;
