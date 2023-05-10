import { useEffect } from 'react';
import axios from 'axios';

const ChatPage = () => {
  useEffect(() => {
    const fetchChats = async () => {
      const res = await axios.get('/api/chats');
      console.log(res.data);
    };

    fetchChats();
  }, []);

  return <div>ChatPage</div>;
};

export default ChatPage;
