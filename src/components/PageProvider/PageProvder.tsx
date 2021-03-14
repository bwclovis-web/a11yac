import React from 'react'
import UseGetContent from '../../Utils/UseGetContent'

const PageContext = React.createContext<boolean[] | (()=> void)[] | []>([]);

export const PageProvider: React.FC<React.ReactNode> = ({children}) => {
    const [clicked, updateContent] = UseGetContent();

    return (
        <PageContext.Provider value={[clicked, updateContent]}>
            {children}
        </PageContext.Provider>
    )
}

export default PageContext;