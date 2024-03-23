const middle = (title2, images2, para2, btn1, images3, para3, btn2, images4, para4, btn3)=>{
    let div = document.createElement("div")
    div.className = "classM"
    div.innerHTML = `<h1>${title2}</h1>                
                     <div class="p1">
                     <img class="pic2" src="${images2}" />
                     <p>${para2}</p>
                     <button>${btn1}</button>
                     <div class="p2">
                     <img class="pic3" src="${images3}" />
                     <p>${para3}</p>
                     <button>${btn2}</button>
                     <div class="p3">
                     <img class="pic4" src="${images4}" />
                     <p>${para4}</p>
                     <button>${btn3}</button>
                     <div>
                     <div>
    `
    return div
}

export{middle}