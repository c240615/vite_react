import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/HomePage'; // 前台組件
import AdminPage from './components/AdminPage'; // 後台組件
import LoginForm from './components/LoginForm'; // 登入表單組件
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [user, setUser] = useState(null); // 用戶狀態

  return (
    <Router>
      <Routes>
        {/* 首頁：如果已登入就去 Home，否則顯示登入 */}
        <Route
          path="/"
          element={user ? <Home user={user} /> : <LoginWrapper setUser={setUser} />}
        />

        {/* 後台：需檢查是否 admin */}
        <Route path="/admin" element={user && user.role === 'admin' ? <AdminPage /> : <div>未授權訪問</div>} />
      </Routes>
    </Router>
  );
}

// 包一層，讓登入成功後用 useNavigate 做 redirect
function LoginWrapper({ setUser }) {
  const navigate = useNavigate();

  const handleLogin = (empid, isAdmin) => {
    setUser({ empid, role: isAdmin ? 'admin' : 'user' });
    // 登入成功後導向首頁
    navigate('/');
  };

  return <LoginForm onLogin={handleLogin} />;
}

export default App;
