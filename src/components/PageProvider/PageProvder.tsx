import React, {useEffect} from 'react'
import UseGetContent from '../../Utils/UseGetContent'
import UseGetColorScheme from '../../Utils/UseGetColorScheme';

type ContextProps = {
    clicked?: boolean,
    updateContent(): void,
    theme: string,
    updateTheme(mode: string): void
}

const PageContext = React.createContext<ContextProps>({
    clicked: false,
    updateContent(){},
    theme: '',
    updateTheme(mode: string){null}
});

export const PageProvider: React.FC<React.ReactNode> = ({children}) => {
    const [clicked, updateContent] = UseGetContent(false);
    const [theme, setTheme] = UseGetColorScheme('');

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
        }
    }, [])

    return (
        <PageContext.Provider value={{
            clicked: clicked,
            updateContent: updateContent,
            theme: theme,
            updateTheme: setTheme
        }}>
            {children}
        </PageContext.Provider>
    )
}

export default PageContext;