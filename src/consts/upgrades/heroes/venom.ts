import {Venom as Exp} from "@/consts/expansions";
import {Venom} from "@/consts/heroes";
import {generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";



export const Rebirth = generateExhaustedCardInPlay({
	name: 'Super Soldier Project: Electric Boogaloo',
	card: `Project Rebirth`,
	requires: Exp.name,
	requiresHero: Venom.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
	
})

export const Multi = generateExhaustedCardInPlay({
	name: 'MacKenzie\'s Gift',
	card: `Multi-Gun`,
	requires: Exp.name,
	requiresHero: Venom.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const Pistol = generateUpgradeCard({
	name: 'Paraphernalia',
	card: `Venoms PIstol`,
	requires: Exp.name,
	requiresHero: Venom.name,
	category: 'Heroic',
	article: '',
	copies: 2,
	exhausted: true,
})

export const Sense = generateUpgradeCard({
	name: 'Feelin Tingly',
	card: `Spider-Sense`,
	requires: Exp.name,
	requiresHero: Venom.name,
	category: 'Heroic',
	article: ''
})

export const Prepared = {
	name: 'Well Prepared',
	level: 1,
	maxLevel: 3,
	requires: Exp.name,
	requiresHero: Venom.name,
	numToSearch (level: number) : number {
		return 6 + (level-1) * 4
	},
	description () {
		const numToSearch = this.numToSearch(this.level)
		return `<strong>Setup:</strong> Search the top ${numToSearch} cards of your deck for a <strong>Weapon</strong> card and add it to your hand, then shuffle your deck.`
	},
	levelUpMessage () {
		return `Cards to search: ${this.numToSearch(this.level)} becomes <strong>${this.numToSearch((this.level+1))}</strong>`
	},
	category: 'Heroic'
}

export const Upgrades = [
	Rebirth,
	Multi,
	Pistol,
	Sense,
	Prepared
]