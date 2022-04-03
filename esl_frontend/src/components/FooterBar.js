import React from "react";
import "./FooterBar.css";


const FooterBar = () => {
    return (

        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Home</h4>
                        <ul>
                            <li><a href="">Fixtures</a></li>
                            <li><a href="">Results</a></li>
                            <li><a href="">Clubs</a></li>
                            <li><a href="">Tables</a></li>
                        </ul>

                    </ div>
                    <div className="footer-col">
                        <h4>Fantasy</h4>
                        <ul>
                            <li><a href="">Build Your Team</a></li>
                            <li><a href="">My Team</a></li>
                            <li><a href="">The Scout</a></li>
                            <li><a href="">ESL Fixtures</a></li>
                        </ul>

                    </ div>
                    <div className="footer-col">
                        <h4>Store</h4>
                        <ul>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Buy Aaaron a New Tech Fleece</a></li>
                            <li><a href="">Adib needs new Pokemon Fluffies</a></li>
                            <li><a href="">Suj needs a 12 pack of beer</a></li>
                            <li><a href="">Abdi wants a Third Job</a></li>
                            <li><a href="">Michael's Mac is too old he doesn't want to give away the MacBook</a></li>
                        </ul>

                    </ div>
                    <div className="footer-col">
                        <h4>Follow us</h4>
                        <div className="social-links">
                            <a className="social-media-icons" href=""><img className="Twitter" src={TwitterLogo} alt="Twitter logo"/></a>
                            <a className="social-media-icons" href=""><img className="Instagram" src={InstagramLogo} alt="Instagram logo"/></a>
                            <a className="social-media-icons"  href=""><img className="Facebook" src={FacebookLogo} alt="Facebook logo"/></a>
                        
                        </div>
                        <p className="footer-description"> © 2022 CohortGroup-1. All rights reserved.</p>

                    </ div>

                    </div>


            </div>

        </div>


    

    )
}

export default FooterBar;