import { Avatar, Box, Button, Flex, Text, Textarea, useToast } from '@chakra-ui/react';
import { NextPage } from 'next';
import ResizeTextarea from 'react-textarea-autosize';
import { useState } from 'react';
import { ServiceLayout } from '@/components/service_layout';

const userInfo = {
  uid: 'test',
  email: 'wlsdn0337@gmail.com',
  displayName: '정진우',
  photoURL: 'https://lh3.googleusercontent.com/a/ALm5wu32UOMunmgAklx-rV6u01Z03AD0IZxC9Rnq9fJ5=s96-c',
};

const UserHomePage: NextPage = function () {
  const [message, setMessage] = useState('');
  const toast = useToast();

  return (
    <ServiceLayout title="user home" minH="100vh" backgroundColor="gray.50">
      <Box maxW="md" mx="auto" pt="6">
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb="2" bg="white">
          <Flex p="6">
            <Avatar size="lg" src={userInfo.photoURL} mr="2" />
            <Flex direction="column" justify="center">
              <Text fontSize="md">{userInfo.displayName}</Text>
              <Text fontSize="xs">{userInfo.email}</Text>
            </Flex>
          </Flex>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb="2" bg="white">
          <Flex align="center" p="2">
            <Avatar size="xs" src="https://bit.ly/broken-link" mr="2" />
            <Textarea
              bg="gray.100"
              border="none"
              placeholder="무엇이 궁금한가요?"
              resize="none"
              minH="unset"
              overflow="hidden"
              fontSize="xs"
              mr="2"
              maxRows={7}
              as={ResizeTextarea}
              value={message}
              onChange={(e) => {
                if (e.currentTarget.value) {
                  const lineCount = (e.currentTarget.value.match(/[^\n]*\n[^\n]*/gi)?.length ?? 1) + 1;
                  if (lineCount > 7) {
                    toast({ title: '최대 7줄까지만 입력가능합니다', position: 'top-right' });
                    return;
                  }
                }
                setMessage(e.currentTarget.value);
              }}
            />
            <Button
              bgColor="#FFBB6C"
              color="white"
              colorScheme="yellow"
              variant="solid"
              size="sm"
              disabled={message.length === 0}
            >
              등록
            </Button>
          </Flex>
        </Box>
      </Box>
    </ServiceLayout>
  );
};

export default UserHomePage;
