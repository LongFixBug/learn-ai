#!/usr/bin/env python3
"""
ML Learning Hub - Local Web Server Launcher
Tự động khởi động máy chủ cục bộ và mở cổng học tập trên trình duyệt.
"""

import os
import sys
import webbrowser
import http.server
import socketserver
from pathlib import Path

PORT = 8080
DIRECTORY = Path(__file__).resolve().parent

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)

    def end_headers(self):
        # Thiết lập header để cho phép tải Pyodide và WebAssembly mượt mà
        self.send_header("Cross-Origin-Opener-Policy", "same-origin")
        self.send_header("Cross-Origin-Embedder-Policy", "require-corp")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

def main():
    os.chdir(DIRECTORY)
    
    # Tìm kiếm cổng khả dụng nếu 8080 đang bận
    port = PORT
    server = None
    for attempt in range(10):
        try:
            socketserver.TCPServer.allow_reuse_address = True
            server = socketserver.TCPServer(("", port), CustomHandler)
            break
        except OSError:
            port += 1

    if not server:
        print(f"❌ Không thể mở cổng từ {PORT} đến {port}!")
        sys.exit(1)

    url = f"http://localhost:{port}"
    print("=" * 65)
    print("🚀 ML LEARNING HUB - HỆ THỐNG HỌC TẬP AI TỪ A-Z ĐÃ KHỞI ĐỘNG!")
    print(f"🌐 Truy cập trực tiếp tại: {url}")
    print("=" * 65)
    print("💡 Nhấn Ctrl + C để dừng máy chủ bất kỳ lúc nào.\n")

    try:
        webbrowser.open(url)
    except Exception:
        pass

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Đã tắt máy chủ học tập. Hẹn gặp lại bạn!")
        server.server_close()

if __name__ == "__main__":
    main()
