// ML Learning Hub - Exercises, Quizzes & Coding Challenges Database
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
      title: "Bài toán định lượng & Lập trình: Nơ-ron đơn lẻ (Perceptron) với PyTorch",
      description: "Cho đầu vào x = [2.0, -1.5, 3.0], trọng số w = [0.4, 0.8, -0.2], bias b = 0.5. Hãy viết code tính tổng tuyến tính z = w^T*x + b và kích hoạt ReLU y = max(0, z).",
      starterCode: `import torch
import torch.nn as nn

# TODO: Khởi tạo x, w, b và tính toán đầu ra y qua ReLU
x = torch.tensor([2.0, -1.5, 3.0])
w = torch.tensor([0.4, 0.8, -0.2])
b = torch.tensor(0.5)

# Tính tổng tuyến tính z
z = torch.dot(w, x) + b
# Kích hoạt ReLU
y = torch.relu(z)

print("Tổng tuyến tính z:", z.item())
print("Đầu ra nơ-ron y:", y.item())
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
      title: "Bài toán định lượng & Lập trình: Lan truyền ngược (Backpropagation) với Autograd",
      description: "Tính đạo hàm d(loss)/dx tự động với PyTorch cho hàm Loss = y^2 với y = 3x^2 + 2x + 1 tại điểm x = 1.0.",
      starterCode: `import torch

# Khởi tạo biến x có tính gradient
x = torch.tensor([1.0], requires_grad=True)

# Lan truyền xuôi Forward
y = 3 * (x ** 2) + 2 * x + 1
loss = y ** 2

# Lan truyền ngược Backward
loss.backward()

print("Giá trị Loss:", loss.item())
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
      hint: "Sử dụng hàm `loss.backward()` và đọc kết quả tại `x.grad`."
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
      title: "Bài toán định lượng & Lập trình: Tính lỗi Binary Cross Entropy (BCE)",
      description: "Mô hình dự đoán xác suất y_hat = 0.8 cho nhãn thực tế y = 1. Hãy viết code tính lỗi BCE = -[y*log(y_hat) + (1-y)*log(1-y_hat)].",
      starterCode: `import numpy as np

y_true = 1.0
y_pred = 0.8

# TODO: Tính lỗi BCE
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
      title: "Bài toán định lượng & Lập trình: Xây dựng khối CNN & Max Pooling trong PyTorch",
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
x = torch.randn(1, 1, 28, 28) # Ảnh đầu vào 28x28
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
print(f"Đầu ra: {out.shape} -> Chuẩn xác kích thước 14x14 sau MaxPool!")
`,
      hint: "Qua Conv2d padding=1 kích thước giữ nguyên 28x28, sau MaxPool stride=2 giảm một nửa còn 14x14."
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
      title: "Bài toán định lượng & Lập trình: Khởi tạo Multi-Head Attention trong PyTorch",
      description: "Sử dụng lớp `nn.MultiheadAttention(embed_dim=512, num_heads=8)` và truyền qua bộ tensor Q, K, V có chiều (Seq_len=10, Batch=2, Embed=512).",
      starterCode: `import torch
import torch.nn as nn

# Khởi tạo Multihead Attention
multihead_attn = nn.MultiheadAttention(embed_dim=512, num_heads=8)

q = torch.randn(10, 2, 512)
k = torch.randn(10, 2, 512)
v = torch.randn(10, 2, 512)

attn_output, attn_weights = multihead_attn(q, k, v)
print("Kích thước đầu ra của Attention Output:", attn_output.shape)
`,
      solution: `import torch
import torch.nn as nn

multihead_attn = nn.MultiheadAttention(embed_dim=512, num_heads=8)

q = torch.randn(10, 2, 512)
k = torch.randn(10, 2, 512)
v = torch.randn(10, 2, 512)

attn_output, attn_weights = multihead_attn(q, k, v)
print(f"Kích thước Attention: {attn_output.shape} (Khớp chuẩn: [10, 2, 512])")
`,
      hint: "Khởi tạo `nn.MultiheadAttention(embed_dim=512, num_heads=8)`."
    }
  },

  // ===================== CÁC MODULE MACHINE LEARNING CỔ ĐIỂN =====================
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
      explanation: "Chính xác! Chuẩn hóa L1 có tính chất toán học ép trọng số của các biến không quan trọng về 0."
    },
    challenge: {
      title: "Thực hành: Tính sai số MSE",
      description: "Hoàn thiện hàm tính Mean Squared Error giữa y_true và y_pred.",
      starterCode: `import numpy as np

def calculate_mse(y_true, y_pred):
    return np.mean((y_true - y_pred) ** 2)

y_true = np.array([10.0, 20.0, 30.0])
y_pred = np.array([12.0, 19.0, 32.0])
print("MSE:", calculate_mse(y_true, y_pred))
`,
      solution: `import numpy as np
def calculate_mse(y_true, y_pred):
    return np.mean((y_true - y_pred) ** 2)
print("MSE:", calculate_mse(np.array([10.0, 20.0, 30.0]), np.array([12.0, 19.0, 32.0])))
`,
      hint: "Dùng `np.mean((y_true - y_pred) ** 2)`."
    }
  }
};
