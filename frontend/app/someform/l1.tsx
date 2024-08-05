"use client";

import { useState } from "react";
import { parseSchema } from "./parseSchema";
import { stringify } from "@/types";

function getQuestionsDummy() {
  const data = [
    {
      quid: 133,
      description: "What is the total number of the Board of Directors?",
      // "answerSchema": "Numeric - Take form from this sheet including formulas - https://docs.google.com/spreadsheets/d/1IPfwCKSeoicF6HexJMFtjHmRTY99xZSNO9vyaE91tuQ/edit#gid=272411754&range=A1"
      name: "number of directors",
      answerSchema: stringify({
        type: "number",
        version: "1.0",
      }),
    },
    {
      quid: 134,
      description:
        "What is the total number of women in the Board of Directors?",
      // "answerSchema": ""
      name: "number of women in board of directors",
      answerSchema: stringify({
        type: "number",
        version: "1.0",
      }),
    },
    {
      quid: 135,
      description: "What is the total number of the Key Management Personnel?",
      // "answerSchema": ""
      name: "number of key management personnel",
      answerSchema: stringify({
        type: "number",
        version: "1.0",
      }),
    },
    {
      quid: 136,
      description:
        "What is the total number of women in the Key Management Personnel?",
      // "answerSchema": ""
      name: "number of women in key management personnel",
      answerSchema: stringify({
        type: "number",
        version: "1.0",
      }),
    },
    {
      quid: 137,
      description: "Do you have a Diversity and Inclusion Policy? Y/N",
      // "answerSchema": "Dropdown Y/N"
      name: "is there diversity and inclusition policy?",
      answerSchema: stringify({
        type: "dropdown",
        version: "1.0",
        options: [
          {
            id: "Yes",
            label: "Yes",
          },
          {
            id: "No",
            label: "No",
          },
        ],
      }),
    },
    {
      quid: 138,
      description:
        "What processes are in place to help you foster equitable employee representation?",
      name: "processes to foster equitable employee representation",
      // "answerSchema": "Paragraph format"
      answerSchema: stringify({
        type: "longtext",
        version: "1.0",
      }),
    },
    {
      quid: 139,
      description:
        "Does the firm have an equal opportunity policy as per the relevant Disabilities Act? Mention the relevant Act and provide a web-link to the policy.",
      name: "equal opportunity policy",
      // "answerSchema": "Dropdown with Y/N, If Y then add a line to mention the relevant Act and another line for link toe the policy"
      answerSchema: stringify({
        type: "dropdown",
        version: "1.0",
        options: [
          {
            id: "Yes",
            label: "Yes",
          },
          {
            id: "No",
            label: "No",
          },
        ],
        conditional: {
          Yes: {
            type: "fixedtable",
            version: "1.0",
            rows_headers: [
              [
                { name: "Act", id: "act" },
                { name: "Link", id: "pocicy_link" },
              ],
            ],
            key_map: {
              rows: ["act", "pocicy_link"],
            },
          },
        },
      }),
    },
    {
      quid: 140,
      description:
        "Are the premises / offices of the entity accessible to differently abled employees and workers, as per the requirements of the relevant Disabilities Act,? If not, whether any steps are being taken by the entity in this regard.",
      name: "premises accessibility",
      // "answerSchema": "Dropdown with Y/N, If N then add a paragraph"
      answerSchema: stringify({
        type: "dropdown",
        version: "1.0",
        options: [
          {
            id: "Yes",
            label: "Yes",
          },
          {
            id: "No",
            label: "No",
          },
        ],
        conditional: {
          No: {
            type: "longtext",
            version: "1.0",
          },
        },
      }),
    },
  ];
  return data;
}

type State = {
  [key: number]: {
    [key: string]: any;
  }
};

export default function RenderTable() {
  const data = getQuestionsDummy();
  const qdata = parseSchema(data);

  const [answers, setAnswers] = useState<State>({});

  const handleChange = (quid: number, value: any) => {
    setAnswers({
      ...answers,
      [quid]: value,
    });
  };

  return (
    <>
      {qdata.map((question) => {
        return (
          <div key={question.quid}>
            <p>{question.description}</p>
            {question.answerSchema.type === "number" && (
              <input
                type="number"
                value=
                onChange={(e) => handleChange(question.quid, e.target.value)}
              />
            )}
            {question.answerSchema.type === "dropdown" && (
              <select
                value
                onChange={(e) =>
                  handleChange(question.quid, {
                    ...answers[question.quid],
                    [question.quid]: e.target.value,
                  })
                }
              >
                {question.answerSchema.options.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
            {question.answerSchema.conditional &&
              question.answerSchema.type === "dropdown" && (
                <div>
                  {Object.keys(question.answerSchema.conditional || {}).map(
                    (key) => {
                      const schema = question.answerSchema.conditional?.[key];
                      if (!schema) return null;
                      return (
                        <div key={key}>
                          
                        </div>
                      );
                    },
                  )}
                </div>
              )}

            {question.answerSchema.type === "longtext" && (
              <textarea
                value=
                onChange={(e) => handleChange(question.quid, e.target.value)}
              />
            )}
          </div>
        );
      })}
    </>
  );
}
