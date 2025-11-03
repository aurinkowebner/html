// const ps = document.querySelectorAll("p");

/**
 * creating html elements
 * updating (css -> style | class | id | rel | )
 * 
 * events
 */

const containerDiv = document.createElement("custom")

const profileDiv = document.createElement("div");
const profileImgDiv = document.createElement("div")
const profileContDiv = document.createElement("div")

const profileImg = document.createElement("img")
const profileContP = document.createElement("p")

profileImgDiv.appendChild(profileImg)
profileContDiv.appendChild(profileContP)

profileDiv.appendChild(profileImgDiv)
profileDiv.appendChild(profileContDiv)


// const p = document.createElement("p")
// containerDiv.appendChild(p)

// const link = document.createElement("a")
// containerDiv.appendChild(link)

for (const p of ["h1", "h2", "h3", "h4", "h5", "h6"]) {
    // containerDiv.append(document.createElement(p))
}

document.body.prepend(containerDiv)
document.body.appendChild(profileDiv)

const style = document.createElement("style")

// writing styles in bjects

document.head.appendChild(style)

const p = document.querySelector("p");
const btn = document.querySelector("button[type=button]")
// textContent
btn.textContent = "Update click Btn"
p.textContent = "Hello paragraph"

const pM = `
Lorem ipsum dolor sit amet
consectetur adipisicing elit.
Similique fugiat dolorum animi,
amet atque quidem, accusantium id pariatur libero nostrum,
sint necessitatibus sed placeat consequuntur fugit ipsum non
facilis cum? <span>This is a span</span>
`

profileContP.textContent = pM
// innerHTML

// profileContP.innerHTML = `
// ${pM}. <span>This is a span</span>
// `
// outerHTML


// updating html element attributes

// create that attribute

const h1 = document.querySelector("h1");

const h1Attr = {
    class: "className__h1",
    id: "id__h1"
}


const userNameInput = document.createElement("input")

document.body.appendChild(userNameInput)
// setAttribute(attrName, AttrValue)
// hasAttribute(attrName)
// getAttribute(attrName)
// removeAttribute(attrName)
userNameInput.setAttribute("placeholder", "Your username")
userNameInput.setAttribute("name", "username")
userNameInput.setAttribute("id", "id_username")
userNameInput.setAttribute("value", "Jeckonia")
userNameInput.setAttribute("class", "username")

document.getElementById("form").appendChild(userNameInput)

// userNameInput.style.padding = "5px 10px";
// userNameInput.style.borderRadius = "20px";
// userNameInput.style.outline = "2px solid green";
// userNameInput.style.border = "none"
// userNameInput.style.marginTop = "1rem";


const styles = `
padding: 5px 10px;
margin-top: 1rem;
border-radius: 20px;
border: none;
outline: 2px solid green;
`

userNameInput.setAttribute("style", styles)




if(userNameInput.hasAttribute("class")) {
    console.log(userNameInput.getAttribute("class"))
    console.log(userNameInput.getAttribute("class"))
    userNameInput.removeAttribute("class");
}


for (const attr of ["class", "id", "data-bs"]) {
    for (const attrV of ["h1"]) {
            h1.setAttribute(attr, attrV)
    }
}

// // h1.setAttribute("class", "h1")
// // h1.setAttribute("id", "h1")
// // h1.setAttribute("data-heading-1", "h1")
