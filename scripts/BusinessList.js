import { getBusinesses, getNyBusinesses, getManuBusinesses, findCompany } from "./database.js"
import { Business } from "./Business.js"

const contentTarget = document.querySelector(".businesses")

export const BusinessList = () => {
    const businessArray = getBusinesses()
    contentTarget.innerHTML = "<h1>Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
    return contentTarget.innerHTML
}

export const nyBusinessList = () => {
    const nyBusinessArray = getNyBusinesses()
    contentTarget.innerHTML = "<h1>NY Businesses</h1>"

    nyBusinessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
    return contentTarget.innerHTML
}

export const manuBusinessList = () => {
    const manuBusinessArray = getManuBusinesses()
    contentTarget.innerHTML = "<h1>Manufacturing Businesses</h1>"

    manuBusinessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
    return contentTarget.innerHTML
}

const companySearchResultArticle = document.querySelector(".foundCompanies")
document
    .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    const businessArray = getBusinesses()
                    for (const businessObject of businessArray) {
                        if (businessObject.companyName.toLowerCase().includes(keyPressEvent.target.value.toLowerCase())) {
                            companySearchResultArticle.innerHTML = Business(businessObject)
                        }
                    } 
                }
        });