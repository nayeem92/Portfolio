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
  <Layout title="Football Quiz App">
    <Container>
      <Title>
        Black List <Badge>2021-</Badge>
      </Title>
      <P>
        A simple quiz app for football fans. The app is built using Flutter and Dart.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/nayeem92/QuizApp">
          https://github.com/nayeem92/QuizApp <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter, Dart, Andorid Studio</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/football.png" alt="BlackList" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
      <iframe width="464" height="825" src="https://www.youtube.com/embed/5HH65zgMcnI" title="Quiz App Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
