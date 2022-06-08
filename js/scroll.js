let icons = ["discord","github","email"];

setInterval(() => {
    let temp = icons[1]
    let other = icons[2]
    let otherother = icons[0]
    icons[2] = temp
    icons[1] = otherother
    icons[0] = other

    for(let i = icons.length-1; i >= 0; i--){
        let element = document.getElementsByClassName(icons[i])[0].style
        element.transitionDuration = "2s"
        element.transform = "translate(0,-25px)"
    }
},2000)