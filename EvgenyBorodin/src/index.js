import React from "react";
import ReactDOM from "react-dom";
import { App } from './App.jsx';
// import './style.css'

// const messages = [
//     { name: "Ivan", content: "Hello, world!" },
//     { name: "Petr", content: "Helo, how are you?" },
//     { name: "Ivan", content: "I'm well" },
// ]


// const Message = ({name, content}) => {
//     return <li><strong>{name}:</strong> {content}</li>
// }

// const MessageList = ({messages}) => {
//     return (<ul>
//         {messages.map((item, index) => <Message {...item} key={index} />)}
//     </ul>);
// }

ReactDOM.render(<App />, document.getElementById("root"))