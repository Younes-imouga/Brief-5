const quiz = [
    { question: "Quel mot signifie 'to eat' en français ?", response1: "Dormir - cela signifie se reposer en fermant les yeux pour récupérer de l'énergie. Il n'a rien à voir avec l'acte de consommer de la nourriture.", response2: "Manger - ce verbe est utilisé pour exprimer l'acte de consommer des aliments, ce qui est essentiel pour se nourrir et maintenir son énergie.", response3: "Parler - cela signifie communiquer avec des mots ou des gestes pour échanger des idées avec d'autres, sans lien direct avec l'alimentation.", answer: "2" },
    { question: "Quel est le pronom sujet pour remplacer 'Marc et moi' ?", response1: "Ils - ce pronom est employé pour parler de plusieurs personnes sans inclure le locuteur, et est généralement utilisé pour un groupe masculin ou mixte.", response2: "Vous - un pronom formel utilisé pour s'adresser à une personne ou à un groupe de manière respectueuse, mais ne convient pas pour 'Marc et moi'.", response3: "Nous - ce pronom inclut le locuteur et au moins une autre personne, donc il remplace bien 'Marc et moi'.", answer: "3" },
    { question: "Conjuguez le verbe avoir au présent pour 'nous'.", response1: "Ai - cette conjugaison est utilisée uniquement avec le pronom 'je' pour indiquer la possession, par exemple 'J'ai un livre', et ne s'applique pas à 'nous'.", response2: "Avez - la forme 'avez' est la conjugaison pour 'vous' au présent et est utilisée pour indiquer la possession pour une deuxième personne au singulier formel ou pluriel.", response3: "Avons - cette forme du verbe 'avoir' est utilisée avec 'nous' et indique que le groupe possède quelque chose, comme dans 'Nous avons des livres'.", answer: "3" },
    { question: "Quelle est la bonne traduction de 'I am happy' en français ?", response1: "Je suis triste - cette phrase signifie le contraire d'être heureux. Elle exprime un sentiment de tristesse ou de mécontentement, donc elle ne traduit pas correctement 'I am happy'.", response2: "Je suis heureux - cette expression est utilisée pour exprimer un sentiment de bonheur ou de satisfaction et est la traduction correcte de 'I am happy'.", response3: "Je suis fatigué - cela indique un état d'épuisement physique, qui est lié à un manque d'énergie, mais ne traduit pas un sentiment de bonheur.", answer: "2" },
    { question: "Quel est l'antonyme de 'grand' ?", response1: "Petit - ce mot est utilisé pour décrire quelque chose de petite taille ou de faible longueur, ce qui est l'opposé direct de 'grand'.", response2: "Joli - cela décrit la beauté ou l'esthétique, mais il n'a pas de relation directe avec la taille ou la longueur.", response3: "Long - ce mot fait référence à la dimension horizontale ou verticale d'un objet, mais ce n'est pas un antonyme de 'grand' dans le contexte de taille.", answer: "1" },
    { question: "Quel verbe est utilisé pour dire 'to go' en français ?", response1: "Manger - signifie consommer de la nourriture pour se nourrir, sans rapport avec le déplacement ou le mouvement.", response2: "Aller - ce verbe est utilisé pour indiquer un mouvement d'un endroit à un autre, comme dans 'Je vais à l'école', correspondant au verbe 'to go'.", response3: "Vivre - cela signifie être en vie ou résider dans un endroit, mais ne décrit pas l'action de se déplacer d'un lieu à un autre.", answer: "2" },
    { question: "Complétez la phrase : 'Il fait ___ aujourd'hui.'", response1: "Chaud - un terme pour décrire une température élevée, souvent ressenti en été.", response2: "Froid - un terme pour indiquer une température basse, typique en hiver.", response3: "Bon - ne correspond pas ici à un terme météorologique spécifique, mais pourrait être une impression générale.", answer: "1" },
    { question: "Quel est le pronom relatif qui complète cette phrase : 'Le livre ___ est sur la table.' ?", response1: "Que - utilisé pour relier un complément d'objet direct au nom précédent, ici 'le livre'.", response2: "Qui - pronom sujet qui relie une phrase, mais pas le complément d'objet direct.", response3: "Dont - indique une relation de possession, mais ne correspond pas dans ce cas particulier.", answer: "1" },
    { question: "Complétez la phrase : '___ tu veux venir ?'", response1: "Que - n'est pas adapté ici pour questionner sur un désir ou une volonté de venir.", response2: "Quand - utilisé pour interroger sur le moment, mais ici on parle de volonté de venir.", response3: "Pourquoi - utilisé pour demander la raison de quelque chose, ce qui est plus approprié dans ce cas.", answer: "2" },
    { question: "Choisissez la conjugaison correcte du verbe 'être' pour 'il'.", response1: "Suis - forme pour 'je', comme dans 'Je suis heureux'.", response2: "Es - forme pour 'tu', comme dans 'Tu es gentil'.", response3: "Est - utilisé avec 'il', comme dans 'Il est content'.", answer: "3" },
    { question: "Quel est l'adjectif pour décrire un objet qui a une bonne odeur ?", response1: "Mauvais - pour décrire quelque chose de désagréable, pas une odeur agréable.", response2: "Délicieux - qualifie le goût, pas directement une odeur.", response3: "Parfumé - pour décrire un objet ayant une odeur agréable, souvent utilisé pour des fleurs ou des parfums.", answer: "3" },
    { question: "Que signifie l'expression 'avoir la pêche' ?", response1: "Être fatigué - indique un état de manque d'énergie, contraire à 'avoir la pêche'.", response2: "Être en forme - signifie être énergique et en bonne santé.", response3: "Être triste - sentiment opposé à un état énergique ou joyeux.", answer: "2" },
    { question: "Comment dit-on 'I like to read' en français ?", response1: "J'aime lire - indique une préférence pour la lecture en général.", response2: "Je mange lire - combinaison incorrecte de verbes.", response3: "J'aime courir - indique une préférence pour une activité physique différente.", answer: "1" },
    { question: "Complétez la phrase avec la bonne option : 'Elle est plus ___ que moi.'", response1: "Vite - adjectif de vitesse, mais pas utilisé pour une comparaison de capacité en ce contexte.", response2: "Rapide - décrit une capacité de rapidité relative.", response3: "Lente - adjectif contraire de rapide, mais n'est pas l'option ici.", answer: "2" },
    { question: "Quel est l'intrus parmi ces mots ?", response1: "Voiture - un moyen de transport terrestre.", response2: "Bicyclette - un autre moyen de transport terrestre.", response3: "Avion - un moyen de transport aérien, différent des autres.", answer: "3" },
    { question: "Quelle est la traduction de 'Thank you very much' en français ?", response1: "Merci beaucoup - pour exprimer sa gratitude de manière renforcée.", response2: "Je vous en prie - utilisé pour répondre à 'merci', signifiant 'de rien'.", response3: "Excusez-moi - pour attirer l'attention ou s'excuser.", answer: "1" },
    { question: "Que signifie 'être dans la lune' ?", response1: "Être distrait - signifie être perdu dans ses pensées.", response2: "Être fatigué - possible, mais ce n'est pas la signification première.", response3: "Être heureux - ne décrit pas un état de distraction.", answer: "1" },
    { question: "Quel est l'infinitif du verbe 'je mange' ?", response1: "Manger - forme de base pour exprimer l'action de manger.", response2: "Mange - conjugaison pour 'je', première personne du singulier.", response3: "Mangera - forme au futur pour une action à venir.", answer: "1" },
    { question: "Que dit-on pour dire 'Good morning' en français ?", response1: "Bonsoir - pour 'good evening' ou 'good night'.", response2: "Bonjour - pour saluer quelqu'un le matin ou en début de journée.", response3: "Salut - forme plus informelle utilisée tout au long de la journée.", answer: "2" },
    { question: "Complétez cette phrase : 'J'ai ___ livre.'", response1: "Un - pour désigner un seul objet masculin au singulier.", response2: "Des - pour plusieurs objets, mais ici il s'agit d'un seul.", response3: "Le - article défini, mais la phrase implique un article indéfini.", answer: "1" },
];

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

