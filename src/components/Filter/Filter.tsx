import React, {useState, useEffect} from 'react';

const FilterBanner = ({data, setFiltered}) => {
    const [tags, setTags] = useState([]);

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
        const thisTag = evt.target.innerHTML
        setFiltered(thisTag)
    }

    return(
        <div>
            {tags && tags.map(tag => {
                return <li>
                            <button onClick={(evt) =>handleTagSelect(evt)}>{tag}</button>
                        </li>
            })}
        </div>
    )
}

export default FilterBanner;