interface AnswerSchema {
  type: string;
  version: string;
  columns?: Column[];
  rows?: Row[];
  "1x1"?: string;
}

interface Column {
  header: string;
  type: string;
  id: string;
  columns?: Column[];
}

interface Row {
  header: string;
  type: string;
  id: string;
  rows?: Row[];
}


export const answerSchema: AnswerSchema = {
  "type": "table",
  "version": "1.0",
  "columns": [
    {
      "header": "Manager Details",
      "type": "colheader",
      "id": "managerDetails",
      "columns": [
        {
          "header": "Name",
          "type": "colheader",
          "id": "name",
          columns: [
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
  "rows": [
    {
      "header": "M1",
      "type": "rowheader",
      "id": "m1",
      "rows": [
        {
          "header": "S1",
          "type": "rowheader",
          "id": "s1",
          rows: [
            {
              "header": "S3",
              "type": "rowheader",
              "id": "s3",
            }
          ]
        },
        {
          "header": "S2",
          "type": "rowheader",
          "id": "s2",
        }
      ]
    },
    {
      "header": "M2",
      "type": "rowheader",
      "id": "m2",
    }
  ],
  "1x1": "empty"
}



const answer = {
  "version": "1.0",
  "data": [
    {
      "rowId": "m1",
      "rowData": [
        {
          "rowId": "s1",
          "columns": {
            "col_id_for_name": "John Doe",
            "col_id_for_age": 30,
            "col_id_for_mobileNumber": "123-456-7890"
          }
        },
        {
          "rowId": "s2",
          "columns": {
            "col_id_for_name": "Jane Doe",
            "col_id_for_age": 25,
            "col_id_for_mobileNumber": "987-654-3210"
          }
        }
      ]
    },
    {
      "rowId": "m2",
      "columns": {
        "col_id_for_mobileNumber": "111-222-3333"
      }
    }
  ]
}