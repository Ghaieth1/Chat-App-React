import { useEffect, useRef, useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
          <img src='./avatar.png' alt='avatar icon' />
          <div className='texts'>
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className='icons'>
          <img src='./phone.png' alt='phone icon' />
          <img src='./video.png' alt='video icon' />
          <img src='./info.png' alt='info icon' />
        </div>
      </div>
      <div className='center'>
        <div className='message'>
          <img src='./avatar.png' alt='avatar icon' />
          <div className='texts'>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident cum, nobis libero nisi a ratione quas praesentium omnis
              eos eius, at quo voluptates! Eligendi dolorem veritatis nisi,
              exercitationem accusantium dolorum.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident cum, nobis libero nisi a ratione quas praesentium omnis
              eos eius, at quo voluptates! Eligendi dolorem veritatis nisi,
              exercitationem accusantium dolorum.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message'>
          <img src='./avatar.png' alt='avatar icon' />
          <div className='texts'>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident cum, nobis libero nisi a ratione quas praesentium omnis
              eos eius, at quo voluptates! Eligendi dolorem veritatis nisi,
              exercitationem accusantium dolorum.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident cum, nobis libero nisi a ratione quas praesentium omnis
              eos eius, at quo voluptates! Eligendi dolorem veritatis nisi,
              exercitationem accusantium dolorum.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message'>
          <img src='./avatar.png' alt='avatar icon' />
          <div className='texts'>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident cum, nobis libero nisi a ratione quas praesentium omnis
              eos eius, at quo voluptates! Eligendi dolorem veritatis nisi,
              exercitationem accusantium dolorum.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <img
              src='https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
              alt=''
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident cum, nobis libero nisi a ratione quas praesentium omnis
              eos eius, at quo voluptates! Eligendi dolorem veritatis nisi,
              exercitationem accusantium dolorum.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className='bottom'>
        <div className='icons'>
          <img src='./img.png' alt='image icon' />
          <img src='./camera.png' alt='camera icon' />
          <img src='./mic.png' alt='mic icon' />
        </div>
        <input
          type='text'
          name='Type a message...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className='emoji'>
          <img
            src='./emoji.png'
            alt='emoji icon'
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className='picker'>
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  );
};

export default Chat;
