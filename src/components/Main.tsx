import React, { useEffect, useState } from 'react';
import './Main.css';

function Main() {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const obsever: IntersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      })
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => {
      obsever.observe(el);
    });
  }, []);

  const showContact = () => {
    setShow(true);
  }

  const hideContact = () => {
    setShow(false);
  }

  return (
    <main>
      <div className='page'>
        <header className="hidden">
          <h1>Woong Shin</h1>
          <p>🚀 Ready for the journey? 🚀</p>
        </header>

        <blockquote className="hidden">
          <p>I like something fun!</p>
        </blockquote>
      </div>
      
      <div className='page'>
        <section className="right hidden">
          <h2>👋 Moi, olen Woong!</h2>
          <p>
            I am a passionate Fullstack Javascript developer! <br />
            <br />
            Over the last 4 years, I have joined various projects and confident with 
            component based frameworks such as Vue & React, Nativescript and 
            Node. <br />
            <br />
            Still I want to expand my knowledge and skills to more interesting projects. 
            Enhance my journey with active, curious and quick to learn attitude!
            <br />
            <br />
            Good experiences of successfully working in teams and making a good synergy together.
          </p>
        </section>
      </div>
      
      <div className='page'>
        <section className="light hidden">
        <h2>👩🏽‍🚀 Tech stacks</h2>
          <ul>
            <li>
              FE: Vue, Vuex, Vue Router, React, Redux, React Router, Redux Toolkit, Typescript, Leaflet, SASS, Webpack
            </li>
            <li>
              BE: Node, Express, *Java, *Springboot
            </li>
            <li>
              MOBILE: Nativescript, *Flutter
            </li>
            <li>
              DB: MongoDB, Sqlite, *PostgreSql, *Mysql
            </li>
            <li>
              Testing: Jest, Postman, Unit testing, Swagger
            </li>
            <li>
              Cloud: GCP, Firebase, AWS, Netlify, Render
            </li>
            <li>
              Devops: Git, Bash, Docker, CI/CD
            </li>
            <li>
              Design: Adobe photoshop, Illustrator, *Figma
            </li>
            * Basics
          </ul>

          <h2>💼 Projects</h2>
          <ul>
            {/* <li>
              <a href='#' target="_blank" rel="noopener noreferrer"><em>Sports Finder</em><br />Find sports as a guest OR host a game and invites</a>
            </li> */}
            <li>
              <a href='https://cool-awsome-shopping.netlify.app/' target="_blank" rel="noopener noreferrer">
                <em>Awesome shopping</em><br />Mimic E-commerce web site and simulate real world transaction such as Stripe, Cloudinary, GoogleAuth etc</a>
            </li>
            {/* <li>
              <a href='#' target="_blank" rel="noopener noreferrer">
                <em>Guest map</em><br />Leave a message with your current location!
              </a>
            </li> */}
          </ul>

          <h2>👨‍🍳 Github</h2>
          <p>
            <a href='https://github.com/Woongsik' target="_blank" rel="noopener noreferrer">Woong github</a>
          </p>
        </section>
      </div>
      
      <div className='page'>
        <blockquote className="hidden">
          <p>The best way is always <br /><br />
            <span className='highlight'>Just do it!</span><br /><br />
            by Woong Shin
          </p>
        </blockquote>
      </div>

      <div className='page'>
        <section className="right hidden">
          <h2>👨🏻‍💻 Work History</h2>

          <h3>Frontend & Mobile developer@MoreMR Oy</h3>
          <em>Retail and store visit report development</em>
          <ul>
            <li>Web: Vue, Vue Router, Vuex, TypeScript, Leaflet, Bootstrap, JSP, Jquery</li>
            <li>Mobile: Nativescript, Vuex, TypeScript, Firebase, Sqlite</li>
          </ul>

          <hr />
          
          <h3>Fullstack developer, Intern@Integrify</h3>
          <em>E-commerce web developement</em>
          <ul>   
            <li>FE: React, React router, Redux, Redux toolkit, Material UI, Jest, MSW</li>
            <li>BE: Node, Express, MongoDB, Mongoose, RestAPI, Swagger, Postman</li>
            <li>Other: Git, Netlify, Render, AWS, EC2, Cloudinary, Stripe, GoogleAuth</li>
          </ul>

          <hr />
          
          <h3>Project coordinator@TAK Oy</h3>
          <em>Participated in research project</em>

          <ul>
            <li>Data analysis and visualisation for Visit Finland research project</li>
            <li>Project management and documentation </li>
            <li>Web site management: Jquery, Bootstrap, Highchart</li>
          </ul>
        </section>
      </div>

      <div className='page'>
        <blockquote className="hidden">
          <p>Want to know more about me?<br /><br/>
            <button className='btn' onClick={showContact}>Contact me!</button>
          </p>
        </blockquote>
      </div>

      { show &&
      <div className="contact d-flex-center">
        <div className='contact-body'>
          <div className='contact-contents d-flex-center'>
            <div>
              <div>
                🍩 Let's grab a coffee by online or offline any how! ☕️
              </div>
              <div className='d-flex-center'>
                <h4>airwoong83@gmail.com</h4>
              </div>
            </div>
          </div>
          <div className='contact-close'>
            <button className='btn close-btn' onClick={hideContact}>Close</button>
          </div>
        </div>
      </div>
      }
    </main>  
  )
}

export default Main