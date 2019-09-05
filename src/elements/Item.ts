export enum ItemType
{
    textBlock = 'TextBlock',
}

export enum ItemSize
{
    default = '',
    small   = 'Small',
    medium  = 'Medium',
    large   = 'Large',
    extra   = 'ExtraLarge',
}

export enum ItemWeight
{
    default = '',
    lighter = 'Lighter',
    bolder  = 'Bolder',
}

export enum ItemAlignment
{
    left   = 'Left',
    center = 'Center',
    right  = 'Right',
}

export enum ItemColor
{
    default   = '',
    dark      = 'Dark',
    light     = 'Light',
    accent    = 'Accent',
    good      = 'Good',
    warning   = 'Warning',
    attention = 'Attention',
}


export interface IItem
{
    type:       string;
    text?:      string;
    wrap?:      boolean;
    separator?: boolean;
    isSubtle?:  boolean;
    size?:      ItemSize;
    color?:     ItemColor;
    weight?:    ItemWeight;
    horizontalAlignment?: ItemAlignment;
}


export class Item
{
    private type:       string;
    private text?:      string;
    private wrap?:      boolean;
    private separator?: boolean;
    private isSubtle?:  boolean;
    private size?:      ItemSize;
    private color?:     ItemColor;
    private weight?:    ItemWeight;
    private horizontalAlignment?: ItemAlignment;

    public constructor(type: string)
    {
        this.type = type;
    }

    public setText(text: string): this
    {
        this.text = text;
        return this;
    }

    public setSize(size: ItemSize): this
    {
        this.size = size;
        return this;
    }

    public setWeight(weight: ItemWeight): this
    {
        this.weight = weight;
        return this;
    }

    public setColor(color: ItemColor): this
    {
        this.color = color;
        return this;
    }

    public setHorizontalAlignment(alignment: ItemAlignment): this
    {
        this.horizontalAlignment = alignment;
        return this;
    }

    public itIsWrapped(wrap = true): this
    {
        this.wrap = wrap;
        return this;
    }

    public hasSeparation(separator = true): this
    {
        this.separator = separator;
        return this;
    }

    public itIsSubtle(subtle = true): this
    {
        this.isSubtle = subtle;
        return this;
    }

    public save(): IItem
    {
        const item: IItem = {
            type: this.type,
        };

        if (this.text)
            item.text = this.text;

        if (this.size)
            item.size = this.size;

        if (this.weight)
            item.weight = this.weight;

        if (this.wrap)
            item.wrap = this.wrap;

        if (this.separator)
            item.separator = this.separator;

        if (this.color)
            item.color = this.color;

        if (this.horizontalAlignment)
            item.horizontalAlignment = this.horizontalAlignment;

        if (this.isSubtle)
            item.isSubtle = this.isSubtle;

        return item;
    }
}
