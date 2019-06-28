const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

// Example
// const bookSeed = [
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     synopsis:
//       "The authentic edition from Fitzgerald's original publisher. This edition approved by the Holden-Crowther Literary Organisation. The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
//     date: new Date(Date.now())
//   },
//   {
//     title: "Born a Crime: Stories from a South African Childhood",
//     author: "Trevor Noah",
//     synopsis:
//       "Trevor Noah, one of the comedy world's fastest-rising stars and host of The Daily Show, tells his wild coming-of-age story during the twilight of apartheid in South Africa and the tumultuous days of freedom that followed. In this Audible Studios production, Noah provides something deeper than traditional memoirists: powerfully funny observations about how farcical political and social systems play out in our lives. \"Nelson Mandela once said, 'If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.' He was so right. When you make the effort to speak someone elses language, even if it's just basic phrases here and there, you are saying to them, 'I understand that you have a culture and identity that exists beyond me. I see you as a human being.'\" (Trevor Noah)\nAttuned to the power of language at a young age - as a means of acceptance and influence in a country divided, then subdivided, into groups at odds with one another - Noah's raw, personal journey becomes something extraordinary in audio: a true testament to the power of storytelling. With brutal honesty and piercing wit, he forgoes an ordinary reading and, instead, delivers something more intimate, sharing his story with the openness and candor of a close friend. His chameleon-like ability to mimic accents and dialects, to shift effortlessly between languages including English, Xhosa, and Zulu, and to embody characters throughout his childhood - his mother, his gran, his schoolmates, first crushes and infatuations - brings each memory to life in vivid detail. Hearing him directly, you're reminded of the gift inherent in telling one's story and having it heard; of connecting with another, and seeing them as a human being.\nThe stories Noah tells are by turns hilarious, bizarre, tender, dark, and poignant - subsisting on caterpillars during months of extreme poverty, making comically pitiful attempts at teenage romance in a color-obsessed world, thrown into jail as the hapless fall guy for a crime he didn't commit, thrown by his mother from a speeding car driven by murderous gangsters, and more.",
//     date: new Date(Date.now())
//   }
// ];
