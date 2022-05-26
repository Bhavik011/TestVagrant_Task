import {
    data
} from './data.js';

const teams= [];

export const solution = (outcome, repetition) => {
    data.forEach(team => {
        var count = 0;
        team.Results.forEach(result => {
            result == outcome ? count++ : count = 0;
            if (count == repetition) {
                teams.push(team);
                return;
            }
        })
    })
    return teams;
}

export const average = () => {
    let sum = 0;
    teams.forEach(team => {
        sum += team.Points;
    })
    return sum / teams.length;
}