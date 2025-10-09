import React, { useState } from "react";

function Login() {
    const [empid, setEmpid] = useState("");
    const [pass, setPass] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {//http://localhost:5035/api/auth/login
            const response = await fetch("http://localhost:5035/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ EMPID: empid, PASS: pass }),
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(`登入成功！EMPID: ${data.EMPID}, IsAdmin: ${data.IsAdmin}`);
            } else {
                const errorData = await response.json();
                setMessage(errorData.message || "登入失敗");
            }
        } catch (error) {
            setMessage("網路錯誤：" + error.message);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "50px auto" }}>
            <h2>登入</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>帳號:</label>
                    <input
                        type="text"
                        value={empid}
                        onChange={(e) => setEmpid(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>密碼:</label>
                    <input
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">登入</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default Login;
