import './userInfo.css';

const Userinfo = () => {
  return (
    <div className='userInfo'>
      <div className='user'>
        <img src='./avatar.png' alt='' />
        <h2>John Doe</h2>
      </div>
      <div className='icons'>
        <img src='./more.png' alt='more icon' />
        <img src='./video.png' alt='video icon' />
        <img src='./edit.png' alt='edit icon' />
      </div>
    </div>
  );
};

export default Userinfo;
