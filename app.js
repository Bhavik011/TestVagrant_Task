import {solution,average} from './utility.js';

const outcome ='W'  //'W','L
const count=2; 

const teams = solution(outcome, count);

if (teams.length == 0) {
    console.log('No teams found');
} else
    console.log(teams);

    const averagePoints=average();
    console.log("average points of teams are: " + averagePoints);