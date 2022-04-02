import {generateExhaustedCardInPlay, generateUpgradeCard, levelUpMessageIncrease} from "@/lib/upgrades";
import {Hulk as Exp} from "@/consts/expansions";
import {Hulk} from "@/consts/heroes";
import { UpgradeCategory } from "@/types/upgrade";

export const Lab = generateExhaustedCardInPlay({
	name: 'Scientific Mind',
	card: "Banner's Laboratory",
	requires: Exp.name,
	requiresHero: Hulk.name,
	category: "Heroic",
	article: '',
	pronoun: 'it',
})

export const ImmovableObject = generateUpgradeCard({
	name: 'Solid',
	card: 'Immovable Object',
	category: 'Heroic',
	article: '',
	requires: Exp.name,
	requiresHero: Hulk.name,
})

export const GammaRage = {
	name: 'Gamma Fueled Rage',
	numCards (level: number) {
		return level
	},
	description () {
		return `<strong>Setup:</strong> Search your deck for <strong>${this.numCards(this.level)}</strong> copy of <strong>Limitless Strength</strong> and put it in your hand. Shuffle your deck.`
	},
	levelUpMessage () {
		return levelUpMessageIncrease(this.numCards(this.level), this.numCards(this.level+1), 'card')
	},
	level: 1,
	maxLevel: 2,
	category: 'Heroic' as UpgradeCategory,
	requires: Exp.name,
	requiresHero: Hulk.name,
}

export const ExpertOnGamma = {
	name: 'Leading Expert On Gamma Radiation',
	description () {
		return `Increase Bruce Banner's maximum hand size by 1.`
	},
	levelUpMessage () {
		return ''
	},
	level: 1,
	maxLevel: 1,
	category: 'Heroic' as UpgradeCategory,
	requires: Exp.name,
	requiresHero: Hulk.name,
}

export const EverlastingRage = {
	name: 'Everlasting Rage',
	description (){
		return `<strong>Boundless Rage</strong> loses its <strong>Forced Response</strong> text.`
	},
	levelUpMessage () {
		return ''
	},
	level: 1,
	maxLevel: 1,
	category: 'Heroic' as UpgradeCategory,
	requires: Exp.name,
	requiresHero: Hulk.name,
}

export const Upgrades = [Lab,ImmovableObject,GammaRage,ExpertOnGamma,EverlastingRage]