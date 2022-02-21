import React from 'react'
import {css, StyleSheet} from "aphrodite";
import Container from '../components/common/Container'
import logo from '../static/icons/logo.svg'
import footerSmoke from '../static/img/footerSmoke.svg'
import discord from '../static/icons/discord.svg'
import twitter from '../static/icons/twitter.svg'
import telegram from '../static/icons/telegram.svg'
import github from '../static/icons/github.svg'
import facebook from '../static/icons/facebook.svg'

export default function Footer() {
    return(
        <div style={{marginTop: 100, width: '100%', height: 300}}>
            <Container>
                <div className={css(styles.footer)}>
                    <div className={css(styles.footerContent)}>
                        <div>
                            <img src={logo} alt=""/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div className={css(styles.footerMenu)}>
                                <span className={css(styles.footerItem)}>PLAY & EARN</span>
                                <span className={css(styles.footerItem)}>MARKETPLACE</span>
                                <span className={css(styles.footerItem)}>REGISTRATION</span>
                                <span className={css(styles.footerItem)}>STAKING</span>
                                <span className={css(styles.footerItem)}>LIQUIDITY</span>
                            </div>
                            <div  className={css(styles.footerMenu)}>
                                <span className={css(styles.footerItem)}>WHITEPAPER</span>
                                <span className={css(styles.footerItem)}>ROADMAP</span>
                                <span className={css(styles.footerItem)}>GETTING STARTED</span>
                                <span className={css(styles.footerItem)}>FAQ</span>
                                <span className={css(styles.footerItem)}>PRIVACY POLICY</span>
                                <span className={css(styles.footerItem)}>TERMS & CONDITIONS</span>
                            </div>
                            <div  className={css(styles.footerMenu)}>
                                <span className={css(styles.footerItem)}>CONTRIBUTORS</span>
                                <span className={css(styles.footerItem)}>CAREERS</span>
                                <span className={css(styles.footerItem)}>INVESTEMENTS</span>
                            </div>
                        </div>
                    </div>
                    <div className={css(styles.footerContactContent)}>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <div style={{width: 40, height: 'auto'}}>
                                <img src={discord} alt="" style={{width: '100%'}}/>
                            </div>
                            <div style={{marginLeft: 20, width: 40, height: 'auto'}}>
                                <img src={twitter} alt="" style={{width: '100%'}}/>
                            </div>
                            <div style={{marginLeft: 20, width: 40, height: 'auto'}}>
                                <img src={telegram} alt="" style={{width: '100%'}}/>
                            </div>
                            <div style={{marginLeft: 20, width: 40, height: 'auto'}}>
                                <img src={facebook} alt="" style={{width: '100%'}}/>
                            </div>
                            <div style={{marginLeft: 20, width: 40, height: 'auto'}}>
                                <img src={github} alt="" style={{width: '100%'}}/>
                            </div>
                        </div>
                        <div className={css(styles.footerContact)}>
                            <span className={css(styles.footerContactTitle)}>Support</span>
                            <span className={css(styles.footerContactDescr)}>support@convicted.app</span>
                        </div>
                        <div className={css(styles.footerContact)}>
                            <span className={css(styles.footerContactTitle)}>Support</span>
                            <span className={css(styles.footerContactDescr)}>support@convicted.app</span>
                        </div>
                    </div>
                </div>
                <span className={css(styles.footerCompany)}>©2021 by Versegame LLC.</span>
            </Container>
        </div>
    )
}

const styles = StyleSheet.create({
    footer: {
        padding: '60px 0 0 0',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        '@media(max-width: 992px)': {
            padding: '60px 20px 0 20px'
        },
        '@media(max-width: 576px)': {
            flexDirection: 'column',
            alignItems: 'center'
        }
    },
    footerItem: {
        color: '#B0B0B0',
        fontWeight: 'normal',
        fontSize: 20,
        marginTop: 5
    },
    footerMenu: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 80,
        '@media(max-width: 992px)': {
            marginLeft: 60,
            ':nth-child(1)': {
                marginLeft: 15
            }
        },
        '@media(max-width: 768px)': {
            marginLeft: 30
        }
    },
    footerContact: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 15
    },
    footerContactTitle: {
        fontFamily: 'Do Hyeon',
        fontWeight: 'normal',
        fontSize: 15
    },
    footerContactDescr: {
        fontFamily: 'Do Hyeon',
        fontWeight: 'normal',
        fontSize: 15,
        color: '#B0B0B0'
    },
    footerCompany: {
        display: 'flex',
        fontFamily: 'Do Hyeon',
        fontWeight: 'normal',
        fontSize: 15,
        justifyContent: 'center',
        marginTop: 40
    },
    footerContent: {
        display: 'flex',
        flexDirection: 'row',
        '@media(max-width: 992px)': {
            flexDirection: 'column'
        },
        '@media(max-width: 576px)': {
            alignItems: 'center'
        }
    },
    footerContactContent: {
        '@media(max-width: 576px)': {
            marginTop: 30,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
        }
    }
})