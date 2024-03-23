import { left } from "./twoinfo.js";
import { right } from "./twoimg.js";
import { middle } from "./card.js";

const data ={
    title    :"LUCKY BEAUTY",
    para     :" I believe that all women are pretty without makeup, and can be pretty powerful with the right makeup. Whether I'm wearing lots of makeup or no makeup, I'm always the same person inside.” – Lady Gaga.",
    button   :"lucky on",
    myimage  :"up.jpg"

}

const {title, para, button,myimage} = data
let sectionOne = document.getElementById("sectionOne")
sectionOne.append(left(title, para, button,myimage))
sectionOne.append(right(myimage))


const  data2 = {
    title2   :"PROJECT COMPLETE",

    images2  :"p.jpg",
    para2    :"Makeup is malleable and mercurial: The biggest joy I have every day is the opportunity to create, to play, and to invent with something I’ve loved forever.” – Pat McGrath",
    btn1     :"Click here",

    images3   :"eye.jpg",
    para3    :"“Beauty, to me, is about being comfortable in your own skin.” – Gwyneth Paltrow",
    btn2 : "pwede here",

    images4   :"blush.png",
    para4   :"That’s one of the things I love about makeup – you can change your whole attitude by just doing your eyeliner or lipstick differently.” – Beyoncé",
    btn3: "im here",
}


const {title2, images2, para2, btn1, images3, para3, btn2, images4, para4, btn3} = data2
let sectionTwo = document.getElementById("sectionTwo")
sectionTwo.append(middle(title2, images2, para2, btn1, images3, para3, btn2, images4, para4, btn3))