import { renderOutput } from "../Output/Output.js";

export function attachActionFormEvents(form, outputElement) {
    const methodSelect = form.querySelector("#methodSelect");
    const idField = form.querySelector("#idField");
    const idInput = form.querySelector("#idInput");
    const dataField = form.querySelector("#dataField");
    const dataInput = form.querySelector("#dataInput");

    methodSelect.addEventListener("change", () => {
        const method = methodSelect.value;
        idField.style.display = (method === "PUT" || method === "DELETE") ? "block" : "none";
        dataField.style.display = (method !== "DELETE") ? "block" : "none";
    });

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const method = methodSelect.value;

        let url = "https://jsonplaceholder.typicode.com/posts";
        let options = { method };

        if (method === "PUT" || method === "DELETE") {
            if (!idInput.value) {
                alert("Please enter an ID.");
                return;
            }
            url += `/${idInput.value}`;
        }

        if (method !== "DELETE") {
            try {
                options.body = dataInput.value;
                options.headers = { "Content-Type": "application/json" };
            } catch {
                alert("Invalid JSON format!");
                return;
            }
        }

        const res = await fetch(url, options);
        const data = await res.json();
        renderOutput(outputElement, data, method);
    });
}
