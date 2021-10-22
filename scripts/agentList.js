import { Agent } from "./agent.js";
import { getAgents } from "./database.js";

const contentTarget = document.querySelector(".agents")

export const agentList = () => {
    const agentsArray = getAgents()
    contentTarget.innerHTML = "<h1>Purchasing Agents</h1>"

    agentsArray.forEach(
        (agentObject) => {
            contentTarget.innerHTML += Agent(agentObject)
        }
    )
    return contentTarget.innerHTML
}

const companySearchResultArticle = document.querySelector(".foundAgents")
document
    .querySelector("#agentSearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    const agentArray = getAgents()
                    for (const agentObject of agentArray) {
                        if (agentObject.name.toLowerCase().includes(keyPressEvent.target.value.toLowerCase())) {
                            companySearchResultArticle.innerHTML = Agent(agentObject)
                        }
                    } 
                }
        });