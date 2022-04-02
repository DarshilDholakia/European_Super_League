import React from "react";
import arsenalLogo from '../assets/logos/arsenalLogo.png'
import atleticoLogo from '../assets/logos/atleticoLogo.png'
import barcelonaLogo from '../assets/logos/barcelonaLogo.png'
import cityLogo from '../assets/logos/cityLogo.png'
import interLogo from '../assets/logos/interLogo.png'
import juventusLogo from '../assets/logos/juventusLogo.png'
import liverpoolLogo from '../assets/logos/liverpoolLogo.png'
import milanLogo from '../assets/logos/milanLogo.png'
import psgLogo from '../assets/logos/psgLogo.png'
import real_madridLogo from '../assets/logos/real_madridLogo.png'
import unitedLogo from '../assets/logos/unitedLogo.png'
import west_hamLogo from '../assets/logos/west_hamLogo.png'

const Home = () => {

    return(
        <div className="main-home-container">
            <div className="result-table">
                <h1>blah</h1>
            </div>

            <div className="team-logos">
                <div className="united-logo">
                    <a href = "https://www.manutd.com/">
                        <img src={unitedLogo} alt="United Logo" width="200" height="200" />
                        </a>
                </div>
                <div className="psg-logo">
                    <a href = "https://en.psg.fr/">
                    <img src={psgLogo} alt="PSG Logo" width="200" height="200" />
                    </a>
                </div>
                <div className="arsenal-logo">
                    <a href = "https://www.arsenal.com/">
                    <img src={arsenalLogo} alt="Arsenal Logo" width="175" height="200" />
                    </a>
                </div>
                <div className="city-logo">
                    <a href = "https://www.mancity.com/">
                    <img src={cityLogo} alt="City Logo" width="200" height="200" />
                    </a>
                </div>
                <div className="inter-logo">
                    <a href = "https://www.inter.it/en">
                    <img src={interLogo} alt="Inter Logo" width="200" height="200" />
                    </a>
                </div>
                <div className="juventus-logo">
                    <a href = "https://www.juventus.com/en/">
                    <img src={juventusLogo} alt="Juventus Logo" width="150" height="200" />
                    </a>
                </div>
                <div className="liverpool-logo">
                    <a href = "https://www.liverpoolfc.com/">
                    <img src={liverpoolLogo} alt="Liverpool Logo" width="150" height="200" />
                    </a>
                </div>
                <div className="milan-logo">
                    <a href = "https://www.acmilan.com/en">
                    <img src={milanLogo} alt="Milan Logo" width="150" height="200" />
                    </a>
                </div>
                <div className="west_ham-logo">
                    <a href = "https://www.whufc.com/">
                    <img src={west_hamLogo} alt="West Ham Logo" width="175" height="200" />
                    </a>
                </div>
                <div className="barcelona-logo">
                    <a href = "https://www.fcbarcelona.com/en/">
                    <img src={barcelonaLogo} alt="Barcelona Logo" width="200" height="200" />
                    </a>
                </div>
                <div className="real_madrid-logo">
                    <a href = "https://www.realmadrid.com/en">
                    <img src={real_madridLogo} alt="Real Madrid Logo" width="150" height="200" />
                    </a>
                </div>
                <div className="atletico-logo">
                    <a href = "https://en.atleticodemadrid.com/">
                    <img src={atleticoLogo} alt="Atletico Logo" width="150" height="200" />
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Home;