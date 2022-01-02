import React from "react"

export default function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }
    
    return (
        <div style={styles}></div>
    )
}
//the deault props are:
Card.defaultProps = {
    cardColor: "blue",
    height: 100,
    width: 100
}
