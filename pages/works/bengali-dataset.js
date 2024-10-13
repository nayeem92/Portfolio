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
        Bengali Dataset <Badge>2022-</Badge>
      </Title>
      <P>
      I created a robust Bengali Natural Language Inference (NLI) dataset
      with 27,000 instances, emphasizing comprehensive coverage. Thorough annotation and documentation were
      prioritized to ensure data quality. The dataset was benchmarked against leading NLI models, providing valuable
      insights. I am currently translating these findings into a research paper for future publication, contributing to the
      academic discourse on Bengali NLI. This was part of my undergraduate thesis
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Dataset</Meta>
          <Link href="https://www.kaggle.com/datasets/abdunnayeemkhan/third-draft">
          Kaggle link to dataset<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Excel, Google Sheets</span>
        </ListItem>
      
      </List>

      <WorkImage src="/images/works/nli1.png" alt="PlayerFinder" />
      <WorkImage src="/images/works/nli2.png" alt="PlayerFinder" />
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
