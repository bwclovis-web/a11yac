export const checkColorTheme = () => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    console.log('%c [YUP]', 'color:orange; background: purple', prefersDarkScheme)
}