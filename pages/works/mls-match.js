import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    // AspectRatio
  } from '@chakra-ui/react';
  import { ExternalLinkIcon } from '@chakra-ui/icons';
  import { Title, Meta } from '../../components/work';
  import P from '../../components/paragraph';
  import Layout from '../../components/layouts/article';
  
  const Work = () => (
    <Layout title="Inter Miami vs Toronto FC Analysis">
      <Container>
        <Title>
          Inter Miami vs Toronto FC Analysis <Badge>2024</Badge>
        </Title>
        <P>
          Dissecting a winning team&apos;s passing game: Inter Miami vs Toronto FC. This analysis focuses on Inter Miami&apos;s strengths, aiming to identify key factors that could be replicated or countered by other teams.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Kaggle Notebook</Meta>
            <Link href="https://www.kaggle.com/code/abdunnayeemkhan/dissecting-a-winning-team-s-passing-game/notebook">
              View the work on Kaggle <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, NetworkX, Plotly, Seaborn</span>
          </ListItem>
        </List>
  

      </Container>
    </Layout>
  );
  
  export default Work;
  export { getServerSideProps } from '../../components/chakra';
  