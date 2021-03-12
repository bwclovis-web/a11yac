import { useState } from 'react';

const UseGetContext = () => {
    const [clicked, setIsClicked] = useState(false);

    const toggleOff = () => {
        setTimeout(() => {
            setIsClicked(false);
        }, 3000)
    }

    const updateContent = () => {
        if(!clicked) {
            setIsClicked(true);
            toggleOff()
        }
    }

    return {clicked, updateContent}
}

export default UseGetContext;