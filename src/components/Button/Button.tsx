import React, {ButtonHTMLAttributes, DetailedHTMLProps, MouseEventHandler} from 'react';

interface ButtonProps {
    disabled?: boolean,
    children?: React.ReactNode,
    styleClass?: string
    id?: any,
    type?: any,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button({disabled, children, styleClass, id, type, onClick}: ButtonProps) {
    return (
        <button className={styleClass} id={id} type={type ? type : "button"} onClick={onClick}
                disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;