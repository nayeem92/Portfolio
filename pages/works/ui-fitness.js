import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  // AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Fitness">
    <Container>
      <Title>
        U&I Fitness (Student Project) <Badge>2023-</Badge>
      </Title>
      <P>
      A fitness website where one can gain awareness on physical health, a balanced and nutritious diet along with maintaining good mental health. It is a one-stop destination for fitness enthusiasts as well as newbies looking to kickstart a healthier lifestyle.
      Working Feautures: 
      <ul>
        <li>Home Page</li>    
        <li>Login/Sign up</li>
        <li>Nutrition Page</li>
        <li>Contact Us Page</li>
        <li>Mind Wellness Page</li>
        <li>Physical Fitness Page</li>
        <li>Membership Page</li>
        <li>Feedback Page</li>
        <li>About Us Page</li>
        <li>Fitness Tracker</li>
        <li>BMI Calculator</li>
        <li>FAQs</li>
        <li>Blog Page</li>
      </ul>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://jolly-lamington-68f0c0.netlify.app/nayeem/bmi/bmi">
          U&I-Fitness <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS</span>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/SP393/Projectfitness">
          Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      
      </List>

      <WorkImage src="/images/works/blog.png" alt="PlayerFinder" />
      <WorkImage src="/images/works/faq.png" alt="PlayerFinder" />
      <WorkImage src="/images/works/web1.png" alt="PlayerFinder" />
      <WorkImage src="/images/works/web2.png" alt="PlayerFinder" />
      <WorkImage src="/images/works/web3.png" alt="PlayerFinder" />
      
      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
