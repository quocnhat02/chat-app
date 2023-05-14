import { Box, Button, Text, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';

const SideDrawer = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        bg={'white'}
        w={'100%'}
        p={'5px 10px 5px 10px'}
        borderWidth={'5px'}
      >
        <Tooltip label='Search Users to chat' hasArrow placement='bottom-end'>
          <Button variant={'ghost'}>
            <i className='fa-solid fa-magnifying-glass'></i>
            <Text display={{ base: 'none', md: 'flex' }} px={'4'}>
              Search User
            </Text>
          </Button>
        </Tooltip>
      </Box>
    </>
  );
};

export default SideDrawer;
