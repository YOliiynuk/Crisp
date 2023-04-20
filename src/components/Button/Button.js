import React from "react";
import './Button.css'

const Button = (props) => {

    switch (props.type){
        default: {
            return <button className={'default'}>
                {props.icon || null}
                {props.children}
            </button>
        }
        case 'secondary':{
            return <button className={'secondary'}>
                {props.children}
            </button>
        }
        case 'primary': {
            return <button className={'primary'}>
                {props.children}
            </button>
        }
    }
    return(
        <div>

        </div>
    );
};
export default Button;

