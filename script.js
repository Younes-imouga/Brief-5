    const quiz = [
        { question: "Quel mot signifie 'to travel' en français ?", response1: "Voyager - qui signifie se déplacer d'un endroit à un autre, souvent pour les vacances.", response2: "Visiter - qui signifie aller voir un lieu ou une personne spécifique.", response3: "Marcher - qui signifie avancer en mettant un pied devant l'autre, souvent à pied.", answer: "1" },
        { question: "Quel est le pronom sujet qui correspond au groupe suivant : 'Sophie, Luc et toi' ?", response1: "Ils - pour parler de plusieurs personnes sans inclure le locuteur, souvent au masculin.", response2: "Vous - pour s'adresser à plusieurs personnes ou à une personne en mode formel.", response3: "Nous - pour inclure soi-même et une autre personne ou un groupe.", answer: "3" },
        { question: "Conjuguez le verbe être au présent de l'indicatif à la troisième personne du singulier.", response1: "Est - qui est utilisé pour une personne unique, par exemple 'Il est ici.'", response2: "Es - forme utilisée avec 'tu', comme dans 'Tu es là.'", response3: "Sommes - forme utilisée avec 'nous', comme dans 'Nous sommes heureux.'", answer: "1" },
        { question: "Complétez la phrase en accordant l'adjectif : 'C'est une voiture vraiment ___.'", response1: "Beaux - au masculin pluriel, pour des objets multiples.", response2: "Belle - au féminin singulier, pour décrire une seule chose élégante ou jolie.", response3: "Belles - au féminin pluriel, pour décrire plusieurs objets féminins élégants.", answer: "2" },
        { question: "Quelle est la meilleure façon de dire : 'This book is mine' en français ?", response1: "Ce livre est à moi - indiquant la possession d’un objet spécifique.", response2: "Ce livre est le sien - pour montrer qu'il appartient à une tierce personne.", response3: "Ce livre est aux autres - pour dire qu'il appartient à d'autres personnes.", answer: "1" },
        { question: "Choisissez la conjugaison correcte du verbe prendre au passé composé pour 'nous' :", response1: "Nous avons pris - indiquant une action accomplie dans le passé par un groupe incluant le locuteur.", response2: "Nous prenions - pour une action répétée ou continue dans le passé.", response3: "Nous prendrons - pour une action future.", answer: "1" },
        { question: "Complétez cette phrase en choisissant la meilleure option : 'Je ne peux pas venir te voir aujourd'hui ___ il pleut.'", response1: "car - pour exprimer la cause de manière explicite.", response2: "depuis que - qui indique un point de départ dans le passé et continue jusqu'à présent.", response3: "afin que - pour indiquer une intention ou un but.", answer: "1" },
        { question: "Complétez la phrase avec la forme correcte du verbe pour exprimer une nécessité : 'Il est essentiel que nous ___ à l'heure.'", response1: "soyons - le subjonctif présent pour une nécessité ou un souhait.", response2: "sommes - utilisé pour indiquer une action factuelle, non spéculative.", response3: "serons - le futur simple pour des actions à venir.", answer: "1" },
        { question: "Que signifie l'expression 'avoir la tête dans les nuages' ?", response1: "Être distrait ou rêvasser - ne pas être concentré, souvent perdu dans ses pensées.", response2: "Être en colère - ressentir une forte émotion négative.", response3: "Être fatigué - manquer d'énergie ou de motivation.", answer: "1" },
        { question: "Complétez avec le pronom relatif approprié : 'C'est le livre ___ tu m'as parlé hier.'", response1: "Que - pour remplacer un objet direct que l'on mentionne.", response2: "Qui - utilisé pour le sujet d'une phrase.", response3: "Dont - utilisé pour exprimer une relation de possession ou de sujet de discours.", answer: "3" }
    ];

    function chuffle(arr) {
        const num = 5;

        for(var i = quiz.length-1; i >= 0; i--){
            for(var j = 0; j < num; j++){
                const rand = Math.floor(Math.random() * 5);
                [arr[i], arr[rand]] = [arr[rand], arr[i]];
            }
        }
        return arr;
    }

    let test = chuffle(quiz);

    let previousresults = JSON.parse(localStorage.getItem('result')) || {score: "empty", grade: "empty"};

    const startbtn = document.getElementById("start");
    const section = document.getElementById("quiz-section");

    
    let questioncount = 0;
    let pointscount = 0;
    let quizanswer;
    let quizvalidation;
    
    if (previousresults.score !== "empty" ) {
        const resultp = document.querySelector("#result-p");
        resultp.style.display ="block";
        resultp.textContent = `You got ${previousresults.score * 10}/${quiz.length} questions correct your grade was ${previousresults.grade} Last Time`;
    }

    startbtn.addEventListener("click", () => {
        section.style.display = "block";
        displayquestions();
        timer();
        startbtn.setAttribute("disabled", true);
    })

    function displayquestions() {
        const resultp = document.querySelector("#result-p");
        resultp.style.display ="none";

        const quizdiv = document.getElementById("quiz");
        quizdiv.innerHTML = "";
        quizdiv.innerHTML = `
            <div id="question-div">
                <div id="subdiv-ques">
                    <h3>Question ${questioncount + 1}:</h3>
                    <p>${quiz[questioncount].question}</p>
                </div>
            </div>
            <div id="response-div">
                <div id="subdiv-res">
                    <div class="answer" id="answer-1">
                        <label><br>${quiz[questioncount].response1}<br><br></label>
                        <input type="radio" name="response" value="1">
                    </div>
                    <div class="answer" id="answer-2">
                        <label><br>${quiz[questioncount].response2}<br><br></label>
                        <input type="radio" name="response" value="2">
                    </div>
                    <div class="answer" id="answer-3">
                        <label><br>${quiz[questioncount].response3}<br><br></label>
                        <input type="radio" name="response" value="3">
                    </div>
                </div>
                <button id="submit">Submit</button>
            </div>
        `
        const submitbtn = document.getElementById("submit");
        submitbtn.addEventListener("click", submiting);
    }

    let time = 20;

    function submiting() {
        let selectedananswer = false;
        quizanswer = undefined;
        let responseparrent;

        const responses = document.querySelectorAll('input[name="response"]');

            responses.forEach((response) => {
                if (response.checked) {
                    quizanswer = response.value;
                    selectedananswer = true
                }
            })

            if (!selectedananswer) {
                alert("You must select an answer");
            }else{
                document.getElementById("submit").setAttribute("disabled", true);
                quizvalidation = checkresponse();
                
                // here we have now the user's answer input and its div 
                // i want here to call the array and know if the answer is 
                // right from the answer variable in the array

                const submitbtn = document.getElementById("submit");

                responses.forEach(answers =>{
                    if (answers.value == quiz[questioncount].answer) {
                        responseparrent = answers.parentNode;
                    }
                })

                if (quizvalidation === true) {
                    pointscount++;   
                    submitbtn.style.backgroundColor = "green"; 
                    responseparrent.style.backgroundColor = "green"  
                }
                else{
                    submitbtn.style.backgroundColor = "red";
                    responseparrent.style.backgroundColor = "green"
                }
                //now i know if its true or false
                
                

                questioncount++;
                time = 21;
                setTimeout(nextquestion, 2000);
            }
            
    }

    let a;
    function timer() {
        const timerP = document.getElementById("timer-p");
        timerP.style.display = "block";

        if (questioncount < quiz.length) {            
            if (time > 0) {
                a = setInterval(showtimer,1000);
            }else{
                showtimer();
            }
        }else{
            timerP.style.display = "none";
            questioncount = 0;
        }
        
    }
    function showtimer() {
        if (time == 0) {
            clearInterval(a);
            console.log("j")
            questioncount++ ;
            
            
            nextquestion();
        }else{
        const timerP = document.getElementById("timer-p");
        timerP.textContent = `${time}s`
        time--;
        }
    }

    function nextquestion() {
        if (questioncount < quiz.length) {
            displayquestions();
        }
        else{
            result();
            timer();
        }
        console.log("i")
    }

    function checkresponse(){
        if (quizanswer === quiz[questioncount].answer) { // correct
            console.log("correct");
            return true;
        }else{  // false
            console.log("false");
            return false;
        }
    }

    function result() {
        const resultp = document.querySelector("#result-p");

        let score = Number(pointscount)/Number(quiz.length);
        let grade;
        if (score <= 0.2){
            grade = "A1";
        }else if (score <= 0.4){
            grade = "A2";
        }else if (score <= 0.6){
            grade = "B1";
        }else if (score <= 0.8){
            grade = "B2";
        }else if (score <= 0.9){
            grade = "C1";
        }else{
            grade = "C2";
        }

        resultp.style.display ="block";
        resultp.textContent = `You got ${pointscount}/${quiz.length} questions correct your grade is ${grade}`;

        const quizdiv = document.getElementById("quiz");
        quizdiv.style.display = "none";

        let temp = {score : score, grade: grade}
        previousresults = temp;

        localStorage.setItem("result", JSON.stringify(previousresults));
    }


    function restart() {
        console.log("hello");
    }

    // <p id="result-p"></p>
