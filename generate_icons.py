"""生成微信小程序 tabBar 占位图标 81x81 PNG"""
import os
from PIL import Image, ImageDraw

ICON_DIR = os.path.join(os.path.dirname(__file__), 'src', 'assets', 'icons')
SIZE = 81
GRAY = '#999999'
ORANGE = '#ff6b35'

def circle(draw, cx, cy, r, color):
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], fill=color)

def draw_home(size, color):
    img = Image.new('RGBA', (size, size), (0,0,0,0))
    d = ImageDraw.Draw(img)
    m = size // 2
    # house body
    d.polygon([(m, 8), (8, m-4), (size-8, m-4)], fill=color)
    # house rectangle
    d.rectangle([14, m-4, size-14, size-10], fill=color)
    # door
    d.rectangle([m-8, size-34, m+8, size-10], fill='white')
    return img

def draw_menu(size, color):
    img = Image.new('RGBA', (size, size), (0,0,0,0))
    d = ImageDraw.Draw(img)
    h = 6; gap = 10
    for i in range(3):
        y = 20 + i*(h+gap)
        d.rounded_rectangle([10, y, size-10, y+h], radius=3, fill=color)
    return img

def draw_cart(size, color):
    img = Image.new('RGBA', (size, size), (0,0,0,0))
    d = ImageDraw.Draw(img)
    # basket
    d.rounded_rectangle([8, 28, size-8, size-14], radius=4, fill=color)
    # handle
    d.arc([22, 12, size-22, 36], 180, 0, fill=color, width=5)
    # wheels
    circle(d, 22, size-6, 5, color)
    circle(d, size-22, size-6, 5, color)
    return img

def draw_order(size, color):
    img = Image.new('RGBA', (size, size), (0,0,0,0))
    d = ImageDraw.Draw(img)
    # clipboard
    d.rounded_rectangle([16, 12, size-16, size-12], radius=4, fill=color)
    # clip
    d.rounded_rectangle([m:=size//2-10, 6, m+20, 18], radius=3, fill=color)
    # lines
    for i in range(3):
        y = 28 + i*10
        d.rounded_rectangle([24, y, size-24, y+4], radius=2, fill='white')
    return img

def draw_profile(size, color):
    img = Image.new('RGBA', (size, size), (0,0,0,0))
    d = ImageDraw.Draw(img)
    m = size // 2
    # head
    circle(d, m, 22, 14, color)
    # body
    d.ellipse([8, 36, size-8, size-6], fill=color)
    return img

icons = {
    'home': draw_home,
    'menu': draw_menu,
    'cart': draw_cart,
    'order': draw_order,
    'profile': draw_profile,
}

for name, draw_fn in icons.items():
    inactive = draw_fn(SIZE, GRAY)
    active = draw_fn(SIZE, ORANGE)
    inactive.save(os.path.join(ICON_DIR, f'{name}.png'))
    active.save(os.path.join(ICON_DIR, f'{name}-active.png'))
    print(f'Generated: {name}.png, {name}-active.png')

print('\nDone! 10 icons generated.')
