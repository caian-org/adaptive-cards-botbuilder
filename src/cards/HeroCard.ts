import { ActionTypes } from 'botbuilder';


export interface IHeroCardOption
{
    title: string;
    value: string;
    type: ActionTypes;
}

export interface IHeroCard
{
    title: string;
    message: string;
    images: string[];
    options: IHeroCardOption[];
}


export class HeroCard
{
    private title: string;
    private message: string;
    private images: string[];
    private options: IHeroCardOption[];
    private defaultOptionType: ActionTypes;

    public constructor()
    {
        this.title = '';
        this.message = '';
        this.images = [];
        this.options = [];
        this.defaultOptionType = ActionTypes.OpenUrl;
    }

    public setTitle(title: string): this
    {
        this.title = title;
        return this;
    }

    public setMessage(message: string): this
    {
        this.message = message;
        return this;
    }

    public setDefaultOptionType(type: ActionTypes): this
    {
        this.defaultOptionType = type;
        return this;
    }

    public addImage(imageUrl: string): this
    {
        this.images.push(imageUrl);
        return this;
    }

    public addOption(title: string, value: string, type = this.defaultOptionType): this
    {
        const option: IHeroCardOption = { title, value, type };
        this.options.push(option);

        return this;
    }

    public save(): IHeroCard
    {
        const card: IHeroCard = {
            title:   this.title,
            message: this.message,
            images:  this.images,
            options: this.options,
        };

        return card;
    }
}
