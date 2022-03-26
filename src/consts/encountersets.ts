import {EncounterSet} from "@/types/encounterset";
import {DF_STEP_LARGE, DF_STEP_SMALL, DF_BASE, DF_STEP_MED, DF_STEP_MASSIVE, DF_STEP_HUGE, DF_STEP_TINY, DF_STEP_ENORMOUS, DF_STEP_COLOSSAL} from "@/consts/difficulty";

// Encounter sets marked as "boss: true" cannot be used as modular sets
// Their difficulty is 0 because the villain's difficulty is set in the villains.ts file

// Helper to create an encounter quickly
function quick(name: string, diff = DF_STEP_SMALL) : EncounterSet {
	const encounter = {
		key: name.replace(' ', ''),
		name: name,
		difficulty: diff,
		boss: false,
	}
	EncounterSetsMap[encounter.key] = encounter
	EncounterSetsList.push(encounter)
	return encounter
}

// Helper to quickly create a villain
function boss(name: string, diffBonus = 0) : EncounterSet {
	const up = {
		key: name.replace(' ', ''),
		name: name,
		difficulty: DF_BASE + diffBonus,
		boss: true,
	}
	EncounterSetsMap[up.key] = up
	EncounterSetsList.push(up)
	return up
}

// Villains
export const Rhino : EncounterSet = {
	key: 'Rhino',
	name: 'Rhino',
	difficulty: 0,
	boss: true
}

export const Ultron : EncounterSet = {
	key: 'Ultron',
	name: 'Ultron',
	difficulty: 0,
	boss: true
}

export const Klaw : EncounterSet = {
	key: 'Klaw',
	name: 'Klaw',
	difficulty: 0,
	boss: true
}

export const RiskyBusiness : EncounterSet = {
	key: 'RiskyBusiness',
	name: 'Risky Business',
	difficulty: 0,
	boss: true
}

export const MutagenFormula : EncounterSet = {
	key: 'MutagenFormula',
	name: 'Mutagen Formula',
	difficulty: 0,
	boss: true
}

export const WreckingCrew : EncounterSet = {
	key: 'WreckingCrew',
	name: 'Wrecking Crew',
	difficulty: 0,
	boss: true,
}

export const Crossbones : EncounterSet = {
	key: 'Crossbones',
	name: 'Crossbones',
	difficulty: 0,
	boss: true,
}

export const AbsorbingMan : EncounterSet = {
	key: 'AbsorbingMan',
	name: 'Absorbing Man',
	difficulty: 0,
	boss: true,
}

export const Taskmaster : EncounterSet = {
	key: 'Taskmaster',
	name: 'Taskmaster',
	difficulty: 0,
	boss: true,
}

export const Zola : EncounterSet = {
	key: 'Zola',
	name: 'Zola',
	difficulty: 0,
	boss: true,
}

export const RedSkull : EncounterSet = {
	key: 'RedSkull',
	name: 'Red Skull',
	difficulty: 0,
	boss: true,
}

export const Kang : EncounterSet = {
	key: 'Kang',
	name: 'Kang',
	difficulty: 0,
	boss: true,
}

export const BrotherhoodOfBadoon : EncounterSet = {
	key: 'BrotherhoodOfBadoon',
	name: 'Brotherhood of Badoon',
	difficulty: 0,
	boss: true,
}

export const InfiltratingTheMuseum : EncounterSet = {
	key: 'InfiltratingTheMuseum',
	name: 'Infiltrating the Museum',
	difficulty: 0,
	boss: true,
}

export const EscapeTheMuseum : EncounterSet = {
	key: 'EscapeTheMuseum',
	name: 'Escape the Museum',
	difficulty: 0,
	boss: true,
}

export const Nebula : EncounterSet = {
	key: 'Nebula',
	name: 'Nebula',
	difficulty: 0,
	boss: true,
}

export const RonanTheAccuser : EncounterSet = {
	key: 'RonanTheAccuser',
	name: 'Ronan the Accuser',
	difficulty: 0,
	boss: true,
}

export const EbonyMaw : EncounterSet = {
	key: 'EbonyMaw',
	name: 'Ebony Maw',
	difficulty: 0,
	boss: true,
}

export const TowerDefense : EncounterSet = {
	key: 'TowerDefense',
	name: 'Tower Defense',
	difficulty: 0,
	boss: true,
}

export const Thanos : EncounterSet = {
	key: 'Thanos',
	name: 'Thanos',
	difficulty: 0,
	boss: true,
}

export const Hela : EncounterSet = {
	key: 'Hela',
	name: 'Hela',
	difficulty: 0,
	boss: true,
}

export const Loki : EncounterSet = {
	key: 'Loki',
	name: 'Loki',
	difficulty: 0,
	boss: true,
}

export const TheHood : EncounterSet = {
	key: 'TheHood',
	name: 'The Hood',
	difficulty: 0,
	boss: true,
}

export const Sandman : EncounterSet = {
	key: 'Sandman',
	name: 'Sandman',
	difficulty: 0,
	boss: true,
}

export const Venom : EncounterSet = {
	key: 'Venom',
	name: 'Venom',
	difficulty: 0,
	boss: true,
}

export const Mysterio : EncounterSet = {
	key: 'Mysterio',
	name: 'Mysterio',
	difficulty: 0,
	boss: true,
}

export const TheSinisterSix : EncounterSet = {
	key: 'TheSinisterSix',
	name: 'The Sinister Six',
	difficulty: 0,
	boss: true,
}

export const VenomGoblin : EncounterSet = {
	key: 'VenomGoblin',
	name: 'Venom Goblin',
	difficulty: 0,
	boss: true,
}

// Modular Sets
export const Expert : EncounterSet = {
	key: 'Expert',
	name: 'Expert',
	difficulty: DF_STEP_LARGE,
	boss: false
}

export const Expert2 : EncounterSet = {
	key: 'Expert2',
	name: 'Expert II',
	difficulty: DF_STEP_HUGE,
	boss: false
}

export const BombScare : EncounterSet = {
	key: 'BombScare',
	name: 'Bomb Scare',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const MastersOfEvil : EncounterSet = {
	key: 'MastersOfEvil',
	name: 'Masters of Evil',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const UnderAttack : EncounterSet = {
	key: 'UnderAttack',
	name: 'Under Attack',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const LegionOfHydra : EncounterSet = {
	key: 'LegionOfHydra',
	name: 'Legion of Hydra',
	difficulty: DF_STEP_LARGE,
	boss: false
}

export const TheDoomsdayChair : EncounterSet = {
	key: 'TheDoomsdayChair',
	name: 'The Doomsday Chair',
	difficulty: DF_STEP_MED,
	boss: false
}

export const GoblinGimmicks : EncounterSet = {
	key: 'GoblinGimmicks',
	name: 'Goblin Gimmicks',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const AMessOfThings : EncounterSet = {
	key: 'AMessOfThings',
	name: 'A Mess of Things',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const PowerDrain : EncounterSet = {
	key: 'PowerDrain',
	name: 'Power Drain',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const RunningInterference : EncounterSet = {
	key: 'RunningInterference',
	name: 'Running Interference',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const KreeFanatic : EncounterSet = {
	key: 'KreeFanatic',
	name: 'Kree Fanatic',
	difficulty: DF_STEP_MASSIVE,
	boss: false
}

export const ExperimentalWeapons : EncounterSet = {
	key: 'ExperimentalWeapons',
	name: 'Experimental Weapons',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const HydraAssault : EncounterSet = {
	key: 'HydraAssault',
	name: 'Hydra Assault',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const HydraPatrol : EncounterSet = {
	key: 'HydraPatrol',
	name: 'Hydra Patrol',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const WeaponMaster : EncounterSet = {
	key: 'WeaponMaster',
	name: 'Weapon Master',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const Temporal : EncounterSet = {
	key: 'Temporal',
	name: 'Temporal',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const MasterOfTime : EncounterSet = {
	key: 'MasterOfTime',
	name: 'Master of Time',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const Anachronauts : EncounterSet = {
	key: 'Anachronauts',
	name: 'Anachronauts',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const BandOfBadoon : EncounterSet = {
	key: 'BandOfBadoon',
	name: 'Band of Badoon',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const MenagerieMedley : EncounterSet = {
	key: 'MenagerieMedley',
	name: 'Menagerie Medley',
	difficulty: DF_STEP_HUGE,
	boss: false
}

export const GalacticArtifacts : EncounterSet = {
	key: 'GalacticArtifacts',
	name: 'Galactic Artifacts',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const SpacePirates : EncounterSet = {
	key: 'SpacePirates',
	name: 'Space Pirates',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const KreeMilitants : EncounterSet = {
	key: 'KreeMilitants',
	name: 'Kree Militants',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const ShipCommand : EncounterSet = {
	key: 'ShipCommand',
	name: 'Ship Command',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const BadoonHeadhunter : EncounterSet = {
	key: 'BadoonHeadhunter',
	name: 'Badoon Headhunter',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const BlackOrder : EncounterSet = {
	key: 'BlackOrder',
	name: 'Black Order',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const ArmiesOfTitan : EncounterSet = {
	key: 'ArmiesOfTitan',
	name: 'Armies of Titan',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const ChildrenOfThanos : EncounterSet = {
	key: 'ChildrenOfThanos',
	name: 'Children of Thanos',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const LegionsOfHel : EncounterSet = {
	key: 'LegionsOfHel',
	name: 'Legions of Hel',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const FrostGiants : EncounterSet = {
	key: 'FrostGiants',
	name: 'Frost Giants',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const Enchantress : EncounterSet = {
	key: 'Enchantress',
	name: 'Enchantress',
	difficulty: DF_STEP_ENORMOUS,
	boss: false
}

export const InfinityGauntlet : EncounterSet = {
	key: 'InfinityGauntlet',
	name: 'Infinity Gauntlet',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const BeastyBoys : EncounterSet = {
	key: 'BeastyBoys',
	name: 'Beasty Boys',
	difficulty: DF_STEP_COLOSSAL,
	boss: false
}

export const BrothersGrimm : EncounterSet = {
	key: 'BrothersGrimm',
	name: 'Brothers Grimm',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const CrossfiresCrew : EncounterSet = {
	key: 'CrossfiresCrew',
	name: 'Crossfire\'s Crew',
	difficulty: DF_STEP_MED,
	boss: false
}

export const MisterHyde : EncounterSet = {
	key: 'MisterHyde',
	name: 'Mister Hyde',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const RansackedArmory : EncounterSet = {
	key: 'RansackedArmory',
	name: 'Ransacked Armory',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const SinisterSyndicate : EncounterSet = {
	key: 'SinisterSyndicate',
	name: 'Sinister Syndicate',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const StateOfEmergency : EncounterSet = {
	key: 'StateOfEmergency',
	name: 'State of Emergency',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const StreetsOfMayhem : EncounterSet = {
	key: 'StreetsOfMayhem',
	name: 'Streets of Mayhem',
	difficulty: DF_STEP_TINY,
	boss: false
}

export const WreckingCrewMod : EncounterSet = {
	key: 'WreckingCrewMod',
	name: 'Wrecking Crew',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const CityInChaos : EncounterSet = {
	key: 'CityInChaos',
	name: 'City in Chaos',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const GoblinGear : EncounterSet = {
	key: 'GoblinGear',
	name: 'Goblin Gear',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const DownToEarth : EncounterSet = {
	key: 'DownToEarth',
	name: 'Down To Earth',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const SymbioticStrength : EncounterSet = {
	key: 'SymbioticStrength',
	name: 'Symbiotic Strength',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const SinisterAssault : EncounterSet = {
	key: 'SinisterAssault',
	name: 'Sinister Assault',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const EncounterSetsMap : Record<string, EncounterSet> = {
	//Villains
	[Rhino.key]: Rhino,
	[Ultron.key]: Ultron,
	[Klaw.key]: Klaw,
	[RiskyBusiness.key]: RiskyBusiness,
	[MutagenFormula.key]: MutagenFormula,
	[WreckingCrew.key]: WreckingCrew,
	[Crossbones.key]: Crossbones,
	[AbsorbingMan.key]: AbsorbingMan,
	[Taskmaster.key]: Taskmaster,
	[Zola.key]: Zola,
	[RedSkull.key]: RedSkull,
	[Kang.key]: Kang,
	[BrotherhoodOfBadoon.key]: BrotherhoodOfBadoon,
	[InfiltratingTheMuseum.key]: InfiltratingTheMuseum,
	[EscapeTheMuseum.key]: EscapeTheMuseum,
	[Nebula.key]: Nebula,
	[RonanTheAccuser.key]: RonanTheAccuser,
	[EbonyMaw.key]: EbonyMaw,
	[TowerDefense.key]: TowerDefense,
	[Thanos.key]: Thanos,
	[Hela.key]: Hela,
	[Loki.key]: Loki,
	[TheHood.key]: TheHood,
	[Sandman.key]: Sandman,
	[Venom.key]: Venom,
	[Mysterio.key]: Mysterio,
	[TheSinisterSix.key]: TheSinisterSix,
	[VenomGoblin.key]: VenomGoblin,
	
	// Modular
	[Expert.key]: Expert,
	[Expert2.key]: Expert2,
	[BombScare.key]: BombScare,
	[MastersOfEvil.key]: MastersOfEvil,
	[UnderAttack.key]: UnderAttack,
	[LegionOfHydra.key]: LegionOfHydra,
	[TheDoomsdayChair.key]: TheDoomsdayChair,
	[GoblinGimmicks.key]: GoblinGimmicks,
	[AMessOfThings.key]: AMessOfThings,
	[PowerDrain.key]: PowerDrain,
	[RunningInterference.key]: RunningInterference,
	[KreeFanatic.key]: KreeFanatic,
	[ExperimentalWeapons.key]: ExperimentalWeapons,
	[HydraAssault.key]: HydraAssault,
	[HydraPatrol.key]: HydraPatrol,
	[WeaponMaster.key]: WeaponMaster,
	[Temporal.key]: Temporal,
	[MasterOfTime.key]: MasterOfTime,
	[Anachronauts.key]: Anachronauts,
	[BandOfBadoon.key]: BandOfBadoon,
	[MenagerieMedley.key]: MenagerieMedley,
	[GalacticArtifacts.key]: GalacticArtifacts,
	[SpacePirates.key]: SpacePirates,
	[KreeMilitants.key]: KreeMilitants,
	[ShipCommand.key]: ShipCommand,
	[BadoonHeadhunter.key]: BadoonHeadhunter,
	[BlackOrder.key]: BlackOrder,
	[ArmiesOfTitan.key]: ArmiesOfTitan,
	[ChildrenOfThanos.key]: ChildrenOfThanos,
	[LegionsOfHel.key]: LegionsOfHel,
	[FrostGiants.key]: FrostGiants,
	[Enchantress.key]: Enchantress,
	[InfinityGauntlet.key]: InfinityGauntlet,
	[BeastyBoys.key]: BeastyBoys,
	[BrothersGrimm.key]: BrothersGrimm,
	[CrossfiresCrew.key]: CrossfiresCrew,
	[MisterHyde.key]: MisterHyde,
	[RansackedArmory.key]: RansackedArmory,
	[SinisterSyndicate.key]: SinisterSyndicate,
	[StateOfEmergency.key]: StateOfEmergency,
	[StreetsOfMayhem.key]: StreetsOfMayhem,
	[WreckingCrewMod.key]: WreckingCrewMod,
	[CityInChaos.key]: CityInChaos,
	[GoblinGear.key]: GoblinGear,
	[DownToEarth.key]: DownToEarth,
	[SymbioticStrength.key]: SymbioticStrength,
	[SinisterAssault.key]: SinisterAssault
}

export let EncounterSetsList = Object.keys(EncounterSetsMap).map(key => EncounterSetsMap[key])

EncounterSetsList = EncounterSetsList.sort((a,b) => {
	return a.name < b.name ? -1 : 1
})
