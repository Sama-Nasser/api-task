import { MethodSelect } from "./MethodSelect.js";
import { DataField } from "./DataField.js";
import { IdField } from "./IdField.js";
import {attachActionFormEvents} from "./ActionFormEvents.js";  

export function ActionForm(outputElement) {
    const form = document.createElement("form");
    form.innerHTML = `<h3>Modify Data</h3>
    <label>Select Method:</label>`;

    const methodSelect = MethodSelect();
    const idField = IdField();
    const dataField = DataField();
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Execute";

    form.append(methodSelect, idField, dataField, button);

    attachActionFormEvents(form, outputElement);

    return form;
}
