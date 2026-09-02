# 🚀 ML Learning Hub - Nền tảng Học tập Machine Learning & Generative AI từ A-Z (2026 Roadmap)

**ML Learning Hub** là một nền tảng web học tập tương tác (interactive learning portal) toàn diện, bao quát 100% lộ trình từ **Toán học nền tảng**, **Classical Machine Learning**, **Deep Learning**, **Transformers**, cho tới **Generative AI**, **LLMs**, **RAG Pipeline**, và **AI Agents**.

---

## 🌟 Tính năng Nổi bật

- **📚 7 Module & 18 Bài học Toàn diện**:
  - **Module 1**: Nền tảng Toán học (Đại số tuyến tính, Gradient Descent, Định lý Bayes) & Tiền xử lý dữ liệu (NumPy, Pandas, Matplotlib).
  - **Module 2**: Classical Supervised Learning (Linear/Ridge/Lasso Regression, Logistic Regression, Decision Trees, SVM, k-NN).
  - **Module 3**: Ensemble Learning (Random Forest, XGBoost, LightGBM, CatBoost) & Unsupervised Learning (K-Means, DBSCAN, PCA, t-SNE, Apriori).
  - **Module 4**: Deep Learning & Computer Vision (MLP, Backpropagation, CNN, ResNet, RNN, LSTM, Autoencoders, VAE).
  - **Module 5**: Kỷ nguyên Transformers & Modern NLP (Self-Attention, Multi-Head Attention, BERT, GPT, T5, ViT).
  - **Module 6**: Generative AI, LLMs & Multimodal (LLaMA 3, GPT-4o, Prompt Engineering, RAG Pipeline, Vector DB, LoRA Fine-Tuning, Diffusion Models, AI Agents).
  - **Module 7**: Reinforcement Learning & MLOps Triển khai (Q-Learning, DQN, PPO, RLHF, FastAPI, Docker, Quantization).
- **💻 Trình thực thi Python WebAssembly trực tiếp**: Chạy mã Python cùng thư viện NumPy, Pandas, Scikit-learn ngay trên trình duyệt mà không cần cài đặt môi trường.
- **🎮 Bộ Mô phỏng Trực quan Tương tác (Interactive Simulators)**:
  - *Mô phỏng Hạ Gradient (Gradient Descent)*: Kéo thanh trượt tốc độ học, xem đường hồi quy di chuyển và đường cong hàm mất mát MSE giảm theo thời gian thực.
  - *Mô phỏng Ma trận Tự chú ý (Attention Heatmap)*: Trực quan hóa ma trận trọng số tương quan giữa các từ trong câu văn bản.
  - *Mô phỏng Luồng RAG (RAG Flow Simulator)*: Theo dõi luồng dữ liệu từ câu hỏi qua Vector DB và sinh câu trả lời.
- **📝 Hệ thống Trắc nghiệm & Thử thách Lập trình**: Có chấm điểm tự động, giải thích chi tiết đáp án đúng/sai, gợi ý từng bước và lời giải mẫu.
- **🔍 Từ điển Thuật ngữ A-Z**: Tra cứu nhanh định nghĩa của mọi thuật ngữ chuyên môn.
- **📊 Lưu trữ Tiến độ Học tập**: Tự động lưu tiến độ vào `LocalStorage`.

---

## 🚀 Hướng dẫn Cài đặt & Khởi chạy

### Cách 1: Khởi chạy bằng Python Server (Khuyên dùng)
```bash
# Di chuyển vào thư mục dự án
cd ml_learning_hub

# Khởi chạy máy chủ cục bộ
python3 start_portal.py
```
Trình duyệt sẽ tự động mở tại địa chỉ: `http://localhost:8080`.

### Cách 2: Mở trực tiếp trên Trình duyệt
Bạn chỉ cần nhấp đúp vào tệp `index.html` để mở ngay trên bất kỳ trình duyệt nào (Chrome, Safari, Firefox, Edge).

### Cách 3: Triển khai lên GitHub Pages (Miễn phí)
1. Vào mục **Settings** của repository trên GitHub.
2. Chọn mục **Pages** (ở cột bên trái).
3. Tại phần **Branch**, chọn nhánh `main` và thư mục `/ (root)`, sau đó nhấn **Save**.
4. Trang web của bạn sẽ được kích hoạt tại `https://longfixbug.github.io/learn-ai/`.

---

## 🛠️ Công nghệ Sử dụng

- **Giao diện**: HTML5, Tailwind CSS, Lucide Icons, Glassmorphism UI.
- **Toán học**: KaTeX (kết xuất công thức LaTeX chuẩn toán học tốc độ cao).
- **Python Runtime**: Pyodide (Python 3.12 WebAssembly) hỗ trợ NumPy, Pandas, Scikit-learn.
- **Đồ họa & Mô phỏng**: HTML5 Canvas & Dynamic DOM.

---

## 📄 Bản quyền & Đóng góp
Dự án được xây dựng phục vụ mục đích học tập và nghiên cứu cộng đồng AI / Data Science.
Mọi đóng góp (Pull Requests) đều được chào đón nồng nhiệt!
