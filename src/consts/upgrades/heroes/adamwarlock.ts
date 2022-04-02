import {MadTitansShadow as Exp} from "@/consts/expansions";
import {AdamWarlock} from "@/consts/heroes";
import {generateExhaustedCardInPlay, generateUpgradeCard, generateCounterCardInPlay, generateAllyCard} from "@/lib/upgrades";

export const KarmicStaff = generateUpgradeCard({
	name: 'Extension of Power',
	card: `Karmic Staff`,
	requires: Exp.name,
	requiresHero: AdamWarlock.name,
	category: 'Heroic',
	article: '',
})

export const SoulWorld = generateCounterCardInPlay({
	name: 'Master of All Souls',
	card: `Soul World`,
	category: "Heroic",
	requires: Exp.name,
	requiresHero: AdamWarlock.name,
	extraCounters: {
		1: 0,
		2: 1,
	},
	pronoun: 'it'
})

export const MysticSenses = generateUpgradeCard({
	name: 'Astral Outsider',
	card: `Mystic Senses`,
	requires: Exp.name,
	requiresHero: AdamWarlock.name,
	category: 'Heroic',
	article: '',
})

export const PipTheTroll = generateAllyCard({
	name: 'Keep Trollin\'',
	card: 'Pip the Troll',
	levels: [{
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	requires: Exp.name,
	requiresHero: AdamWarlock.name,
	pronoun: 'his',
	category: 'Heroic',
})

export const WarlocksCape = generateExhaustedCardInPlay({
	name: 'Proper Attire',
	card: `Warlock's Cape`,
	requires: Exp.name,
	requiresHero: AdamWarlock.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const Upgrades = [
	KarmicStaff,
	SoulWorld,
	MysticSenses,
	PipTheTroll,
	WarlocksCape
]