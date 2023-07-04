import { ReactNode, useContext } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
    Heading,
    Text,
    Highlight
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, query } from '@firebase/firestore';
import firebase from 'firebase/app';

interface NavLinkProps {
  firebaseApp: any
}

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav({ firebaseApp }: NavLinkProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  

  const signIn = async () => {
    /**
     * auth is the authentication object that is used to sign in and sign out users
     * provider is the provider that is used to sign in users with google
     * signInWithPopup is a function that signs in a user with a popup
     * onAuthStateChanged is a listener that listens to changes in the authentication state
     * and updates the state of the user
     */
  
    const auth = getAuth(firebaseApp)
    console.log(auth, 'auth')
    const provider = new GoogleAuthProvider()
    console.log(provider, 'provider')
    await signInWithPopup(auth, provider)
    //createGoogleUserObject(auth.currentUser)
    onAuthStateChanged(auth, (user) => {
      console.log(user);
    })
  }

 

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Heading lineHeight='tall'>
  <Highlight
    query='o'
    styles={{ px: '1', py: '1', rounded: 'full', bg: 'blue.100' }}
  >
    ScoreBox
  </Highlight>
</Heading>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button onClick={() => signIn()}>Sign In</Button>
              

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src='https://avatars.dicebear.com/api/male/username.svg'
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src='https://avatars.dicebear.com/api/male/username.svg'
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{`hello`}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem >Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}