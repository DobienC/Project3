const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    creator: { type: String, required: true },
    // Identification
    name: { type: String, required: true, default: "Villager" },
    class: { type: String, default: "Citizen"},
    race: { type: String, required: true, default: "Human" },
    background: { type: String, default: "Commoner" },
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
    personalityTrait: { type: String, required: true, default: "N/A" },
    ideals: { type: String, required: true, default: "N/A" },
    bonds: { type: String, required: true, default: "N/A" },
    flaws: { type: String, required: true, default: "N/A" },
    origin: { type: String, default: "A normal citizen" },
    // Equipment
    equipment: { type: [String]},
    appearance: { type: String, default: "Farmer's clothes" },
    // Extra
    proficiencies: { type: String },
    languages: { type: [String], required: true, default: "Common" },
    featuresTraits: {type: [String]}
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
