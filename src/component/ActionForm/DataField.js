export function DataField() {
    const div = document.createElement("div");
    div.id = "dataField";
    div.innerHTML = `
        <label>Enter Data (JSON):</label>
        <input type="text" id="dataInput" placeholder='{"title":"New Post","body":"Hello","userId":1}'>
    `;
    return div;
}
