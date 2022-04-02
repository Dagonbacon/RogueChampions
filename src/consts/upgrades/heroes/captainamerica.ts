import {generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {CaptainAmerica as Expansion, RiseOfRedSkull} from "@/consts/expansions";
import {CaptainAmerica, CaptainMarvel, SpiderWoman} from "@/consts/heroes";
import { Upgrade, UpgradeCategory } from "@/types/upgrade";

export const Serum = generateUpgradeCard({
	name: 'Special Sauce',
	card: "Super Soldier Serum",
	requires: Expansion.name,
	requiresHero: CaptainAmerica.name,
	category: "Heroic",
	article: 'a',
	copies: 2,
	exhausted: true,
})

export const Helmet = generateUpgradeCard({
	name: 'Safety First',
	card: "Captain America's Helmet",
	requires: Expansion.name,
	requiresHero: CaptainAmerica.name,
	category: "Heroic",
	article: '',
})

export const Apartment = generateExhaustedCardInPlay({
	name: 'Rent Paid',
	card: `Steve's Apartment`,
	requires: Expansion.name,
	requiresHero: CaptainAmerica.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const Assemble : Upgrade = {
	name:'"Avengers! Assemble!"',
	description () {
		return 'Living Legend reduces the cost of the first ally played each round by 2 instead of 1'
	},
	requires: Expansion.name,
	requiresHero: CaptainAmerica.name,
	levelUpMessage () {
		return ''
	},
	level: 1,
	maxLevel: 1,
	category: 'Heroic' as UpgradeCategory
}

export const YouMove : Upgrade = {
	name:'"No, You Move"',
	description () {
		return '"I Can Do This All Day!" is limited to twice per round, instead of once per round.'
	},
	requires: Expansion.name,
	requiresHero: CaptainAmerica.name,
	levelUpMessage () {
		return ''
	},
	level: 1,
	maxLevel: 1,
	category: 'Heroic' as UpgradeCategory
}



export const Upgrades = [Serum, Helmet, Apartment, Assemble, YouMove]
