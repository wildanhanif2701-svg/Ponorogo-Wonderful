/* ============================================================
   ART OF PONOROGO — script.js
   Berisi: Navigasi Tab, Quiz, Game Warok, Hero Slideshow
   ============================================================ */
 
/* ============================================================
   1. NAVIGASI TAB (Tanpa Scroll)
   ============================================================ */
 
function showPage(name) {
  // Sembunyikan semua halaman
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });
 
  // Nonaktifkan semua tombol nav
  document.querySelectorAll('.nav-btn').forEach(function(btn) {
    btn.classList.remove('active');
  });
 
  // Tampilkan halaman yang dipilih
  var target = document.getElementById('page-' + name);
  if (target) {
    target.classList.add('active');
  }
 
  // Aktifkan tombol nav yang sesuai
  var activeBtn = document.querySelector('[data-page="' + name + '"]');
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
 
  // Kembali ke atas halaman
  window.scrollTo(0, 0);
 
  // Jika pindah dari game, hentikan game
  if (name !== 'game' && gameRunning) {
    pauseGame();
  }
}
 
/* ============================================================
   2. MOBILE MENU
   ============================================================ */
 
function toggleMobileMenu() {
  var menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
}
 
function closeMobileMenu() {
  var menu = document.getElementById('mobile-menu');
  menu.classList.remove('open');
}
 
// Tutup mobile menu jika klik di luar
document.addEventListener('click', function(e) {
  var menu = document.getElementById('mobile-menu');
  var hamburger = document.getElementById('hamburger');
  if (menu && hamburger) {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove('open');
    }
  }
});
 
/* ============================================================
   3. HERO SLIDESHOW (Beranda)
   ============================================================ */
 
var heroImages = [
  'foto-barong.png',
  'foto-reog.jpg',
  'foto-reog2.jpg'
];
 
var currentHeroImage = 0;
var heroSection = document.getElementById('hero-section');
 
function changeHeroBackground() {
  if (!heroSection) return;
  heroSection.style.backgroundImage =
    'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("' + heroImages[currentHeroImage] + '")';
  heroSection.style.backgroundSize = 'cover';
  heroSection.style.backgroundPosition = 'center';
  currentHeroImage = (currentHeroImage + 1) % heroImages.length;
}
 
// Jalankan slideshow
changeHeroBackground();
setInterval(changeHeroBackground, 5000);
 
/* ============================================================
   4. DATA QUIZ
   ============================================================ */
 
var quizData = [
  {
    q: 'Siapa tokoh utama dalam cerita Reog Ponorogo?',
    a: ['Prabu Klono Sewandono', 'Bujang Ganong', 'Warok', 'Jathil'],
    correct: 0
  },
  {
    q: 'Apa nama topeng utama dalam Reog?',
    a: ['Ganongan', 'Singo Barong', 'Jathilan', 'Warok'],
    correct: 1
  },
  {
    q: 'Kabupaten Ponorogo berada di provinsi apa?',
    a: ['Jawa Tengah', 'DIY', 'Jawa Timur', 'Banten'],
    correct: 2
  },
  {
    q: 'Siapa tokoh jenaka dalam Reog?',
    a: ['Bujang Ganong', 'Warok', 'Prabu Klono', 'Jathil'],
    correct: 0
  },
  {
    q: 'Apa julukan Kabupaten Ponorogo?',
    a: ['Kota Apel', 'Kota Reog', 'Kota Batik', 'Kota Gudeg'],
    correct: 1
  },
  {
    q: 'Warok melambangkan apa?',
    a: ['Kekuatan dan kebijaksanaan', 'Kekayaan', 'Perdagangan', 'Pertanian'],
    correct: 0
  },
  {
    q: 'Singo Barong memiliki hiasan burung apa?',
    a: ['Burung Merak', 'Elang', 'Merpati', 'Bangau'],
    correct: 0
  },
  {
    q: 'Festival Reog biasanya meriah saat apa?',
    a: ['Natal', 'Grebeg Suro', 'Imlek', 'Nyepi'],
    correct: 1
  },
  {
    q: 'Reog termasuk jenis seni apa?',
    a: ['Musik', 'Tari Tradisional', 'Lukisan', 'Kerajinan'],
    correct: 1
  },
  {
    q: 'Bujang Ganong terkenal karena apa?',
    a: ['Kelucuannya', 'Diam', 'Menyanyi', 'Melukis'],
    correct: 0
  },
  {
    q: 'Reog berasal dari kota mana?',
    a: ['Madiun', 'Ponorogo', 'Magetan', 'Ngawi'],
    correct: 1
  },
  {
    q: 'Jathil biasanya menampilkan tarian apa?',
    a: ['Tarian Kuda', 'Tari Topeng', 'Tari Perang', 'Tari Api'],
    correct: 0
  },
  {
    q: 'Apa warna dominan kostum Reog?',
    a: ['Putih', 'Hijau', 'Emas dan Merah', 'Biru'],
    correct: 2
  },
  {
    q: 'Reog menjadi identitas budaya kota mana?',
    a: ['Ponorogo', 'Malang', 'Surabaya', 'Jember'],
    correct: 0
  },
  {
    q: 'Apa tujuan utama pelestarian Reog?',
    a: ['Melupakan budaya', 'Menjaga warisan budaya', 'Menghapus tradisi', 'Mengurangi wisata'],
    correct: 1
  },
  {
    q: 'Media digital dapat membantu Reog melalui?',
    a: ['Promosi Online', 'Penghapusan Arsip', 'Pembatasan Akses', 'Sensor Budaya'],
    correct: 0
  },
  {
    q: 'Warok dikenal memiliki sifat apa?',
    a: ['Pemberani', 'Penakut', 'Malas', 'Pemarah'],
    correct: 0
  },
  {
    q: 'Reog sering ditampilkan dalam?',
    a: ['Festival Budaya', 'Balap Motor', 'Pertandingan Bola', 'Pameran Mobil'],
    correct: 0
  },
  {
    q: 'Anak muda dapat melestarikan Reog dengan?',
    a: ['Belajar Tari Reog', 'Mengabaikan Budaya', 'Tidak Hadir Festival', 'Menolak Tradisi'],
    correct: 0
  },
  {
    q: 'Reog Ponorogo merupakan warisan apa?',
    a: ['Budaya', 'Industri', 'Teknologi', 'Olahraga'],
    correct: 0
  }
];
 
/* ============================================================
   5. LOGIKA QUIZ
   ============================================================ */
 
var currentQuestion = 0;
var score = 0;
var answered = false;
 
function startQuiz() {
  currentQuestion = 0;
  score = 0;
  answered = false;
 
  document.getElementById('quiz-start').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-active').style.display = 'block';
 
  loadQuestion();
}
 
function loadQuestion() {
  answered = false;
 
  var q = quizData[currentQuestion];
  var total = quizData.length;
 
  // Update info bar
  document.getElementById('current-q').textContent = currentQuestion + 1;
  document.getElementById('score').textContent = 'Skor: ' + score;
 
  // Update progress bar
  var pct = Math.round(((currentQuestion + 1) / total) * 100);
  document.getElementById('quiz-progress-fill').style.width = pct + '%';
 
  // Tampilkan soal
  document.getElementById('question-text').textContent = q.q;
 
  // Buat tombol pilihan
  var container = document.getElementById('options');
  container.innerHTML = '';
 
  q.a.forEach(function(answer, index) {
    var btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = answer;
    btn.onclick = function() { selectAnswer(index); };
    container.appendChild(btn);
  });
 
  // Sembunyikan tombol next
  document.getElementById('next-btn').style.display = 'none';
}
 
function selectAnswer(index) {
  if (answered) return;
  answered = true;
 
  var correct = quizData[currentQuestion].correct;
  var options = document.querySelectorAll('.option-btn');
 
  options.forEach(function(opt, i) {
    opt.disabled = true;
    if (i === correct) {
      opt.classList.add('correct');
    }
    if (i === index && i !== correct) {
      opt.classList.add('wrong');
    }
  });
 
  if (index === correct) {
    score++;
    document.getElementById('score').textContent = 'Skor: ' + score;
  }
 
  document.getElementById('next-btn').style.display = 'inline-flex';
}
 
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}
 
function showResult() {
  document.getElementById('quiz-active').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'block';
 
  var nilai = Math.round((score / quizData.length) * 100);
  document.getElementById('final-score-num').textContent = nilai;
 
  var pesan = '';
  if (nilai >= 90) {
    pesan = score + ' benar dari 20 soal<br><strong>Luar Biasa! Kamu Ahli Budaya Ponorogo! 🏆</strong>';
  } else if (nilai >= 70) {
    pesan = score + ' benar dari 20 soal<br><strong>Bagus! Terus pelajari budaya kita! 👍</strong>';
  } else if (nilai >= 50) {
    pesan = score + ' benar dari 20 soal<br><strong>Lumayan! Masih ada ruang untuk belajar 📚</strong>';
  } else {
    pesan = score + ' benar dari 20 soal<br><strong>Semangat! Mari pelajari Reog lebih dalam 💪</strong>';
  }
 
  document.getElementById('final-score-text').innerHTML = pesan;
}
 
function restartQuiz() {
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-start').style.display = 'block';
}
 
/* ============================================================
   6. GAME — WAROK JAGA PONOROGO
   ============================================================ */
 
var canvas = document.getElementById('game-canvas');
var ctx = canvas && canvas.getContext('2d');
 
// Dimensi
var GW = 800;
var GH = 400;
var GROUND_Y = GH - 70;
 
// Fisika
var GRAVITY   = 0.55;
var JUMP_VEL  = -13;
 
// State game
var gameRunning  = false;
var gamePaused   = false;
var gameLoop     = null;
var frameCount   = 0;
 
// Objek game
var player, items, obstacles;
var gScore, gLevel, gLives;
 
// ---- Inisialisasi ----
function initGame() {
  player = {
    x: 90,
    y: GROUND_Y - 58,
    w: 40,
    h: 58,
    vy: 0,
    onGround: true
  };
  items      = [];
  obstacles  = [];
  gScore     = 0;
  gLevel     = 1;
  gLives     = 3;
  frameCount = 0;
  updateHUD();
}
 
function updateHUD() {
  var scoreEl = document.getElementById('g-score');
  var levelEl = document.getElementById('g-level');
  var livesEl = document.getElementById('g-lives');
  if (scoreEl) scoreEl.textContent = gScore;
  if (levelEl) levelEl.textContent = gLevel;
  if (livesEl) {
    livesEl.textContent = '❤️'.repeat(gLives) + '🖤'.repeat(Math.max(0, 3 - gLives));
  }
}
 
// ---- Kontrol ----
function jump() {
  if (player && player.onGround) {
    player.vy = JUMP_VEL;
    player.onGround = false;
  }
}
 
function pauseGame() {
  gamePaused = true;
}
 
function resumeGame() {
  if (gameRunning && gamePaused) {
    gamePaused = false;
    gameLoop = requestAnimationFrame(tick);
  }
}
 
// ---- Event ----
if (canvas) {
  canvas.addEventListener('click', function() {
    if (!gameRunning) {
      startGame();
    } else if (!gamePaused) {
      jump();
    }
  });
 
  canvas.addEventListener('touchstart', function(e) {
    e.preventDefault();
    if (!gameRunning) {
      startGame();
    } else if (!gamePaused) {
      jump();
    }
  }, { passive: false });
}
 
document.addEventListener('keydown', function(e) {
  if (e.code === 'Space' || e.key === ' ') {
    e.preventDefault();
    if (!gameRunning) {
      startGame();
    } else if (!gamePaused) {
      jump();
    }
  }
});
 
// ---- Start / Reset ----
function startGame() {
  if (gameRunning) return;
  initGame();
  gameRunning = true;
  gamePaused  = false;
  var btn = document.getElementById('start-btn');
  if (btn) btn.innerHTML = '<i class="fas fa-pause"></i> Sedang Bermain';
  gameLoop = requestAnimationFrame(tick);
}
 
function resetGame() {
  gameRunning = false;
  gamePaused  = false;
  if (gameLoop) { cancelAnimationFrame(gameLoop); gameLoop = null; }
  initGame();
  var btn = document.getElementById('start-btn');
  if (btn) btn.innerHTML = '<i class="fas fa-play"></i> Mulai Game';
  drawIdle();
}
 
function endGame() {
  gameRunning = false;
  if (gameLoop) { cancelAnimationFrame(gameLoop); gameLoop = null; }
  var btn = document.getElementById('start-btn');
  if (btn) btn.innerHTML = '<i class="fas fa-play"></i> Main Lagi';
  drawGameOver();
}
 
// ---- Spawn ----
function spawnItem() {
  // topeng atau bintang
  if (Math.random() < 0.018) {
    var types = ['topeng', 'topeng', 'bintang'];
    var t = types[Math.floor(Math.random() * types.length)];
    items.push({
      x:       GW + 10,
      y:       GROUND_Y - 55,
      size:    30,
      type:    t,
      angle:   0,
      collected: false
    });
  }
}
 
function spawnObstacle() {
  var chance = 0.012 + gLevel * 0.003;
  if (Math.random() < chance) {
    var baseSpeed = 3.5 + gLevel * 0.5;
    var h = 30 + Math.random() * 40;
    obstacles.push({
      x:     GW + 10,
      y:     GROUND_Y - h,
      w:     26,
      h:     h,
      speed: baseSpeed + Math.random() * 1.5
    });
  }
}
 
// ---- Update ----
function update() {
  frameCount++;
 
  // Level naik setiap 30 poin
  gLevel = Math.floor(gScore / 30) + 1;
 
  // Fisika pemain
  player.vy += GRAVITY;
  player.y  += player.vy;
 
  if (player.y >= GROUND_Y - player.h) {
    player.y       = GROUND_Y - player.h;
    player.vy      = 0;
    player.onGround = true;
  } else {
    player.onGround = false;
  }
 
  // Spawn
  spawnItem();
  spawnObstacle();
 
  // Kecepatan scroll
  var scrollSpeed = 2.8 + gLevel * 0.4;
 
  // Update items
  items.forEach(function(it) {
    it.x -= scrollSpeed;
    it.angle += 0.07;
 
    // Deteksi koleksi
    if (
      !it.collected &&
      it.x + it.size > player.x + 6 &&
      it.x - it.size < player.x + player.w - 6 &&
      it.y + it.size > player.y + 6 &&
      it.y - it.size < player.y + player.h - 6
    ) {
      it.collected = true;
      gScore += (it.type === 'topeng') ? 10 : 5;
      updateHUD();
    }
  });
 
  // Hapus item yang sudah di-collect atau keluar layar
  items = items.filter(function(it) {
    return !it.collected && it.x > -60;
  });
 
  // Update obstacles
  var hit = false;
  obstacles.forEach(function(ob) {
    ob.x -= ob.speed;
 
    // Deteksi tabrakan (margin 8px)
    if (
      ob.x + ob.w - 8 > player.x + 8 &&
      ob.x + 8 < player.x + player.w - 8 &&
      ob.y < player.y + player.h &&
      ob.y + ob.h > player.y
    ) {
      hit = true;
      ob.x = -999; // hilangkan
    }
  });
 
  if (hit) {
    gLives--;
    updateHUD();
    if (gLives <= 0) {
      endGame();
      return;
    }
  }
 
  obstacles = obstacles.filter(function(ob) { return ob.x > -80; });
}
 
// ---- Draw ----
function draw() {
  if (!ctx) return;
  ctx.clearRect(0, 0, GW, GH);
 
  drawBackground();
  drawItems();
  drawObstacles();
  drawPlayer();
  drawHUDCanvas();
}
 
function drawBackground() {
  // Langit malam gradasi
  var sky = ctx.createLinearGradient(0, 0, 0, GH);
  sky.addColorStop(0,   '#0D0500');
  sky.addColorStop(0.5, '#2D0A00');
  sky.addColorStop(1,   '#5C1500');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, GW, GH);
 
  // Bulan sabit
  ctx.fillStyle = '#FCD34D';
  ctx.beginPath();
  ctx.arc(GW - 80, 55, 30, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#0D0500';
  ctx.beginPath();
  ctx.arc(GW - 65, 45, 24, 0, Math.PI * 2);
  ctx.fill();
 
  // Bintang-bintang
  ctx.fillStyle = 'rgba(252,211,77,0.7)';
  for (var s = 0; s < 25; s++) {
    var sx = (s * 137 + frameCount * 0.04) % GW;
    var sy = (s * 61) % (GROUND_Y - 80);
    var ss = (s % 3 === 0) ? 2 : 1.5;
    ctx.fillRect(sx, sy, ss, ss);
  }
 
  // Siluet gunung
  ctx.fillStyle = '#1A0400';
  ctx.beginPath();
  ctx.moveTo(0, GROUND_Y);
  var peaks = [
    [0, GROUND_Y - 60], [80, GROUND_Y - 110], [180, GROUND_Y - 75],
    [300, GROUND_Y - 140], [420, GROUND_Y - 95], [540, GROUND_Y - 130],
    [660, GROUND_Y - 80], [750, GROUND_Y - 110], [GW, GROUND_Y - 60]
  ];
  peaks.forEach(function(p) { ctx.lineTo(p[0], p[1]); });
  ctx.lineTo(GW, GROUND_Y);
  ctx.closePath();
  ctx.fill();
 
  // Tanah
  ctx.fillStyle = '#4A1000';
  ctx.fillRect(0, GROUND_Y, GW, GH - GROUND_Y);
 
  ctx.fillStyle = '#6B1800';
  ctx.fillRect(0, GROUND_Y, GW, 8);
 
  // Garis tanah dekoratif
  ctx.strokeStyle = 'rgba(217,119,6,0.2)';
  ctx.lineWidth = 1;
  for (var gx = (frameCount * 1.5) % 50; gx < GW; gx += 50) {
    ctx.beginPath();
    ctx.moveTo(gx, GROUND_Y + 2);
    ctx.lineTo(gx, GH);
    ctx.stroke();
  }
}
 
function drawItems() {
  items.forEach(function(it) {
    ctx.save();
    ctx.translate(it.x, it.y);
    ctx.rotate(it.angle);
 
    if (it.type === 'topeng') {
      // Topeng Reog
      ctx.fillStyle = '#B91C1C';
      ctx.fillRect(-it.size / 2, -it.size / 2, it.size, it.size);
 
      // Mahkota merak (kuning)
      ctx.fillStyle = '#D97706';
      for (var f = 0; f < 5; f++) {
        var fx = -it.size / 2 + 3 + f * 5;
        ctx.fillRect(fx, -it.size / 2 - 8, 4, 10);
        ctx.beginPath();
        ctx.arc(fx + 2, -it.size / 2 - 9, 3, 0, Math.PI * 2);
        ctx.fill();
      }
 
      // Muka singa
      ctx.fillStyle = '#F4A261';
      ctx.beginPath();
      ctx.arc(0, 0, it.size / 3, 0, Math.PI * 2);
      ctx.fill();
 
      // Mata
      ctx.fillStyle = '#1C1917';
      ctx.beginPath();
      ctx.arc(-4, -2, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(4, -2, 2.5, 0, Math.PI * 2);
      ctx.fill();
 
      // Kumis
      ctx.strokeStyle = '#1C1917';
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(-2, 3); ctx.lineTo(-9, 5); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(2, 3); ctx.lineTo(9, 5); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-2, 3); ctx.lineTo(-9, 1); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(2, 3); ctx.lineTo(9, 1); ctx.stroke();
 
      // Label
      ctx.fillStyle = '#FCD34D';
      ctx.font = 'bold 9px Inter';
      ctx.textAlign = 'center';
      ctx.fillText('+10', 0, it.size / 2 + 14);
      ctx.textAlign = 'left';
 
    } else {
      // Bintang emas
      ctx.fillStyle = '#FCD34D';
      ctx.strokeStyle = '#D97706';
      ctx.lineWidth = 1.5;
 
      // Gambar bintang 5 sudut
      ctx.beginPath();
      for (var i2 = 0; i2 < 5; i2++) {
        var ang = (i2 * 4 * Math.PI / 5) - Math.PI / 2;
        var ang2 = ((i2 * 4 + 2) * Math.PI / 5) - Math.PI / 2;
        if (i2 === 0) {
          ctx.moveTo(Math.cos(-Math.PI/2) * 14, Math.sin(-Math.PI/2) * 14);
        }
        ctx.lineTo(Math.cos(ang) * 14, Math.sin(ang) * 14);
        ctx.lineTo(Math.cos(ang2) * 7, Math.sin(ang2) * 7);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
 
      ctx.fillStyle = '#D97706';
      ctx.font = 'bold 9px Inter';
      ctx.textAlign = 'center';
      ctx.fillText('+5', 0, 24);
      ctx.textAlign = 'left';
    }
 
    ctx.restore();
  });
}
 
function drawObstacles() {
  obstacles.forEach(function(ob) {
    // Gagang keris
    ctx.fillStyle = '#78350F';
    ctx.fillRect(ob.x + ob.w / 2 - 5, ob.y + ob.h * 0.55, 10, ob.h * 0.45);
 
    // Pelindung (garda)
    ctx.fillStyle = '#D97706';
    ctx.fillRect(ob.x, ob.y + ob.h * 0.5, ob.w, 8);
 
    // Bilah keris (berliku)
    ctx.fillStyle = '#9CA3AF';
    ctx.fillRect(ob.x + ob.w / 2 - 5, ob.y, 10, ob.h * 0.52);
 
    // Lekukan keris
    ctx.fillStyle = '#6B7280';
    for (var lk = 0; lk < 4; lk++) {
      var lkY = ob.y + 8 + lk * (ob.h * 0.4 / 4);
      ctx.fillRect(ob.x + ob.w / 2 - 8, lkY, 16, 4);
    }
 
    // Ujung keris
    ctx.fillStyle = '#D1D5DB';
    ctx.beginPath();
    ctx.moveTo(ob.x + ob.w / 2, ob.y - 16);
    ctx.lineTo(ob.x + ob.w / 2 - 5, ob.y);
    ctx.lineTo(ob.x + ob.w / 2 + 5, ob.y);
    ctx.closePath();
    ctx.fill();
 
    // Label
    ctx.fillStyle = '#EF4444';
    ctx.font = 'bold 9px Inter';
    ctx.textAlign = 'center';
    ctx.fillText('⚔️', ob.x + ob.w / 2, ob.y - 20);
    ctx.textAlign = 'left';
  });
}
 
function drawPlayer() {
  var px = Math.round(player.x);
  var py = Math.round(player.y);
 
  // Animasi kaki
  var legAnim = player.onGround ? Math.sin(frameCount * 0.22) * 7 : 0;
 
  // Kaki kiri
  ctx.fillStyle = '#292524';
  ctx.fillRect(px + 6, py + player.h - 16, 13, 16 + legAnim);
 
  // Kaki kanan
  ctx.fillRect(px + player.w - 19, py + player.h - 16, 13, 16 - legAnim);
 
  // Badan (baju hitam warok)
  ctx.fillStyle = '#1C1917';
  ctx.fillRect(px + 4, py + 20, player.w - 8, player.h - 36);
 
  // Sabuk emas
  ctx.fillStyle = '#D97706';
  ctx.fillRect(px + 4, py + 38, player.w - 8, 5);
 
  // Iket kepala (merah dengan garis emas)
  ctx.fillStyle = '#B91C1C';
  ctx.fillRect(px + 3, py + 2, player.w - 6, 18);
  ctx.fillStyle = '#D97706';
  ctx.fillRect(px + 3, py + 2, player.w - 6, 4);
  ctx.fillRect(px + 3, py + 16, player.w - 6, 4);
 
  // Simpul iket
  ctx.fillStyle = '#7F1D1D';
  ctx.fillRect(px + player.w - 8, py + 6, 8, 8);
 
  // Wajah
  ctx.fillStyle = '#D4A574';
  ctx.beginPath();
  ctx.arc(px + player.w / 2, py + 14, 11, 0, Math.PI * 2);
  ctx.fill();
 
  // Mata
  ctx.fillStyle = '#1C1917';
  ctx.beginPath();
  ctx.arc(px + player.w / 2 - 4, py + 12, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(px + player.w / 2 + 4, py + 12, 2, 0, Math.PI * 2);
  ctx.fill();
 
  // Alis tebal
  ctx.fillStyle = '#292524';
  ctx.fillRect(px + player.w / 2 - 7, py + 8, 5, 2);
  ctx.fillRect(px + player.w / 2 + 2, py + 8, 5, 2);
 
  // Kumis warok
  ctx.strokeStyle = '#292524';
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(px + player.w / 2 - 2, py + 16); ctx.lineTo(px + player.w / 2 - 8, py + 18); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(px + player.w / 2 + 2, py + 16); ctx.lineTo(px + player.w / 2 + 8, py + 18); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(px + player.w / 2 - 2, py + 16); ctx.lineTo(px + player.w / 2 - 8, py + 14); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(px + player.w / 2 + 2, py + 16); ctx.lineTo(px + player.w / 2 + 8, py + 14); ctx.stroke();
 
  // Pecut (cambuk warok)
  ctx.strokeStyle = '#D97706';
  ctx.lineWidth = 2.5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(px + player.w - 2, py + 28);
  ctx.quadraticCurveTo(px + player.w + 20, py + 18, px + player.w + 30, py + 10 + Math.sin(frameCount * 0.15) * 8);
  ctx.stroke();
 
  // Ujung pecut merah
  ctx.fillStyle = '#EF4444';
  ctx.beginPath();
  ctx.arc(px + player.w + 30, py + 10 + Math.sin(frameCount * 0.15) * 8, 4, 0, Math.PI * 2);
  ctx.fill();
}
 
function drawHUDCanvas() {
  // Panel skor di canvas
  ctx.fillStyle = 'rgba(0,0,0,0.45)';
  ctx.beginPath();
  ctx.roundRect(10, 8, 200, 36, 8);
  ctx.fill();
 
  ctx.strokeStyle = 'rgba(217,119,6,0.6)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(10, 8, 200, 36, 8);
  ctx.stroke();
 
  ctx.fillStyle = '#FCD34D';
  ctx.font = 'bold 13px Inter, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('🎭 ' + gScore + '  ⚡ Lv.' + gLevel, 18, 31);
}
 
// ---- Game Loop ----
function tick() {
  if (!gameRunning || gamePaused) return;
  update();
  draw();
  gameLoop = requestAnimationFrame(tick);
}
 
// ---- Layar Idle ----
function drawIdle() {
  if (!ctx) return;
  ctx.clearRect(0, 0, GW, GH);
 
  // Background
  var sky = ctx.createLinearGradient(0, 0, 0, GH);
  sky.addColorStop(0, '#0D0500');
  sky.addColorStop(1, '#5C1500');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, GW, GH);
 
  // Overlay gelap
  ctx.fillStyle = 'rgba(0,0,0,0.45)';
  ctx.fillRect(0, 0, GW, GH);
 
  // Judul
  ctx.fillStyle = '#D97706';
  ctx.font = 'bold 28px Playfair Display, serif';
  ctx.textAlign = 'center';
  ctx.fillText('🦁 WAROK JAGA PONOROGO', GW / 2, GH / 2 - 50);
 
  ctx.fillStyle = '#FCD34D';
  ctx.font = 'bold 16px Inter, sans-serif';
  ctx.fillText('Game Seru Bertema Reog Ponorogo', GW / 2, GH / 2 - 10);
 
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.font = '14px Inter, sans-serif';
  ctx.fillText('Klik tombol "Mulai Game" atau tekan SPASI untuk bermain', GW / 2, GH / 2 + 26);
  ctx.fillText('🎭 Kumpulkan topeng (+10 poin)    ⚔️ Hindari keris musuh', GW / 2, GH / 2 + 56);
 
  ctx.textAlign = 'left';
}
 
// ---- Game Over Screen ----
function drawGameOver() {
  if (!ctx) return;
 
  // Overlay
  ctx.fillStyle = 'rgba(0,0,0,0.8)';
  ctx.fillRect(0, 0, GW, GH);
 
  // Panel
  ctx.fillStyle = '#7F1D1D';
  ctx.beginPath();
  ctx.roundRect(GW / 2 - 180, GH / 2 - 90, 360, 180, 16);
  ctx.fill();
 
  ctx.strokeStyle = '#D97706';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(GW / 2 - 180, GH / 2 - 90, 360, 180, 16);
  ctx.stroke();
 
  ctx.fillStyle = '#EF4444';
  ctx.font = 'bold 36px Playfair Display, serif';
  ctx.textAlign = 'center';
  ctx.fillText('GAME OVER!', GW / 2, GH / 2 - 30);
 
  ctx.fillStyle = '#FCD34D';
  ctx.font = 'bold 20px Inter, sans-serif';
  ctx.fillText('Skor Akhir: ' + gScore, GW / 2, GH / 2 + 14);
 
  ctx.fillStyle = 'rgba(255,255,255,0.65)';
  ctx.font = '13px Inter, sans-serif';
  ctx.fillText('Klik "Mulai Game" atau tekan SPASI untuk bermain lagi', GW / 2, GH / 2 + 50);
 
  ctx.textAlign = 'left';
}
 
/* ============================================================
   7. INISIALISASI SAAT HALAMAN DIMUAT
   ============================================================ */
 
document.addEventListener('DOMContentLoaded', function() {
  // Pastikan beranda aktif pertama
  showPage('beranda');
 
  // Gambar idle di canvas game
  if (ctx) {
    initGame();
    drawIdle();
  }
 
  // Tambahkan roundRect polyfill jika tidak tersedia
  if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
      this.beginPath();
      this.moveTo(x + r, y);
      this.lineTo(x + w - r, y);
      this.quadraticCurveTo(x + w, y, x + w, y + r);
      this.lineTo(x + w, y + h - r);
      this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      this.lineTo(x + r, y + h);
      this.quadraticCurveTo(x, y + h, x, y + h - r);
      this.lineTo(x, y + r);
      this.quadraticCurveTo(x, y, x + r, y);
      this.closePath();
    };
  }
});
 