import {Drax as Exp} from "@/consts/expansions";
import {Drax} from "@/consts/heroes";
import {generateExhaustedCardInPlay, generateUpgradeCard, generateAllyCard} from "@/lib/upgrades";

export const Knife = generateUpgradeCard({
	name: '"I Like Your Knife"',
	card: `Drax's Knife`,
	requires: Exp.name,
	requiresHero: Drax.name,
	category: 'Heroic',
	article: '',
})

export const OtherKnife = generateUpgradeCard({
	name: '"I\'m Keeping It!"',
	card: `Drax's Other Knife`,
	requires: Exp.name,
	requiresHero: Drax.name,
	category: 'Heroic',
	article: '',
})

export const Mastery = generateUpgradeCard({
	name: '"Show Time, A-holes!"',
	card: `DWI Theet Mastery`,
	requires: Exp.name,
	requiresHero: Drax.name,
	category: 'Heroic',
	article: '',
})

export const Mantis = generateAllyCard({
	name: '"You Are So Hideous!"',
	card: 'Mantis',
	levels: [{
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	requires: Exp.name,
	requiresHero: Drax.name,
	pronoun: 'her',
	category: 'Heroic',
})

export const DraxTheDestroyer : any = {
	name: 'Drax The Destroyer',
	level: 1,
	maxLevel: 3,
	requires: Exp.name,
	requiresHero: Drax.name,
	countersArticle (level: number) : string {
		return level == 1 ? 'counter' : 'counters'
	},
	description () {
		return `Drax can have an additional ${this.level-1} vengeance ${this.countersArticle(this.level)}.`
	},
	levelUpMessage () {
		return `Drax can have <strong>${this.level+1}</strong> additional vengeance counters instead of ' + ${this.level}.`
	},
	category: 'Heroic'
}


export const Upgrades = [
	Knife,
	OtherKnife,
	Mastery,
	Mantis,
	DraxTheDestroyer
]