#! /bin/bash

TYPE=${1:-"dev"}

if [ "$TYPE" = "dev" ]; then
    uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
elif [ "$TYPE" = "prod" ]; then
    uvicorn app.main:app --host 0.0.0.0 --port 8000
elif [ "$TYPE" = "test" ]; then
    pytest tests/
else
    echo "Unknown type: $TYPE"
    echo "Usage: ./run.sh [dev|prod|test]"
    exit 1
fi