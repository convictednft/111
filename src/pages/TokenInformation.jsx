import React from 'react'
import Header from '../components/Header'
import { StyleSheet, css } from 'aphrodite';
import Container from "../components/common/Container";
import headerBackground from "../static/img/headerBackground.jpg";
import Button from "../components/common/Button";
import github from '../static/icons/github.svg'
import economics from '../static/img/economics.svg'
import {Link} from "react-router-dom";
import tokenInfoFirst from '../static/img/tokenInfoFirst.svg'
import smokeLeft from "../static/img/smokeLeft.svg";
import tokenInfoSecond from '../static/img/tokenInfoSecond.svg'

export default function TokenInformation() {
    return(
        <div>
            <div className={css(styles.header)}>
                <Header />
            </div>
         <Container>
            <div className={css(styles.tokenInformation)}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span className={css(styles.tokenInformationNav)}>HOME / WHITEPAPER</span>
                        <span className={css(styles.tokenInformationDate)}>Page last updated: January 6, 2022</span>
                    </div>
                    <div>
                    <Button text='EDIT PAGE' icon={<img src={github} style={{width: 32, height: 32}} alt=""/>}
                            textStyle={{color: '#B2B2B2', fontSize: 20, margin: '0 20px 0 15px'}} />
                    </div>
                </div>
                <div className={css(styles.tokenInformationContent)}>
                    <div style={{maxWidth: 953, marginBottom: 150}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span className={css(styles.tokenInformationTitle)}>
                                Token information
                            </span>
                            <div style={{marginTop: 22}}>
                                <span className={css(styles.tokenInformationDescr)}>
                                There are four tokens in our project (one external and three internal), as well as the future token of our company.
                            </span>
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', minHeight: 474, alignItems: 'stretch'}}>
                            <div style={{marginTop: 30, width: 434}}>
                                <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className={css(styles.tokenInformationFirst)}>
                                <span style={{fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 20,}}>
                                    $CONV TOKEN MODEL
                                </span>
                                    </div>
                                    <div className={css(styles.tokenInformationSecond)}>
                                    <span className={css(styles.tokenInformationSecondTitle)}>
                                        BEP20 BSC token
                                    </span>
                                        <span className={css(styles.tokenInformationSecondTitle)}>
                                        Has a max supply (300M)
                                    </span>
                                        <span className={css(styles.tokenInformationSecondTitle)}>
                                        External token
                                    </span>
                                        <div style={{marginTop: 40, display: 'flex', flexDirection: 'column'}}>
                                        <span className={css(styles.tokenInformationDescr)}>
                                        - Staking
                                    </span>
                                            <span className={css(styles.tokenInformationDescr)}>
                                        - DAO token. We share profits from the game, each token owner will receive $BUSD and internal game tokens.Profits will be generated from trading floor commissions, commissions when withdrawing internal tokens, NFT sales, and cosmetic items (various prison rooms and characters).
                                    </span>
                                            <span className={css(styles.tokenInformationDescr)}>
                                        - Commission for the withdrawal of internal tokens
                                    </span>
                                            <span className={css(styles.tokenInformationDescr)}>
                                        - Events participation
                                    </span>
                                            <span className={css(styles.tokenInformationDescr)}>
                                        - Game token
                                    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{marginTop: 30, width: 434}}>
                                <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <div className={css(styles.tokenInformationFirst)}>
                                <span style={{fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 20,}}>
                                    $CCUG $CRUB $CFOD
                                </span>
                                    </div>
                                    <div className={css(styles.tokenInformationSecond)}>
                                    <span className={css(styles.tokenInformationSecondTitle)}>
                                       BEP20 BSC tokens
                                    </span>
                                        <span className={css(styles.tokenInformationSecondTitle)}>
                                        No hard cap on supply
                                    </span>
                                        <span className={css(styles.tokenInformationSecondTitle)}>
                                            Internal token
                                    </span>
                                        <div style={{marginTop: 40, display: 'flex', flexDirection: 'column'}}>
                                        <span className={css(styles.tokenInformationDescr)}>
                                        - In game activities
                                    </span>
                                            <span className={css(styles.tokenInformationDescr)}>
                                       - In game upgrades
                                    </span>
                                            <span className={css(styles.tokenInformationDescr)}>
                                        - Game tokens
                                    </span>
                                            <span className={css(styles.tokenInformationDescr)}>
                                        - Each type of token will generate income for players, including $CONV. In tokenomics, we will specifically allocate a 15% $CONV block for internal tokens, which will never be unlocked.
                                    </span>
                                          <div style={{marginTop: 40}}>
                                              <span className={css(styles.tokenInformationDescr)}>
                                                  This scheme should bring real value to internal tokens and be of interest to funds, investors and players.
                                              </span>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', marginTop: 100}}>
                            <span className={css(styles.tokenInformationTitle)}>
                                Why do you need so many internal tokens?
                            </span>
                            <div style={{marginTop: 22}}>
                                    <span className={css(styles.tokenInformationDescr)}>
                                         In simple terms, 3 tokens are needed for secondary market sales and token growth.
                                    </span>
                            </div>
                            <div style={{marginTop: 40, display: 'flex', flexDirection: 'column'}}>
                                <span className={css(styles.tokenInformationDescr)}>
                                    There will be two ways to acquire an NFT item in our game:
                                </span>
                                <span className={css(styles.tokenInformationDescr)}>
                                    1) It's a secondary market purchase.
                                </span>
                                <span className={css(styles.tokenInformationDescr)}>
                                    2) It is a purchase for internal tokens within the game.
                                </span>
                            </div>
                            <div style={{marginTop: 40}}>
                                    <span className={css(styles.tokenInformationDescr)}>
                                         In essence, this balanced token rule links the price of tokens and the price of the NFT item.
                                    </span>
                            </div>
                            <div style={{marginTop: 40}}>
                                    <span className={css(styles.tokenInformationDescr)}>
                                         Let's say the secondary market price is $40 per NFT, and in-game you have to give 1000 cigarettes, 100 rubles and 1 $CONV for the item, which is now valued at $35. The player will not buy the item on the secondary market, he will buy tokens, transfer them to the game and buy them inside the game.
                                    </span>
                            </div>
                            <div style={{marginTop: 40}}>
                                    <span className={css(styles.tokenInformationDescr)}>
                                         This connection guarantees the growth of the NFT market and tokens in our game. This connects traders, speculators, and spins commissions for people who are members of the DAO.
                                    </span>
                            </div>
                            <div style={{marginTop: 40}}>
                                    <span className={css(styles.tokenInformationDescr)}>
                                         More details about internal tokens can be found on the <Link style={{color: '#e56f2e', textDecoration: 'none'}} to='/whitepaper'>WHITE PAPER</Link> page.
                                    </span>
                            </div>
                        </div>
                        <div style={{maxWidth: 954, height: 'auto', marginTop: 25}} >
                            <img style={{width: '100%',}} src={tokenInfoFirst} alt=""/>
                        </div>
                       <div style={{marginTop: 90}}>
                            <span className={css(styles.tokenInformationTitle)}>
                               DAO. What is a DAO?
                            </span>
                           <div style={{marginTop: 22}}>
                                    <span className={css(styles.tokenInformationDescr)}>
                                         A DAO or decentralized autonomous organization is a business structure in which control is distributed rather than hierarchical.
                                    </span>
                           </div>
                       </div>
                        <div style={{marginTop: 90}}>
                            <span className={css(styles.tokenInformationTitle)}>
                               How will DAO work in our game project?
                            </span>
                           <div style={{marginTop: 22, display: 'flex', flexDirection: 'column'}}>
                                    <span className={css(styles.tokenInformationDescr)}>
                                         DAO $CONV can be compared to a business or stock ownership with dividends. By buying or earning a portion of these tokens, you become a co-owner of the game and profit from any income from our project.
                                    </span>
                                   <span style={{marginTop: 40}} className={css(styles.tokenInformationDescr)}>
                                   Example: If you buy 1% of $CONV shares, you will earn 1% of the income from the entire game.
                                     </span>
                               <div style={{marginTop: 40}}>
                                   <span className={css(styles.tokenInformationDescr)}>
                                       Our game's revenue is made up of:
                                   </span>
                                   <ul style={{margin: 0}} className={css(styles.tokenInformationDescr)}>
                                       <li>
                                           5% commission from the game's marketplace, in the form of $BUSD Stablecoins
                                       </li>
                                       <li>
                                           $CONV tokens from transactions when players withdraw internal tokens from the game
                                       </li>
                                       <li>
                                           Sales of NFT and other cosmetic items for the game
                                       </li>
                                   </ul>
                               </div>
                               <div style={{marginTop: 40, display: 'flex', flexDirection: 'column'}}>
                                   <span className={css(styles.tokenInformationDescr)}>
                                        Income will be paid even if you send tokens to staking or liquidity.
                                   </span>
                                   <span className={css(styles.tokenInformationDescr)}>
                                        Income is paid out once a month on a random date.
                                   </span>
                               </div>
                           </div>
                       </div>
                        <div style={{marginTop: 100, display: 'flex', flexDirection: 'column'}}>
                            <span className={css(styles.tokenInformationTitle)}>
                                DAO internal tokens ($CCIG, $CRUB, $CFOD)
                            </span>
                            <span className={css(styles.tokenInformationDescr)} style={{marginTop: 40}}>
                                Internal tokens will also have their own DAO. It will work similarly, keeping the internal tokens in your wallet you get payouts in the same kinds of ways as with the $CONV token.
                            </span>
                            <div style={{maxWidth: 993, height: 'auto', marginTop: 80}} >
                                <img style={{width: '100%',}} src={tokenInfoSecond} alt=""/>
                            </div>
                        </div>
                        <div style={{marginTop: 100, display: 'flex', flexDirection: 'column'}}>
                            <span className={css(styles.tokenInformationTitle)}>
                                How does it work?
                            </span>
                            <span className={css(styles.tokenInformationDescr)} style={{marginTop: 35}}>
                                A special block of tokens - Pool for internal tokens, consisting of 15% of all $CONV tokens - has been added to tokenomics. It will provide income from the game to internal tokens in a certain proportion, depending on the economy of the game, which we will determine before launching the project on the main network. In the picture, the payouts are marked with percentages as X%, Y%, Z%.
                            </span>
                            <span className={css(styles.tokenInformationDescr)} style={{marginTop: 35}}>
                                The Pool for internal tokens block will never be unlocked. That is, the development team will not be able to sell tokens from this block after a while.
                            </span>
                            <span className={css(styles.tokenInformationDescr)} style={{marginTop: 35}}>
                                The block will always exist and bring profit to holders of internal tokens.
                            </span>
                        </div>
                        <div style={{marginTop: 100}}>
                                   <span className={css(styles.tokenInformationTitle)}>
                                       What is it for?
                                   </span>
                            <div style={{marginTop: 35}}>
                                <span className={css(styles.tokenInformationDescr)}>
                                    This system should solve the following problems:
                                </span>
                                <ul style={{margin: 0}} className={css(styles.tokenInformationDescr)}>
                                    <li>
                                        5% commission from the game's marketplace, in the form of $BUSD Stablecoins
                                    </li>
                                    <li>
                                        $CONV tokens from transactions when players withdraw internal tokens from the game
                                    </li>
                                    <li>
                                        Sales of NFT and other cosmetic items for the game
                                    </li>
                                </ul>
                            </div>
                            <div style={{marginTop: 35, display: 'flex', flexDirection: 'column'}}>
                                <span className={css(styles.tokenInformationDescr)}>
                                    Income would only accrue on tokens that are in wallets.
                                </span>
                                <span className={css(styles.tokenInformationDescr)}>
                                    Income is accrued once a month on a random date.
                                </span>
                            </div>
                        </div>
                        <div style={{marginTop: 100, display: 'flex', flexDirection: 'column'}}>
                            <span className={css(styles.tokenInformationTitle)}>
                                What other features does the DAO offer?
                            </span>
                            <span className={css(styles.tokenInformationDescr)} style={{marginTop: 35}}>
                                Owning 0.25% of any token gives you a say in the future development of the game. All information about what form this will take will appear later.
                            </span>
                        </div>
                    </div>
                    <div className={css(styles.tokenInformationOnpage)}>
                        <span style={{margin: '0 90px 0 17px', fontFamily: 'Barlow Condensed', fontWeight: 500, fontSize: 20}}>
                            ON THIS PAGE
                        </span>
                    </div>
                </div>
            </div>
         </Container>
        </div>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundImage: `url(${headerBackground})`,
        height: 376,
        backgroundPosition: 'center',
        paddingTop: 17,
        paddingRight: 33,
        paddingLeft: 26,
        backgroundSize: 'cover',
    },
    tokenInformation: {
        padding: '100px 0'
    },
    tokenInformationNav: {
        fontWeight: 800,
        fontSize: 20
    },
    tokenInformationDate: {
        fontWeight: 'normal',
        color: '#ADADAD',
        fontSize: 20,
        marginTop: 5
    },
    tokenInformationButton: {
        padding: 0
    },
    tokenInformationContent: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 70
    },
    tokenInformationTitle: {
        fontFamily: 'Barlow Condensed',
        fontWeight: 800,
        fontSize: 40
    },
    tokenInformationOnpage: {
        borderLeftWidth: 1,
        borderLeftStyle: 'solid',
        borderLeftColor: '#4A4A4A',
        height: 717
    },
    tokenInformationDescr: {
        fontFamily: 'Barlow Condensed',
        color: '#828282',
        fontWeight: 400,
        fontSize: 26,
        maxWidth: 928,
    },
    tokenInformationFirst: {
        width: '100%',
        padding: '13px 12px',
        backgroundColor: 'rgba(82, 82, 82, 0.5)',
        border: 2,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: '5px 5px 0 0',
        borderBottomWidth: 0,
    },
    tokenInformationSecond: {
        width: '100%',
        backgroundColor: 'rgba(47, 47, 47, 0.5)',
        border: 2,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.25)',
        padding: '20px 12px',
        display: 'flex',
        flexDirection: 'column',
    },
    tokenInformationSecondTitle: {
        color: '#bdbdbd',
        fontSize: 26,
        fontWeight: 'normal',
        fontFamily: 'Barlow Condensed'
    }
})