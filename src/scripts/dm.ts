function dm() {
    const htmlElement = document.querySelector('html');
    localStorage.theme == "dark" ? (htmlElement.classList.remove('dark'), console.log('Welcome to the light ✨'), localStorage.theme = "light") : (htmlElement.classList.add('dark'), console.log('Welcome to the dark 🌘'), localStorage.theme = "dark");
}

(window as any).dm = dm;

export {};