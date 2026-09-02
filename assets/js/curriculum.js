// ML Learning Hub - Complete 1-to-1 Mindmap & Deep Learning Comprehensive Handbook (2026 Edition)
window.ML_CURRICULUM = [
  // ===================== PHẦN 1: CẨM NANG DEEP LEARNING CHUYÊN SÂU =====================
  {
    id: "module-dl-handbook",
    title: "🔥 CẨM NANG DEEP LEARNING TOÀN DIỆN (A - Z)",
    description: "Tài liệu chuyên sâu từ cơ bản đến chuyên sâu: ANNs, Perceptron, Backpropagation, Optimizers, CNN, RNN/LSTM và Transformer.",
    icon: "brain-circuit",
    lessons: [
      {
        id: "lesson-dl-ch1",
        title: "Chương 1: Tổng quan Deep Learning & Cơ sở Mạng Nơ-ron (ANNs)",
        summary: "Bản chất của Deep Learning, so sánh ML vs DL, Cấu trúc Perceptron và Quy trình dự đoán 5 bước.",
        content: `
          <h3>1. Deep Learning là gì? Tại sao cần Deep Learning?</h3>
          <p><span class="term-highlight" data-tooltip="Học sâu">Deep Learning (DL - phân ngành chuyên sâu của Trí tuệ Nhân tạo và Machine Learning, mô phỏng cấu trúc nơ-ron của não người qua các mạng nhiều lớp ẩn Hidden Layers)</span> giải quyết triệt để các hạn chế của ML truyền thống:</p>
          <ul>
            <li><strong>Xử lý dữ liệu phi cấu trúc (Unstructured Data)</strong>: Hoạt động xuất sắc trên hình ảnh, âm thanh, văn bản và video quy mô lớn.</li>
            <li><strong><span class="term-highlight" data-tooltip="Tự động học đặc trưng">Automatic Feature Learning (tự động trích xuất các đặc trưng tầng bậc từ mức độ cơ bản như cạnh, góc đến phức tạp mà không cần con người thiết kế thủ công)</span></strong>.</li>
            <li><strong>Hiệu suất tỷ lệ thuận với quy mô dữ liệu (Scalability)</strong>: Khi dữ liệu lên tới hàng Terabyte, Deep Learning tiếp tục cải thiện độ chính xác mà không bị bão hòa sớm như ML cổ điển.</li>
          </ul>

          <h3>2. Bảng so sánh chi tiết: Machine Learning (ML) vs Deep Learning (DL)</h3>
          <table class="w-full text-left text-xs text-slate-300 my-4 border border-slate-700">
            <thead class="bg-slate-800 text-slate-100 font-semibold">
              <tr>
                <th class="p-2 border border-slate-700">Khía cạnh</th>
                <th class="p-2 border border-slate-700">Machine Learning (ML)</th>
                <th class="p-2 border border-slate-700">Deep Learning (DL)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border border-slate-700 font-medium text-blue-400">Feature Engineering</td>
                <td class="p-2 border border-slate-700">Cần kỹ sư thiết kế đặc trưng thủ công</td>
                <td class="p-2 border border-slate-700 text-emerald-400">Tự động học đặc trưng từ dữ liệu thô</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-medium text-blue-400">Yêu cầu dữ liệu</td>
                <td class="p-2 border border-slate-700">Hoạt động tốt với tập dữ liệu vừa và nhỏ</td>
                <td class="p-2 border border-slate-700">Cần lượng dữ liệu khổng lồ (Big Data)</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-medium text-blue-400">Kiến trúc mô hình</td>
                <td class="p-2 border border-slate-700">Mô hình nông (Linear, SVM, Decision Tree)</td>
                <td class="p-2 border border-slate-700">Mạng nơ-ron sâu nhiều tầng (DNNs)</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-medium text-blue-400">Tài nguyên tính toán</td>
                <td class="p-2 border border-slate-700">Ít tốn tài nguyên, chạy tốt trên CPU</td>
                <td class="p-2 border border-slate-700">Cần GPU / TPU song song hóa cực mạnh</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-medium text-blue-400">Ứng dụng tiêu biểu</td>
                <td class="p-2 border border-slate-700">Lọc thư rác, dự báo giá nhà dạng bảng</td>
                <td class="p-2 border border-slate-700">Nhận diện khuôn mặt, xe tự hành, ChatGPT</td>
              </tr>
            </tbody>
          </table>

          <h3>3. Cấu trúc của một Neuron (Perceptron)</h3>
          <div class="p-4 bg-slate-900 border border-slate-800 rounded-lg font-mono text-xs text-slate-300 my-3 leading-relaxed whitespace-pre">
Inputs (x)       Weights (w)
   x1  ---------->  w1 \\
   x2  ---------->  w2  ---> [ Tổng Tuyến Tính z = sum(w*x) + b ] ---> [ Kích hoạt f(z) ] ---> Output (y)
  ...  ----------> ...  /                     ^
   xn  ---------->  wn /                      |
                                           Bias (b)
          </div>

          <div class="my-3 p-4 rounded-lg bg-slate-900 border border-slate-700">
            <h4 class="text-blue-400 font-semibold mb-1">Công thức toán học cốt lõi:</h4>
            $$z = w_1x_1 + w_2x_2 + \\dots + w_nx_n + b = \\sum_{i=1}^{n} w_ix_i + b$$
            $$y = f(z)$$
            <p class="text-xs text-slate-400 mt-2">
              - <strong>Trọng số ($w_i$)</strong>: Kiểm soát mức độ ảnh hưởng của liên kết.<br>
              - <strong>Độ chệch ($b$)</strong>: Cho phép dịch chuyển đồ thị hàm kích hoạt sang trái/phải giúp mô hình khớp dữ liệu linh hoạt.
            </p>
          </div>

          <h3>4. Quy trình dự đoán 5 bước của Neural Network</h3>
          <ol class="list-decimal pl-5 space-y-1.5 text-xs text-slate-300 my-3">
            <li><strong>Input</strong>: Nhập dữ liệu thô vào mạng qua Input Layer.</li>
            <li><strong>Forward Propagation (Lan truyền xuôi)</strong>: Nhân trọng số và áp dụng hàm kích hoạt qua các tầng ẩn để tạo ra dự đoán $\\hat{y}$.</li>
            <li><strong>Output</strong>: Lớp đầu ra trả về giá trị dự đoán $\\hat{y}$.</li>
            <li><strong>Error Calculation (Tính toán lỗi)</strong>: Đo lường độ sai khác giữa $\\hat{y}$ và $y$ qua hàm Loss.</li>
            <li><strong>Backpropagation (Lan truyền ngược)</strong>: Truyền sai số ngược về các tầng trước để tính gradient và cập nhật $w, b$ bằng thuật toán tối ưu.</li>
          </ol>
        `,
        starterCode: `import torch
import torch.nn as nn

# Thiết lập seed cố định
torch.manual_seed(42)

# Khởi tạo dữ liệu đầu vào (batch_size=1, features=3)
x = torch.tensor([[2.0, -1.5, 3.0]])

# Khởi tạo Linear Layer (in_features=3, out_features=1)
linear_layer = nn.Linear(in_features=3, out_features=1)

# Thực hiện phép lan truyền xuôi Forward Pass: z = x * W^T + b
z = linear_layer(x)

print("Trọng số (Weights):", linear_layer.weight.data)
print("Độ chệch (Bias):   ", linear_layer.bias.data)
print("Kết quả đầu ra z:  ", z.item())
`
      },
      {
        id: "lesson-dl-ch2",
        title: "Chương 2: Hàm kích hoạt, Cơ chế Forward & Backpropagation",
        summary: "Tại sao cần tính phi tuyến, so sánh 4 hàm kích hoạt, đạo hàm chuỗi Chain Rule và công thức toán Backprop.",
        content: `
          <h3>1. Tại sao cần Hàm kích hoạt phi tuyến (Activation Functions)?</h3>
          <p>Nếu không có tính phi tuyến, tích của nhiều tầng tuyến tính $W_2(W_1 x + b_1) + b_2$ vẫn chỉ tương đương với một phép nhân ma trận đơn lẻ $W x + b$. Hàm kích hoạt giúp mạng học được các cấu trúc phi tuyến phức tạp trong thế giới thực.</p>

          <h3>2. Chi tiết 4 hàm kích hoạt kinh điển</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3 bg-slate-900 border border-slate-700 rounded-lg">
              <h4 class="font-bold text-emerald-400 mb-1">ReLU: $f(x) = \\max(0, x)$</h4>
              <p><strong>Miền giá trị:</strong> $[0, \\infty)$</p>
              <p><strong>Ưu điểm:</strong> Tính toán siêu nhanh, triệt tiêu hiện tượng tiêu biến gradient ở vùng dương.</p>
              <p><strong>Nhược điểm:</strong> Lỗi Dying ReLU (nơ-ron chết khi đầu vào âm).</p>
              <p><strong>Dùng tốt nhất:</strong> Các lớp ẩn (Hidden Layers) mặc định.</p>
            </div>
            <div class="p-3 bg-slate-900 border border-slate-700 rounded-lg">
              <h4 class="font-bold text-blue-400 mb-1">Sigmoid: $f(x) = \\frac{1}{1 + e^{-x}}$</h4>
              <p><strong>Miền giá trị:</strong> $(0, 1)$</p>
              <p><strong>Ưu điểm:</strong> Nén giá trị về khoảng $(0, 1)$, biểu diễn xác suất hoàn hảo.</p>
              <p><strong>Nhược điểm:</strong> Bão hòa gradient ở 2 đầu, không đối xứng qua 0.</p>
              <p><strong>Dùng tốt nhất:</strong> Lớp ra của phân loại nhị phân.</p>
            </div>
            <div class="p-3 bg-slate-900 border border-slate-700 rounded-lg">
              <h4 class="font-bold text-amber-400 mb-1">Tanh: $f(x) = \\frac{e^x - e^{-x}}{e^x + e^{-x}}$</h4>
              <p><strong>Miền giá trị:</strong> $(-1, 1)$</p>
              <p><strong>Ưu điểm:</strong> Đối xứng qua điểm 0 (zero-centered), hội tụ nhanh hơn Sigmoid.</p>
              <p><strong>Nhược điểm:</strong> Vẫn bị triệt tiêu gradient khi $|x|$ lớn.</p>
              <p><strong>Dùng tốt nhất:</strong> Tầng ẩn RNN và mạng nơ-ron cổ điển.</p>
            </div>
            <div class="p-3 bg-slate-900 border border-slate-700 rounded-lg">
              <h4 class="font-bold text-purple-400 mb-1">Softmax: $f(z_i) = \\frac{e^{z_i}}{\\sum e^{z_j}}$</h4>
              <p><strong>Miền giá trị:</strong> $(0, 1)$, tổng bằng $1.0$</p>
              <p><strong>Ưu điểm:</strong> Biến đổi vector điểm số logits thành phân phối xác suất đa lớp.</p>
              <p><strong>Dùng tốt nhất:</strong> Lớp đầu ra phân loại đa lớp (Multi-class).</p>
            </div>
          </div>

          <h3>3. Công thức toán học Lan truyền ngược (Backpropagation)</h3>
          <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg text-xs space-y-2">
            <p><strong>1. Lỗi tại lớp đầu ra ($L$):</strong></p>
            $$\\text{Với Loss MSE: } \\delta^{[L]} = (\\hat{y} - y) \\odot f'(z^{[L]})$$
            $$\\text{Với Cross-Entropy + Softmax: } \\delta^{[L]} = \\hat{y} - y$$
            <p><strong>2. Lỗi tại lớp ẩn ($l$):</strong></p>
            $$\\delta^{[l]} = \\left( (W^{[l+1]})^T \\delta^{[l+1]} \\right) \\odot f'(z^{[l]})$$
            <p><strong>3. Tính Gradient & Cập nhật tham số:</strong></p>
            $$dW^{[l]} = \\delta^{[l]} (a^{[l-1]})^T, \\quad db^{[l]} = \\delta^{[l]}$$
            $$W^{[l]} = W^{[l]} - \\eta \\cdot dW^{[l]}, \\quad b^{[l]} = b^{[l]} - \\eta \\cdot db^{[l]}$$
          </div>
        `,
        starterCode: `import torch

# Tự động tính gradient qua Autograd & Chain Rule trong PyTorch
x = torch.tensor([1.0], requires_grad=True)

# Lan truyền xuôi Forward: y = 3x^2 + 2x + 1, Loss = y^2
y = 3 * (x ** 2) + 2 * x + 1
loss = y ** 2

# Lan truyền ngược Backward: tính d(loss)/dx
loss.backward()

print("Giá trị y tại x=1.0:   ", y.item())
print("Giá trị Loss:          ", loss.item())
# Đạo hàm giải tích: 2 * y * (6x + 2) = 2 * 6 * 8 = 96
print("Gradient đạo hàm dx:   ", x.grad.item())
`
      },
      {
        id: "lesson-dl-ch3",
        title: "Chương 3: Hàm Loss, Thuật toán Tối ưu (Optimizers) & Chống Overfitting",
        summary: "MSE, BCE, CCE, so sánh SGD vs Momentum vs Adam, và 7 kỹ thuật Regularization chống học vẹt.",
        content: `
          <h3>1. Ba hàm Loss kinh điển</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="MSE">Mean Squared Error (MSE - dùng cho bài toán hồi quy dự đoán giá trị liên tục): $MSE = \\frac{1}{n} \\sum (y_i - \\hat{y}_i)^2$</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="BCE">Binary Cross Entropy (BCE / Log Loss - dùng cho phân loại 2 lớp 0 và 1): $BCE = -\\frac{1}{n} \\sum [y_i \\log(\\hat{y}_i) + (1-y_i) \\log(1-\\hat{y}_i)]$</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="CCE">Categorical Cross Entropy (CCE - dùng cho phân loại từ 3 lớp trở lên kết hợp Softmax)</span></strong>.</li>
          </ul>

          <h3>2. Bảng so sánh các thuật toán Tối ưu hóa (Optimizers)</h3>
          <table class="w-full text-left text-xs text-slate-300 my-3 border border-slate-700">
            <thead class="bg-slate-800 text-slate-100 font-semibold">
              <tr>
                <th class="p-2 border border-slate-700">Optimizer</th>
                <th class="p-2 border border-slate-700">Tốc độ</th>
                <th class="p-2 border border-slate-700">Khả năng hội tụ</th>
                <th class="p-2 border border-slate-700">Đặc điểm chính</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-slate-300">SGD</td>
                <td class="p-2 border border-slate-700">Chậm</td>
                <td class="p-2 border border-slate-700">Dễ kẹt cực trị cục bộ</td>
                <td class="p-2 border border-slate-700">Ít tốn RAM nhưng cập nhật dao động mạnh</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-blue-400">Momentum</td>
                <td class="p-2 border border-slate-700">Nhanh hơn</td>
                <td class="p-2 border border-slate-700">Tốt hơn SGD</td>
                <td class="p-2 border border-slate-700">Thêm lực quán tính trượt qua vùng phẳng</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-amber-400">RMSProp</td>
                <td class="p-2 border border-slate-700">Nhanh</td>
                <td class="p-2 border border-slate-700">Tốt trên dữ liệu chuỗi</td>
                <td class="p-2 border border-slate-700">Tự điều chỉnh learning rate theo bình phương gradient</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-emerald-400">Adam</td>
                <td class="p-2 border border-slate-700">Rất nhanh</td>
                <td class="p-2 border border-slate-700">Xuất sắc</td>
                <td class="p-2 border border-slate-700">Kết hợp Momentum + RMSProp (chuẩn mặc định tốt nhất)</td>
              </tr>
            </tbody>
          </table>

          <h3>3. 7 Kỹ thuật Regularization chống Overfitting</h3>
          <ol class="list-decimal pl-5 space-y-1 text-xs text-slate-300 my-2">
            <li><strong>L2 Regularization (Ridge)</strong>: Phạt tổng bình phương trọng số $\\lambda \\sum w^2$.</li>
            <li><strong>L1 Regularization (Lasso)</strong>: Phạt tổng trị tuyệt đối $\\lambda \\sum |w|$, tạo mô hình thưa.</li>
            <li><strong><span class="term-highlight" data-tooltip="Dropout">Dropout (ngẫu nhiên tắt một tỷ lệ nơ-ron ví dụ 30-50% ở mỗi lượt để ép mạng học đồng đều)</span></strong>.</li>
            <li><strong>Early Stopping</strong>: Dừng huấn luyện ngay khi Validation Loss bắt đầu tăng trở lại.</li>
            <li><strong>Batch Normalization</strong>: Chuẩn hóa đầu ra lớp ẩn về mean=0, variance=1.</li>
            <li><strong>Data Augmentation</strong>: Xoay, lật, phóng to ảnh để làm giàu tập dữ liệu.</li>
            <li><strong>Đơn giản hóa mô hình</strong>: Giảm bớt số lớp ẩn và số lượng nơ-ron.</li>
          </ol>
        `,
        starterCode: `import torch
import torch.nn as nn
import torch.optim as optim

class RegularizedClassifier(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(10, 64)
        self.bn1 = nn.BatchNorm1d(64)       # Batch Normalization
        self.dropout = nn.Dropout(p=0.3)    # Dropout 30%
        self.fc2 = nn.Linear(64, 1)
        self.sigmoid = nn.Sigmoid()
        
    def forward(self, x):
        x = torch.relu(self.bn1(self.fc1(x)))
        x = self.dropout(x)
        x = self.sigmoid(self.fc2(x))
        return x

model = RegularizedClassifier()
criterion = nn.BCELoss()
optimizer = optim.Adam(model.parameters(), lr=0.001, weight_decay=1e-4) # L2 Regularization

print(model)
`
      },
      {
        id: "lesson-dl-ch4",
        title: "Chương 4: Kiến trúc Mạng CNN & RNN / LSTM / GRU",
        summary: "Phép tích chập, công thức tính kích thước đầu ra CNN, Max Pooling, tiến hóa AlexNet->ResNet, và cơ chế cổng LSTM.",
        content: `
          <h3>1. Các thành phần chính trong CNN</h3>
          <p><strong>Công thức tính kích thước bản đồ đặc trưng đầu ra:</strong></p>
          $$O = \\left\\lfloor \\frac{N - F + 2P}{S} \\right\\rfloor + 1$$
          <p class="text-xs text-slate-400">Trong đó: $N$ là kích thước ảnh đầu vào, $F$ là kích thước Filter, $P$ là Padding, $S$ là Stride bước nhảy.</p>

          <h3>2. Phép toán Max Pooling 2x2, Stride=2</h3>
          <div class="p-3 bg-slate-900 border border-slate-800 rounded font-mono text-xs text-slate-300 my-2">
Input Map 4x4:             Max Pooling 2x2:
 1   3 | 2   0               6   2
 4   6 | 1   1   =======>    3   5
-------|-------
 0   2 | 1   2
 3   1 | 0   5
          </div>

          <h3>3. Lịch sử tiến hóa CNN & So sánh RNN / LSTM / GRU</h3>
          <ul>
            <li><strong>LeNet-5 (1998)</strong>: Đặt nền móng CNN nhận dạng chữ số séc ngân hàng.</li>
            <li><strong>AlexNet (2012)</strong>: Bùng nổ Deep Learning với GPU, ReLU và Dropout.</li>
            <li><strong>ResNet (2015)</strong>: Đột phá với kết nối tắt Residual Connection $F(x) + x$ vượt qua giới hạn 100 lớp.</li>
            <li><strong>LSTM & GRU</strong>: Sử dụng các cổng Forget, Input, Output Gates để giải quyết triệt để lỗi tiêu biến gradient trên chuỗi dài của RNN cổ điển.</li>
          </ul>
        `,
        starterCode: `import torch
import torch.nn as nn

class ConvNetBlock(nn.Module):
    def __init__(self):
        super().__init__()
        # Conv2d: in=1, out=16, kernel=3x3, padding=1
        self.conv = nn.Conv2d(1, 16, kernel_size=3, padding=1)
        self.relu = nn.ReLU()
        self.pool = nn.MaxPool2d(kernel_size=2, stride=2)
        
    def forward(self, x):
        return self.pool(self.relu(self.conv(x)))

net = ConvNetBlock()
sample_img = torch.randn(1, 1, 28, 28) # Ảnh 28x28
out = net(sample_img)
print("Kích thước sau Conv + MaxPool (kỳ vọng 14x14):", out.shape)
`
      },
      {
        id: "lesson-dl-ch5",
        title: "Chương 5: Kỷ nguyên Transformer & Bản đồ Ứng dụng Thực tế",
        summary: "Tại sao Transformer thống trị, sơ đồ Encoder-Decoder, Scaled Dot-Product Attention, Positional Encoding và bản đồ ứng dụng khổng lồ.",
        content: `
          <h3>1. Tại sao Transformer thống trị thế giới AI?</h3>
          <ul>
            <li><strong>Khả năng song song hóa hoàn toàn (Parallel Processing)</strong>: Xử lý toàn bộ chuỗi cùng một lúc trên GPU thay vì tuần tự từng từ như RNN.</li>
            <li><strong>Nắm bắt tương quan dài hạn xuất sắc (Long-Range Dependencies)</strong>: Cơ chế Self-Attention liên kết mọi từ với nhau trực tiếp.</li>
          </ul>

          <h3>2. Cơ chế Self-Attention & Positional Encoding</h3>
          <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg text-xs space-y-2">
            $$\\text{Attention}(Q, K, V) = \\text{softmax}\\left( \\frac{QK^T}{\\sqrt{d_k}} \\right)V$$
            <p><strong>Mã hóa vị trí Sinusoidal Positional Encoding:</strong></p>
            $$PE_{(pos, 2i)} = \\sin\\left(\\frac{pos}{10000^{\\frac{2i}{d_{model}}}}\\right), \\quad PE_{(pos, 2i+1)} = \\cos\\left(\\frac{pos}{10000^{\\frac{2i}{d_{model}}}}\\right)$$
          </div>

          <h3>3. Bản đồ Ứng dụng Khổng lồ của Transformer</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs my-3">
            <div class="p-3 bg-slate-900 border border-slate-800 rounded">
              <span class="font-bold text-blue-400">NLP & Chatbots:</span> GPT-4, LLaMA 3, Claude 3, BERT, T5.
            </div>
            <div class="p-3 bg-slate-900 border border-slate-800 rounded">
              <span class="font-bold text-emerald-400">Thị giác máy tính (CV):</span> ViT (Vision Transformer), DETR, SegFormer.
            </div>
            <div class="p-3 bg-slate-900 border border-slate-800 rounded">
              <span class="font-bold text-purple-400">Âm thanh & Giọng nói:</span> Whisper (OpenAI), FastSpeech 2, Wav2Vec.
            </div>
            <div class="p-3 bg-slate-900 border border-slate-800 rounded">
              <span class="font-bold text-amber-400">Đa phương thức & Khoa học:</span> CLIP, LLaVA, AlphaFold (Dự đoán protein).
            </div>
          </div>
        `,
        starterCode: `import torch
import torch.nn as nn

# Khởi tạo Multi-Head Attention trong PyTorch (embed_dim=512, heads=8)
multihead_attn = nn.MultiheadAttention(embed_dim=512, num_heads=8)

# Sequence length = 10, Batch size = 2, Embedding dimension = 512
q = torch.randn(10, 2, 512)
k = torch.randn(10, 2, 512)
v = torch.randn(10, 2, 512)

attn_output, attn_weights = multihead_attn(q, k, v)
print("Kích thước Attention Output (10, 2, 512):", attn_output.shape)
`
      }
    ]
  },

  // ===================== PHẦN 2: CÁC MODULE MACHINE LEARNING & GENAI =====================
  {
    id: "module-1",
    title: "1. Supervised Learning (Học có giám sát)",
    description: "Khám phá trọn bộ các thuật toán Hồi quy (Regression) và Phân loại (Classification).",
    icon: "git-merge",
    lessons: [
      {
        id: "lesson-sup-reg",
        title: "1.1 Regression: Linear, Polynomial, Ridge & Lasso",
        summary: "Dự đoán biến liên tục và chuẩn hóa chống Overfitting.",
        content: `
          <h3>Các thuật toán Hồi quy trong sơ đồ:</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Hồi quy tuyến tính">Linear Regression (hồi quy tuyến tính $y = w^T x + b$)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Hồi quy đa thức">Polynomial Regression (hồi quy đa thức $x^2, x^3$)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Ridge">Ridge Regression (chuẩn hóa L2 $\\lambda \\sum w^2$)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Lasso">Lasso Regression (chuẩn hóa L1 $\\lambda \\sum |w|$)</span></strong>.</li>
          </ul>
        `,
        starterCode: `from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.preprocessing import PolynomialFeatures
import numpy as np

X = np.array([[1], [2], [3], [4], [5]])
y = np.array([1.5, 4.2, 9.1, 16.2, 25.1])
poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)
model = LinearRegression().fit(X_poly, y)
print("Dự đoán x=6:", model.predict(poly.transform([[6]])))
`
      },
      {
        id: "lesson-sup-clf",
        title: "1.2 Classification: Logistic, SVM, Decision Trees, k-NN & Naive Bayes",
        summary: "Phân loại nhãn dữ liệu qua các thuật toán cổ điển hàng đầu.",
        content: `
          <h3>Các thuật toán Phân loại trong sơ đồ:</h3>
          <ul>
            <li><strong><span class="term-highlight" data-tooltip="Logistic">Logistic Regression (phân loại nhị phân qua Sigmoid)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="SVM">SVM - Support Vector Machine (tìm siêu phẳng cực đại Margin)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Cây quyết định">Decision Trees (phân nhánh theo Gini/Entropy)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="k-NN">k-NN (bỏ phiếu theo k láng giềng gần nhất)</span></strong>.</li>
            <li><strong><span class="term-highlight" data-tooltip="Naive Bayes">Naive Bayes (xác suất điều kiện độc lập)</span></strong>.</li>
          </ul>
        `,
        starterCode: `from sklearn.datasets import load_iris
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier

X, y = load_iris(return_X_y=True)
clf = DecisionTreeClassifier(max_depth=3).fit(X, y)
print("Độ chính xác Decision Tree:", clf.score(X, y))
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
          <h3>Các thuật toán Phân cụm:</h3>
          <ul>
            <li><strong>K-Means</strong>: Phân cụm dựa trên tâm cụm Voronoi.</li>
            <li><strong>DBSCAN</strong>: Phân cụm theo mật độ, lọc điểm nhiễu.</li>
            <li><strong>Agglomerative</strong>: Phân cụm phân cấp Dendrogram.</li>
            <li><strong>Mean Shift & Fuzzy C-Means</strong>: Tìm đỉnh mật độ và phân cụm mờ.</li>
          </ul>
        `,
        starterCode: `from sklearn.cluster import KMeans, DBSCAN
from sklearn.datasets import make_blobs

X, _ = make_blobs(n_samples=200, centers=3, random_state=42)
km = KMeans(n_clusters=3).fit(X)
print("Tâm cụm K-Means:\\n", km.cluster_centers_)
`
      },
      {
        id: "lesson-unsup-dim-rules",
        title: "2.2 Dim Reduction (PCA, t-SNE, UMAP, SVD, LDA) & Association (Apriori, FP-Growth, Eclat)",
        summary: "Nén không gian đặc trưng và khai phá giỏ hàng mua sắm.",
        content: `
          <h3>Giảm chiều & Khai phá luật kết hợp:</h3>
          <ul>
            <li><strong>PCA, SVD, LDA</strong>: Giảm chiều tuyến tính.</li>
            <li><strong>t-SNE, UMAP</strong>: Giảm chiều phi tuyến bảo toàn hình học dữ liệu.</li>
            <li><strong>Apriori, FP-Growth, Eclat</strong>: Khai phá các mục thường xuyên đi kèm nhau.</li>
          </ul>
        `,
        starterCode: `from sklearn.decomposition import PCA
from sklearn.datasets import load_iris

X, _ = load_iris(return_X_y=True)
X_pca = PCA(n_components=2).fit_transform(X)
print("Kích thước sau PCA 2D:", X_pca.shape)
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
        title: "3.1 Toàn cảnh Ensemble: Bagging, Boosting, Stacking & Voting",
        summary: "Kết hợp sức mạnh đa mô hình để đạt độ chính xác đỉnh cao.",
        content: `
          <h3>Các nhánh của Ensemble Learning:</h3>
          <ul>
            <li><strong>Bagging</strong>: <code>Random Forest</code>.</li>
            <li><strong>Boosting</strong>: <code>XGBoost</code>, <code>LightGBM</code>, <code>CatBoost</code>, <code>AdaBoost</code>.</li>
            <li><strong>Stacking & Voting</strong>: <code>Hard Voting</code> và <code>Soft Voting</code>.</li>
          </ul>
        `,
        starterCode: `from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.datasets import make_classification

X, y = make_classification(n_samples=300, random_state=42)
rf = RandomForestClassifier().fit(X, y)
print("Random Forest Accuracy:", rf.score(X, y))
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
          <h3>Các phương pháp học hiện đại:</h3>
          <ul>
            <li><strong>Semi-Supervised</strong>: <code>Self-Training</code>, <code>Co-Training</code>.</li>
            <li><strong>Self-Supervised</strong>: <code>Contrastive Learning</code>, <code>Masked Language Modeling</code>, <code>BYOL</code>.</li>
            <li><strong>Transfer Learning</strong>: <code>Fine-Tuning</code>, <code>Feature Extraction</code>.</li>
          </ul>
        `,
        starterCode: `print("Nguyên lý BYOL (Bootstrap Your Own Latent): Học biểu diễn mà không cần cặp mẫu âm Negative Samples.")
`
      }
    ]
  },
  {
    id: "module-7",
    title: "7. Generative AI (AI Tạo sinh - Tâm điểm 2026)",
    description: "LLMs (GPT-4o, Claude 3, LLaMA 3), Diffusion Models, GANs và Multimodal Models.",
    icon: "bot",
    lessons: [
      {
        id: "lesson-genai-full",
        title: "7.1 Toàn bộ 4 nhánh GenAI: LLMs, Diffusion, GANs & Multimodal Models",
        summary: "Khám phá GPT-4o, Claude 3, LLaMA 3, Stable Diffusion 3, GANs và GPT-4V/LLaVA.",
        content: `
          <h3>4 Trụ cột Generative AI trong sơ đồ 2026:</h3>
          <ol class="list-decimal pl-5 space-y-2">
            <li><strong>LLMs</strong>: <code>GPT-4o</code>, <code>Claude 3.5</code>, <code>LLaMA 3</code>, <code>Gemini 1.5</code>, <code>Mistral Large</code>.</li>
            <li><strong>Diffusion</strong>: <code>Stable Diffusion 3</code>, <code>DALL-E 3</code>, <code>Imagen 3</code>, <code>Midjourney</code>.</li>
            <li><strong>GANs</strong>: <code>StyleGAN3</code>, <code>CycleGAN</code>, <code>Pix2Pix</code>, <code>BigGAN</code>.</li>
            <li><strong>Multimodal</strong>: <code>GPT-4V</code>, <code>Gemini 1.5 Pro</code>, <code>LLaVA</code>, <code>Qwen-VL</code>.</li>
          </ol>
        `,
        starterCode: `print("Generative AI 2026: Đỉnh cao với LLMs và Multimodal Reasoning.")
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
          <h3>Các thuật toán RL:</h3>
          <ul>
            <li><strong>Value-Based</strong>: <code>Q-Learning</code>, <code>SARSA</code>, <code>DQN</code>.</li>
            <li><strong>Policy-Based</strong>: <code>Policy Gradient (REINFORCE)</code>.</li>
            <li><strong>Actor-Critic</strong>: <code>A2C</code>, <code>PPO (nền tảng RLHF)</code>, <code>DDPG</code>.</li>
          </ul>
        `,
        starterCode: `print("Thuật toán PPO (Proximal Policy Optimization): Trọng tâm căn chỉnh RLHF cho các LLM hiện đại.")
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
            <li><strong>Bayesian Networks</strong>: Đồ thị có hướng DAG biểu diễn quan hệ nhân quả.</li>
            <li><strong>Markov Random Fields (MRF)</strong>: Đồ thị vô hướng cho dữ liệu không gian.</li>
            <li><strong>Hidden Markov Models (HMM)</strong>: Chuỗi trạng thái ẩn giải qua thuật toán Viterbi.</li>
          </ul>
        `,
        starterCode: `print("HMM: Ứng dụng kinh điển trong nhận dạng giọng nói và sinh học tin học.")
`
      }
    ]
  }
];
