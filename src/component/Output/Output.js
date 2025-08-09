export function Output() {
    const container = document.createElement("div");
    container.id = "output";
    return container;
}
export function renderOutput(container, data, method = "GET") {
    container.innerHTML = ""; 
    const items = Array.isArray(data) ? data : [data];
    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add(method.toLowerCase());
        card.innerHTML = `
            <h4>${item.title || "No Title"}</h4>
            <p>${item.body || "No Content"}</p>
        `;

        container.appendChild(card);
    });
}
