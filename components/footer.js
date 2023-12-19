import { Box, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Source code by Takuya Matsuyama.
      <Link href="https://www.craftz.dog/" ml={1} color="blue.500" textDecoration="underline" target="_blank" rel="noopener noreferrer">
        Visit his website
      </Link>
    </Box>
  );
};

export default Footer;
