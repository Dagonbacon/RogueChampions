import {Quicksilver as Exp} from "@/consts/expansions";
import {Quicksilver,ScarletWitch} from "@/consts/heroes";
import {generateAllyCard, generateUpgradeCard,generateExhaustedCardInPlay} from "@/lib/upgrades";

export const AcceleratedReflex = generateUpgradeCard({
	name: 'React Faster',
	card: `Accelerated Reflex`,
	requires: Exp.name,
	requiresHero: Quicksilver.name,
	category: 'Heroic',
	article: '',
})

export const HyperPerception = generateUpgradeCard({
	name: 'Think Faster',
	card: `Hyper Perception`,
	requires: Exp.name,
	requiresHero: Quicksilver.name,
	category: 'Heroic',
	article: '',
})

export const ReinforcedSinew = generateUpgradeCard({
	name: 'Strike Faster',
	card: `Reinforced Sinew`,
	requires: Exp.name,
	requiresHero: Quicksilver.name,
	category: 'Heroic',
	article: '',
})

export const Friction = generateExhaustedCardInPlay({
	name: 'Move Faster',
	card: `Friction Resistance`,
	requires: Exp.name,
	requiresHero: Quicksilver.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const Serval = generateExhaustedCardInPlay({
	name: 'Corporate Sponsorship',
	card: `Serval Industries`,
	requires: Exp.name,
	requiresHero: Quicksilver.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const Wanda = generateAllyCard({
	name: 'Twinstinct',
	card: 'Scarlet Witch',
	pronoun: 'her',
	requires: Exp.name,
	requiresHero: Quicksilver.name,
	levels: [{
		damage: 1,
		exhausted: true,
	}, {
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	category: 'Heroic',
	conflictingHeroes: [ScarletWitch.name],
})

export const Upgrades = [
	AcceleratedReflex,
	HyperPerception,
	ReinforcedSinew,
	Friction,
	Serval,
	Wanda,
	
]