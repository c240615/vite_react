import { useNavigate } from 'react-router-dom';

function AdminPage() {
    const navigate = useNavigate();

    const navigateToHomePage = () => {
        navigate('/api/login');
    };

    return (
        <div className="wrapper">
            <h2>管理後台</h2>
            <p>歡迎來到管理後台！</p>            
        </div>
    );
}

export default AdminPage