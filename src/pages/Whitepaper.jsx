import React from 'react'
import Header from '../components/Header'
import { StyleSheet, css } from 'aphrodite';
import Container from "../components/common/Container";
import headerBackground from "../static/img/headerBackground.jpg";
import Button from "../components/common/Button";
import github from '../static/icons/github.svg'
import economics from '../static/img/economics.svg'

export default function Whitepaper() {
    return(
        <div>
            <div className={css(styles.header)}>
                <Header />
            </div>
         <Container>
            <div className={css(styles.whitepaper)}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span className={css(styles.whitepaperNav)}>HOME / WHITEPAPER</span>
                        <span className={css(styles.whitepaperDate)}>Page last updated: January 6, 2022</span>
                    </div>
                    <div>
                    <Button text='EDIT PAGE' icon={<img src={github} style={{width: 32, height: 32}} alt=""/>}
                            textStyle={{color: '#B2B2B2', fontSize: 20, margin: '0 20px 0 15px'}} />
                    </div>
                </div>
                <div className={css(styles.whitepaperContent)}>
                    <div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span style={{fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 40 }}>
                                Convicted Whitepaper</span>
                            <span style={{fontFamily: 'Barlow Condensed', color: '#828282', fontWeight: 400, marginTop: 22, fontSize: 26, maxWidth: 928}}>There are three economic currencies in the game: "Rubl", "Cigarettes", "Food", as well as two resources: "Authority", "Energy" and one indicator "Level". All of these parameters will interact with each other and create an economic balance. </span>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span style={{fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: 40, marginTop: 50 }}>
                                About the game</span>
                            <span style={{fontFamily: 'Barlow Condensed', color: '#828282', fontWeight: 400, marginTop: 22, fontSize: 26, maxWidth: 928}}>This introductory paper was originally published in 2013 by Vitalik Buterin, the founder of Ethereum, before the project's launch in 2015. It's worth noting that Ethereum, like many community-driven, open-source software projects, has evolved since its initial inception. <br/><br/>While several years old, we maintain this paper because it continues to serve as a useful reference and an accurate representation of Ethereum and its vision. To learn about the latest developments of Ethereum, and how changes to the protocol are made, we recommend this guide. </span>
                            <div style={{width: 1050, height: 'auto', margin: 'auto'}}>
                                <img src={economics} alt="" style={{width: '100%'}}/>
                            </div>
                        </div>
                    </div>
                    <div className={css(styles.whitepaperOnpage)}>
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
    whitepaper: {
        padding: '100px 0'
    },
    whitepaperNav: {
        fontWeight: 800,
        fontSize: 20
    },
    whitepaperDate: {
        fontWeight: 'normal',
        color: '#ADADAD',
        fontSize: 20,
        marginTop: 5
    },
    whitepaperButton: {
        padding: 0
    },
    whitepaperContent: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 70
    },
    whitepaperOnpage: {
        borderLeftWidth: 1,
        borderLeftStyle: 'solid',
        borderLeftColor: '#4A4A4A',
        height: 717
    }
})