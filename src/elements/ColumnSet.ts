import { IColumn } from './Column';


export interface IColumnSet
{
    type:    string;
    columns: IColumn[];
}


export class ColumnSet
{
    private type:    string;
    private columns: IColumn[];

    public constructor()
    {
        this.type = 'ColumnSet';
        this.columns = [];
    }

    public addColumn(column: IColumn): this
    {
        this.columns.push(column);
        return this;
    }

    public addMultipleColumns(columns: IColumn[]): this
    {
        this.columns = this.columns.concat(columns);
        return this;
    }

    public save(): IColumnSet
    {
        const columnSet: IColumnSet = {
            type: this.type,
            columns: this.columns,
        };

        return columnSet;
    }
}
