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
    <Layout title="Legislative System">
      <Container>
        <Title>
          Legislative System <Badge>2024-</Badge>
        </Title>
        <P>
          The Legislative System is a web-based application designed to streamline the legislative process. It allows various user roles — Members of Parliament (MPs), Administrators, and Reviewers — to manage bills. This includes creating, editing, voting on, reviewing, and exporting legislative data. The system provides role-based dashboards, bill management, voting features, and data export options, promoting better governance and legislative tracking.
        </P>
        <P>
          The project was developed using cloud services to ensure scalability and seamless deployment. Docker was used for containerizing the application, and AWS EC2 was leveraged for hosting. Amazon Elastic Container Registry (ECR) facilitated the storage of Docker images. The application was deployed using Docker Compose, which simplified the orchestration of services (PHP, MySQL, phpMyAdmin) on the EC2 instance.
        </P>
        <P>
          For the cloud architecture, the EC2 instance was launched with user data scripts to automate the setup of Docker, Docker Compose, and the deployment of Docker containers. MySQL and phpMyAdmin were pulled directly from Docker Hub, while the PHP application image was built and pushed to ECR. The setup ensures that the application is easily scalable and maintainable.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub Repository</Meta>
            <Link href="https://github.com/nayeem92/legislative-demo">
              GitHub Repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>PHP, MySQL, Docker, AWS EC2, Docker Compose, ECR</span>
          </ListItem>
          <ListItem>
            <Meta>Cloud Architecture</Meta>
            <span>Amazon EC2, Amazon ECR, Docker, Docker Compose</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/leg-sys.png" alt="Legislative System" />

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  