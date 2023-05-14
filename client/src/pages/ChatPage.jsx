import ChatBox from '../components/ChatBox';
import MyChat from '../components/MyChat';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import { ChatState } from '../context/ChatProvider';
import { Box } from '@chakra-ui/react';

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: '100%' }}>
      {user && <SideDrawer />}
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        w={'100%'}
        h={'91.5vh'}
        p={'10px'}
      >
        {user && <MyChat />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
