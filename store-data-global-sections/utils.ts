import type { AnswerSchema } from "./types";

export function stringify(obj: AnswerSchema): string {
    return JSON.stringify(obj);
}