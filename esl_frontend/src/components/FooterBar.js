import React from "react";
import twitterLogo from "../assets/socialMediaLogos/TwitterLogo.png"
import instagramLogo from "../assets/socialMediaLogos/InstagramLogo.png"
import facebookLogo from "../assets/socialMediaLogos/FacebookLogo.png"

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
                            <li><a href="https://www.youtube.com/watch?v=8waokty2b3o" target="__blank">FAQ</a></li>
                            <li><a href="">Buy Aaaron a New Tech Fleece</a></li>
                            <li><a href="">Adib needs new Pokemon Fluffies</a></li>
                            <li><a href="https://www.youtube.com/watch?v=w_3BWbGUrfc" target="__blank">Suj needs a 12 pack of beer</a></li>
                            <li><a href="">Abdi wants a Third Job</a></li>
                            <li><a href="">Michael's Mac is too old he doesn't want to give away the MacBook</a></li>
                        </ul>

                    </ div>
                    <div className="footer-col">
                        <h4>Follow us</h4>
                        <div className="social-links">
                            <a className="social-media-icons" href=""><img className="Twitter" src={twitterLogo} alt="Twitter logo"/></a>
                            <a className="social-media-icons" href=""><img className="Instagram" src={instagramLogo} alt="Instagram logo"/></a>
                            <a className="social-media-icons"  href=""><img className="Facebook" src={facebookLogo} alt="Facebook logo"/></a>
                        
                        </div>
                        <p className="footer-description"> © 2022 CohortGroup-1. All rights reserved.</p>

                    </ div>

                    </div>


            </div>

        </div>


    

    )
}

export default FooterBar;