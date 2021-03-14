import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'

import PageContext from '../PageProvider/PageProvder';

interface AlertInterface {
    alertMessage: string
}

interface AlertStylesI {
    active?: boolean
}

const AlertStyles = styled.div<AlertStylesI>`
    position: absolute;
    top:  0;
    padding: 20px;
    border-bottom: 4px solid var(--blue-lt);
    border-left: 1px solid var(--grey);
    border-right: 1px solid var(--grey);
    box-shadow: 0 0 10px 2px rgba(0,0,0, 0.3);
    width: 100%;
    z-index: 2;
    text-align: center;
    transform: ${props => props.active ? `translateY(0)` : `translateY(-10vw)` };
    opacity: ${props => props.active ? 1 : 0};
    transition: all .3s ease-in-out;
`

const AlertMessage: React.FC<AlertInterface> = ({alertMessage}) => {
    const [clicked] = useContext(PageContext)
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
        <AlertStyles active={showAlert}>
            <p className="h2" role="alert">
                {message}
            </p>
        </AlertStyles>
    )
}

export default AlertMessage;