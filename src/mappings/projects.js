import { links } from './links';

// list of my projects
export const projects = [
    {
        title: 'Tecnotree Digital Resource Manager Bulk Process',
        link: '',
        description:
            'Worked on the backend of this project for Tecnotree, it processes the creation, deletion, updation and bundling of digital resources (SIM, MSISDN, IP etc) in bulk and keep track of these generated resources (success, failures, reason of failure etc). On successful creation the bulk process sends Kafka events, which other systems can listen to and perform actions based on it.',
        platform:
            'ExpressJS, MongoDB, Apache Kafka, Docker, Protobuf, grpc, Jenkins, SonarQube'
    },
    {
        title: 'Expense Manager',
        link: links['ExpenseManager'],
        description:
            'This is a simple CRUD backend application that is used for creating a new expense, delete an expense, get an expense, update an expense and list all the expenses.',
        platform: 'Go, MongoDB, Protobuf, grpc, grpc-gateway'
    },
    {
        title: 'HI-DE Crane Registration System',
        link: '',
        description:
            'This project has been developed for HIAB, a subsidiary of Cargotec Ltd for registering the purchase date of the crane parts sold by HIAB and keeping track of warranty of the parts.',
        platform: 'ExpressJS, ReactJS, PostgreSQL'
    },
    {
        title: 'Photo Gallery',
        link: links['PhotoGallery'],
        description:
            'This is a front end application made with ReactJS and Material UI that loads images from a Fake Mock Rest API.',
        platform: 'ReactJS'
    },
    {
        title: 'Friend Finder',
        link: '',
        description:
            'This project is a social networking site with the features of adding new friends, deleting friends, creating discussions, update status and removing user account.',
        platform: 'Django, PostgreSQL'
    },
    {
        title: 'DevOps Project',
        link: links['DevOps'],
        description:
            'This project was done for learning DevOps using Gitlab-CI and had several stages in the pipeline, like static analysis of the code and testing.',
        platform: 'Docker, Gitlab-CI, NodeJS, Mocha'
    },
    {
        title: 'Plagiar',
        link: links['Plagiar'],
        description:
            'This is a web-based project made to detect plagiarism with a selected repository and is a complete repository management system.',
        platform: 'Java EE, Oracle'
    },
    {
        title: 'IIT Problem Management System',
        link: '',
        description:
            'This is a web-based project made to automate the whole manual problem management system of IIT i.e. lodging complaint against a problem, notifying a technician and taking necessary actions.',
        platform: 'ASP.Net MVC 5 / C#, Microsoft SQL'
    }
];
