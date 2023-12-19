import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
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
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoWebComponent, IoLogoLinkedin } from 'react-icons/io5'
import thumbYouTube from '../public/images/neoinfo.jpg'
import thumbInkdrop from '../public/images/neodigi.jpg'
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
        Hello, I&apos;m a Data Science Enthusiast based in Canada!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Abdun Nayeem Khan
          </Heading>
          <p>Data Analyst (Student)</p>
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
        Welcome to my professional portfolio! I am Nayeem, a passionate Data Science enthusiast with a flair for sports data analytics. 
        As the proud owner of &quot;
          <Link
            as={NextLink}
            href="https://www.linkedin.com/company/neo-digitron/"
            passHref
            target="_blank"
          >
            Neo Digitron
          </Link>
          &quot;, a successful Social Media Management Agency based in Bangladesh, I currently lead a dynamic team of three professionals and remotely collaborate
        with esteemed clients such as the Bangladesh Food Safety Authority. My journey is characterized 
        by a deep-seated interest in creating impactful sports data analytics projects. Currently pursuing a post-graduate certification at Humber College
        in Canada, I am poised to graduate and transition into a role as a Data Analyst/Data Scientist. Looking ahead, my vision involves not only furthering
        my career in data science but also expanding my agency to attract a broader clientele. Join me on this exciting journey where data meets innovation, creating
        a compelling narrative in the evolving landscape of the digital world.
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
          <BioYear>2000</BioYear>
          Born in Dhaka (ঢাকা), Bangladesh.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Completed the Bachelor&apos;s Program in Computer Science and Engineering at Islamic University of Technology (IUT)
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Started the Post-Graduate Certificate Program in Information Technology Solutions at Humber College
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interests
        </Heading>
        <Paragraph>
          Football (Soccer), Fantasy Football,{' '}
          <Link href="https://neoinfosphere.com/" target="_blank">
            Web Blogging
          </Link>
          , Affiliate Marketing, Social Media Marketing, Data Visualization, Machine Learning, Artificial Intelligence
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

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://neoinfosphere.com/"
            title="Neo InfoSphere"
            thumbnail={thumbYouTube}
          >
            My Affiliate Marketing Website
          </GridItem>
          <GridItem
            href="https://nayeem92.github.io/neo-digitron/"
            title="Neo Digitron"
            thumbnail={thumbInkdrop}
          >
            My Social Media Management Agency
          </GridItem>
        </SimpleGrid>

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
