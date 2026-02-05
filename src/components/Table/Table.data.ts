import type { ITableColumn, ITableRow } from "./Table.types";

export const memberColumns: ITableColumn[] = [
    { id: 'id', label: 'Id', align: 'center' },
    { id: 'name', label: 'Nom', align: 'center' },
    { id: 'riotId', label: 'Riot Id', align: 'center' },
    { id: 'role', label: 'Rôle', align: 'center' },
    { id: 'lane', label: 'Lane', align: 'center' },
    { id: 'status', label: 'Statut', align: 'center' },
    { id: 'team', label: 'Équipe', align: 'center' },
];

function createMember(id: number, name: string, riotId: string, role: string, lane: string, status: string, team: string): ITableRow {
    return { id, name, riotId, role, lane, status, team };
}

export const memberRows: ITableRow[] = [
    createMember(1, 'Julo', 'Lil skinny#5814', 'Joueur', 'Mid', 'Lock', 'Équipe 1'),
    createMember(2, 'Slayer', 'René la castagne#BWD', 'Joueur', 'Top', 'Lock', 'Équipe 1'),
    createMember(3, 'Mao', 'Mao#ALMAB', 'Joueur', 'Adc', 'Lock', 'Équipe 1'),
    createMember(4, 'Gnomnom', 'Guigz to GM#Gnom', 'Joueur', 'Jungle', 'Lock', 'Équipe 1'),
    createMember(5, 'Jay', 'Ëdelgard#SUPP', 'Coach', 'Support', 'Lock', 'Équipe 1'),
    createMember(6, 'Kryder', 'Kryder#777', 'Coach', 'Adc', 'Lock', 'Équipe 1'),
];