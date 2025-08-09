export function IdField() {
    const div = document.createElement("div");
    div.id = "idField";
    div.style.display = "none";
    div.innerHTML = `
        <label>Enter ID:</label>
        <input type="number" id="idInput" placeholder="Enter ID to modify/delete">
    `;
    return div;
}
