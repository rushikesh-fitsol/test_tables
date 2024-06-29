import prisma from "./db/db";




const forms = [{
    name: "BRSR",
    description: "Basic Rapid Survey Report",
    region: "India",
},
{
    name: "CDP",
    description: "Community Development Project",
    region: "India",
}]

const sections = [{
    name: "Section 1",
    description: "Section 1 Description",
    formId: 1
},
{
    name: "Section 2",
    description: "Section 2 Description",
    formId: 1
},
{
    name: "Section 3",
    description: "Section 3 Description",
    formId: 2
},
{
    name: "Section 4",
    description: "Section 4 Description",
    formId: 2
}]

// model Question {
//   id          Int @id @default (autoincrement())
//   name        String
//   description String ?
//         createdAt   DateTime @default (now())
//   updatedAt   DateTime @updatedAt
//   sections    QuestionSection[]
//   Answer      Answer[]
// }

const questions = [{
    name: "Question 1",
    description: "Question 1 Description",
    answerSchema: JSON.stringify({
        type: "Static",
    })
},
{
    name: "Question 2",
    description: "Question 2 Description",
    answerSchema: JSON.stringify({
        type: 'FixedTable',
        columns: ["Column1", "Column2"],
        rows: ["Row1", "Row2"],
    })
},
{
    name: "Question 3",
    description: "Question 3 Description",
    answerSchema: JSON.stringify({
        type: 'DynamicTable',
        columns: ["Product", "Price", "Quantity"],
    })
},
{
    name: "Question 4",
    description: "Question 4 Description",
    answerSchema: JSON.stringify({
        type: "Static"
    })
}]

// model QuestionSectionForm {
//   id         Int @id @default (autoincrement())
//   questionId Int
//   sectionId  Int
//   question   Question @relation(fields: [questionId], references: [id])
//   section    Section @relation(fields: [sectionId], references: [id])
//   createdAt  DateTime @default (now())
//   updatedAt  DateTime @updatedAt
// }

const questionSections = [{
    questionId: 1,
    sectionId: 1,
},
{
    questionId: 2,
    sectionId: 1,
},
{
    questionId: 3,
    sectionId: 2,
},
{
    questionId: 4,
    sectionId: 2,
},
// {
//     questionId: 1,
//     sectionId: 3,
// },
{
    questionId: 2,
    sectionId: 3,
},
{
    questionId: 3,
    sectionId: 4,
},
{
    questionId: 4,
    sectionId: 4,
}]

// model Answer {
//   id         Int @id @default (autoincrement())
//   // who answered the question, thus the client id
//   clientId   Int
//   // the value of the answer, e.g. "Yes", "1", "{ "name": "John", "age": 30 }", 
//   // a stringified JSON
//   value      String
//   questionId Int
//   question   Question @relation(fields: [questionId], references: [id])
//   createdAt  DateTime @default (now())
//   updatedAt  DateTime @updatedAt

//     @@unique([clientId, questionId])
// }

const answers = [{
    clientId: 1,
    value: JSON.stringify("Yes"),
    questionId: 1
},
{
    clientId: 1,
    // fixed table, can be mapped with question using question table
    value: JSON.stringify(
        [
            ["Value1", "Value2"],
            ["Value3", "Value4"]
        ]

    ),
    questionId: 2
},
{
    clientId: 1,
    // dynamic table, can be mapped with question using question table
    value: JSON.stringify(
        [
            ["Laptop", 1200, 5],
            ["Smartphone", 700, 10]
        ]
    ),
    questionId: 3
},
{
    clientId: 1,
    value: JSON.stringify("No"),
    questionId: 4
},
{
    clientId: 2,
    value: JSON.stringify("Yes"),
    questionId: 1
},
{
    clientId: 2,
    value: JSON.stringify("No"),
    questionId: 2
},
{
    clientId: 2,
    value: JSON.stringify("Yes"),
    questionId: 3
},
{
    clientId: 2,
    value: JSON.stringify("No"),
    questionId: 4
}]


const answers_old = [{
    clientId: 1,
    value: JSON.stringify({
        type: "Static",
        value: "Yes"
    }),
    questionId: 1
},
{
    clientId: 1,
    value: JSON.stringify({
        type: 'FixedTable',
        // we don't even need the rows and columns, we can just use the data array
        // if we are using questions table
        columns: ["Column1", "Column2"],
        rows: ["Row1", "Row2"],
        // data: {
        // 1st way
        // "Row1": { "Column1": "Value1", "Column2": "Value2" },
        // "Row2": { "Column1": "Value3", "Column2": "Value4" }

        // 2nd way, more optimized as it doesn't require the column names to be repeated
        // "Row1": ["Value1", "Value2"],
        // "Row2": ["Value3", "Value4"],
        // }
        data: [
            [["Value1", "Value2"], ["Value3", "Value4"]]
        ]
    }),
    questionId: 2
},
{
    clientId: 1,
    value: JSON.stringify({
        type: 'DynamicTable',
        // here as well, we don't need the columns, we can just use the data array
        columns: ["Product", "Price", "Quantity"],
        data: [
            ["Laptop", 1200, 5],
            ["Smartphone", 700, 10]
        ]
    }),
    questionId: 3
},
{
    clientId: 1,
    value: JSON.stringify({
        type: "Static",
        value: "No"
    }),
    questionId: 4
},
{
    clientId: 2,
    value: JSON.stringify({
        type: "Static",
        value: "Yes"
    }),
    questionId: 1
},
{
    clientId: 2,
    value: JSON.stringify({
        type: "Static",
        value: "No"
    }),
    questionId: 2
},
{
    clientId: 2,
    value: JSON.stringify({
        type: "Static",
        value: "Yes"
    }),
    questionId: 3
},
{
    clientId: 2,
    value: JSON.stringify({
        type: "Static",
        value: "No"
    }),
    questionId: 4
}]



export async function populate() {
    console.log("Populating data...");

    for (const form of forms) {
        await prisma.form.create({
            data: form
        });
    }

    for (const section of sections) {
        await prisma.section.create({
            data: section
        });
    }

    for (const question of questions) {
        await prisma.question.create({
            data: question
        });
    }

    for (const questionSection of questionSections) {
        await prisma.questionSection.create({
            data: questionSection
        });
    }

    for (const answer of answers) {
        await prisma.answer.create({
            data: answer
        });
    }

    console.log("Data populated");
}


// export async function compress_populate() {
//     console.log("Populating data...");

//     for (const form of forms) {
//         await prisma.form.create({
//             data: form
//         });
//     }

//     for (const section of sections) {
//         await prisma.section.create({
//             data: section
//         });
//     }

//     for (const question of questions) {
//         await prisma.question.create({
//             data: question
//         });
//     }

//     for (const questionSection of questionSections) {
//         await prisma.questionSection.create({
//             data: questionSection
//         });
//     }

//     for (const answer of answers) {
//         await prisma.answer.create({
//             data: answer
//         });
//     }

//     console.log("Data populated");
// }

