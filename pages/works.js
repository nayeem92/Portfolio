import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/pl3.png'
import thumbWalknote from '../public/images/works/fb3.png'
import thumbFourPainters from '../public/images/works/bl1.png'
import thumbMenkiki from '../public/images/works/kdb1.png'
import thumbMargelo from '../public/images/works/blog.png'
import thumbModeTokyo from '../public/images/works/nli2.png'
import thumbPichu2 from '../public/images/works/tab1.png'
import thumbFreeDBTagger from '../public/images/works/football.png'
import thumbAmembo from '../public/images/works/php1.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Player Finder" thumbnail={thumbInkdrop}>
          A cloud-based application using machine learning clustering for player similarity identification in English Premier League.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="walknote"
            title="Facebook Page Analysis"
            thumbnail={thumbWalknote}
          >
             The purpose of this notebook is to explore our own Facebook page data, aiming to uncover patterns and insights that could assist our social media team in the future.

          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="Black List"
            thumbnail={thumbFourPainters}
          >
          Developed a cross-platform mobile app using Flutter and Dart for efficient and streamlined deployment
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Kevin Debruyne Similarity">
            Our Idea is to run a clustering model on a dataset to find out players with similar playing style as Kevin DeBruyne.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="U&I Fitness (Student Project)">
          A fitness website where one can gain awareness on physical health, a balanced and nutritious diet along with maintaining good mental health.

          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="Bengali NLI Dataset"
          >
           Created a robust Bengali Natural Language Inference (NLI) dataset
           with 27,000 instances, emphasizing comprehensive coverage
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Tablueau Visualization">
          Used SQL to query stats and Tablueau to visualize Erling Haaland stats.
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="Football Quiz App"
          >
            Simple Quiz Mobile Application using Flutter and Dart.
          </WorkGridItem>
        </Section>
        
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="OTP Login/Signup/Forgot password">
            
            This repository hosts a demo site on XAMPP, demonstrating essential features such as registration, verification, login, logout, and password management.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'