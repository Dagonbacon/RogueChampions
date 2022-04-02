import {generateExhaustedCardInPlay, generateUpgradeCard,generateAllyCard, levelUpMessageIncrease} from "@/lib/upgrades";
import {Thor as Exp} from "@/consts/expansions";
import {Thor} from "@/consts/heroes";
import { Upgrade, UpgradeCategory } from "@/types/upgrade";

export const Thunder = generateUpgradeCard({
	name: 'Feel my might!',
	card: `God of Thunder`,
	requires: Exp.name,
	requiresHero: Thor.name,
	category: 'Heroic',
	article: '',
	copies: 2,
	exhausted: true,
})

export const Asgard = generateUpgradeCard({
	name: 'The Golden Realm',
	card: `Asgard`,
	requires: Exp.name,
	requiresHero: Thor.name,
	category: 'Heroic',
	article: ''
})

export const Helmet = generateUpgradeCard({
	name: 'Prepared for war',
	card: `Thor\'s Helmet`,
	requires: Exp.name,
	requiresHero: Thor.name,
	category: 'Heroic',
	article: ''
})

export const Sif = generateAllyCard({
	name: 'A mighty ally',
	card: 'Lady Sif',
	levels: [{
		damage: 1,
		exhausted: true
	}, {
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	requires: Exp.name,
	requiresHero: Thor.name,
	pronoun: 'her',
	category: 'Heroic',
})

export const AsgardianCombatant : Upgrade = {
	name:'Asgardian Combatant',
	description () {
		return `Whenever "Have at thee!" triggers, draw ${this.level+1} additional cards.`
	},
	levelUpMessage () {
		return levelUpMessageIncrease(this.level+1, this.level+2, 'card')
	},
	requires: Exp.name,
	requiresHero: Thor.name,
	level: 1,
	maxLevel: 3,
	category: 'Heroic' as UpgradeCategory
}

export const Upgrades = [
	Thunder,
	Asgard,
	Helmet,
	Sif,
    AsgardianCombatant
]