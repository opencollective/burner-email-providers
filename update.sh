#!/bin/bash

REMOTE_NAME="list"
REMOTE_URL="git@github.com:wesbos/burner-email-providers.git"

if git remote get-url "$REMOTE_NAME" &> /dev/null; then
    echo "Remote '$REMOTE_NAME' already exists"
else
    echo "Adding remote '$REMOTE_NAME'..."
    git remote add "$REMOTE_NAME" "$REMOTE_URL"
    echo "Remote '$REMOTE_NAME' added successfully"
fi

echo "Fetching remote..."
git fetch "$REMOTE_NAME"
echo "Commiting updated list..."
git checkout list/master -- emails.txt
git commit -am 'chore: update emails.txt list'
