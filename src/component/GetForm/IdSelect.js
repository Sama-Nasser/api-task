export function IdSelect() {
    const label = document.createElement("label");
    label.textContent = "Select ID:";

    const select = document.createElement("select");
    select.id = "idSelect";
    select.disabled = true;
    select.innerHTML = `
        <option value="">--Select--</option>
        ${Array.from({ length: 100 }, (_, i) => `<option value="${i + 1}">ID ${i + 1}</option>`).join("")}
    `;

    const container = document.createElement("div");
    container.append(label, select);
    return { container, select };
}

