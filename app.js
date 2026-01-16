import { examTopics, questions } from './data/questions.js';
import { ExamTimer } from './utils/timer.js';
import { Storage } from './utils/storage.js';

// Global state
let currentTopic = null;
let currentAnswers = {};
let examTimer = null;
let studentInfo = null;
let pendingTopicId = null;

// DOM Elements
const homePage = document.getElementById('homePage');
const examPage = document.getElementById('examPage');
const resultPage = document.getElementById('resultPage');
const topicsGrid = document.getElementById('topicsGrid');
const examTitle = document.getElementById('examTitle');
const timerDisplay = document.getElementById('timer');
const progressFill = document.getElementById('progressFill');
const testQuestions = document.getElementById('testQuestions');
const practicalQuestions = document.getElementById('practicalQuestions');
const accountingQuestions = document.getElementById('accountingQuestions');
const submitBtn = document.getElementById('submitBtn');
const adminBtn = document.getElementById('adminBtn');
const adminPanel = document.getElementById('adminPanel');
const adminContent = document.getElementById('adminContent');
const studentModal = document.getElementById('studentModal');
const studentForm = document.getElementById('studentForm');
const cancelBtn = document.getElementById('cancelBtn');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadTopics();
    setupEventListeners();
    checkExamState();
});

// Load topics on home page
function loadTopics() {
    topicsGrid.innerHTML = '';

    examTopics.forEach(topic => {
        const isCompleted = Storage.isTopicCompleted(topic.id);

        const card = document.createElement('div');
        card.className = 'topic-card';
        if (isCompleted) {
            card.style.opacity = '0.6';
            card.style.cursor = 'not-allowed';
        }

        card.innerHTML = `
            <span class="topic-icon">${topic.icon}</span>
            <h3>${topic.name}</h3>
            <p>${topic.description}</p>
            <span class="topic-score">${topic.maxScore} ball</span>
            ${isCompleted ? '<p style="color: var(--success); margin-top: 1rem;">✅ Topshirilgan</p>' : ''}
        `;

        if (!isCompleted) {
            // Support both click and touch events
            card.addEventListener('click', () => showStudentModal(topic.id));
            card.addEventListener('touchend', (e) => {
                e.preventDefault();
                showStudentModal(topic.id);
            });
        }

        topicsGrid.appendChild(card);
    });
}

// Show student info modal
function showStudentModal(topicId) {
    pendingTopicId = topicId;
    studentModal.classList.add('active');
    // Clear previous values
    document.getElementById('studentName').value = '';
    document.getElementById('studentGroup').value = '';
}

// Start exam
function startExam(topicId) {
    currentTopic = topicId;
    currentAnswers = {};

    const topic = examTopics.find(t => t.id === topicId);
    examTitle.textContent = topic.name;

    // Load questions
    loadQuestions();

    // Start timer (90 minutes)
    examTimer = new ExamTimer(
        90,
        (time) => {
            timerDisplay.textContent = `⏱️ ${time}`;
        },
        () => {
            alert('Vaqt tugadi! Imtixon avtomatik topshirildi.');
            submitExam();
        }
    );
    examTimer.start();

    // Show exam page
    showPage('exam');
}

// Load all questions
function loadQuestions() {
    const topicQuestions = questions[currentTopic];

    // Load test questions
    testQuestions.innerHTML = '';
    topicQuestions.test.forEach((q, index) => {
        const questionDiv = createTestQuestion(q, index);
        testQuestions.appendChild(questionDiv);
    });

    // Load practical questions
    practicalQuestions.innerHTML = '';
    topicQuestions.practical.forEach((q, index) => {
        const questionDiv = createPracticalQuestion(q, index);
        practicalQuestions.appendChild(questionDiv);
    });

    // Load accounting questions
    accountingQuestions.innerHTML = '';
    topicQuestions.accounting.forEach((q, index) => {
        const questionDiv = createAccountingQuestion(q, index);
        accountingQuestions.appendChild(questionDiv);
    });
}

// Create test question
function createTestQuestion(question, index) {
    const div = document.createElement('div');
    div.className = 'question';

    const optionsHtml = question.options.map((option, i) => `
        <div class="option">
            <input type="radio" 
                   id="test_${index}_${i}" 
                   name="test_${index}" 
                   value="${i}"
                   onchange="saveAnswer('test', ${question.id}, ${i})">
            <label for="test_${index}_${i}">${option}</label>
        </div>
    `).join('');

    div.innerHTML = `
        <div class="question-header">
            <span class="question-number">Savol ${question.id}</span>
            <span class="question-points">${question.points} ball</span>
        </div>
        <div class="question-text">${question.question}</div>
        <div class="options">
            ${optionsHtml}
        </div>
    `;

    return div;
}

// Create practical question
function createPracticalQuestion(question, index) {
    const div = document.createElement('div');
    div.className = 'question';

    div.innerHTML = `
        <div class="question-header">
            <span class="question-number">Masala ${question.id}</span>
            <span class="question-points">${question.points} ball</span>
        </div>
        <div class="question-text">${question.question}</div>
        <textarea class="answer-input" 
                  placeholder="Javobingizni yozing..."
                  onchange="saveAnswer('practical', ${question.id}, this.value)"></textarea>
    `;

    return div;
}

// Create accounting question
function createAccountingQuestion(question, index) {
    const div = document.createElement('div');
    div.className = 'question';

    div.innerHTML = `
        <div class="question-header">
            <span class="question-number">Provodka ${question.id}</span>
            <span class="question-points">${question.points} ball</span>
        </div>
        <div class="question-text">${question.question}</div>
        <div class="accounting-entry">
            <div class="entry-field">
                <label>Debet (Dt)</label>
                <input type="text" 
                       placeholder="Hisob raqami"
                       onchange="saveAccountingAnswer(${question.id}, 'debet', this.value)">
            </div>
            <div class="entry-field">
                <label>Kredit (Kt)</label>
                <input type="text" 
                       placeholder="Hisob raqami"
                       onchange="saveAccountingAnswer(${question.id}, 'kredit', this.value)">
            </div>
        </div>
    `;

    return div;
}

// Save answer
window.saveAnswer = function (type, questionId, answer) {
    if (!currentAnswers[type]) {
        currentAnswers[type] = {};
    }
    currentAnswers[type][questionId] = answer;

    // Save to localStorage
    Storage.saveExamState(currentTopic, currentAnswers);

    // Update progress
    updateProgress();
};

// Save accounting answer
window.saveAccountingAnswer = function (questionId, field, value) {
    if (!currentAnswers.accounting) {
        currentAnswers.accounting = {};
    }
    if (!currentAnswers.accounting[questionId]) {
        currentAnswers.accounting[questionId] = {};
    }
    currentAnswers.accounting[questionId][field] = value;

    // Save to localStorage
    Storage.saveExamState(currentTopic, currentAnswers);

    // Update progress
    updateProgress();
};

// Update progress bar
function updateProgress() {
    const totalQuestions = 20; // 10 test + 5 practical + 5 accounting
    const answeredCount =
        (currentAnswers.test ? Object.keys(currentAnswers.test).length : 0) +
        (currentAnswers.practical ? Object.keys(currentAnswers.practical).length : 0) +
        (currentAnswers.accounting ? Object.keys(currentAnswers.accounting).length : 0);

    const progress = (answeredCount / totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;
}

// Submit exam
function submitExam() {
    if (examTimer) {
        examTimer.stop();
    }

    // Calculate time spent
    const timeSpent = examTimer ? examTimer.getFormattedTime() : '00:00';

    // Save completed exam with student info
    Storage.saveCompletedExam(currentTopic, currentAnswers, timeSpent, studentInfo);
    Storage.clearExamState();

    // Show result
    const topic = examTopics.find(t => t.id === currentTopic);
    document.getElementById('completionTime').textContent = new Date().toLocaleString('uz-UZ');
    document.getElementById('resultTopic').textContent = topic.name;

    // Display student info on result page
    const resultInfo = document.querySelector('.result-info');
    if (studentInfo) {
        resultInfo.innerHTML = `
            <p><strong>F.I.O.:</strong> ${studentInfo.name}</p>
            <p><strong>Guruh:</strong> ${studentInfo.group}</p>
            <p><strong>Yakunlangan vaqt:</strong> <span id="completionTime">${new Date().toLocaleString('uz-UZ')}</span></p>
            <p><strong>Mavzu:</strong> <span id="resultTopic">${topic.name}</span></p>
        `;
    }

    showPage('result');
}

// Check if there's an ongoing exam
function checkExamState() {
    const state = Storage.getExamState();
    if (state) {
        const resume = confirm('Tugallanmagan imtixon topildi. Davom ettirasizmi?');
        if (resume) {
            currentTopic = state.topic;
            currentAnswers = state.answers;
            startExam(currentTopic);

            // Restore answers
            restoreAnswers();
        } else {
            Storage.clearExamState();
        }
    }
}

// Restore answers
function restoreAnswers() {
    // Restore test answers
    if (currentAnswers.test) {
        Object.entries(currentAnswers.test).forEach(([questionId, answer]) => {
            const radio = document.querySelector(`input[name="test_${questionId - 1}"][value="${answer}"]`);
            if (radio) radio.checked = true;
        });
    }

    // Restore practical answers
    if (currentAnswers.practical) {
        Object.entries(currentAnswers.practical).forEach(([questionId, answer]) => {
            const textareas = practicalQuestions.querySelectorAll('textarea');
            if (textareas[questionId - 1]) textareas[questionId - 1].value = answer;
        });
    }

    // Restore accounting answers
    if (currentAnswers.accounting) {
        Object.entries(currentAnswers.accounting).forEach(([questionId, answer]) => {
            const entries = accountingQuestions.querySelectorAll('.accounting-entry');
            if (entries[questionId - 1]) {
                const inputs = entries[questionId - 1].querySelectorAll('input');
                if (answer.debet) inputs[0].value = answer.debet;
                if (answer.kredit) inputs[1].value = answer.kredit;
            }
        });
    }

    updateProgress();
}

// Show page
function showPage(page) {
    homePage.classList.remove('active');
    examPage.classList.remove('active');
    resultPage.classList.remove('active');

    if (page === 'home') {
        homePage.classList.add('active');
        loadTopics(); // Reload to show completed status
    } else if (page === 'exam') {
        examPage.classList.add('active');
    } else if (page === 'result') {
        resultPage.classList.add('active');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Submit button
    submitBtn.addEventListener('click', () => {
        const confirm = window.confirm('Imtixonni yakunlashga ishonchingiz komilmi?');
        if (confirm) {
            submitExam();
        }
    });

    // Student form submit
    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('studentName').value.trim();
        const group = document.getElementById('studentGroup').value.trim();

        if (name && group) {
            studentInfo = { name, group };
            studentModal.classList.remove('active');
            startExam(pendingTopicId);
        }
    });

    // Cancel button
    cancelBtn.addEventListener('click', () => {
        studentModal.classList.remove('active');
        pendingTopicId = null;
    });

    // Close modal when clicking outside
    studentModal.addEventListener('click', (e) => {
        if (e.target === studentModal) {
            studentModal.classList.remove('active');
            pendingTopicId = null;
        }
    });

    // Admin button
    adminBtn.addEventListener('click', () => {
        adminPanel.classList.toggle('active');
        if (adminPanel.classList.contains('active')) {
            loadAdminData();
        }
    });

    // Close admin panel when clicking outside
    document.addEventListener('click', (e) => {
        if (!adminPanel.contains(e.target) && e.target !== adminBtn) {
            adminPanel.classList.remove('active');
        }
    });
}

// Load admin data
function loadAdminData() {
    const stats = Storage.getAdminStats();

    if (stats.totalExams === 0) {
        adminContent.innerHTML = '<p style="color: var(--gray);">Hali hech qanday imtixon topshirilmagan.</p>';
        return;
    }

    let html = `
        <div style="margin-bottom: 1rem;">
            <strong>Jami topshirilgan:</strong> ${stats.totalExams} ta imtixon
        </div>
    `;

    stats.exams.forEach((exam, index) => {
        html += `
            <div style="background: var(--light); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                <strong>${index + 1}. ${exam.topic}</strong><br>
                <small style="color: var(--gray);">
                    ${exam.studentName ? `👤 ${exam.studentName}<br>` : ''}
                    ${exam.studentGroup ? `📚 Guruh: ${exam.studentGroup}<br>` : ''}
                    📅 ${exam.completedAt}<br>
                    ⏱️ Qolgan vaqt: ${exam.timeSpent}<br>
                    ✍️ Javoblar: ${exam.totalAnswers} ta
                </small>
            </div>
        `;
    });

    adminContent.innerHTML = html;
}

// Prevent accidental page close during exam
window.addEventListener('beforeunload', (e) => {
    if (examPage.classList.contains('active')) {
        e.preventDefault();
        e.returnValue = '';
    }
});
