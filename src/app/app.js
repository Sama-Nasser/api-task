import { Header } from "../component/Header/Header.js";
import { GetForm } from "../component/GetForm/GetForm.js";
import { ActionForm } from "../component/ActionForm/ActionForm.js";
import { Output } from "../component/Output/Output.js";

const app = document.getElementById("app");

const header = Header();
const output = Output();

const formsWrapper = document.createElement("div");
formsWrapper.classList.add("forms-container");

const getForm = GetForm(output);
const actionForm = ActionForm(output);

formsWrapper.appendChild(getForm);
formsWrapper.appendChild(actionForm);

app.appendChild(header);
app.appendChild(formsWrapper);
app.appendChild(output);
