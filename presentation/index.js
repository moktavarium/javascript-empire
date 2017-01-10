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

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  kat: require("../assets/kat.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#4D648D",
  contrast: "#ACD0C0"
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
            <Heading caps lineHeight={2} textColor="white">
              Dentist
            </Heading>
            <Heading caps lineHeight={1} textColor="white">
              Nurse
            </Heading>
            <Heading caps lineHeight={2} textColor="white">
              Developer
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="contrast">
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
            <Heading size={1} caps lineHeight={1} textColor="white">
              1999
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps lineHeight={2} textColor="white">
              Rue montgallet
            </Heading>
            <Heading caps lineHeight={2} textColor="white">
              Windows 98
            </Heading>
            <Heading caps lineHeight={2} textColor="white">
              With Paul B.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Segmentation Fault
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="contrast">
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
          <Slide transition={["slide"]} bgColor="contrast">
            <BlockQuote>
              <Quote>No ! But coding Yes</Quote>
              <Cite textColor="primary">CAC 40 companies</Cite>
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
          <Slide transition={["slide"]} bgColor="contrast">
            <BlockQuote>
              <Quote>WTF !!??!</Quote>
              <Cite textColor="primary">Me</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="contrast">
            <Image src="http://www.spyworld-actu.com/IMG/jpg_4782190.jpg" />
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
            <Heading size={2} caps lineHeight={1} textColor="white">
              Android Apps
            </Heading>
            <Heading size={2} caps lineHeight={2} textColor="white">
              Affiliation
            </Heading>
            <Heading size={2} caps lineHeight={1} textColor="white">
              Bots
            </Heading>
            <Heading size={2} caps lineHeight={2} textColor="white">
              Leboncoin...
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="contrast">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/9/99/SupremeLogo.gif" />
          </Slide>
          <Slide transition={["slide"]} bgColor="contrast">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              High-frequency trading
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
            <Heading size={2} caps lineHeight={2} textColor="white">
              Captain
            </Heading>
            <Heading size={2} caps lineHeight={1} textColor="white">
              Best Practices Evangelist
            </Heading>
            <Heading size={4} caps lineHeight={2} textColor="white">
              Happiness Coder and Bugs tracker
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Success stories
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} caps lineHeight={2} textColor="white">
              Facebook
            </Heading>
            <Heading size={2} caps lineHeight={1} textColor="white">
              Google
            </Heading>
            <Heading size={2} caps lineHeight={2} textColor="white">
              Airbnb
            </Heading>
            <Heading size={2} caps lineHeight={1} textColor="white">
              Blablacar
            </Heading>
            <Heading size={2} caps lineHeight={2} textColor="white">
              Slack...
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Artis(t)an
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="white">
              Forget the guy with a pen in his shirt pocket
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="white">
              Web Application Architecture(s)
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={2} textColor="white">
              9 Workshops
            </Heading>
            <Heading size={2} fit caps lineHeight={1} textColor="white">
              4 topics
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={4} lineHeight={2} textColor="white">
              1. Javascript World Domination
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              2. How to become a superhero.js
            </Heading>
            <Heading size={4} lineHeight={2} textColor="white">
              3. Building Of Modern Application
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              4. API-ness
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={2} textColor="white">
              Github
            </Heading>
            <Link size={2} textColor="white" href="https://github.com/92bondstreet/javascript-empire">92bondstreet/javascript-empire</Link>
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
            <Heading caps lineHeight={2} textColor="white">
              Must Read
            </Heading>
            <Heading caps lineHeight={2} textColor="white">
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
              Personal commitment
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
            <Heading size={1} caps lineHeight={1} textColor="white">
              Web
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={2} textColor="white">
              Post Facebook wall
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Car itinerary
            </Heading>
            <Heading size={2} lineHeight={2} textColor="white">
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
            <Heading size={2} lineHeight={2} textColor="white">
              Search on google
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Send a message (Twitter, instagram...)
            </Heading>
            <Heading size={2} lineHeight={2} textColor="white">
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
            <Heading size={1} caps lineHeight={1} textColor="white">
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
            <Heading size={1} caps lineHeight={1} textColor="white">
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
            <Heading size={1} caps lineHeight={1} textColor="white">
              Website
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="white">
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
            <Heading size={1} lineHeight={2} textColor="white">
              Active
            </Heading>
            <Heading size={1} lineHeight={1} textColor="white">
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
            <Heading size={1} caps lineHeight={1} textColor="white">
              Safe
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="white">
              Browser
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="white">
              Les 3 frères
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="white">
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
            <Heading size={1} caps lineHeight={1} textColor="white">
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
            <Heading size={2} lineHeight={2} textColor="white">
              Flexible
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Scalable
            </Heading>
            <Heading size={2} lineHeight={2} textColor="white">
              Reusable
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Maintenable
            </Heading>
            <Heading size={2} lineHeight={2} textColor="white">
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
              Java, .Net, PHP, Ruby, Python, Go...etc
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
            <Heading size={2} lineHeight={1} textColor="white">
              Together but independently
            </Heading>
            <Heading size={2} lineHeight={2} textColor="white">
              GMAIL
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              client + (CMS, APP) + API + firewall + Datastore
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
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              Developers
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Control performance, SEO, time rendering, bug free, cross-browsing of a web application...
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              User engagement
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              in a competitors world
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              Prototyping
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              version 0.0 of your product
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              Has to work and looks beautiful
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              low cost best practice
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={2} textColor="white">
              Notorious big
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              The power of - Make it big - gives users a maximum impact.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage="https://d13yacurqjgara.cloudfront.net/users/14135/screenshots/840696/attachments/88215/main3.png" />
          <Slide transition={["slide"]} bgImage="https://d13yacurqjgara.cloudfront.net/users/30252/screenshots/2220708/attachments/412840/Settings_HD.png" />
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit lineHeight={1} textColor="white">
              Breathe
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} lineHeight={2} textColor="white">
              Flat color
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Space
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage="https://d13yacurqjgara.cloudfront.net/users/13307/screenshots/864910/attachments/92273/Real_Pixels.jpg" />
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              Data First
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Providing quickly information to users
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="contrast">
            <Image src="https://d13yacurqjgara.cloudfront.net/users/3587/screenshots/2227352/attachments/414148/Day067_-_Smart_Home.jpg" />
          </Slide>
          <Slide transition={["slide"]} bgColor="contrast">
            <Image src="https://d13yacurqjgara.cloudfront.net/users/13825/screenshots/1895986/attachments/323201/real-pixels.png" />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              Micro Interaction
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              But how does it work ?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="contrast">
            <Image src="https://d13yacurqjgara.cloudfront.net/users/124059/screenshots/976474/gif2.gif" />
          </Slide>
          <Slide transition={["slide"]} bgColor="contrast">
            <Image width="100%" src="https://d13yacurqjgara.cloudfront.net/users/532215/screenshots/1796852/rdc_ldp_short-term_v2_animated2.gif" />
          </Slide>
          <Slide transition={["slide"]} bgColor="contrast">
            <Image width="100%" src="https://d13yacurqjgara.cloudfront.net/users/3816/screenshots/1040703/stats-animated.gif" />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={2} textColor="white">
              Form
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Boring forms are everywhere
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="contrast">
            <Image width="100%" src="https://d13yacurqjgara.cloudfront.net/users/6410/screenshots/1254439/form-animation-_gif_.gif" />
          </Slide>
          <Slide transition={["slide"]} bgColor="contrast">
            <Image width="100%" src="https://d13yacurqjgara.cloudfront.net/users/14827/screenshots/986398/attachments/115047/share.png" />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Innovating scrolling
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="contrast">
            <Image width="100%" src="https://d13yacurqjgara.cloudfront.net/users/25514/screenshots/2121350/delivery_card.gif" />
          </Slide>
          <Slide transition={["slide"]} bgColor="contrast">
            <Image width="100%" src="https://d13yacurqjgara.cloudfront.net/users/44323/screenshots/1340425/drb-coin-animation-2.gif" />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps lineHeight={2} textColor="white">
              Dentist
            </Heading>
            <Heading caps lineHeight={1} textColor="white">
              Nurse
            </Heading>
            <Heading caps lineHeight={2} textColor="white">
              Developer
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="white">
              Tools
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={2} textColor="white">
              Artisan ?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Once found you can work faster and more efficient
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Manifesto for Software Crafmanship
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={4} lineHeight={2} textColor="white">
              Well-crafted software
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              Steadily adding valuealable
            </Heading>
            <Heading size={4} lineHeight={2} textColor="white">
              A community of professionals
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              Productive partnerships
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit lineHeight={1} textColor="white">
              Paper and pen
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={4} lineHeight={2} textColor="white">
              Take notes
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              Draw
            </Heading>
            <Heading size={4} lineHeight={2} textColor="white">
              Cross out
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              Organize
            </Heading>
            <Heading size={4} lineHeight={2} textColor="white">
              Plan your day
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={2} textColor="white">
              A good editor
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              A developer without editor is as a TV without colors: it doesnt make sense.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit lineHeight={1} textColor="white">
              Terminal
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={2} textColor="white">
              Tmux
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Run a number of simultaneous and separate terminal instances.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Browser
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Dotfiles, aliases and automation
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Agile
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={4} lineHeight={2} textColor="white">
              Individuals and interactions
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              Working software
            </Heading>
            <Heading size={4} lineHeight={2} textColor="white">
              Customer collaboration
            </Heading>
            <Heading size={4} lineHeight={1} textColor="white">
              Responding to change
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="white">
              You
            </Heading>
            <Heading size={2} lineHeight={1} textColor="white">
              Know yourself
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Do something to change your life, your close family and friend. The world will come after.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={2} textColor="white">
              Thank you
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
