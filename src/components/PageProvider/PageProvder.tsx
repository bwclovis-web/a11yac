import React from 'react'
import UseGetContent from '../../Utils/UseGetContent'

type ContextProps = {
    clicked?: boolean,
    updateContent(): void
}

const PageContext = React.createContext<ContextProps>({
    clicked: false,
    updateContent(){}
});

export const PageProvider: React.FC<React.ReactNode> = ({children}) => {
    const [clicked, updateContent] = UseGetContent(false);

    return (
        <PageContext.Provider value={{
            clicked: clicked,
            updateContent: updateContent
        }}>
            {children}
        </PageContext.Provider>
    )
}

export default PageContext;