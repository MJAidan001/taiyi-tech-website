#!/bin/bash

# 检查 Python 版本
if command -v python3 &>/dev/null; then
    PYTHON=python3
elif command -v python &>/dev/null; then
    PYTHON=python
else
    echo "错误：未找到 Python"
    exit 1
fi

# 启动 HTTP 服务器
echo "正在启动服务器..."
echo "请访问 http://localhost:8000"
echo "按 Ctrl+C 停止服务器"
$PYTHON -m http.server 8000 