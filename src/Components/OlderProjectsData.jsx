import IndoorNavigation2 from '../Assets/Indoor Navigation/IndoorNavigation2.png';
import IndoorNavigation3 from '../Assets/Indoor Navigation/IndoorNavigation3.png';
import IndoorNavigation from '../Assets/Indoor Navigation/IndoorNavigation.png';

import ECommerce1 from '../Assets/E Commerce/1.JPG';
import ECommerce2 from '../Assets/E Commerce/2.JPG';
import ECommerce3 from '../Assets/E Commerce/3.JPG';
import ECommerce4 from '../Assets/E Commerce/4.JPG';
import ECommerce5 from '../Assets/E Commerce/5.JPG';
import ECommerce6 from '../Assets/E Commerce/6.JPG';
import ECommerce7 from '../Assets/E Commerce/7.JPG';
import ECommerce8 from '../Assets/E Commerce/8.JPG';
import ECommerce9 from '../Assets/E Commerce/9.JPG';


export const MyProjectsData = [

    {
        id: 1,
        title: 'E Commerce Web Application',
        summary: "The E-Commerce Web Application is a full-stack, responsive platform designed for online shopping, developed using React.js, Node.js, Express.js, MongoDB, and Firebase. It features a dynamic product catalog, user authentication, secure payment integration with Stripe, and efficient state management using Redux. ",
        image: ECommerce1,
        role: 'Web development',
        tech: 'React JS| Firebase | Node JS | Express JS | MongoDB | Stripe',
        github: '',
        demo: '',
        platform: 'Web',
        language: 'Javascript',
        tool_used: 'React JS| Firebase | Node JS | Express JS | MongoDB | Stripe',
        duration: '3 weeks',
        completoin: '-',
        team_size: '1',
        overview: {
            1: "This project involved developing a full-stack responsive e-commerce web application designed to provide a seamless and intuitive shopping experience for users. The platform features a dynamic product catalog, secure user authentication, efficient order processing, and integrated payment solutions.",
        },
        key_features: [
            'Developed a user-friendly and responsive interface using React.js, ensuring optimal performance across different devices.',
            'Implemented Redux for efficient global state management, enhancing user interactions and real-time updates.',
            'Designed and developed RESTful APIs with Node.js and Express.js to handle core functionalities like authentication, product management, and order processing.',
            'Utilized MongoDB for scalable and flexible data storage, ensuring efficient product and user data management.',
            'Integrated Firebase for secure and reliable image storage, allowing users to upload and manage product images.',
            'Seamlessly integrated Stripe for secure and user-friendly payment processing, supporting various payment methods and currencies.',
            'Conducted rigorous testing and debugging to ensure the application’s reliability, performance, and security.'
        ],
        roles_responsibilities: {
            1: 'Frontend Development',
            2: 'Backend Development',
            3: 'Database Management',
            4: 'Payment Integration',
            5: 'Image Management',
            6: 'Testing & Deployment',
        },
        project_screenshots: {
            1: ECommerce1,
            2: ECommerce2,
            3: ECommerce3,
            4: ECommerce4,
            5: ECommerce5,
            6: ECommerce6,
            7: ECommerce7,
            8: ECommerce8,
            9: ECommerce9,
        }
    },
    {
        id: 2,
        title: 'Indoor Navigation',
        summary: "This project aims to create a mobile app for indoor navigation, offering accurate location tracking, optimal route guidance, and easy data integration for companies, with a focus on user-friendly design.",
        image: IndoorNavigation,
        role: 'Mobile development, AI model developement',
        tech: 'React Native| Firebase | Flask | TensorFlow | CNN | TensorFlow',
        github: '',
        demo: 'https://drive.google.com/file/d/1pPqn5mfycHQLSFUPqtQ6HeLOVlDwTxc3/view',
        platform: 'Mobile',
        language: 'Javascript, Python',
        tool_used: 'React Native, Firebase,Flask, TensorFlow, CNN, TensorFlow',
        duration: '12 months',
        completoin: '-',
        team_size: '5',
        overview: {
            1: "This project aims to develop a mobile application that assists users in navigating indoor environments. The application will accurately determine a user's location within a building and guide them along an optimal path to their destination. Additionally, the app offers a platform for new companies to include their data, enhancing its usability in various indoor settings. The primary goals are to ensure accurate location tracking, provide optimal path guidance, and feature an intuitive user interface.",
        },
        key_features: {

        },
        roles_responsibilities: {
            1: 'Mobile frontend development',
            2: 'Mobile backend development',
            3: 'AI model development',
            4: 'Testing and Debugging',
            5: 'Collaboration',
        },
        project_screenshots: {
            1: IndoorNavigation2,
            2: IndoorNavigation3
        }
    },
]