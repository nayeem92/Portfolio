import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Player Finder Flask">
      <Container>
        <Title>
          Player Finder Flask <Badge>2023-</Badge>
        </Title>
        <P>
          Player Finder Flask is a cloud-based web app for identifying similar football players using machine learning. The app utilizes K-Means clustering to process player data and is hosted on AWS for scalability. It features real-time player insights with visualizations, allowing users to explore player relationships dynamically.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://nayeem92.github.io/redirect-page/">
            https://nayeem92.github.io/redirect-page <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Flask, scikit-learn, AWS (ECS, ECR, VPC, Security Groups), Docker, Terraform</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://www.kaggle.com/code/abdunnayeemkhan/epl-player-finder-players-with-similar-stats">
              How I calculated the similarity between players? <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <p><strong>Cloud Architecture</strong></p>
        <p>
          The app is containerized using Docker and deployed on AWS ECS (EC2). The backend operates within a private VPC, with Docker images stored in Amazon ECR. Security Groups ensure safe access while AWS services provide scalability and performance.
        </p>
  
        <p><strong>Deployment Steps</strong></p>
        <List ml={4} my={4}>
          <ListItem>Build Docker image: <code>docker build -t player-finder-flask .</code></ListItem>
          <ListItem>Push to ECR: <code>docker push public.ecr.aws/your-ecr-repo/player-finder-flask</code></ListItem>
          <ListItem>Deploy using Terraform: <code>terraform apply</code></ListItem>
        </List>
  
        <WorkImage src="/images/works/cloud-pl.png" alt="PlayerFinder Flask" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  