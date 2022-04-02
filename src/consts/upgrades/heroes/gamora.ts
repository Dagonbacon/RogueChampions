import {Gamora as Exp} from "@/consts/expansions";
import {Gamora} from "@/consts/heroes";
import {generateExhaustedCardInPlay, generateUpgradeCard, generateAllyCard} from "@/lib/upgrades";

export const ConditioningRoom = generateUpgradeCard({
	name: 'No Rest',
	card: `Conditioning Room`,
	requires: Exp.name,
	requiresHero: Gamora.name,
	category: 'Heroic',
	article: '',
})

export const KeenInstincts = generateUpgradeCard({
	name: 'Always Prepared',
	card: `Keen Instincts`,
	requires: Exp.name,
	requiresHero: Gamora.name,
	category: 'Heroic',
	article: '',
	copies: 2,
	exhausted:true,
})

export const GamorasSword = generateUpgradeCard({
	name: 'Godslayer',
	card: `Gamora's Sword`,
	requires: Exp.name,
	requiresHero: Gamora.name,
	category: 'Heroic',
	article: '',
})

export const Versatility = {
	name: 'Versatile Combatant',
	level: 1,
	maxLevel: 2,
	requires: Exp.name,
	requiresHero: Gamora.name,
	description () {
		let levelTexts = ['<strong>Setup:</strong> Put a <strong>Martial Prowess</strong> or a <strong>Sense of Justice</strong> into play.',
			'<strong>Setup:</strong> Put both a <strong>Martial Prowess</strong> and a <strong>Sense of Justice</strong> into play.']
		
		return levelTexts[this.level-1]
	},
	levelUpMessage () {
		return 'Get both <strong>Martial Prowess</strong> and <strong>Sense of Justice</strong>'
	}
}

export const DeadlistWoman = {
	name: 'Deadliest Woman In The Galaxy',
	level: 1,
	maxLevel: 3,
	requires: Exp.name,
	requiresHero: Gamora.name,
	numToSearch (level: number) : number {
		return 4 + (level-1) * 2
	},
	numToKeep (level: number) : number {
		return level
	},
	description () {
		const numToSearch = this.numToSearch(this.level)
		const numToKeep = this.numToKeep(this.level)
		let keepsies = numToKeep == 1 ? 'an Event card' : numToKeep + ' Event cards'
		let article = numToKeep == 1 ? 'it' : 'them'
		return `<strong>Setup:</strong> Search the top ${numToSearch} cards of your deck for ${keepsies}. Add ${article} to your hand and shuffle your deck.`
	},
	levelUpMessage () {
		return `Cards to search: ${this.numToSearch(this.level)} becomes <strong>${this.numToSearch((this.level+1))}</strong>
		<br />
		Event cards to keep: ${this.numToKeep(this.level)} becomes <strong>${this.numToKeep((this.level+1))}</strong>`
	},
	category: 'Heroic'
}

export const Upgrades = [
	ConditioningRoom,
	KeenInstincts,
	GamorasSword,
	Versatility,
	DeadlistWoman
]