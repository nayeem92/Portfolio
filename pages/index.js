import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub, IoLogoWebComponent, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Data Enthusiast transitioning into Cloud Computing! 🌩️
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Abdun Nayeem Khan
          </Heading>
          <p>Post Grad Student</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/new.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Welcome to my portfolio! I&apos;m Abdun Nayeem Khan, an IT professional with a passion for data science and software development. Currently, I&apos;m pursuing a post-graduate certificate in Information Technology Solutions at Humber College. I have a Bachelor&apos;s degree in Computer Science and Engineering from Islamic University of Technology (IUT).
        My technical skills include Python, SQL, Node.js, MongoDB, Oracle Data Warehouse, HDFS, Hive, HBase, Spark, Sqoop, Numpy, Pandas, Matplotlib, Scikit-learn, Seaborn, Plotly, Tableau, ETL, Hadoop Ecosystem, ODI, ADW, Git, Firebase, and Zeppelin. I&apos;ve worked on exciting projects like the MLS Match Analysis and Player-Finder, using advanced data processing and visualization techniques. Now, I&apos;m transitioning into cloud computing with AWS, combining it with my data analysis expertise to create innovative solutions. 
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2023</BioYear>
          Completed the Bachelor&apos;s Program in Computer Science and Engineering at Islamic University of Technology (IUT)
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Founded Neo Digitron and Started working as a Social Media Analyst at Bangladesh Food Safety Authority (BFSA) (Contractual)
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Started the Post-Graduate Certificate Program in Information Technology Solutions at Humber College
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Ended working as a Social Media Analyst at Bangladesh Food Safety Authority (BFSA) (Contractual)
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Started Working on a Capstone Project at Humber College
        </BioSection>
        
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interests
        </Heading>
        <Paragraph>
          Football (Soccer), Fantasy Football, Social Media Marketing, Data Visualization, Machine Learning, Artificial Intelligence, Cloud Computing
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/nayeem92" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @nayeem92
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.kaggle.com/abdunnayeemkhan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoWebComponent />}
              >
                @abdunnayeemkhan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/nayeem.k_92?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr " target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @nayeem.k_92
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/abdun-nayeem-khan/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @abdun-nayeem-khan
              </Button>
            </Link>
          </ListItem>
        </List>

        

        <Heading as="h3" variant="section-title">
          Connect with me
        </Heading>
        <p> Feel free to reach out and connect with me by sending an email. Whether you have questions,
           collaboration ideas, or just want to say hello, I&apos;m always open to new connections and opportunities. 
           Looking forward to hearing from you!
                  </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="mailto:nayeem0073297@gmail.com"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Send Email
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
