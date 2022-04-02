import {generateExhaustedCardInPlay} from "@/lib/upgrades";
import {GalaxysMostWanted} from "@/consts/expansions";
import {Groot} from "@/consts/heroes";
import {Upgrade} from "@/types/upgrade";

export const FertileGround = generateExhaustedCardInPlay({
	name: 'I... am... Groot.',
	card: `Fertile Ground`,
	requires: GalaxysMostWanted.name,
	requiresHero: Groot.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const EntanglingVines = generateExhaustedCardInPlay({
	name: 'I am. GROOT!',
	card: `Entangling Vines`,
	requires: GalaxysMostWanted.name,
	requiresHero: Groot.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const LashingVines = generateExhaustedCardInPlay({
	name: 'I AM. Groot.',
	card: `Lashing Vines`,
	requires: GalaxysMostWanted.name,
	requiresHero: Groot.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const VineShield = generateExhaustedCardInPlay({
	name: 'I am Groot?',
	card: `Vine Shield`,
	requires: GalaxysMostWanted.name,
	requiresHero: Groot.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const VineSpikes = generateExhaustedCardInPlay({
	name: 'I am... GROOT!',
	card: `Vine Spikes`,
	requires: GalaxysMostWanted.name,
	requiresHero: Groot.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const DeftFocus = generateExhaustedCardInPlay({
	name: 'I... am Groot?',
	card: `Deft Focus`,
	requires: GalaxysMostWanted.name,
	requiresHero: Groot.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const Upgrades : Upgrade[] = [
	FertileGround,
	EntanglingVines,
	LashingVines,
	VineShield,
	VineSpikes,
    DeftFocus
]