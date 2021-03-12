export const copyToClipboard = (content) => {

    const listener = (evt) => {
        evt.clipboardData.setData("text/html", snaitizeText(content));
        evt.clipboardData.setData("text/plain", snaitizeText(content));
        evt.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
}

export const snaitizeText = (text) => {
    var regex = /<br\s*[\/]?>/gi; /<b\s*[\/]?>/gi;
    return text.replace(regex, '   ');
}