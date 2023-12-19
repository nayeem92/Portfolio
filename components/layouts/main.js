import Head from 'next/head';
import NavBar from '../navbar';
import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import Footer from '../footer';

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nayeem's homepage" />
        <meta name="author" content="Abdun Nayeem Khan" />
        <meta name="author" content="craftzdog" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Abdun Nayeem Khan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Abdun Nayeem Khan" />
        <meta name="og:title" content="Abdun Nayeem Khan" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Abdun Nayeem Khan - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />


      <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        paddingTop={16}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <img src="images/mario.gif" alt="Patrick" />
      </Box>
      </Container>

        {children}

        <Footer />
      
    </Box>
  );
};

export default Main;
