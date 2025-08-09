export function ViewTypeSelect() {
    const label = document.createElement("label");
    label.textContent = "Select View Type:";

    const select = document.createElement("select");
    select.id = "viewType";
    select.innerHTML = `
        <option value="all">Show All</option>
        <option value="id">Show by ID</option>
    `;

    const container = document.createElement("div");
    container.append(label, select);
    return { container, select };
}
