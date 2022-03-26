import {Hero} from "@/types/hero";
import {CoreSet, GalaxysMostWanted, MadTitansShadow, RiseOfRedSkull, SinisterMotives} from "@/consts/expansions";

// CORE SET CYCLE
export const BlackPanther : Hero = {
	name: 'Black Panther',
	requires: CoreSet.name,
	startingHP: 11,
}

export const CaptainMarvel : Hero = {
	name: 'Captain Marvel',
	requires: CoreSet.name,
	startingHP: 12,
}

export const IronMan : Hero = {
	name: 'Iron Man',
	requires: CoreSet.name,
	startingHP: 9,
}

export const SheHulk : Hero = {
	name: 'She-Hulk',
	requires: CoreSet.name,
	startingHP: 15,
}

export const SpiderMan : Hero = {
	name: 'Spider-Man (Peter)',
	requires: CoreSet.name,
	startingHP: 10,
}

export const CaptainAmerica : Hero = {
	name: 'Captain America',
	requires: 'Captain America',
	startingHP: 11,
}

export const MsMarvel : Hero = {
	name: 'Ms. Marvel',
	requires: 'Ms. Marvel',
	startingHP: 19,
}

export const Thor : Hero = {
	name: 'Thor',
	requires: 'Thor',
	startingHP: 14,
}

export const BlackWidow : Hero = {
	name: 'Black Widow',
	requires: 'Black Widow',
	startingHP: 9,
}

export const DoctorStrange : Hero = {
	name: 'Doctor Strange',
	requires: 'Doctor Strange',
	startingHP: 10,
}

export const Hulk : Hero = {
	name: 'Hulk',
	requires: 'Hulk',
	startingHP: 18,
}

// THE RISE OF RED SKULL CYCLE
export const Hawkeye : Hero = {
	name: 'Hawkeye',
	startingHP: 9,
	requires: RiseOfRedSkull.name,
}

export const SpiderWoman : Hero = {
	name: 'Spider-Woman',
	startingHP: 11,
	requires: RiseOfRedSkull.name,
}

export const AntMan : Hero = {
	name: 'Ant-Man',
	requires: 'Ant-Man',
	startingHP: 0,
}

export const Wasp : Hero = {
	name: 'Wasp',
	requires: 'Wasp',
	startingHP: 0,
}

export const Quicksilver : Hero = {
	name: 'Quicksilver',
	requires: 'Quicksilver',
	startingHP: 0,
}

export const ScarletWitch : Hero = {
	name: 'Scarlet Witch',
	requires: 'Scarlet Witch',
	startingHP: 10,
}


// GALAXY'S MOST WANTED CYCLE
export const RocketRaccoon : Hero = {
	name: 'Rocket Raccoon',
	requires: GalaxysMostWanted.name,
	startingHP: 0,
}

export const Groot : Hero = {
	name: 'Groot',
	requires: GalaxysMostWanted.name,
	startingHP: 0,
}

export const StarLord : Hero = {
	name: 'Star-Lord',
	requires: 'Star-Lord',
	startingHP: 0,
}

export const Gamora : Hero = {
	name: 'Gamora',
	requires: 'Gamora',
	startingHP: 0,
}

export const Drax : Hero = {
	name: 'Drax',
	requires: 'Drax',
	startingHP: 0,
}

export const Venom : Hero = {
	name: 'Venom',
	requires: 'Venom',
	startingHP: 0,
}

// THE MAD TITAN'S SHADOW CYCLE
export const AdamWarlock : Hero = {
	name: 'Adam Warlock',
	requires: MadTitansShadow.name,
	startingHP: 0,
}

export const Spectrum : Hero = {
	name: 'Spectrum',
	requires: MadTitansShadow.name,
	startingHP: 0,
}

export const Nebula : Hero = {
	name: 'Nebula',
	requires: 'Nebula',
	startingHP: 0,
}

export const WarMachine : Hero = {
	name: 'War Machine',
	requires: 'War Machine',
	startingHP: 0,
}

export const Valkyrie : Hero = {
	name: 'Valkyrie',
	requires: 'Valkyrie',
	startingHP: 0,
}

export const Vision : Hero = {
	name: 'Vision',
	requires: 'Vision',
	startingHP: 0,
}

// SINISTER MOTIVES CYCLE
export const GhostSpider : Hero = {
	name: 'Ghost-Spider',
	requires: SinisterMotives.name,
	startingHP: 0,
}

export const SpiderMorales : Hero = {
	name: 'Spider-Man (Miles)',
	requires: SinisterMotives.name,
	startingHP: 0,
}

export const Nova : Hero = {
	name: 'Nova',
	requires: 'Nova',
	startingHP: 0,
}

export const Ironheart : Hero = {
	name: 'Ironheart',
	requires: 'Ironheart',
	startingHP: 0,
}

export const HeroesMap : Record<string, Hero> = {
	[BlackPanther.name]: BlackPanther,
	[CaptainMarvel.name]: CaptainMarvel,
	[IronMan.name]: IronMan,
	[SheHulk.name]: SheHulk,
	[SpiderMan.name]: SpiderMan,

	[CaptainAmerica.name]: CaptainAmerica,
	[MsMarvel.name]: MsMarvel,
	[Thor.name]: Thor,
	[BlackWidow.name]: BlackWidow,
	[DoctorStrange.name]: DoctorStrange,
	[Hulk.name]: Hulk,

	[Hawkeye.name]: Hawkeye,
	[SpiderWoman.name]: SpiderWoman,

	[AntMan.name]: AntMan,
	[Wasp.name]: Wasp,
	[Quicksilver.name]: Quicksilver,
	[ScarletWitch.name]: ScarletWitch,

	[RocketRaccoon.name]: RocketRaccoon,
	[Groot.name]: Groot,

	[StarLord.name]: StarLord,
	[Gamora.name]: Gamora,
	[Drax.name]: Drax,
	[Venom.name]: Venom,

	[AdamWarlock.name]: AdamWarlock,
	[Spectrum.name]: Spectrum,

	[Nebula.name]: Nebula,
	[WarMachine.name]: WarMachine,
	[Valkyrie.name]: Valkyrie,
	[Vision.name]: Vision,

	[GhostSpider.name]: GhostSpider,
	[SpiderMorales.name]: SpiderMorales,

	[Nova.name]: Nova,
	[Ironheart.name]: Ironheart
}

export const HeroesList = Object.keys(HeroesMap).
	map(key => {
		HeroesMap[key].cssClass = HeroesMap[key].name.split(' ').join('-').toLowerCase()
		return HeroesMap[key]
	}).
	sort((a,b) => {
		return a.name < b.name ? -1 : 1
	})
