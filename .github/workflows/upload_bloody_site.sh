#!/bin/bash
cd "$(dirname "$0")"
git init
git remote add origin https://github.com/LordBloody/bloody-artist-site.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
