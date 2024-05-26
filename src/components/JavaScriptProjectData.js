import ChessGameImage from '../images/ChessGameImage.png';
import ClockImage from '../images/ClockImage.png';
import MockBosePageImage from '../images/MockBosePageImage.png';

import chess1 from '../images/chess1.png';
import chess2 from '../images/chess2.png';
import chess3 from '../images/chess3.png';
import chess4 from '../images/chess4.png';
import chess5 from '../images/chess5.png';

const JavaScriptProjectData = [
    { id: 1, image: ChessGameImage, title: 'Chess', description: "A chess board game I solo developed using only pure HTML, CSS and JavaScript.", githubRepo: 'https://github.com/Francesco99020/chess_game', appLink: 'http://127.0.0.1:5500/src/ChessGame/ChessGame.html', ProjectDetails: {
        extendedProjectDetails: "The Chess Game Implementation project is a web-based application designed to bring the classic game of chess to life in a digital format. Developed using HTML, CSS, and JavaScript, the project aims to provide an immersive and engaging gaming experience for players of all skill levels.|| At its core, the project focuses on implementing the fundamental rules and mechanics of chess, allowing two players to engage in strategic battles on a virtual chessboard. The user interface is meticulously crafted using HTML and CSS to replicate the traditional chessboard layout, complete with distinct visual representations of each chess piece.|| JavaScript serves as the backbone of the project, powering the intricate game logic and interaction dynamics. Functions are meticulously structured to handle various aspects of gameplay, including piece movement, check detection, and special move validation. Through careful coding and debugging, the project ensures that all game mechanics adhere to the established rules of chess, providing players with an authentic and enjoyable experience.|| In conclusion, the Chess Game Implementation project exemplifies the fusion of web development expertise and gaming mechanics to deliver a polished and entertaining gaming experience. By leveraging HTML, CSS, and JavaScript, the project aims to captivate players with its strategic depth, intuitive interface, and commitment to authenticity in replicating the timeless game of chess in the digital realm.", 
        photos: [chess1, chess2, chess3, chess4, chess5]
    } },
    { id: 2, image: ClockImage, title: 'Clock', description: "A Pure HTML, CSS and JavaScript clock I solo developed.", githubRepo: 'https://github.com/Francesco99020/clock', appLink: 'http://127.0.0.1:5500/src/Clock/Clock.html', ProjectDetails: {
        extendedProjectDetails: "", 
        photos: []
    } },
    { id: 3, image: MockBosePageImage, title: 'Mock Bose Page', description: 'A pure HTML, CSS, and JavaScript mock Bose landing page I made for my multimedia web design class.', githubRepo: 'https://github.com/Francesco99020/Bose-Headphones-Mock-Landing-page', appLink: 'http://127.0.0.1:5500/src/MockBoseLandingPage/MockPage.html', ProjectDetails: {
        extendedProjectDetails: "", 
        photos: []
    } }
]

export default JavaScriptProjectData;