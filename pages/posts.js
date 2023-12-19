import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/works/bfsa.png'
import thumbHowToUseInkdrop from '../public/images/works/scott.png'
import thumbFishWorkflow from '../public/images/works/humber.png'
import thumbMyDeskSetup from '../public/images/works/grad.png'
import thumb500PaidUsers from '../public/images/works/raptors.png'
import thumbFinancialGoal from '../public/images/works/ice.png'
import thumbHowToPriceYourself from '../public/images/works/messi.jpg'
import thumb50xFaster from '../public/images/works/rom.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Recent Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
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

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="A new era: Darko Rajakovic brings fresh energy to the Toronto Raptors"
            thumbnail={thumb500PaidUsers}
            href="https://neoinfosphere.com/a-new-era-darko-rajakovic-brings-fresh-energy-to-the-toronto-raptors/"
          />
          <GridItem
            title="Senators vs. Lightning: Tarasenko’s impact and lightning’s goalie situation"
            thumbnail={thumbFinancialGoal}
            href="https://neoinfosphere.com/senators-vs-lightning-tarasenkos-impact-and-lightnings-goalie-situation/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Inter Miami vs. Toronto FC: Lionel Messi’s impact and unbeaten streak on display"
            thumbnail={thumbHowToPriceYourself}
            href="https://neoinfosphere.com/inter-miami-vs-toronto-fc-lionel-messis-impact-and-unbeaten-streak-on-display/"
          />
          <GridItem
            title="The Love match – a heartfelt Bangladeshi-American rom-com"
            thumbnail={thumb50xFaster}
            href="https://neoinfosphere.com/the-love-match-a-heartfelt-bangladeshi-american-rom-com/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
