let icons = ["email","github","discord"];
let point = 2;

setInterval(() => {
    console.log(icons)

    let element = document.getElementsByClassName(icons[point])[0].style
    element.transitionDuration = "1s"
    element.transform = "translate(0,+26vh)"
    
    let val = icons.pop()
    icons.unshift(val)
    
},2000)