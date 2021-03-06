import { useState } from 'react';

const UseGetColorScheme = (defaultValue: string) => {
    const [theme, setTheme] = useState<string>('');

    const updateTheme = (mode: string) => {
        setTheme(mode)
    }
    return [theme, updateTheme] as const;
}

export default UseGetColorScheme;