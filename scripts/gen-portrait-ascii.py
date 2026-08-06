#!/usr/bin/env python3
"""one-off: myPic.png -> small ASCII portrait (rigid grid, light bg -> spaces)."""
from PIL import Image, ImageOps
import sys

SRC = sys.argv[1] if len(sys.argv) > 1 else '/Users/dagas/WorkFiles/Resume/myPic.png'
OUT = 'src/data/portrait-ascii.txt'
COLS, ROWS = 34, 22          # char-cell aspect ~0.5 compensates in ROWS
RAMP = '@%#*+=-:. '          # dark -> light
THRESHOLD = 205              # luminance above this = background = space

img = Image.open(SRC).convert('L')
img = img.crop((60, 40, 740, 920))   # face + hair, drop shoulders/shirt noise
img = ImageOps.autocontrast(img, cutoff=2)
img = img.resize((COLS, ROWS))
px = img.load()
lines = []
for y in range(ROWS):
    row = ''
    for x in range(COLS):
        v = px[x, y]
        row += ' ' if v >= THRESHOLD else RAMP[min(int(v / 256 * len(RAMP)), len(RAMP) - 1)]
    lines.append(row)          # NO rstrip — rigid grid
open(OUT, 'w').write('\n'.join(lines) + '\n')
print(f'wrote {OUT} ({COLS}x{ROWS})')
