"use client"

import { useState } from "react";

interface AnswerSchema {
    type: string; // "static" | "table"
    version: string;
    column_headers_row_wise: (ColumnHeader | null)[][];
    rows_headers: RowHeader[][];
    key_map: {
        columns: string[]
        rows: string[]
    }
}

interface ColumnHeader {
    name: string;
    id: string;
    style?: { colspan?: number, rowspan?: number };
}

interface RowHeader {
    name: string;
    id: string;
    style?: { colspan?: number, rowspan?: number };
}

export const ExampleDynamicTableSchema: AnswerSchema = {
    "type": "colheader",
    "version": "1.0",
    "column_headers_row_wise": [
        // c1, c2
        [
            null,
            null,
            { "name": "c1", "id": "c1", "style": { colspan: 4 } },
            { "name": "c2", "id": "c2", "style": { colspan: 2 } },

        ],
        // c3, c4, c5, c6
        [
            null,
            null,
            { "name": "c3", "id": "c3", style: { colspan: 2 } },
            { "name": "c4", "id": "c4", style: { colspan: 2 } },
            { "name": "c5", "id": "c5", style: { colspan: 1, rowspan: 2 } },
            { "name": "c6", "id": "c6", style: { colspan: 1, rowspan: 2 } },
        ],
        // c7, c8, c9, c10
        [
            null,
            null,
            { "name": "c7", "id": "c7" },
            { "name": "c8", "id": "c8" },
            { "name": "c9", "id": "c9" },
            { "name": "c10", "id": "c10" },
        ],
    ],

    "rows_headers": [
        // row1
        [
            { "name": "r1", "id": "r1", "style": { rowspan: 2 } },
            { "name": "r2", "id": "r2" },
        ],
        // row2
        [
            // { "name": "", "id": "r1" }, // empty cell, we can use null as well or same row id
            { "name": "r3", "id": "r3" },
        ],
        // row3
        [
            { "name": "r4", "id": "r4", "style": { rowspan: 2 } },
            { "name": "r5", "id": "r5" },
        ],
        // row4
        [
            // null, // empty cell
            { "name": "r6", "id": "r6" },
        ],
        [
            {name: "r7", id: "r7", style: {colspan: 2}}
        ]
    ],

    "key_map": {
        columns: ["c7", "c8", "c9", "c10", "c5", "c6"],
        rows: ["r2", "r3", "r5", "r6"]
    }
}


interface RenderColumnsProps {
    columns: (ColumnHeader | null)[][];
    rowDepth: number;
    colDepth: number;
}

function RenderColumns({ columns, rowDepth, colDepth }: RenderColumnsProps) {
    console.log("columns", columns);
    console.log("rowDepth", rowDepth);
    console.log("colDepth", colDepth);
    return (
        <>

            {columns.map((row, i) => {
                return (
                    <tr key={i}>
                        {/* <th colSpan={2}></th> */}
                        {row.map((col, j) => {
                            if (!col) return (
                                <th key={j}>
                                    {null}
                                </th>
                            )
                            return (
                                <th
                                    key={col.id}
                                    className="border border-black"
                                    colSpan={col.style?.colspan}
                                    rowSpan={col.style?.rowspan}
                                >
                                    {col.name}
                                </th>
                            )
                        })}
                    </tr>
                )
            })}
        </>
    );
}

// function RenderRows_withspantrack({ schema, rowDepth, colDepth }: { schema: AnswerSchema, rowDepth: number, colDepth: number }) {
//     const rowspanTracker: { [key: string]: number } = {};

//     return (
//         <>
//             {schema.rows_headers.map((row, rowIndex) => (
//                 <tr key={rowIndex}>
//                     {row.map((cell, cellIndex) => {
//                         if (rowspanTracker[`${cellIndex}`] > 0) {
//                             rowspanTracker[`${cellIndex}`]--;
//                             return null;
//                         }

//                         if (cell.style?.rowspan) {
//                             rowspanTracker[`${cellIndex}`] = cell.style.rowspan - 1;
//                         }

//                         return (
//                             <th
//                                 key={cell.id}
//                                 className="border border-black"
//                                 colSpan={cell.style?.colspan}
//                                 rowSpan={cell.style?.rowspan}
//                             >
//                                 {cell.name}
//                             </th>
//                         );
//                     })}
//                 </tr>
//             ))}
//         </>
//     );
// }

interface RenderRowHeadersAndFieldsProps {
    schema: AnswerSchema;
    rowDepth: number;
    colDepth: number;
    fields: { [key: string]: any };
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Renders row wise by keeping track of row ids
 */
function RenderRowHeadersAndFields({ schema, rowDepth, colDepth, fields, handleInputChange }: RenderRowHeadersAndFieldsProps) {
    // Keep track of rendered row ids, can be removed if row ids are unique and we use null for empty cells
    // const renderedIds = new Set<string>();

    return (
        <>
            {schema.rows_headers.map((row, rowIndex) => {
                const lastRowId = row[row.length - 1].id;
                return (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => {
                            // if (cell == null) {
                            //     return null;
                            // }
                            // console.log(cell.id);
                            // if (renderedIds.has(cell.id)) {
                            //     return null;
                            // }
                            // renderedIds.add(cell.id);
                            return (
                                <th
                                    key={cell.id}
                                    className="border border-black"
                                    colSpan={cell.style?.colspan}
                                    rowSpan={cell.style?.rowspan}
                                >
                                    {cell.name}
                                </th>
                            );
                        })}
                        {/* {lastRowId && ( */}
                        <RenderFields schema={schema} rowId={lastRowId} fields={fields} handleInputChange={handleInputChange} />
                        {/* )} */}
                    </tr>
                )
            })}
        </>
    )
}

interface RenderFieldsProps {
    schema: AnswerSchema;
    rowId: string;
    fields: { [key: string]: any };
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/** 
 * Renders row wise
 */
function RenderFields({ schema, rowId, fields, handleInputChange }: RenderFieldsProps) {
    return (
        <>
            {schema.key_map.columns.map((colId, colIndex) => {
                const key = `${colId}_${rowId}`; // eg. c7_r2, c8_r2, 
                return (
                    <td key={colIndex} className="border border-black">
                        <input
                            type="text"
                            id={key}
                            value={fields[key]}
                            onChange={handleInputChange}
                            className="border border-black"
                            placeholder="Enter value"
                        />
                    </td>
                );
            })}
        </>
    );
}


export const CreateTableDyn = ({ schema }: { schema: AnswerSchema }) => {
    const colDepth = schema.column_headers_row_wise.length;
    const rowDepth = schema.rows_headers.length; // 

    // Initialize state with empty strings for all fields
    const initializeState = () => {
        const initialState: { [key: string]: any } = {};
        schema.key_map.columns.forEach((col) => {
            schema.key_map.rows.forEach((row) => {
                const key = `${col}_${row}`; // e.g. c1_r1
                initialState[key] = '';
            });
        });
        return initialState;
    };

    const [fields, setFields] = useState(initializeState()); // e.g. { c1_r1: 'v1', c2_r2: "v2" }

    const data = JSON.stringify(fields)


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, id } = event.target;
        console.log(name, value, id)
        setFields({
            ...fields,
            [id]: value,
        });
    };

    return (
        <div className="m-10">
            <table className="border border-black w-full">
                <thead>
                    <RenderColumns columns={schema.column_headers_row_wise} rowDepth={rowDepth} colDepth={colDepth} />
                </thead>
                <tbody>
                    <RenderRowHeadersAndFields schema={schema} rowDepth={rowDepth} colDepth={colDepth} fields={fields} handleInputChange={handleInputChange} />
                </tbody>
            </table>
        </div >
    )
}


export function CreateTableHardcoded() {
    return (
        <div className="m-10">
            <table className="border border-black w-full">
                <thead>
                    <tr className="">
                        <th colSpan={1}></th>
                        <th className="border border-black" colSpan={3}>FY 2019</th>
                        <th className="border border-black" colSpan={3}>FY 2020</th>
                    </tr>
                    <tr className="border border-black ">
                        <th colSpan={1}></th>
                        <th className="border border-black">no. of male</th>
                        <th className="border border-black">no. of female</th>
                        <th className="border border-black">no. of total</th>
                        <th className="border border-black">no. of male</th>
                        <th className="border border-black">no. of female</th>
                        <th className="border border-black">no. of total</th>
                    </tr>


                </thead>
                <tbody>
                    <tr>
                        <th className="border border-black">M1</th>
                        <td className="border border-black">1</td>
                        <td className="border border-black">2</td>
                        <td className="border border-black">3</td>
                        <td className="border border-black">4</td>
                        <td className="border border-black">2</td>
                        <td className="border border-black">3</td>

                    </tr>
                    <tr>
                        <th className="border border-black">M2</th>
                        <td className="border border-black">5</td>
                        <td className="border border-black">6</td>
                        <td className="border border-black">7</td>
                        <td className="border border-black">8</td>
                        <td className="border border-black">2</td>
                        <td className="border border-black">3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
