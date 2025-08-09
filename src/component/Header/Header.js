export function Header() {
    const header = document.createElement("header");
    header.innerHTML = `
        Time: <span id="clock"></span>
    `;

    const clockSpan = header.querySelector("#clock");
    function updateClock() {
        const now = new Date();
        clockSpan.textContent = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();

    return header;
}
