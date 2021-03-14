import React, {useRef, useContext} from 'react';
import styled from 'styled-components';
import {copyToClipboard} from './utility';

import PageContext from '../PageProvider/PageProvder'

interface ConetentI {
    content: string
}

interface InputStylesI {
    clicked: boolean
    tabIndex: string
    ref:string
}

const InputStyles = styled.div<InputStylesI>`
    border: 1px solid var(--grey);
    padding: 1rem 1.4rem;
    position: relative;
    max-height: 230px;
    overflow-Y: auto;
    animation-name: ${props => props.clicked ? 'textSelect' : null};
    animation-duration: 1s;

    @keyframes textSelect {
        0% {opacity: 1;}
        50% {opacity: 0.3;}
        100% {opacity: 1}
    }
`;

const ContentGrab = (props: ConetentI ) => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const {clicked, updateContent} = useContext(PageContext);

    const handleCopyClick = () => {
        contentRef.current && copyToClipboard(contentRef.current.innerHTML);
        updateContent();
    }

    return (
        <div>
            <div className="container">
                <InputStyles ref={contentRef} clicked={clicked} dangerouslySetInnerHTML={{__html: props.content}} tabIndex="0"/>
                <button type="button" aria-busy={clicked} className="btn" onClick={() => handleCopyClick()}>Copy Acceptance Criteria</button>
            </div>
        </div>
    )
}

export default ContentGrab;