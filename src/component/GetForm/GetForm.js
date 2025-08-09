 import { renderOutput } from "../Output/Output.js";
import { ViewTypeSelect } from './ViewTypeSelect.js';
import { IdSelect } from "./IdSelect.js";

export function GetForm(outputElement) {
    const form = document.createElement("form");
    form.innerHTML = `<h3>View Posts</h3>`;

    const { container: viewTypeContainer, select: viewTypeSelect } = ViewTypeSelect();
    const { container: idSelectContainer, select: idSelect } = IdSelect();

    form.append(viewTypeContainer, idSelectContainer);

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "View";
    form.appendChild(button);

    viewTypeSelect.addEventListener("change", () => {
        idSelect.disabled = viewTypeSelect.value !== "id";
    });

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        let url = "https://jsonplaceholder.typicode.com/posts";

        if (viewTypeSelect.value === "id") {
            const id = idSelect.value;
            if (id) url += `/${id}`;
        }

        const res = await fetch(url);
        const data = await res.json();
        renderOutput(outputElement, data);
    });

    return form;
}
