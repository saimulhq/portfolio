import { links } from './links';

// list of my work experience
export const works = [
    {
        title: 'Senior Software Developer',
        company: 'Visma Amplio Ltd.',
        link: links['Visma'],
        location: 'Helsinki, Finland',
        period: 'January 2024 - Present',
        project: 'Fikuro ERP',
        description:
            'Fikuro ERP serves SMEs in Finland, it allows users to record production, do warehouse transactions, create sales offers, sales orders and purchase orders, send invoices to various FMS systems and keep track of the stock.',
        responsibilities: [
            'Leading a team of six people',
            'Focusing on feature planning, design and architecture',
            'Focusing on backend development',
            'REST APIs and feature development',
            'Writing unit tests and integration tests',
            'Practicing Scrum within the team',
            'Responsible for creating event based solution for recording production using RabbitMQ',
            'Work on the UI when needed',
            'Fixing Sonarqube issues for the backend',
            'Guiding junior developers within the team',
            'Take part in release activities time to time',
            'Time to time upgrading 3rd party libraries being used in the backend',
            'Work on the UI when needed',
            'Using tools like Jira, Confluence, Slack and Google Meet'
        ],
        fileName: '',
        file: ''
    },
    {
        title: 'Senior Full Stack Software Engineer',
        company: 'Nokia Solutions and Networks Ltd.',
        link: links['Nokia'],
        location: 'Espoo, Finland',
        period: 'October 2021 - November 2023',
        project: 'Nokia Orchestration OrderHub (Business Application)',
        description:
            'OrderHub is used to create different types of orders, managing and monitoring orders and it is also used for managing manual tasks.',
        responsibilities: [
            'Focusing mainly on backend development',
            'REST APIs and feature development',
            'Writing unit tests',
            'Practicing SAFe within team',
            'Responsible for migrating Java 11 to Java 17',
            'Responsible for migrating Spring Boot 2 to Spring Boot 3',
            'Acting as the lead product security expert',
            'Generating Anchor, Trivy, VAMS for detecting vulnerabilities and fixing them',
            'Fixing Sonarqube issues for the backend',
            'Guiding junior developers within the team',
            'Take part in release activities time to time',
            'Time to time upgrading 3rd party libraries being used in the backend',
            'Work on the UI when needed',
            'Using tools like Jira, Confluence, and Microsoft Teams'
        ],
        fileName: '',
        file: ''
    },
    {
        title: 'Full Stack Software Developer',
        company: 'Tecnotree Corporation',
        link: links['Tecnotree'],
        location: 'Tampere, Finland',
        period: 'August 2020 - September 2021',
        project: 'Tecnotree Digital Resource Manager Bulk Processor',
        description:
            'Bulk processor is used for processing the creation, deletion, updation and bundling of digital resources (SIM, MSISDN, IP etc) in bulk and keep track of these generated resources (success, failures, reason of failure etc). On successful creation the bulk processor sends Kakfa events, which other systems can listen to and perform actions based on it.',
        responsibilities: [
            'Focusing mainly on backend development',
            'Single-handedly worked on the the backend of the project from designing the architecture to coding, testing and deployment',
            'REST APIs and feature development',
            'Writing unit tests',
            'Practicing Scrum within the team',
            'Responsible for TM Forum Open API certification for the product APIs',
            'Fixing Sonarqube issues for the backend',
            'Take part in release activities time to time',
            'Time to time upgrading 3rd party libraries being used in the backend',
            'Work on the UI when needed',
            'Using tools like Jira, Confluence, and Microsoft Teams'
        ],
        fileName: 'Letter of Recognition',
        file: links['COR']
    },
    {
        title: 'Software Developer Trainee and Thesis Worker',
        company: 'Cloubi Ltd. (Part of Otava Publishing Company)',
        link: links['Cloubi'],
        location: 'Tampere, Finland',
        period: 'May 2019 - February 2020',
        project: 'Cloubi Data Analytics Project',
        description:
            'It was developed for Cloubi and is used for generating the new data analytics report for the teachers to view the overall performance of the students.',
        responsibilities: [
            'Single-handedly worked on the backend of the project as a proof of concept for my Master’s Thesis',
            'Thesis title: "Optimizing the Efficiency of the Data Analytics Framework Using Microservice Architecture"',
            'REST APIs and feature development',
            'Writing unit tests',
            'Practicing Scrum within the team',
            'Fixing Sonarqube issues',
            'Using tools like Jira, Confluence, Slack, and Google Meet'
        ],
        fileName: 'Letter of Recognition',
        file: links['LOR']
    },
    {
        title: 'Software Quality Assurance Engineer',
        company: 'Loence Solution',
        link: '',
        location: 'Dhaka, Bangladesh',
        period: 'August 2017 - July 2018',
        project: 'Loence ERP',
        description:
            'Manual software testing and had the opportunity to write automated tests of their main product which was an ERP system',
        responsibilities: [
            'Write automated test cases for the frontend using Selenium',
            'Perform manual testing of the features',
            'Practicing Scrum within the team',
            'Using tools like Trello, Slack, and Google Meet'
        ],
        fileName: '',
        file: ''
    },
    {
        title: 'Intern, Research and Development Team, Technology Division',
        company: 'bKash Ltd.',
        link: links['bKash'],
        location: 'Dhaka, Bangladesh',
        period: 'January 2016 - June 2016',
        project: 'bKash Phonebook Directory',
        description:
            'It was developed for managing the contact details of bKash employees and was internally used by bKash Ltd.',
        responsibilities: [
            'Single-handedly worked on the backend of the project from designing the architecture to coding and testing',
            'REST APIs and feature development',
            'Writing unit tests',
            'Fixing Sonarqube issues',
            'Using tools like Jira, Confluence, Slack, and Google Meet'
        ],
        fileName: '',
        file: ''
    }
];
