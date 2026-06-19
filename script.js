// =============================================
// PONOROGO PRIDE - FINAL CLEAN SCRIPT
// =============================================

// ================= NAVIGATION =================
function showSegment(id) {
    document.querySelectorAll(".segment").forEach(seg => {
        seg.classList.remove("active");
    });

    const target = document.getElementById(id);
    if (target) target.classList.add("active");

    updateNavActive(id);

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateNavActive(id) {
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("text-orange-500", "active-nav");
    });

    const activeBtn = document.getElementById("nav-" + id);
    if (activeBtn) {
        activeBtn.classList.add("text-orange-500", "active-nav");
    }
}

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
    const bg = document.getElementById("master-bg-layer");
    if (bg) {
        bg.style.backgroundImage = "url('foto-barong.png')";
    }

    showSegment("home");
    loadGameQuestion();
});

// ================= QUIZ =================
const quizData = [
    { q: "Apa nama topeng ikonik Reog Ponorogo yang beratnya 40-50 kg?", a: ["Bujangganong", "Dadak Merak", "Kelono Sewandono", "Jathil"], c: 1 },
    { q: "Reog Ponorogo diakui UNESCO tahun berapa?", a: ["2013", "2022", "2024", "2025"], c: 2 },
    { q: "Siapa tokoh pemimpin Reog?", a: ["Warok", "Gemblak", "Pembarong", "Jathil"], c: 0 },
    { q: "Reog berasal dari mana?", a: ["Surabaya", "Malang", "Ponorogo", "Kediri"], c: 2 },
    { q: "Makna Dadak Merak adalah...", a: ["Sombong", "Kekuatan & keindahan", "Hiburan", "Perang"], c: 1 },
    { q: "Tantangan pelestarian Reog?", a: ["Ramai", "Urbanisasi", "Mahal", "Tidak ada festival"], c: 1 },
    { q: "Fungsi Reog selain hiburan?", a: ["Dakwah & karakter", "Pernikahan", "Olahraga", "Tidak ada"], c: 0 },
    { q: "Inovasi digital Reog?", a: ["TikTok & animasi", "Hentikan budaya", "Buku saja", "Tutup sanggar"], c: 0 }
];

let currentQuestion = 0;
let score = 0;
let answers = [];
let studentName = "";

function startQuiz() {
    studentName = document.getElementById("stu-name")?.value.trim() || "Peserta Hebat";

    currentQuestion = 0;
    score = 0;
    answers = [];

    document.getElementById("eval-setup")?.classList.add("hidden");
    document.getElementById("q-container")?.classList.remove("hidden");

    renderQuestion();
}

function renderQuestion() {
    const container = document.getElementById("q-container");
    const q = quizData[currentQuestion];

    if (!container || !q) return;

    container.innerHTML = `
        <h3 class="text-2xl font-bold text-white mb-6">
            ${q.q}
        </h3>

        <div class="space-y-3">
            ${q.a.map((opt, i) => `
                <button onclick="selectAnswer(${i})"
                    class="w-full text-left p-4 rounded-xl bg-slate-800 text-white hover:bg-orange-600 transition">
                    ${opt}
                </button>
            `).join("")}
        </div>
    `;
}

function selectAnswer(i) {
    answers[currentQuestion] = i;

    if (i === quizData[currentQuestion].c) {
        score += 10;
    }

    currentQuestion++;

    if (currentQuestion >= quizData.length) {
        finishQuiz();
    } else {
        renderQuestion();
    }
}

function finishQuiz() {
    document.getElementById("q-container")?.classList.add("hidden");

    document.getElementById("res-name").textContent = studentName;
    document.getElementById("res-score").textContent = score;

    let status =
        score >= 80 ? "PELAKU REOG ULUNG" :
        score >= 60 ? "PECINTA REOG" :
        "AYO BELAJAR LAGI";

    document.getElementById("res-status").textContent = status;

    showSegment("rekapan");
}

// ================= GAME =================
let gameIndex = 0;

const gameQuestions = [
    { statement: "Reog berasal dari Ponorogo.", answer: true },
    { statement: "Dadak Merak adalah makanan.", answer: false },
    { statement: "Urbanisasi bisa mengurangi pelestarian budaya.", answer: true },
    { statement: "Reog tidak punya nilai budaya.", answer: false }
];

function loadGameQuestion() {
    const el = document.getElementById("statement");
    if (el) el.textContent = gameQuestions[gameIndex].statement;
}

function checkGameAnswer(choice) {
    const fb = document.getElementById("game-feedback");
    if (!fb) return;

    const correct = gameQuestions[gameIndex].answer;

    if (choice === correct) {
        fb.textContent = "✅ Benar!";
        fb.style.color = "#22c55e";
    } else {
        fb.textContent = "❌ Salah!";
        fb.style.color = "#ef4444";
    }

    // pindah soal
    gameIndex++;

    // 🔥 STOP kalau sudah habis
    if (gameIndex >= gameQuestions.length) {
        setTimeout(() => {
            fb.textContent = "🎉 Game selesai! Semua soal sudah dijawab.";
            fb.style.color = "#facc15";

            document.getElementById("statement").textContent =
                "Game selesai ✔";

            // disable tombol
            document.querySelectorAll("#game button").forEach(btn => {
                btn.disabled = true;
                btn.style.opacity = "0.5";
                btn.style.cursor = "not-allowed";
            });

        }, 1000);

        return;
    }

    setTimeout(() => {
        fb.textContent = "";
        loadGameQuestion();
    }, 1000);
}

function resetGame() {
    gameIndex = 0;

    document.querySelectorAll("#game button").forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
    });

    loadGameQuestion();
}