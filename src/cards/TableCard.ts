import {
    Item,
    IItem,
    ItemType,
    ItemSize,
    ItemWeight,
    ItemAlignment,
    ItemColor,
} from '../elements/Item';

import { ColumnSet } from '../elements/ColumnSet';
import { IColumn, Column, ColumnWidth } from '../elements/Column';
import { IContainer, Container, ContainerStyle } from '../elements/Container';


export interface ITableCard
{
    type: string;
    $schema: string;
    version: string;
    body: any[];
}


export class TableCard
{
    private type: string;
    private schema: string;
    private version: string;
    private body: any[];
    private columns: IColumn[];

    private title?: IContainer;
    private description?: IContainer;

    public constructor()
    {
        this.type    = 'AdaptiveCard';
        this.schema  = 'http://adaptivecards.io/schemas/adaptive-card.json';
        this.version = '1.0';
        this.body    = [];

        this.columns = [];
    }

    public setTitle(text: string): this
    {
        const title = new Item(ItemType.textBlock)
            .setSize(ItemSize.extra)
            .setWeight(ItemWeight.bolder)
            .setHorizontalAlignment(ItemAlignment.center)
            .itIsWrapped()
            .setText(text)
            .save();

        const column = new Column()
            .setWidth(ColumnWidth.stretch)
            .addItem(title)
            .save();

        const set = new ColumnSet()
            .addColumn(column)
            .save();

        this.title = new Container()
            .setStyle(ContainerStyle.emphasis)
            .setBleed(true)
            .addItem(set)
            .save();

        return this;
    }

    public setDescription(text: string): this
    {
        const description = new Item(ItemType.textBlock)
            .setSize(ItemSize.medium)
            .setText(text)
            .itIsWrapped()
            .itIsSubtle()
            .save();

        const column = new Column()
            .setWidth(ColumnWidth.stretch)
            .addItem(description)
            .save();

        const set = new ColumnSet()
            .addColumn(column)
            .save();

        this.description = new Container()
            .addItem(set)
            .save();

        return this;
    }

    public addColumn(title: string, ...rows: string[]): this
    {
        const i = (t: string, isHeader = false): IItem => {
            const item = new Item(ItemType.textBlock).setText(t);

            if (isHeader) {
                item.setSize(ItemSize.medium)
                    .setWeight(ItemWeight.bolder)
                    .setColor(ItemColor.accent);
            }
            else {
                item.hasSeparation();
            }

            return item.save();
        };

        const column = new Column().setWidth(ColumnWidth.auto);

        // header
        column.addItem(i(title, true));

        // rows
        rows.forEach((t: string): void => { column.addItem(i(t)); });

        this.columns.push(column.save());

        return this;
    }

    public save(): ITableCard
    {
        const separator = new Container().save();

        const table = new ColumnSet()
            .addMultipleColumns(this.columns)
            .save();

        this.body = [this.title, this.description, separator, table];

        const card: ITableCard = {
            type: this.type,
            version: this.version,
            $schema: this.schema,
            body: this.body,
        };

        return card;
    }
}
