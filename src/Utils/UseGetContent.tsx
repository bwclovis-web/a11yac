import { useState } from 'react';

const UseGetContext = (defaultValue: boolean) => {
    const [clicked, setIsClicked] = useState(defaultValue);

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

    return [clicked, updateContent] as const;
}

export default UseGetContext;