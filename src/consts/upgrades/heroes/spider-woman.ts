import {generateAllyCard, generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";
import {CoreSet, GalaxysMostWanted, RiseOfRedSkull} from "@/consts/expansions";
import {CaptainMarvel, SpiderWoman} from "@/consts/heroes";


export const Finesse = generateUpgradeCard({
	name: 'Spidey Skills',
	card: "Finesse",
	requires: RiseOfRedSkull.name,
	requiresHero: SpiderWoman.name,
	category: "Heroic",
	article: 'a',
	copies: 2,
	exhausted: true,
})

export const Apartment = generateExhaustedCardInPlay({
	name: 'Rent Paid',
	card: `Jessica Drew's Apartment`,
	requires: RiseOfRedSkull.name,
	requiresHero: SpiderWoman.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const CaptainMarvelUpgrade = generateAllyCard({
	name: 'Marvelous Friends',
	card: 'Captain Marvel',
	levels: [{
		damage: 2,
		exhausted: true,
	}, {
		damage: 1,
		exhausted: true
	}, {
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	requires: RiseOfRedSkull.name,
	requiresHero: SpiderWoman.name,
	pronoun: 'her',
	category: 'Heroic',
	conflictingHeroes: [CaptainMarvel.name]
})

export const Agile = {
	name: 'Agile Maneauvering',
	level: 1,
	maxLevel: 3,
	requires: RiseOfRedSkull.name,
	requiresHero: SpiderWoman.name,
	numToSearch (level: number) : number {
		return 4 + (level-1) * 2
	},
	numToKeep (level: number) : number {
		return level
	},
	description () {
		const numToSearch = this.numToSearch(this.level)
		const numToKeep = this.numToKeep(this.level)
		let keepsies = numToKeep == 1 ? 'an Aspect card' : numToKeep + ' Aspect cards'
		let article = numToKeep == 1 ? 'it' : 'them'
		return `<strong>Setup:</strong> Search the top ${numToSearch} cards of your deck for ${keepsies}. Add ${article} to your hand and shuffle your deck.`
	},
	levelUpMessage () {
		return `Cards to search: ${this.numToSearch(this.level)} becomes <strong>${this.numToSearch((this.level+1))}</strong>
		<br />
		Aspect cards to keep: ${this.numToKeep(this.level)} becomes <strong>${this.numToKeep((this.level+1))}</strong>`
	},
	category: 'Heroic'
}

export const DeftFocus = generateExhaustedCardInPlay({
	name: 'Agile Focus',
	card: `Deft Focus`,
	requires: GalaxysMostWanted.name,
	requiresHero: SpiderWoman.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const Upgrades = [
	Finesse,
	Apartment,
	CaptainMarvelUpgrade,
	Agile,
	DeftFocus
]
