import { useEffect, useState } from 'react';
import { Box, Link } from '@chakra-ui/react';

const Footer = () => {
  const [count, setCount] = useState(0);
  const [incremented, setIncremented] = useState(false); // Flag to prevent double increment

  const updateCounter = async () => {
    if (incremented) return; // Prevents multiple increments

    try {
      // Increment counter
      const incrementResponse = await fetch('https://btiikisp0g.execute-api.ca-central-1.amazonaws.com/dev/counter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!incrementResponse.ok) {
        throw new Error('Network response was not ok while incrementing');
      }

      setIncremented(true); // Set flag to prevent future increments

      // Fetch current count
      const currentCountResponse = await fetch('https://btiikisp0g.execute-api.ca-central-1.amazonaws.com/dev/counter');
      if (!currentCountResponse.ok) {
        throw new Error('Network response was not ok while fetching current count');
      }

      const data = await currentCountResponse.json();
      setCount(data.count); // Assuming your API returns the count in a JSON format
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  useEffect(() => {
    updateCounter(); // Call updateCounter on load
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
