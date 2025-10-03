import { useState } from 'react';
import '../App.css';

function LoginForm({ onLogin }) {
    const [empid, setEmpid] = useState('');
    const [pass, setPass] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('http://localhost:5035/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ EMPID: empid, PASS: pass })
            });

            if (res.ok) {
                const data = await res.json();
                alert('登入成功');
                onLogin(data.empid, data.isAdmin);
            } else {
                const errorData = await res.json();
                setError(errorData.message || '工號或密碼錯誤');
            }
        } catch (err) {
            setError('登入時出現錯誤，請稍後再試');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="wrapper" onSubmit={handleSubmit}>
            <h2 className="login-title">登入系統</h2>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="  工號"
                    value={empid}
                    onChange={e => setEmpid(e.target.value)}
                    required
                />
            </div>
            <div className="input-group">
                <input
                    type="password"
                    placeholder="  密碼"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                    required
                />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button className="login-btn" type="submit" disabled={loading}>
                {loading ? '登入中...' : '登入'}
            </button>
        </form>
    );
}

export default LoginForm;
