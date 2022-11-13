import React from "react";
import ReactDOM from "react-dom";
import ecopetrolLogo from "./assets/Ecopetrol_Logo.png";
import myPrettyFace from "./assets/Headshot.png";
import badiup from "./assets/badiup_logo.jpg";
import beesoftLabs from "./assets/beesoftlabs_logo.svg";
import beesoftLabsText from "./assets/beesoftlabs_text_logo.svg";
import pioneras from "./assets/pioneras_logo.png";
import loading from "./assets/loading_project.gif";
import hydroponic from "./assets/hydro_system.png";
import thanksAgain from "./assets/thanks.gif"

import {
  FlexBox,
  Heading,
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
  Notes,
  Link,
} from "spectacle";

const formidableLogo =
  "https://avatars2.githubusercontent.com/u/5078602?s=280&v=4";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Roboto", Helvetica, Arial, sans-serif',
    box: '"Roboto", sans-serif',
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

const Presentation = () => (
  <Deck theme={theme} template={template}>
    {/* <Slide>
      <FlexBox height="100%">
        <Image src={ecopetrolLogo} width={900} alt="logo" />
        <Box theme={theme} bottom={4} position="absolute">
          Powered by Spectable
        </Box>
      </FlexBox>
    </Slide> */}
    <Slide backgroundColor="#B5B0B2">
      <FlexBox height="100%" flexDirection="column">
        <Image height={300} loading="lazy" src={myPrettyFace} width={300} />
        <Heading margin="0px" fontSize="8rem" color="#516952">
          Tatiana Dávila Albis
        </Heading>
        <Heading margin="0px" fontSize="h2" color="#516952">
          Ingeniera de Sistemas
        </Heading>
        <Heading margin="0px 32px" color="#5B6963" fontSize="h3">
          Experiencia en desarrollo web y móvil
        </Heading>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#516952">
      <Heading color="#B56787" >Información Personal</Heading>
      <UnorderedList color="#9EB59F" fontWeight="700">
        <Appear
          elementNum={0}
          transitionEffect={{ to: { opacity: 1 }, from: { opacity: 0 } }}
        >
          <ListItem>
            <CodeSpan>Me adapto fácil a los cambios, amo los retos.</CodeSpan>
          </ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>
            <CodeSpan>Suelo ponerme metas a corto y mediano plazo.</CodeSpan>
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
            <CodeSpan>Me gusta ayudar y sentirme útil.</CodeSpan>
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Información Académica Profesional</Heading>
      <UnorderedList>
        <Appear elementNum={0}>
          <ListItem>
            <CodeSpan>
              Obtuve el título de Ingeniera de Sistemas en Diciembre del 2020.
            </CodeSpan>
          </ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>
            <CodeSpan>
              He realizado cursos online de desarrollo web en plataformas
              virtuales como Udemy.
            </CodeSpan>
          </ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem>
            <CodeSpan>
              Realicé un curso virtual de seguridad informática.
            </CodeSpan>
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide
      backgroundImage="url(src/assets/climatizar_website.png)"
      backgroundOpacity={0.1}
    >
      <Heading>Sitio Web Climatizar del Caribe</Heading>
      <Link
        textAlign="center"
        margin="0px 0px 30px 0px"
        padding="0px"
        href="https://www.climatizardelcaribe.com/"
      >
        https://www.climatizardelcaribe.com/
      </Link>
      <UnorderedList>
        <ListItem>
          <CodeSpan>Generado con Gatsby.</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Datos estáticos.</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Brinda información de contacto.</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide
      backgroundImage="url(src/assets/lecturapp_website.png)"
      backgroundOpacity={0.1}
    >
      <Heading>
        Lecturapp <br />
        lading page y aplicación móvil
      </Heading>
      <Link
        textAlign="center"
        margin="0px 0px 30px 0px"
        padding="0px"
        href="http://lecturapp.digital/"
      >
        http://lecturapp.digital/
      </Link>
      <UnorderedList>
        <ListItem>
          <CodeSpan>Tesis de grado.</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>
            Herramienta educativa infantil para mejorar la compresión lectora.
          </CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Landing generada con Gatsby.</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>App móvil desarrollada con React Native.</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Voluntariado</Heading>
      <Grid gridTemplateColumns="1fr 1fr 1fr" gridColumnGap={15}>
        <Appear elementNum={0}>
          <Box backgroundColor="primary" height="10em">
            <Text color="secondary" margin="0px" textAlign="center">
              BadiUp <br /> Gospel Aid
            </Text>
          </Box>
        </Appear>
        <Appear elementNum={2}>
          <Box backgroundColor="secondary" height="10em">
            <Text textAlign="center" margin="0px">
              Beesoft Labs
            </Text>
          </Box>
        </Appear>
        <Appear elementNum={4}>
          <Box backgroundColor="primary" height="10em">
            <Text color="secondary" margin="0px" textAlign="center">
              Pioneras Dev
            </Text>
          </Box>
        </Appear>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        alignItems="center"
        justifyContent="center"
        gridColumnGap={15}
      >
        <Appear elementNum={1}>
          <FlexBox marginTop="10px">
            <Image
              alignItems="center"
              src={badiup}
              width={300}
              alt="Badiup-logo"
            />
          </FlexBox>
        </Appear>
        <Appear elementNum={3}>
          <FlexBox flexDirection="column" marginTop="10px">
            <Image src={beesoftLabs} width={300} alt="Beesoft-logo" />
            <Image src={beesoftLabsText} width={300} alt="Beesoft-text" />
          </FlexBox>
        </Appear>
        <Appear elementNum={5}>
          <FlexBox marginTop="10px">
            <Image src={pioneras} width={300} alt="PionerasDev-logo" />
          </FlexBox>
        </Appear>
      </Grid>
    </Slide>
    <Slide backgroundColor="#516952">
      <FlexBox flexDirection="column" height="100%" justifyContent="center">
          <Text fontSize="h3" color="#9EB59F" fontWeight={700}>
            Gracias por darle un vistazo a esta presentación.
          </Text>
        <Image src={thanksAgain} alt="thanks-again" width={400} />
      </FlexBox>
    </Slide>
    {/* <Slide backgroundColor="#1D2D23">
      <FlexBox>
        <Image src={loading} width={400} alt="cargando-proyecto" />
      </FlexBox>
      <Heading>Proyecto de Desarrollo Sostenible</Heading>
    </Slide>
    <Slide backgroundColor="#1D2D23">
      <Heading fontSize="h2" marginBottom="0px !important">El Problema</Heading>
      <Appear elementNum={0}>
        <FlexBox>
          <Text textAlign="justify">
            Actualmente el mundo entero está pasando por un tiempo de recesión
            económica. A raíz de la pandemia, nos hemos visto obligados a
            quedarnos en casa, por lo tanto el consumo de productos básicos ha
            sido priorizado. Por otro lado, muchas personas han sido dadas de
            baja en sus empleos. Al gobierno se le dificulta sustentar
            económicamente a toda la población afectada y cada día aumenta el
            desempleo, sobre todo en zonas rurales que en tiempos normales
            carecen de oportunidades laborales para sus habitantes.
          </Text>
        </FlexBox>
      </Appear>
    </Slide>
    <Slide backgroundColor="#1D2D23">
      <Heading fontSize="h2" marginBottom="0px !important">La Solución</Heading>
      <Appear elementNum={0}>
        <FlexBox flexDirection="column">
          <Text
            fontSize="h1"
            border="10px solid black"
            fontWeight="700"
            margin="0px"
          >
            Sistema Hidropónico Inteligente
          </Text>
          <CodeSpan textAlign="justify" fontSize="2rem">
            Conectado a una base de datos que envia la información del cultivo a
            una aplicacion móvil y a su vez manda información a mercado online
          </CodeSpan>
          <Image src={hydroponic} alt="hydro-system" width={700} />
        </FlexBox>
      </Appear>
    </Slide>
    <Slide backgroundColor="#1D2D23">
      <Grid
        gridTemplateColumns="1fr 1fr"

        alignItems="center"
        justifyContent="center"
        gridColumnGap={15}
      >
        <Appear elementNum={0}>
          <Box>
            <Text
              color="secondary"
              fontSize="h3"
              fontWeight="500"
              marginBottom="0px !important"
              textAlign="center"
            >
              Materiales
            </Text>
          </Box>
        </Appear>

        

        <FlexBox flexDirection="column" justifyContent="center">
          <Appear elementNum={1}>
            <CodeSpan>Panel Solar</CodeSpan>
          </Appear>
          <Appear elementNum={2}>
            <CodeSpan>Batería </CodeSpan>
          </Appear>
          <Appear elementNum={3}>
            <CodeSpan>Motobomba</CodeSpan>
          </Appear>
          <Appear elementNum={4}>
            <CodeSpan>Tubos PVC reciclados</CodeSpan>
          </Appear>
          <Appear elementNum={5}>
            <CodeSpan>Alberca</CodeSpan>
          </Appear>
          <Appear elementNum={6}>
            <CodeSpan>Suplementos liquidos</CodeSpan>
          </Appear>
          <Appear elementNum={7}>
            <CodeSpan>Arduino</CodeSpan>
          </Appear>
          <Appear elementNum={8}>
            <CodeSpan>Servicio de Internet</CodeSpan>
          </Appear>
        </FlexBox>
      </Grid>
    </Slide> */}
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
