const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    // Identification
    name: { type: String, required: true, default: "NewGuy" },
    class: { type: String},
    level: { type: Number},
    race: { type: String, required: true, default: "Human" },
    background: { type: String },
    alignment: { type: String, required: true, default: "Neutral" },
    // Stats
    strength: { type: Number, required: true, default: 8 },
    dexterity: { type: Number, required: true, default: 8 },
    constitution: { type: Number, required: true, default: 8 },
    intelligence: { type: Number, required: true, default: 8 },
    wisdom: { type: Number, required: true, default: 8 },
    charisma: { type: Number, required: true, default: 8 },
    // Combat
    armorClass: { type: Number },
    initiative: { type: Number },
    speed: { type: Number },
    hitPoints: { type: Number },
    // Personality
    personalityTrait: { type: String, required: true, default: "Weird" },
    ideals: { type: String, required: true, default: "Be a good guy" },
    bonds: { type: String, required: true, default: "I love my mom" },
    flaws: { type: String, required: true, default: "I hate bad people" },
    // Equipment
    equipment: { type: [String]},
    // Extra
    proficiencies: { type: String },
    languages: { type: [String], required: true, default: "Common" },
    featuresTraits: {type: [String]}
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
