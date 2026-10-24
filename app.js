let questions = [
    {
        question: "SMIT STAND........?",
        Option: [
            "Saylani mass it training",
            "Saylani It training",
            "Smit",
            "Saylani"
        ],
        answer: "Saylani mass it training"
    },
    {
        question: "HTML is a?",
        Option: [
            "Programming Language",
            "Markup Language",
            "Scripting Language",
            "Database Language"
        ],
        answer: "Markup Language"
    },
    {
        question: "JS is primarily a?",
        Option: [
            "Programming Language",
            "Markup Language",
            "Scripting Language",
            "Style Sheet"
        ],
        answer: "Scripting Language"
    },
    {
        question: "CSS stands for?",
        Option: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style System",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        question: "HTML stands for?",
        Option: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink and Text Marking Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which tag is used for largest heading in HTML?",
        Option: [
            "<h6>",
            "<heading>",
            "<h1>",
            "<head>"
        ],
        answer: "<h1>"
    },
    {
        question: "Which HTML tag is used to create a link?",
        Option: [
            "<a>",
            "<link>",
            "<href>",
            "<url>"
        ],
        answer: "<a>"
    },
    {
        question: "Which tag is used to display an image in HTML?",
        Option: [
            "<picture>",
            "<image>",
            "<img>",
            "<src>"
        ],
        answer: "<img>"
    },
    {
        question: "Which CSS property is used to change text color?",
        Option: [
            "text-color",
            "color",
            "font-color",
            "background-color"
        ],
        answer: "color"
    },
    {
        question: "Which keyword is used to declare a block-scope variable in JS?",
        Option: [
            "var",
            "let",
            "int",
            "string"
        ],
        answer: "let"
    },
    {
        question: "RAM stands for?",
        Option: [
            "Random Access Memory",
            "Read Access Memory",
            "Run All Memory",
            "Real Access Module"
        ],
        answer: "Random Access Memory"
    },
    {
        question: "CPU stands for?",
        Option: [
            "Central Processing Unit",
            "Control Processing Unit",
            "Computer Program Unit",
            "Central Performance Unit"
        ],
        answer: "Central Processing Unit"
    },
    {
        question: "SQL stands for?",
        Option: [
            "Simple Query Logic",
            "Structured Query Language",
            "System Query Level",
            "Standard Question Language"
        ],
        answer: "Structured Query Language"
    },
    {
        question: "HTTP stands for?",
        Option: [
            "HyperText Transfer Protocol",
            "HyperText Transmission Path",
            "High Transfer Text Process",
            "Hyper Tool Transfer Program"
        ],
        answer: "HyperText Transfer Protocol"
    },
    {
        question: "API stands for?",
        Option: [
            "Application Program Internet",
            "Automatic Program Integration",
            "Application Programming Interface",
            "Advanced Protocol Interaction"
        ],
        answer: "Application Programming Interface"
    },
    {
        question: "URL stands for?",
        Option: [
            "Uniform Resource Locator",
            "Universal Resource Link",
            "Uniform Reference Line",
            "United Resource Locator"
        ],
        answer: "Uniform Resource Locator"
    },
    {
        question: "WWW stands for?",
        Option: [
            "World Wide Web",
            "World Wide Wave",
            "Wide World Web",
            "World Web Wide"
        ],
        answer: "World Wide Web"
    },
    {
        question: "Which symbol is used for ID selector in CSS?",
        Option: [
            ".",
            "#",
            "*",
            "&"
        ],
        answer: "#"
    },
    {
        question: "Which method is used to write output in browser console?",
        Option: [
            "console.print()",
            "console.log()",
            "console.write()",
            "print.console()"
        ],
        answer: "console.log()"
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        Option: [
            "==",
            "=",
            "===",
            "!="
        ],
        answer: "==="
    }
]

let question = document.getElementById("question")
let qno = document.getElementById("qno")

let timer = document.getElementById("timer")
// let time = 10;
// let startInterval;


// 3 mint : 180
// 30: 60=>1800

// function startTimer() {
//     startInterval = setInterval(function () {
//         let min = Math.floor(time / 60)
//         let second = time % 60;

//         timer.innerText = `Time : ${min}:${second}`
//         timer.style.textAlign = "right"
//         time = time - 1
//         if (time == 0) {
//             let finalScore = (score / questions.length) * 100;
//             alert("quiz submit")
//             document.getElementById("container").innerHTML = `
//             <h1>Quiz Submit</h1>
//             <h2>Score ${finalScore}% out of 100</h2>
//             <button onclick='window.location.reload()'>Again Test</button>
//             `

//         }

//     }, 1000)

// }



let time = 10 * 60; // 10 minutes = 600 seconds
let startInterval;


function startTimer() {
    startInterval = setInterval(function () {
        let min = Math.floor(time / 60);
        let second = time % 60;

        // Seconds ko 2 digits me format karne ke liye (e.g. 05, 09)
        let formattedSeconds = second < 10 ? "0" + second : second;
        let formattedMinutes = min < 10 ? "0" + min : min;

        timer.innerText = `Time : ${formattedMinutes}:${formattedSeconds}`;
        timer.style.textAlign = "right";

        if (time <= 0) {
            clearInterval(startInterval); // Timer ko stop karna zaroori hai
            let finalScore = Math.round((score / questions.length) * 100);
            alert("Quiz Submit");
            document.getElementById("container").innerHTML = `
                <h1>Quiz Submit</h1>
                <h2>Score ${finalScore}% out of 100</h2>
                <button onclick='window.location.reload()'>Again Test</button>
            `;
        } else {
            time = time - 1;
        }

    }, 1000);
}
































let options = document.querySelectorAll("input")
let label = document.querySelectorAll("label")

let button = document.querySelector("button")
let index = 0;
let score = 0;

console.log(options[0])
console.log(label)
console.log(button)

button.addEventListener("click", function () {
    // alert("ok")
    nextQuestion()
})

function showQuestion() {

    question.innerText = questions[index].question
    qno.innerText = "Question " + (index + 1) + " of " + questions.length

    options[0].value = questions[index].Option[0]
    options[1].value = questions[index].Option[1]
    options[2].value = questions[index].Option[2]
    options[3].value = questions[index].Option[3]

    label[0].innerText = questions[index].Option[0]
    label[1].innerText = questions[index].Option[1]
    label[2].innerText = questions[index].Option[2]
    label[3].innerText = questions[index].Option[3]

    options[0].checked = false
    options[1].checked = false
    options[2].checked = false
    options[3].checked = false

    if (index == questions.length - 1) {
        button.innerText = "Submit"
    }

}

function CheckAnswer() {

    let selectedOption;

    if (options[0].checked == true) {
        selectedOption = options[0].value

    }

    else if (options[1].checked == true) {
        selectedOption = options[1].value

    }
    else if (options[2].checked == true) {
        selectedOption = options[2].value

    }
    else if (options[3].checked == true) {
        selectedOption = options[3].value

    }
    console.log(options[0].checked)
    console.log(options[1].checked)
    console.log(options[2].checked)
    console.log(options[3].checked)

    console.log(selectedOption)
    if (selectedOption == undefined) {
        alert("Bhai select one option")
        return false
    }
    else {
        console.log(selectedOption)
        console.log(questions[index].answer)

        if (selectedOption == questions[index].answer) {
            score = score + 1;
        }
        console.log(score)

        return true
    }
}

function nextQuestion() {
    let status = CheckAnswer()
    if (status == true) {
        index = index + 1
        if (index == questions.length) {
            let finalScore = (score / questions.length) * 100;
            alert("quiz submit")
            document.getElementById("container").innerHTML = `
            <h1>Quiz Submit</h1>
            <h2>Score ${finalScore}% out of 100</h2>
            <button onclick='window.location.reload()'>Again Test</button>
            `

        }
        else {

            showQuestion()

        }

    }

}

showQuestion()
startTimer()





















// let questions = [
    
//     {
//         question: "SMIT STAND........?",
//         Option: [
//             "Saylani mass it training",
//             "Saylani It training",
//             "Smit",
//             "Saylani"
//         ],
//         answer: "Saylani mass it training"
//     },
//     {
//         question: "HTML",
//         Option: [
//             "PL",
//             "ML",
//             "SL",
//             "ALL"
//         ],
//         answer: "ML"
//     },
//     {
//         question: "JS",
//         Option: [
//             "PL",
//             "ML",
//             "SL",
//             "ALL"
//         ],
//         answer: "SL"
//     },
//     {
//         question: "JS",
//         Option: [
//             "PL",
//             "ML",
//             "SL",
//             "ALL"
//         ],
//         answer: "SL"
//     },
//     {
//         question: "JS",
//         Option: [
//             "PL",
//             "ML",
//             "SL",
//             "ALL"
//         ],
//         answer: "SL"
//     },

// ]

// let question = document.getElementById("question")
// let qno = document.getElementById("qno")

// let timer = document.getElementById("timer")
// let time = 10;
// let startInterval;

// // 3 mint : 180
// // 30: 60=>1800

// function startTimer() {
//     startInterval = setInterval(function () {
//         let min = Math.floor(time / 60)
//         let second = time % 60;

//         timer.innerText = `Time : ${min}:${second}`
//         timer.style.textAlign = "right"
//         time = time - 1
//         if (time == 0) {
//             let finalScore = (score / questions.length) * 100;
//             alert("quiz submit")
//             document.getElementById("container").innerHTML = `
//             <h1>Quiz Submit</h1>
//             <h2>Score ${finalScore}% out of 100</h2>
//             <button onclick='window.location.reload()'>Again Test</button>
//             `

//         }




//     }, 1000)




// }



// let options = document.querySelectorAll("input")
// let label = document.querySelectorAll("label")

// let button = document.querySelector("button")
// let index = 0;
// let score = 0;


// console.log(options[0])
// console.log(label)
// console.log(button)

// button.addEventListener("click", function () {
//     // alert("ok")
//     nextQuestion()
// })

// function showQuestion() {

//     question.innerText = questions[index].question
//     qno.innerText = "Question " + (index + 1) + " of " + questions.length


//     options[0].value = questions[index].Option[0]
//     options[1].value = questions[index].Option[1]
//     options[2].value = questions[index].Option[2]
//     options[3].value = questions[index].Option[3]

//     label[0].innerText = questions[index].Option[0]
//     label[1].innerText = questions[index].Option[1]
//     label[2].innerText = questions[index].Option[2]
//     label[3].innerText = questions[index].Option[3]

//     options[0].checked = false
//     options[1].checked = false
//     options[2].checked = false
//     options[3].checked = false

//     if (index == questions.length - 1) {
//         button.innerText = "Submit"
//     }


// }

// function CheckAnswer() {

//     let selectedOption;

//     if (options[0].checked == true) {
//         selectedOption = options[0].value

//     }

//     else if (options[1].checked == true) {
//         selectedOption = options[1].value

//     }
//     else if (options[2].checked == true) {
//         selectedOption = options[2].value

//     }
//     else if (options[3].checked == true) {
//         selectedOption = options[3].value

//     }
//     console.log(options[0].checked)
//     console.log(options[1].checked)
//     console.log(options[2].checked)
//     console.log(options[3].checked)

//     console.log(selectedOption)
//     if (selectedOption == undefined) {
//         alert("Bhai select one option")
//         return false
//     }
//     else {
//         console.log(selectedOption)
//         console.log(questions[index].answer)

//         if (selectedOption == questions[index].answer) {
//             score = score + 1;
//         }
//         console.log(score)

//         return true
//     }
// }

// function nextQuestion() {
//     let status = CheckAnswer()
//     if (status == true) {
//         index = index + 1
//         if (index == questions.length) {
//             let finalScore = (score / questions.length) * 100;
//             alert("quiz submit")
//             document.getElementById("container").innerHTML = `
//             <h1>Quiz Submit</h1>
//             <h2>Score ${finalScore}% out of 100</h2>
//             <button onclick='window.location.reload()'>Again Test</button>
//             `

//         }
//         else {

//             showQuestion()

//         }

//     }

// }

// showQuestion()
// startTimer()











