export function MethodSelect(onChange) {
    const select = document.createElement("select");
    select.id = "methodSelect";  

    select.innerHTML = `
        <option value="POST">Add (POST)</option>
        <option value="PUT">Update (PUT)</option>
        <option value="DELETE">Delete (DELETE)</option>
    `;

    if (onChange) {
        select.addEventListener("change", onChange);
    }

    return select;  
}
