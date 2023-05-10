import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';

const HomePage = () => {
  return (
    <Container maxW={'xl'} centerContent>
      <Box
        d={'flex'}
        justifyContent={'center'}
        alignContent={'center'}
        p={3}
        bg={'white'}
        w={'100%'}
        m={'40px 0 15px 0'}
        borderRadius={'lg'}
        borderWidth={'1px'}
        textAlign={'center'}
      >
        <Text fontSize={'4xl'} color={'black'}>
          Talk-A-Tive
        </Text>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default HomePage;
