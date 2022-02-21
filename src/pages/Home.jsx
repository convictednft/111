import React from 'react'
import Header from '../components/Header'
import { StyleSheet, css } from 'aphrodite';
import Background from '../static/img/background.png'
import newsArrow from '../static/icons/newsArrow.svg'
import smokeLeft from '../static/img/smokeLeft.svg'
import smokeRight from '../static/img/smokeRight.svg'
import Button from '../components/common/Button'
import Container from "../components/common/Container";
import economics from '../static/img/economics.svg'
import fights from '../static/icons/fights.svg'
import prison from '../static/icons/prison.svg'
import kitchen from '../static/icons/kitchen.svg'
import bag from '../static/icons/bag.svg'
import tattoo from '../static/icons/tattoo.svg'
import { Link } from "react-router-dom";
import stashes from '../static/icons/stashes.svg'
import nftItems from '../static/img/nftitems.svg'
import power from '../static/icons/power.svg'
import keys from '../static/icons/keys.svg'
import roadmapShortLine from '../static/img/roadmapShortLine.svg'
import roadmapLongLine from '../static/img/roadmapLongLine.svg'
import Footer from '../components/Footer'
import Chart from "../components/Chart";


export default function Home() {
    return(
        <div>
            <div  className={css(styles.header)} >
                <Header />
            </div>
            <Container>
                <div className={css(styles.news)}>
                    <div className={css(styles.newsTitle)}>
                        <span style={{fontSize: 30, textTransform: 'uppercase'}}>LATEST NEWS</span>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer'}}>
                            <span style={{fontSize: 30,
                                color: '#A7A7A7',
                                marginLeft: 17,
                                fontWeight: 'normal'}}>VIEW ALL</span>
                            <div style={{
                                width: 27,
                                height: 13,
                                marginLeft: 12,
                                cursor: 'pointer'}}><img src={newsArrow} alt=""/></div>
                        </div>
                    </div>
                    <div className={css(styles.newsContent)}>
                        <div className={css(styles.newsContentItem)}>
                            <div style={{padding: '130px 20px 20px 15px', display: 'flex', flexDirection: 'column'}}>
                            <span className={css(styles.newsContentItemTitle)}>21 DECEMBER 2022</span>
                            <span className={css(styles.newsContentItemDescr)}>
                                The DPC 2021-2022 Winter Tour Regional Finals
                            </span>
                            </div>
                        </div>
                        <div className={css(styles.newsContentItem)}>
                            <div style={{padding: '130px 20px 20px 15px', display: 'flex', flexDirection: 'column'}}>
                            <span style={{fontSize: 20, color: '#A7A7A7', fontWeight: 800}}>21 DECEMBER 2022</span>
                            <span className={css(styles.newsContentItemDescr)}>
                                The DPC 2021-2022 Winter Tour Regional Finals
                            </span>
                            </div>
                        </div>
                        <div className={css(styles.newsContentItem)}>
                            <div style={{padding: '130px 20px 20px 15px', display: 'flex', flexDirection: 'column'}}>
                            <span style={{fontSize: 20, color: '#A7A7A7', fontWeight: 800}}>21 DECEMBER 2022</span>
                            <span className={css(styles.newsContentItemDescr)}>
                                The DPC 2021-2022 Winter Tour Regional Finals
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'absolute'}}>
                <div style={{maxWidth: 1357, height: 'auto',}} >
                    <img style={{width: '100%',}} src={smokeLeft} alt=""/>
                </div>
                <div style={{maxWidth: 1357, height: 'auto',}}>
                    <img style={{width: '100%'}} src={smokeRight} alt=""/>
                </div>
            </div>
            <Container>
             <div className={css(styles.about)}>
                    <span className={css(styles.title)}>About the game</span>
                    <span className={css(styles.aboutDescr)}>
                        You go to prison as an ordinary kid. In order to survive in these difficult conditions, you have to fight for the right to life. Fight with other prisoners and if you win you get a well-deserved reward - a cigarette. If you are strong in cooking, go to the kitchen and cook food. Start your journey of roofing business, conquering one prison after another.
                    </span>
                    <span className={css(styles.aboutDescr)}>
                        But not all victories are easy, some bosses can't be defeated alone. You'll have to assemble your own team or join someone else's team to kill the most powerful boss. Do not miss the opportunity to keep your physical form at an appropriate level. A convict without a tattoo is not a convict. So put a tattoo on your body - they will increase your credibility among the prisoners.
                    </span>
                    <div className={css(styles.aboutButtons)}>
                        <Link to="whitepaper" style={{textDecoration: 'none', width: 380, fontSize: 34}}>
                            <Button text='WHITEPAPER' style={{height: 66, padding: '0 40px'}} />
                        </Link>
                        <Link to='#' style={{width: 380, height: 50, fontSize: 34, textDecoration: 'none', marginLeft: 40}}>
                            <Button text='PITCHDECK' style={{height: 66, padding: '0 40px'}}/>
                        </Link>
                    </div>
                </div>
            </Container>
            <Container>
                <div className={css(styles.nft)}>
                    <span className={css(styles.title)}>NFT items</span>
                    <span className={css(styles.nftDescr)}>
                        To mine tokens, you will need to purchase one or several NFTs. They are of 3 types: “Weapon”, “Crime”, ”Chef’s Certificate”.</span>
                    <span className={css(styles.nftDescr)}>
                        Each type of NFT produces its own specific resource: Weapon - Cigarettes (CCIG), Chef’s Certificate - Food (CFOD) Crime - Rubl (CRUB)</span>
                    <span className={css(styles.nftDescr)}>
                        In our NFT game, this is like a pass to the game. Although he has basic production parameters, which play a large role, but ultimately the player can develop through active play and get more. In general, we encourage old and active players.</span>
                    <div style={{maxWidth: 1070, height: 'auto', margin: 'auto'}}>
                    </div>
                </div>
            </Container>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'absolute'}}>
                <div style={{maxWidth: 1357, height: 'auto',}} >
                    <img style={{width: '100%',}} src={smokeLeft} alt=""/>
                </div>
                <div style={{maxWidth: 1357, height: 'auto',}}>
                    <img style={{width: '100%'}} src={smokeRight} alt=""/>
                </div>
            </div>
            <Container>
                <div className={css(styles.economics)}>
                    <span className={css(styles.title)}>Game economics</span>
                    <span className={css(styles.economicsDescr)}>
                        There are three economic currencies in the game: "Rubl", "Cigarettes", "Food", as well as two resources: "Authority", "Energy" and one indicator "Level".</span>
                    <span className={css(styles.economicsDescr)}>
                        All these parameters will interact with each other and create an economic balance. Each currency will be tied to a specific token: Ruble, Cigarettes and Food corresponds to tokens: $CRUB (Rubl), $CCIG (Cigarettes), $CFOD (Food).</span>
                    <span className={css(styles.economicsDescr)}>
                        Thus, you can not only mine the game currency you need using NFT, but also buy from the market.</span>
                    <div style={{maxWidth: 1200, height: 'auto', margin: 'auto'}}>
                        <img src={economics} alt="" style={{width: '100%'}}/>
                    </div>
                </div>
            </Container>
            <Container>
                <div className={css(styles.features)}>
                    <span className={css(styles.title)}>Features available</span>
                    <div className={css(styles.featuresContent)}>
                        <div className={css(styles.featuresContentItem)}>
                            <div style={{maxWidth: 200, height: 'auto'}}>
                                <img src={fights} alt="" style={{width: '100%'}}/>
                            </div>
                            <span className={css(styles.featuresTitle)}>fights</span>
                            <span className={css(styles.featuresDescr)}>Make single or massive attacks against prison bosses.</span>
                        </div>
                        <div className={css(styles.featuresContentItem)}>
                            <div style={{maxWidth: 200, height: 'auto'}}>
                                <img src={prison} alt="" style={{width: '100%'}}/>
                            </div>
                            <span className={css(styles.featuresTitle)}>prison</span>
                            <span className={css(styles.featuresDescr)}>Go through prisons one by one and take over the prison business.</span>
                        </div>
                        <div className={css(styles.featuresContentItem)}>
                            <div style={{maxWidth: 200, height: 'auto'}}>
                                <img src={kitchen} alt="" style={{width: '100%'}}/>
                            </div>
                            <span className={css(styles.featuresTitle)}>kitchen</span>
                            <span className={css(styles.featuresDescr)}>If you are a good cook, then send to the kitchen to get “Food”.</span>
                        </div>
                        <div className={css(styles.featuresContentItem)}>
                            <div style={{maxWidth: 200, height: 'auto'}}>
                                <img src={bag} alt="" style={{width: '100%'}}/>
                            </div>
                            <span className={css(styles.featuresTitle)}>bag</span>
                            <span className={css(styles.featuresDescr)}>Improve the items in your bag at the expense of “Level” and “Authority”.</span>
                        </div>
                        <div className={css(styles.featuresContentItem)}>
                            <div style={{maxWidth: 200, height: 'auto'}}>
                                <img src={tattoo} alt="" style={{width: '100%'}}/>
                            </div>
                            <span className={css(styles.featuresTitle)}>tattoo</span>
                            <span className={css(styles.featuresDescr)}>Get tattoos to gain the "Authority" in the prison and pump your character.</span>
                        </div>
                        <div className={css(styles.featuresContentItem)}>
                            <div style={{maxWidth: 200, height: 'auto'}}>
                                <img src={stashes} alt="" style={{width: '100%'}}/>
                            </div>
                            <span className={css(styles.featuresTitle)}>stashes</span>
                            <span className={css(styles.featuresDescr)}>Collect various stashes and trade their collections for resources.</span>
                        </div>
                        <div className={css(styles.featuresContentItem)}>
                            <div style={{maxWidth: 200, height: 'auto'}}>
                                <img src={power} alt="" style={{width: '100%'}}/>
                            </div>
                            <span className={css(styles.featuresTitle)}>power</span>
                            <span className={css(styles.featuresDescr)}>Upgrade your power to increase your damage on various raids.</span>
                        </div>
                        <div className={css(styles.featuresContentItem)}>
                            <div style={{maxWidth: 200, height: 'auto'}}>
                                <img src={keys} alt="" style={{width: '100%'}}/>
                            </div>
                            <span className={css(styles.featuresTitle)}>keys</span>
                            <span className={css(styles.featuresDescr)}>Collect keys from prison bosses to start mining more.</span>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className={css(styles.roadmap)}>
                    <span className={css(styles.title)}>Roadmap</span>
                    <div className={css(styles.roadmapContent)}>
                        <div className={css(styles.roadmapContentItem)}>
                           <div className={css(styles.roadmapContentItemFirst)}>
                               <span className={css(styles.roadmapContentTitle)}>Stage 1 <br /> (End of Q4 2021)</span>
                               <span className={css(styles.roadmapContentDescr)}>- Social networking </span>
                               <span className={css(styles.roadmapContentDescr)}>- Website development for the game</span>
                           </div>
                        </div>
                        <div className={css(styles.roadmapContentItem)} style={{marginTop: 254}}>
                            <div className={css(styles.roadmapContentItemSecond)}>
                                <span className={css(styles.roadmapContentTitle)}>Stage 2<br />(Q1 2022)</span>
                                <span className={css(styles.roadmapContentDescr)}>- Marketplace launch on BSC Testnet</span>
                                <span className={css(styles.roadmapContentDescr)}>- Launching the beta version of the game on BSC Testnet</span>
                                <span className={css(styles.roadmapContentDescr)}>- Marketplace launch on BSC Mainnet</span>
                                <span className={css(styles.roadmapContentDescr)}>- Selling NFT</span>
                                <span className={css(styles.roadmapContentDescr)}>- Token pre-sale</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Chart />
            <div>
                <Footer />
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundImage: `url(${Background})`,
        height: 1053,
        backgroundPosition: 'center',
        padding: '17px 33px 0 26px',
        backgroundSize: 'cover',
        justifyContent: 'center',
        '@media(max-width: 1200px)': {
            padding: '15px 15px 0 15px'
        },
    },
    news: {
        marginTop: 51,
        '@media (max-width: 1200px)':{
            margin: '51px 40px 0 40px'
        }

    },
    newsTitle: {
        display: 'flex',
        flexDirection: 'row',
    },
    newsContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 17,
        '@media(max-width: 576px)': {
            flexDirection: 'column',
            alignItems: 'center',
            margin: 0
        }
    },
    newsContentItem: {
        maxWidth: 380,
        height: 252,
        backgroundColor: 'red',
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        boxShadow: 'inset 0 4px 4px rgba(0, 0, 0, 0.25)',
        cursor: 'pointer',
        '@media (max-width: 1200px)': {
            maxWidth: 300
        },
        '@media (max-width: 992px)': {
            maxWidth: 280
        },
        '@media (max-width: 768px)': {
            maxWidth: 280,
            ':nth-child(3n)': {
                display: 'none'
            }
        },
        '@media(max-width: 576px)': {
            marginTop: 30
        }
    },
    about: {
      marginTop: 275,
        position: 'relative',
        '@media(max-width: 992px)': {
            marginTop: 150
        }
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        color: '#FFF',
        fontSize: 100,
        fontWeight: 'normal',
        fontFamily: 'Do Hyeon',
        '@media(max-width: 992px)': {
            fontSize: 80
        },
        '@media(max-width: 576px)': {
            fontSize: 60
        }
    },
    aboutDescr: {
        fontFamily: 'BenchNine',
        fontSize: 35,
        color: '#9F9F9F',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 35,
        fontWeight: 'normal',
        '@media (max-width: 1200px)': {
            margin: '35px 30px 0 30px'
        },
        '@media(max-width: 992px)': {
            fontSize: 30
        },
        '@media(max-width: 576px)': {
            fontSize: 25
        }
    },
    aboutButtons: {
        width: 350,
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        marginTop: 70
    },
    nft: {
        marginTop: 275,
        '@media(max-width: 992px)': {
            marginTop: 150
        }
    },
    nftDescr: {
        fontFamily: 'BenchNine',
        fontSize: 35,
        color: '#9F9F9F',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 35,
        fontWeight: 'normal',
        '@media (max-width: 1200px)': {
            margin: '35px 30px 0 30px'
        },
        '@media(max-width: 992px)': {
            fontSize: 30
        },
        '@media(max-width: 576px)': {
            fontSize: 25
        }
    },
    economics: {
        position: 'relative',
        marginTop: 220,
        '@media(max-width: 992px)': {
            marginTop: 100
        }

    },
    economicsDescr: {
        fontFamily: 'BenchNine',
        fontSize: 35,
        color: '#9F9F9F',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 35,
        fontWeight: 'normal',
        '@media (max-width: 1200px)': {
            margin: '35px 30px 0 30px'
        },
        '@media(max-width: 992px)': {
            fontSize: 30
        },
        '@media(max-width: 576px)': {
            fontSize: 25
        }
    },
    features: {
        width: '100%',
        marginTop: 50,
    },
    featuresContent: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        '@media(max-width: 576px)': {
            justifyContent: 'center'
        }
    },
    featuresContentItem: {
        display: 'flex',
        maxWidth: '21%',
        border: 1,
        borderStyle: 'solid',
        borderColor: '#292929',
        marginTop: 64,
        padding: '30px 15px',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        '@media(max-width: 992px)': {
            width: '17%',
            padding: '10px 15px'
        },
        '@media(max-width: 768px)': {
            width: '22%',
            padding: '10px 15px'
        },
        '@media(max-width: 576px)': {
            width: '50%',
            maxWidth: '50%'
        }
    },
    featuresTitle: {
        fontFamily: 'Do Hyeon',
        fontWeight: 'normal',
        fontSize: 26,
        textTransform: 'uppercase',
        marginTop: 14,
    },
    featuresDescr: {
        fontWeight: 'normal',
        color: '#A7A7A7',
        fontSize: 23,
        marginTop: 10,
    },
    roadmap: {
        marginTop: 100
    },
    roadmapContent: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 78,
        flexDirection: 'row',
        flexWrap: 'wrap',
        '@media(max-width: 768px)': {
            flexDirection: 'column'
        }
    },
    roadmapContentItem: {
        width: '50%',
        borderTopWidth: 1,
        borderTopColor: '#A7A7A7',
        borderTopStyle: 'dashed',

    },

    roadmapContentTitle: {
        fontFamily: 'Do Hyeon',
        fontWeight: 'normal',
        fontSize: 30,
    },
    roadmapContentDescr: {
        color: '#A7A7A7',
        fontSize: 22,
        marginTop: 10,
        fontWeight: 'normal'
    },
    newsContentItemTitle: {
        fontSize: 20,
        color: '#A7A7A7',
        fontWeight: 800,
        '@media(max-width: 1200px)': {

        },
    },
    newsContentItemDescr: {
        fontSize: 30,
        color: '#ECECEC',
        lineHeight: 1.5,
        '@media(max-width: 1200px)': {
            fontSize: 25
        },
        '@media(max-width: 992px)': {
            fontSize: 23
        },
    },
    roadmapContentItemFirst: {
        marginLeft: 100, display: 'flex', flexDirection: 'column', marginTop: 65,
        '@media(max-width: 992px)': {
            marginLeft: 15
        },
    },
    roadmapContentItemSecond: {
        marginLeft: 200, display: 'flex', flexDirection: 'column', marginTop: 40,
        '@media(max-width: 992px)': {
            marginLeft: 15
        },
    }
});