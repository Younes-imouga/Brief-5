const quiz = [
    { question: "Quel mot signifie 'to eat' en français ?", response1: "Dormir - se reposer en fermant les yeux, ce qui n'a rien à voir avec la consommation de nourriture.", response2: "Manger - consommer de la nourriture pour se nourrir et maintenir son énergie.", response3: "Parler - utiliser des mots pour communiquer avec les autres, sans rapport avec manger.", answer: "2" },
    { question: "Quel est le pronom sujet pour remplacer 'Marc et moi' ?", response1: "Ils - utilisé pour parler de plusieurs personnes sans inclure le locuteur, généralement au masculin.", response2: "Vous - pour s'adresser formellement à une personne ou à un groupe.", response3: "Nous - pour inclure le locuteur et au moins une autre personne, comme 'Marc et moi'.", answer: "3" },
    { question: "Conjuguez le verbe avoir au présent pour 'nous'.", response1: "Ai - utilisé avec 'je' pour indiquer la possession, par exemple 'J'ai un livre'.", response2: "Avez - utilisé avec 'vous' pour exprimer la possession de manière formelle ou plurielle.", response3: "Avons - utilisé avec 'nous' pour indiquer que le groupe possède quelque chose, par exemple 'Nous avons des livres'.", answer: "3" },
    { question: "Quelle est la bonne traduction de 'I am happy' en français ?", response1: "Je suis triste - une expression contraire à 'happy', indiquant un sentiment négatif.", response2: "Je suis heureux - pour exprimer un sentiment positif, signifiant que l'on est content ou satisfait.", response3: "Je suis fatigué - indique un état physique d'épuisement, pas un sentiment émotionnel.", answer: "2" },
    { question: "Quel est l'antonyme de 'grand' ?", response1: "Petit - utilisé pour décrire quelque chose de petite taille ou d'envergure réduite.", response2: "Joli - décrit la beauté ou l'esthétique de quelque chose, mais n'est pas directement opposé à 'grand'.", response3: "Lent - fait référence à la vitesse, ce n'est pas un antonyme de 'grand'.", answer: "1" },
    { question: "Quel verbe est utilisé pour dire 'to go' en français ?", response1: "Manger - signifie consommer de la nourriture, pas se déplacer d'un endroit à un autre.", response2: "Aller - utilisé pour indiquer un mouvement d'un endroit à un autre, par exemple 'Je vais à l'école'.", response3: "Vivre - signifie être en vie ou résider dans un endroit, mais ne décrit pas l'action de se déplacer.", answer: "2" },
    { question: "Complétez la phrase : 'Il fait ___ aujourd'hui.'", response1: "Chaud - utilisé pour décrire une température élevée, typique pendant l'été.", response2: "Froid - fait référence à une température basse, mais pas ce que l'on recherche ici.", response3: "Bon - ne correspond pas à un terme météorologique précis.", answer: "1" },
    { question: "Quel est le pronom relatif qui complète cette phrase : 'Le livre ___ est sur la table.' ?", response1: "Que - utilisé pour relier un complément d'objet direct à un nom, ici 'le livre'.", response2: "Qui - utilisé pour relier un sujet à une phrase, mais ne fonctionne pas ici avec 'le livre'.", response3: "Dont - utilisé pour exprimer une relation de possession ou pour introduire un complément de nom.", answer: "1" },
    { question: "Complétez la phrase : '___ tu veux venir ?'", response1: "Que - n'est pas utilisé pour poser une question sur le désir ou l'intention.", response2: "Quand - utilisé pour poser des questions sur le temps, mais ici on parle de la volonté de venir.", response3: "Pourquoi - utilisé pour demander la raison de quelque chose, ce qui est plus approprié dans ce cas.", answer: "2" },
    { question: "Choisissez la conjugaison correcte du verbe 'être' pour 'il'.", response1: "Suis - utilisé avec 'je', comme dans 'Je suis content'.", response2: "Es - utilisé avec 'tu', par exemple 'Tu es gentil'.", response3: "Est - utilisé avec 'il', comme dans 'Il est fatigué'.", answer: "3" },
    { question: "Quel est l'adjectif pour décrire un objet qui a une bonne odeur ?", response1: "Mauvais - utilisé pour décrire quelque chose de désagréable, mais pas une odeur agréable.", response2: "Délicieux - utilisé pour décrire quelque chose de savoureux, mais pas nécessairement une odeur.", response3: "Parfumé - utilisé pour décrire quelque chose qui sent bon, comme une fleur ou un parfum.", answer: "3" },
    { question: "Que signifie l'expression 'avoir la pêche' ?", response1: "Être fatigué - l'expression inverse de 'avoir la pêche', qui signifie être plein d'énergie.", response2: "Être en forme - indique un état physique où l'on se sent énergique et en bonne santé.", response3: "Être triste - ne correspond pas à l'expression qui décrit un état positif d'énergie.", answer: "2" },
    { question: "Comment dit-on 'I like to read' en français ?", response1: "J'aime lire - signifie que l'on apprécie l'activité de lire.", response2: "Je mange lire - un mélange incorrect de verbes.", response3: "J'aime courir - indique une préférence pour une autre activité physique.", answer: "1" },
    { question: "Complétez la phrase avec la bonne option : 'Elle est plus ___ que moi.'", response1: "Vite - utilisé pour décrire la vitesse, mais pas pour une comparaison de capacité.", response2: "Rapide - utilisé pour décrire quelque chose de rapide ou plus rapide que d'autres.", response3: "Lente - l'opposé de 'rapide', mais ne correspond pas ici à l'idée de comparaison.", answer: "2" },
    { question: "Quel est l'intrus parmi ces mots ?", response1: "Voiture - un moyen de transport à roues.", response2: "Bicyclette - aussi un moyen de transport à deux roues.", response3: "Tracteur - utilisé principalement dans l'agriculture, mais toujours un moyen de transport.", response4: "Avion - un moyen de transport aérien, distinct des autres moyens de transport à roues.", answer: "4" },
    { question: "Quelle est la traduction de 'Thank you very much' en français ?", response1: "Merci beaucoup - une phrase pour exprimer sa gratitude.", response2: "Je vous en prie - utilisé pour répondre à 'merci', signifiant 'de rien'.", response3: "Excusez-moi - utilisé pour attirer l'attention ou s'excuser, pas pour remercier.", answer: "1" },
    { question: "Que signifie 'être dans la lune' ?", response1: "Être distrait - signifie être dans ses pensées, loin de la réalité.", response2: "Être fatigué - bien que cela puisse aussi être un signe de fatigue, ce n'est pas la signification principale.", response3: "Être heureux - une expression qui ne correspond pas à un état de distraction.", answer: "1" },
    { question: "Quel est l'infinitif du verbe 'je mange' ?", response1: "Manger - forme de base du verbe qui exprime l'action de consommer de la nourriture.", response2: "Mange - conjugaison pour 'je', qui est la première personne du singulier.", response3: "Mangera - futur de 'manger', utilisé pour décrire une action à venir.", answer: "1" },
    { question: "Que dit-on pour dire 'Good morning' en français ?", response1: "Bonsoir - utilisé pour dire 'good evening' ou 'good night'.", response2: "Bonjour - utilisé pour saluer quelqu'un le matin ou en début de journée.", response3: "Salut - une forme plus informelle de salut, utilisée tout au long de la journée.", answer: "2" },
    { question: "Complétez cette phrase : 'J'ai ___ livre.'", response1: "Un - utilisé pour désigner un objet au singulier de genre masculin.", response2: "Des - utilisé pour indiquer plusieurs objets, mais ici nous avons un seul livre.", response3: "Le - un article défini, mais la phrase implique l'usage d'un article indéfini.", answer: "1" },
];


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]];
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

if (previousresults.score !== "empty") {
    const resultp = document.querySelector("#result-p");
    resultp.style.display = "block";
    resultp.textContent = `You got ${previousresults.score * 10}/${test.length} questions correct. Your grade was ${previousresults.grade} last time.`;
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
    selectedananswer = false;
    quizanswer = undefined;

    const resultp = document.querySelector("#result-p");
    resultp.style.display = "none";
    restartbtn.style.display = "none";

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

    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach(button => {
        button.addEventListener("click", () => {
            quizanswer = button.getAttribute("data-value");
            selectedananswer = true;

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
    if (quizanswer === test[questioncount].answer) {
        pointscount++;
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

    let score = pointscount / test.length;
    let grade;
    if (score <= 0.2) grade = "A1";
    else if (score <= 0.4) grade = "A2";
    else if (score <= 0.6) grade = "B1";
    else if (score <= 0.8) grade = "B2";
    else if (score <= 0.9) grade = "C1";
    else grade = "C2";

    resultp.style.display = "block";
    restartbtn.style.display = "block";
    resultp.textContent = `You got ${pointscount}/${test.length} questions correct. Your grade is ${grade}.`;

    document.getElementById("quiz").style.display = "none";
    document.getElementById("timer-p").style.display = "none";

    let temp = { score, grade };
    previousresults = temp;
    localStorage.setItem("result", JSON.stringify(previousresults));
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
