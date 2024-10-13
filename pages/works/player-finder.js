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
        Player Finder <Badge>2023-</Badge>
      </Title>
      <P>
       A cloud-based application using machine learning clustering for player similarity identification in English Premier League.
       The project involved the development of a cloud-based application centered around machine learning clustering to identify player similarity within the English Premier League (EPL). A dynamic web application was created, incorporating a pre-tuned model that could continuously adapt to updated data. The backend of the application utilized Flask, Pandas, NumPy, and scikit-learn for efficient data processing, employing K-Means clustering to enhance player similarity identification. Joblib was employed to load and manage the pre-trained model, seamlessly integrating a player analysis algorithm into the system. To provide users with an improved experience, Plotly and Seaborn were integrated for enhanced data visualization, adding a layer of sophistication to the presentation of analytical results. This comprehensive approach resulted in a robust and user-friendly application for exploring and understanding player relationships within the EPL.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://similar-player-finder.onrender.com/">
          https://similar-player-finder.onrender.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python , Flask, HTML, JS, Pandas, NumPy, Scikit-learn, Plotly, Seaborn, Joblib</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://www.kaggle.com/code/abdunnayeemkhan/epl-player-finder-players-with-similar-stats">
            How I calculated the similarity between players?
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/pl1.png" alt="PlayerFinder" />
      <WorkImage src="/images/works/pl2.png" alt="PlayerFinder" />
      <WorkImage src="/images/works/pl3.png" alt="PlayerFinder" />
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
