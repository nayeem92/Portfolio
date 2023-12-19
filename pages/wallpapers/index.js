import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Layout from '../../components/layouts/article';

const TechStack = () => (
  <Layout title="Tech Stack">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Tech Stack
      </Heading>

      <Box my={4}>
        Explore the different technology stacks used in our projects. Each stack is carefully selected to meet specific requirements and deliver optimal performance.
      </Box>

      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        {/* Programming Languages */}
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Python
          </Text>
          <Text>High-level programming language.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Java
          </Text>
          <Text>Object-oriented programming language.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            C++
          </Text>
          <Text>General-purpose programming language.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            JavaScript (JS)
          </Text>
          <Text>Programming language for web development.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Dart
          </Text>
          <Text>Client-optimized programming language for building apps.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            C
          </Text>
          <Text>Procedural programming language.</Text>
        </Box>

        {/* Frameworks */}
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Flask
          </Text>
          <Text>Web framework for Python.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Flutter
          </Text>
          <Text>UI toolkit for building natively compiled applications.</Text>
        </Box>

        {/* Tools */}
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            SQL
          </Text>
          <Text>Structured Query Language for database management.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            HTML
          </Text>
          <Text>Markup language for creating web pages.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            CSS
          </Text>
          <Text>Style sheet language for web pages.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Tableau
          </Text>
          <Text>Data visualization and business intelligence tool.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Firebase
          </Text>
          <Text>Backend-as-a-Service (BaaS) platform by Google.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Microsoft SQL Server
          </Text>
          <Text>Relational database management system by Microsoft.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Oracle SQL Server
          </Text>
          <Text>Relational database management system by Oracle.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            LaTeX
          </Text>
          <Text>Document preparation system for the creation of documents.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Unsupervised Learning
          </Text>
          <Text>Machine learning without labeled outputs.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Supervised Learning
          </Text>
          <Text>Machine learning with labeled outputs.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Plotly
          </Text>
          <Text>Interactive graphing library for Python.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Matplotlib
          </Text>
          <Text>2D plotting library for Python.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Scikit-learn
          </Text>
          <Text>Machine learning library for Python.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            NumPy
          </Text>
          <Text>Library for numerical operations in Python.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Pandas
          </Text>
          <Text>Data manipulation and analysis library for Python.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Render Cloud
          </Text>
          <Text>Platform for cloud rendering services.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Google Analytics
          </Text>
          <Text>Web analytics service offered by Google.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Excel
          </Text>
          <Text>Spreadsheet application by Microsoft.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Word
          </Text>
          <Text>Word processing software by Microsoft.</Text>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Outlook
          </Text>
          <Text>Email and calendar application by Microsoft.</Text>
        </Box>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default TechStack;
