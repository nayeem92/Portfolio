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
    <Layout title="Abdun Nayeem Khan's Cloud-Based Portfolio Backend">
      <Container>
        <Title>
          Abdun Nayeem Khan's Cloud-Based Portfolio Backend <Badge>2024</Badge>
        </Title>
        <P>
          This project is a cloud-based backend system for my portfolio website, designed to provide robust functionality and seamless data management. The architecture leverages a range of AWS cloud services to ensure high availability, scalability, and performance.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/nayeem92/Portfolio">
            https://github.com/nayeem92/Portfolio <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Serverless (AWS)</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>AWS Lambda, API Gateway, DynamoDB, CloudWatch, SNS, AWS Amplify</span>
          </ListItem>
        </List>
  
        <P>
          The backend architecture uses a serverless approach, with AWS Lambda for dynamic operations and API Gateway as the entry point. DynamoDB stores visitor data, and CloudWatch ensures optimal performance. Notifications and messaging are handled by SNS.
        </P>
  
        <WorkImage src="/images/works/port.jpeg" alt="Portfolio Backend Architecture" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  