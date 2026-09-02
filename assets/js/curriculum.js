// =========================================================================================
// ML LEARNING HUB - ENCYCLOPEDIC 2026 CURRICULUM DATABASE
// Bao quát 100% Cẩm nang Deep Learning & Sơ đồ Tri thức Machine Learning 2026 (GenAI.works)
// =========================================================================================

window.ML_CURRICULUM = [
  // ---------------------------------------------------------------------------------------
  // MODULE 1: CẨM NANG DEEP LEARNING TOÀN DIỆN (CHUYÊN SÂU TỪ CƠ BẢN ĐẾN NÂNG CAO)
  // ---------------------------------------------------------------------------------------
  {
    id: "module-dl-handbook",
    title: "🔥 CẨM NANG DEEP LEARNING TOÀN DIỆN (A - Z)",
    description: "Giáo trình học sâu bài bản: ANNs, Perceptron, Backpropagation, Optimizers, Regularization, CNN, RNN/LSTM và Transformer.",
    icon: "brain-circuit",
    lessons: [
      {
        id: "lesson-dl-ch1",
        title: "Chương 1: Tổng quan Deep Learning & Cơ sở Mạng Nơ-ron (ANNs)",
        summary: "Bản chất Deep Learning, so sánh ML vs DL, Cấu trúc Perceptron và Quy trình dự đoán 5 bước.",
        content: `
          <h3>1. Deep Learning là gì? Tại sao cần Deep Learning?</h3>
          <p><span class="term-highlight" data-tooltip="Học sâu">Deep Learning (DL - phân ngành chuyên sâu của Trí tuệ Nhân tạo và Machine Learning, mô phỏng cấu trúc mạng nơ-ron của não người qua các mạng nhiều lớp ẩn Hidden Layers)</span> giải quyết triệt để các hạn chế của ML truyền thống:</p>
          <ul>
            <li><strong>Xử lý dữ liệu phi cấu trúc (Unstructured Data)</strong>: Có khả năng hoạt động cực kỳ hiệu quả với lượng dữ liệu khổng lồ phi cấu trúc như hình ảnh, âm thanh, văn bản bản dịch và video mà ML truyền thống rất khó xử lý.</li>
            <li><strong><span class="term-highlight" data-tooltip="Tự động học đặc trưng">Automatic Feature Learning (tự động trích xuất đặc trưng tầng bậc từ mức độ cơ bản như cạnh, góc đến phức tạp mà không cần Feature Engineering thủ công)</span></strong>.</li>
            <li><strong>Hiệu suất tỷ lệ thuận với quy mô dữ liệu (Scalability)</strong>: Đối với ML truyền thống, hiệu suất sẽ đạt đến ngưỡng bão hòa khi dữ liệu tăng lên. Với DL, mô hình càng lớn và dữ liệu huấn luyện càng nhiều (GB đến TB dữ liệu) thì độ chính xác càng tiệm cận mức tối ưu.</li>
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
                <td class="p-2 border border-slate-700 text-emerald-400 font-bold">Tự động học đặc trưng từ dữ liệu thô</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-medium text-blue-400">Yêu cầu dữ liệu</td>
                <td class="p-2 border border-slate-700">Hoạt động tốt với tập dữ liệu vừa và nhỏ</td>
                <td class="p-2 border border-slate-700">Cần lượng dữ liệu khổng lồ (Big Data)</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-medium text-blue-400">Kiến trúc mô hình</td>
                <td class="p-2 border border-slate-700">Mô hình nông (Linear Regression, SVM, Decision Tree)</td>
                <td class="p-2 border border-slate-700">Mạng nơ-ron sâu nhiều tầng (DNNs)</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-medium text-blue-400">Hiệu suất</td>
                <td class="p-2 border border-slate-700">Đạt ngưỡng bão hòa nhanh chóng</td>
                <td class="p-2 border border-slate-700">Xuất sắc trên các bài toán phức tạp, tăng trưởng theo dữ liệu</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-medium text-blue-400">Tài nguyên tính toán</td>
                <td class="p-2 border border-slate-700">Ít tốn tài nguyên, chạy tốt trên CPU</td>
                <td class="p-2 border border-slate-700">Yêu cầu năng lực tính toán cực cao (GPU / TPU)</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-medium text-blue-400">Ví dụ thực tế</td>
                <td class="p-2 border border-slate-700">Lọc thư rác (Spam Filter), dự đoán giá nhà</td>
                <td class="p-2 border border-slate-700">Nhận diện khuôn mặt, xe tự hành, ChatGPT</td>
              </tr>
            </tbody>
          </table>

          <h3>3. Cấu trúc của một Neuron (Perceptron)</h3>
          <p><span class="term-highlight" data-tooltip="Perceptron">Neuron (hay Perceptron) là đơn vị tính toán cơ bản cấu tạo nên một mạng nơ-ron</span>.</p>
          
          <div class="p-4 bg-slate-900 border border-slate-800 rounded-lg font-mono text-xs text-slate-300 my-3 leading-relaxed whitespace-pre">
Inputs (x)       Weights (w)
   x1  ---------->  w1 \\
   x2  ---------->  w2  ---> [ Tổng Weighted Sum (z) ] ---> [ Hàm kích hoạt f(z) ] ---> Output (y)
  ...  ----------> ...  /                     ^
   xn  ---------->  wn /                      |
                                           Bias (b)
          </div>

          <div class="my-3 p-4 rounded-lg bg-slate-900 border border-slate-700">
            <h4 class="text-blue-400 font-semibold mb-1">Công thức toán học cốt lõi:</h4>
            $$\\text{Tổng tuyến tính (Weighted Sum): } z = w_1x_1 + w_2x_2 + \\dots + w_nx_n + b = \\sum_{i=1}^{n} w_ix_i + b$$
            $$\\text{Giá trị đầu ra (Activation): } y = f(z)$$
            <p class="text-xs text-slate-400 mt-2">
              - <strong>Trọng số ($w_i$)</strong>: Kiểm soát mức độ ảnh hưởng của kết nối giữa các nơ-ron. Trọng số càng lớn, tín hiệu truyền qua càng mạnh.<br>
              - <strong>Độ chệch ($b$)</strong>: Cho phép dịch chuyển đồ thị của hàm kích hoạt sang trái hoặc sang phải, giúp mô hình linh hoạt hơn trong việc khớp dữ liệu.
            </p>
          </div>

          <h3>4. Cấu trúc phân lớp của Mạng Nơ-ron (ANN)</h3>
          <ul>
            <li><strong>Lớp đầu vào (Input Layer)</strong>: Nhận dữ liệu thô từ bên ngoài (ví dụ: các thuộc tính của một bảng, pixel của bức ảnh).</li>
            <li><strong>Lớp ẩn (Hidden Layers)</strong>: Nằm giữa lớp đầu vào và đầu ra. Lớp ẩn thực hiện các phép tính toán phức tạp và trích xuất các đặc trưng ẩn của dữ liệu. Mạng càng nhiều lớp ẩn thì khả năng học các pattern phức tạp càng mạnh.</li>
            <li><strong>Lớp đầu ra (Output Layer)</strong>: Trả về kết quả dự đoán cuối cùng của mạng (nhãn phân loại hoặc giá trị liên tục).</li>
          </ul>

          <h3>5. Quy trình dự đoán 5 bước của Neural Network</h3>
          <ol class="list-decimal pl-5 space-y-2 text-xs text-slate-300 my-3">
            <li><strong>Input</strong>: Nhập dữ liệu thô vào mạng qua Input Layer.</li>
            <li><strong>Forward Propagation (Lan truyền xuôi)</strong>: Dữ liệu được truyền xuôi qua các lớp ẩn, thực hiện các phép nhân trọng số và hàm kích hoạt để tạo ra dự đoán đầu ra $\\hat{y}$.</li>
            <li><strong>Output</strong>: Lớp đầu ra đưa ra giá trị dự đoán $\\hat{y}$.</li>
            <li><strong>Error Calculation (Tính sai số)</strong>: Sử dụng hàm Loss để đo lường mức độ sai khác giữa kết quả dự đoán $\\hat{y}$ và nhãn thực tế $y$.</li>
            <li><strong>Backpropagation (Lan truyền ngược)</strong>: Lỗi được truyền ngược từ lớp đầu ra về các lớp trước đó để tính toán gradient, từ đó cập nhật các trọng số $w$ và độ chệch $b$ nhằm giảm thiểu sai số trong các lần lặp tiếp theo.</li>
          </ol>
        `,
        starterCode: `import torch
import torch.nn as nn

torch.manual_seed(42)

# Khởi tạo dữ liệu đầu vào (kích thước batch size = 1, input features = 3)
x = torch.tensor([[2.0, -1.5, 3.0]])

# Khởi tạo Linear Layer (in_features=3, out_features=1)
linear_layer = nn.Linear(in_features=3, out_features=1)

# Truyền dữ liệu qua layer (Forward Pass)
z = linear_layer(x)

print("Trọng số (Weights):", linear_layer.weight.data)
print("Độ chệch (Bias):   ", linear_layer.bias.data)
print("Kết quả đầu ra z:  ", z.item())
`
      },
      {
        id: "lesson-dl-ch2",
        title: "Chương 2: Hàm kích hoạt, Cơ chế Lan truyền (Forward & Backpropagation)",
        summary: "Tính phi tuyến, 4 hàm kích hoạt (ReLU, Sigmoid, Tanh, Softmax), Đạo hàm chuỗi Chain Rule và công thức toán Backprop.",
        content: `
          <h3>1. Hàm kích hoạt (Activation Functions) - Tại sao cần phi tuyến?</h3>
          <p>Nếu không có các hàm kích hoạt phi tuyến, toàn bộ các phép toán trong mạng nơ-ron dù sâu bao nhiêu lớp cũng chỉ tương đương với một mô hình Linear Regression (Tuyến tính) đơn giản (vì tích của các ma trận tuyến tính vẫn là một phép biến đổi tuyến tính). Hàm kích hoạt đưa tính phi tuyến (non-linearity) vào mạng, giúp mạng học được các mẫu cấu trúc cực kỳ phức tạp và phi tuyến trong thực tế.</p>

          <h3>2. Chi tiết 4 hàm kích hoạt phổ biến nhất</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3 bg-slate-900 border border-slate-700 rounded-lg">
              <h4 class="font-bold text-emerald-400 mb-1">ReLU (Rectified Linear Unit)</h4>
              <p><strong>Công thức:</strong> $f(x) = \\max(0, x)$</p>
              <p><strong>Range:</strong> $[0, \\infty)$</p>
              <p><strong>Ưu điểm:</strong> Phép tính cực kỳ đơn giản và nhanh chóng; giúp giảm thiểu hiện tượng triệt tiêu gradient (vanishing gradient) ở vùng dương.</p>
              <p><strong>Nhược điểm:</strong> Lỗi "Dying ReLU" (nơ-ron bị chết nếu đầu vào âm khiến gradient bằng 0 mãi mãi); không đối xứng qua điểm 0 (non-zero centered).</p>
              <p><strong>Ứng dụng tốt nhất:</strong> Các lớp ẩn (Hidden Layers) mặc định trong hầu hết các kiến trúc mạng.</p>
            </div>

            <div class="p-3 bg-slate-900 border border-slate-700 rounded-lg">
              <h4 class="font-bold text-blue-400 mb-1">Sigmoid</h4>
              <p><strong>Công thức:</strong> $f(x) = \\frac{1}{1 + e^{-x}}$</p>
              <p><strong>Range:</strong> $(0, 1)$</p>
              <p><strong>Ưu điểm:</strong> Đầu ra nằm hoàn toàn trong khoảng $(0, 1)$, rất phù hợp để biểu diễn xác suất.</p>
              <p><strong>Nhược điểm:</strong> Bị triệt tiêu gradient ở cả 2 đầu khi giá trị tuyệt đối của đầu vào quá lớn; không đối xứng qua điểm 0.</p>
              <p><strong>Ứng dụng tốt nhất:</strong> Lớp đầu ra (Output Layer) của các bài toán phân loại nhị phân (Binary Classification) hoặc cơ chế cổng kiểm soát của mạng LSTM.</p>
            </div>

            <div class="p-3 bg-slate-900 border border-slate-700 rounded-lg">
              <h4 class="font-bold text-amber-400 mb-1">Tanh (Hyperbolic Tangent)</h4>
              <p><strong>Công thức:</strong> $f(x) = \\frac{e^x - e^{-x}}{e^x + e^{-x}}$</p>
              <p><strong>Range:</strong> $(-1, 1)$</p>
              <p><strong>Ưu điểm:</strong> Đối xứng qua điểm 0 (zero-centered), giúp quá trình hội tụ nhanh hơn Sigmoid; đồ thị mượt mà hơn.</p>
              <p><strong>Nhược điểm:</strong> Vẫn gặp hiện tượng triệt tiêu gradient khi đầu vào có trị tuyệt đối lớn.</p>
              <p><strong>Ứng dụng tốt nhất:</strong> Các lớp ẩn của mạng nơ-ron cổ điển hoặc trong mạng tuần hoàn RNN.</p>
            </div>

            <div class="p-3 bg-slate-900 border border-slate-700 rounded-lg">
              <h4 class="font-bold text-purple-400 mb-1">Softmax</h4>
              <p><strong>Công thức:</strong> $f(z_i) = \\frac{e^{z_i}}{\\sum_{j=1}^{K} e^{z_j}}$ (với $K$ là số lớp phân loại)</p>
              <p><strong>Range:</strong> $(0, 1)$ và tổng tất cả các đầu ra bằng $1.0$.</p>
              <p><strong>Ưu điểm:</strong> Biến đổi các điểm số đầu ra (logits) thành một phân phối xác suất thực sự.</p>
              <p><strong>Nhược điểm:</strong> Không sử dụng trong các lớp ẩn vì chi phí tính toán cao và làm mất thông tin biên.</p>
              <p><strong>Ứng dụng tốt nhất:</strong> Lớp đầu ra (Output Layer) cho các bài toán phân loại đa lớp (Multi-class Classification).</p>
            </div>
          </div>

          <h3>3. Lan truyền ngược (Backpropagation) & Đạo hàm chuỗi (Chain Rule)</h3>
          <p>Lan truyền ngược là cơ chế cốt lõi giúp mạng nơ-ron học tập bằng cách tính toán sai số tại đầu ra và truyền ngược về các lớp trước đó để tính gradient của hàm Loss đối với từng trọng số và bias:</p>
          <ol class="list-decimal pl-5 space-y-1 text-xs text-slate-300 my-2">
            <li><strong>Tính Loss</strong>: Đo lường sai lệch giữa kết quả dự đoán $\\hat{y}$ và thực tế $y$ thông qua hàm Loss $L(\\hat{y}, y)$.</li>
            <li><strong>Tính lỗi ($\\delta$) tại lớp đầu ra</strong>: Đo lường mức độ nhạy cảm của hàm Loss đối với tổng tuyến tính $z$ tại lớp đầu ra.</li>
            <li><strong>Lan truyền lỗi ngược qua các lớp ẩn</strong>: Sử dụng quy tắc đạo hàm chuỗi (Chain Rule) để tính lỗi $\\delta^{[l]}$ ở các lớp ẩn phía trước dựa trên lỗi của lớp phía sau nó.</li>
            <li><strong>Cập nhật tham số</strong>: Tính toán gradient của trọng số ($dW$) và bias ($db$), sau đó áp dụng thuật toán Gradient Descent để cập nhật chúng nhằm giảm lỗi.</li>
          </ol>

          <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg text-xs space-y-2 my-3">
            <h4 class="text-blue-400 font-semibold mb-2">Hệ thống công thức toán học chi tiết của Backpropagation:</h4>
            <p><strong>1. Lỗi tại lớp đầu ra ($L$):</strong></p>
            $$\\text{Với Regression (MSE): } \\delta^{[L]} = (\\hat{y} - y) \\odot f'(z^{[L]})$$
            $$\\text{Với Phân loại đa lớp (Cross-Entropy + Softmax): } \\delta^{[L]} = \\hat{y} - y$$
            <p><strong>2. Lỗi tại lớp ẩn ($l$):</strong></p>
            $$\\delta^{[l]} = \\left( (W^{[l+1]})^T \\delta^{[l+1]} \\right) \\odot f'(z^{[l]})$$
            <p><em>(Ký hiệu $\\odot$ đại diện cho phép nhân element-wise giữa hai ma trận cùng kích thước)</em></p>
            <p><strong>3. Tính toán Gradient để cập nhật:</strong></p>
            $$dW^{[l]} = \\delta^{[l]} (a^{[l-1]})^T, \\quad db^{[l]} = \\delta^{[l]}$$
            <p><strong>4. Cập nhật trọng số theo thuật toán Gradient Descent:</strong></p>
            $$W^{[l]} = W^{[l]} - \\eta \\cdot dW^{[l]}, \\quad b^{[l]} = b^{[l]} - \\eta \\cdot db^{[l]}$$
            <p><em>(với $\\eta$ là tốc độ học - learning rate)</em></p>
          </div>
        `,
        starterCode: `import torch

# Khởi tạo biến x có yêu cầu tính toán gradient
x = torch.tensor([1.0], requires_grad=True)

# Thực hiện Forward Pass
y = 3 * (x ** 2) + 2 * x + 1
loss = y ** 2

# Thực hiện Backward Pass (Backpropagation tự động)
loss.backward()

print("Giá trị của y tại x = 1.0:", y.item())
print("Giá trị Loss:             ", loss.item())
# Đạo hàm d(loss)/dx tại x = 1.0 theo công thức chain rule: 2 * y * (6x + 2) = 2 * 6 * (6*1 + 2) = 12 * 8 = 96
print("Gradient đạo hàm d(loss)/dx:", x.grad.item())
`
      },
      {
        id: "lesson-dl-ch3",
        title: "Chương 3: Hàm Loss, Thuật toán Tối ưu hóa (Optimizers) & Kiểm soát Huấn luyện",
        summary: "Chi tiết 3 hàm Loss kinh điển (MSE, BCE, CCE), so sánh SGD vs Momentum vs RMSProp vs Adam, Overfitting vs Underfitting và 7 kỹ thuật Regularization.",
        content: `
          <h3>1. Chi tiết 3 hàm Loss kinh điển</h3>
          <ul>
            <li><strong>Mean Squared Error (MSE)</strong>:
              <br><em>Nhiệm vụ:</em> Bài toán hồi quy (Regression) dự đoán giá trị liên tục.
              <br><em>Công thức:</em> $$MSE = \\frac{1}{n} \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2$$
              <br><em>Ưu điểm:</em> Mượt mà, dễ tính đạo hàm (differentiable), phạt nặng các sai số lớn do sử dụng bình phương.
              <br><em>Nhược điểm:</em> Rất nhạy cảm với các điểm dữ liệu dị biệt (outliers).
            </li>
            <li class="mt-2"><strong>Binary Cross Entropy (BCE / Log Loss)</strong>:
              <br><em>Nhiệm vụ:</em> Bài toán phân loại nhị phân (Binary Classification - chỉ có 2 lớp 0 hoặc 1).
              <br><em>Công thức:</em> $$BCE = -\\frac{1}{n} \\sum_{i=1}^{n} \\left[ y_i \\log(\\hat{y}_i) + (1 - y_i) \\log(1 - \\hat{y}_i) \\right]$$
              <br><em>Ưu điểm:</em> Phạt cực kỳ nặng khi mô hình đưa ra dự đoán sai lệch với độ tự tin cao; tối ưu hóa xác suất lớp rất tốt.
            </li>
            <li class="mt-2"><strong>Categorical Cross Entropy (CCE)</strong>:
              <br><em>Nhiệm vụ:</em> Bài toán phân loại đa lớp (Multi-class Classification - từ 3 lớp trở lên).
              <br><em>Công thức:</em> $$CCE = -\\frac{1}{n} \\sum_{i=1}^{n} \\sum_{j=1}^{C} y_{ij} \\log(\\hat{y}_{ij})$$
              <br><em>Ưu điểm:</em> Hoạt động hoàn hảo khi kết hợp với hàm kích hoạt Softmax ở lớp cuối cùng.
            </li>
          </ul>

          <h3>2. Bảng so sánh các thuật toán Optimizer nâng cao</h3>
          <table class="w-full text-left text-xs text-slate-300 my-3 border border-slate-700">
            <thead class="bg-slate-800 text-slate-100 font-semibold">
              <tr>
                <th class="p-2 border border-slate-700">Optimizer</th>
                <th class="p-2 border border-slate-700">Tốc độ</th>
                <th class="p-2 border border-slate-700">Khả năng hội tụ</th>
                <th class="p-2 border border-slate-700">Ứng dụng & Ưu nhược điểm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-slate-300">SGD (Vanilla)</td>
                <td class="p-2 border border-slate-700">Chậm</td>
                <td class="p-2 border border-slate-700">Chậm, dễ kẹt ở cực trị cục bộ</td>
                <td class="p-2 border border-slate-700">Cần bộ nhớ cực thấp nhưng học rất chậm.</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-blue-400">Momentum</td>
                <td class="p-2 border border-slate-700">Nhanh hơn</td>
                <td class="p-2 border border-slate-700">Tốt hơn SGD</td>
                <td class="p-2 border border-slate-700">Thêm lực quán tính giúp mô hình vượt qua các thung lũng phẳng và hội tụ nhanh hơn.</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-amber-400">RMSProp</td>
                <td class="p-2 border border-slate-700">Nhanh</td>
                <td class="p-2 border border-slate-700">Tốt</td>
                <td class="p-2 border border-slate-700">Tự động điều chỉnh learning rate cho từng tham số dựa trên trung bình trượt bình phương gradient.</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-emerald-400">Adam</td>
                <td class="p-2 border border-slate-700">Rất nhanh</td>
                <td class="p-2 border border-slate-700">Xuất sắc</td>
                <td class="p-2 border border-slate-700">Kết hợp hoàn hảo giữa Momentum và RMSProp. Là lựa chọn mặc định tốt nhất trong thực tế.</td>
              </tr>
            </tbody>
          </table>

          <h3>3. 7 Kỹ thuật Regularization chống Overfitting hàng đầu</h3>
          <ol class="list-decimal pl-5 space-y-1.5 text-xs text-slate-300 my-2">
            <li><strong>L2 Regularization (Ridge)</strong>: Cộng thêm tổng bình phương trọng số vào hàm Loss ($L = L_0 + \\lambda \\sum w^2$). Phạt các trọng số quá lớn, giúp phân phối trọng số mượt mà.</li>
            <li><strong>L1 Regularization (Lasso)</strong>: Cộng thêm tổng trị tuyệt đối trọng số vào hàm Loss ($L = L_0 + \\lambda \\sum |w|$). Ép nhiều trọng số về 0, tạo ra mô hình thưa (sparse model) hữu ích cho việc lọc đặc trưng.</li>
            <li><strong>Dropout</strong>: Trong mỗi bước huấn luyện, ngẫu nhiên ngắt kết nối một tỷ lệ nơ-ron (ví dụ: 30-50%). Ép mạng học các biểu diễn dữ liệu đồng đều, tránh dựa dẫm vào một nhóm nơ-ron cụ thể.</li>
            <li><strong>Early Stopping</strong>: Theo dõi đồ thị Loss của tập Validation. Dừng quá trình huấn luyện ngay khi Loss trên tập Validation bắt đầu tăng trở lại mặc cho Loss trên tập Train vẫn đang giảm.</li>
            <li><strong>Batch Normalization</strong>: Chuẩn hóa đầu ra của một lớp ẩn về phân phối chuẩn (mean=0, variance=1) trước khi đi vào lớp kế tiếp. Giúp tăng tốc độ huấn luyện và có vai trò như một bộ regularizer nhẹ.</li>
            <li><strong>Data Augmentation</strong>: Tăng quy mô dữ liệu bằng các phép biến đổi ảnh (xoay, lật, thu phóng...) hoặc biến đổi văn bản giúp mô hình tổng quát hóa tốt hơn.</li>
            <li><strong>Đơn giản hóa mô hình</strong>: Giảm bớt số lượng lớp ẩn hoặc số lượng nơ-ron trong mỗi lớp.</li>
          </ol>
        `,
        starterCode: `import torch
import torch.nn as nn
import torch.optim as optim

class SimpleClassifier(nn.Module):
    def __init__(self):
        super(SimpleClassifier, self).__init__()
        self.fc1 = nn.Linear(10, 64)
        self.dropout = nn.Dropout(p=0.3)  # Dropout 30%
        self.fc2 = nn.Linear(64, 1)
        self.sigmoid = nn.Sigmoid()
        
    def forward(self, x):
        x = torch.relu(self.fc1(x))
        x = self.dropout(x)  # Áp dụng Dropout ở lớp ẩn
        x = self.sigmoid(self.fc2(x))
        return x

# Khởi tạo mô hình
model = SimpleClassifier()

# Định nghĩa hàm Loss BCE và Optimizer Adam
criterion = nn.BCELoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

print(model)
`
      },
      {
        id: "lesson-dl-ch4",
        title: "Chương 4: Các kiến trúc mạng phổ biến (CNN & RNN / LSTM / GRU)",
        summary: "Mạng tích chập CNN, công thức kích thước đầu ra, Max Pooling 2x2, Lịch sử tiến hóa AlexNet->ResNet, và mạng tuần hoàn RNN/LSTM/GRU.",
        content: `
          <h3>1. Mạng tích chập (Convolutional Neural Networks - CNN)</h3>
          <p>Mạng tích chập (CNN) được thiết kế đặc biệt để xử lý dữ liệu có dạng lưới không gian như hình ảnh, tự động nhận diện cấu trúc không gian của các đặc trưng mà không phụ thuộc vào vị trí của chúng (translation invariance).</p>
          
          <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg text-xs space-y-2 my-2">
            <h4 class="text-emerald-400 font-semibold mb-1">Công thức tính kích thước bản đồ đặc trưng đầu ra:</h4>
            $$O = \\left\\lfloor \\frac{N - F + 2P}{S} \\right\\rfloor + 1$$
            <ul class="text-slate-400 space-y-1 mt-1">
              <li>$N$: Kích thước ma trận đầu vào (chiều rộng hoặc chiều cao)</li>
              <li>$F$: Kích thước của Filter/Kernel</li>
              <li>$P$: Padding (số viền thêm vào quanh ma trận)</li>
              <li>$S$: Stride (bước nhảy của Filter khi quét)</li>
            </ul>
          </div>

          <h3>2. Ví dụ chi tiết về phép toán Max Pooling 2x2, Stride = 2</h3>
          <div class="p-3 bg-slate-900 border border-slate-800 rounded font-mono text-xs text-slate-300 my-2">
Input Feature Map 4x4:             Output Feature Map 2x2:
 1   3 | 2   0                       max(1,3,4,6)=6    max(2,0,1,1)=2
 4   6 | 1   1   ===============>        6                 2
-------|-------
 0   2 | 1   2                       max(0,2,3,1)=3    max(1,2,0,5)=5
 3   1 | 0   5                           3                 5
          </div>

          <h3>3. Lịch sử tiến hóa của các kiến trúc CNN nổi tiếng</h3>
          <table class="w-full text-left text-xs text-slate-300 my-3 border border-slate-700">
            <thead class="bg-slate-800 text-slate-100 font-semibold">
              <tr>
                <th class="p-2 border border-slate-700">Kiến trúc</th>
                <th class="p-2 border border-slate-700">Năm</th>
                <th class="p-2 border border-slate-700">Ý tưởng đột phá chính</th>
                <th class="p-2 border border-slate-700">Ứng dụng / Thành tựu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-slate-300">LeNet-5</td>
                <td class="p-2 border border-slate-700">1998</td>
                <td class="p-2 border border-slate-700">Đặt nền móng đầu tiên cho CNN sử dụng tích chập và pooling</td>
                <td class="p-2 border border-slate-700">Nhận diện chữ viết tay trên séc ngân hàng</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-blue-400">AlexNet</td>
                <td class="p-2 border border-slate-700">2012</td>
                <td class="p-2 border border-slate-700">Sử dụng GPU để huấn luyện mạng sâu, tích hợp ReLU và Dropout</td>
                <td class="p-2 border border-slate-700">Vô địch ImageNet 2012, bùng nổ kỷ nguyên DL</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-indigo-400">VGGNet</td>
                <td class="p-2 border border-slate-700">2014</td>
                <td class="p-2 border border-slate-700">Đồng nhất cấu trúc bằng cách chỉ dùng các filter nhỏ $3\\times 3$ chồng sâu</td>
                <td class="p-2 border border-slate-700">Đạt độ chính xác rất cao trong nhận dạng vật thể</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-amber-400">GoogLeNet</td>
                <td class="p-2 border border-slate-700">2014</td>
                <td class="p-2 border border-slate-700">Giới thiệu khối Inception giúp xử lý đa quy mô trên cùng một lớp</td>
                <td class="p-2 border border-slate-700">Tối ưu hóa hiệu suất tính toán cực tốt</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-emerald-400">ResNet</td>
                <td class="p-2 border border-slate-700">2015</td>
                <td class="p-2 border border-slate-700">Đột phá với cơ chế kết nối tắt (Skip/Residual Connections $F(x)+x$)</td>
                <td class="p-2 border border-slate-700">Vượt qua giới hạn suy thoái gradient ở mạng >100 lớp</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-rose-400">EfficientNet</td>
                <td class="p-2 border border-slate-700">2019</td>
                <td class="p-2 border border-slate-700">Đồng quy chuẩn hóa (Scale) đồng thời cả Chiều sâu, Chiều rộng và Độ phân giải</td>
                <td class="p-2 border border-slate-700">Đạt hiệu năng tối ưu nhất giữa độ chính xác và tài nguyên</td>
              </tr>
            </tbody>
          </table>

          <h3>4. Mạng tuần hoàn (Recurrent Neural Networks - RNN) & LSTM / GRU</h3>
          <ul>
            <li><strong>RNN cơ bản</strong>: $h_t = f(W_{hx}x_t + W_{hh}h_{t-1} + b_h)$. Gặp lỗi Vanishing / Exploding Gradient trên chuỗi dài.</li>
            <li><strong>LSTM (Long Short-Term Memory)</strong>: Sử dụng Cell State đặc biệt kết hợp 3 loại cổng: Cổng quên (Forget Gate), Cổng vào (Input Gate) và Cổng ra (Output Gate) giúp lưu trữ thông tin qua hàng ngàn bước thời gian.</li>
            <li><strong>GRU (Gated Recurrent Unit)</strong>: Phiên bản rút gọn gộp Cell State và Hidden State làm một, chỉ dùng 2 cổng (Update và Reset Gate) giúp tính toán nhanh hơn.</li>
          </ul>
        `,
        starterCode: `import torch
import torch.nn as nn

class SimpleCNN(nn.Module):
    def __init__(self):
        super(SimpleCNN, self).__init__()
        # 1 kênh màu đầu vào (ảnh xám), 16 kênh đầu ra, kernel size = 3x3, padding = 1
        self.conv1 = nn.Conv2d(in_channels=1, out_channels=16, kernel_size=3, padding=1)
        self.relu = nn.ReLU()
        self.pool = nn.MaxPool2d(kernel_size=2, stride=2)
        
    def forward(self, x):
        x = self.conv1(x)
        x = self.relu(x)
        x = self.pool(x)
        return x

model = SimpleCNN()
print(model)
`
      },
      {
        id: "lesson-dl-ch5",
        title: "Chương 5: Kỷ nguyên Transformer & Bản đồ Ứng dụng Thực tế",
        summary: "Khả năng song song hóa, Sơ đồ Encoder-Decoder, Scaled Dot-Product Attention, Positional Encoding và Bản đồ ứng dụng khổng lồ.",
        content: `
          <h3>1. Tại sao Transformer thống trị?</h3>
          <p>Trước khi có Transformer, RNN và LSTM là các mô hình tiêu chuẩn để xử lý ngôn ngữ tự nhiên. Tuy nhiên chúng gặp hạn chế là phải xử lý tuần tự từng từ một, khiến cho việc huấn luyện song song trên các hệ thống GPU lớn là bất khả thi. Transformer ra đời (2017) đã thay đổi hoàn toàn cục diện nhờ vào:</p>
          <ul>
            <li><strong>Khả năng song song hóa hoàn toàn (Parallel Processing)</strong>: Dữ liệu được đưa vào toàn bộ cùng một lúc thay vì tuần tự từng từ, giúp tận dụng tối đa năng lực tính toán của phần cứng hiện đại.</li>
            <li><strong>Nắm bắt mối quan hệ dài hạn xuất sắc (Long-Range Dependencies)</strong>: Cơ chế Self-Attention cho phép các từ tương tác trực tiếp với nhau bất kể khoảng cách địa lý trong câu.</li>
          </ul>

          <h3>2. Sơ đồ cấu trúc tổng quan Encoder - Decoder Stack</h3>
          <div class="p-4 bg-slate-900 border border-slate-800 rounded font-mono text-xs text-slate-300 my-2 leading-relaxed whitespace-pre">
             [ Đầu vào ]                               [ Đầu ra (Dịch chuyển phải) ]
                 |                                                 |
         [ Input Embedding ]                               [ Output Embedding ]
                 |                                                 |
        [ Positional Encoding ]                           [ Positional Encoding ]
                 |                                                 |
         +---------------+                                 +---------------+
  +--->  | Encoder Stack |                                 | Decoder Stack | <---+
  |      |   (N lớp)     |                                 |   (N lớp)     |     |
  |      +---------------+                                 +---------------+     |
  |              |                                                 |             |
  +--------------+------------------[ Attention ]------------------+-------------+
                                                                   |
                                                              [ Lớp Tuyến Tính ]
                                                                   |
                                                              [ Softmax ]
          </div>

          <h3>3. Cơ chế Self-Attention (Tự chú ý)</h3>
          <p>Cơ chế Self-Attention cho phép mô hình đánh giá mức độ quan trọng và liên quan của mọi từ khác đối với một từ đang được xét trong chuỗi thông qua 3 ma trận $Q$ (Query), $K$ (Key), $V$ (Value):</p>
          
          <div class="p-4 bg-slate-900 border border-slate-700 rounded-lg text-xs space-y-2 my-2">
            $$\\text{Attention}(Q, K, V) = \\text{softmax}\\left( \\frac{QK^T}{\\sqrt{d_k}} \\right)V$$
            <p><strong>Tại sao cần chia cho $\\sqrt{d_k}$?</strong> Khi $d_k$ lớn, tích vô hướng $QK^T$ sẽ nhận các giá trị có độ lớn cực kỳ cao, đẩy hàm Softmax vào vùng có gradient cực kỳ nhỏ (vanishing gradient). Việc chia cho $\\sqrt{d_k}$ giúp điều hòa phân bố giá trị đầu ra của tích vô hướng, giữ cho gradient luôn ổn định trong quá trình huấn luyện.</p>
          </div>

          <h3>4. Cơ chế Positional Encoding (Mã hóa vị trí)</h3>
          <p>Vì Transformer xử lý song song toàn bộ chuỗi cùng một lúc, nó hoàn toàn không có khái niệm về thứ tự trước sau của các từ. Để giải quyết điều này, Transformer sử dụng Positional Encoding để cộng thêm thông tin vị trí trực tiếp vào vector nhúng từ (word embeddings):</p>
          $$PE_{(pos, 2i)} = \\sin\\left(\\frac{pos}{10000^{\\frac{2i}{d_{model}}}}\\right), \\quad PE_{(pos, 2i+1)} = \\cos\\left(\\frac{pos}{10000^{\\frac{2i}{d_{model}}}}\\right)$$

          <h3>5. Bản đồ ứng dụng khổng lồ của Transformer</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs my-3">
            <div class="p-3 bg-slate-900 border border-slate-800 rounded">
              <span class="font-bold text-blue-400">NLP & Chatbots:</span> Google Translate, BERT, GPT-4, LLaMA, Claude, BART.
            </div>
            <div class="p-3 bg-slate-900 border border-slate-800 rounded">
              <span class="font-bold text-emerald-400">Thị giác máy tính (CV):</span> ViT (Vision Transformer), DETR, SegFormer (Phân loại ảnh, phân tích ảnh y khoa X-ray, MRI).
            </div>
            <div class="p-3 bg-slate-900 border border-slate-800 rounded">
              <span class="font-bold text-purple-400">Âm thanh & Giọng nói:</span> Whisper (OpenAI), FastSpeech 2, Wav2Vec 2.0.
            </div>
            <div class="p-3 bg-slate-900 border border-slate-800 rounded">
              <span class="font-bold text-amber-400">Đa phương thức & Khoa học:</span> CLIP, LLaVA, BLIP, AlphaFold (Dự đoán cấu trúc protein).
            </div>
          </div>
        `,
        starterCode: `import torch
import torch.nn as nn

# Khởi tạo lớp Multi-Head Attention (embed_dim=512, num_heads=8)
multihead_attn = nn.MultiheadAttention(embed_dim=512, num_heads=8)

# Giả định chuỗi đầu vào có độ dài sequence length = 10, batch size = 2, embed_dim = 512
q = torch.randn(10, 2, 512)
k = torch.randn(10, 2, 512)
v = torch.randn(10, 2, 512)

# Thực hiện phép tính toán Attention
attn_output, attn_output_weights = multihead_attn(q, k, v)

print("Kích thước đầu ra của Attention Output:", attn_output.shape)
print("Xác nhận kích thước (Seq_len, Batch, Embed_dim):", attn_output.shape == (10, 2, 512))
`
      }
    ]
  },

  // ---------------------------------------------------------------------------------------
  // MODULE 2: SUPERVISED LEARNING (HỌC CÓ GIÁM SÁT TOÀN DIỆN)
  // ---------------------------------------------------------------------------------------
  {
    id: "module-1",
    title: "1. Supervised Learning (Học có giám sát)",
    description: "Khám phá trọn bộ các thuật toán Hồi quy (Linear, Polynomial, Ridge, Lasso) và Phân loại (Logistic, SVM, Decision Trees, k-NN, Naive Bayes).",
    icon: "git-merge",
    lessons: [
      {
        id: "lesson-sup-reg",
        title: "1.1 Regression Toàn tập: Linear, Polynomial, Ridge & Lasso",
        summary: "Toàn bộ bài toán dự đoán giá trị liên tục, công thức OLS ma trận đóng, hàm mất mát MSE và kỹ thuật chuẩn hóa L1/L2.",
        content: `
          <h3>1. Hồi quy tuyến tính (Linear Regression)</h3>
          <p><span class="term-highlight" data-tooltip="Hồi quy tuyến tính">Linear Regression mô hình hóa quan hệ tuyến tính giữa biến đầu vào $X$ và biến mục tiêu $y$ qua hàm giả thuyết: $y = w^T x + b$</span>.</p>
          <p>Nghiệm ma trận đóng (Ordinary Least Squares - OLS): $$w^* = (X^T X)^{-1} X^T y$$</p>

          <h3>2. Hồi quy đa thức (Polynomial Regression)</h3>
          <p>Mở rộng các biến đặc trưng phi tuyến dạng bậc $n$ (ví dụ: $[x_1, x_2] \\rightarrow [1, x_1, x_2, x_1^2, x_1 x_2, x_2^2]$) giúp đường hồi quy uốn cong khớp với dữ liệu phi tuyến.</p>

          <h3>3. Chuẩn hóa chống Overfitting: Ridge vs Lasso</h3>
          <ul>
            <li><strong>Ridge Regression (L2 Regularization)</strong>: Thêm hình phạt $\\lambda \\sum w_j^2$ vào hàm mất mát: $L = MSE + \\lambda \\|w\\|_2^2$. Giúp thu nhỏ trọng số, giải quyết hiện tượng đa cộng tuyến (multicollinearity).</li>
            <li><strong>Lasso Regression (L1 Regularization)</strong>: Thêm hình phạt $\\lambda \\sum |w_j|$ vào hàm mất mát: $L = MSE + \\lambda \\|w\\|_1$. Có khả năng triệt tiêu các trọng số không quan trọng về đúng bằng 0, đóng vai trò như bộ chọn lọc đặc trưng tự động (Feature Selection).</li>
          </ul>
        `,
        starterCode: `from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

# Tạo dữ liệu phi tuyến
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([1.5, 4.2, 9.1, 16.2, 25.1]) # Hàm bậc 2 y ~ x^2

poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)

model_poly = LinearRegression().fit(X_poly, y)
pred = model_poly.predict(poly.transform([[6]]))
print(f"Dự đoán x=6 với Polynomial Regression: {pred[0]:.2f} (Kỳ vọng ~ 36.0)")
`
      },
      {
        id: "lesson-sup-clf",
        title: "1.2 Classification Toàn tập: Logistic, SVM, Decision Trees, k-NN & Naive Bayes",
        summary: "Phân loại nhãn dữ liệu qua 5 thuật toán kinh điển, ma trận nhầm lẫn Confusion Matrix, ROC-AUC, Precision, Recall và F1-Score.",
        content: `
          <h3>5 Thuật toán Phân loại kinh điển trong sơ đồ:</h3>
          <ol class="list-decimal pl-5 space-y-2 text-xs text-slate-300 my-2">
            <li><strong>Logistic Regression</strong>: Phân loại nhị phân dùng hàm Sigmoid $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ để dự đoán xác suất $P(y=1|x)$. Tối ưu qua hàm Cross-Entropy Loss bằng phương pháp ước lượng hợp lý cực đại (MLE).</li>
            <li><strong>Support Vector Machine (SVM)</strong>: Tìm siêu phẳng phân tách tối ưu sao cho khoảng cách lề (Margin) giữa hai lớp là lớn nhất. Sử dụng Kernel Trick (RBF, Polynomial, Sigmoid) để ánh xạ dữ liệu phi tuyến sang không gian số chiều cao hơn.</li>
            <li><strong>Decision Trees (Cây quyết định)</strong>: Phân nhánh dựa trên chỉ số vẩn đục Gini Impurity $Gini = 1 - \\sum p_i^2$ hoặc Độ lợi thông tin (Information Gain) dựa trên Entropy. Dễ giải thích và trực quan hóa.</li>
            <li><strong>k-Nearest Neighbors (k-NN)</strong>: Thuật toán học lười (Lazy learning) gán nhãn cho điểm dữ liệu mới dựa trên biểu quyết đa số của $k$ điểm lân cận gần nhất theo khoảng cách Euclidean $d(p, q) = \\sqrt{\\sum (p_i - q_i)^2}$.</li>
            <li><strong>Naive Bayes</strong>: Dựa trên định lý Bayes $P(y|x) = \\frac{P(x|y)P(y)}{P(x)}$ với giả định ngây thơ là các đặc trưng độc lập có điều kiện với nhau. Huấn luyện siêu nhanh, rất hiệu quả trong phân loại văn bản và lọc thư rác.</li>
          </ol>
        `,
        starterCode: `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

models = {
    "Logistic Regression": LogisticRegression(max_iter=200),
    "Support Vector Machine (SVM)": SVC(),
    "Decision Tree": DecisionTreeClassifier(max_depth=3),
    "k-NN (k=3)": KNeighborsClassifier(n_neighbors=3),
    "Gaussian Naive Bayes": GaussianNB()
}

print("=== SO SÁNH HIỆU NĂNG 5 MÔ HÌNH PHÂN LOẠI ===")
for name, clf in models.items():
    clf.fit(X_train, y_train)
    acc = clf.score(X_test, y_test)
    print(f"- {name:30}: Độ chính xác {acc*100:.2f}%")
`
      }
    ]
  },

  // ---------------------------------------------------------------------------------------
  // MODULE 3: UNSUPERVISED LEARNING (HỌC KHÔNG GIÁM SÁT TOÀN DIỆN)
  // ---------------------------------------------------------------------------------------
  {
    id: "module-2",
    title: "2. Unsupervised Learning (Học không giám sát)",
    description: "Phân cụm (K-Means, DBSCAN, Agglomerative, Mean Shift, Fuzzy C-Means), Luật kết hợp (Apriori, FP-Growth, Eclat) và Giảm chiều (PCA, t-SNE, UMAP, SVD, LDA).",
    icon: "layers",
    lessons: [
      {
        id: "lesson-unsup-clustering",
        title: "2.1 Clustering: K-Means, DBSCAN, Agglomerative, Mean Shift & Fuzzy C-Means",
        summary: "Phân nhóm dữ liệu không nhãn qua tâm cụm Voronoi, mật độ epsilon, phân cấp Dendrogram và phân cụm mờ.",
        content: `
          <h3>5 Thuật toán Phân cụm trong sơ đồ:</h3>
          <ul>
            <li><strong>K-Means & K-Means++</strong>: Khởi tạo $k$ tâm cụm, lặp lại 2 bước: gán điểm về tâm gần nhất và tính lại trung bình tâm cụm. K-Means++ chọn tâm ban đầu cách xa nhau để tránh kẹt cực trị cục bộ.</li>
            <li><strong>DBSCAN (Density-Based Spatial Clustering)</strong>: Phân cụm theo mật độ với bán kính $\\epsilon$ và số điểm tối thiểu $MinPts$. Tự động phát hiện hình dạng cụm phức tạp và lọc điểm nhiễu ngoại lai (Outliers).</li>
            <li><strong>Agglomerative Hierarchical Clustering</strong>: Phân cụm phân cấp từ dưới lên (Bottom-up), gộp dần các cụm gần nhau nhất tạo thành biểu đồ cây Dendrogram.</li>
            <li><strong>Mean Shift</strong>: Trượt cửa sổ kernel tìm các đỉnh mật độ xác suất cực đại mà không cần chỉ định trước số lượng cụm $k$.</li>
            <li><strong>Fuzzy C-Means</strong>: Phân cụm mờ cho phép mỗi điểm dữ liệu thuộc về nhiều cụm với ma trận xác suất thành viên $u_{ij} \\in [0, 1]$.</li>
          </ul>
        `,
        starterCode: `from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering, MeanShift
from sklearn.datasets import make_blobs

X, _ = make_blobs(n_samples=300, centers=3, cluster_std=0.6, random_state=42)

km = KMeans(n_clusters=3, random_state=42).fit(X)
dbs = DBSCAN(eps=0.5, min_samples=5).fit(X)
agg = AgglomerativeClustering(n_clusters=3).fit(X)
ms = MeanShift().fit(X)

print("K-Means Centers:\\n", km.cluster_centers_)
print("Số cụm phát hiện bởi DBSCAN (trừ nhiễu):", len(set(dbs.labels_)) - (1 if -1 in dbs.labels_ else 0))
print("Số cụm phát hiện bởi Mean Shift:", len(set(ms.labels_)))
`
      },
      {
        id: "lesson-unsup-dim-rules",
        title: "2.2 Dim Reduction (PCA, t-SNE, UMAP, SVD, LDA) & Association Rules (Apriori, FP-Growth, Eclat)",
        summary: "Nén không gian đặc trưng bảo toàn phương sai và khai phá tập mục thường xuyên mua kèm.",
        content: `
          <h3>1. Dimensionality Reduction (Giảm chiều dữ liệu):</h3>
          <ul>
            <li><strong>PCA (Principal Component Analysis)</strong>: Tìm các trục trực giao bảo toàn phương sai lớn nhất qua phân rã trị riêng ma trận hiệp phương sai.</li>
            <li><strong>SVD (Singular Value Decomposition)</strong>: Phân rã ma trận $X = U \\Sigma V^T$, tối ưu cho ma trận thưa trong hệ thống gợi ý và xử lý ngôn ngữ.</li>
            <li><strong>LDA (Linear Discriminant Analysis)</strong>: Giảm chiều có giám sát nhằm tối đa hóa khoảng cách giữa các lớp và tối thiểu hóa phương sai trong nội bộ từng lớp.</li>
            <li><strong>t-SNE</strong>: Giảm chiều phi tuyến bảo toàn cấu trúc lân cận cục bộ, tối ưu cho trực quan hóa dữ liệu phức tạp lên mặt phẳng 2D/3D.</li>
            <li><strong>UMAP</strong>: Thuật toán giảm chiều hiện đại dựa trên hình học vi phân và topo mờ, bảo toàn cả cấu trúc cục bộ lẫn toàn cục với tốc độ nhanh hơn t-SNE.</li>
          </ul>

          <h3>2. Association Rule Learning (Khai phá luật kết hợp):</h3>
          <ul>
            <li><strong>Các chỉ số cốt lõi</strong>: $\\text{Support} = P(A \\cap B)$, $\\text{Confidence} = P(B|A) = \\frac{P(A \\cap B)}{P(A)}$, $\\text{Lift} = \\frac{P(A \\cap B)}{P(A)P(B)}$.</li>
            <li><strong>Apriori</strong>: Quét cơ sở dữ liệu lặp từng cấp để tìm các tập mục thỏa mãn ngưỡng Min Support.</li>
            <li><strong>FP-Growth</strong>: Nén toàn bộ giao dịch vào cây Frequent Pattern Tree (FP-Tree), khai phá luật kết hợp nhanh gấp hàng chục lần Apriori mà không cần sinh tập ứng viên.</li>
            <li><strong>Eclat</strong>: Khai phá tập mục dựa trên phép giao thoa danh sách định danh giao dịch (TID-list).</li>
          </ul>
        `,
        starterCode: `from sklearn.decomposition import PCA, TruncatedSVD
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis as LDA
from sklearn.datasets import load_iris

data = load_iris()
X, y = data.data, data.target

# Nén 4 chiều về 2 chiều
pca = PCA(n_components=2).fit_transform(X)
svd = TruncatedSVD(n_components=2).fit_transform(X)
lda = LDA(n_components=2).fit(X, y).transform(X)

print(f"Kích thước ban đầu: {X.shape} -> Kích thước sau giảm chiều: {pca.shape}")
`
      }
    ]
  },

  // ---------------------------------------------------------------------------------------
  // MODULE 4: ENSEMBLE LEARNING (HỌC KẾT HỢP ĐỈNH CAO)
  // ---------------------------------------------------------------------------------------
  {
    id: "module-3",
    title: "3. Ensemble Learning (Học kết hợp)",
    description: "Bagging (Random Forest), Boosting (XGBoost, LightGBM, CatBoost, AdaBoost), Stacking & Voting.",
    icon: "layers",
    lessons: [
      {
        id: "lesson-ensemble-all",
        title: "3.1 Toàn cảnh Ensemble: Bagging, Boosting, Stacking & Voting",
        summary: "Chi tiết cơ chế Random Forest, phân tích so sánh XGBoost vs LightGBM vs CatBoost vs AdaBoost, Stacking và Hard/Soft Voting.",
        content: `
          <h3>1. Bagging vs Boosting</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3 bg-slate-900 border border-slate-700 rounded-lg">
              <h4 class="font-bold text-blue-400 mb-1">Bagging (Bootstrap Aggregating)</h4>
              <p>Lấy mẫu ngẫu nhiên có hoàn lại tạo ra $B$ tập con dữ liệu, huấn luyện <strong>song song</strong> $B$ mô hình độc lập và lấy trung bình (hoặc bỏ phiếu đa số). Giúp giảm phương sai (Variance) mà không làm tăng độ chệch (Bias).</p>
              <p class="text-slate-400 mt-1">Đại diện tiêu biểu: <strong>Random Forest</strong> (kết hợp lấy mẫu dữ liệu + ngẫu nhiên hóa tập con đặc trưng Feature Subsampling).</p>
            </div>
            <div class="p-3 bg-slate-900 border border-slate-700 rounded-lg">
              <h4 class="font-bold text-emerald-400 mb-1">Boosting</h4>
              <p>Huấn luyện <strong>tuần tự</strong> các mô hình cơ sở yếu (Weak Learners), mô hình sau tập trung tối ưu hóa hàm mất mát trên các lỗi sai của mô hình trước. Giúp giảm mạnh độ chệch (Bias).</p>
              <p class="text-slate-400 mt-1">Đại diện: <strong>AdaBoost, XGBoost, LightGBM, CatBoost</strong>.</p>
            </div>
          </div>

          <h3>2. So sánh 4 thuật toán Boosting hàng đầu:</h3>
          <ul>
            <li><strong>AdaBoost</strong>: Tăng trọng số cho các mẫu dự đoán sai sau mỗi vòng lặp thông qua hàm mất mát hàm mũ Exponential Loss.</li>
            <li><strong>XGBoost (Extreme Gradient Boosting)</strong>: Khai triển Taylor bậc 2 của hàm mất mát, bổ sung chuẩn hóa độ phức tạp cây $\\Omega(f) = \\gamma T + \\frac{1}{2} \\lambda \\sum w_j^2$ chống Overfitting.</li>
            <li><strong>LightGBM</strong>: Sử dụng thuật toán GOSS (Gradient-based One-Side Sampling) và EFB (Exclusive Feature Bundling), phân nhánh theo dạng lá (Leaf-wise), tốc độ siêu nhanh và tiết kiệm bộ nhớ.</li>
            <li><strong>CatBoost</strong>: Sử dụng Ordered Boosting và xử lý trực tiếp biến phân loại dạng chuỗi (Categorical features) mà không cần One-Hot Encoding thủ công, hạn chế rò rỉ thông tin mục tiêu (Target Leakage).</li>
          </ul>

          <h3>3. Stacking & Voting</h3>
          <ul>
            <li><strong>Stacking</strong>: Huấn luyện một mô hình Meta-Learner ở tầng 2 để học cách tối ưu hóa việc kết hợp các dự đoán ngoài mẫu (Out-of-Fold) của các mô hình cơ sở tầng 1.</li>
            <li><strong>Voting</strong>: <code>Hard Voting</code> (bầu chọn theo đa số nhãn dự đoán) và <code>Soft Voting</code> (tính trung bình xác suất có trọng số của các mô hình).</li>
          </ul>
        `,
        starterCode: `from sklearn.ensemble import RandomForestClassifier, AdaBoostClassifier, VotingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split

X, y = make_classification(n_samples=500, n_features=15, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

clf1 = LogisticRegression()
clf2 = RandomForestClassifier(n_estimators=50, random_state=42)
clf3 = AdaBoostClassifier(n_estimators=50, random_state=42)

voting_clf = VotingClassifier(estimators=[('lr', clf1), ('rf', clf2), ('ada', clf3)], voting='soft')
voting_clf.fit(X_train, y_train)

print(f"Độ chính xác Soft Voting Ensemble: {voting_clf.score(X_test, y_test)*100:.2f}%")
`
      }
    ]
  },

  // ---------------------------------------------------------------------------------------
  // MODULE 5: SEMI-SUPERVISED, SELF-SUPERVISED & TRANSFER LEARNING
  // ---------------------------------------------------------------------------------------
  {
    id: "module-4",
    title: "4. Semi-Supervised, Self-Supervised & Transfer Learning",
    description: "Self-Training, Co-Training, Contrastive Learning, Masked Language Modeling, BYOL, Fine-Tuning & Feature Extraction.",
    icon: "cpu",
    lessons: [
      {
        id: "lesson-semi-self-transfer",
        title: "4.1 Semi-Supervised, Self-Supervised (BYOL, Contrastive) & Transfer Learning",
        summary: "Tận dụng kho dữ liệu khổng lồ không nhãn, học biểu diễn tương phản và chuyển giao tri thức từ mô hình nền tảng.",
        content: `
          <h3>1. Semi-Supervised Learning (Học bán giám sát)</h3>
          <ul>
            <li><strong>Self-Training</strong>: Mô hình được huấn luyện trên lượng nhỏ dữ liệu có nhãn, sau đó dự đoán nhãn giả (Pseudo-labels) cho dữ liệu chưa nhãn. Các mẫu có độ tin cậy vượt ngưỡng được bổ sung vào tập huấn luyện để đào tạo lại.</li>
            <li><strong>Co-Training</strong>: Hai mô hình độc lập được huấn luyện trên hai tập thuộc tính tách biệt của dữ liệu và luân phiên gán nhãn bổ sung cho nhau.</li>
          </ul>

          <h3>2. Self-Supervised Learning (Học tự giám sát)</h3>
          <ul>
            <li><strong>Contrastive Learning (SimCLR / MoCo)</strong>: Kéo biểu diễn của hai phép biến đổi từ cùng một ảnh gốc (Positive pair) lại gần nhau và đẩy các ảnh khác (Negative pairs) ra xa trong không gian vector thông qua hàm mất mát InfoNCE Loss.</li>
            <li><strong>Masked Language Modeling (MLM)</strong>: Ẩn ngẫu nhiên một tỷ lệ từ trong câu (ví dụ 15% trong BERT) và yêu cầu mô hình dự đoán lại từ bị ẩn dựa trên ngữ cảnh hai chiều.</li>
            <li><strong>Generative Pretext Tasks</strong>: Đặt ra các nhiệm vụ phụ như tô màu ảnh xám, dự đoán góc xoay của ảnh để mô hình tự học biểu diễn.</li>
            <li><strong>BYOL (Bootstrap Your Own Latent)</strong>: Kiến trúc hai mạng Online Network và Target Network (cập nhật trọng số theo EMA), có khả năng học biểu diễn xuất sắc mà không cần đến các mẫu âm (Negative Samples).</li>
          </ul>

          <h3>3. Transfer Learning (Học chuyển giao)</h3>
          <ul>
            <li><strong>Feature Extraction</strong>: Đóng băng toàn bộ các tầng trích xuất đặc trưng của mô hình đã tiền huấn luyện, chỉ lấy vector nhúng (Embedding) làm đầu vào cho bộ phân loại mới.</li>
            <li><strong>Fine-Tuning</strong>: Mở khóa và tinh chỉnh lại một phần hoặc toàn bộ trọng số của mô hình tiền huấn luyện trên tập dữ liệu chuyên biệt với tốc độ học nhỏ.</li>
          </ul>
        `,
        starterCode: `print("Nguyên lý BYOL (Bootstrap Your Own Latent):")
print("- Online Network:  theta_online <- gradient descent")
print("- Target Network:  theta_target <- EMA(theta_target, theta_online)")
print("Học biểu diễn ngữ nghĩa tự giám sát mà không cần Negative Samples!")
`
      }
    ]
  },

  // ---------------------------------------------------------------------------------------
  // MODULE 6: GRAPH NEURAL NETWORKS (GNN) & AUTOENCODERS
  // ---------------------------------------------------------------------------------------
  {
    id: "module-5",
    title: "5. Graph Neural Networks (GNN) & Autoencoders",
    description: "Mạng nơ-ron đồ thị (GCN, GraphSAGE, GAT), Autoencoders và Variational Autoencoders (VAE).",
    icon: "git-branch",
    lessons: [
      {
        id: "lesson-gnn-autoencoders",
        title: "5.1 Graph Neural Networks (GCN, GraphSAGE, GAT) & VAE",
        summary: "Mô hình hóa dữ liệu cấu trúc mạng lưới, truyền tin Message Passing, GCN, GraphSAGE, GAT và sinh dữ liệu với VAE.",
        content: `
          <h3>1. Graph Neural Networks (GNN - Mạng nơ-ron đồ thị)</h3>
          <p>Dữ liệu đồ thị $G = (V, E)$ bao gồm các nút (Nodes $V$) và các cạnh liên kết (Edges $E$). GNN sử dụng cơ chế truyền tin (Message Passing) để tổng hợp thông tin từ các nút lân cận:</p>
          <ul>
            <li><strong>GCN (Graph Convolutional Networks)</strong>: Thực hiện phép tích chập trên ma trận kề chuẩn hóa $\\tilde{A}$: $$H^{(l+1)} = \\sigma\\left( \\tilde{D}^{-\\frac{1}{2}} \\tilde{A} \\tilde{D}^{-\\frac{1}{2}} H^{(l)} W^{(l)} \\right)$$</li>
            <li><strong>GraphSAGE (Sample and Aggregate)</strong>: Lấy mẫu số lượng nút lân cận cố định và tổng hợp thông tin qua các hàm gộp (Mean, LSTM, Max-Pooling), cho phép suy luận Inductive trên các nút mới chưa từng thấy.</li>
            <li><strong>GAT (Graph Attention Networks)</strong>: Sử dụng cơ chế Attention để tính toán trọng số liên kết $\\alpha_{ij}$ động giữa nút $i$ và nút $j$, cho phép các cạnh có mức độ quan trọng khác nhau.</li>
          </ul>

          <h3>2. Autoencoders & Variational Autoencoders (VAE)</h3>
          <ul>
            <li><strong>Autoencoders chuẩn</strong>: Encoder nén dữ liệu qua cổ chai Bottleneck thành vector tiềm ẩn $z$, Decoder giải mã tái tạo lại $\\hat{x}$. Tối ưu hóa hàm sai số tái tạo $\|x - \\hat{x}\|^2$.</li>
            <li><strong>VAE (Variational Autoencoders)</strong>: Encoder ánh xạ dữ liệu thành phân phối xác suất ngầm $q_\\phi(z|x) \\sim \\mathcal{N}(\\mu, \\sigma^2)$. Sử dụng kỹ thuật Reparameterization Trick $z = \\mu + \\sigma \\odot \\epsilon$ để lan truyền ngược gradient. Tối ưu hóa hàm mục tiêu ELBO: $$L_{VAE} = \\text{Reconstruction Loss} + D_{KL}(q_\\phi(z|x) \\| p(z))$$</li>
          </ul>
        `,
        starterCode: `import torch
import torch.nn as nn

# Cấu trúc một Autoencoder đơn giản trong PyTorch
class SimpleAutoencoder(nn.Module):
    def __init__(self, input_dim=784, latent_dim=32):
        super().__init__()
        self.encoder = nn.Sequential(
            nn.Linear(input_dim, 128),
            nn.ReLU(),
            nn.Linear(128, latent_dim)
        )
        self.decoder = nn.Sequential(
            nn.Linear(latent_dim, 128),
            nn.ReLU(),
            nn.Linear(128, input_dim),
            nn.Sigmoid()
        )
    def forward(self, x):
        z = self.encoder(x)
        x_recon = self.decoder(z)
        return x_recon

ae = SimpleAutoencoder()
print(ae)
`
      }
    ]
  },

  // ---------------------------------------------------------------------------------------
  // MODULE 7: TRANSFORMERS & VISION TRANSFORMERS (CHUYÊN SÂU)
  // ---------------------------------------------------------------------------------------
  {
    id: "module-6",
    title: "6. Transformers (BERT, GPT, T5, LLaMA, ViT)",
    description: "Khám phá các mô hình Transformer định hình AI hiện đại: BERT, GPT, T5, LLaMA và Vision Transformer (ViT).",
    icon: "sparkles",
    lessons: [
      {
        id: "lesson-transformer-models",
        title: "6.1 Hệ sinh thái Transformer: BERT, GPT, T5, LLaMA & Vision Transformer (ViT)",
        summary: "So sánh cơ chế Encoder-only, Decoder-only, Encoder-Decoder, kiến trúc LLaMA hiện đại và Vision Transformer.",
        content: `
          <h3>Bảng so sánh 5 kiến trúc Transformer trụ cột:</h3>
          <table class="w-full text-left text-xs text-slate-300 my-3 border border-slate-700">
            <thead class="bg-slate-800 text-slate-100 font-semibold">
              <tr>
                <th class="p-2 border border-slate-700">Mô hình</th>
                <th class="p-2 border border-slate-700">Kiến trúc</th>
                <th class="p-2 border border-slate-700">Mục tiêu Pretraining</th>
                <th class="p-2 border border-slate-700">Ứng dụng tối ưu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-blue-400">BERT</td>
                <td class="p-2 border border-slate-700">Encoder-only</td>
                <td class="p-2 border border-slate-700">Masked LM (MLM) + Next Sentence Prediction</td>
                <td class="p-2 border border-slate-700">Phân loại văn bản, Trích xuất thực thể (NER), Tìm kiếm</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-emerald-400">GPT</td>
                <td class="p-2 border border-slate-700">Decoder-only</td>
                <td class="p-2 border border-slate-700">Causal Language Modeling (Next Token Prediction)</td>
                <td class="p-2 border border-slate-700">Sinh văn bản, Trợ lý hội thoại, Viết mã nguồn</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-amber-400">T5</td>
                <td class="p-2 border border-slate-700">Encoder-Decoder</td>
                <td class="p-2 border border-slate-700">Span Corruption (Text-to-Text)</td>
                <td class="p-2 border border-slate-700">Dịch máy, Tóm tắt văn bản, Hỏi đáp</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-indigo-400">LLaMA</td>
                <td class="p-2 border border-slate-700">Decoder-only Hiện đại</td>
                <td class="p-2 border border-slate-700">Autoregressive + RoPE + SwiGLU + RMSNorm</td>
                <td class="p-2 border border-slate-700">Mô hình ngôn ngữ lớn nguồn mở hàng đầu</td>
              </tr>
              <tr>
                <td class="p-2 border border-slate-700 font-bold text-purple-400">ViT</td>
                <td class="p-2 border border-slate-700">Patch Encoder</td>
                <td class="p-2 border border-slate-700">Image Classification on Visual Tokens</td>
                <td class="p-2 border border-slate-700">Phân loại hình ảnh, Thị giác máy tính thay thế CNN</td>
              </tr>
            </tbody>
          </table>
        `,
        starterCode: `print("Hệ sinh thái Transformer:")
print("1. BERT:  Hiểu ngữ nghĩa 2 chiều (Bidirectional)")
print("2. GPT:   Sinh ngôn ngữ tự hồi quy (Autoregressive)")
print("3. T5:    Đồng nhất mọi tác vụ về Text-to-Text")
print("4. LLaMA: Chuẩn mực LLM nguồn mở hiệu năng cao")
print("5. ViT:   Đưa cơ chế Self-Attention vào thị giác máy tính")
`
      }
    ]
  },

  // ---------------------------------------------------------------------------------------
  // MODULE 8: GENERATIVE AI (TÂM ĐIỂM 2026)
  // ---------------------------------------------------------------------------------------
  {
    id: "module-7",
    title: "7. Generative AI (AI Tạo sinh - Tâm điểm 2026)",
    description: "Large Language Models (LLMs), Diffusion Models (Stable Diffusion 3, DALL-E 3), GANs và Multimodal Models.",
    icon: "bot",
    lessons: [
      {
        id: "lesson-genai-full",
        title: "7.1 Toàn bộ 4 nhánh GenAI: LLMs, Diffusion, GANs & Multimodal Models",
        summary: "GPT-4o, Claude 3, LLaMA 3, Stable Diffusion 3, StyleGAN3, Pix2Pix, CycleGAN và Multimodal GPT-4V/LLaVA.",
        content: `
          <h3>4 Trụ cột Generative AI trong sơ đồ 2026:</h3>
          <ol class="list-decimal pl-5 space-y-3 text-xs text-slate-300 my-2">
            <li><strong>Large Language Models (LLMs)</strong>:
              <br>• <em>Mô hình tiêu biểu:</em> <code>GPT-4/4o</code>, <code>Claude 3 (Opus/Sonnet)</code>, <code>LLaMA 3</code>, <code>Gemini 1.5</code>, <code>Mistral Large</code>.
              <br>• <em>Đặc điểm:</em> Hàng chục đến hàng trăm tỷ tham số, hỗ trợ ngữ cảnh triệu token, suy luận chuỗi tư duy (Chain-of-Thought).
            </li>
            <li><strong>Diffusion Models (Mô hình khuếch tán tạo ảnh & video)</strong>:
              <br>• <em>Mô hình tiêu biểu:</em> <code>Stable Diffusion 3</code>, <code>DALL-E 3</code>, <code>Imagen 3</code>, <code>Midjourney</code>.
              <br>• <em>Nguyên lý:</em> Forward Process thêm nhiễu Gauss $q(x_t|x_{t-1})$ và Reverse Process khử nhiễu $p_\\theta(x_{t-1}|x_t)$ qua mạng U-Net / DiT với Classifier-Free Guidance (CFG).
            </li>
            <li><strong>Generative Adversarial Networks (GANs)</strong>:
              <br>• <em>Mô hình tiêu biểu:</em> <code>StyleGAN3</code> (sinh chân dung siêu thực), <code>CycleGAN</code> (chuyển đổi phong cách tranh không cần cặp ảnh tương ứng), <code>Pix2Pix</code> (biến đổi phác thảo thành ảnh thật), <code>BigGAN</code>.
              <br>• <em>Nguyên lý:</em> Minimax Game giữa Bộ sinh Generator $G$ và Bộ phân biệt Discriminator $D$: $\\min_G \\max_D V(D, G)$.
            </li>
            <li><strong>Multimodal Models (Mô hình Đa phương thức)</strong>:
              <br>• <em>Mô hình tiêu biểu:</em> <code>GPT-4V / GPT-4o</code>, <code>Gemini 1.5 Pro</code>, <code>LLaVA</code>, <code>Qwen-VL</code>.
              <br>• <em>Đặc điểm:</em> Tiếp nhận, xử lý và lập luận đồng thời trên văn bản, hình ảnh, âm thanh và video.
            </li>
          </ol>
        `,
        starterCode: `# Bảng tổng kết các siêu mô hình AI Tạo sinh 2026
genai_ecosystem = {
    "LLMs": ["GPT-4o", "Claude 3.5 Sonnet", "LLaMA 3", "Gemini 1.5 Pro", "Mistral Large"],
    "Diffusion": ["Stable Diffusion 3", "Midjourney v6", "DALL-E 3", "Imagen 3"],
    "GANs": ["StyleGAN3", "CycleGAN", "Pix2Pix", "BigGAN"],
    "Multimodal": ["GPT-4V", "Gemini 1.5 Pro", "LLaVA-1.6", "Qwen-VL-Max"]
}

for domain, models in genai_ecosystem.items():
    print(f"[{domain}] -> {', '.join(models)}")
`
      }
    ]
  },

  // ---------------------------------------------------------------------------------------
  // MODULE 9: REINFORCEMENT LEARNING (HỌC TĂNG CƯỜNG)
  // ---------------------------------------------------------------------------------------
  {
    id: "module-8",
    title: "8. Reinforcement Learning (Học tăng cường)",
    description: "Q-Learning, Deep Q-Network (DQN), SARSA, Policy Gradient, Actor-Critic (A2C, PPO, DDPG) và RLHF.",
    icon: "rocket",
    lessons: [
      {
        id: "lesson-rl-full",
        title: "8.1 Toàn cảnh Reinforcement Learning: Value-based, Policy-based & Actor-Critic",
        summary: "Phương trình Bellman, Q-Learning, SARSA, DQN, Policy Gradient, PPO và vai trò của RLHF trong căn chỉnh LLM.",
        content: `
          <h3>1. Nền tảng Học tăng cường (Reinforcement Learning)</h3>
          <p>Tác tử (Agent) tương tác với Môi trường (Environment) theo khung Quá trình Quyết định Markov (MDP) $\\langle S, A, P, R, \\gamma \\rangle$ để tối đa hóa tổng phần thưởng chiết khấu $G_t = \\sum_{k=0}^\\infty \\gamma^k R_{t+k+1}$.</p>

          <h3>2. Các nhánh thuật toán chính trong sơ đồ:</h3>
          <ul>
            <li><strong>Value-Based (Dựa trên hàm giá trị)</strong>:
              <ul>
                <li><code>Q-Learning</code>: Thuật toán Off-policy cập nhật $Q(s, a) \\leftarrow Q(s, a) + \\alpha [r + \\gamma \\max_{a'} Q(s', a') - Q(s, a)]$.</li>
                <li><code>SARSA</code>: Thuật toán On-policy cập nhật dựa trên hành động thực tế tiếp theo $a'$.</li>
                <li><code>Deep Q-Network (DQN)</code>: Dùng mạng nơ-ron xấp xỉ hàm $Q(s, a)$ kết hợp Experience Replay Buffer và Target Network cố định.</li>
              </ul>
            </li>
            <li><strong>Policy-Based (Dựa trên hàm chính sách)</strong>:
              <ul>
                <li><code>Policy Gradient (REINFORCE)</code>: Tối ưu trực tiếp vector tham số $\\theta$ của chính sách $\\pi_\\theta(a|s)$ theo hướng gradient $\\nabla_\\theta J(\\theta) = \\mathbb{E}[\\nabla_\\theta \\log \\pi_\\theta(a|s) G_t]$.</li>
              </ul>
            </li>
            <li><strong>Actor-Critic (Kết hợp Diễn viên - Nhà phê bình)</strong>:
              <ul>
                <li><code>A2C (Advantage Actor-Critic)</code>: Dùng hàm Advantage $A(s, a) = Q(s, a) - V(s)$ giảm phương sai.</li>
                <li><code>PPO (Proximal Policy Optimization)</code>: Sử dụng hàm mục tiêu kẹp Clipped Surrogate Objective tránh bước cập nhật chính sách quá lớn. Thuật toán cốt lõi của RLHF cho LLM.</li>
                <li><code>DDPG (Deep Deterministic Policy Gradient)</code>: Actor-Critic cho không gian hành động liên tục (Continuous Action Space) trong điều khiển Robot.</li>
              </ul>
            </li>
          </ul>
        `,
        starterCode: `print("Thuật toán PPO (Proximal Policy Optimization):")
print("L^{CLIP}(theta) = E [ min( r_t(theta)*A_t, clip(r_t(theta), 1-eps, 1+eps)*A_t ) ]")
print("Nền tảng căn chỉnh RLHF giúp ChatGPT an toàn và hữu ích hơn!")
`
      }
    ]
  },

  // ---------------------------------------------------------------------------------------
  // MODULE 10: PROBABILISTIC GRAPHICAL MODELS (MÔ HÌNH ĐỒ THỊ XÁC SUẤT)
  // ---------------------------------------------------------------------------------------
  {
    id: "module-9",
    title: "9. Probabilistic Graphical Models (Mô hình đồ thị xác suất)",
    description: "Bayesian Networks, Markov Random Fields (MRF) và Hidden Markov Models (HMM).",
    icon: "help-circle",
    lessons: [
      {
        id: "lesson-pgm-full",
        title: "9.1 Probabilistic Graphical Models: Bayesian Networks, MRF & HMM",
        summary: "Đồ thị có hướng DAG, phân tích nhân tử xác suất, Trường ngẫu nhiên Markov và Mô hình Markov ẩn (HMM).",
        content: `
          <h3>3 Mô hình đồ thị xác suất trong sơ đồ:</h3>
          <ul>
            <li><strong>Bayesian Networks (Mạng Bayes)</strong>:
              <br>• Đồ thị có hướng không chu trình (DAG) biểu diễn quan hệ nhân quả và phân tích nhân tử phân phối xác suất chung: $$P(X_1, \\dots, X_n) = \\prod_{i=1}^n P(X_i | \\text{Parents}(X_i))$$
              <br>• Dùng tiêu chuẩn d-separation để kiểm tra tính độc lập có điều kiện giữa các biến ngẫu nhiên.
            </li>
            <li class="mt-2"><strong>Markov Random Fields (MRF - Trường ngẫu nhiên Markov)</strong>:
              <br>• Đồ thị vô hướng mô hình hóa quan hệ phụ thuộc không gian đối xứng thông qua hàm thế năng Clique $\\psi_C(x_C)$ và phân phối Gibbs: $$P(x) = \\frac{1}{Z} \\prod_{C \\in \\text{Cliques}} \\psi_C(x_C)$$
              <br>• Ứng dụng rộng rãi trong phân vùng ảnh (Image Segmentation) và khử nhiễu.
            </li>
            <li class="mt-2"><strong>Hidden Markov Models (HMM - Mô hình Markov ẩn)</strong>:
              <br>• Mô hình chuỗi xác suất với trạng thái ẩn $S$ sinh ra chuỗi quan sát $O$ thông qua ma trận chuyển trạng thái $A$ và ma trận phát xạ $B$.
              <br>• Giải quyết 3 bài toán kinh điển: Đánh giá (Forward-Backward), Giải mã chuỗi ẩn tối ưu (Thuật toán Viterbi), và Học tham số (Thuật toán Baum-Welch / EM).
            </li>
          </ul>
        `,
        starterCode: `print("Hidden Markov Model (HMM) 3 bài toán cốt lõi:")
print("1. Evaluation: Forward-Backward Algorithm")
print("2. Decoding:   Viterbi Dynamic Programming Algorithm")
print("3. Learning:   Baum-Welch (Expectation-Maximization) Algorithm")
`
      }
    ]
  }
];

// =========================================================================================
// TỪ ĐIỂN THUẬT NGỮ CHUYÊN NGÀNH AI / ML / DL (A - Z GLOSSARY)
// =========================================================================================
window.ML_GLOSSARY = [
  { term: "Perceptron", desc: "Đơn vị tính toán nơ-ron cơ bản nhận đầu vào, nhân trọng số, cộng bias và áp dụng hàm kích hoạt phi tuyến.", category: "Deep Learning" },
  { term: "Backpropagation", desc: "Thuật toán lan truyền ngược lỗi từ lớp đầu ra về các lớp trước bằng quy tắc đạo hàm chuỗi (Chain Rule) để tính gradient.", category: "Deep Learning" },
  { term: "ReLU (Rectified Linear Unit)", desc: "Hàm kích hoạt f(x) = max(0, x), tính toán siêu nhanh và chống triệt tiêu gradient ở miền dương.", category: "Deep Learning" },
  { term: "Softmax", desc: "Hàm kích hoạt biến đổi vector điểm số logits thành phân phối xác suất có tổng bằng 1.0 cho bài toán phân loại đa lớp.", category: "Deep Learning" },
  { term: "Adam Optimizer", desc: "Bộ tối ưu hóa kết hợp ưu điểm của cả Momentum (lực quán tính) và RMSProp (tự điều chỉnh learning rate).", category: "Optimization" },
  { term: "Dropout", desc: "Kỹ thuật Regularization ngẫu nhiên ngắt kết nối một tỷ lệ nơ-ron (ví dụ 30-50%) ở mỗi bước huấn luyện để chống Overfitting.", category: "Regularization" },
  { term: "Batch Normalization", desc: "Kỹ thuật chuẩn hóa đầu ra lớp ẩn về phân phối chuẩn (mean=0, var=1) giúp tăng tốc độ huấn luyện và ổn định mạng.", category: "Deep Learning" },
  { term: "Convolution (Tích chập)", desc: "Phép trượt bộ lọc Filter/Kernel qua ảnh để trích xuất các bản đồ đặc trưng Feature Map không gian.", category: "Computer Vision" },
  { term: "Max Pooling", desc: "Lớp gộp lấy giá trị lớn nhất trong từng vùng cửa sổ để nén kích thước không gian và giảm số tham số tính toán.", category: "Computer Vision" },
  { term: "ResNet (Residual Network)", desc: "Kiến trúc mạng tích chập đột phá sử dụng kết nối tắt F(x) + x giúp giải quyết triệt để lỗi tiêu biến gradient ở mạng sâu >100 lớp.", category: "Computer Vision" },
  { term: "LSTM (Long Short-Term Memory)", desc: "Mạng nơ-ron hồi quy có 3 cổng Forget, Input, Output Gates giúp ghi nhớ thông tin ngữ cảnh dài hạn.", category: "Sequence & NLP" },
  { term: "Self-Attention", desc: "Cơ chế tự chú ý tính toán Attention(Q,K,V) = softmax(QK^T / sqrt(d_k))V cho phép mọi từ tương tác trực tiếp với nhau.", category: "Transformers" },
  { term: "Positional Encoding", desc: "Cơ chế mã hóa vị trí bằng hàm Sin/Cos hoặc vector học được để cung cấp thứ tự từ cho kiến trúc Transformer song song.", category: "Transformers" },
  { term: "Vision Transformer (ViT)", desc: "Áp dụng Transformer trực tiếp lên các mảnh cắt ảnh Patch 16x16 thay thế cho mạng tích chập CNN.", category: "Computer Vision" },
  { term: "Large Language Model (LLM)", desc: "Mô hình ngôn ngữ hàng chục tỷ tham số được tiền huấn luyện trên quy mô khổng lồ (GPT-4o, LLaMA 3, Claude 3).", category: "Generative AI" },
  { term: "RAG (Retrieval-Augmented Generation)", desc: "Kiến trúc kết hợp truy xuất tài liệu thực tế từ Vector Database với LLM để trả lời chính xác, tránh bịa đặt.", category: "Generative AI" },
  { term: "LoRA (Low-Rank Adaptation)", desc: "Kỹ thuật tinh chỉnh tham số hiệu quả đóng băng mô hình gốc và chèn thêm ma trận phân rã hạng thấp.", category: "Fine-Tuning" },
  { term: "Diffusion Model", desc: "Mô hình tạo sinh ảnh dựa trên quá trình khử nhiễu từng bước từ nhiễu ngẫu nhiên Gaussian (Stable Diffusion 3, Midjourney).", category: "Generative AI" },
  { term: "PPO (Proximal Policy Optimization)", desc: "Thuật toán học tăng cường tối ưu chính sách, đóng vai trò nền tảng trong quy trình căn chỉnh RLHF cho ChatGPT.", category: "Reinforcement Learning" },
  { term: "Overfitting", desc: "Hiện tượng mô hình học vẹt cả nhiễu của tập Train, dẫn đến Train Loss cực thấp nhưng Validation Loss tăng vọt.", category: "Evaluation" },
  { term: "DBSCAN", desc: "Thuật toán phân cụm theo mật độ điểm lân cận trong bán kính epsilon, tự động lọc điểm nhiễu ngoại lai.", category: "Unsupervised" },
  { term: "PCA (Principal Component Analysis)", desc: "Phương pháp giảm chiều dữ liệu tuyến tính tìm các trục trực giao bảo toàn phương sai lớn nhất của dữ liệu.", category: "Unsupervised" },
  { term: "XGBoost", desc: "Thư viện tăng cường độ dốc tối ưu hóa khai triển Taylor bậc 2 và chuẩn hóa độ phức tạp cây.", category: "Ensemble" },
  { term: "GNN (Graph Neural Network)", desc: "Mạng nơ-ron chuyên dụng xử lý dữ liệu cấu trúc đồ thị mạng lưới qua cơ chế truyền tin Message Passing.", category: "Graph" }
];
