import React from "react";
const Header = (props) => {
    return(
        <header>
            <h1>hello,{props.title}</h1>
            </header>
    )
}
Header.defaultProps ={
    title: 'Task Tracker',
}
export default Header;