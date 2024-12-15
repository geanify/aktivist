export type TProdus = {
    nume: string,
    pret: string,
    nonAlcoholic?: boolean,
    vegetarian?: boolean,
    picant?: number,
    ingrediente?: string
}

export enum EProduse {
    BAUTURA = 0,
    MANCARE = 1
}

export type TCategorieProdus = {
    categorie: string,
    icon?: string,
    tip: EProduse,
    produse: TProdus[],
}


