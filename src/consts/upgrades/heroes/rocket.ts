import {generateAllyCard, generateCounterCardInPlay, generateUpgradeCard,generateExhaustedCardInPlay} from "@/lib/upgrades";
import {GalaxysMostWanted} from "@/consts/expansions";
import {RocketRaccoon} from "@/consts/heroes";
import {Upgrade} from "@/types/upgrade";

export const BatteryPack = generateUpgradeCard({
	name: 'Charge em up!',
	card: `Battery Pack`,
	requires: GalaxysMostWanted.name,
	requiresHero: RocketRaccoon.name,
	category: 'Heroic',
	article: '',
	copies: 2,
	exhausted: true,
})

export const CyberneticSkeleton = generateUpgradeCard({
	name: 'Ain\'t Nothing Like Me \'Cept Me!',
	card: `Cybernetic Skeleton`,
	requires: GalaxysMostWanted.name,
	requiresHero: RocketRaccoon.name,
	category: 'Heroic',
	article: '',
})

export const ParticleCannon = generateCounterCardInPlay({
	name: 'When Things Get Really Hardcore',
	card: 'Particle Cannon',
	they: 'It',
	pronoun: 'it',
	requires: GalaxysMostWanted.name,
	requiresHero: RocketRaccoon.name,
	category: 'Heroic',
	extraCounters: {
		1: 0,
		2: 1,
		3: 2,
	},
	exhausted: true,
})

export const RocketsPistol = generateUpgradeCard({
	name: 'Time Is Best Spent Shooting At People',
	card: `Rocket's Pistol`,
	requires: GalaxysMostWanted.name,
	requiresHero: RocketRaccoon.name,
	category: 'Heroic',
	article: '',
	copies: 2,
	exhausted: true,
})

export const RocketLauncher = generateCounterCardInPlay({
	name: 'Or If You Wanna Blow Up Moons',
	card: 'Rocket Launcher',
	they: 'It',
	pronoun: 'it',
	requires: GalaxysMostWanted.name,
	requiresHero: RocketRaccoon.name,
	category: 'Heroic',
	extraCounters: {
		1: 0,
		2: 1,
		3: 2,
	},
	exhausted: true,
})

export const ThrusterBoots = generateUpgradeCard({
	name: 'Can\'t Catch Me!',
	card: `Thruster Boots`,
	requires: GalaxysMostWanted.name,
	requiresHero: RocketRaccoon.name,
	category: 'Heroic',
	article: '',
})

export const Upgrades : Upgrade[] = [
	CyberneticSkeleton,
	ThrusterBoots,
	RocketsPistol,
	RocketLauncher,
	ParticleCannon,
	BatteryPack,
]