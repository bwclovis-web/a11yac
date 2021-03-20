import React, {useEffect} from 'react'
import UseGetContent from '../../Utils/UseGetContent'
import UseGetColorScheme from '../../Utils/UseGetColorScheme';
import UsePerfersReducedMotion from '../../Utils/UsePrefersReducedMotion';

type ContextProps = {
    clicked?: boolean,
    updateContent(): void,
    theme: string,
    updateTheme(mode: string): void
    motionReduced: boolean
}

const PageContext = React.createContext<ContextProps>({
    clicked: false,
    updateContent(){},
    theme: '',
    updateTheme(mode: string){},
    motionReduced: false
});

export const PageProvider: React.FC<React.ReactNode> = ({children}) => {
    const [clicked, updateContent] = UseGetContent(false);
    const [theme, setTheme] = UseGetColorScheme('');
    const [motionReduced, updatePerferance] = UsePerfersReducedMotion(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches !== motionReduced) {
            updatePerferance(mediaQuery.matches)
        }
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
        }
        mediaQuery.addEventListener('change', () => {
            if (mediaQuery.matches !== motionReduced) {
                updatePerferance(mediaQuery.matches)
            }
          });
    }, [])

    return (
        <PageContext.Provider value={{
            clicked: clicked,
            updateContent: updateContent,
            theme: theme,
            updateTheme: setTheme,
            motionReduced: motionReduced
        }}>
            {children}
        </PageContext.Provider>
    )
}

export default PageContext;