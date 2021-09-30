const quizDB = [{
        question: "Q1: What is the full form of HTML?",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "Hello To My Land",
        d: "Hyper Text Markup Language",
        ans: "ans4"
    },

    {
        question: "Q2: The correct sequence of HTML tags for starting a webpage is -",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: " HTML, Head, Title, Body",
        d: "HTML, Head, Title, Body",
        ans: "ans4"

    },

    {
        question: "Q3: &ltinput&gt",
        a: "a format tag    ",
        b: "an empty tag.",
        c: "All of the above",
        d: "None of the above",
        ans: "ans2"

    },

    {
        question: "Q4: Which of the following tag is used to make the underlined text?",
        a: "&ltu&gt",
        b: "&ltol&gt",
        c: "&ltli&gt",
        d: "&ltdl&gt",
        ans: "ans1"

    },

    {
        question: "Q5: CSS stands for -",
        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "None of the above",
        ans: "ans3"
    },

    {
        question: "Q6: The CSS property used to control the element's font-size is -",
        a: "text-style",
        b: "text-size",
        c: "font-size",
        d: "None of the above",
        ans: "ans3"
    },

    {
        question: "Q7: The HTML attribute used to define the inline styles is -",
        a: "style",
        b: "styles",
        c: "class",
        d: "stylesheet",
        ans: "ans1"
    },

    {
        question: "Q8:  Are the negative values allowed in padding property?",
        a: "Yes",
        b: "No",
        c: "can't Say",
        d: "May be",
        ans: "ans2"
    },

    {
        question: "Q9: Which type of JavaScript language is ___",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        ans: "ans2"
    },

    {
        question: "Q10: Which one of the following is an ternary operator:",
        a: "?",
        b: ":",
        c: "-",
        d: "+",
        ans: "ans1"
    }

]

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let ans;

    answers.forEach((element) => {
        if (element.checked) {
            ans = element.id;
        }
    });
    return ans;
};

const deselect = () => {
    answers.forEach((element) => {
        element.checked = false;
    })
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    deselect();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h3>Your Score ${score}/${quizDB.length} ✌</h3>
        <button class="btn" onclick="location.reload()">Play Again!</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});