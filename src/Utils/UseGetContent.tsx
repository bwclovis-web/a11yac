import { useState } from 'react';

const UseGetContext = () => {
    const [clicked, setIsClicked] = useState(false);

    const toggleOff = ():void => {
        setTimeout(() => {
            setIsClicked(false);
        }, 1000)
    }

    const updateContent = ():void => {
        if(!clicked) {
            setIsClicked(true);
            toggleOff()
        }
    }

    return {clicked, updateContent, setIsClicked}
}

export default UseGetContext;