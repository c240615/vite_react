import { useState } from 'react'
import '../App.css'

function LoginForm() {
    const [empid, setEmpid] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`工號：${empid}\n密碼：${pass}`)
    }

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
            <button className="login-btn" type="submit">登入</button>
        </form>
    )
}

export default LoginForm