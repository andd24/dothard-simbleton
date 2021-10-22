import { BusinessList, nyBusinessList, manuBusinessList } from "./BusinessList.js"

let parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = BusinessList()
parentHTMLElement.innerHTML += nyBusinessList()
parentHTMLElement.innerHTML += manuBusinessList()

document
    .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    parentHTMLElement.innerHTML = ""
                }
        })