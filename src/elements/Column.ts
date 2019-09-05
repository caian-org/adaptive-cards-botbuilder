import { IItem } from './Item';


export enum ColumnWidth
{
    auto    = 'auto',
    stretch = 'stretch',
}

export enum ColumnSpacing
{
    default = '',
    none    = 'None',
    small   = 'Small',
    medium  = 'Medium',
    large   = 'Large',
    extra   = 'ExtraLarge',
    padding = 'Padding',
}

export interface IColumn
{
    type:     string;
    items:    IItem[];
    width?:   ColumnWidth;
    spacing?: ColumnSpacing;
}


export class Column
{
    private type:     string;
    private items:    IItem[];
    private width?:   ColumnWidth;
    private spacing?: ColumnSpacing;

    public constructor()
    {
        this.type = 'Column';
        this.items = [];
    }

    public setWidth(width: ColumnWidth): this
    {
        this.width = width;
        return this;
    }

    public setSpacing(spacing: ColumnSpacing): this
    {
        this.spacing = spacing;
        return this;
    }

    public addItem(item: IItem): this
    {
        this.items.push(item);
        return this;
    }

    public save(): IColumn
    {
        const column: IColumn = {
            type: this.type,
            items: this.items,
        };

        if (this.width)
            column.width = this.width;

        if (this.spacing)
            column.spacing = this.spacing;

        return column;
    }
}
