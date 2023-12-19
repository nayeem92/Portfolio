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
        Player Finder <Badge>2022-</Badge>
      </Title>
      <P>
      In this project, our primary objective is to implement a clustering model on a dataset with the aim of identifying players whose playing style closely resembles that of Kevin De Bruyne. As a player renowned for his exceptional record in the Premier League, Kevin De Bruynes ongoing stellar performance adds to the relevance of this endeavor. The goal is to leverage data-driven insights to unearth players exhibiting similar patterns of play to KDB. Throughout this notebook, I intend to meticulously document and visualize the entire process, providing a comprehensive view of the clustering model and its outcomes.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.kaggle.com/code/abdunnayeemkhan/epl-player-finder-players-with-similar-stats">
          https://www.kaggle.com/code/abdunnayeemkhan/epl-player-finder-players-with-similar-stats <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Pandas, NumPy, Scikit-learn, Plotly, Seaborn</span>
        </ListItem>
        <ListItem>
          <Meta>Deployment</Meta>
          <Link href="https://similar-player-finder.onrender.com/">
            Try comparing players!
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/kdb1.png" alt="PlayerFinder" />
      <WorkImage src="/images/works/kdb2.png" alt="PlayerFinder" />
      <WorkImage src="/images/works/kdb3.png" alt="PlayerFinder" />
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
