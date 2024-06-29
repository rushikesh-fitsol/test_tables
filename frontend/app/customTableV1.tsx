"use client"

interface AnswerSchema {
    type: string;
    version: string;
    column_headers?: Column[];
    row_headers?: Row[];
    "1x1"?: string;
}

interface Column {
    header: string;
    type: string;
    id: string;
    column_headers?: Column[];
}

interface Row {
    header: string;
    type: string;
    id: string;
    row_headers?: Row[];
}


export const answerSchema: AnswerSchema = {
    "type": "colheader",
    "version": "1.0",
    "column_headers": [
        {
            "header": "Manager Details",
            "type": "colheader",
            "id": "managerDetails",
            "column_headers": [
                {
                    "header": "Name",
                    "type": "colheader",
                    "id": "name",
                    "column_headers": [
                        {
                            "header": "First Name",
                            "type": "colheader",
                            "id": "firstName"
                        },
                        {
                            "header": "Last Name",
                            "type": "colheader",
                            "id": "lastName"
                        }
                    ]
                },
                {
                    "header": "Age",
                    "type": "colheader",
                    "id": "age"
                },
            ]

        },
        {
            "header": "Mobile Number",
            "type": "colheader",
            "id": "mobileNumber"
        }
    ],
    "row_headers": [
        {
            "header": "M1",
            "type": "rowheader",
            "id": "m1",
            // "row_headers": [
            //     {
            //         "header": "S1",
            //         "type": "rowheader",
            //         "id": "s1"
            //     },
            //     {
            //         "header": "S2",
            //         "type": "rowheader",
            //         "id": "s2",
            //     }
            // ]
        },
        {
            "header": "M2",
            "type": "rowheader",
            "id": "m2",
        }
    ],
}



export function CreateTable({ schema }: { schema: AnswerSchema }) {
    return (
        <table className="border border-black w-full">
            {/* render column_headers */}
            <thead>
                <tr>
                    {schema["1x1"] === "empty" ? (
                        <th className="border border-black"></th>
                    ) : (
                        <th className="border border-black" style={{ width: "1px" }}></th>
                    )}
                    {renderColumns(schema.column_headers!)}
                </tr>
            </thead>
            {/* render row_headers */}
            <tbody>
                {schema.row_headers!.map((row, index) => (
                    <tr key={index}>
                        <th className="border border-black">{row.header}</th>
                        <td className="border border-black" colSpan={schema.column_headers!.length}>
                            {/* {row.header} */}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>


    );
}

function renderColumns(columns: Column[]) {
    return columns.map((column, index) => (
        <th key={index} className="border border-black">
            {column.header}
            {column.column_headers && column.column_headers.length > 0 && (
                <table className="border border-black w-full">
                    <thead>
                        <tr>
                            {renderColumns(column.column_headers)}
                        </tr>
                    </thead>
                </table>
            )}
        </th>
    ));
}

