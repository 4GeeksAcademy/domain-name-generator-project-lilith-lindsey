import "bootstrap";
import "./style.css";

const pronoun = ['the', 'our', 'my', 'his'];
const adj = ['big', 'glorious', 'crazy', 'terrifying'];
const noun = ['racoon', 'robot', 'sandwich', 'astronaut'];

const myURL = [];

for (let i = 0; i < pronoun.length; i++){
    for (let j = 0; j < adj.length; j++){
        for (let k = 0; k < noun.length; k++){
            const domain = [pronoun[i] + adj[j] + noun[k]] + ".com";
            myURL.push(domain)
        }
    }
}

console.log(myURL)
