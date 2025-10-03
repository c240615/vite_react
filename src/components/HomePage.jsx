import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ user }) {
    const navigate = useNavigate();

    return (
        <div className='wrapper'>
            <h1>前台首頁</h1>
            <p>{user?.empid} 登入成功 !</p>

            {/* 只有 admin 才會顯示這個按鈕 */}
            {user?.role === 'admin' && (
                <button className='login-btn' onClick={() => navigate('/admin')}>
                    進入後台
                </button>
            )}
        </div>
    );
}

export default Home;
