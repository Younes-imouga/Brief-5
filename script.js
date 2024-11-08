const quiz = [
    { question: "What does “ça me manque” mean?", response1: "I don’t want it – Incorrect; “ça me manque” relates to missing something, not rejection.", response2: "I miss it – Expresses longing for something, literally “it is missing to me.”", response3: "I have it – Does not relate to possession; it’s about the absence of something.", answer: 2 },
    { question: "What’s the correct way to say “I will go” in French?", response1: "Je vais aller – Present continuous meaning “I’m going to go” but less definitive.", response2: "Je suis allé – Past form meaning “I went,” not related to future intention.", response3: "J’irai – Future form of “aller” meaning “I will go” with an emphasis on future intent.", answer: 3 },
    { question: "Which expression means “I can’t believe it”?", response1: "Je n’en reviens pas – Common expression to express disbelief or surprise at something.", response2: "Je n’y pense pas – Means “I’m not thinking about it,” not disbelief.", response3: "Je ne le fais pas – Means “I don’t do it”; doesn’t convey disbelief.", answer: 1 },
    { question: "What does “faire la grasse matinée” mean?", response1: "To have a lazy day – Close but incorrect; it’s more specifically about sleeping late.", response2: "To sleep in – Refers to staying in bed late, literally “to make a fat morning.”", response3: "To eat breakfast – Not related; it means relaxing in bed, not eating.", answer: 2 },
    { question: "What’s the meaning of “C’est dommage”?", response1: "That’s amazing – Opposite of regret; “dommage” implies sadness or disappointment.", response2: "That’s too bad – Used to express regret or disappointment about a situation.", response3: "That’s funny – Incorrect, as “dommage” has no humor; it conveys regret.", answer: 2 },
    { question: "What does “il pleut des cordes” mean?", response1: "It’s windy – Incorrect, as it describes rain and not wind intensity.", response2: "It’s raining heavily – A French idiom comparing heavy rain to falling ropes.", response3: "It’s snowing – This phrase only applies to rain, not snow.", answer: 2 },
    { question: "What does “mettre les pieds dans le plat” mean?", response1: "To start cooking – Incorrect; it’s a social misstep, not culinary.", response2: "To make a blunder – Idiomatic for causing discomfort or awkwardness in conversation.", response3: "To dance – No connection; this idiom doesn’t relate to dancing.", answer: 2 },
    { question: "How do you say “I have been working” in French?", response1: "Je travaille – Present tense, “I work” or “I am working” right now.", response2: "Je travaille depuis – Suggests an ongoing action starting in the past.", response3: "J’ai travaillé – Implies a completed action, meaning “I worked” in the past tense.", answer: 2 },
    { question: "What does “être aux anges” mean?", response1: "To be overjoyed – Expresses a feeling of extreme happiness, like being in heaven.", response2: "To be confused – Incorrect; this idiom is about joy, not confusion.", response3: "To be afraid – Opposite; “aux anges” implies a state of bliss.", answer: 1 },
    { question: "What is “se mettre au travail”?", response1: "To get to work – Refers to beginning or resuming a work-related task or activity.", response2: "To finish working – Not correct; it means to start, not finish, working.", response3: "To leave work – Incorrect, as it means to start, not end, work.", answer: 1 },
    { question: "What does “tomber dans les pommes” mean?", response1: "To get angry – Incorrect; this idiom implies weakness, not anger.", response2: "To faint – French idiom used for passing out, literally “falling into apples.”", response3: "To cry – No relation to crying; it means fainting or losing consciousness.", answer: 2 },
    { question: "Which word means “to improve” in French?", response1: "Aggraver – Means “to worsen,” opposite of improving.", response2: "Améliorer – Correct; this verb means to make something better.", response3: "Diminuer – Incorrect; it means “to reduce” or “to make smaller.”", answer: 2 },
    { question: "What’s the meaning of “à l’aise”?", response1: "Comfortable – Means feeling relaxed or at ease in a situation.", response2: "Angry – Incorrect, as it doesn’t imply any negative feelings.", response3: "In pain – Incorrect; “à l’aise” conveys comfort, not discomfort.", answer: 1 },
    { question: "What does “être crevé” mean?", response1: "To be exhausted – Slang for extreme tiredness, like saying “worn out.”", response2: "To be happy – Incorrect, as “crevé” implies fatigue, not happiness.", response3: "To be energized – Opposite meaning, since “crevé” implies fatigue.", answer: 1 },
    { question: "What is the meaning of “ce n’est pas grave”?", response1: "It’s dangerous – Not correct; it’s a casual way of downplaying an issue.", response2: "It’s very important – Opposite meaning; “grave” here negates importance.", response3: "It’s not serious – Common way to reassure someone that something is minor.", answer: 3 },
    { question: "What does “prêt à l’emploi” mean?", response1: "Easy to break – Incorrect; this phrase implies usability, not fragility.", response2: "Difficult to use – Opposite meaning, as it implies readiness for use.", response3: "Ready to use – Common phrase for something prepared for immediate use.", answer: 3 },
    { question: "What is “c’est n’importe quoi”?", response1: "That’s awesome – Incorrect; it’s a negative phrase about something illogical.", response2: "That’s nonsense – Used to express disbelief or disdain toward something illogical.", response3: "That’s normal – Incorrect; implies something nonsensical, not standard.", answer: 2 },
    { question: "What does “rendre visite à” mean?", response1: "To visit someone – Specifically means visiting people, not places or landmarks.", response2: "To take back – Incorrect; this is about visiting, not reclaiming items.", response3: "To arrive – Incorrect, as it implies meeting, not simply arriving.", answer: 1 },
    { question: "Which phrase means “see you soon” in French?", response1: "À bientôt – Friendly way to express that you’ll meet again soon.", response2: "Salut – Informal greeting or goodbye, less specific about timing.", response3: "Au revoir – Common farewell, but less specific about meeting soon.", answer: 1 },
    { question: "What does “faire d’une pierre deux coups” mean?", response1: "To make an effort – Incorrect; it implies efficiency, not effort alone.", response2: "To miss the target – Incorrect; it means achieving two things, not failing.", response3: "Kill two birds with one stone – French idiom meaning to achieve two goals at once.", answer: 3 }
]

let rapport = JSON.parse(localStorage.getItem("rapport"));

function shuffle(array){
    const num = 5;
    
    for(var i = array.length -1; i>=0; i--){
        for(var j = 0; j < num; j++){
            const rand = Math.floor(Math.random() * 5)
            var temp = array[i];
            array[i] = array[rand];
            array[rand] = temp;
        }
    }
    return array;
}


let test = shuffle([...quiz]);
let previousresults = JSON.parse(localStorage.getItem('result')) || { score: "empty", grade: "empty" };
const startbtn = document.getElementById("start");
const restartbtn = document.querySelector("#restart");
const section = document.getElementById("quiz-section");

let questioncount = 0;
let pointscount = 0;
let quizanswer;
let selectedananswer = false;

if (rapport.score !== "empty") {
    const resultp = document.querySelector("#result-p");
    resultp.style.display = "block";
    resultp.textContent = `You got ${rapport.score.score * 20}/${test.length} questions correct last time. Your grade was ${rapport.score.grade}.`;
}

if (rapport) {
    rapport = {question: [], reponsecorrect: [], responseselected: [], reponse: [], score : {}};
}else{
    let rapport = {question: [], reponsecorrect: [], responseselected: [], reponse: [], score : {}};
}

startbtn.addEventListener("click", () => {
    timer();
    section.style.display = "block";
    setTimeout(() => {
        displayquestions();
    }, 1000);
    startbtn.setAttribute("disabled", true);
});


function displayquestions() {
    const docdownload = document.getElementById("Get-rapport");
    const ahref = docdownload.parentNode;
    selectedananswer = false;
    quizanswer = undefined;

    const resultp = document.querySelector("#result-p");
    resultp.style.display = "none";
    restartbtn.style.display = "none";
    ahref.style.display = "none";


    const quizdiv = document.getElementById("quiz");
    quizdiv.innerHTML = `
        <div id="question-div">
            <div id="subdiv-ques">
                <h3>Question ${questioncount + 1}:</h3>
            <p>${test[questioncount].question}</p>
            </div>
        </div>
        <div id="response-div">
            <div id="subdiv-res">
                <div class="answer" id="answer-1">
                    <label><br>${test[questioncount].response1}<br><br></label>
                    <button class="answer-btn" data-value="1">A</button>
                </div>
                <div class="answer" id="answer-2">
                    <label><br>${test[questioncount].response2}<br><br></label>
                    <button class="answer-btn" data-value="2">B</button>
                </div>
                <div class="answer" id="answer-3">
                    <label><br>${test[questioncount].response3}<br><br></label>
                    <button class="answer-btn" data-value="3">C</button>                        
                </div>
            </div>
            <p id="nothingselected" style="display: none;">You must select an answer</p>
            <button id="next" class ="submit" style="display: none;">Next</button>
        </div>
    `;

    rapport.question.push(test[questioncount].question);

    const questionObj = test[questioncount];
    rapport.reponsecorrect.push([questionObj[`response${questionObj.answer}`]]);

    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach(button => {
        button.addEventListener("click", () => {
            quizanswer = button.getAttribute("data-value");
            selectedananswer = true;

            const selectedAnswer = questionObj[`response${quizanswer}`];
            rapport.responseselected.push(selectedAnswer);

            clearInterval(timerInterval);
            checkresponse();
            highlightAnswers();
            document.getElementById("next").style.display = "block";

            answerButtons.forEach(answerbtn => {
            answerbtn.setAttribute("disabled", true);
            });
        });
    });

    document.getElementById("next").addEventListener("click", () => {
        questioncount++;
        nextquestion();
    });
}

function checkresponse() {
    if (quizanswer === test[questioncount].answer){
        pointscount++;
        rapport.reponse.push("Correct");
    }else{
        rapport.reponse.push("False");
    }
}

function highlightAnswers() {
    document.querySelectorAll(".answer-btn").forEach(button => {
        if (button.getAttribute("data-value") === test[questioncount].answer) {
            button.style.backgroundColor = "green";
        } else if (button.getAttribute("data-value") === quizanswer) {
            button.style.backgroundColor = "red";
        }
    });
}

let time = 20;
let timerInterval;

function timer() {
    clearInterval(timerInterval);
    const timerP = document.getElementById("timer-p");
    timerP.style.display = "block";
    time = 20;

    timerInterval = setInterval(() => {
        if (time === 0) {
            
            clearInterval(timerInterval);
            highlightAnswers();
            document.getElementById("next").style.display = "block";
            rapport.responseselected.push("didnt select an answer");

            document.querySelectorAll(".answer-btn").forEach(button => {
            button.setAttribute("disabled", true);
            });
        } else {
            timerP.textContent = `${time}s`;
            time--;
        }
    }, 1000);
}

function nextquestion() {
    clearInterval(timerInterval);
    if (questioncount < test.length) {
        timer();
        setTimeout(() => {
            displayquestions();
        }, 1000);
    } else {
        result();
    }
}

function result() {
    const resultp = document.querySelector("#result-p");
    const docdownload = document.getElementById("Get-rapport");
    const ahref = docdownload.parentNode;

    let score = (pointscount / test.length);
    let grade;
    if (score <= 0.2) grade = "A1";
    else if (score <= 0.4) grade = "A2";
    else if (score <= 0.6) grade = "B1";
    else if (score <= 0.8) grade = "B2";
    else if (score <= 0.9) grade = "C1";
    else grade = "C2";

    resultp.style.display = "block";
    restartbtn.style.display = "block";
    ahref.style.display = "block";
    resultp.textContent = `You got ${pointscount}/${test.length} questions correct. Your grade is ${grade}.`;

    document.getElementById("quiz").style.display = "none";
    document.getElementById("timer-p").style.display = "none";

    let temp = { score, grade };
    previousresults = temp;

    rapport.score = temp;

    localStorage.setItem("rapport", JSON.stringify(rapport));
}

restartbtn.addEventListener("click", () => {
    pointscount = 0;
    questioncount = 0;
    test = shuffle([...quiz]);

    clearInterval(timerInterval);
    document.getElementById("quiz").style.display = "block";
    document.querySelector("#result-p").style.display = "none";

    section.style.display = "block";
    timer();
    setTimeout(() => {
        displayquestions();
    }, 1000);
});

