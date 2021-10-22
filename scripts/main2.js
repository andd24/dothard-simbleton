import { agentList } from "./agentList.js"

let parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = agentList()

document
    .querySelector("#agentSearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    parentHTMLElement.innerHTML = ""
                }
        })