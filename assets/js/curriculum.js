// ML Learning Hub - Comprehensive Curriculum Database (2026 Edition)
window.ML_CURRICULUM = [
  {
    id: "module-1",
    title: "Module 1: Nền tảng Toán học & Khoa học Dữ liệu",
    description: "Nắm vững Đại số tuyến tính, Giải tích vi phân, Xác suất thống kê và công cụ NumPy, Pandas, Matplotlib.",
    icon: "calculator",
    lessons: [
      {
        id: "lesson-1",
        title: "Bài 1: Toán học nền tảng cho Machine Learning",
        summary: "Khám phá Vector, Ma trận, Đạo hàm riêng, Hạ Gradient và Định lý Bayes.",
        content: `
          <h3>1. Đại số tuyến tính (Linear Algebra)</h3>
          <p>Trong <span class="term-highlight" data-tooltip="Học máy">Machine Learning (ngành khoa học giúp máy tính tự học từ dữ liệu)</span>, mọi đối tượng dữ liệu đều được chuyển đổi thành các con số:</p>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Vector đặc trưng">Vector (mảng 1 chiều biểu diễn tập hợp các đặc trưng của một đối tượng dữ liệu)</span></strong>: Ví dụ một ngôi nhà có thể biểu diễn qua vector $x = [\\text{diện tích}, \\text{số phòng}, \\text{khoảng cách}]$.</li>
            <li><strong><span class="term-highlight" data-tooltip="Ma trận dữ liệu">Matrix (ma trận - bảng số 2 chiều chứa nhiều hàng dữ liệu và các cột đặc trưng)</span></strong>: Ký hiệu $X \\in \\mathbb{R}^{m \\times n}$ với $m$ là số mẫu và $n$ là số đặc trưng.</li>
            <li><strong>Tích vô hướng (Dot Product)</strong>: Phép tính cốt lõi để tính toán tổng trọng số trong nơ-ron: $w^T x = \\sum_{i=1}^n w_i x_i$.</li>
          </ul>

          <div class="my-4 p-4 rounded-lg bg-slate-900 border border-slate-700">
            <h4 class="text-blue-400 font-semibold mb-2">Công thức tích vô hướng & Tuyến tính</h4>
            $$y = w_1 x_1 + w_2 x_2 + \\dots + w_n x_n + b = w^T x + b$$
            <p class="text-sm text-slate-400 mt-2">Trong đó $w$ là <strong>trọng số (weights - mức độ quan trọng của đặc trưng)</strong> và $b$ là <strong>độ lệch (bias - giá trị ngưỡng dịch chuyển đường dự báo)</strong>.</p>
          </div>

          <h3>2. Giải tích vi phân & Thuật toán Hạ Gradient (Gradient Descent)</h3>
          <p>Để tìm trọng số $w$ sao cho hàm sai số nhỏ nhất, ta sử dụng đạo hàm để biết hướng điều chỉnh:</p>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Đạo hàm">Derivative (đạo hàm - tỷ lệ thay đổi tức thời của hàm số)</span></strong>: Cho biết độ dốc của hàm mục tiêu.</li>
            <li><strong><span class="term-highlight" data-tooltip="Hạ Gradient">Gradient Descent (thuật toán hạ gradient - phương pháp lặp lùi dần về điểm cực tiểu bằng cách đi ngược hướng dốc)</span></strong>.</li>
          </ul>
          
          <div class="my-4 p-4 rounded-lg bg-slate-900 border border-slate-700">
            <h4 class="text-emerald-400 font-semibold mb-2">Quy tắc cập nhật trọng số</h4>
            $$w_{mới} = w_{cũ} - \\alpha \\cdot \\frac{\\partial L}{\\partial w}$$
            <p class="text-sm text-slate-400 mt-2">Trong đó $\\alpha$ là <strong><span class="term-highlight" data-tooltip="Tốc độ học">Learning Rate (tốc độ học - độ lớn của bước nhảy sau mỗi lần cập nhật tham số)</span></strong>, và $\\frac{\\partial L}{\\partial w}$ là gradient của hàm mất mát theo trọng số.</p>
          </div>

          <h3>3. Xác suất & Định lý Bayes (Bayes' Theorem)</h3>
          <p>Xác suất cho phép mô hình ước lượng độ tin cậy của các dự đoán. Định lý Bayes là trái tim của các thuật toán phân loại xác suất:</p>
          $$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$$
          <p class="text-sm text-slate-300">Nghĩa là: Xác suất hậu nghiệm $P(A|B)$ bằng xác suất tiền nghiệm $P(A)$ nhân với độ hợp lý $P(B|A)$, chia cho xác suất của bằng chứng $P(B)$.</p>
        `,
        starterCode: `# 1. Tính toán ma trận và đạo hàm cơ bản với NumPy
import numpy as np

# Khởi tạo vector đặc trưng x và vector trọng số w
x = np.array([50.0, 2.0, 1.5])  # [Diện tích (m2), Số phòng, Khoảng cách (km)]
w = np.array([20.0, 50.0, -10.0]) # Trọng số ước tính
b = 100.0                       # Bias (giá khởi điểm)

# Tính toán giá nhà dự báo y = w^T * x + b
price_predicted = np.dot(w, x) + b
print(f"Giá nhà dự báo: {price_predicted:.2f} triệu VNĐ")

# Tính toán Gradient giả lập
actual_price = 1100.0 # Giá thực tế
error = price_predicted - actual_price
gradient_w = 2 * error * x
alpha = 0.0001 # Learning rate

# Cập nhật trọng số mới
w_new = w - alpha * gradient_w
print("Trọng số w mới sau 1 bước cập nhật:", w_new)
`
      },
      {
        id: "lesson-2",
        title: "Bài 2: Xử lý và Khám phá Dữ liệu (EDA) với Pandas & NumPy",
        summary: "Quy trình làm sạch dữ liệu, xử lý giá trị khuyết, mã hóa đặc trưng và trực quan hóa.",
        content: `
          <h3>1. Khám phá Dữ liệu Khám phá (EDA - Exploratory Data Analysis)</h3>
          <p><span class="term-highlight" data-tooltip="Phân tích dữ liệu khám phá">EDA (quá trình khảo sát trực quan và thống kê để hiểu đặc tính ban đầu của tập dữ liệu)</span> là bước bắt buộc trước khi đưa dữ liệu vào bất kỳ mô hình nào.</p>
          
          <h3>2. Các kỹ thuật tiền xử lý cốt lõi</h3>
          <ul>
            <li><strong>Xử lý <span class="term-highlight" data-tooltip="Giá trị khuyết">Missing Values (các ô dữ liệu bị rỗng hoặc thiếu thông tin)</span></strong>: Có thể loại bỏ hoặc điền giá trị trung bình (mean), trung vị (median) hoặc mode (giá trị xuất hiện nhiều nhất).</li>
            <li><strong><span class="term-highlight" data-tooltip="Chuẩn hóa dữ liệu">Feature Scaling (chuẩn hóa đặc trưng - đưa các cột dữ liệu về cùng một thang đo)</span></strong>:
              <ul>
                <li><strong>Min-Max Normalization</strong>: Đưa dữ liệu về đoạn $[0, 1]$: $x_{norm} = \\frac{x - x_{min}}{x_{max} - x_{min}}$.</li>
                <li><strong>Standardization (Z-Score)</strong>: Đưa dữ liệu về phân phối có trung bình bằng 0 và phương sai bằng 1: $z = \\frac{x - \\mu}{\\sigma}$.</li>
              </ul>
            </li>
            <li><strong><span class="term-highlight" data-tooltip="Mã hóa biến phân loại">One-Hot Encoding (phương pháp chuyển đổi các nhãn dạng chữ thành các cột nhị phân 0 và 1)</span></strong>.</li>
          </ul>
        `,
        starterCode: `import pandas as pd
import numpy as np

# Tạo bảng dữ liệu mẫu về xe hơi
data = {
    'Brand': ['Toyota', 'Honda', 'Toyota', 'Ford', 'Honda'],
    'Engine_Size': [1.5, 2.0, np.nan, 2.5, 1.8], # Có 1 ô NaN bị khuyết
    'Mileage_KM': [50000, 30000, 45000, 80000, 20000],
    'Price_USD': [15000, 18000, 14000, 12000, 19000]
}

df = pd.DataFrame(data)
print("=== Dữ liệu gốc ===")
print(df)

# 1. Điền giá trị khuyết bằng trung bình cột
df['Engine_Size'] = df['Engine_Size'].fillna(df['Engine_Size'].mean())

# 2. Mã hóa One-Hot cho cột Brand
df_encoded = pd.get_dummies(df, columns=['Brand'], drop_first=False)

print("\\n=== Dữ liệu sau khi xử lý và mã hóa One-Hot ===")
print(df_encoded)
`
      }
    ]
  },
  {
    id: "module-2",
    title: "Module 2: Supervised Learning (Học có giám sát)",
    description: "Làm chủ Hồi quy (Linear, Polynomial, Ridge, Lasso) và Phân loại (Logistic, Decision Tree, Random Forest, XGBoost, SVM).",
    icon: "git-merge",
    lessons: [
      {
        id: "lesson-3",
        title: "Bài 3: Bài toán Hồi quy (Linear, Polynomial, Ridge, Lasso Regression)",
        summary: "Dự đoán giá trị số liên tục và các kỹ thuật chuẩn hóa chống Overfitting.",
        content: `
          <h3>1. Hồi quy tuyến tính (Linear Regression)</h3>
          <p><span class="term-highlight" data-tooltip="Hồi quy tuyến tính">Linear Regression (mô hình tìm mối quan hệ tuyến tính giữa biến đầu vào $X$ và biến mục tiêu $y$)</span> tối thiểu hóa <span class="term-highlight" data-tooltip="Sai số bình phương trung bình">MSE - Mean Squared Error (hàm mất mát đo trung bình bình phương khoảng cách giữa giá trị dự đoán và giá trị thực tế)</span>:</p>
          $$MSE = \\frac{1}{N} \\sum_{i=1}^N (y_i - \\hat{y}_i)^2$$

          <h3>2. Hiện tượng Overfitting & Kỹ thuật Chuẩn hóa (Regularization)</h3>
          <p>Khi mô hình quá phức tạp, nó sẽ ghi nhớ cả nhiễu của dữ liệu huấn luyện, dẫn đến <span class="term-highlight" data-tooltip="Quá khớp / Học vẹt">Overfitting (hiện tượng mô hình đạt điểm tối đa trên tập train nhưng dự đoán rất kém trên tập test)</span>.</p>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Hồi quy Ridge">Ridge Regression (L2 Regularization - thêm hình phạt tổng bình phương trọng số $\\lambda \\sum w_j^2$ để thu nhỏ trọng số lại gần 0)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Hồi quy Lasso">Lasso Regression (L1 Regularization - thêm hình phạt tổng trị tuyệt đối trọng số $\\lambda \\sum |w_j|$ có khả năng triệt tiêu trọng số về đúng 0 để chọn lọc đặc trưng)</span></strong>.</li>
          </ul>
        `,
        starterCode: `from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

# Tạo dữ liệu giả lập có nhiễu
np.random.seed(42)
X = np.random.rand(100, 3) * 10
y = 2.5 * X[:, 0] + 1.2 * X[:, 1] - 3.0 * X[:, 2] + 5 + np.random.randn(100) * 2

# Phân chia tập train/test (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Huấn luyện mô hình Linear Regression
lr = LinearRegression()
lr.fit(X_train, y_train)

# Huấn luyện mô hình Ridge Regression (L2)
ridge = Ridge(alpha=1.0)
ridge.fit(X_train, y_train)

# Đánh giá trên tập test
pred_lr = lr.predict(X_test)
pred_ridge = ridge.predict(X_test)

print(f"Linear Regression R2 Score: {r2_score(y_test, pred_lr):.4f}")
print(f"Ridge Regression R2 Score:  {r2_score(y_test, pred_ridge):.4f}")
print("Trọng số học được (Linear):", lr.coef_)
`
      },
      {
        id: "lesson-4",
        title: "Bài 4: Phân loại cơ bản (Logistic Regression, Decision Trees, SVM, k-NN)",
        summary: "Phân loại nhị phân và đa lớp, ma trận nhầm lẫn (Confusion Matrix), Precision, Recall và F1-Score.",
        content: `
          <h3>1. Hồi quy Logistic (Logistic Regression)</h3>
          <p>Mặc dù có tên là hồi quy, <span class="term-highlight" data-tooltip="Hồi quy Logistic">Logistic Regression (thuật toán phân loại nhị phân sử dụng hàm Sigmoid để nén đầu ra về khoảng xác suất từ 0 đến 1)</span>:</p>
          $$\\sigma(z) = \\frac{1}{1 + e^{-z}}$$
          <p>Nếu $\\sigma(z) \\ge 0.5$, dự đoán nhãn là 1; ngược lại là 0.</p>

          <h3>2. Cây quyết định & SVM</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Cây quyết định">Decision Trees (mô hình phân nhánh dạng cây chia dữ liệu dựa trên chỉ số Gini Impurity hoặc Information Gain để tìm điều kiện phân tách tốt nhất)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Máy vector hỗ trợ">SVM - Support Vector Machine (thuật toán tìm siêu phẳng phân cách sao cho khoảng cách lề Margin giữa hai lớp là lớn nhất)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="K láng giềng gần nhất">k-NN - k-Nearest Neighbors (thuật toán phân loại lười biếng - gán nhãn cho điểm mới dựa trên đa số nhãn của k điểm lân cận gần nhất)</span></strong>.</li>
          </ul>

          <h3>3. Bộ chỉ số đánh giá phân loại</h3>
          <table class="w-full text-left text-sm text-slate-300 my-4 border border-slate-700">
            <thead class="bg-slate-800 text-slate-100">
              <tr>
                <th class="p-2 border border-slate-700">Chỉ số</th>
                <th class="p-2 border border-slate-700">Ý nghĩa</th>
                <th class="p-2 border border-slate-700">Công thức</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border border-slate-700 font-semibold text-blue-400">Accuracy</td>
                <td class="p-2 border border-slate-700">Độ chính xác chung trên toàn bộ tập dữ liệu</td>
                <td class="p-2 border border-slate-700">$\\frac{TP + TN}{TP + TN + FP + FN}$</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-semibold text-emerald-400">Precision</td>
                <td class="p-2 border border-slate-700">Độ chuẩn xác trong các ca được dự đoán là Dương tính</td>
                <td class="p-2 border border-slate-700">$\\frac{TP}{TP + FP}$</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-semibold text-amber-400">Recall</td>
                <td class="p-2 border border-slate-700">Tỷ lệ phát hiện được bao nhiêu ca Dương tính trong thực tế</td>
                <td class="p-2 border border-slate-700">$\\frac{TP}{TP + FN}$</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-semibold text-purple-400">F1-Score</td>
                <td class="p-2 border border-slate-700">Trung bình điều hòa giữa Precision và Recall</td>
                <td class="p-2 border border-slate-700">$2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}}$</td>
              </tr>
            </tbody>
          </table>
        `,
        starterCode: `from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import classification_report, confusion_matrix

# Tải tập dữ liệu ung thư vú chuẩn
data = load_breast_cancer()
X, y = data.data, data.target

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Huấn luyện Decision Tree
dt = DecisionTreeClassifier(max_depth=4, random_state=42)
dt.fit(X_train, y_train)

# Đánh giá
y_pred = dt.predict(X_test)
print("=== Báo cáo Phân loại (Decision Tree) ===")
print(classification_report(y_test, y_pred, target_names=data.target_names))
`
      },
      {
        id: "lesson-5",
        title: "Bài 5: Ensemble Learning (Random Forest, XGBoost, LightGBM, CatBoost)",
        summary: "Sức mạnh kết hợp mô hình qua kỹ thuật Bagging và Boosting để giành chiến thắng trong các cuộc thi dữ liệu.",
        content: `
          <h3>1. Bagging vs Boosting</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
              <h4 class="text-blue-400 font-semibold">Bagging (Bootstrap Aggregating)</h4>
              <p class="text-sm text-slate-300 mt-2">Tạo ra nhiều bản sao dữ liệu ngẫu nhiên có hoàn lại, huấn luyện <strong>song song</strong> nhiều mô hình độc lập và lấy trung bình (hoặc biểu quyết đa số).</p>
              <p class="text-xs text-slate-400 mt-2">Đại diện tiêu biểu: <strong><span class="term-highlight" data-tooltip="Rừng ngẫu nhiên">Random Forest (rừng ngẫu nhiên kết hợp hàng trăm cây quyết định)</span></strong>.</p>
            </div>
            <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg">
              <h4 class="text-purple-400 font-semibold">Boosting</h4>
              <p class="text-sm text-slate-300 mt-2">Huấn luyện <strong>tuần tự</strong> các mô hình, mô hình sau tập trung sửa các lỗi sai của mô hình trước bằng cách tối ưu hóa gradient của hàm mất mát.</p>
              <p class="text-xs text-slate-400 mt-2">Đại diện tiêu biểu: <strong><span class="term-highlight" data-tooltip="Tăng cường gradient">XGBoost, LightGBM, CatBoost</span></strong>.</p>
            </div>
          </div>
        `,
        starterCode: `from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Tạo dữ liệu giả lập gồm 1000 mẫu và 20 đặc trưng
X, y = make_classification(n_samples=1000, n_features=20, n_informative=15, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 1. Huấn luyện Random Forest
rf = RandomForestClassifier(n_estimators=100, max_depth=6, random_state=42)
rf.fit(X_train, y_train)

# 2. Huấn luyện Gradient Boosting
gb = GradientBoostingClassifier(n_estimators=100, learning_rate=0.1, max_depth=3, random_state=42)
gb.fit(X_train, y_train)

print(f"Độ chính xác Random Forest:    {accuracy_score(y_test, rf.predict(X_test)):.4f}")
print(f"Độ chính xác Gradient Boosting: {accuracy_score(y_test, gb.predict(X_test)):.4f}")
`
      }
    ]
  },
  {
    id: "module-3",
    title: "Module 3: Unsupervised & Representation Learning",
    description: "Khám phá Phân cụm (K-Means, DBSCAN), Giảm chiều dữ liệu (PCA, t-SNE) và Học luật kết hợp (Apriori).",
    icon: "layers",
    lessons: [
      {
        id: "lesson-6",
        title: "Bài 6: Phân cụm dữ liệu & Khai phá luật kết hợp (K-Means, DBSCAN, Apriori)",
        summary: "Tự động phân nhóm khách hàng và tìm ra các quy luật mua hàng ẩn trong dữ liệu không nhãn.",
        content: `
          <h3>1. Phân cụm K-Means (K-Means Clustering)</h3>
          <p><span class="term-highlight" data-tooltip="Phân cụm K-Means">K-Means (thuật toán phân cụm lặp đi lặp lại 2 bước: gán điểm dữ liệu về tâm cụm gần nhất và tính lại vị trí trung bình của tâm cụm)</span>.</p>
          
          <h3>2. Phân cụm theo mật độ DBSCAN</h3>
          <p><span class="term-highlight" data-tooltip="Phân cụm DBSCAN">DBSCAN - Density-Based Spatial Clustering (thuật toán phân cụm dựa trên mật độ điểm lân cận trong bán kính epsilon, có khả năng tự phát hiện và loại bỏ điểm nhiễu)</span>.</p>

          <h3>3. Luật kết hợp Apriori (Association Rule Learning)</h3>
          <p><span class="term-highlight" data-tooltip="Luật kết hợp Apriori">Apriori (thuật toán tìm kiếm các tập mục xuất hiện thường xuyên cùng nhau, ví dụ: 'Người mua bia thường mua thêm lạc')</span>.</p>
        `,
        starterCode: `from sklearn.cluster import KMeans, DBSCAN
from sklearn.datasets import make_blobs
import numpy as np

# Tạo tập dữ liệu 2D gồm 4 cụm phân tán
X, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.6, random_state=0)

# Chạy K-Means với k=4
kmeans = KMeans(n_clusters=4, random_state=42)
kmeans_labels = kmeans.fit_predict(X)

# Chạy DBSCAN
dbscan = DBSCAN(eps=0.5, min_samples=5)
dbscan_labels = dbscan.fit_predict(X)

print(f"Tâm của 4 cụm (K-Means):\\n{kmeans.cluster_centers_}")
print(f"Số cụm tìm thấy bởi DBSCAN: {len(set(dbscan_labels)) - (1 if -1 in dbscan_labels else 0)}")
`
      },
      {
        id: "lesson-7",
        title: "Bài 7: Giảm chiều dữ liệu (PCA, t-SNE, UMAP)",
        summary: "Nén không gian dữ liệu hàng trăm chiều về 2D/3D để trực quan hóa và tăng tốc huấn luyện.",
        content: `
          <h3>1. Phân tích thành phần chính (PCA)</h3>
          <p><span class="term-highlight" data-tooltip="Phân tích thành phần chính">PCA - Principal Component Analysis (phương pháp giảm chiều tuyến tính tìm các trục trực giao bảo toàn phương sai lớn nhất của dữ liệu)</span>.</p>
          
          <h3>2. Kỹ thuật t-SNE và UMAP</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="t-SNE">t-SNE (kỹ thuật giảm chiều phi tuyến bảo toàn cấu trúc lân cận cục bộ, tối ưu cho trực quan hóa dữ liệu phức tạp lên 2D)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="UMAP">UMAP (thuật toán nén chiều hiện đại bảo toàn tốt cả cấu trúc cục bộ và toàn cục, tốc độ nhanh hơn t-SNE)</span></strong>.</li>
          </ul>
        `,
        starterCode: `from sklearn.datasets import load_digits
from sklearn.decomposition import PCA
import numpy as np

# Tải tập dữ liệu 64 chiều (ảnh chữ số 8x8)
digits = load_digits()
X = digits.data
y = digits.target

# Nén từ 64 chiều xuống 2 chiều bằng PCA
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)

print(f"Kích thước ban đầu: {X.shape}")
print(f"Kích thước sau PCA: {X_pca.shape}")
print(f"Tỷ lệ phương sai giữ lại được: {np.sum(pca.explained_variance_ratio_)*100:.2f}%")
`
      }
    ]
  },
  {
    id: "module-4",
    title: "Module 4: Deep Learning & Computer Vision",
    description: "Kiến trúc Mạng nơ-ron (MLP), Mạng tích chập (CNN, ResNet) và Mạng chuỗi thời gian (RNN, LSTM, GRU).",
    icon: "cpu",
    lessons: [
      {
        id: "lesson-8",
        title: "Bài 8: Mạng nơ-ron đa tầng (MLP) & Lan truyền ngược (Backpropagation)",
        summary: "Bản chất toán học của nơ-ron nhân tạo, hàm kích hoạt (Activation Functions) và cơ chế tự học trọng số.",
        content: `
          <h3>1. Kiến trúc Nơ-ron & Mạng MLP</h3>
          <p><span class="term-highlight" data-tooltip="Mạng nơ-ron đa tầng">MLP - Multilayer Perceptron (mạng nơ-ron truyền thẳng gồm tầng đầu vào Input Layer, các tầng ẩn Hidden Layers và tầng đầu ra Output Layer)</span>.</p>
          
          <h3>2. Hàm kích hoạt (Activation Functions)</h3>
          <p>Nếu không có hàm kích hoạt phi tuyến, mạng sâu nhiều tầng cũng chỉ tương đương với một phép nhân ma trận tuyến tính đơn lẻ:</p>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Hàm ReLU">ReLU (Rectified Linear Unit - trả về 0 nếu giá trị âm và giữ nguyên giá trị nếu dương: $f(x) = \\max(0, x)$)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Hàm Softmax">Softmax (hàm chuyển đổi vector điểm số thô thành phân phối xác suất có tổng bằng 1 ở tầng phân loại)</span></strong>.</li>
          </ul>

          <h3>3. Thuật toán Lan truyền ngược (Backpropagation)</h3>
          <p><span class="term-highlight" data-tooltip="Lan truyền ngược">Backpropagation (thuật toán tính toán gradient của hàm mất mát đối với từng trọng số trong mạng nơ-ron bằng cách áp dụng quy tắc đạo hàm chuỗi Chain Rule từ tầng cuối về tầng đầu)</span>.</p>
        `,
        starterCode: `import numpy as np

# Xây dựng 1 tầng nơ-ron truyền thẳng (Forward pass) thuần túy với NumPy
np.random.seed(42)

def relu(x):
    return np.maximum(0, x)

def softmax(x):
    exp_x = np.exp(x - np.max(x))
    return exp_x / exp_x.sum(axis=1, keepdims=True)

# 2 mẫu dữ liệu đầu vào (batch_size=2), mỗi mẫu 3 đặc trưng
X = np.array([[1.0, 2.0, 3.0], 
              [4.0, 5.0, 6.0]])

# Trọng số tầng ẩn (3 đầu vào -> 4 nơ-ron ẩn)
W1 = np.random.randn(3, 4)
b1 = np.zeros((1, 4))

# Trọng số tầng ra (4 nơ-ron ẩn -> 2 lớp phân loại)
W2 = np.random.randn(4, 2)
b2 = np.zeros((1, 2))

# 1. Lan truyền qua tầng ẩn
Z1 = np.dot(X, W1) + b1
A1 = relu(Z1)

# 2. Lan truyền qua tầng đầu ra
Z2 = np.dot(A1, W2) + b2
probs = softmax(Z2)

print("Xác suất dự báo 2 lớp cho 2 mẫu dữ liệu:")
print(probs)
`
      },
      {
        id: "lesson-9",
        title: "Bài 9: Thị giác máy tính với Mạng tích chập (CNN, ResNet, EfficientNet)",
        summary: "Phép tích chập không gian (Convolution), trích xuất đặc trưng hình ảnh và kết nối tắt Residual Connection.",
        content: `
          <h3>1. Cơ chế Mạng nơ-ron tích chập (CNN)</h3>
          <p><span class="term-highlight" data-tooltip="Mạng nơ-ron tích chập">CNN - Convolutional Neural Network (mạng nơ-ron chuyên dụng xử lý ảnh bằng cách trượt các ma trận bộ lọc Filter/Kernel để trích xuất đặc trưng cục bộ như đường nét, góc cạnh)</span>.</p>
          
          <h3>2. Kiến trúc đột phá ResNet</h3>
          <p><span class="term-highlight" data-tooltip="Mạng ResNet">ResNet (kiến trúc mạng tích chập bổ sung kết nối tắt Residual Connection cộng thẳng giá trị đầu vào $x$ vào đầu ra $F(x) + x$, giúp giải quyết triệt để hiện tượng tiêu biến gradient khi mạng sâu tới hàng trăm tầng)</span>.</p>
        `,
        starterCode: `# Mô phỏng phép tích chập (2D Convolution) đơn giản bằng NumPy
import numpy as np

# Giả lập 1 ảnh kích thước 5x5
image = np.array([
    [10, 10, 10, 0, 0],
    [10, 10, 10, 0, 0],
    [10, 10, 10, 0, 0],
    [10, 10, 10, 0, 0],
    [10, 10, 10, 0, 0]
])

# Bộ lọc phát hiện biên dọc (Sobel Vertical Filter 3x3)
kernel = np.array([
    [1, 0, -1],
    [1, 0, -1],
    [1, 0, -1]
])

# Tính tích chập (kích thước đầu ra 3x3)
out_h = image.shape[0] - kernel.shape[0] + 1
out_w = image.shape[1] - kernel.shape[1] + 1
output = np.zeros((out_h, out_w))

for i in range(out_h):
    for j in range(out_w):
        region = image[i:i+3, j:j+3]
        output[i, j] = np.sum(region * kernel)

print("Bản đồ đặc trưng sau khi quét bộ lọc tìm biên dọc:")
print(output)
`
      },
      {
        id: "lesson-10",
        title: "Bài 10: Xử lý chuỗi thời gian & Autoencoders (RNN, LSTM, GRU, VAE)",
        summary: "Mô hình hóa chuỗi dữ liệu có tính thứ tự thời gian và mạng tự mã hóa nén thông tin.",
        content: `
          <h3>1. Mạng nơ-ron hồi quy (RNN & LSTM)</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Mạng nơ-ron hồi quy">RNN - Recurrent Neural Network (mạng nơ-ron có vòng lặp lưu giữ trạng thái ẩn để ghi nhớ thông tin của các bước thời gian trước)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Mạng LSTM">LSTM - Long Short-Term Memory (biến thể RNN sở hữu 3 cổng: cổng quên Forget Gate, cổng vào Input Gate và cổng ra Output Gate giúp duy trì trí nhớ dài hạn hiệu quả)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Mạng GRU">GRU - Gated Recurrent Unit (phiên bản tinh gọn của LSTM chỉ dùng 2 cổng Update và Reset)</span></strong>.</li>
          </ul>

          <h3>2. Mạng tự mã hóa (Autoencoders & VAE)</h3>
          <p><span class="term-highlight" data-tooltip="Mạng tự mã hóa">Autoencoders (kiến trúc mạng nén dữ liệu qua tầng cổ chai Bottleneck thành vector đại diện rút gọn Latent Vector rồi giải mã tái tạo lại dữ liệu ban đầu)</span>.</p>
        `,
        starterCode: `# Ví dụ minh họa nguyên lý luồng tế bào nhớ LSTM
print("LSTM Cell Architecture:")
print("1. Forget Gate: f_t = sigma(W_f * [h_{t-1}, x_t] + b_f) -> Quyết định bỏ thông tin cũ nào")
print("2. Input Gate:  i_t = sigma(W_i * [h_{t-1}, x_t] + b_i) -> Quyết định lưu thông tin mới nào")
print("3. Cell State:  C_t = f_t * C_{t-1} + i_t * tanh(C_t_candidate) -> Cập nhật trí nhớ cốt lõi")
print("4. Output Gate: o_t = sigma(W_o * [h_{t-1}, x_t] + b_o) -> Trạng thái ẩn đầu ra h_t")
`
      }
    ]
  },
  {
    id: "module-5",
    title: "Module 5: Kỷ nguyên Transformers & Modern NLP",
    description: "Cơ chế Tự chú ý (Self-Attention), Đa đầu chú ý (Multi-Head Attention), BERT, GPT, T5 và Vision Transformer (ViT).",
    icon: "sparkles",
    lessons: [
      {
        id: "lesson-11",
        title: "Bài 11: Cơ chế Tự chú ý (Self-Attention) & Kiến trúc Transformer",
        summary: "Công thức Scaled Dot-Product Attention, Multi-Head Attention và sự ra đời của bài báo Attention Is All You Need.",
        content: `
          <h3>1. Đột phá từ Cơ chế Tự chú ý (Self-Attention)</h3>
          <p><span class="term-highlight" data-tooltip="Cơ chế tự chú ý">Self-Attention (cơ chế tính toán mức độ tương quan ngữ nghĩa giữa từng từ với tất cả các từ khác trong toàn bộ câu, cho phép xử lý song song tốc độ cao)</span>.</p>
          
          <div class="my-4 p-4 rounded-lg bg-slate-900 border border-slate-700">
            <h4 class="text-blue-400 font-semibold mb-2">Công thức Tự chú ý chuẩn (Scaled Dot-Product Attention)</h4>
            $$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$$
            <p class="text-sm text-slate-300 mt-2">Trong đó:</p>
            <ul class="text-xs text-slate-400 mt-1 space-y-1">
              <li><strong>$Q$ (Query - câu truy vấn)</strong>: Đại diện cho từ đang cần tìm kiếm ngữ cảnh.</li>
              <li><strong>$K$ (Key - chìa khóa)</strong>: Đại diện cho danh tính ngữ nghĩa của các từ khác.</li>
              <li><strong>$V$ (Value - giá trị thông tin)</strong>: Nội dung thông tin thực tế được truyền tải.</li>
              <li><strong>$\\sqrt{d_k}$ (Hệ số thu phóng)</strong>: Tránh để giá trị tích vô hướng quá lớn làm bão hòa đạo hàm hàm Softmax.</li>
            </ul>
          </div>

          <h3>2. Phân biệt họ mô hình Transformer</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Mô hình BERT">BERT (Encoder-only - mô hình chỉ dùng bộ mã hóa hai chiều, tối ưu cho phân loại văn bản, trích xuất thực thể)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Mô hình GPT">GPT (Decoder-only - mô hình tự hồi quy chỉ dùng bộ giải mã một chiều từ trái sang phải, tối ưu cho sinh văn bản sáng tạo)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Mô hình T5">T5 (Encoder-Decoder - kiến trúc tổng quát quy mọi bài toán thành dạng Text-to-Text)</span></strong>.</li>
          </ul>
        `,
        starterCode: `import numpy as np

def scaled_dot_product_attention(Q, K, V):
    """Tính toán ma trận tự chú ý Self-Attention thuần túy"""
    d_k = Q.shape[-1]
    # 1. Tính điểm tương quan (Dot product)
    scores = np.dot(Q, K.T) / np.sqrt(d_k)
    # 2. Chuẩn hóa xác suất qua hàm Softmax
    exp_scores = np.exp(scores - np.max(scores, axis=-1, keepdims=True))
    attention_weights = exp_scores / np.sum(exp_scores, axis=-1, keepdims=True)
    # 3. Nhân với ma trận Value
    output = np.dot(attention_weights, V)
    return output, attention_weights

# Giả lập 3 từ trong câu: ["Học", "Máy", "Học"] với chiều biểu diễn d_k = 4
np.random.seed(42)
Q = np.random.randn(3, 4)
K = np.random.randn(3, 4)
V = np.random.randn(3, 4)

output, weights = scaled_dot_product_attention(Q, K, V)
print("Ma trận trọng số chú ý giữa các từ (Attention Matrix 3x3):")
print(np.round(weights, 3))
`
      },
      {
        id: "lesson-12",
        title: "Bài 12: Vision Transformers (ViT) & Transfer Learning",
        summary: "Ứng dụng cơ chế Transformer vào ảnh qua chia mảnh Patch và kỹ thuật Tinh chỉnh mô hình (Fine-Tuning).",
        content: `
          <h3>1. Vision Transformer (ViT)</h3>
          <p><span class="term-highlight" data-tooltip="Vision Transformer">ViT - Vision Transformer (mô hình cắt ảnh thành các mảnh vuông nhỏ Patch 16x16, biến mỗi mảnh thành 1 token tương tự như từ ngữ trong câu rồi đưa thẳng vào kiến trúc Transformer chuẩn)</span>.</p>
          
          <h3>2. Học chuyển giao (Transfer Learning) & Fine-Tuning</h3>
          <p><span class="term-highlight" data-tooltip="Học chuyển giao">Transfer Learning (phương pháp lấy một mô hình khổng lồ đã được tiền huấn luyện Pre-trained trên hàng tỷ dữ liệu rồi áp dụng sang tác vụ chuyên biệt)</span>.</p>
        `,
        starterCode: `# Ý tưởng chia ảnh thành các mảnh Patch trong Vision Transformer (ViT)
import numpy as np

# Giả lập 1 ảnh kích thước 32x32 pixel (1 kênh màu)
image = np.random.rand(32, 32)
patch_size = 8 # Mảnh kích thước 8x8

num_patches = (32 // patch_size) * (32 // patch_size)
print(f"Số lượng mảnh Token Patch được tạo ra: {num_patches} mảnh (tương đương câu có {num_patches} từ)")
`
      }
    ]
  },
  {
    id: "module-6",
    title: "Module 6: Generative AI, LLMs & Multimodal Models",
    description: "Làm chủ LLM (LLaMA 3, GPT-4o), Prompt Engineering, RAG Pipeline, LoRA Fine-Tuning, Diffusion & Tác tử AI (AI Agents).",
    icon: "bot",
    lessons: [
      {
        id: "lesson-13",
        title: "Bài 13: Large Language Models (LLMs) & Prompt Engineering",
        summary: "Nguyên lý vận hành của LLaMA 3, GPT-4o, Claude 3 và các mẫu Prompt nâng cao (Few-Shot, Chain-of-Thought).",
        content: `
          <h3>1. Bản chất của Large Language Models (LLMs)</h3>
          <p><span class="term-highlight" data-tooltip="Mô hình ngôn ngữ lớn">LLMs - Large Language Models (mô hình nơ-ron hàng chục đến hàng trăm tỷ tham số được huấn luyện trên toàn bộ kho văn bản nhân loại để dự đoán từ tiếp theo Next Token Prediction)</span>.</p>

          <h3>2. Kỹ thuật thiết kế câu lệnh (Prompt Engineering)</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Nhắc nhở có vài ví dụ mẫu">Few-Shot Prompting (kỹ thuật cung cấp kèm một vài ví dụ mẫu đầu vào - đầu ra chuẩn trong câu lệnh để mô hình nắm bắt cấu trúc mong muốn)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Chuỗi tư duy suy luận">Chain-of-Thought - CoT (kỹ thuật yêu cầu mô hình giải thích chi tiết từng bước suy luận 'Hãy suy nghĩ từng bước một' trước khi đưa ra kết luận)</span></strong>.</li>
            <li><strong>System Prompt</strong>: Thiết lập vai trò, ngữ cảnh và quy tắc ứng xử cho AI.</li>
          </ul>
        `,
        starterCode: `# Cấu trúc một Prompt chuẩn hóa kết hợp Role + Few-Shot + Chain-of-Thought
system_prompt = """Bạn là một Chuyên gia Pháp lý AI cao cấp. 
Quy tắc:
1. Luôn trích dẫn chính xác Điều, Khoản của văn bản luật.
2. Nếu không có thông tin chắc chắn, hãy nói 'Tôi không biết', tuyệt đối không được bịa đặt."""

user_query = "Xe máy vượt đèn đỏ thì bị xử phạt bao nhiêu tiền theo quy định mới nhất?"

full_prompt = f"{system_prompt}\\n\\nCâu hỏi của người dùng: {user_query}\\nHãy phân tích và trả lời theo từng bước:"
print("=== PROMPT GỬI ĐẾN LLM ===")
print(full_prompt)
`
      },
      {
        id: "lesson-14",
        title: "Bài 14: Hệ thống RAG (Retrieval-Augmented Generation) & Vector Database",
        summary: "Khắc phục hiện tượng ảo giác (Hallucination) bằng cách kết nối LLM với cơ sở dữ liệu vector ngoại vi.",
        content: `
          <h3>1. RAG là gì?</h3>
          <p><span class="term-highlight" data-tooltip="Truy xuất tăng cường tạo sinh">RAG - Retrieval-Augmented Generation (kiến trúc kết hợp giữa bộ truy xuất dữ liệu ngữ nghĩa và mô hình ngôn ngữ lớn để trả lời câu hỏi dựa trên nguồn tri thức thực tế được cung cấp)</span>.</p>

          <h3>2. Các bước cốt lõi trong một RAG Pipeline</h3>
          <ol class="list-decimal pl-5 space-y-2 text-sm text-slate-300 my-3">
            <li><strong><span class="term-highlight" data-tooltip="Phân đoạn văn bản">Chunking (chia nhỏ tài liệu lớn thành các đoạn ngắn khoảng 300 - 1000 ký tự kèm phần gối đầu)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Chuyển đổi vector">Embedding (biến đổi các đoạn văn bản thành vector số thực nhiều chiều qua mô hình nhúng)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Lưu trữ vector">Vector Database (lưu trữ vector vào cơ sở dữ liệu chuyên dụng như Qdrant, Chroma, Milvus)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Tìm kiếm ngữ nghĩa">Semantic Search (tìm kiếm các đoạn văn bản có độ tương đồng Cosine cao nhất với câu hỏi)</span></strong>.</li>
            <li><strong>Augmentation & Generation</strong>: Ghép các đoạn trích xuất làm ngữ cảnh vào prompt và gửi cho LLM tổng hợp câu trả lời.</li>
          </ol>
        `,
        starterCode: `import numpy as np

def cosine_similarity(v1, v2):
    """Tính độ tương đồng Cosine giữa 2 vector biểu diễn"""
    return np.dot(v1, v2) / (np.linalg.norm(v1) * np.linalg.norm(v2))

# Giả lập kho tài liệu và câu hỏi dưới dạng vector embedding (4 chiều)
doc1_law_traffic = np.array([0.9, 0.8, 0.1, 0.0]) # Văn bản Luật Giao thông
doc2_cooking = np.array([0.0, 0.1, 0.9, 0.8])     # Công thức Nấu ăn
doc3_weather = np.array([0.1, 0.2, 0.2, 0.1])     # Dự báo Thời tiết

query = np.array([0.85, 0.75, 0.05, 0.0]) # Câu hỏi: "Mức phạt vi phạm tốc độ đường bộ?"

scores = {
    "Tài liệu Luật Giao thông": cosine_similarity(query, doc1_law_traffic),
    "Tài liệu Nấu ăn": cosine_similarity(query, doc2_cooking),
    "Tài liệu Thời tiết": cosine_similarity(query, doc3_weather)
}

print("=== ĐIỂM TƯƠNG ĐỒNG NGỮ NGHĨA (COSINE SIMILARITY) ===")
for doc, score in sorted(scores.items(), key=lambda x: x[1], reverse=True):
    print(f"- {doc}: {score:.4f}")
`
      },
      {
        id: "lesson-15",
        title: "Bài 15: Tinh chỉnh hiệu quả PEFT / LoRA & Tác tử AI (AI Agents)",
        summary: "Fine-tune LLM trên GPU nhỏ với LoRA và xây dựng hệ thống tự động suy luận & gọi công cụ ngoài (Function Calling).",
        content: `
          <h3>1. Tinh chỉnh hiệu quả với LoRA (Low-Rank Adaptation)</h3>
          <p><span class="term-highlight" data-tooltip="Tinh chỉnh hạng thấp">LoRA - Low-Rank Adaptation (kỹ thuật đóng băng toàn bộ hàng tỷ tham số của mô hình gốc và chỉ huấn luyện 2 ma trận phân rã nhỏ $A$ và $B$ có hạng thấp, giúp giảm 99% chi phí bộ nhớ VRAM khi fine-tuning)</span>.</p>
          
          <div class="my-4 p-4 rounded-lg bg-slate-900 border border-slate-700">
            <h4 class="text-indigo-400 font-semibold mb-2">Công thức phân rã trọng số của LoRA</h4>
            $$W_{mới} = W_0 + \\Delta W = W_0 + \\frac{\\alpha}{r} (B \\times A)$$
            <p class="text-sm text-slate-300 mt-2">Trong đó $W_0 \\in \\mathbb{R}^{d \\times k}$ được đóng băng cố định, $B \\in \\mathbb{R}^{d \\times r}$ và $A \\in \\mathbb{R}^{r \\times k}$ với hạng $r \\ll \\min(d, k)$.</p>
          </div>

          <h3>2. AI Agents & Mô hình Tác tử tự động</h3>
          <p><span class="term-highlight" data-tooltip="Tác tử AI thông minh">AI Agent (hệ thống phần mềm ứng dụng LLM làm bộ não tư duy để tự động lập kế hoạch, sử dụng công cụ Function Calling / Tool Use, tương tác với môi trường và tự sửa lỗi để hoàn thành mục tiêu)</span>.</p>
        `,
        starterCode: `# Giả lập cơ chế Tool Calling (Function Calling) của AI Agent
import json

# 1. Định nghĩa công cụ ngoại vi
tools = [
    {
        "name": "lookup_traffic_fine",
        "description": "Tra cứu mức phạt vi phạm luật giao thông đường bộ Việt Nam",
        "parameters": {
            "type": "object",
            "properties": {
                "violation_type": {"type": "string", "description": "Lỗi vi phạm, ví dụ: 'vượt đèn đỏ'"}
            },
            "required": ["violation_type"]
        }
    }
]

# 2. Giả lập phản hồi từ LLM quyết định gọi tool
llm_tool_call_response = {
    "thought": "Người dùng muốn biết mức phạt vượt đèn đỏ. Tôi cần gọi tool lookup_traffic_fine.",
    "tool_to_call": "lookup_traffic_fine",
    "arguments": {"violation_type": "vượt đèn đỏ"}
}

print("=== PHẢN HỒI SUY LUẬN VÀ GỌI CÔNG CỤ CỦA AI AGENT ===")
print(json.dumps(llm_tool_call_response, indent=2, ensure_ascii=False))
`
      },
      {
        id: "lesson-16",
        title: "Bài 16: Diffusion Models, GANs & AI Đa phương thức (Multimodal)",
        summary: "Nguyên lý tạo ảnh của Stable Diffusion 3, Midjourney, kiến trúc GAN và các mô hình đa phương thức GPT-4V, LLaVA.",
        content: `
          <h3>1. Mô hình khuếch tán (Diffusion Models)</h3>
          <p><span class="term-highlight" data-tooltip="Mô hình khuếch tán">Diffusion Models (mô hình tạo sinh ảnh hoạt động qua 2 quá trình: Forward Process thêm nhiễu Gaussian từng bước vào ảnh gốc và Reverse Process huấn luyện mạng nơ-ron học cách khử nhiễu để tái tạo ảnh hoàn mỹ)</span>.</p>
          
          <h3>2. Mô hình đa phương thức (Multimodal Models)</h3>
          <p><span class="term-highlight" data-tooltip="Mô hình đa phương thức">Multimodal AI (mô hình có khả năng tiếp nhận, xử lý và hiểu đồng thời nhiều loại dữ liệu khác nhau như văn bản, hình ảnh, âm thanh, video, ví dụ GPT-4o, Gemini 1.5 Pro, LLaVA)</span>.</p>
        `,
        starterCode: `# Quy trình thêm và khử nhiễu trong Diffusion Models
import numpy as np

# Tạo 1 tín hiệu ảnh gốc giả định
original_signal = np.array([1.0, 0.8, -0.5, 0.3])
print(f"Tín hiệu gốc: {original_signal}")

# Quá trình Forward: Thêm nhiễu ngẫu nhiên
noise = np.random.normal(0, 0.5, size=original_signal.shape)
noisy_signal = 0.7 * original_signal + 0.3 * noise
print(f"Tín hiệu sau khi bị thêm nhiễu (Noisy): {noisy_signal}")
`
      }
    ]
  },
  {
    id: "module-7",
    title: "Module 7: Reinforcement Learning & MLOps Triển khai",
    description: "Học tăng cường (Q-Learning, DQN, PPO, RLHF) và đóng gói API đưa mô hình vào sản xuất (FastAPI, Docker, vLLM).",
    icon: "rocket",
    lessons: [
      {
        id: "lesson-17",
        title: "Bài 17: Reinforcement Learning & RLHF (Q-Learning, DQN, PPO)",
        summary: "Tương tác môi trường qua Thưởng / Phạt và vai trò của RLHF trong việc huấn luyện ChatGPT.",
        content: `
          <h3>1. Bản chất của Reinforcement Learning (RL)</h3>
          <p><span class="term-highlight" data-tooltip="Học tăng cường">Reinforcement Learning (phương pháp học trong đó tác tử Agent tự hành động trong môi trường Environment để tối đa hóa tổng phần thưởng Reward nhận được)</span>.</p>
          
          <h3>2. Căn chỉnh hành vi LLM với RLHF</h3>
          <p><span class="term-highlight" data-tooltip="Học tăng cường từ phản hồi con người">RLHF - Reinforcement Learning from Human Feedback (kỹ thuật sử dụng thuật toán tối ưu chính sách PPO kết hợp với mô hình chấm điểm thưởng Reward Model được huấn luyện từ đánh giá của con người để làm cho LLM trở nên an toàn, hữu ích và chân thật hơn)</span>.</p>
        `,
        starterCode: `# Mô phỏng thuật toán Q-Learning cập nhật bảng Q-Table
import numpy as np

# Bảng Q-Table: 3 trạng thái (State) x 2 hành động (Action)
Q_table = np.zeros((3, 2))
lr = 0.1      # Tốc độ học alpha
gamma = 0.95  # Hệ số chiết khấu phần thưởng tương lai

# Agent ở State 0, chọn Action 1, nhận phần thưởng R = +10 và chuyển sang State 1
state = 0
action = 1
reward = 10.0
next_state = 1

# Cập nhật giá trị Q theo phương trình Bellman
best_next_action_val = np.max(Q_table[next_state])
Q_table[state, action] = Q_table[state, action] + lr * (reward + gamma * best_next_action_val - Q_table[state, action])

print("Bảng Q-Table sau khi cập nhật 1 bước tương tác:")
print(Q_table)
`
      },
      {
        id: "lesson-18",
        title: "Bài 18: Đóng gói API, Container hóa & Tối ưu suy luận (FastAPI, Docker, vLLM)",
        summary: "Đưa mô hình AI ra môi trường thực tế với máy chủ API hiệu năng cao và kỹ thuật Lượng tử hóa (Quantization).",
        content: `
          <h3>1. Đóng gói mô hình thành Web API với FastAPI</h3>
          <p><span class="term-highlight" data-tooltip="Khung phát triển web FastAPI">FastAPI (khung phát triển web Python hiệu năng cực cao, hỗ trợ bất đồng bộ async/await và tự sinh tài liệu Swagger UI tự động)</span>.</p>

          <h3>2. Tối ưu hóa suy luận (Inference Optimization)</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Lượng tử hóa mô hình">Quantization (kỹ thuật nén trọng số từ FP16 xuống INT8 hoặc INT4 giúp mô hình chạy nhanh gấp 3 lần và tiết kiệm 75% VRAM mà độ chính xác hầu như không đổi)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Máy chủ suy luận vLLM">vLLM (máy chủ suy luận phục vụ LLM tốc độ cao hàng đầu với thuật toán PagedAttention quản lý bộ nhớ KV Cache tối ưu)</span></strong>.</li>
          </ul>
        `,
        starterCode: `# Cấu trúc một API phục vụ mô hình Machine Learning với FastAPI
code_api = """
from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np

app = FastAPI(title="ML Prediction Service", version="1.0")

class HousingFeatures(BaseModel):
    area: float
    bedrooms: int
    location_score: float

@app.post("/predict")
def predict_price(item: HousingFeatures):
    # Giả lập dự đoán
    pred_price = item.area * 25.0 + item.bedrooms * 50.0 + item.location_score * 100.0
    return {"predicted_price_million_vnd": round(pred_price, 2), "status": "success"}
"""
print("Mã nguồn ứng dụng FastAPI:")
print(code_api)
`
      }
    ]
  }
];

// Terminology Glossary for A-Z Lookups
window.ML_GLOSSARY = [
  { term: "Machine Learning (ML)", desc: "Ngành học giúp máy tính tự động học từ dữ liệu để cải thiện hiệu suất thực hiện tác vụ mà không cần lập trình quy tắc thủ công.", category: "Core" },
  { term: "Supervised Learning", desc: "Học có giám sát: Huấn luyện mô hình trên dữ liệu đã được gán sẵn nhãn mục tiêu chính xác.", category: "Core" },
  { term: "Unsupervised Learning", desc: "Học không giám sát: Tự động khám phá các quy luật, cụm ẩn trong dữ liệu không có nhãn.", category: "Core" },
  { term: "Overfitting", desc: "Hiện tượng quá khớp (học vẹt): Mô hình học quá chi tiết cả nhiễu của tập train dẫn đến dự báo kém trên dữ liệu mới.", category: "Evaluation" },
  { term: "Underfitting", desc: "Hiện tượng chưa khớp: Mô hình quá đơn giản nên không học được quy luật ngay cả trên tập dữ liệu huấn luyện.", category: "Evaluation" },
  { term: "Gradient Descent", desc: "Thuật toán tối ưu hóa hạ gradient: Cập nhật trọng số theo hướng ngược đạo hàm để giảm thiểu hàm mất mát.", category: "Math & Optimization" },
  { term: "Learning Rate", desc: "Tốc độ học (hệ số bước nhảy): Quyết định mức độ điều chỉnh trọng số ở mỗi bước lặp của quá trình tối ưu.", category: "Math & Optimization" },
  { term: "Convolutional Neural Network (CNN)", desc: "Mạng nơ-ron tích chập: Kiến trúc chuyên biệt xử lý dữ liệu không gian lưới như hình ảnh và video.", category: "Deep Learning" },
  { term: "Recurrent Neural Network (RNN)", desc: "Mạng nơ-ron hồi quy: Kiến trúc có bộ nhớ trạng thái ẩn để xử lý dữ liệu chuỗi tuần tự.", category: "Deep Learning" },
  { term: "Self-Attention", desc: "Cơ chế tự chú ý: Cho phép mỗi từ trong câu tính toán mối tương quan trực tiếp với mọi từ khác trong cùng một lượt.", category: "Transformers" },
  { term: "Large Language Model (LLM)", desc: "Mô hình ngôn ngữ lớn: Mạng Transformer hàng chục tỷ tham số có khả năng hiểu và sinh ngôn ngữ tự nhiên.", category: "Generative AI" },
  { term: "Retrieval-Augmented Generation (RAG)", desc: "Truy xuất tăng cường tạo sinh: Kết hợp truy xuất tài liệu thực tế từ cơ sở dữ liệu vector với LLM để trả lời chính xác, loại bỏ ảo giác.", category: "Generative AI" },
  { term: "LoRA (Low-Rank Adaptation)", desc: "Kỹ thuật tinh chỉnh tham số hiệu quả bằng cách đóng băng mô hình gốc và chèn thêm 2 ma trận phân rã hạng thấp.", category: "Generative AI" },
  { term: "Diffusion Model", desc: "Mô hình khuếch tán: Sinh dữ liệu (ảnh, âm thanh) thông qua quá trình đảo ngược việc thêm nhiễu Gaussian từng bước.", category: "Generative AI" },
  { term: "AI Agent", desc: "Tác tử trí tuệ nhân tạo: Hệ thống tự động có khả năng tư duy suy luận, lập kế hoạch, sử dụng công cụ ngoài và tự hoàn thành mục tiêu.", category: "Generative AI" },
  { term: "Quantization", desc: "Lượng tử hóa: Kỹ thuật nén trọng số mô hình từ số thực độ chính xác cao (FP16/FP32) xuống định dạng số nguyên (INT8/INT4).", category: "MLOps" }
];
