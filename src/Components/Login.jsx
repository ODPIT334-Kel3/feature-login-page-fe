import { useState } from 'react';

export default function Login() {
  const [data, setData] = useState({
    username: '',
    password: '',
  })
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage('');
    setIsLoading(true);

    try {
      const formData = {
        username: data.username,
        password: data.password,
      };

      const requestBody = new URLSearchParams(formData);
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: requestBody.toString()
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Login berhasil! Selamat datang, ' + formData.username);
      } else {
        const errorData = await response.json();
        setMessage('Login gagal: ' + (errorData.message || 'Username atau password salah.'));
        console.error('Login gagal:', errorData);
      }
    } catch (error) {
      setMessage('Terjadi kesalahan jaringan atau server: ' + error.message);
      console.error('Error saat login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {message && (
          <p
            style={{
              color: message.includes('berhasil') ? 'green' : 'yellow',
              fontWeight: 'bold',
              marginBottom: '10px'
            }}
          >
            {message}
          </p>
        )}

        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            value={data.username}
            onChange={handleInputChange}
            disabled={isLoading}
            name='username'
          />
          <i className='bx bx-user'></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={data.password}
            onChange={handleInputChange}
            disabled={isLoading}
            name='password'
          />
          <i className='bx bx-lock-alt'></i>
        </div>
        <div className="remember-forgot">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              disabled={isLoading}
            />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button
          type="submit"
          className="btn"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Login'}
        </button>

        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
}