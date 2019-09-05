import { IItem } from './Item';


export enum ContainerStyle
{
    default   = '',
    emphasis  = 'emphasis',
    accent    = 'accent',
    good      = 'good',
    attention = 'attention',
    warning   = 'warning',
}

export enum ContainerSpacing
{
    default = '',
    none    = 'None',
    small   = 'Small',
    medium  = 'Medium',
    large   = 'Large',
    extra   = 'ExtraLarge',
    padding = 'Padding',
}


export interface IContainer
{
    type:     string;
    items:    IItem[];
    bleed?:   boolean;
    style?:   ContainerStyle;
    spacing?: ContainerSpacing;
}


export class Container
{
    private type:     string;
    private items:    IItem[];
    private bleed?:   boolean;
    private style?:   ContainerStyle;
    private spacing?: ContainerSpacing;

    public constructor()
    {
        this.type = 'Container';
        this.items = [];
    }

    public setStyle(style: ContainerStyle): this
    {
        this.style = style;
        return this;
    }

    public setBleed(bleed = true): this
    {
        this.bleed = bleed;
        return this;
    }

    public setSpacing(spacing: ContainerSpacing): this
    {
        this.spacing = spacing;
        return this;
    }

    public addItem(item: IItem): this
    {
        this.items.push(item);
        return this;
    }

    public save(): IContainer
    {
        const container: IContainer = {
            type: this.type,
            items: this.items,
        };

        if (this.style)
            container.style = this.style;

        if (this.bleed)
            container.bleed = this.bleed;

        if (this.spacing)
            container.spacing = this.spacing;

        return container;
    }
}
