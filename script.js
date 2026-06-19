```javascript
// ============================
// MENU MOBILE
// ============================

document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");

    if (hamburger && mobileMenu) {

        hamburger.addEventListener("click", () => {

            if (
                mobileMenu.style.display === "flex"
            ) {
                mobileMenu.style.display = "none";
            } else {
                mobileMenu.style.display = "flex";
            }

        });

        document
            .querySelectorAll(".mobile-menu a")
            .forEach(link => {

                link.addEventListener("click", () => {
                    mobileMenu.style.display = "none";
                });

            });

    }

});


// ============================
// DATA QUIZ
// ============================

const quizData = [

{
q:"Siapa pendiri kesenian Reog Ponorogo menurut legenda?",
a:[
"Ki Ageng Kuntjoro",
"Raden Panji Sumirat",
"Prabu Klono Sewandono",
"Ki Ageng Suryo Ngalim"
],
correct:2
},

{
q:"Apa nama topeng raksasa utama dalam Reog Ponorogo?",
a:[
"Bujang Ganong",
"Singa Barong",
"Patih Surowi",
"Jathilan"
],
correct:1
},

{
q:"Apa makna filosofis Singa Barong?",
a:[
"Kekuasaan Raja",
"Kekuatan Alam dan Spiritual",
"Kebijaksanaan",
"Hiburan"
],
correct:1
},

{
q:"Kabupaten Ponorogo dikenal sebagai?",
a:[
"Kota Batik",
"Kota Reog",
"Kota Apel",
"Kota Keris"
],
correct:1
},

{
q:"Siapa tokoh jenaka dalam pertunjukan Reog?",
a:[
"Warok",
"Jathil",
"Bujang Ganong",
"Prabu Klono"
],
correct:2
}

];


// ============================
// VARIABEL
// ============================

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;


// ============================
// MULAI QUIZ
// ============================

function startQuiz() {

    currentQuestion = 0;
    score = 0;

    document.getElementById("quiz-start").style.display = "none";
    document.getElementById("quiz-result").style.display = "none";
    document.getElementById("quiz-active").style.display = "block";

    loadQuestion();
}


// ============================
// LOAD SOAL
// ============================

function loadQuestion() {

    const question = quizData[currentQuestion];

    document.getElementById("current-q").textContent =
        currentQuestion + 1;

    document.getElementById("score").textContent =
        "Skor: " + score;

    document.getElementById("question-text").textContent =
        question.q;

    const optionsContainer =
        document.getElementById("options");

    optionsContainer.innerHTML = "";

    question.a.forEach((answer,index) => {

        const option =
            document.createElement("div");

        option.className = "option";

        option.textContent = answer;

        option.addEventListener("click", () => {
            selectAnswer(index);
        });

        optionsContainer.appendChild(option);

    });

    selectedAnswer = null;

    document.getElementById("next-btn").style.display =
        "none";
}


// ============================
// PILIH JAWABAN
// ============================

function selectAnswer(index) {

    if(selectedAnswer !== null){
        return;
    }

    selectedAnswer = index;

    const correct =
        quizData[currentQuestion].correct;

    const options =
        document.querySelectorAll(".option");

    options.forEach((option,i)=>{

        option.style.pointerEvents = "none";

        if(i === correct){

            option.style.background =
                "#dcfce7";

            option.style.border =
                "2px solid #22c55e";

        }

        if(
            i === index &&
            index !== correct
        ){

            option.style.background =
                "#fee2e2";

            option.style.border =
                "2px solid #ef4444";

        }

    });

    if(index === correct){
        score++;
    }

    document.getElementById("score").textContent =
        "Skor: " + score;

    document.getElementById("next-btn").style.display =
        "inline-block";

}


// ============================
// NEXT QUESTION
// ============================

function nextQuestion() {

    currentQuestion++;

    if(
        currentQuestion <
        quizData.length
    ){

        loadQuestion();

    } else {

        showResult();

    }

}


// ============================
// HASIL AKHIR
// ============================

function showResult() {

    document.getElementById("quiz-active").style.display =
        "none";

    document.getElementById("quiz-result").style.display =
        "block";

    const percentage =
        Math.round(
            (score / quizData.length) * 100
        );

    let message = "";

    if(percentage >= 80){

        message =
        "🏆 Hebat! Kamu sangat memahami Reog Ponorogo.";

    }else if(percentage >= 60){

        message =
        "👏 Bagus! Pengetahuanmu sudah cukup baik.";

    }else{

        message =
        "📚 Ayo belajar lagi tentang Reog Ponorogo.";

    }

    document.getElementById("final-score").innerHTML = `
        <h3>Nilai Akhir</h3>
        <br>
        <h1>${score}/${quizData.length}</h1>
        <br>
        <p>${percentage}%</p>
        <br>
        <p>${message}</p>
    `;

}


// ============================
// RESET QUIZ
// ============================

function restartQuiz() {

    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    document.getElementById("quiz-result").style.display =
        "none";

    document.getElementById("quiz-start").style.display =
        "block";

}
```
