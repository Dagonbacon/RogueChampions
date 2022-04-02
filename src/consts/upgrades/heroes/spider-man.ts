import {CoreSet} from "@/consts/expansions";
import {IronMan, SpiderMan} from "@/consts/heroes";
import {generateAllyCard, generateCounterCardInPlay, generateUpgradeCard,generateExhaustedCardInPlay} from "@/lib/upgrades";
import { Upgrade, UpgradeCategory } from "@/types/upgrade";

export const AuntMay = generateExhaustedCardInPlay({
	name: 'Family',
	card: `Aunt May`,
	requires: CoreSet.name,
	requiresHero: SpiderMan.name,
	category: 'Heroic',
	pronoun: 'her',
	they: 'She',
})


export const WebShooter = generateUpgradeCard({
	name: 'Go We Go!',
	card: `WebShooter`,
	requires: CoreSet.name,
	requiresHero: SpiderMan.name,
	category: 'Heroic',
	copies: 2,
	exhausted: true,
})

export const BlackCat = generateAllyCard({
	name: 'Felicia',
	card: 'Black Cat',
	pronoun: 'her',
	requires: CoreSet.name,
	requiresHero: SpiderMan.name,
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
})

export const DailyBugle : Upgrade = {
	name:'"I Want Pictures Of Spider-Man!"',
	description () {
		return 'Scientist is limited to twice per round instead of one.'
	},
	requires: null,
	levelUpMessage () {
		return ''
	},
	level: 1,
	maxLevel: 1,
	category: 'Heroic' as UpgradeCategory
}

export const IronSpider : Upgrade = {
	name:'The Iron Spider',
	description () {
		return 'Start the game with a Tough status card.'
	},
	requires: null,
	levelUpMessage () {
		return ''
	},
	level: 1,
	maxLevel: 1,
	category: 'Heroic' as UpgradeCategory
}

export const Upgrades = [
	AuntMay,
	BlackCat,
	WebShooter,
	DailyBugle,
	IronSpider
]
