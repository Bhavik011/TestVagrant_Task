import {data} from './data.js';
const teams=[];

data.forEach((team)=>{
    var count=0;
    team.Results.forEach((result)=>{
        result=='L'?count++:count=0;
        if(count==2){
        teams.push(team);
        return;
        }
    })
})
console.log(teams);