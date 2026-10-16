/**
 * The extended colour palette shipped by `dist/css/adminlte-colors.css`.
 *
 * Single source of truth for the demo page (UI/colors), the docs page
 * (docs/colors), `scripts/palette.mjs` and the unit test that keeps this file
 * and `src/scss/colors/_variables.scss` in step. The SCSS map is what actually
 * compiles; this module carries the metadata around it (roles, descriptions,
 * presets) and the OKLCH / contrast maths used to describe and verify it.
 *
 * Not shipped in the npm package (see `files` in package.json).
 */

// ---------------------------------------------------------------------------
// OKLCH <-> sRGB and WCAG contrast (Björn Ottosson's Oklab matrices)
// ---------------------------------------------------------------------------

const srgbToLinear = c => (c <= 0.040_45 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)
const linearToSrgb = c => (c <= 0.003_130_8 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055)

export const hexToRgb = hex => hex.replace('#', '').match(/../g).map(h => Number.parseInt(h, 16) / 255)
export const rgbToHex = rgb => '#' + rgb.map(v => Math.round(Math.min(1, Math.max(0, v)) * 255).toString(16).padStart(2, '0')).join('')

export function rgbToOklab([r, g, b]) {
  const [lr, lg, lb] = [r, g, b].map(srgbToLinear)
  const l = Math.cbrt(0.412_221_470_8 * lr + 0.536_332_536_3 * lg + 0.051_445_992_9 * lb)
  const m = Math.cbrt(0.211_903_498_2 * lr + 0.680_699_545_1 * lg + 0.107_396_956_6 * lb)
  const s = Math.cbrt(0.088_302_461_9 * lr + 0.281_718_837_6 * lg + 0.629_978_700_5 * lb)
  return {
    L: 0.210_454_255_3 * l + 0.793_617_785 * m - 0.004_072_046_8 * s,
    a: 1.977_998_495_1 * l - 2.428_592_205 * m + 0.450_593_709_9 * s,
    b: 0.025_904_037_1 * l + 0.782_771_766_2 * m - 0.808_675_766 * s
  }
}

export function oklabToLinearRgb({ L, a, b }) {
  const l_ = L + 0.396_337_777_4 * a + 0.215_803_757_3 * b
  const m_ = L - 0.105_561_345_8 * a - 0.063_854_172_8 * b
  const s_ = L - 0.089_484_177_5 * a - 1.291_485_548 * b
  const l = l_ ** 3
  const m = m_ ** 3
  const s = s_ ** 3
  return [
    4.076_741_662_1 * l - 3.307_711_591_3 * m + 0.230_969_929_2 * s,
    -1.268_438_004_6 * l + 2.609_757_401_1 * m - 0.341_319_396_5 * s,
    -0.004_196_086_3 * l - 0.703_418_614_7 * m + 1.707_614_701 * s
  ]
}

const oklchToOklab = ({ L, C, h }) => ({ L, a: C * Math.cos((h * Math.PI) / 180), b: C * Math.sin((h * Math.PI) / 180) })

export function oklabToOklch({ L, a, b }) {
  let h = (Math.atan2(b, a) * 180) / Math.PI
  if (h < 0) {
    h += 360
  }

  return { L, C: Math.hypot(a, b), h }
}

export const hexToOklch = hex => oklabToOklch(rgbToOklab(hexToRgb(hex)))
export const oklchToRgb = lch => oklabToLinearRgb(oklchToOklab(lch)).map(linearToSrgb)
export const oklchToHex = lch => rgbToHex(oklchToRgb(lch))
export const inGamut = rgb => rgb.every(v => v >= -0.0005 && v <= 1.0005)

/**
Largest chroma still inside sRGB for this lightness and hue.
*/
export function maxChroma(L, h, limit = 0.4) {
  let lo = 0
  let hi = limit
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2
    if (inGamut(oklchToRgb({ L, C: mid, h }))) {
      lo = mid
    } else {
      hi = mid
    }
  }

  return lo
}

export const luminance = hex => {
  const [r, g, b] = hexToRgb(hex).map(srgbToLinear)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export const contrastWhite = hex => 1.05 / (luminance(hex) + 0.05)
export const contrastBlack = hex => (luminance(hex) + 0.05) / 0.05

/**
Smallest angular distance between two hues, in degrees.
*/
export const hueDistance = (a, b) => {
  const d = Math.abs(a - b) % 360
  return d > 180 ? 360 - d : d
}

/**
 * The lightest colour of this hue whose white text still reaches `target`,
 * with chroma capped at `cap` (and at 96 % of the sRGB gamut). This is the
 * rule every chromatic palette colour was generated with.
 */
export function designColor(h, { cap = 0.2, target = 4.6, gamutFraction = 0.96 } = {}) {
  for (let L = 0.75; L >= 0.3; L -= 0.0005) {
    const C = Math.min(cap, maxChroma(L, h) * gamutFraction)
    const hex = oklchToHex({ L, C, h })
    if (contrastWhite(hex) >= target) {
      return { hex, L, C, h }
    }
  }

  return null
}

/**
 * For an arbitrary colour: keep hue and chroma, lower lightness until white
 * text reaches `target`. Used by the brand-colour checker on UI/colors.html
 * (which carries its own copy of the maths — keep the two in step).
 */
export function fixForWhiteText(hex, target = 4.6) {
  const { C, h } = hexToOklch(hex)
  for (let L = hexToOklch(hex).L; L >= 0.2; L -= 0.0025) {
    const c = Math.min(C, maxChroma(L, h) * 0.98)
    const candidate = oklchToHex({ L, C: c, h })
    if (contrastWhite(candidate) >= target) {
      return candidate
    }
  }

  return null
}

// ---------------------------------------------------------------------------
// The palette
// ---------------------------------------------------------------------------

/**
 * Bootstrap 5.3 theme colours, for the hue-gap checks and the wheel on the docs
 * page. `hue` is OKLCH; measured, not chosen.
 */
export const bootstrapThemeColors = [
  { name: 'primary', hex: '#0d6efd' },
  { name: 'success', hex: '#198754' },
  { name: 'danger', hex: '#dc3545' },
  { name: 'warning', hex: '#ffc107' },
  { name: 'info', hex: '#0dcaf0' },
  { name: 'secondary', hex: '#6c757d' }
].map(c => ({ ...c, hue: hexToOklch(c.hex).h, chroma: hexToOklch(c.hex).C }))

/**
 * Generation targets. `hue` is the OKLCH hue each chromatic colour was designed
 * at (`designColor(hue)`); neutrals are given as explicit OKLCH.
 * `scripts/palette.mjs` regenerates the hexes from these.
 */
// WCAG AA 标准适用于普通文本
export const AA_RATIO = 4.5

export const paletteTargets = {
  cap: 0.2,
  target: 4.6,
  chromatic: { orange: 42, amber: 68, olive: 126, teal: 190, sky: 237, indigo: 283, violet: 303, fuchsia: 324, pink: 350 },
  neutral: {
    navy: { L: 0.3, C: 0.06, h: 262 },
    steel: { L: 0.4, C: 0.045, h: 262 },
    slate: { L: 0.5, C: 0.035, h: 255 },
    graphite: { L: 0.33, C: 0.012, h: 260 },
    midnight: { L: 0.24, C: 0.03, h: 285 }
  }
}

const describe = (name, hex, role, description, use) => {
  const lch = hexToOklch(hex)
  return {
    name,
    hex,
    role,
    description,
    use,
    oklch: { L: lch.L, C: lch.C, h: lch.h },
    oklchLabel: `oklch(${lch.L.toFixed(2)} ${lch.C.toFixed(2)} ${lch.h.toFixed(0)})`,
    contrastWhite: contrastWhite(hex),
    contrastBlack: contrastBlack(hex),
    textColor: contrastWhite(hex) >= AA_RATIO ? 'white' : 'black',
    // 同样由设计决定：每种指定颜色均用白色清除AA
    textColorAA: contrastWhite(hex) >= AA_RATIO ? 'white' : 'black'
  }
}

/**
Must match `$lte-palette` in src/scss/colors/_variables.scss — the unit test enforces it.
*/
export const palette = [
  describe('orange', '#c84e10', 'chromatic', '焦橙色 —— 一种温暖的强调色，但又不至于像 "danger" 那样示警。', '销售额、订单，任何活跃但不带警报意味的东西。'),
  describe('amber', '#a56710', 'chromatic', '赭石色 —— 一种温暖的中性色，适合搭配 navy 和 graphite。', '待处理状态、次要指标。'),
  describe('olive', '#5f7f0f', 'chromatic', '苔藓绿 —— 一种土系绿，和 success 整整差了 31°。', '增长和环保类指标，但又不会让人读成"一切正常"。'),
  describe('teal', '#12827d', 'chromatic', '蓝绿色 —— 沉静的数据色。', '图表、表格，也是那些嫌 cyan 太亮的人默认会用的 "info"。'),
  describe('sky', '#127caf', 'chromatic', '经典的 AdminLTE 蓝，重新做了一版好让白色文字能达标。', '头部，也是 v2 skin-blue 的现代版演绎。'),
  describe('indigo', '#6f60ea', 'chromatic', '蓝紫色 —— 偏品牌感，和 primary 差 23°。', '侧边栏、主视觉组件、强烈的品牌强调色。'),
  describe('violet', '#9553db', 'chromatic', '紫色 —— 品红那一段的中间值。', '次要品牌强调色、标签。'),
  describe('fuchsia', '#b347be', 'chromatic', '品红 —— 用来强调，点到为止。', '高亮、一次性的徽章。'),
  describe('pink', '#cd388d', 'chromatic', '深粉色 —— v3 里的 "maroon"，重新设计过。', '营销和互动类指标。'),
  describe('navy', '#1d2d4c', 'neutral', '侧边栏深蓝 —— 深沉偏冷，但不是黑色。', '侧边栏；经典的深色侧边栏外观。'),
  describe('steel', '#3a4860', 'neutral', '中深蓝灰 —— 很多后台套件默认用的侧边栏色调。', '想要看起来"深色"、但又不想接近黑色的侧边栏。'),
  describe('slate', '#566577', 'neutral', '中度中性色 —— 一种冷调的灰蓝色。', '头部、柔和的卡片、次要侧边栏。'),
  describe('graphite', '#32363c', 'neutral', '接近黑色的冷灰。', '安静的侧边栏，让组件去承担颜色的表现。'),
  describe('midnight', '#1e1d2d', 'neutral', '接近黑色，带一点紫调。', '全深色界面（侧边栏和头部）；适合搭配鲜艳的强调色。')
]

export const paletteByName = Object.fromEntries(palette.map(c => [c.name, c]))

/**
 * Widget-row quartets chosen by hue relationship. Documented recommendations;
 * they generate no CSS.
 */
export const sets = [
  { name: 'Balanced', colors: ['indigo', 'teal', 'amber', 'pink'], why: '四种色相大致相隔 90°（283 · 190 · 68 · 350）—— 间隔拉到最大，任意两个组件都不会让人读成同一类。默认推荐方案。' },
  { name: 'Cool', colors: ['indigo', 'sky', 'teal', 'violet'], why: '从 190° 到 301° 的一段类似色。沉静，相邻色之间对比度低；适合数据密集、应该让数字唱主角的页面。' },
  { name: 'Warm', colors: ['pink', 'orange', 'amber', 'fuchsia'], why: '穿过红色的一段暖色（322° → 68°）。充满活力；适合电商、营销和销售仪表盘。' },
  { name: 'With Bootstrap', colors: ['primary', 'teal', 'orange', 'violet'], why: '调色板正好落在 Bootstrap 主题色之间的空档里，所以混用是安全的：primary 260 · teal 190 · orange 42 · violet 301。' }
]

/**
 * Sidebar + header pairs, grouped the way admin dashboards usually offer them.
 * A skin is just a background utility plus `data-bs-theme` on each element —
 * no CSS of its own. `boxes` are the two accents the previews and mini widgets
 * use with each skin.
 */
export const skinGroups = [
  { name: 'Light', note: '白色界面；颜色由组件和当前激活项来承担。' },
  { name: 'Semi-dark', note: '深色侧边栏、浅色头部 —— 最常见的后台布局，也是 AdminLTE 的默认布局。' },
  { name: 'Full dark', note: '深色侧边栏加深色头部；除非访客自己选了深色模式，否则主体保持浅色。' },
  { name: 'Coloured & gradient', note: '偏品牌感的界面：用一种强烈的色相，或者用 v3 那种渐变光泽。' }
]

export const skins = [
  // 亮色
  { name: 'Light', group: 'Light', note: '白色侧边栏和头部；颜色只来自组件和徽章。', header: { cls: 'bg-body', theme: 'light' }, sidebar: { cls: 'bg-body', theme: 'light' }, primary: 'primary', boxes: ['primary', 'teal'] },
  { name: 'Light & indigo', group: 'Light', note: '“-light”那一类：彩色头部下面配白色侧边栏。', header: { cls: 'text-bg-indigo', theme: 'dark' }, sidebar: { cls: 'bg-body-tertiary', theme: 'light' }, primary: 'indigo', boxes: ['indigo', 'pink'] },
  { name: 'Light & sky', group: 'Light', note: 'v2 的 skin-blue-light：sky 头部配白色侧边栏。', header: { cls: 'text-bg-sky', theme: 'dark' }, sidebar: { cls: 'bg-body', theme: 'light' }, primary: 'sky', boxes: ['sky', 'amber'] },
  // 暗色
  { name: 'Default', group: 'Semi-dark', note: 'AdminLTE 4 的默认款：白色头部，深色中性侧边栏。', header: { cls: 'bg-body', theme: 'light' }, sidebar: { cls: 'bg-body-secondary', theme: 'dark' }, primary: 'primary', boxes: ['primary', 'teal'] },
  { name: 'Graphite', group: 'Semi-dark', note: '安静的近黑色侧边栏；颜色由组件来承担。', header: { cls: 'bg-body', theme: 'light' }, sidebar: { cls: 'text-bg-graphite', theme: 'dark' }, primary: 'indigo', boxes: ['indigo', 'amber'] },
  { name: 'Navy', group: 'Semi-dark', note: '白色头部下面配深蓝侧边栏 —— 经典的深色侧边栏外观。', header: { cls: 'bg-body', theme: 'light' }, sidebar: { cls: 'text-bg-navy', theme: 'dark' }, primary: 'teal', boxes: ['teal', 'pink'] },
  { name: 'Steel', group: 'Semi-dark', note: '中深蓝灰侧边栏 —— 看起来是深色，但又不会接近黑色。', header: { cls: 'bg-body', theme: 'light' }, sidebar: { cls: 'text-bg-steel', theme: 'dark' }, primary: 'sky', boxes: ['sky', 'orange'] },
  { name: 'Midnight', group: 'Semi-dark', note: '接近黑色，带一点紫调；专为鲜艳的强调色而生。', header: { cls: 'bg-body', theme: 'light' }, sidebar: { cls: 'text-bg-midnight', theme: 'dark' }, primary: 'violet', boxes: ['violet', 'teal'] },
  { name: 'Indigo', group: 'Semi-dark', note: '偏品牌感：侧边栏用一种强烈的色相，其余一切保持沉静。', header: { cls: 'bg-body', theme: 'light' }, sidebar: { cls: 'text-bg-indigo', theme: 'dark' }, primary: 'indigo', boxes: ['teal', 'orange'] },
  // 深色
  { name: 'Navy & sky', group: 'Full dark', note: '经典 skin-blue 的现代版演绎。', header: { cls: 'text-bg-sky', theme: 'dark' }, sidebar: { cls: 'text-bg-navy', theme: 'dark' }, primary: 'sky', boxes: ['teal', 'pink'] },
  { name: 'Midnight mono', group: 'Full dark', note: '整个界面用同一种深色调 —— 也就是“深色头部”布局。', header: { cls: 'text-bg-midnight', theme: 'dark' }, sidebar: { cls: 'text-bg-midnight', theme: 'dark' }, primary: 'indigo', boxes: ['indigo', 'pink'] },
  { name: 'Steel mono', group: 'Full dark', note: '整个界面都是蓝灰色；比 midnight 更柔和。', header: { cls: 'text-bg-steel', theme: 'dark' }, sidebar: { cls: 'text-bg-steel', theme: 'dark' }, primary: 'sky', boxes: ['sky', 'amber'] },
  { name: 'Slate & teal', group: 'Full dark', note: '中等分量的侧边栏配冷色头部 —— 比 navy 更柔和。', header: { cls: 'text-bg-teal', theme: 'dark' }, sidebar: { cls: 'text-bg-slate', theme: 'dark' }, primary: 'teal', boxes: ['indigo', 'pink'] },
  { name: 'Graphite & orange', group: 'Full dark', note: '安静的侧边栏配暖色头部 —— v2 那些充满活力的皮肤，收敛版。', header: { cls: 'text-bg-orange', theme: 'dark' }, sidebar: { cls: 'text-bg-graphite', theme: 'dark' }, primary: 'orange', boxes: ['orange', 'amber'] },
  // 颜色 & 渐变
  { name: 'Violet mono', group: 'Coloured & gradient', note: '头部和侧边栏用同一个色相 —— 大胆的单一品牌外观。', header: { cls: 'text-bg-violet', theme: 'dark' }, sidebar: { cls: 'text-bg-violet', theme: 'dark' }, primary: 'violet', boxes: ['teal', 'amber'] },
  { name: 'Gradient indigo', group: 'Coloured & gradient', note: '品牌色侧边栏上带 v3 的渐变光泽，配白色头部。', header: { cls: 'bg-body', theme: 'light' }, sidebar: { cls: 'bg-gradient-indigo', theme: 'dark' }, primary: 'indigo', boxes: ['indigo', 'teal'] },
  { name: 'Gradient teal', group: 'Coloured & gradient', note: '沉静清新；teal 侧边栏配上渐变光泽。', header: { cls: 'bg-body', theme: 'light' }, sidebar: { cls: 'bg-gradient-teal', theme: 'dark' }, primary: 'teal', boxes: ['teal', 'amber'] }
]

// ---------------------------------------------------------------------------
// AdminLTE 3 的原版调色板（dist/css/adminlte-colors-v3.css）
// ---------------------------------------------------------------------------

/**
Bootstrap 4 / AdminLTE 3 的文字颜色规则：用感知亮度跟一个阈值作比较。
*/
export const yiqTextColor = (hex, threshold = 150) => {
  const [r, g, b] = hexToRgb(hex).map(v => v * 255)
  return (r * 299 + g * 587 + b * 114) / 1000 >= threshold ? 'dark' : 'white'
}

const describeV3 = (name, hex, note) => {
  const lch = hexToOklch(hex)
  return {
    name,
    hex,
    note,
    oklch: { L: lch.L, C: lch.C, h: lch.h },
    contrastWhite: contrastWhite(hex),
    contrastBlack: contrastBlack(hex),
    textColor: yiqTextColor(hex) === 'white' ? 'white' : 'black',
    // `data-lte-contrast="aa"` 用的是哪套逻辑：正常情况下还是原来的选择，
    // 除非它达不到 WCAG AA 对正文的要求，那就换成另一个（#6110）。注意 v3 自己的
    // 深墨色（#1f2d3d）不够用 —— 它在这八种颜色里只有两种能达到 4.5:1。
    textColorAA: contrastWhite(hex) >= AA_RATIO ? 'white' : 'black'
  }
}

/**
 * 取值直接取自 AdminLTE 3.2.0 构建，未做改动。必须与 src/scss/adminlte-colors-v3.scss
 * 里的 `$lte-palette` 保持一致 —— 单元测试会强制校验这一点。
 */
export const paletteV3 = [
  describeV3('lightblue', '#3c8dbc', 'AdminLTE 2/3 的标志性蓝色（skin-blue 头部）'),
  describeV3('navy', '#001f3f', ''),
  describeV3('olive', '#3d9970', ''),
  describeV3('lime', '#01ff70', '深色文字'),
  describeV3('fuchsia', '#f012be', ''),
  describeV3('maroon', '#d81b60', ''),
  describeV3('blue', '#007bff', 'Bootstrap 4 的蓝色'),
  describeV3('indigo', '#6610f2', 'Bootstrap 4 的靛蓝色'),
  describeV3('purple', '#6f42c1', 'Bootstrap 4 的紫色'),
  describeV3('pink', '#e83e8c', 'Bootstrap 4 的粉色'),
  describeV3('red', '#dc3545', 'Bootstrap 4 的红色'),
  describeV3('orange', '#fd7e14', 'Bootstrap 4 的橙色 —— 配深色文字'),
  describeV3('yellow', '#ffc107', 'Bootstrap 4 的黄色 —— 配深色文字'),
  describeV3('green', '#28a745', 'Bootstrap 4 的绿色'),
  describeV3('teal', '#20c997', 'Bootstrap 4 的青色'),
  describeV3('cyan', '#17a2b8', 'Bootstrap 4 的青蓝色'),
  describeV3('gray', '#6c757d', ''),
  describeV3('gray-dark', '#343a40', 'v3 深色侧边栏（sidebar-dark-*）的背景色')
]

/**
 * AdminLTE 2 的那些皮肤，用 AdminLTE 4 的方式表达，搭配 v3 调色板：
 * 彩色头部配 v3 的深色侧边栏（`gray-dark`，也就是 `sidebar-dark-*` 那个确切的背景），
 * 或者对于 "-light" 那一类，配白色侧边栏。
 */
export const skinGroupsV3 = [
  { name: 'Dark sidebar', note: 'skin-blue、skin-purple、skin-green、skin-red、skin-yellow、skin-black —— 彩色头部配 v3 的深色侧边栏。' },
  { name: 'Light sidebar', note: '"-light" 那一类：同样的头部配白色侧边栏。' }
]

const v3Skin = ({ name, group, header, theme, boxes, note, primary }) => ({
  name,
  group,
  note,
  header: { cls: header, theme },
  sidebar: group === 'Dark sidebar' ? { cls: 'text-bg-gray-dark', theme: 'dark' } : { cls: 'bg-body', theme: 'light' },
  boxes,
  // 这个皮肤对应的 `data-lte-primary` 该取什么值：也就是 v2/v3 皮肤
  // 命名所依据的那个颜色，也正是它按钮用的颜色（#6107）。
  primary: primary || boxes[0]
})

export const skinsV3 = [
  v3Skin({ name: 'Blue', group: 'Dark sidebar', header: 'text-bg-lightblue', theme: 'dark', boxes: ['lightblue', 'green'], note: 'skin-blue —— 经典的 AdminLTE 外观。' }),
  v3Skin({ name: 'Black', group: 'Dark sidebar', header: 'bg-body', theme: 'light', boxes: ['blue', 'red'], note: 'skin-black —— 白色头部，深色侧边栏。' }),
  v3Skin({ name: 'Purple', group: 'Dark sidebar', header: 'text-bg-purple', theme: 'dark', boxes: ['purple', 'teal'], note: 'skin-purple.' }),
  v3Skin({ name: 'Green', group: 'Dark sidebar', header: 'text-bg-green', theme: 'dark', boxes: ['green', 'yellow'], note: 'skin-green.' }),
  v3Skin({ name: 'Red', group: 'Dark sidebar', header: 'text-bg-red', theme: 'dark', boxes: ['red', 'gray'], note: 'skin-red.' }),
  v3Skin({ name: 'Yellow', group: 'Dark sidebar', header: 'text-bg-yellow', theme: 'light', boxes: ['yellow', 'navy'], note: 'skin-yellow —— 头部配深色文字。' }),
  v3Skin({ name: 'Blue light', group: 'Light sidebar', header: 'text-bg-lightblue', theme: 'dark', boxes: ['lightblue', 'green'], note: 'skin-blue-light.' }),
  v3Skin({ name: 'Black light', group: 'Light sidebar', header: 'bg-body', theme: 'light', boxes: ['blue', 'red'], note: 'skin-black-light —— 整个界面全白。' }),
  v3Skin({ name: 'Purple light', group: 'Light sidebar', header: 'text-bg-purple', theme: 'dark', boxes: ['purple', 'teal'], note: 'skin-purple-light.' }),
  v3Skin({ name: 'Green light', group: 'Light sidebar', header: 'text-bg-green', theme: 'dark', boxes: ['green', 'yellow'], note: 'skin-green-light.' }),
  v3Skin({ name: 'Red light', group: 'Light sidebar', header: 'text-bg-red', theme: 'dark', boxes: ['red', 'gray'], note: 'skin-red-light.' }),
  v3Skin({ name: 'Yellow light', group: 'Light sidebar', header: 'text-bg-yellow', theme: 'light', boxes: ['yellow', 'navy'], note: 'skin-yellow-light.' })
]
