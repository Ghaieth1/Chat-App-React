import './detail.css';

const Detail = () => {
  return (
    <div className='detail'>
      <div className='user'>
        <img src='./avatar.png' alt='avatar icon' />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor, sit amet.</p>
      </div>
      <div className='info'>
        <div className='option'>
          <div className='title'>
            <span>Chat Settings</span>
            <img src='./arrowUp.png' alt='arrowUp icon' />
          </div>
        </div>
        <div className='option'>
          <div className='title'>
            <span>Privacy & help</span>
            <img src='./arrowUp.png' alt='arrowUp icon' />
          </div>
        </div>
        <div className='option'>
          <div className='title'>
            <span>Shared photos</span>
            <img src='./arrowDown.png' alt='arrowDown icon' />
          </div>
          <div className='photos'>
            <div className='photoItem'>
              <div className='photoDetail'>
                <img
                  src='https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
                  alt='photo'
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src='./download.png' alt='download icon' className='icon' />
            </div>
            <div className='photoItem'>
              <div className='photoDetail'>
                <img
                  src='https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
                  alt='photo'
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src='./download.png' alt='download icon' className='icon' />
            </div>
            <div className='photoItem'>
              <div className='photoDetail'>
                <img
                  src='https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
                  alt='photo'
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src='./download.png' alt='download icon' className='icon' />
            </div>
            <div className='photoItem'>
              <div className='photoDetail'>
                <img
                  src='https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
                  alt='photo'
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src='./download.png' alt='download icon' className='icon' />
            </div>
          </div>
        </div>
        <div className='option'>
          <div className='title'>
            <span>Shared Files</span>
            <img src='./arrowUp.png' alt='arrowUp icon' />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  );
};

export default Detail;