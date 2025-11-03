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
 * 
 * * keyboard events
 *  > keyup
 *  > keydown
 *  > keypress
 * 
 * * Form Events
 *  > submit
 *  > change
 *  > focus
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


    btn.addEventListener("dblclick", function (event) {
        event.target.textContent = "Clicked Btn";
        event.target.style.padding = "20px";

        // loadPost()
    })


    const track = document.getElementById("track");
    const logC = document.getElementById("logC")



    track.addEventListener("mouseover", function (event) {
        console.log(event.clientY)
        console.log(event.clientX)

        document.getElementById("logC").innerHTML = `
        <h3>Mouse Over</h3>
        Y-axis: ${event.clientY}
        <br />
        X-axis: ${event.clientX}
        `
    })

    function color(z, y, x) {
        return `rgb(${z}, ${y}, ${x})`
    }

    track.addEventListener("mousemove", function (event) {
        const y = event.clientY
        const x = event.clientX

        event.target.style.backgroundColor = color(0, y, x)

        logC.innerHTML = `
        <h3>Mouse Move</h3>
        Y-axis: ${y}
        <br />
        X-axis: ${x}
        <br />
        Z-axis: ${z}
        `
    })




    track.addEventListener("mouseenter", function (event) {
        const y = event.clientY
        const x = event.clientX

        event.target.style.backgroundColor = color(0, y, x)

        logC.innerHTML = `
        <h3>Mouse Move</h3>
        Y-axis: ${y}
        <br />
        X-axis: ${x}
        <br />
        Z-axis: ${z}
        `
    })

})