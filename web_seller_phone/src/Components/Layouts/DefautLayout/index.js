import Header from '../../Header';
function DefaultLayout({ children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Header />
            <div style={{ width: '1400px', marginTop: '60px' }}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
