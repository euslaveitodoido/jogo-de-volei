let currentQuestionIndex = 0;
let score = 0;

// Perguntas do quiz
const questions = [
    {
        question: "Quando o Vôlei Paralímpico foi introduzido nas Paralimpíadas?",
        choices: ["1980", "1990", "2000", "2010"],
        correctAnswer: 0 // Resposta correta é a opção 0 (1980)
    },
    {
        question: "Quem é um atleta famoso do Vôlei Paralímpico brasileiro?",
        choices: ["Renato Leite", "Usain Bolt", "Michael Jordan", "LeBron James"],
        correctAnswer: 0 // Resposta correta é a opção 0 (Renato Leite)
    },
    {
        question: "Quantos jogadores tem em cada time no Vôlei Paralímpico?",
        choices: ["6", "8", "10", "12"],
        correctAnswer: 0 // Resposta correta é a opção 0 (6 jogadores)
    },
    {
        question: "Em qual país o Vôlei Paralímpico foi introduzido nas Paralimpíadas?",
        choices: ["Holanda", "Brasil", "EUA", "China"],
        correctAnswer: 0 // Resposta correta é a opção 0 (Holanda)
    },
    {
        question: "Qual é a principal diferença entre o Vôlei Paralímpico e o Vôlei tradicional?",
        choices: ["Rede mais baixa e quadra menor", "Mais jogadores", "Bolinha maior", "Mais pontos"],
        correctAnswer: 0 // Resposta correta é a opção 0 (Rede mais baixa e quadra menor)
    }
];

// Função para mostrar a pergunta atual
function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-container').innerText = question.question;
    
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';

    question.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<button onclick="checkAnswer(${index})">${choice}</button>`;
        choicesContainer.appendChild(li);
    });

    // Esconder o botão de próxima pergunta
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('feedback-container').style.display = 'none'; // Esconder feedback
}

// Função para verificar a resposta
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const feedbackContainer = document.getElementById('feedback-container');

    if (selectedIndex === question.correctAnswer) {
        score++;
        feedbackContainer.innerText = "Você acertou!";
        feedbackContainer.style.color = "green";
        document.getElementById('next-button').style.display = 'inline-block'; // Exibir o botão de próxima pergunta
    } else {
        feedbackContainer.innerText = "Você errou. Tente novamente!";
        feedbackContainer.style.color = "red";
        document.getElementById('next-button').style.display = 'none'; // Não exibir o botão até acertar
    }

    // Exibir o feedback
    feedbackContainer.style.display = 'block';
}

// Função para passar para a próxima pergunta
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Função para mostrar o resultado
function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('score').innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
}

// Função para reiniciar o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    showQuestion();
}

// Inicializar o quiz
showQuestion();