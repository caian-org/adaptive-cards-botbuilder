import { CardFactory } from 'botbuilder';

import {
    Activity,
    Attachment as Att
} from 'botbuilder-core';

import { IHeroCard } from './cards/HeroCard';

export * from './elements/Column';
export * from './elements/ColumnSet';
export * from './elements/Container';
export * from './elements/Item';

export * from './cards/HeroCard';
export * from './cards/TableCard';


export class Attachment
{
    private attachments: Att[];

    public constructor()
    {
        this.attachments = [];
    }

    public addAdaptiveCard(adaptiveCard: any): this
    {
        const card = CardFactory.adaptiveCard(adaptiveCard);
        this.attachments.push(card);

        return this;
    }

    public addHeroCard(card: IHeroCard): this
    {
        const heroCard = CardFactory.heroCard(card.title, card.message, card.images, card.options);
        this.attachments.push(heroCard);

        return this;
    }

    public save(): Partial<Activity>
    {
        return { attachments: this.attachments };
    }
}
