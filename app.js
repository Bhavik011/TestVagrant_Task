import {
    solution,
    average
} from './utility.js';
import promptSync from 'prompt-sync';

const prompt = promptSync();
try {
    const outcome = prompt("Enter the outcome as 'W','L' ");
    if (outcome != 'W' && outcome != 'L') throw "Invalid outcome. Please Enter 'W' or 'L'";
    let count = prompt("Enter count of consecutive wins or losses:");
    count = parseInt(count);
    if (typeof count != 'number') throw "Invalid count. Enter a number";

    const teams = solution(outcome, count);

    if (teams.length == 0) {
        console.log('No teams found');
    } else
        console.log(teams);

    const averagePoints = average();
    console.log("average points of teams are: " + averagePoints);

} catch (e) {
    console.log(e);
}

//  outcome = 'W' or 'L
//  count=2; 