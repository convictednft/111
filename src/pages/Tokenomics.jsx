import React from 'react'
import Header from '../components/Header'
import { StyleSheet, css } from 'aphrodite';
import Container from "../components/common/Container";
import headerBackground from "../static/img/headerBackground.jpg";
import Button from "../components/common/Button";
import github from '../static/icons/github.svg'
import {Link} from "react-router-dom";

export default function Tokenomics() {
    return(
        <div>
            <div className={css(styles.header)}>
                <Header />
            </div>
         <Container>
            <div className={css(styles.tokenomics)}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span className={css(styles.tokenomicsNav)}>HOME / TOKENOMICS</span>
                        <span className={css(styles.tokenomicsDate)}>Page last updated: January 6, 2022</span>
                    </div>
                    <div>
                    <Button text='EDIT PAGE' icon={<img src={github} style={{width: 32, height: 32}} alt=""/>}
                            textStyle={{color: '#B2B2B2', fontSize: 20, margin: '0 20px 0 15px'}} />
                    </div>
                </div>
                <div className={css(styles.tokenomicsContent)}>
                    <div style={{maxWidth: 953, marginBottom: 150}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span className={css(styles.tokenomicsTitle)}>
                                Tokenomics
                            </span>
                            <span  className={css(styles.tokenomicsDescr)} style={{marginTop: 35}}>
                                Tokenomics is the science of the token economy. It covers all aspects related to creating a coin, managing it, and sometimes removing it from the network.
                            </span>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', marginTop: 100}}>
                            <span className={css(styles.tokenomicsTitle)}>
                                $CONV Token Allocation
                            </span>
                            <span  className={css(styles.tokenomicsDescr)} style={{marginTop: 35}}>
                               As you can understand from the token allocation, the team will end up with only 20% of the income from the game. The rest of the income is distributed to the $CONV token holders.
                            </span>
                        </div>
                        <div className={css(styles.tokenomcsTable)}>
                            <div className={css(styles.tokenomicsTableContent)}>
                                <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: 40}}>
                                    <div className={css(styles.tokenomicsTableContentType)}>
                                    <span className={css(styles.tokenomicsTableContentTitle)}>
                                        Allocation type
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentTotal)}>
                                    <span className={css(styles.tokenomicsTableContentTitle)}>
                                        Total allocation
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentPercentTotal)}>
                                    <span className={css(styles.tokenomicsTableContentTitle)}>
                                        % of total
                                    </span>
                                    </div>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: 40}}>
                                    <div className={css(styles.tokenomicsTableContentTypeList)}>
                                    <span className={css(styles.tokenomicsTableContentTypeText)}>
                                        Seed round
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        9 000 000,00
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentPercentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        3,00%
                                    </span>
                                    </div>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: 40}}>
                                    <div className={css(styles.tokenomicsTableContentTypeList)}>
                                    <span className={css(styles.tokenomicsTableContentTypeText)}>
                                        Seed round
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        9 000 000,00
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentPercentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        3,00%
                                    </span>
                                    </div>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: 40}}>
                                    <div className={css(styles.tokenomicsTableContentTypeList)}>
                                    <span className={css(styles.tokenomicsTableContentTypeText)}>
                                        Seed round
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        9 000 000,00
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentPercentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        3,00%
                                    </span>
                                    </div>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: 40}}>
                                    <div className={css(styles.tokenomicsTableContentTypeList)}>
                                    <span className={css(styles.tokenomicsTableContentTypeText)}>
                                        Seed round
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        9 000 000,00
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentPercentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        3,00%
                                    </span>
                                    </div>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: 40}}>
                                    <div className={css(styles.tokenomicsTableContentTypeList)}>
                                    <span className={css(styles.tokenomicsTableContentTypeText)}>
                                        Seed round
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        9 000 000,00
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentPercentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        3,00%
                                    </span>
                                    </div>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: 40}}>
                                    <div className={css(styles.tokenomicsTableContentTypeList)}>
                                    <span className={css(styles.tokenomicsTableContentTypeText)}>
                                        Seed round
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        9 000 000,00
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentPercentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        3,00%
                                    </span>
                                    </div>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: 40}}>
                                    <div className={css(styles.tokenomicsTableContentTypeList)}>
                                    <span className={css(styles.tokenomicsTableContentTypeText)}>
                                        Seed round
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        9 000 000,00
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentPercentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        3,00%
                                    </span>
                                    </div>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: 40}}>
                                    <div className={css(styles.tokenomicsTableContentTypeList)}>
                                    <span className={css(styles.tokenomicsTableContentTypeText)}>
                                        Seed round
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        9 000 000,00
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentPercentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        3,00%
                                    </span>
                                    </div>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: 40}}>
                                    <div className={css(styles.tokenomicsTableContentTypeList)}>
                                    <span className={css(styles.tokenomicsTableContentTypeText)}>
                                        Seed round
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        9 000 000,00
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentPercentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        3,00%
                                    </span>
                                    </div>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: 40}}>
                                    <div className={css(styles.tokenomicsTableContentTypeList)}>
                                    <span className={css(styles.tokenomicsTableContentTypeText)}>
                                        Seed round
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        9 000 000,00
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentPercentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        3,00%
                                    </span>
                                    </div>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: 40}}>
                                    <div className={css(styles.tokenomicsTableContentTypeList)}>
                                    <span className={css(styles.tokenomicsTableContentTypeText)}>
                                        Seed round
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        9 000 000,00
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentPercentTotalList)}>
                                    <span className={css(styles.tokenomicsTableContentTotalText)}>
                                        3,00%
                                    </span>
                                    </div>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: 40}}>
                                    <div className={css(styles.tokenomicsTableContentTypeListFinal)}>
                                    <span className={css(styles.tokenomicsTableContentTypeTextFinal)}>
                                        Seed round
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentTotalListFinal)}>
                                    <span className={css(styles.tokenomicsTableContentTotalTextFinal)}>
                                        9 000 000,00
                                    </span>
                                    </div>
                                    <div className={css(styles.tokenomicsTableContentPercentTotalListFinal)}>
                                    <span className={css(styles.tokenomicsTableContentTotalTextFinal)}>
                                        3,00%
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css(styles.tokenomicsOnpage)}>
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
    tokenomics: {
        padding: '100px 0'
    },
    tokenomicsNav: {
        fontWeight: 800,
        fontSize: 20
    },
    tokenomicsDate: {
        fontWeight: 'normal',
        color: '#ADADAD',
        fontSize: 20,
        marginTop: 5
    },
    tokenomicsButton: {
        padding: 0
    },
    tokenomicsContent: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 70
    },
    tokenomicsTitle: {
        fontFamily: 'Barlow Condensed',
        fontWeight: 800,
        fontSize: 40
    },
    tokenomicsOnpage: {
        borderLeftWidth: 1,
        borderLeftStyle: 'solid',
        borderLeftColor: '#4A4A4A',
        height: 717
    },
    tokenomicsDescr: {
        fontFamily: 'Barlow Condensed',
        color: '#828282',
        fontWeight: 400,
        fontSize: 26,
        maxWidth: 928,
    },
    tokenomcsTable: {
        maxWidth: 954,
        height: 'auto',
        marginTop: 50
    },
    tokenomicsTableContent: {

    },
    tokenomicsTableContentType: {
        width: 465,
        border: 2,
        borderStyle: 'solid',
        borderColor: '#A8A8A8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tokenomicsTableContentTotal: {
        width: 300,
        border: 2,
        borderStyle: 'solid',
        borderColor: '#A8A8A8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tokenomicsTableContentPercentTotal: {
        width: 185,
        border: 2,
        borderStyle: 'solid',
        borderColor: '#A8A8A8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tokenomicsTableContentTitle: {
        fontFamily: 'Do Hyeon',
        fontWeight: 800,
        fontSize: 20
    },
    tokenomicsTableContentTypeList: {
        width: 465,
        border: 2,
        borderStyle: 'solid',
        borderColor: '#565454',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tokenomicsTableContentTotalList: {
        width: 300,
        border: 2,
        borderStyle: 'solid',
        borderColor: '#565454',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tokenomicsTableContentPercentTotalList: {
        width: 185,
        border: 2,
        borderStyle: 'solid',
        borderColor: '#565454',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tokenomicsTableContentTypeText: {
        fontFamily: 'Do Hyeon',
        fontWeight: 'normal',
        fontSize: 20,
        color: '#C2C2C2'
    },
    tokenomicsTableContentTotalText: {
        fontFamily: 'Do Hyeon',
        fontWeight: 'normal',
        fontSize: 20,
        color: '#FDFCFB'
    },
    tokenomicsTableContentTypeTextFinal: {
        fontFamily: 'Do Hyeon',
        fontWeight: 'normal',
        fontSize: 20,
        color: '#D1E848'
    },
    tokenomicsTableContentTypeListFinal: {
        width: 465,
        border: 2,
        borderStyle: 'solid',
        borderColor: '#C3D263',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(178,205,115, 0.3)'
    },
    tokenomicsTableContentTotalListFinal: {
        width: 300,
        border: 2,
        borderStyle: 'solid',
        borderColor: '#C3D263',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tokenomicsTableContentTotalTextFinal: {
        fontFamily: 'Do Hyeon',
        fontWeight: 'normal',
        fontSize: 20,
        color: '#D1E848'
    },
    tokenomicsTableContentPercentTotalListFinal: {
        width: 185,
        border: 2,
        borderStyle: 'solid',
        borderColor: '#C3D263',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

})