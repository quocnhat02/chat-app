import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Login from '../components/auth/Login';
import SignUp from '../components/auth/SignUp';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  // const navigate = useNavigate();

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
      <Box
        bg={'white'}
        w={'100%'}
        p={4}
        color={'black'}
        borderRadius={'lg'}
        borderWidth={'1px'}
      >
        <Tabs variant='soft-rounded'>
          <TabList mb={'1em'}>
            <Tab width={'50%'}>Login</Tab>
            <Tab width={'50%'}>Sign up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
