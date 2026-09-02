// ML Learning Hub - Complete 1-to-1 Mindmap Curriculum Database (2026 Edition)
window.ML_CURRICULUM = [
  {
    id: "module-1",
    title: "1. Supervised Learning (Học có giám sát)",
    description: "Khám phá trọn bộ các thuật toán Hồi quy (Regression) và Phân loại (Classification).",
    icon: "git-merge",
    lessons: [
      {
        id: "lesson-sup-reg",
        title: "1.1 Regression (Hồi quy): Linear, Polynomial, Ridge & Lasso",
        summary: "Dự đoán biến liên tục và chuẩn hóa chống Overfitting.",
        content: `
          <h3>Các thuật toán Hồi quy trong sơ đồ:</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Hồi quy tuyến tính">Linear Regression (hồi quy tuyến tính - tìm đường thẳng $y = w^T x + b$ tối ưu hóa sai số MSE)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Hồi quy đa thức">Polynomial Regression (hồi quy đa thức - mở rộng đặc trưng phi tuyến dạng bậc $n$ như $x^2, x^3$)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Hồi quy Ridge (L2)">Ridge Regression (chuẩn hóa L2 - thêm hình phạt $\\lambda \\sum w_i^2$ để thu nhỏ trọng số)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Hồi quy Lasso (L1)">Lasso Regression (chuẩn hóa L1 - thêm hình phạt $\\lambda \\sum |w_i|$ có khả năng triệt tiêu trọng số về 0 để chọn đặc trưng)</span></strong>.</li>
          </ul>
        `,
        starterCode: `from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.preprocessing import PolynomialFeatures
import numpy as np

# Tạo dữ liệu mẫu
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([1.5, 4.2, 9.1, 16.2, 25.1]) # Dạng hàm bậc 2: y ~ x^2

# 1. Hồi quy đa thức (Polynomial Regression bậc 2)
poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)

model_poly = LinearRegression()
model_poly.fit(X_poly, y)
print("Dự đoán với Polynomial Regression:", model_poly.predict(poly.transform([[6]])))
`
      },
      {
        id: "lesson-sup-clf",
        title: "1.2 Classification (Phân loại): Logistic, SVM, Decision Trees, k-NN & Naive Bayes",
        summary: "Phân loại nhãn dữ liệu qua các thuật toán cổ điển hàng đầu.",
        content: `
          <h3>Các thuật toán Phân loại trong sơ đồ:</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Hồi quy Logistic">Logistic Regression (phân loại nhị phân dùng hàm Sigmoid tính xác suất)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Máy vector hỗ trợ">SVM - Support Vector Machine (tìm siêu phẳng phân cách với khoảng lề Margin cực đại)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Cây quyết định">Decision Trees (cây quyết định phân nhánh dựa trên độ vẩn đục Gini hoặc Entropi)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="K lân cận">k-NN - k-Nearest Neighbors (phân loại theo đa số của k điểm gần nhất)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Bayes ngây thơ">Naive Bayes (thuật toán xác suất dựa trên giả định các đặc trưng độc lập)</span></strong>.</li>
          </ul>
        `,
        starterCode: `from sklearn.datasets import load_iris
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB

data = load_iris()
X, y = data.data, data.target

# Khởi tạo toàn bộ 5 mô hình phân loại
models = {
    "Logistic Regression": LogisticRegression(max_iter=200),
    "Support Vector Machine (SVM)": SVC(),
    "Decision Tree": DecisionTreeClassifier(),
    "k-NN": KNeighborsClassifier(n_neighbors=3),
    "Naive Bayes": GaussianNB()
}

for name, clf in models.items():
    clf.fit(X, y)
    acc = clf.score(X, y)
    print(f"{name:30}: Độ chính xác {acc*100:.2f}%")
`
      }
    ]
  },
  {
    id: "module-2",
    title: "2. Unsupervised Learning (Học không giám sát)",
    description: "Phân cụm (Clustering), Luật kết hợp (Association Rules) và Giảm chiều dữ liệu (Dimensionality Reduction).",
    icon: "layers",
    lessons: [
      {
        id: "lesson-unsup-clustering",
        title: "2.1 Clustering: K-Means, DBSCAN, Agglomerative, Mean Shift & Fuzzy C-Means",
        summary: "Tự động phân nhóm dữ liệu không nhãn bằng mật độ, khoảng cách và phân cấp.",
        content: `
          <h3>Các thuật toán Phân cụm trong sơ đồ:</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="K-Means">K-Means (phân cụm dựa trên tâm cụm Voronoi)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="DBSCAN">DBSCAN (phân cụm theo mật độ, phát hiện điểm nhiễu ngoại lai)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Agglomerative">Agglomerative (phân cụm phân cấp từ dưới lên tạo thành biểu đồ cây Dendrogram)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Mean Shift">Mean Shift (thuật toán trượt cửa sổ tìm đỉnh mật độ xác suất)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Fuzzy C-Means">Fuzzy C-Means (phân cụm mờ - một điểm có thể thuộc nhiều cụm với mức độ phần trăm khác nhau)</span></strong>.</li>
          </ul>
        `,
        starterCode: `from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering, MeanShift
from sklearn.datasets import make_blobs

X, _ = make_blobs(n_samples=200, centers=3, random_state=42)

# Chạy thử các thuật toán phân cụm
km = KMeans(n_clusters=3, random_state=42).fit(X)
agg = AgglomerativeClustering(n_clusters=3).fit(X)
dbs = DBSCAN(eps=0.8, min_samples=4).fit(X)
ms = MeanShift().fit(X)

print("K-Means Centers:\\n", km.cluster_centers_)
print("Số cụm phát hiện bởi Mean Shift:", len(set(ms.labels_)))
`
      },
      {
        id: "lesson-unsup-dim-rules",
        title: "2.2 Dim Reduction (PCA, t-SNE, UMAP, SVD, LDA) & Association (Apriori, FP-Growth, Eclat)",
        summary: "Nén không gian đặc trưng và khai phá giỏ hàng mua sắm.",
        content: `
          <h3>1. Dimensionality Reduction (Giảm chiều dữ liệu):</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="PCA">PCA (phân tích thành phần chính bảo toàn phương sai)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="t-SNE">t-SNE (giảm chiều phi tuyến bảo toàn cấu trúc lân cận cục bộ)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="UMAP">UMAP (thuật toán giảm chiều hiện đại bảo toàn cả cục bộ và toàn cục)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="SVD">SVD - Singular Value Decomposition (phân rã ma trận suy biến)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="LDA">LDA - Linear Discriminant Analysis (giảm chiều tối đa hóa khoảng cách giữa các lớp)</span></strong>.</li>
          </ul>
          <h3>2. Association Rule Learning (Luật kết hợp):</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Apriori">Apriori (tìm kiếm tập mục phổ biến qua tỉ lệ Support và Confidence)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="FP-Growth">FP-Growth (dùng cây Frequent Pattern Tree nén dữ liệu, nhanh hơn Apriori)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Eclat">Eclat (khai phá tập mục dựa trên giao thoa tập định danh giao dịch)</span></strong>.</li>
          </ul>
        `,
        starterCode: `from sklearn.decomposition import PCA, TruncatedSVD
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis as LDA
from sklearn.datasets import load_iris

data = load_iris()
X, y = data.data, data.target

# So sánh giảm chiều từ 4D về 2D bằng PCA, SVD và LDA
pca_res = PCA(n_components=2).fit_transform(X)
svd_res = TruncatedSVD(n_components=2).fit_transform(X)
lda_res = LDA(n_components=2).fit(X, y).transform(X)

print(f"Kích thước ban đầu: {X.shape} -> Kích thước sau giảm chiều: {pca_res.shape}")
`
      }
    ]
  },
  {
    id: "module-3",
    title: "3. Ensemble Learning (Học kết hợp)",
    description: "Bagging (Random Forest), Boosting (XGBoost, LightGBM, CatBoost, AdaBoost), Stacking & Voting.",
    icon: "layers",
    lessons: [
      {
        id: "lesson-ensemble-all",
        title: "3.1 Toàn cảnh Ensemble: Bagging, Boosting, Stacking & Voting (Hard/Soft)",
        summary: "Kết hợp sức mạnh đa mô hình để đạt độ chính xác đỉnh cao.",
        content: `
          <h3>Các nhánh của Ensemble Learning trong sơ đồ:</h3>
          <ul>
            <li><strong>Bagging</strong>: <code>Random Forest</code> (huấn luyện song song trên tập con lấy mẫu ngẫu nhiên).</li>
            <li><strong>Boosting</strong>: 
              <ul>
                <li><code>XGBoost</code> (tối ưu hóa gradient cấp hai và chuẩn hóa cây).</li>
                <li><code>LightGBM</code> (phân nhánh Leaf-wise tốc độ siêu tốc trên tập dữ liệu lớn).</li>
                <li><code>CatBoost</code> (xử lý tối ưu cho biến phân loại chuỗi Categorical).</li>
                <li><code>AdaBoost</code> (tăng trọng số cho các mẫu dự đoán sai).</li>
              </ul>
            </li>
            <li><strong>Stacking</strong>: Dùng một Meta-model học cách kết hợp đầu ra của các mô hình cơ sở.</li>
            <li><strong>Voting</strong>: <code>Hard Voting</code> (bầu theo đa số phiếu) và <code>Soft Voting</code> (tính trung bình xác suất có trọng số).</li>
          </ul>
        `,
        starterCode: `from sklearn.ensemble import RandomForestClassifier, AdaBoostClassifier, VotingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import make_classification

X, y = make_classification(n_samples=500, random_state=42)

# Voting kết hợp 3 mô hình
clf1 = LogisticRegression()
clf2 = RandomForestClassifier(n_estimators=50)
clf3 = AdaBoostClassifier(n_estimators=50)

eclf_soft = VotingClassifier(estimators=[('lr', clf1), ('rf', clf2), ('ada', clf3)], voting='soft')
eclf_soft.fit(X, y)
print("Voting Ensemble Accuracy:", eclf_soft.score(X, y))
`
      }
    ]
  },
  {
    id: "module-4",
    title: "4. Semi-Supervised, Self-Supervised & Transfer Learning",
    description: "Self-Training, Co-Training, Contrastive Learning, Masked Language Modeling, BYOL, Fine-Tuning.",
    icon: "cpu",
    lessons: [
      {
        id: "lesson-semi-self-transfer",
        title: "4.1 Semi-Supervised, Self-Supervised (BYOL, Contrastive) & Transfer Learning",
        summary: "Học từ dữ liệu tự gắn nhãn, học biểu diễn tương phản và chuyển giao tri thức.",
        content: `
          <h3>1. Semi-Supervised Learning (Học bán giám sát):</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Self-Training">Self-Training (mô hình tự gán nhãn giả Pseudo-label cho dữ liệu chưa nhãn rồi huấn luyện lại)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Co-Training">Co-Training (hai mô hình học trên 2 góc nhìn đặc trưng khác nhau và dạy lẫn nhau)</span></strong>.</li>
          </ul>

          <h3>2. Self-Supervised Learning (Học tự giám sát):</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Học tương phản">Contrastive Learning (SimCLR / MoCo - kéo các biểu diễn của cùng 1 ảnh biến thể lại gần nhau)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Mô hình ngôn ngữ bị ẩn">Masked Language Modeling (ẩn từ ngẫu nhiên trong câu để mô hình đoán lại - như BERT)</span></strong>.</li>
            <li><strong>Generative Pretext Tasks</strong>: Đặt ra các nhiệm vụ phụ tự sinh để học đặc trưng biểu diễn.</li>
            <li><strong><span class="term-highlight" data-tooltip="BYOL">BYOL - Bootstrap Your Own Latent (học biểu diễn tự giám sát không cần mẫu âm Negative Samples)</span></strong>.</li>
          </ul>

          <h3>3. Transfer Learning (Học chuyển giao):</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Fine-Tuning">Fine-Tuning (tinh chỉnh toàn bộ hoặc một phần trọng số trên tập dữ liệu đích)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Feature Extraction">Feature Extraction (đóng băng mô hình gốc, chỉ lấy vector embedding làm đầu vào cho bộ phân loại mới)</span></strong>.</li>
          </ul>
        `,
        starterCode: `# Minh họa kỹ thuật Feature Extraction trong Transfer Learning
import numpy as np

# Giả lập một mô hình Pre-trained Backbone trích xuất vector đặc trưng 512 chiều
def pretrained_backbone_extract(image_dummy):
    return np.random.randn(512)

# Trích xuất vector biểu diễn (Embedding)
features = pretrained_backbone_extract("sample_image.png")
print("Vector đặc trưng 512 chiều từ Backbone:", features[:5], "...")
`
      }
    ]
  },
  {
    id: "module-5",
    title: "5. Deep Learning (Học sâu toàn cảnh)",
    description: "FNN (MLP), CNN (ResNet, EfficientNet), RNN (LSTM, GRU, BiLSTM), GNN (GCN, GraphSAGE, GAT), Autoencoders & VAE.",
    icon: "cpu",
    lessons: [
      {
        id: "lesson-dl-vision-nlp-gnn",
        title: "5.1 Deep Learning Architectures: FNN, CNN, RNN, GNN & Autoencoders",
        summary: "Toàn bộ các kiến trúc nơ-ron nền tảng cho ảnh, chuỗi, đồ thị và nén biểu diễn.",
        content: `
          <h3>Mạng nơ-ron chuyên sâu trong sơ đồ:</h3>
          <ul>
            <li><strong>FNN</strong>: <code>MLP</code> (Multilayer Perceptron - nơ-ron truyền thẳng).</li>
            <li><strong>CNN</strong>: <code>ResNet</code> (kết nối tắt Residual), <code>EfficientNet</code> (tối ưu hóa quy mô đồng thời), <code>Vision Transformers (ViT)</code>.</li>
            <li><strong>RNN</strong>: <code>LSTM</code> (bộ nhớ dài ngắn hạn), <code>GRU</code> (cổng đóng mở tinh gọn), <code>BiLSTM</code> (xử lý 2 chiều thời gian).</li>
            <li><strong>GNN (Graph Neural Networks - Mạng nơ-ron đồ thị)</strong>:
              <ul>
                <li><code>GCN (Graph Convolutional Networks - tích chập trên ma trận kề đồ thị)</code>.</li>
                <li><code>GraphSAGE (lấy mẫu và tổng hợp thông tin từ các nút lân cận)</code>.</li>
                <li><code>GAT (Graph Attention Networks - cơ chế chú ý giữa các nút đồ thị)</code>.</li>
              </ul>
            </li>
            <li><strong>Autoencoders & Representation Learning</strong>: <code>Autoencoders</code> chuẩn, <code>Variational Autoencoders (VAE)</code> và <code>Contrastive Learning</code>.</li>
          </ul>
        `,
        starterCode: `# Cấu trúc một mạng BiLSTM (LSTM 2 chiều) giả lập với PyTorch skeleton
code_bilstm = """
import torch
import torch.nn as nn

class BiLSTMClassifier(nn.Module):
    def __init__(self, vocab_size, embed_dim, hidden_dim, num_classes):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embed_dim)
        self.lstm = nn.LSTM(embed_dim, hidden_dim, bidirectional=True, batch_first=True)
        self.fc = nn.Linear(hidden_dim * 2, num_classes) # *2 vì có 2 chiều xuôi và ngược

    def forward(self, x):
        emb = self.embedding(x)
        out, (hn, cn) = self.lstm(emb)
        # Nối vector trạng thái ẩn cuối cùng của 2 chiều
        hidden_cat = torch.cat((hn[-2,:,:], hn[-1,:,:]), dim=1)
        return self.fc(hidden_cat)
"""
print(code_bilstm)
`
      }
    ]
  },
  {
    id: "module-6",
    title: "6. Transformers (BERT, GPT, T5, LLaMA, ViT)",
    description: "Khám phá các mô hình Transformer định hình AI hiện đại.",
    icon: "sparkles",
    lessons: [
      {
        id: "lesson-transformer-models",
        title: "6.1 Hệ sinh thái Transformer: BERT, GPT, T5, LLaMA & Vision Transformer (ViT)",
        summary: "So sánh cơ chế Encoder-only, Decoder-only và ứng dụng Transformer lên ảnh.",
        content: `
          <h3>Các mô hình Transformer tiêu biểu trong sơ đồ:</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="BERT">BERT (Encoder-only - hiểu ngữ cảnh 2 chiều, tối ưu cho phân loại & trích xuất)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="GPT">GPT (Decoder-only - sinh văn bản tự hồi quy từ trái sang phải)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="T5">T5 (Encoder-Decoder - quy đổi mọi bài toán thành Text-to-Text)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="LLaMA">LLaMA (kiến trúc mã nguồn mở đỉnh cao với RoPE, SwiGLU và RMSNorm)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="ViT">ViT - Vision Transformer (áp dụng Transformer trực tiếp lên các mảnh ảnh Patch)</span></strong>.</li>
          </ul>
        `,
        starterCode: `print("Bảng so sánh các kiến trúc Transformer:")
print("- BERT:  Encoder-only   | Masked LM        | Phân loại văn bản, NER, Sentiment")
print("- GPT:   Decoder-only   | Causal LM        | Sinh nội dung, Chatbot, Viết code")
print("- T5:    Encoder-Decoder| Text-to-Text     | Dịch máy, Tóm tắt văn bản")
print("- LLaMA: Decoder-only   | Open Weights     | Nền tảng xây dựng LLMs cục bộ")
print("- ViT:   Patch-Encoder  | Visual Tokens    | Phân loại ảnh, Nhận diện vật thể")
`
      }
    ]
  },
  {
    id: "module-7",
    title: "7. Generative AI (AI Tạo sinh - Tâm điểm 2026)",
    description: "LLMs, Diffusion Models, GANs và Multimodal Models.",
    icon: "bot",
    lessons: [
      {
        id: "lesson-genai-full",
        title: "7.1 Toàn bộ 4 nhánh GenAI: LLMs, Diffusion, GANs & Multimodal Models",
        summary: "Khám phá GPT-4o, Claude 3, LLaMA 3, Stable Diffusion 3, GANs và GPT-4V/LLaVA.",
        content: `
          <h3>4 Trụ cột Generative AI trong sơ đồ 2026:</h3>
          <ol class="list-decimal pl-5 space-y-3">
            <li><strong>Large Language Models (LLMs)</strong>:
              <code>GPT-4/4o</code>, <code>Claude 3 (Opus/Sonnet)</code>, <code>LLaMA 3</code>, <code>Gemini 1.5 (Pro/Flash)</code>, <code>Mistral Large</code>.
            </li>
            <li><strong>Diffusion Models (Tạo ảnh & Video)</strong>:
              <code>Stable Diffusion 3</code>, <code>DALL-E 3</code>, <code>Imagen 3</code>, <code>Midjourney</code>.
            </li>
            <li><strong>Generative Adversarial Networks (GANs)</strong>:
              <code>StyleGAN3</code> (sinh ảnh chân dung siêu thực), <code>CycleGAN</code> (chuyển đổi phong cách tranh), <code>Pix2Pix</code> (biến đổi bản vẽ phác thảo thành ảnh thật), <code>BigGAN</code>.
            </li>
            <li><strong>Multimodal Models (Đa phương thức)</strong>:
              <code>GPT-4V / GPT-4o</code>, <code>Gemini 1.5 Pro</code>, <code>LLaVA (Large Language and Vision Assistant)</code>, <code>Qwen-VL</code>.
            </li>
          </ol>
        `,
        starterCode: `# Tổng hợp các mô hình Generative AI hàng đầu 2026
genai_models = {
    "LLM (Văn bản & Suy luận)": ["GPT-4o", "Claude 3.5 Sonnet", "LLaMA 3", "Gemini 1.5 Pro", "Mistral Large"],
    "Diffusion (Hình ảnh)": ["Stable Diffusion 3", "Midjourney v6", "DALL-E 3", "Imagen 3"],
    "GANs (Chuyển đổi hình ảnh)": ["StyleGAN3", "CycleGAN", "Pix2Pix", "BigGAN"],
    "Multimodal (Hiểu văn bản + ảnh + âm thanh)": ["GPT-4V", "Gemini 1.5 Pro", "LLaVA-1.6", "Qwen-VL-Max"]
}

for cat, models in genai_models.items():
    print(f"[{cat}]")
    for m in models:
        print(f"  ✓ {m}")
`
      }
    ]
  },
  {
    id: "module-8",
    title: "8. Reinforcement Learning (Học tăng cường)",
    description: "Q-Learning, Deep Q-Network (DQN), SARSA, Policy Gradient & Actor-Critic (A2C, PPO, DDPG).",
    icon: "rocket",
    lessons: [
      {
        id: "lesson-rl-full",
        title: "8.1 Toàn cảnh Reinforcement Learning: Value-based, Policy-based & Actor-Critic",
        summary: "Q-Learning, SARSA, DQN, Policy Gradient và thuật toán PPO / DDPG.",
        content: `
          <h3>Các thuật toán RL trong sơ đồ:</h3>
          <ul>
            <li><strong>Value-Based (Dựa trên hàm giá trị)</strong>:
              <ul>
                <li><code>Q-Learning</code> (thuật toán Off-policy cập nhật bảng Q-table).</li>
                <li><code>SARSA</code> (thuật toán On-policy: State-Action-Reward-State-Action).</li>
                <li><code>Deep Q-Network (DQN)</code> (dùng mạng nơ-ron xấp xỉ hàm giá trị Q kèm Experience Replay).</li>
              </ul>
            </li>
            <li><strong>Policy-Based (Dựa trên hàm chính sách)</strong>:
              <ul>
                <li><code>Policy Gradient (REINFORCE)</code> (tối ưu trực tiếp xác suất chọn hành động qua đạo hàm chính sách).</li>
              </ul>
            </li>
            <li><strong>Actor-Critic (Kết hợp Diễn viên - Nhà phê bình)</strong>:
              <ul>
                <li><code>A2C (Advantage Actor-Critic)</code>.</li>
                <li><code>PPO (Proximal Policy Optimization - thuật toán cốt lõi căn chỉnh RLHF cho ChatGPT)</code>.</li>
                <li><code>DDPG (Deep Deterministic Policy Gradient - cho không gian hành động liên tục)</code>.</li>
              </ul>
            </li>
          </ul>
        `,
        starterCode: `# Minh họa cấu trúc Actor-Critic
print("Kiến trúc Actor-Critic:")
print("- Actor (Diễn viên): pi(a|s; theta) -> Quyết định chọn hành động tối ưu")
print("- Critic (Nhà phê bình): V(s; w)    -> Đánh giá xem trạng thái đó tốt hay xấu")
print("- Advantage: A(s, a) = Q(s, a) - V(s) -> Mức độ vượt trội của hành động được chọn")
`
      }
    ]
  },
  {
    id: "module-9",
    title: "9. Probabilistic Graphical Models (Mô hình đồ thị xác suất)",
    description: "Bayesian Networks, Markov Random Fields (MRF) và Hidden Markov Models (HMM).",
    icon: "help-circle",
    lessons: [
      {
        id: "lesson-pgm-full",
        title: "9.1 Probabilistic Graphical Models: Bayesian Networks, MRF & HMM",
        summary: "Mô hình hóa quan hệ phụ thuộc xác suất có hướng và vô hướng.",
        content: `
          <h3>3 Mô hình đồ thị xác suất trong sơ đồ:</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Mạng Bayes">Bayesian Networks (đồ thị có hướng không chu trình DAG biểu diễn quan hệ nhân quả và xác suất có điều kiện giữa các biến ngẫu nhiên)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Trường ngẫu nhiên Markov">Markov Random Fields - MRF (đồ thị vô hướng mô hình hóa quan hệ phụ thuộc không gian đối xứng, thường dùng trong xử lý phân đoạn ảnh)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Mô hình Markov ẩn">Hidden Markov Models - HMM (mô hình chuỗi xác suất với các trạng thái ẩn sinh ra chuỗi quan sát thấy được qua thuật toán Viterbi)</span></strong>.</li>
          </ul>
        `,
        starterCode: `# Minh họa thuật toán Viterbi tìm đường đi trạng thái ẩn tối ưu trong HMM
print("Hidden Markov Model (HMM) 3 bài toán kinh điển:")
print("1. Evaluation: Thuật toán Forward-Backward tính xác suất chuỗi quan sát P(O|lambda)")
print("2. Decoding: Thuật toán Viterbi tìm chuỗi trạng thái ẩn tốt nhất Q*")
print("3. Learning: Thuật toán Baum-Welch (EM) học ma trận chuyển trạng thái A và phát xạ B")
`
      }
    ]
  }
];
