import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/works/bfsa.png'
import thumbHowToUseInkdrop from '../public/images/works/scott.png'
import thumbFishWorkflow from '../public/images/works/humber.png'
import thumbMyDeskSetup from '../public/images/works/grad.png'
import thumbInkdrop from '../public/images/works/pl3.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Recent Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
            title="Cloud Deployment post about Player-Finder on AWS"
            thumbnail={thumbInkdrop}
            href="https://www.linkedin.com/posts/abdun-nayeem-khan_cloudcomputing-aws-machinelearning-activity-7254333973198188545-REel?utm_source=share&utm_medium=member_desktop"
          />
          <GridItem
            title="8 months update with BFSA"
            thumbnail={thumbPortfolio}
            href="https://www.linkedin.com/posts/abdun-nayeem-khan_as-the-social-media-team-for-a-major-organization-activity-7122751940609884160-luwQ?utm_source=share&utm_medium=member_desktop"
          />
          <GridItem
            title="Scott McTominay as good as Haaland?"
            thumbnail={thumbHowToUseInkdrop}
            href="https://www.linkedin.com/posts/abdun-nayeem-khan_machinelearningmischief-epl-manchesterunited-activity-7119524717681680384-8Na1?utm_source=share&utm_medium=member_desktop"
          />
          <GridItem
            title="Starting PGCert in IT Solutiions at Humber"
            thumbnail={thumbFishWorkflow}
            href="https://www.linkedin.com/posts/abdun-nayeem-khan_excitingnews-newbeginnings-collegejourney-activity-7070799316038144000-FgUg?utm_source=share&utm_medium=member_desktop"
          />
          <GridItem
            title="Graduated from IUT as a CSE Graduate (BSc)"
            thumbnail={thumbMyDeskSetup}
            href="https://www.linkedin.com/posts/abdun-nayeem-khan_im-happy-to-share-that-ive-completed-my-activity-7070689255051722752-FYiC?utm_source=share&utm_medium=member_desktop"
          />
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
