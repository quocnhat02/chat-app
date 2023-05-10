import { useEffect, useState } from 'react';
import axios from 'axios';

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      const { data } = await axios.get('/api/chats');
      setChats(data);
    };

    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <h2 key={chat._id}>{chat.chatName}</h2>
      ))}
    </div>
  );
};

export default ChatPage;
