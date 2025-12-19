#!/bin/bash

# ColonyCore Website Launch Script
# This script starts a local HTTP server to test the website

PORT=${1:-8000}

echo "=========================================="
echo "  ColonyCore Website Testing Server"
echo "=========================================="
echo ""
echo "Starting server on port $PORT..."
echo ""

# Try different server options based on what's available
if command -v python3 &> /dev/null; then
    echo "Using Python 3 HTTP server"
    echo "Access the website at: http://localhost:$PORT/pages/index.html"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    echo "Using Python 2 HTTP server"
    echo "Access the website at: http://localhost:$PORT/pages/index.html"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    python -m SimpleHTTPServer $PORT
elif command -v php &> /dev/null; then
    echo "Using PHP built-in server"
    echo "Access the website at: http://localhost:$PORT/pages/index.html"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    php -S localhost:$PORT
else
    echo "Error: No suitable HTTP server found!"
    echo "Please install Python or PHP to run this script."
    echo ""
    echo "Alternatively, you can use:"
    echo "  - npx serve ."
    echo "  - Any other HTTP server of your choice"
    exit 1
fi
