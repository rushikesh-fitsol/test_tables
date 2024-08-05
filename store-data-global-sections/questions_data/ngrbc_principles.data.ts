import type { Prisma } from "@prisma/client";
import { stringify } from "../utils";


export const NGRBC_principles: Prisma.QuestionsCreateManyInput[] = [
    {
        "quid": 219,
        "description": "Does the firm have policies?",
        name: "does_the_firm_have_policies",
        // "answerSchema": "Drop down with each Principle with Y/N - Form link - https://docs.google.com/spreadsheets/d/1IPfwCKSeoicF6HexJMFtjHmRTY99xZSNO9vyaE91tuQ/edit#gid=334419878&range=A1",
        answerSchema: "{}",
        "scoreGuide": "No Score",

    },
    {
        "quid": 220,
        "description": "Do the policy/policies cover each principle and its core elements of the NGRBCs. (Yes/No)",
        name: "policies_cover_each_principle_and_its_core_elements_of_the_NGRBCs",
        // "answerSchema": "Drop down with each Principle with Y/N - Form link - https://docs.google.com/spreadsheets/d/1IPfwCKSeoicF6HexJMFtjHmRTY99xZSNO9vyaE91tuQ/edit#gid=334419878&range=A1",
        answerSchema: stringify({
            type: "fixedtable",
            version: "1.0",
            column_headers: [
                [
                    {
                        id: "P1", name: "P1", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P2", name: "P2", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P3", name: "P3", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P4", name: "P4", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P5", name: "P5", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P6", name: "P6", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P7", name: "P7", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P8", name: "P8", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P9", name: "P9", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    }

                ],
            ],
            rows_headers: [
                [
                    { id: "1", name: "1" }
                ]
            ],
            key_map: {
                columns: ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9"],
                rows: ["1"]
            }

        }),
        "scoreGuide": "3 for covering all Principles; 2 for covering principles>5; 1 for covering principles> 3; 0 for Not Reported",
        "esg": "G",
        "max_essential_indicators_score": 3,
        "max_leadership_indicators_score": 0
    },
    {
        "quid": 221,
        "description": "Has the policy been approved by the Board? (Yes/No)",
        name: "has_the_policy_been_approved_by_the_board",
        answerSchema: stringify({
            type: "fixedtable",
            version: "1.0",
            column_headers: [
                [
                    {
                        id: "P1", name: "P1", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P2", name: "P2", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P3", name: "P3", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P4", name: "P4", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P5", name: "P5", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P6", name: "P6", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P7", name: "P7", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P8", name: "P8", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P9", name: "P9", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    }
                ],
            ],
            rows_headers: [
                [
                    { id: "1", name: "1" }
                ]
            ],
            key_map: {
                columns: ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9"],
                rows: ["1"]
            }

        }),
        "scoreGuide": "No score",
    },
    {
        "quid": 222,
        "description": "Web Link of the Policies, if available",
        name: "policy_web_links",
        // "answerSchema": "Weblink against each policy mentioned",
        answerSchema: stringify({
            type: "fixedtable",
            version: "1.0",
            column_headers: [
                [
                    { id: "P1", name: "P1" },
                    { id: "P2", name: "P2" },
                    { id: "P3", name: "P3" },
                    { id: "P4", name: "P4" },
                    { id: "P5", name: "P5" },
                    { id: "P6", name: "P6" },
                    { id: "P7", name: "P7" },
                    { id: "P8", name: "P8" },
                    { id: "P9", name: "P9" }
                ],
            ],
            rows_headers: [
                [
                    { id: "1", name: "1" }
                ]
            ],
            key_map: {
                columns: ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9"],
                rows: ["1"]

            }

        }),
        "scoreGuide": "No score",
    },
    {
        "quid": 223,
        "description": "Has the entity turned the policies related to NGRBC into procedures? (Yes / No)",
        name: "entity_turned_policies_related_to_NGRBC_into_procedures",
        // "answerSchema": "Dropdown with Y/N",
        answerSchema: stringify({
            type: "fixedtable",
            version: "1.0",
            column_headers: [
                [
                    {
                        id: "P1", name: "P1", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P2", name: "P2", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P3", name: "P3", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P4", name: "P4", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P5", name: "P5", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P6", name: "P6", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P7", name: "P7", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P8", name: "P8", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P9", name: "P9", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    }
                ],
            ],
            rows_headers: [
                [
                    { id: "1", name: "1" }
                ]
            ],
            key_map: {
                columns: ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9"],
                rows: ["1"]
            }

        }),
        "scoreGuide": "1 for Yes; 0 for No",
        "esg": "G",
        "max_essential_indicators_score": 1,
        "max_leadership_indicators_score": 0
    },
    {
        "quid": 224,
        "description": "Do the policies also apply to your value chain partners? (Yes/No)",
        name: "",
        // "answerSchema": "Dropdown with Y/N",
        answerSchema: stringify({
            type: "fixedtable",
            version: "1.0",
            column_headers: [
                [
                    {
                        id: "P1", name: "P1", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P2", name: "P2", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P3", name: "P3", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P4", name: "P4", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P5", name: "P5", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P6", name: "P6", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P7", name: "P7", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P8", name: "P8", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    },
                    {
                        id: "P9", name: "P9", fieldType: {
                            type: "dropdown",
                            version: "1.0",
                            options: [
                                {
                                    id: "Yes",
                                    label: "Yes"
                                },
                                {
                                    id: "No",
                                    label: "No"
                                }
                            ]
                        }
                    }
                ],
            ],
            rows_headers: [
                [
                    { id: "1", name: "1" }
                ]
            ],
            key_map: {
                columns: ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9"],
                rows: ["1"]
            }

        }),
        "scoreGuide": "1 for Yes; 0 for No",
        "esg": "G",
        "max_essential_indicators_score": 1,
        "max_leadership_indicators_score": 0
    },
    {
        "quid": 225,
        "description": "Mention the name of the national and international codes/ certifications/ labels/ standards (e.g. Forest Stewardship Council, Fairtrade, Rainforest Alliance, Trustea) standards (e.g. SA 8000, OHSAS, ISO, BIS) adopted by your entity and mapped to each principle.",
        name: "national_and_international_codes_certifications_labels_standards",
        // "answerSchema": "Dropdown with each principle mentioned numerically and text box per Principle to add the certifications",
        answerSchema: stringify({
            type: "dynamictable",
            version: "1.0",
            column_headers: [
                { id: "P1", name: "P1" },
                { id: "P2", name: "P2" },
                { id: "P3", name: "P3" },
                { id: "P4", name: "P4" },
                { id: "P5", name: "P5" },
                { id: "P6", name: "P6" },
                { id: "P7", name: "P7" },
                { id: "P8", name: "P8" },
                { id: "P9", name: "P9" }
            ],
            key_map: {
                columns: ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9"]
            }
        }),
        "scoreGuide": "3 for adopting and mapping for all Principles; 2 for >5; 1 for > 3; 0 for Not Reported",
        "esg": "G",
        "max_essential_indicators_score": 3,
        "max_leadership_indicators_score": 0
    },
    {
        "quid": 226,
        "description": "Mention Specific commitments, goals and targets set by your firm with defined timelines, if any.",
        name: "specific_commitments_goals_and_targets",
        // "answerSchema": "Multiple Long Paragraphs. This answer can be combined as multiple principles can come under 1 initiative",
        answerSchema: stringify({
            type: "fixedtable",
            version: "1.0",
            column_headers: [
                [
                    { id: "P1", name: "P1", fieldType: { type: "text" } },
                    { id: "P2", name: "P2", fieldType: { type: "text" } },
                    { id: "P3", name: "P3", fieldType: { type: "text" } },
                    { id: "P4", name: "P4", fieldType: { type: "text" } },
                    { id: "P5", name: "P5", fieldType: { type: "text" } },
                    { id: "P6", name: "P6", fieldType: { type: "text" } },
                    { id: "P7", name: "P7", fieldType: { type: "text" } },
                    { id: "P8", name: "P8", fieldType: { type: "text" } },
                    { id: "P9", name: "P9", fieldType: { type: "text" } }
                ],
            ],
            rows_headers: [
                [{ id: "1", name: "1" }]
            ],
            key_map: {
                columns: ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9"],
                rows: ["1"]
            }

        }),
        "scoreGuide": "1 for Yes; 0 for No",
        "esg": "G",
        "max_essential_indicators_score": 1,
        "max_leadership_indicators_score": 0
    },
    {
        "quid": 227,
        "description": "What is the performance of the organisation against the specific commitments, goals and targets committed to, along-with reasons in case the same are not met.",
        name: "performance_of_the_organisation_against_the_specific_commitments_goals_and_targets",
        // "answerSchema": "Multiple Long Paragraphs. This answer can be combined as multiple principles can come under 1 initiative",
        answerSchema: stringify({
            type: "fixedtable",
            version: "1.0",
            column_headers: [
                [
                    { id: "P1", name: "P1", fieldType: { type: "text" } },
                    { id: "P2", name: "P2", fieldType: { type: "text" } },
                    { id: "P3", name: "P3", fieldType: { type: "text" } },
                    { id: "P4", name: "P4", fieldType: { type: "text" } },
                    { id: "P5", name: "P5", fieldType: { type: "text" } },
                    { id: "P6", name: "P6", fieldType: { type: "text" } },
                    { id: "P7", name: "P7", fieldType: { type: "text" } },
                    { id: "P8", name: "P8", fieldType: { type: "text" } },
                    { id: "P9", name: "P9", fieldType: { type: "text" } }
                ],
            ],
            rows_headers: [
                [{ id: "1", name: "1" }]
            ],
            key_map: {
                columns: ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9"],
                rows: ["1"]
            }

        }),
        "scoreGuide": "3 for meeting > 80% goals, 2 for meeting 60-80% goals, 1 for meeting 50-60% goals, 0 for <50% goals",
        "esg": "G",
        "max_essential_indicators_score": 3,
        "max_leadership_indicators_score": 0
    },
    {
        "quid": 228,
        "description": "Please provide a statement by the Director responsible for the business responsibility report, highlighting esg related challenges, targets & achievements.",
        "answerSchema": "Multiple Long Paragraphs",
        "scoreGuide": "2 for Reporting of Statement with challenges/targets/ achievements \u2013 2, Partial Reporting \u2013 1, No Reporting",
        "esg": "G",
        "max_essential_indicators_score": 2,
        "max_leadership_indicators_score": 0
    },
    {
        "quid": 229,
        "description": "Give details of the highest authority responsible for implementation & oversight of the Business Responsibility policy (ies).",
        "answerSchema": "Long Paragraph",
        "scoreGuide": "1 for reporting; 0 for Not Reported",
        "esg": "G",
        "max_essential_indicators_score": 1,
        "max_leadership_indicators_score": 0
    },
    {
        "quid": 230,
        "description": "Is there a specific Board Committee or Director in charge of making decisions about sustainability issues at the company? (Yes / No). If yes, provide details.",
        "answerSchema": "Drop Down with Y/N and then long paragraph",
        "scoreGuide": "1 for Yes and Composition specified; 0 for No",
        "esg": "G",
        "max_essential_indicators_score": 1,
        "max_leadership_indicators_score": 0
    },
    {
        "quid": 231,
        "description": "Have you carried out independent assessment/ evaluation of the working of your policies by an external agency? (Yes/No). If yes, provide name of the agency.",
        "answerSchema": "Yes/No or \u2713/\ud83d\uddf4 format against each of the 9 principles with appropriate links to public content & name of the agency responsible for conducting assessment/evaluation.",
        "scoreGuide": "5 for External assessment/ audit; 0 for No assessment",
        "esg": "G",
        "max_essential_indicators_score": 5,
        "max_leadership_indicators_score": 0
    },
    {
        "quid": "",
        "description": "Please indicate if review was undertaken by the Director / Committee of the Board/ Any other Committee for performance against above policies and if any follow-up action was taken",
        "answerSchema": "1) Dropdown with Director / Committee of the Board/ Any other Committee. Provide option to add details against each principle and policy. - Tables for Reporting Cell B22 - K22",
        "scoreGuide": "No score",
        "esg": "",
        "max_essential_indicators_score": "",
        "max_leadership_indicators_score": ""
    },
    {
        "quid": "",
        "description": "Provide description of other committee for performance against above policies and follow up action",
        "answerSchema": "Only ask this question if above question has answer - Any other Committee",
        "scoreGuide": "No score",
        "esg": "",
        "max_essential_indicators_score": "",
        "max_leadership_indicators_score": ""
    },
    {
        "quid": "",
        "description": "Please indicate the frequency of performance review for the above question",
        "answerSchema": "1) Dropdown with Annually/ Half yearly/ Quarterly/ Any other - Tables for Reporting Cell L22 - T22",
        "scoreGuide": "3 Half-Yearly Review, 2 for Annual review; 0 for No review",
        "esg": "G",
        "max_essential_indicators_score": 3,
        "max_leadership_indicators_score": 0
    },
    {
        "quid": "",
        "description": "Provide description of Any other for frequency of review",
        "answerSchema": "Only ask this question if above question has answer - Any other ",
        "scoreGuide": "No score",
        "esg": "",
        "max_essential_indicators_score": "",
        "max_leadership_indicators_score": ""
    },
    {
        "quid": "",
        "description": "Please mention who looks at policies compliance with statutory requirements of relevance to the principles, and, rectification of any non-compliances, from the Director / Committee of the Board/ Any other Committee",
        "answerSchema": "1) Dropdown with Director / Committee of the Board/ Any other Committee. Provide option to add details against each principle and policy. - Tables for Reporting Cell B24 - K24",
        "scoreGuide": "No score",
        "esg": "",
        "max_essential_indicators_score": "",
        "max_leadership_indicators_score": ""
    },
    {
        "quid": "",
        "description": "Provide description of other committee for performance against above policies and follow up action",
        "answerSchema": "Only ask this question if above question has answer - Any other Committee",
        "scoreGuide": "No score",
        "esg": "",
        "max_essential_indicators_score": "",
        "max_leadership_indicators_score": ""
    },
    {
        "quid": "",
        "description": "Please indicate the frequency of compliance review for the above question",
        "answerSchema": "1) Dropdown with Annually/ Half yearly/ Quarterly/ Any other - Tables for Reporting Cell L24 - T24",
        "scoreGuide": "No score",
        "esg": "",
        "max_essential_indicators_score": "",
        "max_leadership_indicators_score": ""
    },
    {
        "quid": "",
        "description": "Provide description of Any other for frequency of review",
        "answerSchema": "Only ask this question if above question has answer - Any other ",
        "scoreGuide": "No score",
        "esg": "",
        "max_essential_indicators_score": "",
        "max_leadership_indicators_score": ""
    }
]