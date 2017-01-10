// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#4D648D"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} progress={"none"} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Javascript World Domination ?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps lineHeight={1} textColor="white">
              Dentist
            </Heading>
            <Heading caps lineHeight={1} textColor="white">
              Nurse
            </Heading>
            <Heading caps lineHeight={1} textColor="white">
              Developer
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="#ACD0C0">
            <BlockQuote>
              <Quote>Software developer is the #3rd Best Job 2015</Quote>
              <Cite textColor="primary">The U.S News top 3 Best Jobs</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="white" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="white">
              12
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              1999
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps lineHeight={1} textColor="white">
              Rue montgallet
            </Heading>
            <Heading caps lineHeight={1} textColor="white">
              Windows 98
            </Heading>
            <Heading caps lineHeight={1} textColor="white">
              With Paul B.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Segmentation Fault
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="#ACD0C0">
            <BlockQuote>
              <Quote>WTF !!??!</Quote>
              <Cite textColor="primary">Me</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              coding === knitting
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Give me a R&D intership
            </Heading>
            <BlockQuote>
              <Quote>No !</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              9y Airbus
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              C# and .NET
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Application in browser
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="#ACD0C0">
            <BlockQuote>
              <Quote>WTF !!??!</Quote>
              <Cite textColor="primary">Me</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  C
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  C++
                </Heading>
              </Fill>
            </Layout>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Java
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Ruby
                </Heading>
              </Fill>
            </Layout>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  PHP
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Javascript
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              I wanna be a Project Manager
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Coding for Money
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              92 Bond Street
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps lineHeight={1} textColor="white">
              Android Apps
            </Heading>
            <Heading caps lineHeight={1} textColor="white">
              Affiliation
            </Heading>
            <Heading caps lineHeight={1} textColor="white">
              Bots
            </Heading>
            <Heading caps lineHeight={1} textColor="white">
              Leboncoin...
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Synthesio
            </Heading>
            <Heading size={2} fit caps lineHeight={1} textColor="white">
              Front-end director
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={4} caps lineHeight={1} textColor="white">
              Captain
            </Heading>
            <Heading size={4} caps lineHeight={1} textColor="white">
              Best Practices Evangelist
            </Heading>
            <Heading size={4} caps lineHeight={1} textColor="white">
              Happiness Coder and Bugs tracker
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Success stories
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps lineHeight={1} textColor="white">
              Facebook
            </Heading>
            <Heading caps lineHeight={1} textColor="white">
              Google
            </Heading>
            <Heading caps lineHeight={1} textColor="white">
              Airbnb
            </Heading>
            <Heading caps lineHeight={1} textColor="white">
              Blablacar
            </Heading>
            <Heading caps lineHeight={1} textColor="white">
              Slack...
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Artis(t)an
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Forget the guy with a pen in his shirt pocket
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Web Application Architecture(s)
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              9 Workshops
            </Heading>
            <Heading size={2} fit caps lineHeight={1} textColor="white">
              4 topics
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={4} lineHeight={1} textColor="white">
              1. Javascript World Domination
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              2. How to become a superhero.js
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              3. Building Of Modern Application
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              4. API-ness
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Github
            </Heading>
            <Heading size={2} fit caps lineHeight={1} textColor="white">
              LINK
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={1} textColor="white">
              yassine.azzout@gmail.com
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={2} textColor="white">
              Objective
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Be able to start an online business with a web application
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Methodology
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              useful links in 3 parts
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps lineHeight={1} textColor="white">
              Must Read
            </Heading>
            <Heading caps lineHeight={1} textColor="white">
              Must Watch
            </Heading>
            <Heading caps lineHeight={1} textColor="white">
              Just tell me what to do
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={2} textColor="white">
              Must Read
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Useful links to read as blog post
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={2} textColor="white">
              Must Watch
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              talk or podcast for passive context
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} caps lineHeight={1} textColor="white">
              Just tell me what to do
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              To be ready the workshop day
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} caps lineHeight={2} textColor="white">
              JavaScript Ecosystem
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              personal commitment
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={2} textColor="white">
              uncopyrighted
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Make a milion dollars if you want
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Web
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={1} textColor="white">
              Post Facebook wall
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Car itinerary
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Google Maps
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={2} textColor="white">
              40 %
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              3 billions in 2014
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Device consumer
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Internet connection
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              Open a browser
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              with a specific website address
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={1} textColor="white">
              Search on google
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Send a message (Twitter, instagram...)
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Buy the last bestseller
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={2} textColor="white">
              Appplication
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              App
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Desktop
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={2} textColor="white">
              Software
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              program
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Browser
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Full interactive experience
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              New software ?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={2} textColor="white">
              SAAS
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Software As A Service
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Website
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Static
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Passive eXperience
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Resident WWW
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={1} textColor="white">
              Active
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Interaction
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Single task
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Data anywhere
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              my or not, devices
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Application up to date
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Everywhere
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={2} textColor="white">
              PC, MAC ?
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              It does not matter
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              My or not, browser
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Safe
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Browser
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Les 3 frères
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              HTML
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <CodePane
              textSize="18"
              lang="html"
              source={`
                !DOCTYPE html>
                <html>
                  <head>
                  </head>
                  <body>
                  </body>
                </html>`}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              DOM TREE
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <CodePane
              textSize="18"
              lang="html"
              source={`
                <html>
                  <head>
                  </head>
                  <body>
                    <p>How browser works</p>
                    <div>
                      <span>with DOM and CSS tree</span>
                    </div>
                  </body>
                </html>`}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={2} textColor="white">
              Render Tree
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Render tree = Dom Tree + Style Structure
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="white">
              CSS
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <CodePane
              textSize="18"
              lang="css"
              source={`
                a.nav {
                  color: blue;
                }

                .someDiv {
                  background: red;
                  padding: 2em;
                  border: 1px solid black;
                }

                h1, h2, h3 {
                  font-family: tahoma;
                  color: #333
                }`}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={2} textColor="white">
              Javascript
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              The World Most Used Programming Language
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="white">
              Web app programming objectives
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={4} lineHeight={1} textColor="white">
              Flexible
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              Scalable
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              Reusable
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              Maintenable
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              Readable
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              * able
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={2} textColor="white">
              Programming language
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              `Java`, `.Net`, `PHP`, `Ruby`, `Python`, `Go`...etc
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              JavaScript is over
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Every browsers support it
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Browser and a text editor
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              No need SDK or Framework
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Everything could be done
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              1995
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              by Brendan Eich (Netscape former)
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={2} textColor="white">
              LiveScript
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              JavaScript
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Java !== JavaScript
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Ecma International
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              Last major - ES6
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Also ECMAScript 2015 (After 6 years of stability for ES5)
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              SPA
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Single Page Application
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              together but independently
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              GMAIL
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              client + {CMS, APP} + API + firewall + Datastore
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              Misunderstood
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              The World Most Misunderstood Programming Language
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              OO Programming
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Abstraction to create models and objects.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              UX, UI
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              UX and UI are not buzzwords
            </Heading>
          </Slide>






          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
