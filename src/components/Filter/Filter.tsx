import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';

import PageContext from '../PageProvider/PageProvder';

interface FilterI {
    data: {
        info: {
            frontmatter: {
                tag: string,
                title: string
            }
            id: string
            slug: string
        }
    },
    filtered(): boolean
}

const TagListStyles = styled.section<{theme: string}>`
    position: absolute;
    top: 0;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid var(--grey);
    width: 90%;

    ul {
        display: flex;
        margin-top: 1.6rem;
        padding-bottom: 2rem;
    }

    button {
        background-color: ${props => props.theme === 'dark' ? 'var(--grey-md)' : 'var(--grey-dk)'};
        color: var(--white);
        padding: .6rem 1rem .8rem;
        margin-left: .8rem;
        border-radius: .5rem;
        text-transform: capitalize;
        letter-spacing: 0.2rem;

        &:hover,
        &:focus {
            background-color: var(--white);
            color: var(--grey-dk);
            box-shadow: inset 0 0 0 3px var(--grey-dk);
        }
    }
` 

const FilterBanner: React.FC<FilterI> = ({data, filtered}) => {
    const [tags, setTags] = useState([]);
    const {theme} = useContext(PageContext)

    useEffect(() => {
        generateTags(data)
    }, [])
    
    const generateTags = (data) => {
        const getAllTags = data.map(item => {
            return item.info.frontmatter.tag
        });

        const uniqueTags =  getAllTags.filter((tag, i) => {
            return tag.indexOf(tag) !== i;
        })
        setTags(uniqueTags)
    }

    const handleTagSelect = (evt) => {
        let thisTag = evt.target.innerHTML
        if (thisTag === 'reset') {
            filtered('init')
            return
        }
        filtered(thisTag)
    }

    return(
        <TagListStyles theme={theme}>
            <h2>Filter Components</h2>
            <ul>
                {tags && tags.map((tag, i) => {
                    return <li key={i}>
                        <button onClick={(evt) => handleTagSelect(evt)}>{tag}</button>
                    </li>
                })}
                <li>
                    <button onClick={(evt) => handleTagSelect(evt)}>reset</button>
                </li>
            </ul>
        </TagListStyles>
    )
}

export default FilterBanner;