import React, {useState} from 'react'
import logo from '../static/icons/logo.svg'
import {css, StyleSheet} from "aphrodite";
import menuArrow from '../static/icons/menuArrow.svg'
import Button from '../components/common/Button'
import {Link} from "react-router-dom";
import Hamburger from '../static/icons/hamburger.svg'

export default function Header() {
    const [burger, setBurger] = useState(false)
    const menu = [
        {id: 1, title: 'NEWS', img: true},
        {id: 2, title: 'TOKENS'},
        {id: 3, title: 'PAPERS'},
        {id: 4, title: 'STAKING / LIQUIDITY'},
        {id: 5, title: 'COMMUNITY'},
        {id: 6, title: 'MORE'},
    ]

    return(
        <div className={css(styles.header)}>
            {burger ? (
                <div className={css(styles.burgerContent)}>
                   <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15, padding: '0 15px'}}>
                       <div style={{maxWidth: 220, height: 'auto'}}>
                           <img src={logo} alt="" style={{width: '100%'}}/>
                       </div>
                       <div className={css(styles.burger)} onClick={() => setBurger(!burger)}>
                           <img src={Hamburger} alt=""/>
                       </div>
                   </div>
                   <div>
                       <ul style={{listStyleType: 'none', padding: 0}}>
                           {menu.map((item) => (
                               <div className={css(styles.burgerItem)}>
                                   <li key={item.id} className={css(styles.burgerItemText)}>{item.title}</li>
                                   <div style={{width: 10, height: 6, display: 'flex', alignItems: 'center'}}>
                                       <img src={menuArrow} alt="" style={{marginLeft: 5}}/>
                                   </div>
                               </div>
                           ))}
                       </ul>
                       <div className={css(styles.burgerButtons)}>
                           <Button
                               text='marketplace'
                               style={{height: 70, fontSize: 35}}
                           />
                           <Button
                               text='download'
                               style={{height: 70, marginLeft: 20, fontSize: 35}}
                           />
                       </div>
                   </div>
                </div>
            ) : null}
            <div className={css(styles.headerMobile)}>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <div style={{maxWidth: 220, height: 'auto'}}>
                        <img src={logo} alt="" style={{width: '100%'}}/>
                    </div>
                </Link>
                <div className={css(styles.burger)} onClick={() => setBurger(!burger)}>
                    <img src={Hamburger} alt=""/>
                </div>
            </div>
            <div>
                <ul className={css(styles.menu)}>

                    {menu.map((item) => (
                        <div className={css(styles.menuItem)}>
                            <li key={item.id} className={css(styles.menuItemText)}>{item.title}</li>
                            <div style={{width: 10, height: 6, display: 'flex', alignItems: 'center'}}>
                                <img src={menuArrow} alt="" style={{marginLeft: 5}}/>
                            </div>
                        </div>
                        ))}
                </ul>
            </div>
            <div className={css(styles.menuLanguage)}>
                <div style={{textAlign: 'right'}}>
                    <span className={css(styles.menuOption)}>LOGIN/REGISTER</span>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <span className={css(styles.menuOption)}>SELECT LANGUAGE</span>
                        <img src={menuArrow} style={{marginLeft: 5}} alt=""/>
                    </div>
                </div>
                <div className={css(styles.menuButtons)}>
                        <Button
                            text='marketplace'
                            style={{maxWidth: 200, padding: '0 25px', height: 40, fontSize: 22}}
                        />
                        <Button
                            text='download'
                            style={{marginLeft: 10, maxWidth: 200, padding: '0 30px', height: 40, fontSize: 22}}
                        />
                </div>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        '@media(max-width: 992px)': {
            display: 'none'
        },
},
    menuItemText: {
        fontFamily: 'BenchNine',
        fontWeight: 800,
        fontSize: 22,
        color: 'white',
        '@media (max-width: 1200px)': {
            fontSize: 16
        },
    },
    menuItem: {
        display: 'flex',
        padding: '7px 10px',
        flexDirection: 'row',
        cursor: 'pointer',
        alignItems: 'center',
        marginLeft: 10,
        transition: '0.2s',
        border: 2,
        borderStyle: 'solid',
        borderColor: 'transparent',
        '@media (max-width: 1200px)' : {
            marginLeft: 0
        },
        ':hover': {
            backgroundColor: 'rgba(47, 47, 47, 0.5)',
            borderColor: 'rgba(255, 255, 255, 0.25)',
            borderStyle: 'solid',
            borderRadius: '5px 0'
        }
    },
    headerButtons: {
        marginLeft: 15,
        '@media(max-width: 992px)': {
            display: 'none'
        },
    },
    menuOption: {
        fontFamily: 'BenchNine',
        color: '#A7A7A7',
        fontWeight: 800,
        fontSize: 16,
        letterSpacing: '0.05em',
        '@media (max-width: 1200px)' : {
            fontSize: 12
        },
        '@media(max-width: 992px)': {
            display: 'none'
        },
    },
    headerButtonsItem: {
        marginRight: 12,
        '@media(max-width: 992px)': {
            display: 'none'
        },
    },
    menuButtons: {
        maxWidth: 410, height: 'auto', display: 'flex', flexDirection: 'row', marginLeft: 10,
        '@media (max-width: 992px)': {
            display: 'none'
        }
    },
    menuLanguage: {
        display: 'flex', flexDirection: 'row', alignItems: 'center',
        '@media (max-width: 992px)': {
            display: 'none'
        }
    },
    burger: {
        display: 'none',
        '@media(max-width: 992px)': {
            display: 'block',
            cursor: 'pointer'
        }
    },
    headerMobile: {
        '@media(max-width: 992px)': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
        }
    },
    burgerContent: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(20px)',
        position: 'fixed',
        zIndex: 50,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    burgerItem: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: 992,
        height: 70,
        borderTop: 0.5,
        borderTopColor: '#F2F2F2',
        justifyContent: 'space-between',
        borderTopStyle: 'solid',
        alignItems: 'center',
        padding: '0 20px',

    },
    burgerItemText: {
        fontFamily: 'BenchNine',
        fontWeight: 800,
        color: '#C1C1C1',
        fontSize: 36,
    },
    burgerButtons: {
        display: 'flex',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '0 20px'
    }

});