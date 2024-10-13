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
  <Layout title="PlayerFinder">
    <Container>
      <Title>
        Tableau Visualization <Badge>2022-</Badge>
      </Title>
      <P>
      In this project, I worked with two datasets, and after preprocessing the data to suit my requirements, I
      generated a set of SQL queries. Using the results obtained from these queries, I created a visualization
      using Tableaufy player similarity within the English Premier League (EPL).
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://public.tableau.com/app/profile/abdun.nayeem.khan/viz/Topforwardhunting-EPL202223season/Dashboard1">
          Tableau Dashboard <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Microsoft SQL, Tablueau, Excel</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/nayeem92/Top-forward-hunting-EPL">
          Github repository
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/tab1.png" alt="PlayerFinder" />
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
