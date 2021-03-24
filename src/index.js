import React from 'react';
import ReactDOM from 'react-dom';
import ecopetrolLogo from "./assets/Ecopetrol_Logo.png"
import myPrettyFace from "./assets/Headshot.png"

import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes
} from 'spectacle';

const formidableLogo =
  'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const SlideFragments = () => (
  <>
    <Slide>
      <Text>This is a slide fragment.</Text>
    </Slide>
    <Slide>
      <Text>This is also a slide fragment.</Text>
      <Appear>
        <Text>This item shows up!</Text>
      </Appear>
      <Appear>
        <Text>This item also shows up!</Text>
      </Appear>
    </Slide>
  </>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%">
        <Image src={ecopetrolLogo} width={900} alt="logo" />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="black">
      <FlexBox height="100%" flexDirection="column">
        <Image src={myPrettyFace} width={300} />
        <Heading margin="0px" fontSize="130px">
          Tatiana Dávila Albis
        </Heading>
        <Heading margin="0px" fontSize="h2">
          Ingeniera de Sistemas
        </Heading>
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          Experiencia en desarrollo web y desarrollo móvil
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Información Personal</Heading>
        <Appear elementNum={0} transitionEffect={{to: {opacity: 1}, from: {opacity: 0}}}>
          <ListItem>
            <CodeSpan>
              Me adapto fácil a los cambios, y amo los retos.
            </CodeSpan>
            </ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>
            <CodeSpan>
            Suelo ponerme metas a corto y mediano plazo.
            </CodeSpan>
          </ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem>
            <CodeSpan>
              Soy responsable, resiliente, aprendo fácilmente.
            </CodeSpan>
          </ListItem>
        </Appear>
        <Appear elementNum={3}>
        <ListItem>
          <CodeSpan>
            Me gusta ayudar y sentirme útil.
          </CodeSpan>
        </ListItem>
        </Appear>
    </Slide>
    <Slide>
      <Heading>Información Académica Profesional</Heading>
        <Appear elementNum={0} >
          <ListItem>
            <CodeSpan>
              Obtuve el título de Ingeniera de Sistemas en Diciembre del 2020
            </CodeSpan>
            </ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>
            <CodeSpan>
              He realizado cursos online de desarrollo web en plataformas como Udemy.
            </CodeSpan>
          </ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem>
            <CodeSpan>
              Realicé un curso de seguridad informática.
            </CodeSpan>
          </ListItem>
        </Appear>
    </Slide>
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/src/beau.jpg?raw=true)"
      backgroundOpacity={0.5}
    >
      <Heading>Custom Backgrounds</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>backgroundColor</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundImage</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundOpacity</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundSize</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundPosition</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundRepeat</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
   
    <Slide>
      <FlexBox>
        <Text>These</Text>
        <Text>Text</Text>
        <Text color="secondary">Items</Text>
        <Text fontWeight="bold">Flex</Text>
      </FlexBox>
      <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text color="secondary">Single-size Grid Item</Text>
        </Box>
        <Box backgroundColor="secondary">
          <Text>Double-size Grid Item</Text>
        </Box>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        alignItems="center"
        justifyContent="center"
        gridRowGap={1}
      >
        {Array(9)
          .fill('')
          .map((_, index) => (
            <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
              <Image src={formidableLogo} width={100} />
            </FlexBox>
          ))}
      </Grid>
    </Slide>
    <SlideFragments />
    <Slide>
      <CodePane language="jsx">{`
        import { createClient, Provider } from 'urql';

        const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });

        const App = () => (
          <Provider value={client}>
            <Todos />
          </Provider>
        );
        `}</CodePane>
    </Slide>
    <div>
      <Slide>
        <Heading>This is a slide embedded in a div</Heading>
      </Slide>
    </div>
    <MarkdownSlide componentProps={{ color: 'yellow' }}>
      {`
        # This is a Markdown Slide
        
        - You can pass props down to all elements on the slide.
        - Just use the \`componentProps\` prop.
        `}
    </MarkdownSlide>
    <MarkdownSlide animateListItems>
      {`
       # This is also a Markdown Slide
       
       It uses the \`animateListItems\` prop.
       
       - Its list items...
       - they will appear in...
       - one at a time.
      `}
    </MarkdownSlide>
    <MarkdownSlideSet>
      {`
        # This is the first slide of a Markdown Slide Set
        ---
        # This is the second slide of a Markdown Slide Set
        `}
    </MarkdownSlideSet>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
