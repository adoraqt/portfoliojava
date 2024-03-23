const right = (image) =>{
    let div = document.createElement("div")
    div.className = "ClassR"
    div.innerHTML =`<img class="pic" src ="${image}">`

    return div
}
export {right}