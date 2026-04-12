from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
BRAND_DIR = ROOT / "public" / "brand"
ICON_PATH = ROOT / "app" / "icon.png"

COLORS = {
    "bg": "#0b100f",
    "surface": "#13211d",
    "jade": "#2f6958",
    "jade_light": "#8bb7a4",
    "crimson": "#b94750",
    "ivory": "#eff3ef",
    "gold": "#cfbc87",
    "mist": "#b8c3bd",
}

FONT_PATHS = {
    "songti": "/System/Library/Fonts/Supplemental/Songti.ttc",
    "heiti": "/System/Library/Fonts/STHeiti Medium.ttc",
    "didot": "/System/Library/Fonts/Supplemental/Didot.ttc",
    "baskerville": "/System/Library/Fonts/Supplemental/Baskerville.ttc",
}


def load_font(kind: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(FONT_PATHS[kind], size)


def rgba(hex_color: str, alpha: int = 255) -> tuple[int, int, int, int]:
    hex_color = hex_color.lstrip("#")
    return tuple(int(hex_color[i : i + 2], 16) for i in (0, 2, 4)) + (alpha,)


def draw_frame(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int]) -> None:
    draw.rounded_rectangle(box, radius=34, outline=rgba(COLORS["jade"], 220), width=4)
    inset = 18
    draw.rounded_rectangle(
        (box[0] + inset, box[1] + inset, box[2] - inset, box[3] - inset),
        radius=24,
        outline=rgba(COLORS["gold"], 140),
        width=2,
    )


def generate_mark() -> Image.Image:
    size = 768
    image = Image.new("RGBA", (size, size), COLORS["bg"])
    draw = ImageDraw.Draw(image)

    for offset in range(-size, size, 36):
        draw.line(
            [(offset, 0), (offset + size, size)],
            fill=rgba(COLORS["jade_light"], 14),
            width=1,
        )

    draw_frame(draw, (56, 56, size - 56, size - 56))
    draw.rounded_rectangle(
        (112, 112, size - 112, size - 112),
        radius=24,
        fill=rgba(COLORS["surface"], 210),
        outline=rgba(COLORS["jade"], 140),
        width=2,
    )

    songti = load_font("songti", 300)
    didot = load_font("didot", 62)
    glyph = "丽"
    text_box = draw.textbbox((0, 0), glyph, font=songti)
    glyph_x = (size - (text_box[2] - text_box[0])) / 2
    glyph_y = 150
    draw.text((glyph_x, glyph_y), glyph, font=songti, fill=rgba(COLORS["ivory"]))

    draw.line((168, 146, size - 168, 146), fill=rgba(COLORS["gold"], 180), width=2)
    draw.line((168, size - 148, size - 168, size - 148), fill=rgba(COLORS["gold"], 180), width=2)

    seal_box = (size - 214, size - 214, size - 138, size - 138)
    draw.rounded_rectangle(seal_box, radius=10, fill=rgba(COLORS["crimson"]))
    label = "CLH"
    label_box = draw.textbbox((0, 0), label, font=didot)
    label_x = seal_box[0] + (seal_box[2] - seal_box[0] - (label_box[2] - label_box[0])) / 2
    label_y = seal_box[1] + 12
    draw.text((label_x, label_y), label, font=didot, fill=rgba(COLORS["ivory"]))

    return image


def generate_hero() -> Image.Image:
    width, height = 1400, 1800
    image = Image.new("RGBA", (width, height), COLORS["bg"])
    draw = ImageDraw.Draw(image)

    for x in range(-height, width, 44):
        draw.line([(x, 0), (x + height, height)], fill=rgba(COLORS["jade_light"], 12), width=1)

    for x in range(0, width, 96):
        draw.line([(x, 0), (x, height)], fill=rgba(COLORS["ivory"], 8), width=1)

    left_panel = (92, 90, 468, height - 92)
    draw.rounded_rectangle(left_panel, radius=24, fill=rgba(COLORS["surface"], 210))
    draw_frame(draw, left_panel)

    draw.rounded_rectangle((146, 148, 412, 418), radius=20, outline=rgba(COLORS["jade_light"], 190), width=3)
    draw.line((146, 452, 412, 452), fill=rgba(COLORS["gold"], 190), width=3)
    draw.line((146, 146, 146, 988), fill=rgba(COLORS["gold"], 120), width=2)
    draw.line((412, 146, 412, 988), fill=rgba(COLORS["gold"], 120), width=2)
    draw.line((146, 988, 412, 988), fill=rgba(COLORS["gold"], 120), width=2)

    draw.polygon(
        [(180, 720), (279, 632), (378, 720), (378, 924), (180, 924)],
        outline=rgba(COLORS["jade_light"], 200),
        fill=rgba(COLORS["jade"], 60),
    )
    draw.line((209, 760, 348, 760), fill=rgba(COLORS["gold"], 180), width=2)
    draw.line((226, 796, 332, 796), fill=rgba(COLORS["gold"], 160), width=2)

    seal_positions = [(190, 1092), (282, 1092), (374, 1092)]
    for x, y in seal_positions:
        draw.rounded_rectangle((x, y, x + 56, y + 56), radius=10, fill=rgba(COLORS["crimson"]))

    songti_large = load_font("songti", 198)
    didot_large = load_font("didot", 74)
    baskerville = load_font("baskerville", 44)
    heiti = load_font("heiti", 42)

    draw.multiline_text(
        (916, 180),
        "陈\n丽\n华",
        font=songti_large,
        fill=rgba(COLORS["ivory"]),
        spacing=12,
        align="center",
    )
    draw.line((812, 160, 812, height - 160), fill=rgba(COLORS["gold"], 130), width=2)
    draw.line((850, 160, 1188, 160), fill=rgba(COLORS["gold"], 130), width=2)
    draw.line((850, height - 160, 1188, height - 160), fill=rgba(COLORS["gold"], 130), width=2)

    draw.text((860, 1180), "LATEST PUBLIC TIMELINE", font=didot_large, fill=rgba(COLORS["gold"]))
    draw.text((860, 1294), "APRIL 2026", font=didot_large, fill=rgba(COLORS["ivory"]))
    draw.text((860, 1438), "absolute dates / public sources / cultural legacy", font=baskerville, fill=rgba(COLORS["mist"]))

    bottom_box = (860, 1546, 1260, 1688)
    draw.rounded_rectangle(bottom_box, radius=18, outline=rgba(COLORS["jade_light"], 170), width=2)
    draw.text((892, 1582), "关键字站", font=heiti, fill=rgba(COLORS["jade_light"]))
    draw.text((892, 1632), "陈丽华最新消息", font=heiti, fill=rgba(COLORS["ivory"]))

    return image


def main() -> None:
    BRAND_DIR.mkdir(parents=True, exist_ok=True)

    mark = generate_mark()
    hero = generate_hero()

    mark.save(BRAND_DIR / "chenlihua-mark.png")
    hero.save(BRAND_DIR / "chenlihua-hero.png")
    mark.resize((256, 256), Image.Resampling.LANCZOS).save(ICON_PATH)


if __name__ == "__main__":
    main()
