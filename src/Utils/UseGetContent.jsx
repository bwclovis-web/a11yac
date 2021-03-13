import { useState } from 'react';

const UseGetContext = () => {
    const [clicked, setIsClicked] = useState(false);

    const toggleOff = () => {
        setTimeout(() => {
            setIsClicked(false);
        }, 1000)
    }

    const updateContent = () => {
        if(!clicked) {
            setIsClicked(true);
            toggleOff()
        }
    }

    return {clicked, updateContent, setIsClicked}
}

export default UseGetContext;