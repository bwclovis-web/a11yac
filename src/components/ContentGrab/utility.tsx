interface ClipboardEvent {
    clipboardData: any,
    preventDefault(): void
}

export const copyToClipboard = (content: string | null): void => {
    const listener = (evt: ClipboardEvent) => {
        evt.clipboardData.setData("text/html", content);
        evt.clipboardData.setData("text/plain", content);
        evt.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
}
