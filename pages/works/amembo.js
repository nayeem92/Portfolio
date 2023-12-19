import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="BlackList">
    <Container>
      <Title>
      OTP Login/Signup/Forgot password <Badge>2021-</Badge>
      </Title>
      <P>
      Within this repository, youll discover a demo site hosted on XAMPP, strategically crafted to showcase a set of essential features that enhance user experience. The registration process offers a seamless pathway for users to create new accounts, followed by a verification step to ensure security and authenticity. The user-friendly login system provides a secure entry point to personalized accounts. Additionally, users can effortlessly log out, prioritizing control and privacy. The Forgot Password feature facilitates a smooth password recovery process, adding a layer of convenience. For those in need of a password reset, the repository incorporates a secure and straightforward mechanism. Each feature is thoughtfully integrated, offering a practical and user-centric experience within the XAMPP-hosted demo site. Explore and interact with these functionalities to gain a firsthand understanding of their effectiveness and ease of use.      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/nayeem92/OTP-verification-login-forgot-password">
          https://github.com/nayeem92/OTP-verification-login-forgot-password <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, XAMPP</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/php1.png" alt="BlackList" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
      <iframe width="1280" height="720" src="https://www.youtube.com/embed/YI3AGgqIvO4" title="otp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
