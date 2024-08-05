import type { Prisma } from "@prisma/client";
import { stringify } from "../utils";
import { answerSchema } from "../../dynamictable";


export const occupational_health_n_safety: Prisma.QuestionsCreateManyInput[] = [
    {
        "quid": 188,
        "description": "Mention if an occupational health & safety management system has been implemented by the entity.",
        name: "implemented_occupational_health_safety_management_system",
        // "answerSchema": "Dropdown with Y/N"
        answerSchema: stringify({
            type: "dropdown",
            version: "1.0",
            options: [
                {
                    label: "Yes",
                    id: "Yes",
                },
                {
                    label: "No",
                    id: "No"
                }
            ]
        })
    },
    {
        "quid": 189,
        "description": "If above is answer, please mention what is the total coverage of the health and safety management system?",
        name: "total_coverage_of_the_health_and_safety_management_system",
        // "answerSchema": "Paragraph Format"
        answerSchema: stringify({
            type: "text",
            version: "1.0",
        })
    },
    {
        "quid": 190,
        "description": "How do you identify work-related hazards and assess risks on a regular and non-regular basis?",
        name: "identify_work_related_hazards_and_assess_risks",
        // "answerSchema": "Paragraph Format"
        answerSchema: stringify({
            type: "text",
            version: "1.0",
        })
    },
    {
        "quid": 191,
        "description": "Mention the measures taken to ensure a safe and healthy work place",
        name: "measures_taken_to_ensure_a_safe_and_healthy_work_place",
        // "answerSchema": "Long Paragraph"
        answerSchema: stringify({
            type: "text",
            version: "1.0",
        })
    },
    {
        "quid": 192,
        "description": "Do you have procedures in place for employees to report work-related hazards and to remove themselves from such risks? (Y/N)",
        name: "procedures_in_place_for_employees_to_report_work_related_hazards",
        // "answerSchema": "Dropdown with Y/N and then long paragraph format"
        answerSchema: stringify({
            type: "dropdown",
            version: "1.0",
            options: [
                {
                    label: "Yes",
                    id: "Yes",
                },
                {
                    label: "No",
                    id: "No"
                }
            ]
        })
    },
    {
        "quid": 193,
        "description": "Do the employees/ worker of the entity have access to non-occupational medical and healthcare services? (Y/N)",
        name: "employees_worker_of_the_entity_have_access_to_non_occupational_medical_and_healthcare_services",
        // "answerSchema": "Dropdown with Y/N and then long paragraph format"
        answerSchema: stringify({
            type: "dropdown",
            version: "1.0",
            options: [
                {
                    label: "Yes",
                    id: "Yes",
                },
                {
                    label: "No",
                    id: "No"
                }
            ]
        })
    },
    {
        "quid": 194,
        "description": "Have you had any safety related incidents in the current FY?",
        name: "safety_related_incidents_in_the_current_FY",
        // "answerSchema": "Dropdown with Y/N"
        answerSchema: stringify({
            type: "dropdown",
            version: "1.0",
            options: [
                {
                    label: "Yes",
                    id: "Yes",
                },
                {
                    label: "No",
                    id: "No"
                }
            ]
        })
    },
    {
        "quid": 195,
        "description": "Have you had any safety related incidents in the previous FY?",
        name: "safety_related_incidents_in_the_previous_FY",
        // "answerSchema": "Dropdown with Y/N"
        answerSchema: stringify({
            type: "dropdown",
            version: "1.0",
            options: [
                {
                    label: "Yes",
                    id: "Yes",
                },
                {
                    label: "No",
                    id: "No"
                }
            ]
        })
    },
    {
        "quid": 196,
        "description": "Mention if an occupational health & safety management system has been implemented by the entity.",
        name: "implemented_occupational_health_safety_management_system",
        // "answerSchema": "Dropdown with Y/N"
        answerSchema: stringify({
            type: "dropdown",
            version: "1.0",
            options: [
                {
                    label: "Yes",
                    id: "Yes",
                },
                {
                    label: "No",
                    id: "No"
                }
            ]
        })
    },
    {
        "quid": 197,
        "description": "If above is answer, please mention what is the total coverage of the health and safety management system?",
        name: "total_coverage_of_the_health_and_safety_management_system",
        // "answerSchema": "Paragraph Format"
        answerSchema: stringify({
            type: "text",
            version: "1.0",
        })
    },
    {
        "quid": 198,
        "description": "How do you identify work-related hazards and assess risks on a regular and non-regular basis?",
        name: "identify_work_related_hazards_and_assess_risks",
        // "answerSchema": "Paragraph Format"
        answerSchema: stringify({
            type: "text",
            version: "1.0",
        })
    },
    {
        "quid": 199,
        "description": "Mention the measures taken to ensure a safe and healthy work place",
        name: "measures_taken_to_ensure_a_safe_and_healthy_work_place",
        // "answerSchema": "Long Paragraph"
        answerSchema: stringify({
            type: "text",
            version: "1.0",
        })
    },
    {
        "quid": 200,
        "description": "Do you have procedures in place for employees to report work-related hazards and to remove themselves from such risks? (Y/N)",
        name: "procedures_in_place_for_employees_to_report_work_related_hazards",
        // "answerSchema": "Dropdown with Y/N and then long paragraph format"
        answerSchema: stringify({
            type: "dropdown",
            version: "1.0",
            options: [
                {
                    label: "Yes",
                    id: "Yes",
                },
                {
                    label: "No",
                    id: "No"
                }
            ]
        })
    },
    {
        "quid": 201,
        "description": "Do the employees/ worker of the entity have access to non-occupational medical and healthcare services? (Y/N)",
        name: "employees_worker_of_the_entity_have_access_to_non_occupational_medical_and_healthcare_services",
        // "answerSchema": "Dropdown with Y/N and then long paragraph format"
        answerSchema: stringify({
            type: "dropdown",
            version: "1.0",
            options: [
                {
                    label: "Yes",
                    id: "Yes",
                },
                {
                    label: "No",
                    id: "No"
                }
            ]
        })
    },
    {
        "quid": 202,
        "description": "Have you had any safety related incidents in the current FY?",
        name: "safety_related_incidents_in_the_current_FY",
        // "answerSchema": "Dropdown with Y/N"
        answerSchema: stringify({
            type: "dropdown",
            version: "1.0",
            options: [
                {
                    label: "Yes",
                    id: "Yes",
                },
                {
                    label: "No",
                    id: "No"
                }
            ]
        })
    },
    {
        "quid": 203,
        "description": "What are the total recordable work-related injuries for workers in the previous FY?",
        name: "total_recordable_work_related_injuries_for_workers_in_the_previous_FY",
        // "answerSchema": "Number"
        answerSchema: stringify({
            type: "number",
            version: "1.0",
        })
    },
    {
        "quid": 204,
        "description": "What are the No. of fatalities amongst employees in the current FY?",
        name: "No_of_fatalities_amongst_employees_in_the_current_FY",
        // "answerSchema": "Number"
        answerSchema: stringify({
            type: "number",
            version: "1.0",
        })
    },
    {
        "quid": 205,
        "description": "What are the No. of fatalities amongst workers in the current FY?",
        name: "No_of_fatalities_amongst_workers_in_the_current_FY",
        // "answerSchema": "Number"
        answerSchema: stringify({
            type: "number",
            version: "1.0",
        })
    },
    {
        "quid": 206,
        "description": "What are the No. of fatalities amongst employees in the previous FY?",
        name: "No_of_fatalities_amongst_employees_in_the_previous_FY",
        // "answerSchema": "Number"
        answerSchema: stringify({
            type: "number",
            version: "1.0",
        })
    },
    {
        "quid": 207,
        "description": "What are the No. of fatalities amongst workers in the previous FY?",
        name: "No_of_fatalities_amongst_workers_in_the_previous_FY",
        // "answerSchema": "Number"
        answerSchema: stringify({
            type: "number",
            version: "1.0",
        })
    },
    {
        "quid": 208,
        "description": "What are the high consequence work-related injuries or cases of ill-health (excluding fatalities) for employees in the current FY?",
        name: "high_consequence_work_related_injuries_or_cases_of_ill_health_for_employees_in_the_current_FY",
        // "answerSchema": "Number"
        answerSchema: stringify({
            type: "number",
            version: "1.0",
        })

    },
    {
        "quid": 209,
        "description": "What are the high consequence work-related injuries or cases of ill-health (excluding fatalities) for workers in the current FY?",
        name: "high_consequence_work_related_injuries_or_cases_of_ill_health_for_workers_in_the_current_FY",
        // "answerSchema": "Number"
        answerSchema: stringify({
            type: "number",
            version: "1.0",
        })
    },
    {
        "quid": 210,
        "description": "What are the high consequence work-related injuries or cases of ill-health (excluding fatalities) for employees in the previous FY?",
        name: "high_consequence_work_related_injuries_or_cases_of_ill_health_for_employees_in_the_previous_FY",
        // "answerSchema": "Number"
        answerSchema: stringify({
            type: "number",
            version: "1.0",
        })
    },
    {
        "quid": 211,
        "description": "What are the high consequence work-related injuries or cases of ill-health (excluding fatalities) for workers in the previous FY?",
        name: "high_consequence_work_related_injuries_or_cases_of_ill_health_for_workers_in_the_previous_FY",
        // "answerSchema": "Number"
        answerSchema: stringify({
            type: "number",
            version: "1.0",
        })
    },
    {
        "quid": 212,
        "description": "What % of your plants and offices were assessed by ownself or statutory authorities or third parties for health and safety practices?",
        name: "percentage_of_plants_and_offices_assessed_by_ownself_or_statutory_authorities_or_third_parties_for_health_and_safety_practices",
        // "answerSchema": "Number"
        answerSchema: stringify({
            type: "number",
            version: "1.0",
        })
    },
    {
        "quid": 213,
        "description": "What % of your plants and offices were assessed by ownself or statutory authorities or third parties for working conditions?",
        name: "percentage_of_plants_and_offices_assessed_by_ownself_or_statutory_authorities_or_third_parties_for_working_conditions",
        // "answerSchema": "Number"
        answerSchema: stringify({
            type: "number",
            version: "1.0",
        })
    },
    {
        "quid": 214,
        "description": "Please provide details of any actions taken or underway to address safety-related incidents and significant risks arising from assessments of health & safety practices and working conditions.",
        name: "details_of_any_actions_taken_or_underway_to_address_safety_related_incidents_and_significant_risks_arising_from_assessments_of_health_safety_practices_and_working_conditions",
        // "answerSchema": ""
        answerSchema: stringify({
            type: "text",
            version: "1.0",
        })
    }
]