import { useState } from 'react';
import './login.css';
import { toast } from 'react-toastify';

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: '',
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className='login'>
      <div className='item'>
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type='text' name='email' placeholder='Email' />
          <input type='password' name='password' placeholder='Password' />
          <button>Sign in</button>
        </form>
      </div>
      <div className='separator'></div>
      <div className='item'>
        <h2>Create an Account</h2>
        <form>
          <label htmlFor='file'>
            <img src={avatar.url || './avatar.png'} alt='avatar photo' />
            Upload an image
          </label>
          <input
            type='file'
            id='file'
            style={{ display: 'none' }}
            onChange={handleAvatar}
          />
          <input type='text' name='Username' placeholder='username' />
          <input type='text' name='email' placeholder='Email' />
          <input type='password' name='password' placeholder='Password' />
          <button>Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
