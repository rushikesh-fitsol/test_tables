import type { Prisma } from "@prisma/client";
import prisma from "../db/db";
import type { AnswerSchema } from "./types";
import { version } from "process";
import * as e from "express";

// const GeneralDisclosureQuestions: Prisma.QuestionsCreateManyInput[] = [
//   {
//     description: "In which language are you submitting your response?",
//     name: "Language",
//     answerSchema: JSON.stringify({
//       type: "dropdown",
//       version: "1.0",
//       options: [
//         { id: "English", label: "English" },
//         { id: "Hindi", label: "Hindi" },
//         { id: "Marathi", label: "Marathi" },
//         { id: "Spanish", label: "Spanish" },
//         { id: "French", label: "French" },
//       ],
//     }),
//     quid: 1,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "Select the currency used for all financial information disclosed throughout your response.",
//     name: "Currency",
//     answerSchema: JSON.stringify({
//       type: "dropdown",
//       version: "1.0",
//       options: [
//         { id: "INR", label: "INR" },
//         { id: "USD", label: "USD" },
//         { id: "EUR", label: "EUR" },
//         { id: "GBP", label: "GBP" },
//       ],
//     }),
//     quid: 2,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "Provide an overview and introduction to your organization.",
//     name: "Overview",
//     answerSchema: JSON.stringify({}),
//     quid: 3,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "Please provide unique identification number of the company",
//     name: "Company ID",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//     quid: 4,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "What is the name of the Company?",
//     name: "Company Name",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//     quid: 5,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "What is your Year of Incorporation?",
//     name: "Year of Incorporation",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//     quid: 6,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "Please provide your Registered office address.",
//     name: "Registered Office Address",
//     answerSchema: JSON.stringify({
//       type: "text",
//       version: "1.0",
//     }),
//     quid: 7,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "Please provide your Corporate office address.",
//     name: "Corporate Office Address",
//     answerSchema: JSON.stringify({
//       type: "text",
//       version: "1.0",
//     }),
//     quid: 8,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "Please provide your corporate E-mail address.",
//     name: "Corporate Email",
//     answerSchema: JSON.stringify({
//       type: "email",
//       version: "1.0",
//     }),
//     quid: 9,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "Please provide your corporate Telephone number.",
//     name: "Corporate Telephone",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//     quid: 10,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "Provide link to your Website.",
//     name: "Website",
//     answerSchema: JSON.stringify({
//       type: "text",
//       version: "1.0",
//     }),
//     quid: 11,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "Mention the Financial year for which reporting is being done.",
//     name: "Financial Year",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//     quid: 12,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "State the end date of the year for which you are reporting data.",
//     name: "Reporting Year",
//     answerSchema: JSON.stringify({
//       type: "date",
//       version: "1.0",
//     }),
//     quid: 13,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "Mention the name of the Stock Exchange(s) where shares are listed.",
//     name: "Stock Exchange",
//     answerSchema: JSON.stringify({
//       type: "dropdown",
//       version: "1.0",
//       options: [
//         { id: "BSE", label: "BSE" },
//         { id: "NSE", label: "NSE" },
//         { id: "NYSE", label: "NYSE" },
//         { id: "NASDAQ", label: "NASDAQ" },
//       ],
//     }),
//     quid: 14,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "What is the Paid-up Capital of the firm?",
//     name: "Paid-up Capital",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//     quid: 15,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "Provide the name and contact details (telephone, email address) of the person for asking questions about this report.",
//     name: "Contact Person",
//     answerSchema: JSON.stringify({
//       type: "text",
//       version: "1.0",
//     }),
//     quid: 16,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "Provide details on your Reporting Boundary.",
//     name: "Reporting Boundary",
//     answerSchema: JSON.stringify({
//       type: "longtext",
//       version: "1.0",
//     }),
//     quid: 17,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "Name of Assurance Provider.",
//     name: "Assurance Provider",
//     answerSchema: JSON.stringify({
//       type: "text",
//       version: "1.0",
//     }),
//     quid: 18,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "Type of Assurance Provided.",
//     name: "Assurance Type",
//     answerSchema: JSON.stringify({
//       type: "text",
//       version: "1.0",
//     }),
//     quid: 19,
//     scoreGuide: "No Score",
//   },
// ];

// const CSRQuestions: Prisma.QuestionsCreateManyInput[] = [
//   {
//     description:
//       "Whether CSR is applicable as per section 135 of Companies Act, 2013?",
//     name: "CSR Applicability",
//     answerSchema: JSON.stringify({
//       type: "dropdown",
//       version: "1.0",
//       options: [
//         { id: "Yes", label: "Yes" },
//         { id: "No", label: "No" },
//       ],
//     }),
//     quid: 20,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "Please mention the organisation's Annual Turnover (in currency selected).",
//     name: "Annual Turnover",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//     quid: 21,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "Provide the organisation's Net worth (in currency selected).",
//     name: "Net Worth",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//     quid: 22,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "Have you undertaken any Social Impact Assessment for current projects?",
//     name: "Social Impact Assessment Undertaken",
//     answerSchema: JSON.stringify({
//       type: "dropdown",
//       version: "1.0",
//       options: [
//         { id: "Yes", label: "Yes" },
//         { id: "No", label: "No" },
//       ],
//     }),
//     quid: 23,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "Provide details of Social Impact Assessments (SIA) of projects undertaken by the entity based on applicable laws, in the current financial year.",
//     name: "Social Impact Assessments Details",
//     answerSchema: JSON.stringify({
//       type: "dynamictable",
//       version: "1.0",
//       column_headers: [
//         { name: "Name and brief details of project", id: "project_name" },
//         { name: "SIA Notification No.", id: "sia_notification_no" },
//         { name: "Date of notification", id: "notification_date" },
//         {
//           name: "Whether conducted by independent external agency (Yes / No)",
//           id: "conducted_by_external_agency",
//         },
//         {
//           name: "Results communicated in public domain (Yes / No)",
//           id: "results_public_domain",
//         },
//         {
//           name: "Relevant Web link",
//           id: "web_link",
//         },
//       ],
//       key_map: {
//         columns: [
//           "project_name",
//           "sia_notification_no",
//           "notification_date",
//           "conducted_by_external_agency",
//           "results_public_domain",
//           "web_link",
//         ],
//       },
//     }),
//     quid: 24,
//     scoreGuide:
//       "5 for Assessment by independent external agency 2 for Internal assessment 0 for Not Reported",
//     esg: "S",
//     max_essential_indicators_score: 5,
//     max_leadership_indicators_score: 0,
//   },
//   {
//     description:
//       "Provide details of actions taken to mitigate any negative social impacts identified in Social Impact Assessments.",
//     name: "Actions Taken to Mitigate Social Impacts",
//     answerSchema: JSON.stringify({
//       type: "dynamictable",
//       version: "1.0",
//       column_headers: [
//         {
//           name: "Details of negative social impact identified",
//           id: "negative_impact",
//         },
//         { name: "Corrective action taken", id: "corrective_action" },
//       ],
//       key_map: {
//         columns: ["negative_impact", "corrective_action"],
//       },
//     }),
//     quid: 25,
//     scoreGuide:
//       "1 for Corrective actions for all activities identified having negative social impact 0 otherwise",
//     esg: "S",
//     max_essential_indicators_score: 0,
//     max_leadership_indicators_score: 1,
//   },
//   {
//     description:
//       "Do you have any project where ongoing Rehabilitation & Resettlement (R&R) is being undertaken?",
//     name: "Ongoing Rehabilitation & Resettlement",
//     answerSchema: JSON.stringify({
//       type: "dropdown",
//       version: "1.0",
//       options: [
//         { id: "Yes", label: "Yes" },
//         { id: "No", label: "No" },
//       ],
//     }),
//     quid: 26,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "Provide information on project(s) for which ongoing Rehabilitation & Resettlement (R&R) is being undertaken by your entity.",
//     name: "Rehabilitation & Resettlement Projects",
//     answerSchema: JSON.stringify({
//       type: "dynamictable",
//       version: "1.0",
//       column_headers: [
//         { name: "S.No.", id: "serial_number" },
//         {
//           name: "Name of Project for which R&R is ongoing",
//           id: "project_name",
//         },
//         { name: "State", id: "state" },
//         { name: "District", id: "district" },
//         {
//           name: "No. of Project Affected Families (PAFs)",
//           id: "affected_families",
//         },
//         { name: "% of PAFs covered by R&R", id: "families_covered" },
//         { name: "Amounts paid to PAFs in the FY (In INR)", id: "amounts_paid" },
//       ],
//       key_map: {
//         columns: [
//           "serial_number",
//           "project_name",
//           "state",
//           "district",
//           "affected_families",
//           "families_covered",
//           "amounts_paid",
//         ],
//       },
//     }),
//     quid: 27,
//     scoreGuide:
//       "3 if > 2 projects, 2 for 2 projects, 1 for one project; 0 for NR",
//     esg: "S",
//     max_essential_indicators_score: 3,
//     max_leadership_indicators_score: 0,
//   },
//   {
//     description:
//       "Describe the mechanisms to address grievances of the community.",
//     name: "Grievance Mechanisms",
//     answerSchema: JSON.stringify({
//       type: "longtext",
//       version: "1.0",
//     }),
//     quid: 28,
//     scoreGuide: "1 for Reported; 0 for NR",
//     esg: "S",
//     max_essential_indicators_score: 1,
//     max_leadership_indicators_score: 0,
//   },
//   {
//     description:
//       "Provide the following information on CSR projects undertaken by your entity in designated aspirational districts as identified by government bodies.",
//     name: "CSR Projects in Aspirational Districts",
//     answerSchema: JSON.stringify({
//       type: "dynamictable",
//       version: "1.0",
//       column_headers: [
//         { name: "S.No.", id: "serial_number" },
//         { name: "State", id: "state" },
//         { name: "Aspirational District", id: "aspirational_district" },
//         { name: "Amount spent (In INR)", id: "amount_spent" },
//       ],
//       key_map: {
//         columns: [
//           "serial_number",
//           "state",
//           "aspirational_district",
//           "amount_spent",
//         ],
//       },
//     }),
//     quid: 29,
//     scoreGuide:
//       "2 for doing in all designated districts 1 for only 1 district 0 for Not Reported",
//     esg: "S",
//     max_essential_indicators_score: 0,
//     max_leadership_indicators_score: 2,
//   },
//   {
//     description: "Please provide details of beneficiaries of CSR Projects.",
//     name: "CSR Project Beneficiaries",
//     answerSchema: JSON.stringify({
//       type: "dynamictable",
//       version: "1.0",
//       column_headers: [
//         { name: "S.No.", id: "serial_number" },
//         { name: "CSR Project", id: "csr_project" },
//         {
//           name: "No. of persons benefitted from CSR Projects",
//           id: "beneficiaries",
//         },
//         {
//           name: "% of beneficiaries from vulnerable and marginalized groups",
//           id: "vulnerable_marginalized",
//         },
//       ],
//       key_map: {
//         columns: [
//           "serial_number",
//           "csr_project",
//           "beneficiaries",
//           "vulnerable_marginalized",
//         ],
//       },
//     }),
//     quid: 30,
//     scoreGuide:
//       "2 for giving > 80% benefits to vulnerable and marginalized groups; 1 for 50-80%; 0 for <50% or for NR",
//     esg: "S",
//     max_essential_indicators_score: 0,
//     max_leadership_indicators_score: 2,
//   },
// ];

// const GrievanceRedressalQuestions: Prisma.QuestionsCreateManyInput[] = [
//   {
//     description: "Do you have a grievance redressal mechanism in place?",
//     name: "Grievance Redressal Mechanism",
//     answerSchema: JSON.stringify({
//       type: "dropdown",
//       version: "1.0",
//       options: [
//         { id: "Yes", label: "Yes" },
//         { id: "No", label: "No" },
//       ],
//     }),
//     quid: 31,
//     scoreGuide: "1 point for Grievance/Redressal Mechanism in place.",
//     esg: "G",
//     max_essential_indicators_score: 1,
//     max_leadership_indicators_score: 0,
//   },
//   {
//     description: "Select from the below key stakeholder groups of the entity:",
//     name: "Stakeholder Groups",
//     answerSchema: JSON.stringify({}),
//     quid: 32,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "Provide links to grievance redressal policy for each stakeholder identified.",
//     name: "Grievance Policy Links",
//     answerSchema: JSON.stringify({}),
//     quid: 33,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "What are the number of complaints filed during the current financial year?",
//     name: "Complaints Filed Current Year",
//     answerSchema: JSON.stringify({}),
//     quid: 34,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "What are the number of complaints pending resolution at the close of the year?",
//     name: "Complaints Pending Current Year",
//     answerSchema: JSON.stringify({}),
//     quid: 35,
//     scoreGuide:
//       "3 for not receiving any complaints or Resolving more than 80% complaints received 2 for 60-80% complaints resolved 1 for < 60% complaints resolved 0 for Not Reported",
//     esg: "G",
//     max_essential_indicators_score: 3,
//     max_leadership_indicators_score: 0,
//   },
//   {
//     description:
//       "What are the number of complaints filed during the previous financial year?",
//     name: "Complaints Filed Previous Year",
//     answerSchema: JSON.stringify({}),
//     quid: 36,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "What are the number of complaints pending resolution at the close of the previous financial year?",
//     name: "Complaints Pending Previous Year",
//     answerSchema: JSON.stringify({}),
//     quid: 37,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "Is there a mechanism available to receive and redress grievances for the following categories of employees and workers (Permanent Workers, Other than Permanent Workers, Permanent Employees, Other than Permanent Employees)? If yes, give details of the mechanism in brief.",
//     name: "Employee Grievance Mechanism",
//     answerSchema: JSON.stringify({}),
//     quid: 38,
//     scoreGuide:
//       "1 for all employees, 1 for all workmen, 0 otherwise Note: In case of NIL workmen or NIL Employee, the maximum scoring can be taken for the existing class.",
//     esg: "S",
//     max_essential_indicators_score: 2,
//     max_leadership_indicators_score: 0,
//   },
// ];

// const StakeholderIdentificationQuestions: Prisma.QuestionsCreateManyInput[] = [
//   {
//     description: "Have you identified stakeholders to your business?",
//     name: "Stakeholder Identification",
//     answerSchema: JSON.stringify({
//       type: "dropdown",
//       version: "1.0",
//       options: [
//         { id: "Yes", label: "Yes" },
//         { id: "No", label: "No" },
//       ],
//     }),
//     quid: 39,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "Select from the below key stakeholder groups of the entity:",
//     name: "Key Stakeholder Selection",
//     answerSchema: JSON.stringify({}),
//     quid: 40,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "What was the process for identifying key stakeholder groups of the entity?",
//     name: "Stakeholder Identification Process",
//     answerSchema: JSON.stringify({
//       type: "longtext",
//       version: "1.0",
//     }),
//     quid: 41,
//     scoreGuide: "1 for Reported; 0 for NR",
//     esg: "G",
//     max_essential_indicators_score: 1,
//     max_leadership_indicators_score: 0,
//   },
//   {
//     description:
//       "Have you identified stakeholders as Vulnerable or Marginalized?",
//     name: "Vulnerable Stakeholder Identification",
//     answerSchema: JSON.stringify({}),
//     quid: 42,
//     scoreGuide:
//       "2 if > 80% of identified stakeholders are vulnerable and marginalized group, 1 if < 80% of identified stakeholders are vulnerable and marginalized group, 0 otherwise",
//     esg: "G",
//     max_essential_indicators_score: 2,
//     max_leadership_indicators_score: 0,
//   },
//   {
//     description: "Do you engage with your stakeholders?",
//     name: "Stakeholder Engagement",
//     answerSchema: JSON.stringify({}),
//     quid: 43,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "If Yes, what is the frequency of your engagement?",
//     name: "Engagement Frequency",
//     answerSchema: JSON.stringify({}),
//     quid: 44,
//     scoreGuide: "2 for Reported; 0 for NR",
//     esg: "G",
//     max_essential_indicators_score: 2,
//     max_leadership_indicators_score: 0,
//   },
//   {
//     description:
//       "Which medium of communication do you use to communicate with stakeholders?",
//     name: "Communication Medium",
//     answerSchema: JSON.stringify({}),
//     quid: 45,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "Disclose purpose & scope of engagement including key topics & concerns raised during such engagement.",
//     name: "Engagement Purpose and Scope",
//     answerSchema: JSON.stringify({}),
//     quid: 46,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "Describe the role of the highest governance body in overseeing the organization’s due diligence & other processes to identify & manage the organization’s impacts on the economy, environment, & people.",
//     name: "Governance Body Role",
//     answerSchema: JSON.stringify({
//       type: "longtext",
//       version: "1.0",
//     }),
//     quid: 47,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "Does the organization's highest authority (Board) engage with all different stakeholders?",
//     name: "Board Engagement",
//     answerSchema: JSON.stringify({}),
//     quid: 48,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "Provide the processes for consultation between stakeholders and the Board on economic, environmental, and social topics or if consultation is delegated, how is feedback from such consultations provided to the Board.",
//     name: "Stakeholder-Board Consultation",
//     answerSchema: JSON.stringify({
//       type: "longtext",
//       version: "1.0",
//     }),
//     quid: 49,
//     scoreGuide: "1 for Reported; 0 for NR",
//     esg: "G",
//     max_essential_indicators_score: 0,
//     max_leadership_indicators_score: 1,
//   },
//   {
//     description:
//       "Whether stakeholder consultation is used to support the identification and management of environmental, and social topics (Yes / No). If so, provide details of instances as to how the inputs received from stakeholders on these topics were incorporated into policies and activities of the entity.",
//     name: "Consultation for Topic Management",
//     answerSchema: JSON.stringify({
//       type: "longtext",
//       version: "1.0",
//     }),
//     quid: 50,
//     scoreGuide: "1 for Reported; 0 for NR",
//     esg: "G",
//     max_essential_indicators_score: 0,
//     max_leadership_indicators_score: 1,
//   },
//   {
//     description:
//       "Provide details of instances of engagement with, & actions taken to, address the concerns of vulnerable/ marginalized stakeholder groups.",
//     name: "Vulnerable Stakeholder Engagement",
//     answerSchema: JSON.stringify({
//       type: "longtext",
//       version: "1.0",
//     }),
//     quid: 51,
//     scoreGuide:
//       "3 for quarterly engagement, 2 for half yearly engagement, 1 for annual engagement and 0 for No engagement",
//     esg: "G",
//     max_essential_indicators_score: 0,
//     max_leadership_indicators_score: 3,
//   },
// ];

// const LocationQuestions: Prisma.QuestionsCreateManyInput[] = [
//   {
//     description:
//       "Number of locations where plants/operation/ offices of the entity are located.",
//     name: "Location Count",
//     answerSchema: JSON.stringify({
//       type: "fixedtable",
//       version: "1.0",
//       column_headers: [
//         [
//           { name: "Location", id: "location" },
//           { name: "Number of plants", id: "number_of_plants" },
//           { name: "Number of offices", id: "number_of_offices" },
//           { name: "Total", id: "total" },
//         ],
//       ],
//       rows_headers: [
//         [{ name: "National", id: "national" }],
//         [{ name: "International", id: "international" }],
//       ],
//       key_map: {
//         columns: ["number_of_plants", "number_of_offices", "total"],
//         rows: ["national", "international"],
//       },
//     }),
//     quid: 52,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "Provide details regarding markets served by the entity.",
//     name: "Market Details",
//     answerSchema: JSON.stringify({
//       type: "fixedtable",
//       version: "1.0",
//       column_headers: [
//         [
//           { name: "Location", id: "location" },
//           { name: "Number", id: "number" },
//         ],
//       ],
//       rows_headers: [
//         [{ name: "National (No. of States)", id: "national" }],
//         [{ name: "International (No. of Countries)", id: "international" }],
//       ],
//       key_map: {
//         columns: ["number"],
//         rows: ["national", "international"],
//       },
//     }),
//     quid: 53,
//     scoreGuide: "No Score",
//   },
//   {
//     description:
//       "What is the contribution of exports as a percentage of the total turnover of the entity?",
//     name: "Export Contribution",
//     answerSchema: JSON.stringify({}),
//     quid: 54,
//     scoreGuide: "No Score",
//   },
//   {
//     description: "Please provide a brief on types of customers you serve.",
//     name: "Customer Types",
//     answerSchema: JSON.stringify({
//       type: "longtext",
//       version: "1.0",
//     }),
//     quid: 55,
//     scoreGuide: "No Score",
//   },
// ];

const ProductsAndServicesQuestions: Prisma.QuestionsCreateManyInput[] = [
  {
    description:
      "Provide details of your business activities (accounting for 90% of the turnover).",
    name: "Business Activities",
    answerSchema: JSON.stringify({
      type: "dynamictable",
      version: "1.0",
      column_headers: [
        { name: "S. No.", id: "serial_number" },
        {
          name: "Description of Main Activity",
          id: "main_activity_description",
        },
        {
          name: "Description of Business Activity",
          id: "business_activity_description",
        },
        {
          name: "% of Turnover of the entity",
          id: "turnover_percentage",
        },
      ],
      key_map: {
        columns: [
          "serial_number",
          "main_activity_description",
          "business_activity_description",
          "turnover_percentage",
        ],
      },
    }),
    quid: 56,
    scoreGuide: "No Score",
  },
  {
    description:
      "Details of the products & services sold by the entity (accounting for 90% of the entity’s Turnover).",
    name: "Products and Services",
    answerSchema: JSON.stringify({
      type: "dynamictable",
      version: "1.0",
      column_headers: [
        { name: "S. No.", id: "serial_number" },
        { name: "Product/Service", id: "product_service" },
        { name: "NIC Code", id: "nic_code" },
        {
          name: "% of total Turnover contributed",
          id: "turnover_contribution_percentage",
        },
      ],
      key_map: {
        columns: [
          "serial_number",
          "product_service",
          "nic_code",
          "turnover_contribution_percentage",
        ],
      },
    }),
    quid: 57,
    scoreGuide: "No Score",
  },
  {
    description:
      "Has your organisation identified material risks and opportunities for the organisation?",
    name: "Material Risks and Opportunities",
    answerSchema: JSON.stringify({
      type: "dropdown",
      version: "1.0",
      options: [
        { id: "Yes", label: "Yes" },
        { id: "No", label: "No" },
        { id: "NA", label: "NA" },
      ],
    }),
    quid: 58,
    scoreGuide: "No Score",
  },
  {
    description: "Provide details on issues identified as Material.",
    name: "Material Issues",
    answerSchema: JSON.stringify({}),
    quid: 59,
    scoreGuide: "No Score",
  },
  {
    description: "Indicate whether the above is a Risk or Opportunity.",
    name: "Risk or Opportunity",
    answerSchema: JSON.stringify({}),
    quid: 60,
    scoreGuide: "No Score",
  },
  {
    description:
      "Please provide the reason for identifying the above as Risk or Opportunity.",
    name: "Reason for Risk or Opportunity",
    answerSchema: JSON.stringify({
      type: "longtext",
      version: "1.0",
    }),
    quid: 61,
    scoreGuide: "No Score",
  },
  {
    description:
      "If the above is a risk, please provide the steps to adapt or mitigate the same.",
    name: "Risk Mitigation Steps",
    answerSchema: JSON.stringify({
      type: "longtext",
      version: "1.0",
    }),
    quid: 62,
    scoreGuide: "No Score",
  },
  {
    description:
      "What are the financial implications of the risk or opportunity (Indicate positive or negative implications).",
    name: "Financial Implications",
    answerSchema: JSON.stringify({
      type: "longtext",
      version: "1.0",
    }),
    quid: 63,
    scoreGuide: "No Score",
  },
];

// const EmployeeCountQuestions: Prisma.QuestionsCreateManyInput[] = [
//   {
//     description:
//       "What are the total number of Permanent Male Employees in the firm?",
//     name: "Permanent Male Employees",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What are the total number of Permanent Female Employees in the firm?",
//     name: "Permanent Female Employees",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What are the total number of Permanent Employees in the firm?",
//     name: "Total Permanent Employees",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What are the total number of Other than Permanent Male Employees in the firm?",
//     name: "Other than Permanent Male Employees",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What are the total number of Other than Permanent Female Employees in the firm?",
//     name: "Other than Permanent Female Employees",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What are the total number of Other than Permanent Employees in the firm?",
//     name: "Total Other than Permanent Employees",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What are the total number of Permanent Male Workers in the firm?",
//     name: "Permanent Male Workers",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What are the total number of Permanent Female Workers in the firm?",
//     name: "Permanent Female Workers",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description: "What are the total number of Permanent Workers in the firm?",
//     name: "Total Permanent Workers",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What are the total number of Other than Permanent Male Workers in the firm?",
//     name: "Other than Permanent Male Workers",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What are the total number of Other than Permanent Female Workers in the firm?",
//     name: "Other than Permanent Female Workers",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What are the total number of Other than Permanent Workers in the firm?",
//     name: "Total Other than Permanent Workers",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the total number of Differently Abled Permanent Male Employees in the firm?",
//     name: "Differently Abled Permanent Male Employees",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the total number of Differently Abled Permanent Female Employees in the firm?",
//     name: "Differently Abled Permanent Female Employees",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the total number of Differently Abled Permanent Employees in the firm?",
//     name: "Total Differently Abled Permanent Employees",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the total number of Differently Abled Other than Permanent Male Employees in the firm?",
//     name: "Differently Abled Other than Permanent Male Employees",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the total number of Differently Abled Other than Permanent Female Employees in the firm?",
//     name: "Differently Abled Other than Permanent Female Employees",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the total number of Differently Abled Other than Permanent Employees in the firm?",
//     name: "Total Differently Abled Other than Permanent Employees",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the total number of Differently Abled Permanent Male Workers in the firm?",
//     name: "Differently Abled Permanent Male Workers",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the total number of Differently Abled Permanent Female Workers in the firm?",
//     name: "Differently Abled Permanent Female Workers",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the total number of Differently Abled Permanent Workers in the firm?",
//     name: "Total Differently Abled Permanent Workers",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the total number of Differently Abled Other than Permanent Male Workers in the firm?",
//     name: "Differently Abled Other than Permanent Male Workers",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the total number of Differently Abled Other than Permanent Female Workers in the firm?",
//     name: "Differently Abled Other than Permanent Female Workers",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the total number of Differently Abled Other than Permanent Workers in the firm?",
//     name: "Total Differently Abled Other than Permanent Workers",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the current turnover percentage for Permanent Male Employees for the current Financial Year?",
//     name: "Turnover Percentage Permanent Male Employees Current Year",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the current turnover percentage for Permanent Female Employees for the current Financial Year?",
//     name: "Turnover Percentage Permanent Female Employees Current Year",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the current turnover percentage for Permanent Employees for the current Financial Year?",
//     name: "Turnover Percentage Permanent Employees Current Year",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the turnover percentage for Permanent Male Employees for the previous Financial Year?",
//     name: "Turnover Percentage Permanent Male Employees Previous Year",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the turnover percentage for Permanent Female Employees for the previous Financial Year?",
//     name: "Turnover Percentage Permanent Female Employees Previous Year",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the turnover percentage for Permanent Employees for the previous Financial Year?",
//     name: "Turnover Percentage Permanent Employees Previous Year",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the turnover percentage for Permanent Male Employees for the Financial Year 2 years ago?",
//     name: "Turnover Percentage Permanent Male Employees 2 Years Ago",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the turnover percentage for Permanent Female Employees for the Financial Year 2 years ago?",
//     name: "Turnover Percentage Permanent Female Employees 2 Years Ago",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the turnover percentage for Permanent Employees for the Financial Year 2 years ago?",
//     name: "Turnover Percentage Permanent Employees 2 Years Ago",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the current turnover percentage for Permanent Male Workers for the current Financial Year?",
//     name: "Turnover Percentage Permanent Male Workers Current Year",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the current turnover percentage for Permanent Female Workers for the current Financial Year?",
//     name: "Turnover Percentage Permanent Female Workers Current Year",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the turnover percentage for Permanent Workers for the previous Financial Year?",
//     name: "Turnover Percentage Permanent Workers Previous Year",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the turnover percentage for Permanent Male Workers for the Financial Year 2 years ago?",
//     name: "Turnover Percentage Permanent Male Workers 2 Years Ago",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the turnover percentage for Permanent Female Workers for the Financial Year 2 years ago?",
//     name: "Turnover Percentage Permanent Female Workers 2 Years Ago",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
//   {
//     description:
//       "What is the turnover percentage for Permanent Workers for the Financial Year 2 years ago?",
//     name: "Turnover Percentage Permanent Workers 2 Years Ago",
//     answerSchema: JSON.stringify({
//       type: "alphanumeric",
//       version: "1.0",
//     }),
//   },
// ];

// const EmployeeWellBeingQuestions: Prisma.QuestionsCreateManyInput[] = [
//   {
//     description:
//       "Provide details of your business activities (accounting for 90% of the turnover).",
//     name: "Business Activities",
//     answerSchema: JSON.stringify({
//       type: "dynamictable",
//       version: "1.0",
//       column_headers: [
//         { name: "S. No.", id: "serial_number" },
//         {
//           name: "Description of Main Activity",
//           id: "main_activity_description",
//         },
//         {
//           name: "Description of Business Activity",
//           id: "business_activity_description",
//         },
//         {
//           name: "% of Turnover of the entity",
//           id: "turnover_percentage",
//         },
//       ],
//       key_map: {
//         columns: [
//           "serial_number",
//           "main_activity_description",
//           "business_activity_description",
//           "turnover_percentage",
//         ],
//       },
//     }),
//   },
//   {
//     description:
//       "Details of the products & services sold by the entity (accounting for 90% of the entity’s Turnover).",
//     name: "Products and Services",
//     answerSchema: JSON.stringify({
//       type: "dynamictable",
//       version: "1.0",
//       column_headers: [
//         { name: "S. No.", id: "serial_number" },
//         { name: "Product/Service", id: "product_service" },
//         { name: "NIC Code", id: "nic_code" },
//         {
//           name: "% of total Turnover contributed",
//           id: "turnover_contribution_percentage",
//         },
//       ],
//       key_map: {
//         columns: [
//           "serial_number",
//           "product_service",
//           "nic_code",
//           "turnover_contribution_percentage",
//         ],
//       },
//     }),
//   },
// ];

function stringify(obj: AnswerSchema): string {
  return JSON.stringify(obj);
}

async function main() {
  console.log("Adding questions to the database");
  await prisma.questions.createMany({
    data: ProductsAndServicesQuestions,
  });
  console.log("Questions added to the database");
}

main()
  .catch((e) => {
    console.error(e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
