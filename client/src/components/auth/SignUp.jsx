import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pic, setPic] = useState('');

  const handleClick = () => setShow(!show);

  return (
    <VStack spacing={'5px'} color={'black'}>
      <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder='Enter your name'
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? 'text' : 'password'}
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={'4.5rem'}>
            <Button h={'1.75rem'} size={'sm'} onClick={handleClick}>
              {show ? 'hide' : 'show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
    </VStack>
  );
};

export default SignUp;
