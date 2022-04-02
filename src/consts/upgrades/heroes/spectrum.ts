import {MadTitansShadow as Exp} from "@/consts/expansions";
import {Spectrum} from "@/consts/heroes";
import {generateExhaustedCardInPlay, generateUpgradeCard, generateAllyCard} from "@/lib/upgrades";

export const EnergyDuplication = generateUpgradeCard({
	name: 'Charging Up!',
	card: 'Energy Duplication',
	requires: Exp.name, 
	requiresHero: Spectrum.name,
	category: 'Heroic',
	article: '',
	copies:2,
	exhausted: true,
})

// Deft Focus
// Superpower card in start hand
// Swap form as an action once per game / once per turn
// Forms get +1 basic ability

export const Upgrades = [
	EnergyDuplication,
]