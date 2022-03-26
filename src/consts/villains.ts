import {Villain} from "@/types/villain";
import {EncounterSetsMap} from "@/consts/encountersets";
import {DF_BASE, DF_STEP_COLOSSAL, DF_STEP_ENORMOUS, DF_STEP_HUGE, DF_STEP_LARGE, DF_STEP_MASSIVE, DF_STEP_MED, DF_STEP_SMALL, DF_STEP_TINY} from "@/consts/difficulty";

export const Rhino : Villain = {
	name: 'Rhino',
	key: 'Rhino',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.Rhino.key]
}

export const Klaw : Villain = {
	name: 'Klaw',
	key: 'Klaw',
	difficulty: DF_BASE + DF_STEP_LARGE,
	sets: [EncounterSetsMap.Klaw.key]
}

export const Ultron : Villain = {
	name: 'Ultron',
	difficulty: DF_BASE + DF_STEP_COLOSSAL,
	key: 'Ultron',
	sets: [EncounterSetsMap.Ultron.key]
}

export const NormanOsborn : Villain = {
	name: 'Norman Osborn',
	key: 'NormanOsborn',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.RiskyBusiness.key]
}

export const GreenGoblin : Villain = {
	name: 'Green Goblin',
	key: 'GreenGoblin',
	difficulty: DF_BASE + DF_STEP_HUGE + DF_STEP_HUGE,
	sets: [EncounterSetsMap.MutagenFormula.key]
}

export const WreckingCrew : Villain = {
	name: 'Wrecking Crew',
	key: 'WreckingCrew',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.WreckingCrew.key],
	noExtraSets: true
}

export const Crossbones : Villain = {
	name: 'Crossbones',
	key: 'Crossbones',
	difficulty: DF_BASE + DF_STEP_TINY,
	sets: [EncounterSetsMap.Crossbones.key]
}

export const AbsorbingMan : Villain = {
	name: 'Absorbing Man',
	key: 'AbsorbingMan',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.AbsorbingMan.key]
}

export const Taskmaster : Villain = {
	name: 'Taskmaster',
	key: 'Taskmaster',
	difficulty: DF_BASE + DF_STEP_LARGE,
	sets: [EncounterSetsMap.Taskmaster.key]
}

export const Zola : Villain = {
	name: 'Zola',
	key: 'Zola',
	difficulty: DF_BASE + DF_STEP_HUGE + DF_STEP_ENORMOUS,
	sets: [EncounterSetsMap.Zola.key]
}

export const RedSkull : Villain = {
	name: 'Red Skull',
	key: 'RedSkull',
	difficulty: DF_BASE + DF_STEP_COLOSSAL + DF_STEP_MASSIVE,
	sets: [EncounterSetsMap.RedSkull.key]
}

export const Kang : Villain = {
	name: 'The Once and Future Kang',
	key: 'Kang',
	difficulty: DF_BASE + DF_STEP_COLOSSAL + DF_STEP_TINY,
	sets: [EncounterSetsMap.Kang.key]
}

export const Drang : Villain = {
	name: 'Brotherhood of Badoon',
	key: 'Drang',
	difficulty: DF_BASE + DF_STEP_LARGE,
	sets: [EncounterSetsMap.BrotherhoodOfBadoon.key]
}

export const Infiltrate : Villain = {
	name: 'Infiltrate the Museum',
	key: 'Infiltrate',
	difficulty: DF_BASE + DF_STEP_HUGE,
	sets: [EncounterSetsMap.InfiltratingTheMuseum.key]
}

export const Escape : Villain = {
	name: 'Escape the Museum',
	key: 'Escape',
	difficulty: DF_BASE + DF_STEP_COLOSSAL + DF_STEP_TINY,
	sets: [EncounterSetsMap.EscapeTheMuseum.key]
}

export const Nebula : Villain = {
	name: 'Nebula',
	key: 'Nebula',
	difficulty: DF_BASE + DF_STEP_COLOSSAL + DF_STEP_COLOSSAL + DF_STEP_TINY,
	sets: [EncounterSetsMap.Nebula.name]
}

export const Ronan : Villain = {
	name: 'Ronan',
	key: 'Ronan',
	difficulty: DF_BASE + DF_STEP_COLOSSAL + DF_STEP_COLOSSAL + DF_STEP_MASSIVE,
	sets: [EncounterSetsMap.RonanTheAccuser.key]
}

export const EbonyMaw : Villain = {
	name: 'Ebony Maw',
	key: 'EbonyMaw',
	difficulty: DF_BASE + DF_STEP_MASSIVE,
	sets: [EncounterSetsMap.EbonyMaw.key]
}

export const Tower : Villain = {
	name: 'Tower Defense',
	key: 'Tower',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.TowerDefense.key]
}

export const Thanos : Villain = {
	name: 'Thanos',
	key: 'Thanos',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.Thanos.key]
}

export const Hela : Villain = {
	name: 'Hela',
	key: 'Hela',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.Hela.key]
}

export const Loki : Villain = {
	name: 'Loki',
	key: 'Loki',
	difficulty: DF_BASE + DF_STEP_MASSIVE + DF_STEP_MASSIVE,
	sets: [EncounterSetsMap.Loki.key]
}

export const TheHood : Villain = {
	name: 'TheHood',
	key: 'The Hood',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.TheHood.key]
}

export const Sandman : Villain = {
	name: 'Sandman',
	key: 'Sandman',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.Sandman.key]
}

export const Venom : Villain = {
	name: 'Venom',
	key: 'Venom',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.Venom.key]
}

export const Mysterio : Villain = {
	name: 'Mysterio',
	key: 'Mysterio',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.Mysterio.key]
}

export const TheSinisterSix : Villain = {
	name: 'The Sinister Six',
	key: 'TheSinisterSix',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.TheSinisterSix.key]
}

export const VenomGoblin : Villain = {
	name: 'Venom Goblin',
	key: 'VenomGoblin',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.VenomGoblin.key]
}

export const VillainsMap : Record<string, Villain> = {
	[Rhino.key]: Rhino,
	[Klaw.key]: Klaw,
	[Ultron.key]: Ultron,
	[NormanOsborn.key]: NormanOsborn,
	[GreenGoblin.key]: GreenGoblin,
	[WreckingCrew.key]: WreckingCrew,
	[Crossbones.key]: Crossbones,
	[AbsorbingMan.key]: AbsorbingMan,
	[Taskmaster.key]: Taskmaster,
	[Zola.key]: Zola,
	[RedSkull.key]: RedSkull,
	[Kang.key]: Kang,
	[Drang.key]: Drang,
	[Infiltrate.key]: Infiltrate,
	[Escape.key]: Escape,
	[Nebula.key]: Nebula,
	[Ronan.key]: Ronan,
	[EbonyMaw.key]: EbonyMaw,
	[Tower.key]: Tower,
	[Thanos.key]: Thanos,
	[Hela.key]: Hela,
	[Loki.key]: Loki,
	[TheHood.key]: TheHood,
	[Sandman.key]: Sandman,
	[Venom.key]: Venom,
	[Mysterio.key]: Mysterio,
	[TheSinisterSix.key]: TheSinisterSix,
	[VenomGoblin.key]: VenomGoblin,
	
}

export const VillainsList = Object.keys(VillainsMap).map(key => VillainsMap[key]).sort((a,b) => {
	return a.name < b.name ? -1 : 1
})

