import React from "react";
import arsenalLogo from '../assets/teamLogos/arsenalLogo.png'
import atleticoLogo from '../assets/teamLogos/atleticoLogo.png'
import barcelonaLogo from '../assets/teamLogos/barcelonaLogo.png'
import cityLogo from '../assets/teamLogos/cityLogo.png'
import interLogo from '../assets/teamLogos/interLogo.png'
import juventusLogo from '../assets/teamLogos/juventusLogo.png'
import liverpoolLogo from '../assets/teamLogos/liverpoolLogo.png'
import milanLogo from '../assets/teamLogos/milanLogo.png'
import psgLogo from '../assets/teamLogos/psgLogo.png'
import real_madridLogo from '../assets/teamLogos/real_madridLogo.png'
import unitedLogo from '../assets/teamLogos/unitedLogo.png'
import west_hamLogo from '../assets/teamLogos/west_hamLogo.png'
import laLigaLogo from '../assets/leagueLogos/laLigaLogo.png'
import ligue1Logo from '../assets/leagueLogos/ligue1Logo.png'
import premLogo from '../assets/leagueLogos/premLogo.png'
import serieALogo from '../assets/leagueLogos/serieALogo.png'

const Home = () => {

    return(
        <div>
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
                <hr style={{
                    color: "red",
                    backgroundColor: "blue",
                    height: 5
                }}
                />
                <div className="league-logos">
                    <div className="prem-logo">
                        <a href = "https://www.premierleague.com/home">
                            <img src={premLogo} alt="Premier League Logo" width="250" height="100" />
                            </a>
                    </div>
                    <div className="la_liga-logo">
                        <a href = "https://www.laliga.com/en-GB">
                            <img src={laLigaLogo} alt="La Liga Logo" width="100" height="100" />
                            </a>
                    </div>
                    <div className="serie-a-logo">
                        <a href = "https://www.legaseriea.it/en">
                            <img src={serieALogo} alt="Serie A Logo" width="100" height="100" />
                            </a>
                    </div>
                    <div className="ligue-1-logo">
                        <a href = "https://www.ligue1.com/">
                            <img src={ligue1Logo} alt="Ligue 1 Logo" width="75" height="100" />
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;