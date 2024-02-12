// BrianPortfolio.js
import React from 'react';
import './App.css'
import ContactSection from './ContactSection';
import EducationSection from './EducationSection';
import WorkExperienceSection from './WorkExperienceSection';


const Html = () => {
    return (
        <>
            <header>
                <center>
                    <div>
                        <img src={process.env.PUBLIC_URL + "/Media/ByteBanditsBanner.gif"} alt="Byte Bandits Banner" width="531px" />

                    </div>
                </center>

                {/* Nav Links with React Router Link */}
                <nav id="nav_menu">
                    <ul>
                        <li>
                            <a href="../index.html">Home</a>
                        </li>
                        <li>
                            <a href="../ben-portfolio/ben-index.html">Ben</a>
                        </li>
                        <li>
                            <a href="../randall-portfolio/randall-index.html">Randall</a>
                        </li>
                        <li>
                            <a href="../jessica-portfolio/jessica-index.html">Jessica</a>
                        </li>
                        <li>
                            <a href="../brian-portfolio/brian-index.html">Brian</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <div style={{ position: 'relative' }}>
  <img
   
    alt="Background GIF"
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
  />
  {/* Your content here */}
</div>


                <h1>Brian Louderback</h1>
                <img src="https://smoothcomp.com/pictures/t/1734349-xc0n/brian-louderback.jpg" alt="Brian Louderback" style={{ width: '200px', height: '200px', borderRadius: '20px' }} />
                <ContactSection style={{ color: 'white' }} />
                <EducationSection style={{ color: 'white' }} />
                <WorkExperienceSection style={{ color: 'white' }} />

                {/*<section id="games">
                    <div className="game-container">
                        <iframe title="pong-game" srcDoc="<html><body>Your iframe content here</body></html>" width="600" height="405" frameBorder="0" />
                    </div>
                </section>*/}

                <footer>
                    <p>&copy; 2024 ByteBandits</p>
                </footer>

          
        </>
    );
}

export default Html;
