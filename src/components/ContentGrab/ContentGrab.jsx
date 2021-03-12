import React, {useRef} from 'react';
import styled from 'styled-components';
import UseGetContent from '../../Utils/UseGetContent' 
import {copyToClipboard} from './utility';

const InputStyles = styled.div`
    border: 1px solid var(--grey);
    margin-bottom: 2rem;
    padding: 1rem 1.4rem;
    position: relative;
    max-height: 230px;
    overflow-Y: auto;

    &._active {
        &::before {
            content: '';
            display: block;
            background: rebeccapurple;
            width: 50px;
            height: 50px;
            position: absolute;
            bottom: 0;
        }
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
                <button type="button" className="btn" onClick={handleCopyClick}>Copy Acceptance Criteria</button>
            </div>
        </div>
    )
}

export default ContentGrab;