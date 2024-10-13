import { useEffect, useState } from 'react';
import { Box, Link } from '@chakra-ui/react';

const Footer = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = async () => {
    try {
      const response = await fetch('https://btiikisp0g.execute-api.ca-central-1.amazonaws.com/dev/counter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Handle response if needed
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const getCurrentCount = async () => {
    try {
      const response = await fetch('https://btiikisp0g.execute-api.ca-central-1.amazonaws.com/dev/counter');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCount(data.count); // Assuming your API returns the count in a JSON format
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  useEffect(() => {
    incrementCounter(); // Increment counter on load
    getCurrentCount(); // Fetch current count on load
  }, []);

  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Source code by Takuya Matsuyama.
      <Link href="https://www.craftz.dog/" ml={1} color="blue.500" textDecoration="underline" target="_blank" rel="noopener noreferrer">
        Visit his website
      </Link>
      <Box mt={2}>Visitor Count: {count}</Box>
    </Box>
  );
};

export default Footer;
