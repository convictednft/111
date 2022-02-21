import React from 'react'
import {css, StyleSheet} from "aphrodite";

export default function Container(props) {
    return(
        <div className={css(styles.Container)}>
            {props.children}
        </div>
    )
}

const styles = StyleSheet.create({
    Container: {
        maxWidth: 1285,
        margin: 'auto',
    }
})

