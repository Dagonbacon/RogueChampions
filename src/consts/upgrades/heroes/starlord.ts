import {StarLord as Exp} from "@/consts/expansions";
import {StarLord} from "@/consts/heroes";
import {generateUpgradeCard, generateExhaustedCardInPlay} from "@/lib/upgrades";

export const ElementGun = generateExhaustedCardInPlay({
	name: 'Armed and Ready',
	card: `Element Gun`,
	requires: Exp.name,
	requiresHero: StarLord.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const JetBoots = generateUpgradeCard({
	name: 'Blast Off!',
	card: `Jet Boots`,
	requires: Exp.name,
	requiresHero: StarLord.name,
	category: 'Heroic',
	article: '',
})

export const LeaderOfTheGuardians = generateUpgradeCard({
	name: 'The Biggest Idiots in the Galaxy',
	card: `Leader of the Guardians`,
	requires: Exp.name,
	requiresHero: StarLord.name,
	category: 'Heroic',
	article: '',
})

export const StarLordsHelmet = generateUpgradeCard({
	name: 'Legendary Outlaw',
	card: `Star-Lord's Helmet`,
	requires: Exp.name,
	requiresHero: StarLord.name,
	category: 'Heroic',
	article: '',
})

export const BadBoy = generateUpgradeCard({
	name: 'Ridin\' in style!',
	card: 'Bad Boy',
	requires: Exp.name,
	requiresHero: StarLord.name,
	category: 'Heroic',
	article: ''
})

export const Upgrades = [
	ElementGun,
	JetBoots,
	LeaderOfTheGuardians,
	StarLordsHelmet,
	BadBoy
]