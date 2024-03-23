const left = (title,para,button)=>{
    let div = document.createElement("div")
    div.className = "classL"
    div.innerHTML = `<h1>${title}</h1>
                     <p>${para}</p>
                     <button>${button}</button>
    `
    return div
}

export{left}