interface AlphanumericSchema {
    type: "alphanumeric";
}

interface DropdownSchema {
    type: "dropdown";
    options: { id: string, label: string }[];
}

interface DateSchema {
    type: "date";
}

interface TextSchema {
    type: "text";
}

interface LongTextSchema {
    type: "longtext";
}

interface FixedTableSchema {
    type: "fixedtable";
    column_headers: (ColumnHeader | null)[][];
    rows_headers: RowHeader[][];
    key_map: {
        columns: string[];
        rows: string[];
    }
}

interface DynamicTableSchema {
    type: "dynamictable";
    column_headers: ColumnHeader[];
    key_map: {
        columns: string[];
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

export type AnswerSchema = (
    AlphanumericSchema |
    FixedTableSchema |
    DynamicTableSchema |
    TextSchema |
    LongTextSchema |
    DateSchema |
    DropdownSchema
) & {
    version: string;
}

export const ExampleDynamicTableSchema: AnswerSchema = {
    "type": "fixedtable",
    "version": "1.0",
    "column_headers": [
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
            { name: "r7", id: "r7", style: { colspan: 2 } }
        ]
    ],

    "key_map": {
        columns: ["c7", "c8", "c9", "c10", "c5", "c6"],
        rows: ["r2", "r3", "r5", "r6"]
    }
}
