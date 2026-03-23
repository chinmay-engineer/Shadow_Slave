import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CharacterStory.css";

/* Character images */

import sunny from "../../assets/Sunny1.jpg";
import madprince from "../../assets/878.jpg";
import nephis from "../../assets/Nephis1.jpg";
import cassie from "../../assets/Cassie1.jpg";
import kai from "../../assets/Kai1.jpg";
import jet from "../../assets/Jet1.jpg";
import effie from "../../assets/111e.jpg";
import mordret from "../../assets/Shadow Slave Mordret1.jpg";

/* Background images */

import sb from "../../assets/sb.jpg";
import mb from "../../assets/mb.jpg";
import nb from "../../assets/nb.jpg";
import cb from "../../assets/cb.jpg";
import kb from "../../assets/kb.jpg";
import jb from "../../assets/jb.jpg";
import eb from "../../assets/eb.jpg";
import mmb from "../../assets/mmb.jpg";

/* Character database */

const characterData = {

sunny:{
name:"🌑 Sunny",
realName:"Sunless",
role:"Main Protagonist",
power:95,
image:sunny,
background:sb,
story:`Sunless was born in the slums of the outskirts, growing up poor and alone.
Because of this harsh life he became extremely cautious, clever, and distrustful.

When he entered the First Nightmare he survived through intelligence rather
than brute strength. After awakening he obtained a rare Divine Shadow Aspect.

Despite dreaming of a peaceful life, Sunny constantly finds himself pulled
into deadly battles. Over time he evolves from a cautious survivor into one
of the most dangerous Awakened fighters in the world.

His mastery over shadows and his ruthless survival instincts make him both
feared and respected across the Nightmare realms.`
},

madprince:{
name:"👑 Mad Prince",
realName:"Sunless (Future Version)",
role:"Future Corrupted Version",
power:100,
image:madprince,
background:mb,
story:`The Mad Prince is believed to be a future version of Sunny from a ruined timeline.

In that dark future endless wars and tragedies pushed him beyond the limits
of sanity. Losing everything he once cared about he became a terrifying ruler
of shadows feared across entire Nightmare worlds.

His existence represents the dark destiny Sunny may become if despair
consumes him completely.`
},

nephis:{
name:"🔥 Nephis",
realName:"Nephis",
role:"Leader / Deuteragonist",
power:98,
image:nephis,
background:nb,
story:`Nephis is the daughter of a powerful legacy clan that was destroyed by political enemies.

After losing her family she trained relentlessly and became one of the most
talented Awakened of her generation. Known as the Changing Star she inspires
others with her determination.

Her ultimate goal is to destroy the corrupt system behind the Nightmare Spell
and reshape humanity's future.`
},

cassie:{
name:"👁 Cassie",
realName:"Cassia",
role:"Oracle / Strategist",
power:80,
image:cassie,
background:cb,
story:`Cassie lost her eyesight as a child but awakened an Aspect that allows
her to see fragments of the future.

Her prophetic visions reveal possible timelines and coming disasters.
Because of this ability she carries the painful burden of knowing tragedies
before they happen.

Despite this she continues guiding her friends toward the best possible future.`
},

kai:{
name:"🎶 Kai",
realName:"Kai",
role:"Scout and Support Fighter",
power:75,
image:kai,
background:kb,
story:`Before awakening Kai was a famous singer admired for his incredible voice.

After becoming an Awakened his abilities became connected to sound and perception.
His heightened senses allow him to detect threats and support allies during battle.

Despite his fame he remains kind, loyal, and dependable.`
},

jet:{
name:"☠ Jet",
realName:"Jet",
role:"Government Elite Awakened",
power:92,
image:jet,
background:jb,
story:`Jet also known as the Soul Reaper is one of the most feared Awakened
working for the government.

Her abilities revolve around death and souls allowing her to destroy
Nightmare Creatures with terrifying efficiency.

Calm, cold and incredibly experienced she often acts as a mentor
to younger Awakened like Sunny.`
},

effie:{
name:"💪 Effie",
realName:"Effie",
role:"Frontline Warrior",
power:90,
image:effie,
background:eb,
story:`Effie grew up struggling with poverty and hunger which shaped
her bold personality.

Her Aspect grants immense strength and durability making her one
of the most powerful frontline fighters.

Although loud and energetic she is fiercely loyal and always protects
her friends during battle.`
},

mordret:{
name:"🪞 Mordret",
realName:"Prince of Nothing",
role:"Major Antagonist",
power:97,
image:mordret,
background:mmb,
story:`Mordret is the son of a powerful noble family but was imprisoned
because his abilities were considered too dangerous.

His powers allow him to manipulate reflections and even possess
other people's bodies.

After escaping captivity he became one of the most mysterious
and dangerous figures in the world.`
}

};

const CharacterStory = () => {

const { name } = useParams();
const navigate = useNavigate();

const character = characterData[name?.toLowerCase().replace(/\s+/g,"")];

if(!character){
return <h1 style={{color:"white"}}>Character Not Found</h1>;
}

return(

<div
className="story-container"
style={{backgroundImage:`url(${character.background})`}}
>

<div className="fog"></div>

<div className="story-card">

<img src={character.image} alt={character.name}/>

<div className="story-text">

<h1>{character.name}</h1>

<h3>Real Name: {character.realName}</h3>

<h4>Role: {character.role}</h4>

<div className="power-section">

<span>Power Level</span>

<div className="power-bar">

<div
className="power-fill"
style={{width:`${character.power}%`}}
></div>

</div>

</div>

<p>{character.story}</p>

<button
className="back-btn"
onClick={()=>navigate("/characters")}
>

⬅ Back to Characters

</button>

</div>

</div>

</div>

);

};

export default CharacterStory;