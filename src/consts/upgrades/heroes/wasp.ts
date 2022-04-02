import {Wasp as Exp} from "@/consts/expansions";
import {Wasp,AntMan} from "@/consts/heroes";
import {generateAllyCard, generateUpgradeCard} from "@/lib/upgrades";

export const RedRoomTraining = generateUpgradeCard({
	name: 'Red Room Prodigy',
	card: `Red Room Training`,
	requires: Exp.name,
	requiresHero: Wasp.name,
	category: 'Heroic',
	article: '',
})

export const BioSyntheticWings = generateUpgradeCard({
	name: 'Unswattable',
	card: `Bio-Synthetic Wings`,
	requires: Exp.name,
	requiresHero: Wasp.name,
	category: 'Heroic',
	article: ''
})


export const WaspsHelmet = generateUpgradeCard({
	name: 'Pym Tech',
	card: `Wasps Helmet`,
	requires: Exp.name,
	requiresHero: Wasp.name,
	category: 'Heroic',
	article: '',
})

export const Scott = generateAllyCard({
	name: 'He Can Do That Too',
	card: 'Ant-Man',
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
	requires: Exp.name,
	requiresHero: Wasp.name,
	pronoun: 'him',
	category: 'Heroic',
	conflictingHeroes: [AntMan.name],
})

export const Girl = {
	name: 'G.I.R.L. Discovery',
	level: 1,
	maxLevel: 3,
	requires: Exp.name,
	requiresHero: Wasp.name,
	numToSearch (level: number) : number {
		return 4 + (level-1) * 2
	},
	numToKeep (level: number) : number {
		return level
	},
	description () {
		const numToSearch = this.numToSearch(this.level)
		const numToKeep = this.numToKeep(this.level)
		let keepsies = numToKeep == 1 ? 'a card with a printed mental resource' : numToKeep + 'cards with a printed mental resource'
		let article = numToKeep == 1 ? 'it' : 'them'
		return `<strong>Setup:</strong> Search the top ${numToSearch} cards of your deck for ${keepsies}. Add ${article} to your hand and shuffle your deck.`
	},
	levelUpMessage () {
		return `Cards to search: ${this.numToSearch(this.level)} becomes <strong>${this.numToSearch((this.level+1))}</strong>
		<br />
		Cards with a printed mental resource to keep: ${this.numToKeep(this.level)} becomes <strong>${this.numToKeep((this.level+1))}</strong>`
	},
	category: 'Heroic'
}

export const Upgrades = [
	RedRoomTraining,
	BioSyntheticWings,
	WaspsHelmet,
	Scott,
	Girl
]