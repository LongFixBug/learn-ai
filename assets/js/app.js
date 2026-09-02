// ML Learning Hub - Central Application Controller
document.addEventListener("DOMContentLoaded", () => {
  const App = {
    currentLessonId: "lesson-dl-ch1",
    currentTab: "theory",
    completedLessons: JSON.parse(localStorage.getItem("ml_hub_completed") || "[]"),
    theme: localStorage.getItem("ml_hub_theme") || "dark",

    init() {
      this.applyTheme();
      
      // Khởi tạo bài học đầu tiên từ danh sách giáo trình
      if (window.ML_CURRICULUM && window.ML_CURRICULUM.length > 0 && window.ML_CURRICULUM[0].lessons.length > 0) {
        this.currentLessonId = window.ML_CURRICULUM[0].lessons[0].id;
      }

      this.renderSidebar();
      this.loadLesson(this.currentLessonId);
      this.setupEventListeners();
      this.updateProgress();
      this.renderGlossary();
    },

    applyTheme() {
      document.documentElement.setAttribute("data-theme", this.theme);
      const themeIcon = document.getElementById("theme-toggle-icon");
      if (themeIcon) {
        themeIcon.setAttribute("data-lucide", this.theme === "dark" ? "sun" : "moon");
      }
      if (window.lucide) window.lucide.createIcons();
    },

    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
      localStorage.setItem("ml_hub_theme", this.theme);
      this.applyTheme();
    },

    renderSidebar(searchQuery = "") {
      const container = document.getElementById("sidebar-modules");
      if (!container) return;

      const query = searchQuery.toLowerCase().trim();
      let html = "";

      window.ML_CURRICULUM.forEach((module) => {
        const filteredLessons = module.lessons.filter(l => 
          l.title.toLowerCase().includes(query) || 
          l.summary.toLowerCase().includes(query)
        );

        if (query && filteredLessons.length === 0) return;

        html += `
          <div class="mb-4">
            <div class="flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <i data-lucide="${module.icon || 'book'}" class="w-4 h-4 text-blue-400"></i>
              <span>${module.title}</span>
            </div>
            <div class="space-y-1 pl-2">
        `;

        (query ? filteredLessons : module.lessons).forEach((lesson) => {
          const isActive = lesson.id === this.currentLessonId;
          const isCompleted = this.completedLessons.includes(lesson.id);

          html += `
            <button onclick="window.App.loadLesson('${lesson.id}')" 
                    class="w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition flex items-center justify-between gap-2 ${
                      isActive 
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40 font-semibold shadow-sm' 
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }">
              <div class="flex items-center gap-2 truncate">
                <i data-lucide="${isCompleted ? 'check-circle' : 'circle'}" class="w-3.5 h-3.5 flex-shrink-0 ${isCompleted ? 'text-emerald-400' : 'text-slate-500'}"></i>
                <span class="truncate">${lesson.title}</span>
              </div>
            </button>
          `;
        });

        html += `</div></div>`;
      });

      container.innerHTML = html;
      if (window.lucide) window.lucide.createIcons();
    },

    findLesson(lessonId) {
      if (!window.ML_CURRICULUM) return null;
      for (const m of window.ML_CURRICULUM) {
        for (const l of m.lessons) {
          if (l.id === lessonId) return { module: m, lesson: l };
        }
      }
      // Tự động chọn bài đầu tiên nếu không tìm thấy ID cũ
      if (window.ML_CURRICULUM.length > 0 && window.ML_CURRICULUM[0].lessons.length > 0) {
        return { module: window.ML_CURRICULUM[0], lesson: window.ML_CURRICULUM[0].lessons[0] };
      }
      return null;
    },

    loadLesson(lessonId) {
      const data = this.findLesson(lessonId);
      if (!data) return;

      const { module, lesson } = data;
      this.currentLessonId = lesson.id;

      // Cập nhật tiêu đề trang
      const modTitleEl = document.getElementById("current-module-title");
      const lesTitleEl = document.getElementById("current-lesson-title");
      const lesSummEl = document.getElementById("current-lesson-summary");

      if (modTitleEl) modTitleEl.innerText = module.title;
      if (lesTitleEl) lesTitleEl.innerText = lesson.title;
      if (lesSummEl) lesSummEl.innerText = lesson.summary;

      // Cập nhật Nội dung Lý thuyết
      const theoryContentEl = document.getElementById("tab-theory-content");
      if (theoryContentEl) {
        theoryContentEl.innerHTML = lesson.content;
      }

      // Nhúng bộ mô phỏng tương tác phù hợp với bài học
      const visualizerArea = document.getElementById("embedded-visualizer-area");
      if (visualizerArea) {
        visualizerArea.innerHTML = "";
        if (lesson.id === "lesson-dl-ch1" || lesson.id === "lesson-sup-reg") {
          visualizerArea.innerHTML = `<div id="lesson-gd-viz"></div>`;
          window.MLVisualizers.initGradientDescent("lesson-gd-viz");
        } else if (lesson.id === "lesson-dl-ch5" || lesson.id === "lesson-transformer-models") {
          visualizerArea.innerHTML = `<div id="lesson-att-viz"></div>`;
          window.MLVisualizers.initAttentionVisualizer("lesson-att-viz");
        } else if (lesson.id === "lesson-genai-full") {
          visualizerArea.innerHTML = `<div id="lesson-rag-viz"></div>`;
          window.MLVisualizers.initRAGSimulator("lesson-rag-viz");
        }
      }

      // Cập nhật Trình soạn thảo Code Playground
      const codeArea = document.getElementById("code-input");
      if (codeArea) {
        codeArea.value = lesson.starterCode || "# Viết mã Python tại đây";
      }
      const consoleOut = document.getElementById("console-output");
      if (consoleOut) {
        consoleOut.innerHTML = ">>> Sẵn sàng thực thi.";
      }

      // Cập nhật Tab Bài tập & Trắc nghiệm
      this.renderExerciseTab(lesson.id);

      // Kết xuất công thức toán KaTeX
      if (window.renderMathInElement && theoryContentEl) {
        window.renderMathInElement(theoryContentEl, {
          delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false}
          ]
        });
      }

      // Cập nhật sidebar để làm nổi bật bài học đang chọn
      this.renderSidebar();

      // Cuộn lên đầu trang
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    renderExerciseTab(lessonId) {
      const exData = window.ML_EXERCISES ? window.ML_EXERCISES[lessonId] : null;
      const container = document.getElementById("tab-exercise-content");
      if (!container) return;

      if (!exData) {
        container.innerHTML = `
          <div class="text-center py-12 text-slate-400">
            <i data-lucide="award" class="w-12 h-12 mx-auto mb-3 text-slate-600"></i>
            <p>Bài học này đang chuẩn bị thêm câu hỏi trắc nghiệm và thử thách code.</p>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        return;
      }

      let html = `<div class="space-y-8">`;

      // 1. Câu hỏi Trắc nghiệm
      if (exData.quiz) {
        html += `
          <div class="p-6 bg-slate-900/80 border border-slate-800 rounded-xl">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-0.5 bg-blue-900/50 text-blue-300 text-xs font-bold rounded border border-blue-700">Trắc nghiệm</span>
              <h4 class="font-semibold text-slate-100">${exData.quiz.question}</h4>
            </div>
            <div class="space-y-2 mt-4" id="quiz-options-container">
        `;

        exData.quiz.options.forEach((opt, idx) => {
          html += `
            <div class="quiz-option" onclick="window.App.checkQuizAnswer(${idx}, ${exData.quiz.correctIndex}, '${btoa(encodeURIComponent(exData.quiz.explanation))}')">
              <span class="w-6 h-6 rounded-full border border-slate-600 flex items-center justify-center text-xs font-bold">${String.fromCharCode(65 + idx)}</span>
              <span class="text-sm text-slate-300">${opt}</span>
            </div>
          `;
        });

        html += `
            </div>
            <div id="quiz-feedback" class="mt-4 p-4 rounded-lg hidden font-sans text-sm"></div>
          </div>
        `;
      }

      // 2. Thử thách Lập trình
      if (exData.challenge) {
        html += `
          <div class="p-6 bg-slate-900/80 border border-slate-800 rounded-xl space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 bg-emerald-900/50 text-emerald-300 text-xs font-bold rounded border border-emerald-700">Thực hành Code</span>
                <h4 class="font-semibold text-slate-100">${exData.challenge.title}</h4>
              </div>
              <button onclick="window.App.toggleHint()" class="text-xs text-amber-400 hover:underline flex items-center gap-1">
                <i data-lucide="help-circle" class="w-3.5 h-3.5"></i> Xem Gợi ý
              </button>
            </div>
            <p class="text-sm text-slate-300">${exData.challenge.description}</p>
            
            <div id="challenge-hint" class="hidden p-3 bg-amber-950/40 border border-amber-800/60 rounded-lg text-xs text-amber-300">
              💡 <strong>Gợi ý:</strong> ${exData.challenge.hint}
            </div>

            <div class="code-editor-container">
              <div class="bg-slate-950 px-4 py-2 border-b border-slate-800 flex justify-between items-center text-xs text-slate-400">
                <span>Trình soạn thảo bài tập</span>
                <button onclick="window.App.showSolution('${btoa(encodeURIComponent(exData.challenge.solution))}')" class="text-indigo-400 hover:text-indigo-300">Xem Lời giải mẫu</button>
              </div>
              <textarea id="challenge-code-input" class="code-textarea">${exData.challenge.starterCode}</textarea>
            </div>

            <div class="flex items-center justify-between">
              <button onclick="window.App.runChallengeCode()" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-lg flex items-center gap-2 transition">
                <i data-lucide="play" class="w-4 h-4"></i> Kiểm tra & Chạy mã
              </button>
            </div>

            <div class="console-output" id="challenge-console-output">>>> Nhấn 'Kiểm tra & Chạy mã' để xem kết quả đánh giá.</div>
          </div>
        `;
      }

      html += `</div>`;
      container.innerHTML = html;
      if (window.lucide) window.lucide.createIcons();
    },

    checkQuizAnswer(selectedIdx, correctIdx, encodedExpl) {
      const expl = decodeURIComponent(atob(encodedExpl));
      const options = document.querySelectorAll(".quiz-option");
      const feedback = document.getElementById("quiz-feedback");

      options.forEach((opt, idx) => {
        opt.onclick = null;
        if (idx === correctIdx) {
          opt.className = "quiz-option correct";
        } else if (idx === selectedIdx) {
          opt.className = "quiz-option wrong";
        }
      });

      feedback.classList.remove("hidden");
      if (selectedIdx === correctIdx) {
        feedback.className = "mt-4 p-4 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-sm";
        feedback.innerHTML = `<strong>🎉 Chính xác!</strong> ${expl}`;
        this.markLessonComplete(this.currentLessonId);
      } else {
        feedback.className = "mt-4 p-4 rounded-lg bg-rose-950/60 border border-rose-800 text-rose-300 text-sm";
        feedback.innerHTML = `<strong>❌ Chưa chính xác!</strong> ${expl}`;
      }
    },

    toggleHint() {
      const hint = document.getElementById("challenge-hint");
      if (hint) hint.classList.toggle("hidden");
    },

    showSolution(encodedSol) {
      const sol = decodeURIComponent(atob(encodedSol));
      const codeArea = document.getElementById("challenge-code-input");
      if (codeArea) codeArea.value = sol;
    },

    async runChallengeCode() {
      const code = document.getElementById("challenge-code-input").value;
      await window.PythonRunner.runCode(code, "challenge-console-output");
      this.markLessonComplete(this.currentLessonId);
    },

    markLessonComplete(lessonId) {
      if (!this.completedLessons.includes(lessonId)) {
        this.completedLessons.push(lessonId);
        localStorage.setItem("ml_hub_completed", JSON.stringify(this.completedLessons));
        this.updateProgress();
        this.renderSidebar();
      }
    },

    updateProgress() {
      let totalLessons = 0;
      if (window.ML_CURRICULUM) {
        window.ML_CURRICULUM.forEach(m => totalLessons += m.lessons.length);
      }
      const completedCount = this.completedLessons.length;
      const pct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

      const bar = document.getElementById("progress-bar-fill");
      const text = document.getElementById("progress-text");
      if (bar) bar.style.width = `${pct}%`;
      if (text) text.innerText = `${pct}% Hoàn thành (${completedCount}/${totalLessons} bài)`;
    },

    switchTab(tabId) {
      this.currentTab = tabId;
      document.querySelectorAll(".nav-tab").forEach(tab => {
        tab.classList.toggle("active", tab.getAttribute("data-tab") === tabId);
      });

      document.querySelectorAll(".tab-pane").forEach(pane => {
        pane.classList.toggle("hidden", pane.id !== `pane-${tabId}`);
      });

      if (tabId === "sandbox") {
        window.MLVisualizers.initGradientDescent("sandbox-gd-viz");
        window.MLVisualizers.initAttentionVisualizer("sandbox-att-viz");
        window.MLVisualizers.initRAGSimulator("sandbox-rag-viz");
      }
    },

    renderGlossary(searchQuery = "") {
      const container = document.getElementById("glossary-list");
      if (!container || !window.ML_GLOSSARY) return;

      const query = searchQuery.toLowerCase().trim();
      const filtered = window.ML_GLOSSARY.filter(item => 
        item.term.toLowerCase().includes(query) || 
        item.desc.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );

      let html = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">`;
      filtered.forEach(item => {
        html += `
          <div class="p-4 bg-slate-900/90 border border-slate-800 rounded-lg hover:border-blue-500/50 transition">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-blue-400 text-sm">${item.term}</h4>
              <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">${item.category}</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">${item.desc}</p>
          </div>
        `;
      });
      html += `</div>`;
      container.innerHTML = html;
    },

    setupEventListeners() {
      // Tab switching
      document.querySelectorAll(".nav-tab").forEach(tab => {
        tab.onclick = () => this.switchTab(tab.getAttribute("data-tab"));
      });

      // Search lessons
      const searchEl = document.getElementById("sidebar-search");
      if (searchEl) {
        searchEl.oninput = (e) => this.renderSidebar(e.target.value);
      }

      // Search glossary
      const glossSearch = document.getElementById("glossary-search");
      if (glossSearch) {
        glossSearch.oninput = (e) => this.renderGlossary(e.target.value);
      }

      // Theme toggle
      const themeBtn = document.getElementById("theme-toggle-btn");
      if (themeBtn) {
        themeBtn.onclick = () => this.toggleTheme();
      }

      // Run Playground code
      const runCodeBtn = document.getElementById("btn-run-code");
      if (runCodeBtn) {
        runCodeBtn.onclick = async () => {
          const code = document.getElementById("code-input").value;
          await window.PythonRunner.runCode(code, "console-output");
        };
      }

      // Reset progress
      const resetBtn = document.getElementById("btn-reset-progress");
      if (resetBtn) {
        resetBtn.onclick = () => {
          if (confirm("Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ học tập không?")) {
            this.completedLessons = [];
            localStorage.removeItem("ml_hub_completed");
            this.updateProgress();
            this.renderSidebar();
          }
        };
      }

      // Mobile sidebar toggle
      const toggleSidebarBtn = document.getElementById("mobile-sidebar-toggle");
      if (toggleSidebarBtn) {
        toggleSidebarBtn.onclick = () => {
          document.querySelector(".sidebar").classList.toggle("open");
        };
      }
    }
  };

  window.App = App;
  App.init();
});
