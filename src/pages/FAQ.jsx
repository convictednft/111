import React from 'react'
import Header from '../components/Header'
import { StyleSheet, css } from 'aphrodite';
import Container from "../components/common/Container";
import headerBackground from "../static/img/headerBackground.jpg";
import Button from "../components/common/Button";
import github from '../static/icons/discord.svg'
import {Link} from "react-router-dom";

export default function FAQ() {
    return(
        <div>
            <div className={css(styles.header)}>
                <Header />
            </div>
         <Container>
            <div className={css(styles.faqInformation)}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span className={css(styles.faqNav)}>HOME / FAQ</span>
                        <span className={css(styles.faqDate)}>Page last updated: January 6, 2022</span>
                    </div>
                    <div>
                    <Button text='EDIT PAGE' icon={<img src={github} style={{width: 32, height: 32}} alt=""/>}
                            textStyle={{color: '#B2B2B2', fontSize: 20, margin: '0 20px 0 15px'}} />
                    </div>
                </div>
                <div className={css(styles.faqContent)}>
                    <div style={{maxWidth: 953, marginBottom: 150}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span className={css(styles.faqTitle)}>Convicted Whitepaper</span>
                            <span className={css(styles.faqDescr)} style={{marginTop: 25}}>
                                There are three economic currencies in the game: "Rubl", "Cigarettes", "Food", as well as two resources: "Authority", "Energy" and one indicator "Level". All of these parameters will interact with each other and create an economic balance.
                            </span>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', marginTop: 50}}>
                            <span className={css(styles.faqTitle)}>About the game</span>
                            <span className={css(styles.faqDescr)} style={{marginTop: 25}}>
                                This introductory paper was originally published in 2013 by Vitalik Buterin, the founder of Ethereum, before the project's launch in 2015. It's worth noting that Ethereum, like many community-driven, open-source software projects, has evolved since its initial inception.
                            </span>
                            <span className={css(styles.faqDescr)} style={{marginTop: 25}}>
                                While several years old, we maintain this paper because it continues to serve as a useful reference and an accurate representation of Ethereum and its vision. To learn about the latest developments of Ethereum, and how changes to the protocol are made, we recommend this guide.
                            </span>
                        </div>
                    </div>
                    <div className={css(styles.faqOnpage)}>
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
    faqInformation: {
        padding: '100px 0'
    },
    faqNav: {
        fontWeight: 800,
        fontSize: 20
    },
    faqDate: {
        fontWeight: 'normal',
        color: '#ADADAD',
        fontSize: 20,
        marginTop: 5
    },
    faqButton: {
        padding: 0
    },
    faqContent: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 70
    },
    faqTitle: {
        fontFamily: 'Barlow Condensed',
        fontWeight: 800,
        fontSize: 40
    },
    faqOnpage: {
        borderLeftWidth: 1,
        borderLeftStyle: 'solid',
        borderLeftColor: '#4A4A4A',
        height: 717
    },
    faqDescr: {
        fontFamily: 'Barlow Condensed',
        color: '#828282',
        fontWeight: 400,
        fontSize: 26,
        maxWidth: 928,
    }
})