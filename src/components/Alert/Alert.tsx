import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'

import PageContext from '../PageProvider/PageProvder';

interface AlertInterface {
    alertMessage: string
}

interface AlertStylesI {
    active?: boolean,
    theme?: string
}

const AlertStyles = styled.div<AlertStylesI>`
    position: absolute;
    top:  0;
    padding: 20px;
    border-bottom: 4px solid ${props => props.theme === 'dark' ? 'var(--grey-lt)' : 'var(--blue-lt)'};
    border-left: 1px solid var(--grey);
    border-right: 1px solid var(--grey);
    box-shadow: 0 0 10px 2px rgba(0,0,0, 0.3);
    width: 90%;
    z-index: 2;
    text-align: center;
    transform: ${props => props.active ? `translateY(0)` : `translateY(-10vw)` };
    opacity: ${props => props.active ? 1 : 0};
    transition: all .3s ease-in-out;
`

const AlertMessage: React.FC<AlertInterface> = ({alertMessage}) => {
    const {clicked, theme} = useContext(PageContext)
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        clicked && handleDisplayAlert();
    }, [clicked]);

    const handleDisplayAlert = () => {
        setShowAlert(true);
        setMessage(alertMessage);
        setTimeout(() => {
            setShowAlert(false);
            setMessage('')
        }, 2000)
    }

    return (
        <AlertStyles active={showAlert} theme={theme}>
            <p className="h3" role="alert">
                {message}
            </p>
        </AlertStyles>
    )
}

export default AlertMessage;