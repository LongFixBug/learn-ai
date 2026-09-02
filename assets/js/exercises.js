// ML Learning Hub - Exercises, Quizzes & Coding Challenges Database
window.ML_EXERCISES = {
  "lesson-1": {
    quiz: {
      question: "Trong thuật toán Hạ Gradient (Gradient Descent), nếu chọn Learning Rate (tốc độ học) quá lớn thì điều gì có thể xảy ra?",
      options: [
        "Mô hình hội tụ về điểm cực tiểu toàn cục nhanh hơn bình thường.",
        "Mô hình có thể bị dao động mạnh và phân kỳ (bắn ra khỏi điểm cực tiểu, hàm mất mát tăng dần).",
        "Trọng số của mô hình bị triệt tiêu về đúng số 0 ngay sau bước đầu tiên.",
        "Mô hình tự động chuyển sang giải thuật phân tích thành phần chính PCA."
      ],
      correctIndex: 1,
      explanation: "Chính xác! Khi Learning Rate (tốc độ học - kích thước bước nhảy cập nhật trọng số) quá lớn, bước cập nhật sẽ vượt qua thung lũng cực tiểu của hàm mất mát, gây hiện tượng dao động (overshooting) và làm hàm mất mát phân kỳ không hội tụ được."
    },
    challenge: {
      title: "Thực hành 1: Viết hàm tính sai số MSE (Mean Squared Error)",
      description: "Hãy hoàn thiện hàm `calculate_mse(y_true, y_pred)` nhận vào 2 mảng NumPy `y_true` (giá trị thực tế) và `y_pred` (giá trị dự đoán), trả về giá trị trung bình bình phương sai số MSE.",
      starterCode: `import numpy as np

def calculate_mse(y_true, y_pred):
    # TODO: Tính toán công thức MSE = (1/N) * sum((y_true - y_pred)^2)
    # Gợi ý: Sử dụng np.mean() và toán tử ** 2
    pass

# Kiểm thử với dữ liệu mẫu
y_true = np.array([10.0, 20.0, 30.0, 40.0])
y_pred = np.array([12.0, 19.0, 32.0, 38.0])

result = calculate_mse(y_true, y_pred)
print("Kết quả MSE của bạn:", result)
`,
      solution: `import numpy as np

def calculate_mse(y_true, y_pred):
    return np.mean((y_true - y_pred) ** 2)

y_true = np.array([10.0, 20.0, 30.0, 40.0])
y_pred = np.array([12.0, 19.0, 32.0, 38.0])

result = calculate_mse(y_true, y_pred)
print("Kết quả MSE chuẩn xác:", result) # Kỳ vọng: 3.25
`,
      hint: "Hãy lấy hiệu `(y_true - y_pred)` sau đó bình phương `** 2` và tính trung bình với `np.mean()`."
    }
  },
  "lesson-3": {
    quiz: {
      question: "Kỹ thuật chuẩn hóa Lasso Regression (L1 Regularization) có ưu điểm nổi bật gì so với Ridge Regression (L2 Regularization)?",
      options: [
        "Lasso có thể ép các trọng số không quan trọng về đúng bằng 0, đóng vai trò như một bộ chọn lọc đặc trưng (Feature Selection).",
        "Lasso chỉ hoạt động được trên dữ liệu ảnh, không dùng được cho bảng số.",
        "Lasso luôn cho hàm mất mát không bao giờ bị Overfitting.",
        "Lasso làm tăng số chiều của dữ liệu lên gấp đôi."
      ],
      correctIndex: 0,
      explanation: "Chính xác! Chuẩn hóa L1 (Lasso) sử dụng tổng giá trị tuyệt đối $|w_j|$ làm hình phạt, có đặc tính toán học ép các trọng số của các đặc trưng ít quan trọng về thẳng số 0, từ đó giúp tự động chọn lọc các đặc trưng có giá trị nhất."
    },
    challenge: {
      title: "Thực hành 3: Huấn luyện Hồi quy Tuyến tính với Scikit-learn",
      description: "Viết hàm huấn luyện mô hình `LinearRegression`, dự đoán trên tập kiểm thử và in ra điểm số R2 Score.",
      starterCode: `from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score
import numpy as np

# Tạo dữ liệu
X_train = np.array([[1], [2], [3], [4], [5]])
y_train = np.array([2.1, 3.9, 6.2, 8.1, 9.9])

X_test = np.array([[6], [7]])
y_test = np.array([12.0, 14.1])

# TODO: Khởi tạo mô hình, fit dữ liệu và tính r2_score
# model = ...
`,
      solution: `from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score
import numpy as np

X_train = np.array([[1], [2], [3], [4], [5]])
y_train = np.array([2.1, 3.9, 6.2, 8.1, 9.9])

X_test = np.array([[6], [7]])
y_test = np.array([12.0, 14.1])

model = LinearRegression()
model.fit(X_train, y_train)

preds = model.predict(X_test)
score = r2_score(y_test, preds)

print("Hệ số góc (slope):", model.coef_[0])
print("Hệ số chặn (intercept):", model.intercept_)
print(f"R2 Score trên tập test: {score:.4f}")
`,
      hint: "Sử dụng `model = LinearRegression()`, sau đó gọi `model.fit(X_train, y_train)` và `model.predict(X_test)`."
    }
  },
  "lesson-4": {
    quiz: {
      question: "Trong bài toán chẩn đoán bệnh hiểm nghèo (nơi việc bỏ sót một ca bệnh có thể dẫn đến nguy hiểm tính mạng), ta cần ưu tiên tối đa chỉ số đánh giá nào?",
      options: [
        "Accuracy (Độ chính xác tổng quan)",
        "Recall (Độ bao phủ / Độ nhạy phát hiện ca bệnh thực tế)",
        "Precision (Độ chuẩn xác khi dự đoán dương tính)",
        "Training Time (Thời gian huấn luyện)"
      ],
      correctIndex: 1,
      explanation: "Chính xác! Recall = TP / (TP + FN). Trong y tế, chỉ số FN (False Negative - người bị bệnh nhưng mô hình dự đoán là bình thường) cực kỳ nguy hiểm. Do đó ta cần tối đa hóa Recall để không bỏ lọt bất kỳ bệnh nhân nào."
    },
    challenge: {
      title: "Thực hành 4: Xây dựng Ma trận nhầm lẫn (Confusion Matrix) & Tính F1-Score",
      description: "Sử dụng `sklearn.metrics` để tính toán Precision, Recall và F1-Score cho tập nhãn thực tế và nhãn dự đoán.",
      starterCode: `from sklearn.metrics import precision_score, recall_score, f1_score
import numpy as np

y_true = np.array([1, 1, 0, 1, 0, 0, 1, 0, 1, 0])
y_pred = np.array([1, 1, 0, 0, 0, 0, 1, 1, 1, 0])

# TODO: Tính precision, recall, f1
`,
      solution: `from sklearn.metrics import precision_score, recall_score, f1_score
import numpy as np

y_true = np.array([1, 1, 0, 1, 0, 0, 1, 0, 1, 0])
y_pred = np.array([1, 1, 0, 0, 0, 0, 1, 1, 1, 0])

prec = precision_score(y_true, y_pred)
rec = recall_score(y_true, y_pred)
f1 = f1_score(y_true, y_pred)

print(f"Precision: {prec:.4f}")
print(f"Recall:    {rec:.4f}")
print(f"F1-Score:  {f1:.4f}")
`,
      hint: "Gọi `precision_score(y_true, y_pred)`, `recall_score(y_true, y_pred)` và `f1_score(y_true, y_pred)`."
    }
  },
  "lesson-11": {
    quiz: {
      question: "Trong cơ chế Tự chú ý (Self-Attention) của Transformer, phép chia cho căn bậc hai của số chiều (sqrt(d_k)) có mục đích chính là gì?",
      options: [
        "Để tăng độ phức tạp thuật toán lên O(N^3).",
        "Để tránh các giá trị tích vô hướng quá lớn làm cho đạo hàm của hàm Softmax bị bão hòa (tiêu biến gradient).",
        "Để mã hóa thứ tự vị trí của các từ trong câu.",
        "Để nén câu văn bản lại thành 1 token duy nhất."
      ],
      correctIndex: 1,
      explanation: "Chính xác! Khi chiều không gian d_k lớn, tích vô hướng Q*K^T sẽ có giá trị rất lớn, đẩy hàm Softmax vào vùng bão hòa có đạo hàm cực nhỏ, khiến gradient không thể truyền ngược hiệu quả. Việc chia cho căn bậc hai d_k giúp ổn định phân phối xác suất."
    },
    challenge: {
      title: "Thực hành 11: Tính toán hàm kích hoạt Softmax",
      description: "Tự viết hàm `softmax(x)` cho vector số thực 1D không sử dụng thư viện ngoài.",
      starterCode: `import numpy as np

def custom_softmax(x):
    # TODO: Viết hàm softmax = exp(x - max(x)) / sum(exp(x - max(x)))
    pass

scores = np.array([2.0, 1.0, 0.1])
print("Xác suất Softmax:", custom_softmax(scores))
`,
      solution: `import numpy as np

def custom_softmax(x):
    exp_x = np.exp(x - np.max(x)) # Trừ max để ổn định số học
    return exp_x / np.sum(exp_x)

scores = np.array([2.0, 1.0, 0.1])
probs = custom_softmax(scores)
print("Xác suất Softmax:", np.round(probs, 4))
print("Tổng xác suất:", np.sum(probs))
`,
      hint: "Dùng `np.exp(x - np.max(x))` rồi chia cho `np.sum(...)`."
    }
  },
  "lesson-14": {
    quiz: {
      question: "Kỹ thuật RAG (Retrieval-Augmented Generation) giải quyết trực tiếp điểm yếu nào lớn nhất của các mô hình LLM thuần túy?",
      options: [
        "Giúp mô hình sinh ra hình ảnh với độ phân giải cao hơn 4K.",
        "Khắc phục hiện tượng ảo giác (Hallucination) và thiếu cập nhật tri thức thời gian thực / dữ liệu chuyên biệt của doanh nghiệp.",
        "Giúp mô hình chạy được trên CPU không cần RAM.",
        "Thay thế hoàn toàn ngôn ngữ lập trình Python bằng C++."
      ],
      correctIndex: 1,
      explanation: "Chính xác! LLMs thuần túy chỉ có tri thức đến thời điểm chốt dữ liệu huấn luyện và có thể bịa đặt thông tin (Hallucination). RAG truy xuất tài liệu thực tế từ Vector DB và cung cấp làm ngữ cảnh đáng tin cậy để LLM tổng hợp câu trả lời."
    },
    challenge: {
      title: "Thực hành 14: Tính toán độ tương đồng Cosine giữa các câu hỏi",
      description: "Viết hàm tính Cosine Similarity giữa câu hỏi của người dùng và các vector tài liệu.",
      starterCode: `import numpy as np

def cosine_similarity(v1, v2):
    # TODO: Cosine = dot(v1, v2) / (norm(v1) * norm(v2))
    pass

v_query = np.array([0.8, 0.6])
v_doc1 = np.array([0.8, 0.6])  # Trùng khớp hoàn toàn
v_doc2 = np.array([-0.6, 0.8]) # Vuông góc

print("Độ tương đồng với Doc1 (kỳ vọng 1.0):", cosine_similarity(v_query, v_doc1))
print("Độ tương đồng với Doc2 (kỳ vọng 0.0):", cosine_similarity(v_query, v_doc2))
`,
      solution: `import numpy as np

def cosine_similarity(v1, v2):
    norm1 = np.linalg.norm(v1)
    norm2 = np.linalg.norm(v2)
    if norm1 == 0 or norm2 == 0:
        return 0.0
    return np.dot(v1, v2) / (norm1 * norm2)

v_query = np.array([0.8, 0.6])
v_doc1 = np.array([0.8, 0.6])
v_doc2 = np.array([-0.6, 0.8])

print("Độ tương đồng với Doc1:", round(cosine_similarity(v_query, v_doc1), 4))
print("Độ tương đồng với Doc2:", round(cosine_similarity(v_query, v_doc2), 4))
`,
      hint: "Sử dụng `np.dot(v1, v2)` và hàm tính độ dài vector `np.linalg.norm()`."
    }
  }
};
