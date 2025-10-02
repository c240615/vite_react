import { useState } from 'react'

function Login({ onLogin }) {
    const [empId, setEmpId] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch('http://localhost:5035/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Work_no: empId, Password: password })
        })
        if (res.ok) {
            const data = await res.json()
            alert('登入成功')
            onLogin(data.work_no)
        } else {
            alert('工號或密碼錯誤')
        }
    }

    return (
        <form className="wrapper" onSubmit={handleSubmit}>
            <h2>登入</h2>
            <input
                type="text"
                placeholder="工號"
                value={empId}
                onChange={e => setEmpId(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="密碼"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            <button type="submit">登入</button>
        </form>
    )
}

export default Login