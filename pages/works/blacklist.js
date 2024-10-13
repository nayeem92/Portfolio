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
        Black List <Badge>2021-</Badge>
      </Title>
      <P>
      The project involved the development of a cross-platform mobile application using Flutter and Dart, ensuring efficient and streamlined deployment across various platforms. Leveraging the capabilities of Flutter and Dart, the app was crafted to provide a seamless user experience on both Android and iOS devices. The integration of Firebase played a crucial role in enabling real-time data management within the application. CRUD (Create, Read, Update, Delete) operations were implemented, allowing for dynamic and synchronized interactions with the data. This combination of Flutter, Dart, and Firebase resulted in a versatile and responsive mobile app that not only offered cross-platform compatibility but also facilitated real-time data handling for a more dynamic user experience.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/nayeem92/Black-list-app">
          https://github.com/nayeem92/Black-list-app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter, Dart, Andorid Studio, Firebase</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/bl1.png" alt="BlackList" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
      <iframe width="1280" height="720" src="https://www.youtube.com/embed/rySKF0kQq2Q" title="Black List App demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
