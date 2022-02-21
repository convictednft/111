import React from 'react'
import {css, StyleSheet} from "aphrodite";

export default function Button({text, onClick, style, icon, textStyle}) {
    console.log(style)
    return (
        <button
            style={style}
            onClick={onClick}
            className={css(styles.button)}
        >
            {icon || null}
            <span style={textStyle}>{text}</span>
        </button>
    )
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'BenchNine',
        fontWeight: 800,
        color: 'white',
        border: 2,
        borderStyle: 'solid',
        borderRadius: 3,
        width: '100%',
        background: 'none',
        borderColor: 'rgba(167, 167, 167, 0.7)',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: '0.2s',
        '@media(max-width: 1200px)': {
        },

        ':hover': {
            backgroundColor: 'rgba(47, 47, 47, 0.5)',
            borderColor: 'transparent',
        }
    }
})