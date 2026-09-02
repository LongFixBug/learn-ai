// ML Learning Hub - Comprehensive Exercises, Quizzes & Coding Challenges Database (100% Coverage)
window.ML_EXERCISES = {
  // ===================== CHƯƠNG 1 (DEEP LEARNING HANDBOOK) =====================
  "lesson-dl-ch1": {
    quiz: {
      question: "Điểm khác biệt cốt lõi nhất giữa Deep Learning và Machine Learning truyền thống là gì?",
      options: [
        "Deep Learning luôn chạy nhanh hơn Machine Learning.",
        "Deep Learning có khả năng tự động học và trích xuất đặc trưng (Automatic Feature Learning) mà không cần Feature Engineering thủ công.",
        "Machine Learning xử lý dữ liệu hình ảnh tốt hơn Deep Learning.",
        "Deep Learning cần ít dữ liệu hơn Machine Learning."
      ],
      correctIndex: 1,
      explanation: "Chính xác! Deep Learning tự động trích xuất đặc trưng nhiều tầng bậc từ dữ liệu thô (ảnh, chữ, âm thanh) mà không cần con người thiết kế đặc trưng thủ công như ML truyền thống."
    },
    challenge: {
      title: "Bài toán định lượng: Tính toán Perceptron đơn lẻ qua kích hoạt ReLU",
      description: "Cho đầu vào x = [2.0, -1.5, 3.0], trọng số w = [0.4, 0.8, -0.2], bias b = 0.5. Hãy tính tổng tuyến tính z = w^T*x + b và giá trị đầu ra y = max(0, z).",
      starterCode: `import torch

# Khởi tạo vector đầu vào x, trọng số w, và bias b
x = torch.tensor([2.0, -1.5, 3.0])
w = torch.tensor([0.4, 0.8, -0.2])
b = torch.tensor(0.5)

# TODO: Tính tổng tuyến tính z và kích hoạt ReLU y
z = torch.dot(w, x) + b
y = torch.relu(z)

print("Tổng tuyến tính z:", z.item())
print("Đầu ra nơ-ron y: ", y.item())
`,
      solution: `import torch

x = torch.tensor([2.0, -1.5, 3.0])
w = torch.tensor([0.4, 0.8, -0.2])
b = torch.tensor(0.5)

# z = (0.4*2.0) + (0.8*-1.5) + (-0.2*3.0) + 0.5 = 0.8 - 1.2 - 0.6 + 0.5 = -0.5
z = torch.dot(w, x) + b
# y = max(0, -0.5) = 0.0
y = torch.relu(z)

print(f"Tổng tuyến tính z = {z.item():.2f} (Kỳ vọng: -0.50)")
print(f"Đầu ra nơ-ron y  = {y.item():.2f} (Kỳ vọng: 0.00)")
`,
      hint: "Sử dụng `torch.dot(w, x) + b` và `torch.relu(z)`."
    }
  },

  // ===================== CHƯƠNG 2 (DEEP LEARNING HANDBOOK) =====================
  "lesson-dl-ch2": {
    quiz: {
      question: "Vì sao hàm kích hoạt ReLU được ưa chuộng hơn Sigmoid trong các lớp ẩn (Hidden Layers) của mạng nơ-ron sâu?",
      options: [
        "ReLU giới hạn đầu ra trong khoảng từ 0 đến 1.",
        "ReLU giúp tính toán cực nhanh và giảm thiểu tối đa hiện tượng triệt tiêu gradient (vanishing gradient) ở vùng dương.",
        "ReLU luôn tạo ra đầu ra đối xứng qua điểm 0.",
        "ReLU hoạt động hiệu quả hơn ở lớp đầu ra phân loại xác suất."
      ],
      correctIndex: 1,
      explanation: "Chính xác! Đạo hàm của ReLU ở vùng dương luôn bằng 1.0 cố định, giúp gradient truyền ngược qua hàng chục lớp ẩn mà không bị co cụm suy giảm về 0 như hàm Sigmoid hay Tanh."
    },
    challenge: {
      title: "Bài toán định lượng: Lan truyền ngược (Backpropagation) với Autograd",
      description: "Tính đạo hàm d(loss)/dx tự động với PyTorch cho hàm Loss = y^2 với y = 3x^2 + 2x + 1 tại điểm x = 1.0.",
      starterCode: `import torch

x = torch.tensor([1.0], requires_grad=True)

y = 3 * (x ** 2) + 2 * x + 1
loss = y ** 2

loss.backward()

print("Giá trị Loss:                      ", loss.item())
print("Gradient đạo hàm d(loss)/dx tại x=1.0:", x.grad.item())
`,
      solution: `import torch

x = torch.tensor([1.0], requires_grad=True)
y = 3 * (x ** 2) + 2 * x + 1
loss = y ** 2

loss.backward()

# Đạo hàm giải tích: d(loss)/dx = 2 * y * (6x + 2) = 2 * 6 * 8 = 96.0
print(f"Giá trị Loss: {loss.item()} (Kỳ vọng: 36.0)")
print(f"Gradient:    {x.grad.item()} (Kỳ vọng: 96.0)")
`,
      hint: "Sử dụng `loss.backward()` và in giá trị `x.grad`."
    }
  },

  // ===================== CHƯƠNG 3 (DEEP LEARNING HANDBOOK) =====================
  "lesson-dl-ch3": {
    quiz: {
      question: "Đồ thị huấn luyện cho thấy: Loss của tập Train tiếp tục giảm rất thấp, nhưng Loss của tập Validation bắt đầu tăng mạnh trở lại. Đây là dấu hiệu của hiện tượng gì?",
      options: [
        "Underfitting (Chưa khớp)",
        "Good Fit (Khớp tối ưu)",
        "Overfitting (Quá khớp / Học vẹt)",
        "Vanishing Gradient (Triệt tiêu gradient)"
      ],
      correctIndex: 2,
      explanation: "Chính xác! Khi Train Loss giảm nhưng Validation Loss tăng vọt, mô hình đã bắt đầu 'học vẹt' cả nhiễu của tập huấn luyện và mất khả năng tổng quát hóa trên dữ liệu mới (Overfitting)."
    },
    challenge: {
      title: "Bài toán định lượng: Tính toán lỗi Binary Cross Entropy (BCE)",
      description: "Mô hình dự đoán xác suất y_hat = 0.8 cho nhãn thực tế y = 1. Hãy viết code tính lỗi BCE = -[y*log(y_hat) + (1-y)*log(1-y_hat)].",
      starterCode: `import numpy as np

y_true = 1.0
y_pred = 0.8

loss_bce = -(y_true * np.log(y_pred) + (1.0 - y_true) * np.log(1.0 - y_pred))
print("Lỗi BCE tính được:", round(loss_bce, 4))
`,
      solution: `import numpy as np

y_true = 1.0
y_pred = 0.8

# BCE = -[1 * ln(0.8) + 0] = -ln(0.8) ≈ 0.2231
loss_bce = -(y_true * np.log(y_pred) + (1.0 - y_true) * np.log(1.0 - y_pred))
print(f"Lỗi BCE: {loss_bce:.4f} (Kỳ vọng: 0.2231)")
`,
      hint: "Sử dụng `np.log()` để tính logarit tự nhiên."
    }
  },

  // ===================== CHƯƠNG 4 (DEEP LEARNING HANDBOOK) =====================
  "lesson-dl-ch4": {
    quiz: {
      question: "Một bức ảnh 5x5 (N=5) đi qua tầng tích chập có Filter 3x3 (F=3), Padding P=1, Stride S=1. Kích thước bản đồ đặc trưng đầu ra O là bao nhiêu?",
      options: [
        "3x3",
        "5x5",
        "4x4",
        "7x7"
      ],
      correctIndex: 1,
      explanation: "Chính xác! Áp dụng công thức: O = ((N - F + 2P) / S) + 1 = ((5 - 3 + 2*1) / 1) + 1 = (4 / 1) + 1 = 5. Do đó kích thước đầu ra là 5x5."
    },
    challenge: {
      title: "Thực hành PyTorch: Xây dựng khối CNN & Max Pooling 2x2",
      description: "Định nghĩa một khối CNN gồm 1 tầng tích chập Conv2d(in=1, out=16, kernel=3, padding=1) và 1 tầng MaxPool2d(2, 2).",
      starterCode: `import torch
import torch.nn as nn

class ConvNetBlock(nn.Module):
    def __init__(self):
        super().__init__()
        self.conv = nn.Conv2d(in_channels=1, out_channels=16, kernel_size=3, padding=1)
        self.relu = nn.ReLU()
        self.pool = nn.MaxPool2d(kernel_size=2, stride=2)
        
    def forward(self, x):
        return self.pool(self.relu(self.conv(x)))

net = ConvNetBlock()
x = torch.randn(1, 1, 28, 28)
out = net(x)
print("Kích thước Feature Map đầu ra:", out.shape)
`,
      solution: `import torch
import torch.nn as nn

class ConvNetBlock(nn.Module):
    def __init__(self):
        super().__init__()
        self.conv = nn.Conv2d(in_channels=1, out_channels=16, kernel_size=3, padding=1)
        self.relu = nn.ReLU()
        self.pool = nn.MaxPool2d(kernel_size=2, stride=2)
        
    def forward(self, x):
        return self.pool(self.relu(self.conv(x)))

net = ConvNetBlock()
x = torch.randn(1, 1, 28, 28)
out = net(x)
print(f"Đầu ra: {out.shape} -> Khớp chuẩn kích thước (1, 16, 14, 14) sau MaxPool!")
`,
      hint: "Padding=1 giữ nguyên kích thước 28x28, sau MaxPool stride=2 giảm một nửa còn 14x14."
    }
  },

  // ===================== CHƯƠNG 5 (DEEP LEARNING HANDBOOK) =====================
  "lesson-dl-ch5": {
    quiz: {
      question: "Trong công thức Scaled Dot-Product Attention của Transformer, mục đích của việc chia cho căn bậc hai của số chiều (sqrt(d_k)) là gì?",
      options: [
        "Để tăng tốc độ nhân hai ma trận.",
        "Để chuẩn hóa giá trị tích vô hướng, giữ cho gradient của hàm Softmax không bị tiêu biến.",
        "Để loại bỏ hoàn toàn ma trận Value.",
        "Để thay thế cho tầng mã hóa vị trí Positional Encoding."
      ],
      correctIndex: 1,
      explanation: "Chính xác! Khi chiều d_k lớn, tích vô hướng Q*K^T sẽ có giá trị rất lớn, đẩy hàm Softmax vào vùng bão hòa có đạo hàm cực nhỏ. Việc chia cho căn bậc hai d_k giúp ổn định phân bố giá trị và giữ gradient ổn định."
    },
    challenge: {
      title: "Thực hành PyTorch: Khởi tạo Multi-Head Attention",
      description: "Sử dụng lớp `nn.MultiheadAttention(embed_dim=512, num_heads=8)` và truyền qua bộ tensor Q, K, V có chiều (Seq_len=10, Batch=2, Embed=512).",
      starterCode: `import torch
import torch.nn as nn

multihead_attn = nn.MultiheadAttention(embed_dim=512, num_heads=8)

q = torch.randn(10, 2, 512)
k = torch.randn(10, 2, 512)
v = torch.randn(10, 2, 512)

attn_output, attn_weights = multihead_attn(q, k, v)
print("Kích thước đầu ra Attention Output:", attn_output.shape)
`,
      solution: `import torch
import torch.nn as nn

multihead_attn = nn.MultiheadAttention(embed_dim=512, num_heads=8)

q = torch.randn(10, 2, 512)
k = torch.randn(10, 2, 512)
v = torch.randn(10, 2, 512)

attn_output, attn_weights = multihead_attn(q, k, v)
print(f"Kích thước Attention Output: {attn_output.shape} (Kỳ vọng: [10, 2, 512])")
`,
      hint: "Khởi tạo `nn.MultiheadAttention(embed_dim=512, num_heads=8)`."
    }
  },

  // ===================== MODULE 1: SUPERVISED LEARNING =====================
  "lesson-sup-reg": {
    quiz: {
      question: "Kỹ thuật chuẩn hóa Lasso Regression (L1 Regularization) có ưu điểm nổi bật gì so với Ridge Regression (L2)?",
      options: [
        "Lasso có thể triệt tiêu các trọng số không quan trọng về đúng bằng 0, đóng vai trò như bộ chọn lọc đặc trưng (Feature Selection).",
        "Lasso chỉ dùng cho ảnh, không dùng cho bảng dữ liệu.",
        "Lasso làm tăng số chiều dữ liệu lên gấp đôi.",
        "Lasso luôn luôn không bị lỗi phân kỳ."
      ],
      correctIndex: 0,
      explanation: "Chính xác! Chuẩn hóa L1 có tính chất hình học với các góc nhọn trên trục tọa độ, ép các trọng số của đặc trưng không quan trọng về đúng 0."
    },
    challenge: {
      title: "Thực hành: Huấn luyện Hồi quy Đa thức (Polynomial Regression)",
      description: "Huấn luyện mô hình hồi quy bậc 2 với PolynomialFeatures và LinearRegression để dự đoán giá trị tại x = 6.",
      starterCode: `from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
import numpy as np

X = np.array([[1], [2], [3], [4], [5]])
y = np.array([1.5, 4.2, 9.1, 16.2, 25.1])

poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)

model = LinearRegression().fit(X_poly, y)
pred = model.predict(poly.transform([[6]]))
print("Dự đoán tại x = 6:", pred[0])
`,
      solution: `from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
import numpy as np

X = np.array([[1], [2], [3], [4], [5]])
y = np.array([1.5, 4.2, 9.1, 16.2, 25.1])

poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)

model = LinearRegression().fit(X_poly, y)
pred = model.predict(poly.transform([[6]]))

print(f"Dự đoán tại x = 6: {pred[0]:.2f} (Kỳ vọng xấp xỉ 36.0)")
`,
      hint: "Sử dụng `PolynomialFeatures(degree=2)` và `LinearRegression().fit(X_poly, y)`."
    }
  },

  "lesson-sup-clf": {
    quiz: {
      question: "Thuật toán Phân loại nào hoạt động dựa trên việc tìm một siêu phẳng (Hyperplane) phân cách tối ưu sao cho khoảng cách lề (Margin) giữa hai lớp là lớn nhất?",
      options: [
        "Decision Trees",
        "Naive Bayes",
        "Support Vector Machine (SVM)",
        "k-Nearest Neighbors (k-NN)"
      ],
      correctIndex: 2,
      explanation: "Chính xác! SVM tối đa hóa khoảng cách Margin giữa siêu phẳng phân cách và các điểm vector hỗ trợ (Support Vectors) gần nhất của mỗi lớp."
    },
    challenge: {
      title: "Thực hành: So sánh độ chính xác của Decision Tree và k-NN",
      description: "Huấn luyện DecisionTreeClassifier và KNeighborsClassifier trên tập dữ liệu mẫu và in ra độ chính xác của 2 mô hình.",
      starterCode: `from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier

X, y = load_iris(return_X_y=True)

dt = DecisionTreeClassifier(max_depth=3).fit(X, y)
knn = KNeighborsClassifier(n_neighbors=3).fit(X, y)

print("Độ chính xác Decision Tree:", dt.score(X, y))
print("Độ chính xác k-NN:         ", knn.score(X, y))
`,
      solution: `from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier

X, y = load_iris(return_X_y=True)

dt = DecisionTreeClassifier(max_depth=3).fit(X, y)
knn = KNeighborsClassifier(n_neighbors=3).fit(X, y)

print(f"Decision Tree Accuracy: {dt.score(X, y)*100:.2f}%")
print(f"k-NN Accuracy:          {knn.score(X, y)*100:.2f}%")
`,
      hint: "Sử dụng phương thức `.score(X, y)` của Scikit-learn."
    }
  },

  // ===================== MODULE 2: UNSUPERVISED LEARNING =====================
  "lesson-unsup-clustering": {
    quiz: {
      question: "Thuật toán phân cụm nào sau đây có khả năng tự động phát hiện các cụm có hình dạng bất kỳ và tự động loại bỏ các điểm nhiễu ngoại lai (Outliers)?",
      options: [
        "K-Means",
        "DBSCAN",
        "Fuzzy C-Means",
        "Linear Regression"
      ],
      correctIndex: 1,
      explanation: "Chính xác! DBSCAN phân cụm theo mật độ lân cận trong bán kính epsilon, các điểm không thuộc vùng mật độ cao sẽ bị gắn nhãn là nhiễu (-1)."
    },
    challenge: {
      title: "Thực hành: Phân cụm K-Means và in vị trí tâm cụm",
      description: "Sử dụng KMeans(n_clusters=3) để phân cụm tập dữ liệu make_blobs và xuất tọa độ tâm cụm cluster_centers_.",
      starterCode: `from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs

X, _ = make_blobs(n_samples=150, centers=3, random_state=42)
km = KMeans(n_clusters=3, random_state=42).fit(X)

print("Tọa độ 3 tâm cụm K-Means:\\n", km.cluster_centers_)
`,
      solution: `from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs

X, _ = make_blobs(n_samples=150, centers=3, random_state=42)
km = KMeans(n_clusters=3, random_state=42).fit(X)

print("Tọa độ 3 tâm cụm K-Means:\\n", km.cluster_centers_)
`,
      hint: "Sử dụng `km.cluster_centers_` để lấy tọa độ tâm cụm."
    }
  },

  "lesson-unsup-dim-rules": {
    quiz: {
      question: "Trong khai phá luật kết hợp (Association Rules), chỉ số Lift = P(A & B) / (P(A) * P(B)) > 1 có ý nghĩa gì?",
      options: [
        "Hai sự kiện A và B độc lập hoàn toàn với nhau.",
        "Việc mua món đồ A làm tăng khả năng mua thêm món đồ B trong cùng một giao dịch.",
        "Món đồ A và B xung đột nhau, không bao giờ được mua cùng lúc.",
        "Dữ liệu có quá nhiều giá trị khuyết."
      ],
      correctIndex: 1,
      explanation: "Chính xác! Lift > 1 thể hiện quy luật tương quan dương: Sự xuất hiện của món hàng A thúc đẩy đáng kể việc khách hàng chọn mua thêm món hàng B."
    },
    challenge: {
      title: "Thực hành: Nén giảm số chiều từ 4D xuống 2D bằng PCA",
      description: "Sử dụng PCA(n_components=2) trên tập dữ liệu Iris và kiểm tra tỷ lệ phương sai tích lũy được bảo toàn.",
      starterCode: `from sklearn.decomposition import PCA
from sklearn.datasets import load_iris
import numpy as np

X, _ = load_iris(return_X_y=True)

pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)

variance_ratio = np.sum(pca.explained_variance_ratio_)
print("Kích thước sau khi giảm chiều:", X_pca.shape)
print(f"Tổng phương sai giữ lại: {variance_ratio*100:.2f}%")
`,
      solution: `from sklearn.decomposition import PCA
from sklearn.datasets import load_iris
import numpy as np

X, _ = load_iris(return_X_y=True)

pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)

variance_ratio = np.sum(pca.explained_variance_ratio_)
print(f"Kích thước sau PCA: {X_pca.shape}")
print(f"Tỷ lệ phương sai giữ lại: {variance_ratio*100:.2f}% (Kỳ vọng > 95%)")
`,
      hint: "Gọi `pca.explained_variance_ratio_` để xem tỷ lệ phương sai của từng thành phần chính."
    }
  },

  // ===================== MODULE 3: ENSEMBLE LEARNING =====================
  "lesson-ensemble-all": {
    quiz: {
      question: "Thuật toán Boosting nào sau đây nổi tiếng với cơ chế phân nhánh theo dạng lá (Leaf-wise), sử dụng kỹ thuật GOSS và EFB giúp tốc độ huấn luyện siêu nhanh trên tập dữ liệu lớn?",
      options: [
        "Random Forest",
        "AdaBoost",
        "LightGBM",
        "Linear Regression"
      ],
      correctIndex: 2,
      explanation: "Chính xác! LightGBM sử dụng kỹ thuật GOSS (Gradient-based One-Side Sampling) và EFB (Exclusive Feature Bundling) kết hợp phân nhánh Leaf-wise để đạt tốc độ vượt trội."
    },
    challenge: {
      title: "Thực hành: Huấn luyện Random Forest và Đánh giá Feature Importance",
      description: "Huấn luyện RandomForestClassifier và in ra mức độ quan trọng (Feature Importances) của các đặc trưng.",
      starterCode: `from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris

data = load_iris()
X, y = data.data, data.target

rf = RandomForestClassifier(n_estimators=100, random_state=42).fit(X, y)

for name, imp in zip(data.feature_names, rf.feature_importances_):
    print(f"- {name:25}: {imp*100:.2f}%")
`,
      solution: `from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris

data = load_iris()
X, y = data.data, data.target

rf = RandomForestClassifier(n_estimators=100, random_state=42).fit(X, y)

print("=== MỨC ĐỘ QUAN TRỌNG CỦA ĐẶC TRƯNG (FEATURE IMPORTANCE) ===")
for name, imp in zip(data.feature_names, rf.feature_importances_):
    print(f"- {name:25}: {imp*100:.2f}%")
`,
      hint: "Truy cập thuộc tính `rf.feature_importances_` sau khi fit mô hình."
    }
  },

  // ===================== MODULE 4: SEMI-SUPERVISED & TRANSFER LEARNING =====================
  "lesson-semi-self-transfer": {
    quiz: {
      question: "Phương pháp học tự giám sát BYOL (Bootstrap Your Own Latent) đạt được bước đột phá gì so với Contrastive Learning cổ điển (SimCLR)?",
      options: [
        "BYOL học biểu diễn mà không cần các cặp mẫu âm (Negative Samples), tránh sự sụp đổ biểu diễn (Representation Collapse) qua cập nhật EMA.",
        "BYOL chỉ chạy được trên CPU, không chạy được trên GPU.",
        "BYOL yêu cầu 100% dữ liệu phải có nhãn sẵn từ chuyên gia.",
        "BYOL thay thế hoàn toàn mạng nơ-ron bằng cây quyết định."
      ],
      correctIndex: 0,
      explanation: "Chính xác! BYOL sử dụng kiến trúc hai mạng Online Network và Target Network cập nhật theo Exponential Moving Average (EMA) giúp mô hình tự học biểu diễn phong phú mà không cần tập mẫu âm phức tạp."
    },
    challenge: {
      title: "Thực hành: Tính toán hàm mất mát tương phản Cosine Loss",
      description: "Viết hàm tính độ tương đồng Cosine giữa 2 vector biểu diễn v1 và v2 được sinh ra từ cùng 1 ảnh gốc.",
      starterCode: `import numpy as np

def cosine_similarity(v1, v2):
    return np.dot(v1, v2) / (np.linalg.norm(v1) * np.linalg.norm(v2))

v1 = np.array([0.5, 0.5, 0.5, 0.5])
v2 = np.array([0.48, 0.52, 0.51, 0.49])

sim = cosine_similarity(v1, v2)
print("Độ tương đồng biểu diễn Cosine:", round(sim, 4))
`,
      solution: `import numpy as np

def cosine_similarity(v1, v2):
    return np.dot(v1, v2) / (np.linalg.norm(v1) * np.linalg.norm(v2))

v1 = np.array([0.5, 0.5, 0.5, 0.5])
v2 = np.array([0.48, 0.52, 0.51, 0.49])

sim = cosine_similarity(v1, v2)
print(f"Độ tương đồng biểu diễn Cosine: {sim:.4f} (Kỳ vọng ~ 0.999)")
`,
      hint: "Áp dụng công thức `np.dot(v1, v2) / (np.linalg.norm(v1) * np.linalg.norm(v2))`."
    }
  },

  // ===================== MODULE 5: GRAPH NEURAL NETWORKS (GNN) =====================
  "lesson-gnn-autoencoders": {
    quiz: {
      question: "Trong mạng nơ-ron đồ thị GAT (Graph Attention Networks), điểm cải tiến vượt trội so với GCN (Graph Convolutional Networks) là gì?",
      options: [
        "GAT áp dụng cơ chế Attention tự động tính toán trọng số quan trọng động (alpha_ij) cho từng liên kết lân cận thay vì dùng trọng số cố định.",
        "GAT không sử dụng ma trận kề đồ thị.",
        "GAT chỉ dùng được cho ảnh xám 2D.",
        "GAT loại bỏ hoàn toàn các lớp kích hoạt phi tuyến."
      ],
      correctIndex: 0,
      explanation: "Chính xác! GAT sử dụng cơ chế Self-Attention để tính trọng số alpha_ij cho mỗi cạnh, cho phép mô hình tập trung chú ý vào các nút lân cận quan trọng nhất đối với nút hiện tại."
    },
    challenge: {
      title: "Thực hành: Khởi tạo mô hình Autoencoder nén đặc trưng",
      description: "Xây dựng một Autoencoder đơn giản bằng PyTorch nén dữ liệu từ 64 chiều xuống 8 chiều và phục hồi lại 64 chiều.",
      starterCode: `import torch
import torch.nn as nn

class DenseAutoencoder(nn.Module):
    def __init__(self):
        super().__init__()
        self.encoder = nn.Sequential(nn.Linear(64, 8), nn.ReLU())
        self.decoder = nn.Sequential(nn.Linear(8, 64), nn.Sigmoid())
    def forward(self, x):
        return self.decoder(self.encoder(x))

model = DenseAutoencoder()
x = torch.randn(2, 64)
recon = model(x)
print("Kích thước đầu ra tái tạo:", recon.shape)
`,
      solution: `import torch
import torch.nn as nn

class DenseAutoencoder(nn.Module):
    def __init__(self):
        super().__init__()
        self.encoder = nn.Sequential(nn.Linear(64, 8), nn.ReLU())
        self.decoder = nn.Sequential(nn.Linear(8, 64), nn.Sigmoid())
    def forward(self, x):
        return self.decoder(self.encoder(x))

model = DenseAutoencoder()
x = torch.randn(2, 64)
recon = model(x)
print(f"Kích thước đầu ra: {recon.shape} (Kỳ vọng: [2, 64])")
`,
      hint: "Tầng encoder nhận 64 ra 8, decoder nhận 8 ra 64."
    }
  },

  // ===================== MODULE 6: TRANSFORMERS =====================
  "lesson-transformer-models": {
    quiz: {
      question: "Mô hình ngôn ngữ lớn LLaMA sử dụng cơ chế mã hóa vị trí hiện đại nào thay thế cho Positional Encoding lượng giác truyền thống?",
      options: [
        "Rotary Position Embedding (RoPE)",
        "One-Hot Encoding",
        "Min-Max Normalization",
        "Convolutional Kernel"
      ],
      correctIndex: 0,
      explanation: "Chính xác! LLaMA và các mô hình LLM hiện đại sử dụng RoPE (Rotary Position Embedding) kết hợp thông tin vị trí tương đối trực tiếp vào ma trận Query và Key qua phép quay ma trận 2D."
    },
    challenge: {
      title: "Thực hành: Mô phỏng chia ảnh thành Visual Tokens trong Vision Transformer (ViT)",
      description: "Tính toán số lượng token mảnh ảnh (Patch Tokens) thu được khi cắt bức ảnh kích thước 224x224 thành các mảnh 16x16.",
      starterCode: `image_size = 224
patch_size = 16

# TODO: Tính số mảnh num_patches = (image_size // patch_size) ** 2
num_patches = (image_size // patch_size) ** 2
print("Số lượng Patch Tokens của ảnh:", num_patches)
`,
      solution: `image_size = 224
patch_size = 16

num_patches = (image_size // patch_size) ** 2
# (224 // 16) = 14 -> 14 * 14 = 196
print(f"Số lượng Patch Tokens của ảnh: {num_patches} (Kỳ vọng: 196)")
`,
      hint: "Mỗi chiều có `224 // 16 = 14` mảnh, tổng cộng `14 * 14 = 196` mảnh."
    }
  },

  // ===================== MODULE 7: GENERATIVE AI =====================
  "lesson-genai-full": {
    quiz: {
      question: "Trong kiến trúc Diffusion Models (Mô hình khuếch tán tạo ảnh như Stable Diffusion), quá trình Reverse Process (khử nhiễu) được thực hiện bởi mạng nơ-ron nào?",
      options: [
        "Mạng tích chập 1D thuần túy",
        "Mạng U-Net hoặc DiT (Diffusion Transformer) dự đoán lượng nhiễu cần loại bỏ ở mỗi bước thời gian",
        "Cây quyết định Decision Tree",
        "Mô hình hồi quy Logistic"
      ],
      correctIndex: 1,
      explanation: "Chính xác! Trong Diffusion Models, mạng U-Net hoặc DiT được huấn luyện để dự đoán vector nhiễu epsilon_theta tại mỗi bước thời gian t để từng bước phục hồi lại ảnh rõ nét từ nhiễu Gaussian."
    },
    challenge: {
      title: "Thực hành: Mô phỏng thêm nhiễu Gauss (Forward Diffusion Step)",
      description: "Viết hàm thêm nhiễu Gaussian vào tín hiệu đầu vào theo công thức x_t = sqrt(1 - beta) * x_0 + sqrt(beta) * noise.",
      starterCode: `import numpy as np

def add_noise(x_0, beta=0.1):
    noise = np.random.randn(*x_0.shape)
    x_t = np.sqrt(1.0 - beta) * x_0 + np.sqrt(beta) * noise
    return x_t, noise

x_original = np.array([1.0, 2.0, 3.0, 4.0])
x_noisy, noise = add_noise(x_original, beta=0.2)

print("Tín hiệu gốc:    ", x_original)
print("Tín hiệu bị nhiễu:", np.round(x_noisy, 3))
`,
      solution: `import numpy as np

def add_noise(x_0, beta=0.1):
    noise = np.random.randn(*x_0.shape)
    x_t = np.sqrt(1.0 - beta) * x_0 + np.sqrt(beta) * noise
    return x_t, noise

x_original = np.array([1.0, 2.0, 3.0, 4.0])
x_noisy, noise = add_noise(x_original, beta=0.2)

print("Tín hiệu gốc:    ", x_original)
print("Tín hiệu bị nhiễu:", np.round(x_noisy, 3))
`,
      hint: "Sử dụng `np.sqrt(1.0 - beta) * x_0 + np.sqrt(beta) * noise`."
    }
  },

  // ===================== MODULE 8: REINFORCEMENT LEARNING =====================
  "lesson-rl-full": {
    quiz: {
      question: "Thuật toán học tăng cường PPO (Proximal Policy Optimization) sử dụng cơ chế nào để đảm bảo quá trình cập nhật chính sách không làm sụp đổ hiệu suất của mô hình?",
      options: [
        "Hàm mục tiêu kẹp tỉ lệ xác suất (Clipped Surrogate Objective) giới hạn bước cập nhật trong khoảng [1 - epsilon, 1 + epsilon]",
        "Loại bỏ hoàn toàn hàm phần thưởng Reward",
        "Chỉ cập nhật 1 tham số duy nhất ở mỗi epoch",
        "Chuyển đổi toàn bộ môi trường về dạng bảng Q-table 2D"
      ],
      correctIndex: 0,
      explanation: "Chính xác! PPO sử dụng hàm mục tiêu Clipped Surrogate Objective kẹp tỉ lệ xác suất r_t(theta) trong khoảng [1 - eps, 1 + eps], ngăn chặn việc thay đổi chính sách quá đột ngột, giúp quá trình huấn luyện RLHF cho LLM cực kỳ ổn định."
    },
    challenge: {
      title: "Thực hành: Cập nhật giá trị Q-Learning theo phương trình Bellman",
      description: "Cập nhật giá trị Q(s, a) khi nhận phần thưởng r = 10, giá trị max Q ở trạng thái kế tiếp = 8, gamma = 0.9, alpha = 0.1.",
      starterCode: `Q_sa = 5.0
r = 10.0
gamma = 0.9
max_Q_next = 8.0
alpha = 0.1

Q_sa_new = Q_sa + alpha * (r + gamma * max_Q_next - Q_sa)
print("Giá trị Q(s, a) mới:", round(Q_sa_new, 4))
`,
      solution: `Q_sa = 5.0
r = 10.0
gamma = 0.9
max_Q_next = 8.0
alpha = 0.1

# Target = 10 + 0.9 * 8 = 17.2 -> Error = 17.2 - 5 = 12.2 -> Q_new = 5 + 0.1 * 12.2 = 6.22
Q_sa_new = Q_sa + alpha * (r + gamma * max_Q_next - Q_sa)
print(f"Giá trị Q(s, a) mới: {Q_sa_new:.4f} (Kỳ vọng: 6.2200)")
`,
      hint: "Áp dụng công thức `Q_new = Q + alpha * (r + gamma * max_Q_next - Q)`."
    }
  },

  // ===================== MODULE 9: PROBABILISTIC GRAPHICAL MODELS =====================
  "lesson-pgm-full": {
    quiz: {
      question: "Trong Mô hình Markov Ẩn (Hidden Markov Models - HMM), thuật toán quy hoạch động nào được sử dụng để tìm chuỗi trạng thái ẩn tối ưu nhất sinh ra chuỗi quan sát cho trước?",
      options: [
        "Thuật toán Dijkstra",
        "Thuật toán Viterbi",
        "Thuật toán K-Means",
        "Thuật toán QuickSort"
      ],
      correctIndex: 1,
      explanation: "Chính xác! Thuật toán Viterbi là giải thuật quy hoạch động kinh điển giải bài toán Decoding trong HMM để tìm chuỗi trạng thái ẩn có xác suất xảy ra cao nhất."
    },
    challenge: {
      title: "Thực hành: Tính xác suất hậu nghiệm theo Định lý Bayes",
      description: "Viết hàm tính P(A|B) = P(B|A) * P(A) / P(B) với P(A) = 0.01 (tỷ lệ mắc bệnh), P(B|A) = 0.95 (độ nhạy xét nghiệm), P(B) = 0.05 (tổng tỷ lệ dương tính).",
      starterCode: `P_A = 0.01
P_B_given_A = 0.95
P_B = 0.05

P_A_given_B = (P_B_given_A * P_A) / P_B
print(f"Xác suất người có kết quả dương tính thực sự mắc bệnh: {P_A_given_B*100:.2f}%")
`,
      solution: `P_A = 0.01
P_B_given_A = 0.95
P_B = 0.05

# P(A|B) = (0.95 * 0.01) / 0.05 = 0.0095 / 0.05 = 0.19 (19%)
P_A_given_B = (P_B_given_A * P_A) / P_B
print(f"Xác suất thực sự mắc bệnh khi dương tính: {P_A_given_B*100:.2f}% (Kỳ vọng: 19.00%)")
`,
      hint: "Áp dụng công thức Bayes `(P_B_given_A * P_A) / P_B`."
    }
  }
};
