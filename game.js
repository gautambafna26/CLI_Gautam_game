let readlineSync = require("readline-sync");
let questionOne= "Whats your name ";
let score = 0;
let userName= readlineSync.question(questionOne);
let name = "Gatuam";

console.log("Welcome " + userName + " lets see how much do you KNOW "+ name  );

let highscore = [
    {
        name : "Gautam",
        score: 3
    },
    {
        name: "Aj",
        score: 3,
    }
]

function play(question,answer){
    let userAnswer = readlineSync.question(question);

    if(userAnswer.toUpperCase() == answer.toUpperCase()){
        console.log("Right!!!");
        score=score+1; 
        
    }
    else{
        console.log("Wrong!!!");
    }
    console.log("Current score is : ",score);
        console.log("------------------------------");
}


//array of objects
let questions = [{
    question: "Where do " + name + " live? ",
    answer: "Pune",
},{
    question: "Whats " + name + " BirthMonth? ",
    answer: "May",
},
{
    question: "Whats " + name + " Fav IPL team? ",
    answer: "Csk",
},{
    question: "Where do " + name + "work ? ",
    answer: "Flairminds",
}];

//loop

for(let i =0;i<questions.length;i++){
    let currentQuestion= questions[i];
    play(currentQuestion.question,currentQuestion.answer)
}

console.log("YAY! Your score is:", score);

if (score > highscore[0].score) {
    console.log("Congratulations! You've set a new high score!");
    highscore[0].name = userName;
    highscore[0].score = score;
} else {
    console.log("The highest score is:", highscore[0].score, "by", highscore[0].name);
}

console.log("High Scores:");
    console.log(highscore[0].name + ": " + highscore[0].score);
