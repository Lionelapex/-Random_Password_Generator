// query the elements
const generateButton= document.querySelector('button.btn')
const displayPasswordField=document.querySelector('div.showpassword')


// lists 
const random_adjectives=[
    "happy",
    "sad",
    "angry",
    "calm",
    "big",
    "small",
    "fast",
    "slow",
    "hot",
    "cold",
    "new",
    "old",
    "good",
    "bad",
    "nice",
    "mean",
    "smart",
    "dumb",
    "funny",
    "serious",
    "beautiful",
    "ugly",
    "rich",
    "poor",
    "strong",
    "weak",
    "brave",
    "cowardly",
    "loud",
    "quiet",
    "bright",
    "dark",
    "hard",
    "soft",
    "sweet",
    "sour",
    "high",
    "low",
    "long",
    "short",
    "wide",
    "narrow",
    "round",
    "square",
    "clean",
    "dirty",
    "full",
    "empty",
    "heavy",
    "light",
    "easy",
    "difficult",
    "simple",
    "complex",
    "clear",
    "vague",
    "true",
    "false",
    "real",
    "fake",
    "young",
    "old",
    "fresh",
    "stale",
    "wet",
    "dry",
    "smooth",
    "rough",
    "sharp",
    "dull",
    "soft",
    "hard",
    "friendly",
    "hostile",
    "generous",
    "selfish",
    "honest",
    "dishonest",
    "loyal",
    "disloyal",
    "kind",
    "cruel",
    "polite",
    "rude",
    "curious",
    "bored",
    "excited",
    "nervous",
    "confident",
    "shy",
    "proud",
    "humble",
    "grateful",
    "ungrateful",
    "lucky",
    "unlucky",
    "amazing",
    "awful"
]
const random_nouns=[
    "book",
  "dog",
  "car",
  "house",
  "tree",
  "phone",
  "water",
  "fire",
  "flower",
  "bird",
  "sky",
  "star",
  "moon",
  "sun",
  "apple",
  "banana",
  "orange",
  "cake",
  "coffee",
  "tea",
  "music",
  "art",
  "love",
  "hate",
  "dream",
  "night",
  "day",
  "light",
  "dark",
  "rain",
  "snow",
  "wind",
  "sea",
  "river",
  "mountain",
  "forest",
  "city",
  "country",
  "world",
  "people",
  "friend",
  "enemy",
  "family",
  "child",
  "parent",
  "teacher",
  "student",
  "doctor",
  "nurse",
  "lawyer",
  "judge",
  "police",
  "thief",
  "hero",
  "villain",
  "story",
  "movie",
  "game",
  "sport",
  "soccer",
  "cricket",
  "tennis",
  "golf",
  "basketball",
  "baseball",
  "hockey",
  "rugby",
  "chess",
  "puzzle",
  "math",
  "science",
  "history",
  "geography",
  "language",
  "English",
  "French",
  "Spanish",
  "German",
  "Chinese",
  "Japanese",
  "Korean",
  "Hindi",
  "Zulu",
  "Afrikaans",
  "animal",
  "cat",
  "mouse",
  "lion",
  "tiger",
  "elephant",
  "giraffe",
  "zebra",
  "monkey",
  "panda",
  "bear",
  "fish",
  "shark",
  "whale",
  "dolphin",
  "octopus",
  "squid",
  "crab",
  "lobster",
  "shrimp",
  "unicorn",
  "dragon",
  "alien",
  "robot",
  "pirate",
  "ninja",
  "wizard",
  "witch",
  "vampire",
  "zombie",
  "ghost",
  "monster",
  "dinosaur",
  "mermaid",
  "fairy",
  "gnome",
  "troll",
  "ogre",
  "elf",
  "dwarf",
  "goblin",
  "pixie",
  "sponge",
  "cheese",
  "pickle",
  "bacon",
  "waffle",
  "donut",
  "pizza",
  "burger",
  "sandwich",
  "soup",
  "salad"
]

const random_color=[
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "pink",
    "brown",
    "black",
    "white",
    "gray",
    "cyan",
    "magenta",
    "lime",
    "navy",
    "maroon",
    "olive",
    "teal",
    "purple",
    "gold",
    "silver",
    "bronze",
    "coral",
    "turquoise",
    "beige",
    "ivory",
    "khaki",
    "tan",
    "crimson",
    "scarlet",
    "ruby",
    "salmon",
    "peach",
    "apricot",
    "mango",
    "lemon",
    "mustard",
    "amber",
    "chartreuse",
    "emerald",
    "jade",
    "mint",
    "sage",
    "pine",
    "forest",
    "kelly",
    "sky",
    "azure",
    "cobalt",
    "royal",
    "sapphire",
    "cerulean",
    "lavender",
    "lilac",
    "orchid",
    "plum",
    "amethyst",
    "fuchsia",
    "rose",
    "blush",
    "magenta",
    "carmine",
    "cherry",
    "raspberry",
    "strawberry",
    "burgundy",
    "wine",
    "mahogany",
    "chestnut",
    "chocolate",
    "coffee",
    "mocha",
    "espresso",
    "caramel",
    "honey",
    "ecru",
    "bisque",
    "cream",
    "snow",
    "charcoal",
    "slate",
    "steel",
    "smoke",
    "ash",
    "pearl",
    "platinum",
    "aquamarine",
    "seagreen",
    "aqua",
    "seafoam",
    "mintcream",
    "thistle",
    "orchid",
    "linen",
    "cornsilk",
    "papaya",
    "blanchedalmond",
    "mistyrose",
    "lavenderblush",
    "lemonchiffon",
    "lightcyan",
    "aliceblue",
    "ghostwhite"
]

const randomSymbols=[
    "!",
   
    "#",
    "$",
    "%",
    "&",
   
   
    "*",
    "+",
   
   
    
    ":",
    
    "=",
  
    "?",
    "@",
  
   
    
   
    "_",
  
]
// functions 
const getRandomAdjective=(adjective=random_adjectives)=>{

return adjective[Math.floor(Math.random()*adjective.length)]

}
getRandomAdjective(random_adjectives)   // calling getRandomAdjective

// get random color
const getRandomColor=(color=random_color)=>{
    return color[Math.floor(Math.random()*color.length)]
    }

// get random noun
const getRandomNoun=(noun=random_nouns)=>{
 return noun[Math.floor(Math.random()*noun.length)]
}
getRandomNoun(random_nouns) // calling GetNounNoun


// get random number
const getRandomNumber=()=>{
   
   return Math.floor(Math.random()*101)
}
// get random puctuation 
const getRandomPunctuationChar=(punctuation=randomSymbols)=>{
return punctuation[Math.floor(Math.random()*punctuation.length)]
}






// display password via click event 
generateButton.addEventListener('click',()=>{

    // password variables
const adjective=getRandomAdjective()
console.log(adjective)
const color=getRandomColor()
console.log(color)
const noun= getRandomNoun()
console.log(noun)
const number=getRandomNumber()
console.log(number)
const punctuation=getRandomPunctuationChar()
console.log(punctuation)

// password created
const password= adjective+ color+noun+number+punctuation
console.log(password)

// password appended
    displayPasswordField.innerHTML=`<h3>${password}</h3>`
    

})
