import ChessGameImage from '../images/ChessGameImage.png';
import ClockImage from '../images/ClockImage.png';
import MockBosePageImage from '../images/MockBosePageImage.png';

import chess1 from '../images/chess1.png';
import chess2 from '../images/chess2.png';
import chess3 from '../images/chess3.png';
import chess4 from '../images/chess4.png';
import chess5 from '../images/chess5.png';
import chess6 from '../images/chess6.mp4';

import clock1 from '../images/clock1.png';
import clock2 from '../images/clock2.png';
import clock3 from '../images/clock3.png';
import clock4 from '../images/clock4.mp4';

import mockPage1 from '../images/MockPage1.png';
import mockPage2 from '../images/MockPage2.png';
import mockPage3 from '../images/MockPage3.png';
import mockPage4 from '../images/MockPage4.mp4';

import taskMaster1 from '../images/TaskMaster1.png';
import taskMaster2 from '../images/TaskMaster2.png';
import taskMaster3 from '../images/TaskMaster3.png';
import taskMaster4 from '../images/TaskMaster4.png';
import taskMaster5 from '../images/TaskMaster5.png';
import taskMaster6 from '../images/TaskMaster6.mp4';
import taskMaster7 from '../images/TaskMaster7.png';
import taskMaster8 from '../images/TaskMaster8.png';
import taskMaster9 from '../images/TaskMaster9.png';
import taskMaster10 from '../images/TaskMaster10.png';

import dupimg1 from '../images/dupImg1.png';
import dupimg2 from '../images/dupImg2.png';
import dupimg3 from '../images/dupImg3.png';
import dupimg4 from '../images/dupImg4.png';
import dupimg5 from '../images/dupImg5.mp4';
import dupimg6 from '../images/dupImg6.mp4';
import dupimg7 from '../images/dupImg7.mp4';
import dupimg8 from '../images/dupImg8.mp4';

import chatroom1 from '../images/Chatroom1.png';
import chatroom2 from '../images/Chatroom2.png';
import chatroom3 from '../images/Chatroom3.png';
import chatroom4 from '../images/Chatroom4.png';
import chatroom5 from '../images/Chatroom5.png';
import chatroom6 from '../images/Chatroom6.mp4';
import chatroom7 from '../images/Chatroom7.mp4';

const JavaScriptProjectData = [
    {
        id: 1,
        image: ChessGameImage,
        title: 'Chess',
        description: "A chess board game I solo developed using only pure HTML, CSS and JavaScript.",
        githubRepo: 'https://github.com/Francesco99020/chess_game',
        appLink: 'http://127.0.0.1:5500/src/ChessGame/ChessGame.html',
        ProjectDetails: {
            extendedProjectDetails: "The Chess Game Implementation project is a web-based application designed to bring the classic game of chess to life in a digital format. Developed using HTML, CSS, and JavaScript, the project aims to provide an immersive and engaging gaming experience for players of all skill levels.|| At its core, the project focuses on implementing the fundamental rules and mechanics of chess, allowing two players to engage in strategic battles on a virtual chessboard. The user interface is meticulously crafted using HTML and CSS to replicate the traditional chessboard layout, complete with distinct visual representations of each chess piece.|| JavaScript serves as the backbone of the project, powering the intricate game logic and interaction dynamics. Functions are meticulously structured to handle various aspects of gameplay, including piece movement, check detection, and special move validation. Through careful coding and debugging, the project ensures that all game mechanics adhere to the established rules of chess, providing players with an authentic and enjoyable experience.|| In conclusion, the Chess Game Implementation project exemplifies the fusion of web development expertise and gaming mechanics to deliver a polished and entertaining gaming experience. By leveraging HTML, CSS, and JavaScript, the project aims to captivate players with its strategic depth, intuitive interface, and commitment to authenticity in replicating the timeless game of chess in the digital realm.",
            mediaItems: [
                { type: "image", url: chess1 },
                { type: "image", url: chess2 },
                { type: "image", url: chess3 },
                { type: "image", url: chess4 },
                { type: "image", url: chess5 },
                { type: "video", url: chess6 }
            ]
        }
    },
    {
        id: 2,
        image: ClockImage,
        title: 'Clock',
        description: "A Pure HTML, CSS and JavaScript clock I solo developed.",
        githubRepo: 'https://github.com/Francesco99020/clock',
        appLink: 'http://127.0.0.1:5500/src/Clock/Clock.html',
        ProjectDetails: {
            extendedProjectDetails: "This clock project features a fully functional digital and analog clock that displays and updates the current time. The application allows users to interact with the clock through various controls, including starting, stopping, resetting, and changing the time. The HTML structure of the project sets up the framework, containing both digital and analog components. The digital clock is prominently displayed with large, readable numbers indicating hours, minutes, and seconds, along with an AM/PM indicator. Additionally, the interface includes buttons for starting, stopping, resetting the clock, and changing the time. The analog clock features a circular background with hour markers (12, 3, 6, 9) and hands representing hours, minutes, and seconds.|| The visual styling of the clock is defined in the CSS file. The document body is styled with a black background to create a striking contrast. The clock's time is displayed in a vivid medium blue color, enhancing readability. A grid layout organizes the buttons and time displays, making the interface intuitive and user-friendly. The analog clock is styled with a medium blue background, dark blue borders, and a shadow effect to give it a 3D appearance. The clock hands are carefully positioned and styled to mimic a traditional analog clock, adding a touch of classic design to the interface.|| The functionality of the clock is brought to life through the JavaScript file, which handles the dynamic aspects of the application. The primary function, runClock(), starts the clock and updates the time every second, incrementing seconds, minutes, and hours while updating both the digital display and the positions of the analog clock hands. This function also manages the state of control buttons to ensure the correct operation while the clock is running. Additional functions such as incrementSecs(), incrementMins(), and incrementHrs() handle the incrementation of time units, updating both the digital display and the rotation of the corresponding analog clock hands. Conversely, decrementSecs(), decrementMins(), and decrementHrs() allow for the decrementation of time units, used when the user manually changes the time.|| The resetClock() function resets the clock to 12:00:00 PM, updating both the digital and analog displays to reflect this default state. The changeTime() function provides users with the ability to manually adjust the time by displaying the time change controls and hiding other buttons to prevent interference. Once the user confirms the changes, the confirmChanges() function applies the new time, updating the displays and re-enabling the appropriate control buttons.|| User interaction is facilitated through several control buttons. The \"Start Clock\" button initiates the clock's operation, allowing it to update every second. The \"Stop Clock\" button halts the clock's updates, while the \"Reset Clock\" button reverts the time to 12:00:00 PM. The \"Change Time\" button lets users manually adjust the hours, minutes, and seconds using increment and decrement buttons. This project demonstrates a comprehensive approach to creating a functional clock application that seamlessly blends modern digital and traditional analog clock designs. It incorporates user interactivity and offers a visually appealing, practical tool for displaying and managing time.",
            mediaItems: [
                { type: "image", url: clock1 },
                { type: "image", url: clock2 },
                { type: "image", url: clock3 },
                { type: "video", url: clock4 }
            ]
        }
    },
    {
        id: 3,
        image: MockBosePageImage,
        title: 'Mock Bose Page',
        description: 'A pure HTML, CSS, and JavaScript mock Bose landing page I made for my multimedia web design class.',
        githubRepo: 'https://github.com/Francesco99020/Bose-Headphones-Mock-Landing-page',
        appLink: 'http://127.0.0.1:5500/src/MockBoseLandingPage/MockPage.html',
        ProjectDetails: {
            extendedProjectDetails: "The mock landing page for Bose headphones presents an engaging and informative user experience, meticulously crafted through a combination of HTML, CSS, and JavaScript. Seamlessly blending aesthetic appeal with interactive functionality, this project serves as a testament to effective web design principles.|| At its core, the landing page is structured to captivate visitors from the moment they arrive. A sleek and modern header introduces users to the brand, offering intuitive navigation options that facilitate effortless exploration. The header's sticky behavior ensures consistent accessibility as users scroll, enhancing the overall browsing experience. || The focal point of the page lies in its ability to showcase the Bose headphones in a visually compelling manner. Through carefully curated banners and product displays, users are immersed in a journey of discovery, where striking imagery and concise descriptions entice them to delve deeper. Smooth slideshow transitions and intuitive navigation controls empower users to engage with the product on their own terms, fostering a sense of ownership and connection. || Beyond mere aesthetics, the landing page is designed to inform and educate. Sections dedicated to features and reviews provide valuable insights into the headphones' capabilities and customer satisfaction. Rich content supplemented by captivating visuals ensures that users are not only impressed but also well-informed, making informed decisions about their potential purchase. || Moreover, the landing page goes beyond the product itself, extending an invitation for further interaction. Social media links seamlessly integrate Bose's online presence, inviting users to explore and engage with the brand across various platforms. Additionally, the inclusion of a GitHub repository fosters transparency and collaboration, inviting enthusiasts and developers to contribute to the project's evolution. || In conclusion, the mock landing page for Bose headphones exemplifies the art of web design, seamlessly blending aesthetics, functionality, and user engagement. From its sleek header to its captivating product showcases and informative content sections, every element is meticulously crafted to deliver an unparalleled user experience. As users navigate through the page, they are not merely passive spectators but active participants in a journey of discovery and connection with the Bose brand.",
            mediaItems: [
                { type: "image", url: mockPage1 },
                { type: "image", url: mockPage2 },
                { type: "image", url: mockPage3 },
                { type: "video", url: mockPage4 }
            ]
        }
    },
    {
        id: 4,
        image: taskMaster1,
        title: 'Task Master',
        description: 'TaskMaster is a web application designed to help users manage their tasks and collaborate with others effectively. With TaskMaster, users can create, organize, and track tasks effortlessly, whether they\'re working alone or as part of a team.',
        githubRepo: 'https://github.com/Francesco99020/Task-Master',
        appLink: 'http://127.0.0.1:5500/src/TaskMaster/TaskMaster.html',
        ProjectDetails: {
            extendedProjectDetails: "TaskMaster is a comprehensive task management and collaboration web application designed to streamline the way individuals and teams manage their tasks and projects. Built with modern web technologies such as React.js for the frontend and Node.js with Express.js for the backend, TaskMaster offers a robust and intuitive platform that caters to both personal and professional use cases. The application provides an organized and collaborative space for managing tasks and projects, making it an essential tool for improving productivity and ensuring that no task is overlooked.|| TaskMaster comes packed with features to enhance productivity and ensure efficient task management. Users can create tasks with specific deadlines, assign them to group members, and monitor their progress through a dynamic dashboard. The application supports the creation of groups, allowing users to collaborate seamlessly on shared projects. Each group has its own workspace where members can see tasks, deadlines, and updates, fostering a collaborative environment. The dashboard provides a comprehensive overview, displaying upcoming tasks, recent activities, and notifications to keep users informed about their priorities and deadlines.|| Whether you are a freelancer managing multiple clients, a student organizing your study schedule, or a team working on a project, TaskMaster offers the tools you need to stay on top of your work. The application’s user-friendly interface and powerful features help reduce the chaos of task management, allowing users to focus on what matters most. By integrating task tracking, group collaboration, and real-time notifications, TaskMaster aims to improve productivity and ensure that no task is overlooked.|| TaskMaster is versatile and can be utilized in various scenarios. Individuals can use TaskMaster to manage their daily tasks, set reminders for important deadlines, and track their progress. Teams working on projects can create groups to share tasks, assign responsibilities, and monitor project progress, which is particularly useful for remote teams that need a central place to collaborate. Students can organize their study schedules, group projects, and assignment deadlines, ensuring they stay on top of their academic responsibilities. Freelancers and small business owners can manage client projects, set deadlines, and collaborate with clients and team members effectively. TaskMaster’s flexible and powerful features make it an indispensable tool for anyone looking to improve their task management and collaboration efforts. By offering a blend of individual task management and team collaboration capabilities, TaskMaster bridges the gap between personal productivity tools and professional project management software, making it an ideal solution for a wide range of users.",
            mediaItems: [
                { type: "image", url: taskMaster1 },
                { type: "image", url: taskMaster2 },
                { type: "image", url: taskMaster3 },
                { type: "image", url: taskMaster4 },
                { type: "image", url: taskMaster5 },
                { type: "video", url: taskMaster6 },
                { type: "image", url: taskMaster7 },
                { type: "image", url: taskMaster8 },
                { type: "image", url: taskMaster9 },
                { type: "image", url: taskMaster10 },
            ]
        }
    },
    {
        id: 5,
        image: dupimg1,
        title: 'Duplicate Image Checker',
        description: "The Duplicate Image Checker is a Java-based application that helps users identify and manage duplicate images within specified directories. It features a user-friendly JavaFX interface and employs perceptual hashing to efficiently detect duplicates, organizing them into designated output directories for easy access and management.",
        githubRepo: 'https://github.com/Francesco99020/Duplicate-Image-Checker',
        appLink: 'http://127.0.0.1:5500/src/duplicate-image-checker/duplicate-image-checker',
        ProjectDetails: {
            extendedProjectDetails: "The Duplicate Image Checker project is a comprehensive Java-based application designed to identify and manage duplicate images within specified directories. The application leverages JavaFX for its graphical user interface, providing a user-friendly experience that allows users to select image files and directories, set output directories for duplicates and new images, and initiate the search process. The project is structured around two main classes: ImageInputApp, which handles the UI and primary functionality, and ImageComparison, which performs the core task of comparing images to detect duplicates.|| JavaFX is utilized to create a dynamic and interactive interface that includes buttons, labels, and checkboxes for selecting files, directories, and search options. The interface is designed to be intuitive, making it easy for users to navigate through the application. Additionally, the application employs Java's concurrency features, specifically the ExecutorService, to manage multiple threads. This ensures that the image processing tasks are performed efficiently without freezing the user interface, providing a seamless experience even when handling large volumes of images.|| The primary purpose of the Duplicate Image Checker is to assist users in efficiently organizing their image collections by identifying and separating duplicate images from unique ones. Users can specify an input directory containing the images to be checked and an output directory where duplicates and new images will be stored separately. This functionality is particularly valuable for individuals such as photographers and graphic designers who manage extensive collections of images and need a reliable tool to maintain organization and avoid redundancy.|| The application incorporates several key methods to achieve its functionality. The searchForImage method calculates a perceptual hash for the selected image and checks this hash against a map of hashes generated from the images in the specified directory. This method ensures efficient duplicate detection by comparing hash values rather than the images themselves. The calculateImageHash method reads an image, converts it to grayscale, resizes it, and calculates a hash based on pixel values, providing a consistent and fast way to compare images. The searchInDirectory method manages the search process, utilizing an ExecutorService to handle multiple threads and ensure efficient processing without blocking the user interface.|| The image comparison process in the ImageComparison class is based on perceptual hashing, where images are converted to a standard format (grayscale and resized to 8x8 pixels) and a binary hash is generated. This hash represents the image's pixel values and is used to quickly determine if two images are identical. The copyFile method is a utility function that organizes the images into \"new\" and \"duplicate\" directories based on the search results, ensuring that users can easily access and manage their sorted images.|| In summary, the Duplicate Image Checker project combines advanced image processing techniques with a user-friendly interface to provide an effective solution for managing duplicate images. By leveraging JavaFX for the interface and Java's concurrency features for efficient processing, the application ensures a responsive and efficient experience for users, making it an invaluable tool for anyone managing large image collections.",
            mediaItems: [
                { type: "image", url: dupimg1 },
                { type: "image", url: dupimg2 },
                { type: "image", url: dupimg3 },
                { type: "image", url: dupimg4 },
                { type: "video", url: dupimg5 },
                { type: "video", url: dupimg6 },
                { type: "video", url: dupimg7 },
                { type: "video", url: dupimg8 }
            ]
        }
    },
    {
        id: 6,
        image: chatroom1,
        title: 'Client to Server Chatroom',
        description: "This project is a multi-client chat application in Java that facilitates secure group communication by using a server to manage connections, authenticate users, and broadcast messages. It employs password hashing and validation for secure authentication, ensuring a robust and safe chat environment. Future enhancements include features like file sharing to improve functionality.",
        githubRepo: 'https://github.com/Francesco99020/Client-To-Server-Chatroom',
        appLink: 'http://127.0.0.1:5500/src/Client-To-Server-Chatroom',
        ProjectDetails: {
            extendedProjectDetails: "This project is a multi-client chat application developed in Java, designed to facilitate secure and efficient group communication. The application comprises four main components: the server, client handler, security utilities, and the client itself. Each component plays a critical role in ensuring the smooth operation and security of the chat environment.||The Server class initializes the server socket and listens for incoming client connections. When a new client connects, the server creates a new thread using the ClientHandler class, which manages the individual client's connection. The client handler is responsible for authenticating users through a password validation process and broadcasting messages to other connected clients. This setup allows the server to handle multiple clients concurrently, ensuring real-time communication without performance bottlenecks.||Security is a paramount concern in this application, addressed by the SecureUtils class. This class provides methods for password hashing and validation using SHA-256 encryption. The secure handling of passwords ensures that even if intercepted, the credentials remain protected. This is crucial for maintaining the integrity and confidentiality of user data within the chat system.||On the client side, the Client class handles the user interface and interaction with the server. Clients must authenticate themselves by sending a username and password to the server upon connection. Once authenticated, clients can send and receive messages in the group chat. The client application also continuously listens for incoming messages from the server, displaying them in real-time to the user. This ensures a seamless and interactive communication experience.||Overall, this project aims to create a robust, secure, and scalable chat application. By leveraging Java's networking and threading capabilities, the application supports multiple concurrent connections while maintaining high performance and security. Future enhancements, such as file sharing and additional security features, will further improve the application's functionality and user experience.",
            mediaItems: [
                { type: "image", url: chatroom1 },
                { type: "image", url: chatroom2 },
                { type: "image", url: chatroom3 },
                { type: "image", url: chatroom4 },
                { type: "image", url: chatroom5 },
                { type: "video", url: chatroom6 },
                { type: "video", url: chatroom7 }
            ]
        }
    },
];

export default JavaScriptProjectData;