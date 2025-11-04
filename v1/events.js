// events
/**
 * inline
 * traditional method
 * event listeners
 */

// traditional method
// document.getElementById("form").onclick = loadFn

function loadFn() {
    console.log('form element loaded')
}

const fm = document.getElementById("form");

// attach event listeners
fm.addEventListener("click", loadFn)
// fm.removeEventListener("click", )

/**
 * 
 * * UI events
 *  > load | DOMContentLoaded
 *  > unload
 *  > resize
 *  > scroll
 * 
 * 
 * * Mouse events
 *  > click
 *  > dblclick
 *  > mouseover
 *  > mousemove
 *  > mouseenter
 *  > mouseup
 *  > mousedown
 *  > contextmenu
 * 
 * 
 * 
 * * keyboard events
 *  > keyup
 *  > keydown
 *  > keypress
 * 
 * * Form Events
 *  > submit
 *  > change
 *  > focus (focusin | focusout)
 *  > blur
 *
 * * Touch Event
 *  > touchstart
 *  > touchmove
 *  > touchend
 */


// const c = () => {

// }


function animateFS(h1, size = 1.1) {
    size *= 1.34;

    parseInt(size)

    h1.style.fontSize = `${parseInt(size)}rem`

    console.log(parseInt(size));
}

// document.addEventListener("DOMContentLoaded",c)
document.addEventListener("DOMContentLoaded", function () {
    // console.log("DOM loaded")

    let size = 1.1

    const h1 = document.querySelector("h1")


    // document.addEventListener("scroll", function(eve){
    // eve.target
    //     size *= 0.34;

    //     parseInt(size)

    //     h1.style.fontSize = `${parseInt(size)}rem`

    //     console.log(parseInt(size));


    // }, {
    //     capture: true
    // })



    // window.addEventListener("resize", function (a) {
    //     //  the event resize is in the window object not the document object
    //     size *= 2;

    //     parseFloat(size).toFixed(2)

    //     h1.style.fontSize = `${parseInt(size)}rem`

    //     console.log(parseInt(size));
    // })




    // mouse  Event

    /**
     * 1: Select btn of type button
     * 2: Add event listener on the selected btn element
     * 3: The event name be of click
     * 4: Once the event is attached then change the btn 
     * textContent t `clicked btn`
     * 
     */


    const btn = document.querySelector("button[type=button]");
    const pDiv = document.querySelector("div#people");


    // btn.addEventListener("click", function(event){
    //      event.target.textContent = "Clicked Btn";
    //      event.target.style.padding = "20px";
    // })


    // Loading resurce


    // async function loadPost() {

    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const data = await response.json()
    //     pDiv.innerHTML = JSON.stringify(data)
    // }

    // const z = 0;

    btn.addEventListener("dblclick", function (event) {
        event.target.textContent = "Clicked Btn";
        event.target.style.padding = "20px";

        // loadPost()
    })


    const track = document.getElementById("track");
    const logC = document.getElementById("logC")



    // track.addEventListener("mouseover", function (event) {
    //     console.log(event.clientY)
    //     console.log(event.clientX)

    //     document.getElementById("logC").innerHTML = `
    //     <h3>Mouse Over</h3>
    //     Y-axis: ${event.clientY}
    //     <br />
    //     X-axis: ${event.clientX}
    //     `
    // })

    function color(z, y, x) {
        return `rgb(${z}, ${y}, ${x})`
    }

    // track.addEventListener("mousemove", function (event) {
    //     const y = event.clientY
    //     const x = event.clientX

    //     event.target.style.backgroundColor = color(0, y, x)

    //     logC.innerHTML = `
    //     <h3>Mouse Move</h3>
    //     Y-axis: ${y}
    //     <br />
    //     X-axis: ${x}
    //     <br />
    //     `
    // })



    // track.addEventListener("mouseenter", function (event) {
    //     // console.log(event)
    //     const y = event.clientY
    //     const x = event.clientX

    //     event.target.style.backgroundColor = color(0, y, x)

    //     logC.innerHTML = `
    //     <h3>Mouse Move</h3>
    //     Y-axis: ${y}
    //     <br />
    //     X-axis: ${x}
    //     <br />
    //     `
    // })


    const input = document.querySelector("input[name=hello]");

    const values = ["a", "e", "i", "o", "u"]

    const pass = ["pass1", "pass2", "pass3"]

    const inputStatus = document.querySelector("small#input-status");

    // const inputSpan = inputStatus.querySelector("span")

    input.addEventListener("keyup", function (event) {
        // console.log("Key up event", event.key);



        // if (values.includes(event.key)) {
        //     event.target.style.border = "2px solid green";
        //     event.target.style.outline = "2px solid green";
        // } else {
        //     event.target.style.border = "2px solid red";
        //     event.target.style.outline = "2px solid red";
        // }

        // if (pass.includes(event.target.value)) {
        //     event.target.style.border = "2px solid green";
        //     event.target.style.outline = "2px solid green";

        //     inputStatus.setAttribute("class", "success")
        //     // inputStatus.textContent = "Your input status is valid"
        //     inputStatus.querySelector("span.valid").style.display = "block"
        //     inputStatus.querySelector("span.invalid").style.display = "none"

        // } else {
        //     event.target.style.border = "2px solid red";
        //     event.target.style.outline = "2px solid red";

        //     inputStatus.setAttribute("class", "error")
        //     // inputStatus.textContent = "Your input status is invalid"
        //     inputStatus.querySelector("span.invalid").style.display = "block"
        //     inputStatus.querySelector("span.valid").style.display = "none"


        // }

        // console.log(event.target.value)
    })

    // input.addEventListener("keydown", function (event) {
    //     console.log("Key down event", event.key);
    // })

    // input.addEventListener("keypress", function (event) {
    //     console.log("Key press event", event.key);
    // })
    // document.addEventListener("contextmenu", function (event) {
    //     console.log(event)
    // })


    const fm = document.querySelector("form.loginForm");

    const username = fm.querySelector("input[name=username]");
    const password = fm.querySelector("input[name=password]");

    // option1
    username.addEventListener("focusin", function (event) {
    })



    function validatePassword(event) {
        if (!event.target.value) return;
        if (!(event.target.value.length >= 8)) return;
        return true
    }


    function validate(event, isValid = true) {
        if (!event.target.value || !isValid) {
            event.target.setAttribute("class", "invalid");
        }
        else {
            if (event.target.hasAttribute("class") && event.target.classList.contains("invalid")) {
                event.target.classList.remove("invalid")
            }

        }
    }



    function focusHandle(event, fieldName = "username") {
        validate(event)
        if (fieldName) {
            if (!validatePassword(event)) {
                validate(event, false)
            }
        }

        if (fieldName && (fieldName === "username")) {

        }

    }


    username.addEventListener("focusout", function (event) {
        focusHandle(event, "username")
    })
    password.addEventListener("focusout", function (event) {
        focusHandle(event, "password")
    })

    fm.addEventListener("submit", function (event) {
        event.preventDefault();
        // console.log("clicked with default behavior")
        console.log("clicked without default behavior")
        console.log(event.target.value)

        const fd = new FormData(event.target)

        console.log(Object.fromEntries(fd))
    })

})