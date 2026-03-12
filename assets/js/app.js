// ----------------------------------------------------------------------
// DATEI: assets/js/app.js
// INHALT: App Logik, Timer, Rendering für AP2 FISI
// ----------------------------------------------------------------------

// 1. Daten holen (aus data.js)
const AP2_DATA = window.AP2_DATA || [];

if (AP2_DATA.length === 0) {
  console.error('FEHLER: data.js wurde nicht vor app.js geladen oder ist leer!');
}

// 2. App Logik
const app = {
  state: {},
  openTopics: new Set(),
  filter: 'all',
  recId: null,
  timer: null,
  timerRunning: false,
  timeLeft: 1500,
  searchQuery: '',
  cardMap: {},
  catMap: {},

  // --- ANKI / FLASHCARDS ---
  anki: {
    currentTopicId: null,
    cards: [],
    currentIndex: 0,
    mode: 'manual', // 'manual' oder 'spaced'

    open(topicId) {
      const topic = app.findTopic(topicId);
      if (!topic) return;

      // Priorität: Echte Lernkarten aus questions.js, sonst Fallback auf sub-Tasks
      const allQuestions = window.ANKI_QUESTIONS || {};
      if (allQuestions[topicId]) {
        this.cards = allQuestions[topicId];
      } else if (topic.sub && topic.sub.length > 0) {
        this.cards = topic.sub.map((text, index) => ({
          id: `${topicId}_${index}`,
          q: text,
          a: "Hast du diesen Punkt verstanden und kannst ihn erklären?"
        }));
      } else {
        return;
      }

      this.currentTopicId = topicId;
      document.getElementById('ankiTopicTitle').textContent = topic.title;
      
      // Statistiken laden
      if (!app.state.ankiStats) app.state.ankiStats = {};
      const stats = app.state.ankiStats[topicId] || { total: 0, correct: 0, sessions: 0 };
      
      const statsContainer = document.getElementById('ankiTopicStats');
      if (statsContainer) {
        if (stats.total > 0) {
          const accuracy = Math.round((stats.correct / stats.total) * 100);
          statsContainer.innerHTML = `
            <div class="flex items-center justify-center gap-6 mt-4 p-3 bg-dark-bg/50 rounded-xl border border-dark-border/50">
              <div class="text-center">
                <span class="block text-[10px] text-dark-muted uppercase font-bold">Gelernt</span>
                <span class="text-sm font-bold text-white">${stats.total} Karten</span>
              </div>
              <div class="w-px h-6 bg-dark-border"></div>
              <div class="text-center">
                <span class="block text-[10px] text-dark-muted uppercase font-bold">Quote</span>
                <span class="text-sm font-bold text-dark-success">${accuracy}%</span>
              </div>
              <div class="w-px h-6 bg-dark-border"></div>
              <div class="text-center">
                <span class="block text-[10px] text-dark-muted uppercase font-bold">Sessions</span>
                <span class="text-sm font-bold text-dark-accent">${stats.sessions}x</span>
              </div>
            </div>
          `;
          statsContainer.classList.remove('hidden');
        } else {
          statsContainer.classList.add('hidden');
        }
      }

      // Reset Views
      document.getElementById('ankiModeView').classList.remove('hidden');
      document.getElementById('ankiQuestionView').classList.add('hidden');
      document.getElementById('ankiAnswerView').classList.add('hidden');
      document.getElementById('ankiFinishView').classList.add('hidden');
      document.getElementById('ankiModeBadge').innerHTML = '';
      document.getElementById('ankiProgress').style.width = '0%';

      const modal = document.getElementById('ankiModal');
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    },

    start(mode) {
      this.mode = mode;
      this.currentIndex = 0;
      
      // Global Stats tracken (Session zählt ab Start)
      if (!app.state.ankiStats) app.state.ankiStats = {};
      if (!app.state.ankiStats[this.currentTopicId]) {
        app.state.ankiStats[this.currentTopicId] = { total: 0, correct: 0, sessions: 0 };
      }
      app.state.ankiStats[this.currentTopicId].sessions++;
      app.save();
      app.updateStats();

      // Karten mischen (alle laden)
      this.cards = [...this.cards].sort(() => Math.random() - 0.5);
      
      const badge = document.getElementById('ankiModeBadge');
      if (mode === 'spaced') {
        badge.innerHTML = '<i class="fa-solid fa-brain mr-1 text-dark-accent"></i> <span class="text-[9px] font-bold uppercase tracking-widest text-dark-accent">Strategie-Modus</span>';
      } else {
        badge.innerHTML = '<i class="fa-solid fa-dumbbell mr-1 text-dark-muted"></i> <span class="text-[9px] font-bold uppercase tracking-widest text-dark-muted">Freies Training</span>';
      }

      document.getElementById('ankiModeView').classList.add('hidden');
      document.getElementById('ankiQuestionView').classList.remove('hidden');
      this.showCard();
    },

    showCard() {
      const card = this.cards[this.currentIndex];
      const progress = (this.currentIndex / this.cards.length) * 100;
      
      document.getElementById('ankiProgress').style.width = `${progress}%`;
      document.getElementById('ankiQuestionText').textContent = card.q;
      document.getElementById('ankiAnswerText').textContent = card.a;

      document.getElementById('ankiQuestionView').classList.remove('hidden');
      document.getElementById('ankiAnswerView').classList.add('hidden');
    },

    showAnswer() {
      document.getElementById('ankiQuestionView').classList.add('hidden');
      document.getElementById('ankiAnswerView').classList.remove('hidden');
    },

    next(isCorrect) {
      // Global Stats tracken
      const gStats = app.state.ankiStats[this.currentTopicId];
      gStats.total++;
      if (isCorrect) {
        gStats.correct++;
        // Any correct answer marks it as "learned" for progress tracking
        if (!app.state.anki) app.state.anki = {};
        if (!app.state.anki[this.cards[this.currentIndex].id]) {
            app.state.anki[this.cards[this.currentIndex].id] = { level: 1, nextReview: 0 };
        }
      }

      if (this.mode === 'spaced') {
        this.updateCardLevel(this.cards[this.currentIndex].id, isCorrect);
      }

      this.currentIndex++;
      if (this.currentIndex < this.cards.length) {
        this.showCard();
      } else {
        this.showFinish();
      }
      app.save();
    },

    updateCardLevel(cardId, isCorrect) {
      if (!app.state.anki) app.state.anki = {};
      if (!app.state.anki[cardId]) {
        app.state.anki[cardId] = { level: 0, nextReview: 0 };
      }

      const cardData = app.state.anki[cardId];
      if (isCorrect) {
        cardData.level = Math.min(cardData.level + 1, 5);
      } else {
        cardData.level = 1;
      }

      const intervals = [0, 1, 3, 7, 14, 30];
      const daysToAdd = intervals[cardData.level] || 1;
      
      const nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + daysToAdd);
      nextDate.setHours(0, 0, 0, 0);
      cardData.nextReview = nextDate.getTime();
    },

    showFinish() {
      document.getElementById('ankiProgress').style.width = '100%';
      document.getElementById('ankiAnswerView').classList.add('hidden');
      document.getElementById('ankiFinishView').classList.remove('hidden');
      
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10b981', '#34d399']
        });
      }
    },

    close() {
      const modal = document.getElementById('ankiModal');
      modal.classList.add('hidden');
      document.body.style.overflow = '';
      app.updateStats();
    }
  },

  quotes: [
    '„Kein Backup, kein Mitleid.“',
    '„Have you tried turning it off and on again?“',
    '„Uptime ist durch nichts zu ersetzen.“',
    '„Never touch a running system.“',
    '„Ein Admin schläft nicht, er puffert.“',
    '„In Theorie gibt es keinen Unterschied zwischen Theorie und Praxis. In der Praxis schon.“',
    '„Drei Dinge sind sicher: Der Tod, die Steuer und dass das Backup genau dann nicht funktioniert, wenn man es braucht.“',
    '„IT ist 10% Technik und 90% Google.“',
    '„Wer misst, misst Mist.“',
    '„DNS is always the problem.“',
  ],

  ranks: [
    { min: 0, name: 'Packet Trainee', color: '#94a3b8' },
    { min: 30, name: 'First Level Hero', color: '#0ea5e9' },
    { min: 80, name: 'Cable Management Pro', color: '#38bdf8' },
    { min: 150, name: 'Network Admin', color: '#0284c7' },
    { min: 250, name: 'Security Architect', color: '#10b981' },
    { min: 350, name: 'Cloud Specialist', color: '#8b5cf6' },
    { min: 450, name: 'Server Overlord', color: '#f59e0b' },
    { min: 500, name: 'Infrastructure Legend', color: '#ef4444' },
    { min: 530, name: 'Datacenter Master', color: '#ec4899' },
    { min: 550, name: 'IT-Gott (FISI Edition)', color: '#FFDD00' },
  ],

  // --- INIT ---
  init() {
    const msgs = ['Lade AP2-Datenbank...', 'Initialisiere Netzwerke...', 'Berechne Lernpfad...'];
    let msgIdx = 0;
    const loadInt = setInterval(() => {
      const el = document.getElementById('loadingText');
      if (el) el.textContent = msgs[msgIdx++ % msgs.length];
    }, 150);

    const hideLoader = () => {
      clearInterval(loadInt);
      const el = document.getElementById('loadingOverlay');
      if (el) {
        el.classList.add('force-hide');
        setTimeout(() => (el.style.display = 'none'), 600);
      }
    };

    try {
      const s = localStorage.getItem('ap2_tracker_state_v1');
      if (s) this.state = JSON.parse(s);

      if (localStorage.getItem('ap2_infobox_dismissed')) {
        const infoBox = document.getElementById('infoBox');
        if (infoBox) infoBox.classList.add('hidden');
      }

      if (localStorage.getItem('ap2_release_banner_dismissed_v2')) {
        const banner = document.getElementById('releaseBanner');
        if (banner) banner.classList.add('hidden');
      }

      if (!localStorage.getItem('ap2_welcome_dismissed_v2')) {
        setTimeout(() => {
          const welcomeModal = document.getElementById('welcomeModal');
          if (welcomeModal) {
            welcomeModal.classList.remove('hidden');
            welcomeModal.style.display = 'flex';
          }
        }, 800);
      }

      const quoteEl = document.getElementById('motivationQuote');
      if (quoteEl)
        quoteEl.textContent = this.quotes[Math.floor(Math.random() * this.quotes.length)];

      this.renderActivityGraph();
      this.updateCountdown();
      setInterval(() => this.updateCountdown(), 60000);
      this.buildDOM();
      this.applyFilter();
    } catch (err) {
      console.error('Critical Init Error:', err);
    } finally {
      setTimeout(hideLoader, 600);
    }
  },

  // --- SAVE & STATE ---
  save() {
    try {
      localStorage.setItem('ap2_tracker_state_v1', JSON.stringify(this.state));
    } catch (e) {
      console.error('Storage quota exceeded or error', e);
    }
    this.updateStats();
  },

  hideInfoBox() {
    const el = document.getElementById('infoBox');
    if (el) el.remove();
    localStorage.setItem('ap2_infobox_dismissed', 'true');
  },

  hideReleaseBanner() {
    const el = document.getElementById('releaseBanner');
    if (el) el.classList.add('hidden');
    localStorage.setItem('ap2_release_banner_dismissed_v2', 'true');
  },

  getState(id) {
    if (!this.state[id])
      this.state[id] = {
        done: false,
        subDone: [],
        stars: 0,
        reps: [false, false, false],
        last: null,
        ankiStats: { total: 0, correct: 0, sessions: 0 }
      };
    
    // Fallback falls ankiStats in bestehenden Daten fehlt
    if (!this.state[id].ankiStats) {
      this.state[id].ankiStats = { total: 0, correct: 0, sessions: 0 };
    }
    
    return this.state[id];
  },

  trackActivity() {
    if (!this.state.activity) this.state.activity = {};
    const today = new Date().toISOString().split('T')[0];
    this.state.activity[today] = (this.state.activity[today] || 0) + 1;
    this.save();
    this.renderActivityGraph();
  },

  renderActivityGraph() {
    const container = document.getElementById('streakGraph');
    if (!container) return;
    container.innerHTML = '';
    const days = 40;
    const now = new Date();

    for (let i = days; i >= 0; i--) {
      const d = new Date();
      d.setDate(now.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const count = this.state.activity ? this.state.activity[dateStr] || 0 : 0;

      let colorClass = 'bg-dark-border';
      if (count > 0) colorClass = 'bg-dark-accent/40';
      if (count > 4) colorClass = 'bg-dark-accent/70';
      if (count > 8) colorClass = 'bg-dark-accent';

      const el = document.createElement('div');
      el.className = `w-3 h-3 sm:w-4 sm:h-4 rounded-sm ${colorClass} streak-cell cursor-default`;
      el.title = `${dateStr}: ${count} Aktionen`;
      container.appendChild(el);
    }
  },

  // --- TIMER ---
  updateCountdown() {
    // Ziel: Sommerprüfung 2026 (28. April)
    const target = new Date('2026-04-28T08:00:00');
    const now = new Date();
    const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
    const el = document.getElementById('headerCountdown');
    if (el) el.textContent = diff > 0 ? diff : '0';
  },

  setPomoTime(min) {
    if (this.timerRunning) {
      if (!confirm('Timer läuft. Wirklich abbrechen?')) return;
      clearInterval(this.timer);
      this.timerRunning = false;
      document.getElementById('pomoBtn').innerHTML =
        '<i class="fa-solid fa-play text-lg ml-1"></i>';
    }
    this.timeLeft = min * 60;
    this.updateTimerDisplay();
  },

  updateTimerDisplay() {
    const m = Math.floor(this.timeLeft / 60)
      .toString()
      .padStart(2, '0');
    const s = (this.timeLeft % 60).toString().padStart(2, '0');
    document.getElementById('pomoTimer').textContent = `${m}:${s}`;
    document.title = this.timerRunning ? `${m}:${s} - Focus` : 'AP2 Tracker FISI';
  },

  togglePomodoro() {
    const btn = document.getElementById('pomoBtn');
    if (this.timerRunning) {
      clearInterval(this.timer);
      this.timerRunning = false;
      btn.innerHTML = '<i class="fa-solid fa-play text-lg ml-1"></i>';
      btn.classList.remove('bg-dark-accent', 'text-white', 'scale-105');
      btn.classList.add('bg-dark-border', 'text-dark-muted');
    } else {
      this.timerRunning = true;
      btn.innerHTML = '<i class="fa-solid fa-pause text-lg"></i>';
      btn.classList.add('bg-dark-accent', 'text-white', 'scale-105');
      btn.classList.remove('bg-dark-border', 'text-dark-muted');
      this.timer = setInterval(() => {
        this.timeLeft--;
        if (this.timeLeft <= 0) {
          clearInterval(this.timer);
          this.timerRunning = false;
          this.timeLeft = 1500;

          alert('Pomodoro beendet! Gönn dir eine Pause.');
          btn.innerHTML = '<i class="fa-solid fa-play text-lg ml-1"></i>';
          btn.classList.remove('bg-dark-accent', 'text-white', 'scale-105');
          btn.classList.add('bg-dark-border', 'text-dark-muted');
        }
        this.updateTimerDisplay();
      }, 1000);
    }
  },

  // --- IMPORT / EXPORT ---
  exportData() {
    const dataStr = JSON.stringify(this.state);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute(
      'download',
      'ap2_fisi_backup_' + new Date().toISOString().slice(0, 10) + '.json'
    );
    linkElement.click();
  },

  importData(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        this.state = JSON.parse(e.target.result);
        this.save();
        alert('Backup erfolgreich geladen!');
        location.reload();
      } catch (err) {
        alert('Fehler beim Laden der Datei. Format ungültig.');
      }
    };
    reader.readAsText(file);
  },

  resetData() {
    if (confirm('Wirklich ALLE Daten unwiderruflich löschen?')) {
      localStorage.removeItem('ap2_tracker_state_v1');
      localStorage.removeItem('ap2_infobox_dismissed');
      location.reload();
    }
  },

  // --- INTERACTION ---
  search() {
    this.searchQuery = document.getElementById('searchInput').value.toLowerCase();
    this.applyFilter();
  },

  toggleTopic(id, checked, element) {
    const s = this.getState(id);
    const t = this.findTopic(id);
    s.done = checked;
    s.last = Date.now();

    if (t && t.sub) {
      s.subDone = new Array(t.sub.length).fill(checked);
      const card = element.closest('.topic-card');
      const subs = card.querySelectorAll('.subtask-list input');
      const texts = card.querySelectorAll('.subtask-list span');
      subs.forEach((input) => (input.checked = checked));
      texts.forEach((span) => {
        if (checked) {
          span.classList.add('line-through', 'opacity-50');
          span.classList.remove('group-hover/item:text-white');
        } else {
          span.classList.remove('line-through', 'opacity-50');
          span.classList.add('group-hover/item:text-white');
        }
      });
    }

    const card = element.closest('.topic-card');
    if (checked) card.classList.add('border-dark-accent/30');
    else card.classList.remove('border-dark-accent/30');

    this.trackActivity();
    this.save();

    if (checked) {
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10b981', '#34d399'],
        });
      }
    }
    this.updateStats();
  },

  toggleSub(id, idx, checked, element) {
    const s = this.getState(id);
    const t = this.findTopic(id);
    if (!s.subDone) s.subDone = [];
    s.subDone[idx] = checked;

    const doneCount = s.subDone.filter(Boolean).length;
    const allDone = doneCount === t.sub.length && t.sub.length > 0;

    if (s.done !== allDone) {
      s.done = allDone;
      const card = element.closest('.topic-card');
      const mainCheck = card.querySelector('.topic-check');
      if (mainCheck) {
        mainCheck.checked = allDone;
        if (allDone) {
          card.classList.add('border-dark-accent/30');
          if (typeof confetti === 'function') {
            confetti({
              particleCount: 60,
              spread: 70,
              origin: { y: 0.6 },
              colors: ['#10b981', '#34d399'],
            });
          }
        } else card.classList.remove('border-dark-accent/30');
      }
    }

    const span = element.parentElement.nextElementSibling;
    if (checked) {
      span.classList.add('line-through', 'opacity-50');
      span.classList.remove('group-hover/item:text-white');
    } else {
      span.classList.remove('line-through', 'opacity-50');
      span.classList.add('group-hover/item:text-white');
    }

    s.last = Date.now();
    this.trackActivity();
    this.save();
    this.updateStats();
  },

  randomTopic() {
    const open = [];
    AP2_DATA.forEach((cat) => {
      cat.topics.forEach((t) => {
        if (!this.getState(t.id).done) open.push(t.id);
      });
    });

    if (open.length === 0) {
      alert('Wow! Alles erledigt! Du bist bereit für die AP2.');
      return;
    }
    const randId = open[Math.floor(Math.random() * open.length)];
    this.recId = randId;
    this.scrollToRec();
  },

  toggleAccordion(header) {
    const body = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');
    const topicId = header.closest('.topic-card').dataset.id;

    if (body.classList.contains('open')) {
      body.classList.remove('open');
      icon.style.transform = 'rotate(0deg)';
      icon.classList.remove('bg-dark-accent', 'text-white');
      icon.classList.add('bg-dark-bg/50', 'text-dark-muted');
      this.openTopics.delete(topicId);
    } else {
      body.classList.add('open');
      icon.style.transform = 'rotate(180deg)';
      icon.classList.add('bg-dark-accent', 'text-white');
      icon.classList.remove('bg-dark-bg/50', 'text-dark-muted');
      this.openTopics.add(topicId);
    }
  },

  setRep(id, level, element) {
    const s = this.getState(id);
    let newState = [false, false, false];
    let currentMax = -1;
    if (s.reps[2]) currentMax = 2;
    else if (s.reps[1]) currentMax = 1;
    else if (s.reps[0]) currentMax = 0;

    if (currentMax === level) {
      if (level === 0) newState = [false, false, false];
      else {
        for (let i = 0; i < level; i++) newState[i] = true;
      }
    } else {
      for (let i = 0; i <= level; i++) newState[i] = true;
    }

    s.reps = newState;
    this.save();
    const card = element.closest('.topic-card');
    const checkboxes = card.querySelectorAll('.rep-check');
    checkboxes.forEach((cb, idx) => {
      cb.checked = s.reps[idx];
    });
    this.updateRepHeader(card, s.reps);
  },

  updateRepHeader(card, reps) {
    const count = reps.filter(Boolean).length;
    const badge = card.querySelector('.rep-indicator');
    if (count > 0) {
      badge.textContent = count + 'x Wiederholt';
      badge.classList.remove('hidden');
      if (count === 3)
        badge.classList.add('bg-dark-success/20', 'text-dark-success', 'border-dark-success/30');
      else
        badge.classList.remove('bg-dark-success/20', 'text-dark-success', 'border-dark-success/30');
    } else {
      badge.classList.add('hidden');
    }
  },

  setFilter(f) {
    this.filter = f;
    document.querySelectorAll('.filter-btn').forEach((b) => {
      if (b.dataset.filter === f) {
        b.classList.add('bg-dark-card', 'text-white', 'border-dark-border');
        b.classList.remove('text-dark-muted', 'border-transparent');
      } else {
        b.classList.remove('bg-dark-card', 'text-white', 'border-dark-border');
        b.classList.add('text-dark-muted', 'border-transparent');
      }
    });
    this.applyFilter();
  },

  findTopic(id) {
    for (const c of AP2_DATA) {
      const f = c.topics.find((t) => t.id === id);
      if (f) return f;
    }
    return null;
  },

  scrollToRec() {
    if (!this.recId) return;
    if (this.filter !== 'all') this.setFilter('all');
    setTimeout(() => {
      const el = document.querySelector(`.topic-card[data-id="${this.recId}"]`);
      if (el) {
        const body = el.querySelector('.topic-body');
        const header = el.querySelector('.header-area');
        if (!body.classList.contains('open')) {
          this.toggleAccordion(header);
        }
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-2', 'ring-dark-accent', 'shadow-glow');
        setTimeout(() => el.classList.remove('ring-2', 'ring-dark-accent', 'shadow-glow'), 2000);
      }
    }, 100);
  },

  resetCategory(catId) {
    if (!confirm('Wirklich den Fortschritt dieser Kategorie zurücksetzen?')) return;
    const cat = AP2_DATA.find((c) => c.id === catId);
    if (cat) {
      cat.topics.forEach((t) => {
        if (this.state[t.id]) {
          this.state[t.id].done = false;
          this.state[t.id].subDone = [];
          this.state[t.id].reps = [false, false, false];
        }
      });
      this.save();
      this.buildDOM();
      this.applyFilter();
    }
  },

  // --- LEGAL / MODALS ---
  openLegal(type) {
    const modal = document.getElementById('legalModal');
    const content = document.getElementById('legalContent');
    modal.classList.remove('hidden');

    if (type === 'impressum') {
      content.innerHTML = `
              <h1 class="text-2xl font-bold text-dark-accent mb-6">Impressum</h1>
              <div class="space-y-4 text-dark-text">
                <p><strong>Angaben gemäß § 5 TMG</strong></p>
                <p>
                  Christoph Willam<br />
                  Tocklergasse 14<br />
                  96129 Strullendorf
                </p>
                <h2 class="text-xl font-semibold mt-6 mb-2">Kontakt</h2>
                <p>E-Mail: <a href="mailto:info@cwillam.de" class="text-dark-accent hover:underline">info@cwillam.de</a></p>
                <h2 class="text-xl font-semibold mt-6 mb-2">Berufsbezeichnung</h2>
                <p>Fachinformatiker für Anwendungsentwicklung</p>
                <p class="text-xs text-dark-muted mt-8">Quelle: <a href="https://www.e-recht24.de" target="_blank" class="hover:underline">e-recht24.de</a></p>
              </div>
            `;
    } else {
      content.innerHTML = `
                <h1 class="text-2xl font-bold text-dark-accent mb-6">Datenschutz</h1>
                <div class="space-y-4 text-dark-text text-sm">

                  <h2 class="text-lg font-bold text-white">1. Grundlegendes</h2>
                  <p>Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten innerhalb unseres Online-Angebotes auf.</p>

                  <h2 class="text-lg font-bold text-white mt-4">2. Hosting & Server-Logfiles (IONOS)</h2>
                  <p>Wir hosten diese Website bei <strong>IONOS SE</strong> (Elgendorfer Str. 57, 56410 Montabaur). <br>
                  Der Provider erhebt und speichert automatisch Informationen in so genannten Server-Logfiles, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                  <ul class="list-disc pl-5 text-dark-muted">
                    <li>Browsertyp und Browserversion</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p>Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Erfassung dieser Daten erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Logfiles erfasst werden. Die Daten werden nach 7 Tagen automatisch gelöscht.</p>

                  <h2 class="text-lg font-bold text-white mt-4">3. Lokale Speicherung (LocalStorage)</h2>
                  <p>Diese Anwendung speichert Ihren Lernfortschritt (Status der Checkboxen, Timer-Einstellungen) ausschließlich lokal in Ihrem Browser ("LocalStorage").</p>
                  <p><strong>Rechtsgrundlage:</strong> Die Speicherung ist für die Funktion der Website (Lern-Tracker) <strong>unbedingt erforderlich</strong> (gemäß § 25 Abs. 2 Nr. 2 TTDSG). Ohne diese Speicherung kann der Dienst "Fortschrittskontrolle" nicht erbracht werden. Es findet <strong>kein Tracking</strong>, keine Analyse und keine Weitergabe an Dritte statt. Die Daten verlassen Ihr Endgerät nicht.</p>

                  <h2 class="text-lg font-bold text-white mt-4">4. Externe Dienste</h2>
                  <p>Diese Website arbeitet <strong>autark</strong>. Es werden keine externen CDNs (Content Delivery Networks), keine Google Fonts und keine externen Analysetools (wie Google Analytics) eingesetzt. Alle Skripte und Ressourcen werden vom eigenen Server geladen.</p>

                  <h2 class="text-lg font-bold text-white mt-4">5. Ihre Rechte</h2>
                  <p>Bezüglich der Server-Logs haben Sie das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung. Da die Lerndaten nur auf Ihrem Gerät liegen, haben wir auf diese keinen Zugriff – Sie können diese Daten jederzeit selbst löschen, indem Sie den Browser-Cache leeren oder den "Reset"-Button in der App nutzen.</p>
                </div>
            `;
    }
  },

  closeLegal() {
    document.getElementById('legalModal').classList.add('hidden');
  },

  closeWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    if (modal) {
      modal.classList.add('hidden');
      // Zusätzliche Sicherheit: Pointer Events deaktivieren
      modal.style.display = 'none';
    }
  },

  dismissWelcomeModal() {
    this.closeWelcomeModal();
    localStorage.setItem('ap2_welcome_dismissed_v2', 'true');
  },

  // --- RENDER ---
  updateStats() {
    const all = AP2_DATA.flatMap((c) => c.topics || []);
    const total = all.length;
    if (total === 0) return;

    // Subtask count
    let doneSubtasks = 0;
    let doneTopics = 0;
    all.forEach((t) => {
      const s = this.getState(t.id);
      if (s.done) {
        doneTopics++;
        if (t.sub) doneSubtasks += t.sub.length;
      } else if (s.subDone) {
        doneSubtasks += s.subDone.filter(Boolean).length;
      }
    });

    const totalCards = Object.values(window.ANKI_QUESTIONS || {}).flat().length;
    // Count cards that have a level > 0
    const doneCards = Object.values(this.state.anki || {}).filter(
      (v) => v && v.level > 0
    ).length;

    // Rank Points (FISI v2.1): 
    // - Subtask done: 1pt
    // - Entire Topic done: 5pts bonus
    // - Card learned: 1pt (cap at 350)
    // Goal: ~122 subtasks + (17 * 5) topic bonus + 350 cards = 557 pts. 
    // We set 550 as the target for 100%.
    const totalPoints = doneSubtasks + (doneTopics * 5) + Math.min(350, doneCards);
    const maxPoints = 550;
    
    // Global Progress (Large Bar & Top Percentage)
    const globalPct = Math.min(100, Math.round((totalPoints / maxPoints) * 100));

    const totalTopEl = document.getElementById('totalPercentTop');
    if (totalTopEl) totalTopEl.textContent = globalPct + '%';

    const mainProgress = document.getElementById('mainProgressBar');
    if (mainProgress) mainProgress.style.width = globalPct + '%';

    // UI Dashboard Labels
    const doneCountEl = document.getElementById('doneCount');
    if (doneCountEl) {
        doneCountEl.textContent = doneCards; 
        const labelEl = doneCountEl.nextElementSibling;
        if (labelEl) labelEl.textContent = 'Karten'; 
    }

    const totalCountEl = document.getElementById('totalCount');
    if (totalCountEl) totalCountEl.textContent = totalCards;

    let currentRank = this.ranks[0];
    let nextRank = null;
    let rankPct = 0;

    for (let i = 0; i < this.ranks.length; i++) {
      if (totalPoints >= this.ranks[i].min) {
        currentRank = this.ranks[i];
        nextRank = this.ranks[i + 1] || null;
      }
    }

    const rankNameEl = document.getElementById('levelName');
    if (rankNameEl) {
      rankNameEl.textContent = currentRank.name;
      rankNameEl.style.color = currentRank.color;
    }

    // Rank Progress (Small Bar next to Rank)
    if (nextRank) {
      const range = nextRank.min - currentRank.min;
      const currentInRank = totalPoints - currentRank.min;
      rankPct = Math.min(100, Math.max(0, (currentInRank / range) * 100));
    } else {
      rankPct = 100;
    }

    const rankBar = document.getElementById('levelProgress');
    if (rankBar) {
      rankBar.style.width = rankPct + '%';
      rankBar.style.backgroundColor = currentRank.color;
    }

    let best = null,
      maxScore = -1;
    all.forEach((t) => {
      const s = this.getState(t.id);
      if (!s.done) {
        const score = t.weight * 10 + Math.random() * 5;
        if (score > maxScore) {
          maxScore = score;
          best = t;
        }
      }
    });
    
    const recNameEl = document.getElementById('recName');
    if (recNameEl) recNameEl.textContent = best ? best.title : 'Alles erledigt! 🎉';
  },

  // --- RENDER ENGINE v2.0 ---
  buildDOM() {
    const list = document.getElementById('contentList');
    if (!list) return;
    list.innerHTML = '';
    this.cardMap = {};
    this.catMap = {};

    AP2_DATA.forEach((cat) => {
      const catNode = document.getElementById('tpl-category').content.cloneNode(true);
      const catEl = catNode.querySelector('.category-block');
      
      catEl.querySelector('.cat-title').textContent = cat.name;
      const descEl = catEl.querySelector('.cat-desc');
      if (descEl) descEl.textContent = cat.desc;
      catEl.querySelector('.cat-reset').onclick = () => this.resetCategory(cat.id);

      const iconContainer = catEl.querySelector('.cat-icon');
      if (iconContainer && cat.icon) {
        iconContainer.innerHTML = `<i class="${cat.icon}"></i>`;
      }

      const container = catEl.querySelector('.cat-topics');

      cat.topics.forEach((t) => {
        const s = this.getState(t.id);
        const node = document.getElementById('tpl-topic').content.cloneNode(true);
        const card = node.querySelector('.topic-card');
        card.dataset.id = t.id;

        node.querySelector('.topic-title').textContent = t.title;

        const googleLinks = node.querySelectorAll('.google-link, .google-link-mobile');
        googleLinks.forEach((gl) => {
          gl.href = `https://www.google.com/search?q=Fachinformatiker+AP2+FISI+${encodeURIComponent(t.title)}`;
        });
        
        const duckduckgoLinks = node.querySelectorAll('.duckduckgo-link, .duckduckgo-link-mobile');
        duckduckgoLinks.forEach((dl) => {
          dl.href = `https://www.duckduckgo.com/?q=Fachinformatiker+AP2+FISI+${encodeURIComponent(t.title)}`;
        });

        const wb = node.querySelector('.weight-badge');
        if (t.weight >= 5) {
          wb.textContent = 'KRITISCH';
          wb.classList.add('text-dark-danger', 'border-dark-danger/30', 'bg-dark-danger/10');
        } else if (t.weight === 4) {
          wb.textContent = 'SEHR HOCH';
          wb.classList.add('text-dark-warning', 'border-dark-warning/30', 'bg-dark-warning/10');
        } else if (t.weight === 3) {
          wb.textContent = 'HOCH';
          wb.classList.add('text-dark-accent', 'border-dark-accent/30', 'bg-dark-accent/10');
        } else {
          wb.textContent = 'MITTEL';
          wb.classList.add('text-dark-muted', 'border-dark-border', 'bg-dark-bg');
        }

        const cb = node.querySelector('.topic-check');
        cb.checked = s.done;
        cb.onchange = (e) => this.toggleTopic(t.id, e.target.checked, e.target);

        if (s.done) card.classList.add('border-dark-accent/30');
        node.querySelector('.header-area').onclick = (e) => this.toggleAccordion(e.currentTarget);

        const ul = node.querySelector('.subtask-list');
        t.sub.forEach((sub, idx) => {
          const isDone = s.subDone && s.subDone[idx];
          const li = document.createElement('li');
          li.className = 'flex items-start gap-3 text-xs text-dark-muted group/item transition-all';
          li.innerHTML = `
                  <div class="shrink-0 flex items-center justify-center w-5 h-5 relative">
                      <input type="checkbox" class="peer appearance-none w-4 h-4 rounded border border-dark-border bg-dark-bg checked:bg-dark-accent checked:border-dark-accent cursor-pointer transition-colors" ${isDone ? 'checked' : ''}>
                      <i class="fa-solid fa-check text-[10px] text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"></i>
                  </div>
                  <span class="transition-colors cursor-pointer pt-0.5 ${isDone ? 'line-through opacity-50' : 'group-hover/item:text-white'}">${sub}</span>
                `;
          const subCb = li.querySelector('input');
          subCb.onclick = (e) => e.stopPropagation();
          subCb.onchange = (e) => this.toggleSub(t.id, idx, e.target.checked, e.target);
          li.querySelector('span').onclick = (e) => {
            e.stopPropagation();
            subCb.click();
          };
          ul.appendChild(li);
        });

        const reps = node.querySelectorAll('.rep-check');
        reps.forEach((r, i) => {
          r.checked = s.reps[i];
          r.onchange = (e) => this.setRep(t.id, i, e.target);
        });

        // ANKI Button Logik
        const ankiBtn = node.querySelector('.anki-btn');
        if (ankiBtn) {
          ankiBtn.onclick = (e) => {
            e.stopPropagation();
            this.anki.open(t.id);
          };
        }

        container.appendChild(node);
        this.cardMap[t.id] = card;
        this.updateRepHeader(card, s.reps);
      });

      this.catMap[cat.id] = catEl;
      list.appendChild(catEl);
    });
  },

  applyFilter() {
    let hasVisible = false;
    const activityDates = Object.keys(this.state.activity || {});
    const badge = document.getElementById('streakBadge');
    if (badge) {
        if (activityDates.length > 0) {
            badge.classList.remove('hidden');
            document.getElementById('streakCount').textContent = activityDates.length;
        } else {
            badge.classList.add('hidden');
        }
    }

    AP2_DATA.forEach((cat) => {
      let catVisible = false;
      cat.topics.forEach((t) => {
        const s = this.getState(t.id);
        const card = this.cardMap[t.id];
        
        let matchesSearch = true;
        if (this.searchQuery) {
          matchesSearch = t.title.toLowerCase().includes(this.searchQuery) || 
                          t.sub.some(sub => sub.toLowerCase().includes(this.searchQuery));
        }

        let matchesFilter = true;
        if (this.filter === 'open' && s.done) matchesFilter = false;
        if (this.filter === 'high' && t.weight < 4) matchesFilter = false;

        const visible = matchesSearch && matchesFilter;
        card.style.display = visible ? 'block' : 'none';
        
        if (visible) {
            catVisible = true;
            hasVisible = true;
            
            // Auto-open if searching in subtasks
            const subMatch = this.searchQuery && !t.title.toLowerCase().includes(this.searchQuery) && 
                             t.sub.some(sub => sub.toLowerCase().includes(this.searchQuery));
            
            if (subMatch || this.openTopics.has(t.id)) {
                const body = card.querySelector('.topic-body');
                if (!body.classList.contains('open')) {
                    this.toggleAccordion(card.querySelector('.header-area'));
                }
            }
        }
      });
      this.catMap[cat.id].style.display = catVisible ? 'block' : 'none';
    });

    const emptyState = document.getElementById('emptyState');
    if (emptyState) emptyState.classList.toggle('hidden', hasVisible);
    this.updateStats();
  },
};

document.addEventListener('DOMContentLoaded', () => app.init());
