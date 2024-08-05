import { AnswerSchema } from "@/types";

interface Data {
    quid: number;
    description: string;
    name: string;
    answerSchema: string;
}[]

interface ParsedData {
    quid: number;
    description: string;
    name: string;
    answerSchema: AnswerSchema;
}[]

export const parseSchema = (data: Data[]): ParsedData[] => {
    return data.map((question) => {
        const answerSchema = JSON.parse(question.answerSchema)
        return {
            ...question,
            answerSchema
        }
    })
}

