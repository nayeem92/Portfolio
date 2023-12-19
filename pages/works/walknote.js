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
  <Layout title="Facebook">
    <Container>
      <Title>
        BFSA Facebook Page Analysis <Badge>2023 (October)</Badge>
      </Title>
      <P>
      Meta Business Suite has its limitations. The purpose of this notebook is to explore our own Facebook page data, aiming to uncover patterns and insights that could assist our social media team in the future.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Notebook</Meta>
          <Link href="https://www.kaggle.com/code/abdunnayeemkhan/facebook-page-analysis-may-oct">
          https://www.kaggle.com/code/abdunnayeemkhan/facebook-page-analysis-may-oct <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Kaggle</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Pandas, NumPy, Plotly, Seaborn, Matplotlib</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://www.kaggle.com/code/abdunnayeemkhan/facebook-page-analysis-may-oct">
            What are the findings?
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/fb1.png" alt="Facebook" />
      <WorkImage src="/images/works/fb2.png" alt="Facebook" />
      <WorkImage src="/images/works/fb3.png" alt="Facebook" />
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
