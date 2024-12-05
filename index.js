const questionList = [
    {
        question: "What is your favorite way to entertain guests for dinner?",
        optionA: "Everyone seated at one long table, laden with plates of food from which they can help themselves; plenty of lively conversation",
        optionB: "An elegantly set table in a candle-lit dining room, full of Old World charm",
        optionC: "A picnic in the sunshine, with lots of fun and games",
        optionD: "Perfection - you might get a chef in or take guests to a Michelin-starred restaurants"
    },
    {
        question: "What primary color do you prefer?",
        optionA: "Green",
        optionB: "Red",
        optionC: "Yellow",
        optionD: "Red"
    },
    {
        question: "What is your favorite kind of social event?",
        optionA: "Sitting round a fire with friends, talking deep into the night",
        optionB: "The ballet or a classical event",
        optionC: "Musical theatre; something fun done on the spur of the moment",
        optionD: "An opening night or premiere; a fashionable party"
    },
    {
        question: "What is your favorite type of jewelry?",
        optionA: "Irregular style and shape, with an organic, natural look to it, made of copper, bronze, wood or amber",
        optionB: "Brushed silver or white gold and pearls; nothing heavy, flashy or osentatious",
        optionC: "Light bright gold, sapphires, emeralds, opals; things that sparkle, have movement and catch light",
        optionD: "Statement pieces; diamonds, rubies, black pearls, platinum"
    },
    {
        question: "Would you describe yourself as:",
        optionA: "Sympathetic and interested in other people",
        optionB: "A quiet observer",
        optionC: "Outgoing and playful",
        optionD: "Self-assured, determined and driven"
    },
    {
        question: "How do you like to spend your time off?",
        optionA: "Walking in nature or visiting an archaeological site",
        optionB: "Quietly, by a still lake",
        optionC: "On the beach, playing in the waves",
        optionD: "Lying poolside sipping cocktails"
    },
    {
        question: "What is most important to you in a home?",
        optionA: "A cosy home feel",
        optionB: "Balance and proportion",
        optionC: "Plenty of natural light",
        optionD: "Simplicity and order"
    },
    {
        question: "What is your favorite type of film?",
        optionA: "Historically based, biopic or nature documentary",
        optionB: "An old romantic black-and-white",
        optionC: "Comedy, preferably slapstick humour",
        optionD: "Film noir or arthouse"
    },
    {
        question: "You are called on to resolve a problem at work. What do you do?",
        optionA: "Solicit other people's opinions and consider everyone else's view",
        optionB: "Remain cool, calm and diplomatic in your search for the perfect situation",
        optionC: "Enthusiastically motivate others to help solve the problem",
        optionD: "Gather all the facts; stay single-minded and focused on getting the right result"
    },
    {
        question: "What kind of music do you like to listen to?",
        optionA: "Country and Western, folk, indie",
        optionB: "Classical",
        optionC: "Pop music, musicals",
        optionD: "Opera, avant-garde jazz"
    },
    {
        question: "A friend is upset. What do you do?",
        optionA: "You sympathize deeply, giving all your time and energy and not leaving until you know they are going to be okay",
        optionB: "Quietly and clamly set about finding a way to help them",
        optionC: "You try to cheer them up",
        optionD: "You focus on fixing the problem"
    }
]

const questionTag = document.getElementById("question-tag")
const optionA = document.getElementById("option-a")
const optionB = document.getElementById("option-b")
const optionC = document.getElementById("option-c")
const optionD = document.getElementById("option-d")
const nextBtn = document.getElementById("next-btn")
const previousBtn = document.getElementById("previous-btn")

let index = 0


document.addEventListener("DOMContentLoaded", renderQuestions)
previousBtn.addEventListener("click", previousBtnClicked)
nextBtn.addEventListener("click", nextBtnClicked)


function renderQuestions() {
    console.log("The DOM is fully loaded!")
    questionTag.innerHTML = questionList[index].question
    optionA.innerHTML = questionList[index].optionA
    optionB.innerHTML = questionList[index].optionB
    optionC.innerHTML = questionList[index].optionC
    optionD.innerHTML = questionList[index].optionD
}

function previousBtnClicked(){
    console.log("Previous button clicked!")
    index--
    renderQuestions()
    console.log("Question being rendered...")
}

function nextBtnClicked(){
    console.log("Next button clicked!")
    index++
    renderQuestions()
    console.log("Question being rendered...")
}