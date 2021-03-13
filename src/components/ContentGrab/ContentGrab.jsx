import React, {useRef} from 'react';
import styled from 'styled-components';
import UseGetContent from '../../Utils/UseGetContent' 
import {copyToClipboard} from './utility';

const InputStyles = styled.div`
    border: 1px solid var(--grey);
    padding: 1rem 1.4rem;
    position: relative;
    max-height: 230px;
    overflow-Y: auto;

    &._active {
        animation-name: textSelect;
        animation-duration: 1s;
    }

    .alert {
        position: absolute;
    }

    @keyframes textSelect {
        0% {opacity: 1;}
        50% {opacity: 0.3;}
        100% {opacity: 1}
    }

`;

const ContentGrab = ({content}) => {
    const contentRef = useRef(null);
    const {clicked, updateContent} = UseGetContent();
    const handleCopyClick = () => {
        copyToClipboard(contentRef.current.innerHTML);
        updateContent();
    }

    return (
        <div>
            <div className="container">
                <InputStyles ref={contentRef} className={clicked && '_active'} dangerouslySetInnerHTML={{__html: content}} />
                <button type="button" aria-busy={clicked} className="btn" onClick={handleCopyClick}>Copy Acceptance Criteria</button>
            </div>
        </div>
    )
}

export default ContentGrab;