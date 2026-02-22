export interface IMember {
    id: number;
    name: string;
    riotId: string;
    role: Array<string>;
    lane: string;
    status: string;
    teams: Array<ITeam>;
};

export interface ITeam {
    id: number;
    name: string;
    players: Array<IMember>;
    coachs: Array<IMember>;
};