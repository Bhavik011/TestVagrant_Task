import {
    data
} from './data.js';
const teams = [];

const solution = (outcome, repetition) => {
    data.forEach((team) => {
        var count = 0;
        team.Results.forEach((result) => {
            result == outcome ? count++ : count = 0;
            if (count == repetition) {
                teams.push(team);
                return;
            }
        })
    })
}
solution('W', 2);
if (teams.length == 0) {
    console.log('No teams found');
} else
    console.log(teams);