import React, { useState, useEffect } from "react";
import "./CharacterDetails.css";

import sunny from "../../assets/Sunless.jpg";
import madPrince from "../../assets/Sunless (1).jpg";
import nephis from "../../assets/Nephis - ShadowSlave - amandak3166 on tiktok.jpg";
import cassie from "../../assets/Cassie - ShadowSlave - amandak3166 on tiktok.jpg";
import kai from "../../assets/Kai.jpg";
import jet from "../../assets/Jet.jpg";
import effie from "../../assets/Effie.jpg";
import mordret from "../../assets/mordret prince of nothing wallpaper shadow slave.jpg";

/* BACKGROUND IMAGES */

import sunnyBg from "../../assets/shadow slave.jpg";
import madPrinceBg from "../../assets/azure serpent and the monster butterfly.jpg";
import nephisBg from "../../assets/Nephis.jpg";
import cassieBg from "../../assets/cass.jpg";
import kaiBg from "../../assets/kaii.jpg";
import jetBg from "../../assets/jett.jpg";
import effieBg from "../../assets/eff.jpg";
import mordretBg from "../../assets/Chained Isles from Shadow Slave.jpg";

const characters = [

{
name:"🖤 Sunny",
image:sunny,
bg:sunnyBg,
realName:"Sunless",
aspect:"Divine Shadow Aspect (Shadow Slave)",
power:"Shadow manipulation, shadow clones, stealth abilities 🌑",
gender:"Male",
age:"26–28",
kill:"Thousands of Nightmare Creatures",
arc:"Forgotten Shore • Dark City • Antarctica • Third Nightmare"
},

{
name:"👑 Mad Prince",
image:madPrince,
bg:madPrinceBg,
realName:"Sunless (future corrupted version)",
aspect:"Divine Shadow Aspect",
power:"Terrifying shadow control, deadly combat mastery ⚔️",
gender:"Male",
age:"Unknown",
kill:"Far beyond normal Awakened",
arc:"Third Nightmare • Future Timeline"
},

{
name:"🔥 Nephis",
image:nephis,
bg:nephisBg,
realName:"Changing Star",
aspect:"Divine Fire Aspect",
power:"Sacred flames, healing fire, destructive attacks 🔥",
gender:"Female",
age:"28",
kill:"Elite Awakened level",
arc:"Forgotten Shore • Dream Realm"
},

{
name:"👁 Cassie",
image:cassie,
bg:cassieBg,
realName:"Cassia",
aspect:"Oracle / Seer Aspect",
power:"Future sight, prophecy vision 🔮",
gender:"Female",
age:"26–28",
kill:"Low (non-combat)",
arc:"Forgotten Shore • Prophecy Arc"
},

{
name:"🎶 Kai",
image:kai,
bg:kaiBg,
realName:"Nightingale",
aspect:"Voice / Charm Aspect",
power:"Hypnotic voice and perception 🎶",
gender:"Male",
age:"28–29",
kill:"Moderate",
arc:"Dark City • Antarctica"
},

{
name:"❄ Jet",
image:jet,
bg:jetBg,
realName:"Soul Reaper",
aspect:"Death / Soul Aspect",
power:"Soul attacks, killing aura ☠️",
gender:"Female",
age:"30–32",
kill:"Extremely High",
arc:"Government Arc • Antarctica"
},

{
name:"💪 Effie",
image:effie,
bg:effieBg,
realName:"Effie",
aspect:"Titan Strength Aspect",
power:"Immense strength and durability 💥",
gender:"Female",
age:"28–30",
kill:"High",
arc:"Forgotten Shore • Antarctica"
},

{
name:"🐍 Mordret",
image:mordret,
bg:mordretBg,
realName:"Prince of Nothing",
aspect:"Divine Reflection Aspect",
power:"Mirror control, body possession 🪞",
gender:"Male",
age:"30+",
kill:"Extremely High",
arc:"Second Nightmare • Third Nightmare"
}

];

const CharacterDetails = () => {

const [index,setIndex] = useState(0);

useEffect(()=>{

const handleKey = (e)=>{

if(e.key==="ArrowDown"){
setIndex((prev)=>(prev+1)%characters.length);
}

if(e.key==="ArrowUp"){
setIndex((prev)=>(prev-1+characters.length)%characters.length);
}

};

window.addEventListener("keydown",handleKey);

return ()=>window.removeEventListener("keydown",handleKey);

},[]);

const char = characters[index];

return(

<div
className="details-container"
style={{ backgroundImage: `url(${char.bg})` }}
>

<div className="details-image">

<img src={char.image} alt={char.name}/>

</div>

<div className="details-info">

<h1>{char.name}</h1>

<p><b>Real Name:</b> {char.realName}</p>

<p><b>Aspect:</b> {char.aspect}</p>

<p><b>Power:</b> {char.power}</p>

<p><b>Gender:</b> {char.gender}</p>

<p><b>Age:</b> {char.age}</p>

<p><b>Kill Score:</b> {char.kill}</p>

<p className="arc"><b>Arc / Volume:</b> <i>{char.arc}</i></p>

</div>

</div>

);

};

export default CharacterDetails;