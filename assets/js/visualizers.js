// ML Learning Hub - Interactive Visualizers & Simulators (HTML5 Canvas & DOM)

window.MLVisualizers = {
  // 1. Interactive Gradient Descent Simulator
  initGradientDescent(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="visualizer-box">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h4 class="text-lg font-bold text-blue-400 flex items-center gap-2">
            <i data-lucide="trending-down" class="w-5 h-5"></i> Mô phỏng Hạ Gradient & Hồi quy tuyến tính trực quan
          </h4>
          <div class="flex items-center gap-2">
            <button id="gd-btn-step" class="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm rounded-md transition font-medium">1 Bước lặp</button>
            <button id="gd-btn-run" class="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-md transition font-medium">▶ Chạy Tự Động</button>
            <button id="gd-btn-reset" class="px-3 py-1.5 bg-rose-900/60 hover:bg-rose-800 text-rose-200 text-sm rounded-md transition font-medium">Đặt lại</button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2">
            <canvas id="gd-canvas" width="560" height="320" class="visualizer-canvas"></canvas>
          </div>
          <div class="bg-slate-900/80 p-4 rounded-lg border border-slate-800 space-y-4">
            <div>
              <div class="flex justify-between text-xs text-slate-300 mb-1">
                <span>Learning Rate (\\alpha):</span>
                <span id="gd-lr-val" class="text-blue-400 font-bold">0.05</span>
              </div>
              <input type="range" id="gd-lr" min="0.005" max="0.2" step="0.005" value="0.05" class="w-full accent-blue-500 cursor-pointer">
            </div>

            <div class="p-3 bg-slate-950 rounded border border-slate-800 font-mono text-xs space-y-1">
              <div class="text-slate-400">Trọng số w: <span id="gd-w-val" class="text-emerald-400 font-bold">0.00</span></div>
              <div class="text-slate-400">Độ lệch b: <span id="gd-b-val" class="text-indigo-400 font-bold">0.00</span></div>
              <div class="text-slate-400">Sai số MSE: <span id="gd-loss-val" class="text-rose-400 font-bold">0.00</span></div>
              <div class="text-slate-400">Số vòng lặp (Epoch): <span id="gd-epoch-val" class="text-amber-400 font-bold">0</span></div>
            </div>

            <p class="text-xs text-slate-400 leading-relaxed">
              💡 <em>Hãy bấm "Chạy Tự Động" để quan sát đường thẳng màu xanh điều chỉnh độ dốc và tiệm cận dần các điểm dữ liệu màu cam, đồng thời giá trị mất mát MSE giảm dần về mức tối thiểu!</em>
            </p>
          </div>
        </div>
      </div>
    `;

    // Canvas Logic
    const canvas = document.getElementById("gd-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Sample data points (normalized 0..1)
    const points = [
      {x: 0.1, y: 0.22}, {x: 0.2, y: 0.35}, {x: 0.3, y: 0.42},
      {x: 0.4, y: 0.48}, {x: 0.5, y: 0.65}, {x: 0.6, y: 0.68},
      {x: 0.7, y: 0.82}, {x: 0.8, y: 0.88}, {x: 0.9, y: 0.95}
    ];

    let w = 0.1;
    let b = 0.1;
    let epoch = 0;
    let isRunning = false;
    let animId = null;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid lines
      ctx.strokeStyle = "#1e293b";
      ctx.lineWidth = 1;
      for (let i = 40; i < canvas.width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let j = 40; j < canvas.height; j += 40) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(canvas.width, j);
        ctx.stroke();
      }

      // Draw Data points
      points.forEach(p => {
        const cx = p.x * (canvas.width - 60) + 30;
        const cy = canvas.height - (p.y * (canvas.height - 60) + 30);
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fillStyle = "#f59e0b";
        ctx.fill();
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Draw Regression Line: y = w*x + b
      const x1 = 0;
      const y1 = w * x1 + b;
      const x2 = 1.0;
      const y2 = w * x2 + b;

      const px1 = 30;
      const py1 = canvas.height - (y1 * (canvas.height - 60) + 30);
      const px2 = canvas.width - 30;
      const py2 = canvas.height - (y2 * (canvas.height - 60) + 30);

      ctx.beginPath();
      ctx.moveTo(px1, py1);
      ctx.lineTo(px2, py2);
      ctx.strokeStyle = "#3b82f6";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Compute Loss (MSE)
      let totalLoss = 0;
      points.forEach(p => {
        const pred = w * p.x + b;
        totalLoss += Math.pow(p.y - pred, 2);
      });
      const mse = totalLoss / points.length;

      // Update HUD
      document.getElementById("gd-w-val").innerText = w.toFixed(4);
      document.getElementById("gd-b-val").innerText = b.toFixed(4);
      document.getElementById("gd-loss-val").innerText = mse.toFixed(4);
      document.getElementById("gd-epoch-val").innerText = epoch;
    }

    function step() {
      const lr = parseFloat(document.getElementById("gd-lr").value);
      let gradW = 0;
      let gradB = 0;
      const n = points.length;

      points.forEach(p => {
        const pred = w * p.x + b;
        const diff = pred - p.y;
        gradW += (2 / n) * diff * p.x;
        gradB += (2 / n) * diff;
      });

      w -= lr * gradW;
      b -= lr * gradB;
      epoch++;
      draw();
    }

    // Event listeners
    document.getElementById("gd-lr").oninput = (e) => {
      document.getElementById("gd-lr-val").innerText = parseFloat(e.target.value).toFixed(3);
    };

    document.getElementById("gd-btn-step").onclick = () => {
      step();
    };

    const runBtn = document.getElementById("gd-btn-run");
    runBtn.onclick = () => {
      if (!isRunning) {
        isRunning = true;
        runBtn.innerText = "⏸ Tạm dừng";
        runBtn.className = "px-4 py-1.5 bg-amber-600 hover:bg-amber-500 text-white text-sm rounded-md transition font-medium";
        const loop = () => {
          if (isRunning) {
            step();
            animId = requestAnimationFrame(loop);
          }
        };
        loop();
      } else {
        isRunning = false;
        runBtn.innerText = "▶ Tiếp tục";
        runBtn.className = "px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-md transition font-medium";
        cancelAnimationFrame(animId);
      }
    };

    document.getElementById("gd-btn-reset").onclick = () => {
      isRunning = false;
      cancelAnimationFrame(animId);
      runBtn.innerText = "▶ Chạy Tự Động";
      runBtn.className = "px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-md transition font-medium";
      w = 0.1;
      b = 0.1;
      epoch = 0;
      draw();
    };

    draw();
    if (window.lucide) window.lucide.createIcons();
  },

  // 2. Interactive Attention Matrix Heatmap Visualizer
  initAttentionVisualizer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="visualizer-box">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h4 class="text-lg font-bold text-purple-400 flex items-center gap-2">
            <i data-lucide="sparkles" class="w-5 h-5"></i> Trực quan hóa Ma trận Tự chú ý (Self-Attention Heatmap)
          </h4>
          <span class="text-xs px-2.5 py-1 bg-purple-950 text-purple-300 rounded border border-purple-800">Transformer Core</span>
        </div>

        <div class="mb-4">
          <label class="block text-xs font-semibold text-slate-300 mb-1">Nhập câu văn bản (cách nhau bằng dấu cách):</label>
          <div class="flex gap-2">
            <input type="text" id="att-input" value="Học máy và trí tuệ nhân tạo" class="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-500">
            <button id="att-btn-gen" class="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg transition">Tạo ma trận chú ý</button>
          </div>
        </div>

        <div class="overflow-x-auto p-4 bg-slate-950 rounded-lg border border-slate-800 flex justify-center">
          <div id="att-heatmap-grid" class="inline-block"></div>
        </div>
        <p class="text-xs text-slate-400 mt-2">💡 <em>Màu tím càng đậm thể hiện trọng số liên kết ngữ nghĩa giữa 2 từ càng cao (Attention Weight tiệm cận 1.0).</em></p>
      </div>
    `;

    function renderHeatmap() {
      const text = document.getElementById("att-input").value.trim();
      const words = text.split(/\\s+/).filter(w => w.length > 0);
      const grid = document.getElementById("att-heatmap-grid");
      if (!grid || words.length === 0) return;

      const n = words.length;
      // Generate synthetic attention matrix (symmetric with higher diagonal)
      let html = `<table class="border-collapse text-xs text-center font-mono">`;
      html += `<tr><th class="p-2"></th>`;
      words.forEach(w => {
        html += `<th class="p-2 text-purple-300 max-w-[80px] truncate">${w}</th>`;
      });
      html += `</tr>`;

      for (let i = 0; i < n; i++) {
        html += `<tr><th class="p-2 text-purple-300 text-right pr-3">${words[i]}</th>`;
        for (let j = 0; j < n; j++) {
          let score = (i === j) ? 0.65 + Math.random() * 0.25 : Math.random() * 0.45;
          score = Math.min(1.0, Math.max(0.05, score));
          const opacity = score.toFixed(2);
          html += `
            <td class="p-3 border border-slate-800 transition-all hover:scale-110 cursor-pointer" 
                style="background-color: rgba(168, 85, 247, ${opacity}); color: ${score > 0.4 ? '#ffffff' : '#94a3b8'}"
                title="${words[i]} -> ${words[j]}: ${(score * 100).toFixed(1)}%">
              ${(score).toFixed(2)}
            </td>`;
        }
        html += `</tr>`;
      }
      html += `</table>`;
      grid.innerHTML = html;
    }

    document.getElementById("att-btn-gen").onclick = renderHeatmap;
    renderHeatmap();
    if (window.lucide) window.lucide.createIcons();
  },

  // 3. Interactive RAG Flow Simulator
  initRAGSimulator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="visualizer-box">
        <h4 class="text-lg font-bold text-emerald-400 flex items-center gap-2 mb-4">
          <i data-lucide="database" class="w-5 h-5"></i> Mô phỏng Luồng Xử lý RAG (Retrieval-Augmented Generation)
        </h4>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-3 text-center text-xs mb-6">
          <div id="rag-step-1" class="p-3 rounded-lg border border-slate-700 bg-slate-900 transition-all">
            <div class="font-bold text-slate-200 mb-1">1. User Query</div>
            <div class="text-slate-400">Nhận câu hỏi</div>
          </div>
          <div id="rag-step-2" class="p-3 rounded-lg border border-slate-700 bg-slate-900 transition-all">
            <div class="font-bold text-slate-200 mb-1">2. Embedding</div>
            <div class="text-slate-400">Vector hóa câu hỏi</div>
          </div>
          <div id="rag-step-3" class="p-3 rounded-lg border border-slate-700 bg-slate-900 transition-all">
            <div class="font-bold text-slate-200 mb-1">3. Vector Search</div>
            <div class="text-slate-400">Tìm kiếm Top K tương đồng</div>
          </div>
          <div id="rag-step-4" class="p-3 rounded-lg border border-slate-700 bg-slate-900 transition-all">
            <div class="font-bold text-slate-200 mb-1">4. Prompt Context</div>
            <div class="text-slate-400">Ghép tài liệu nguồn</div>
          </div>
          <div id="rag-step-5" class="p-3 rounded-lg border border-slate-700 bg-slate-900 transition-all">
            <div class="font-bold text-slate-200 mb-1">5. LLM Synthesis</div>
            <div class="text-slate-400">Sinh câu trả lời chuẩn</div>
          </div>
        </div>

        <div class="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-3 font-mono text-xs">
          <div class="flex items-center justify-between">
            <span class="text-slate-400">Trạng thái mô phỏng:</span>
            <button id="rag-btn-simulate" class="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-sans font-medium transition">
              Kích hoạt Luồng Truy vấn RAG
            </button>
          </div>
          <div id="rag-output-log" class="p-3 bg-slate-900 rounded border border-slate-800 text-emerald-300 min-h-[90px] whitespace-pre-line">
            Bấm nút 'Kích hoạt Luồng Truy vấn RAG' để theo dõi từng bước truyền tin qua vector database và sinh câu trả lời.
          </div>
        </div>
      </div>
    `;

    document.getElementById("rag-btn-simulate").onclick = async () => {
      const steps = [
        { id: "rag-step-1", log: "[1/5] Người dùng gửi câu hỏi: 'Xe máy đi vào đường cao tốc bị phạt bao nhiêu tiền?'" },
        { id: "rag-step-2", log: "[2/5] Mô hình Embedding chuyển câu hỏi thành Vector 1536 chiều: [0.042, -0.891, 0.312, ...]" },
        { id: "rag-step-3", log: "[3/5] Vector DB quét Cosine Similarity -> Tìm thấy Điều 6 Nghị định 100/2019/NĐ-CP (Độ tương đồng 0.94)" },
        { id: "rag-step-4", log: "[4/5] Hệ thống ghép ngữ cảnh: Prompt = [Ngữ cảnh trích xuất từ Điều 6] + [Câu hỏi người dùng]" },
        { id: "rag-step-5", log: "[5/5] LLM phản hồi chính xác: 'Theo Điều 6 Nghị định 100, mức phạt là từ 2.000.000 đến 3.000.000 VNĐ và tước GPLX 3-5 tháng.'" }
      ];

      const logBox = document.getElementById("rag-output-log");
      logBox.innerText = "Bắt đầu khởi chạy RAG Pipeline...";

      for (let i = 0; i < steps.length; i++) {
        // Reset highlights
        steps.forEach(s => {
          const el = document.getElementById(s.id);
          if (el) {
            el.className = "p-3 rounded-lg border border-slate-700 bg-slate-900 transition-all";
          }
        });

        const activeEl = document.getElementById(steps[i].id);
        if (activeEl) {
          activeEl.className = "p-3 rounded-lg border border-emerald-500 bg-emerald-950/80 shadow-lg shadow-emerald-900/30 text-emerald-300 transition-all scale-105";
        }

        logBox.innerText += "\\n" + steps[i].log;
        await new Promise(r => setTimeout(r, 900));
      }
    };

    if (window.lucide) window.lucide.createIcons();
  }
};
