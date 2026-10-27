import type { SectionContent, Lesson, Question } from './types'

/* ------------------------------------------------------------------ */
/*  OVERVIEW                                                           */
/* ------------------------------------------------------------------ */

const overview: SectionContent['overview'] = [
  { type: 'h', text: 'What the Math section actually tests' },
  {
    type: 'p',
    text: `45 questions, 50 minutes, four answer choices each, calculator allowed. That is about 67 seconds per question, and the questions get harder as you go. The good news: almost nothing on this test is beyond Algebra II, and most of it is Algebra I and geometry you already know. The test is less about hard math and more about doing medium math quickly, carefully, and without falling for traps.\n\nNotice in the table below that "Integrating Essential Skills" is more than 40% of the test. Those are middle-school-level skills (percents, ratios, rates, averages, area) wrapped in multi-step word problems. You do not need to learn new math to win those points; you need to read carefully and execute cleanly.`,
  },
  {
    type: 'table',
    headers: ['Reporting category', 'Share of test', 'What it looks like'],
    rows: [
      ['Preparing for Higher Math', '~57–60%', 'Number & Quantity, Algebra, Functions, Geometry, Statistics & Probability'],
      ['  Number & Quantity', '~7–10%', 'Exponents, roots, scientific notation, complex numbers, matrices, vectors'],
      ['  Algebra', '~12–15%', 'Linear equations and inequalities, systems, quadratics, polynomials'],
      ['  Functions', '~12–15%', 'Notation, graphs, transformations, exponential models, trig functions'],
      ['  Geometry', '~12–15%', 'Angles, triangles, circles, area/volume, coordinate geometry, trig ratios'],
      ['  Statistics & Probability', '~8–12%', 'Mean/median, probability, counting, data displays'],
      ['Integrating Essential Skills', '~40–43%', 'Rates, percents, proportions, area/volume, averages, multi-step word problems'],
      ['Modeling', 'counted across both', 'Writing or using an equation that represents a real situation'],
    ],
  },
  { type: 'h', text: 'Pacing plan: fast start, banked time' },
  {
    type: 'steps',
    items: [
      `Questions 1–20: move fast. Aim for about 45 seconds each (15 minutes total). These are the easiest questions; a careless error here costs the same as a miss on a hard one.`,
      `Questions 21–35: your normal pace, about 65–70 seconds each (roughly 17 minutes).`,
      `Questions 36–45: this is where the banked time goes. You should have around 18 minutes for the last ten, which is nearly two minutes each.`,
      `Two-pass rule: if you cannot see how to START a problem within 20 seconds, circle it, bubble your best guess, and move on. Come back after you have finished the pass. Never leave a blank; there is no penalty for guessing.`,
      `Last 2 minutes: make sure every question has an answer bubbled. Then, if time remains, revisit circled questions.`,
    ],
  },
  {
    type: 'tip',
    text: `Wear a watch or use the room clock. Check your position at question 20 (should be around 15 minutes in) and at question 35 (around 32 minutes in). If you are behind, speed up by skipping harder-looking problems, not by rushing easy ones.`,
  },

  { type: 'h', text: 'The highest-value strategies' },
  {
    type: 'list',
    items: [
      `**Plug in numbers.** If the answer choices contain variables (like "3x + 2y"), pick easy numbers for the variables, work the problem with your numbers, then test each choice. Avoid 0 and 1; they make too many choices look right.`,
      `**Backsolve from the choices.** If the choices are numbers, start with a middle choice, plug it into the problem, and see whether it works. Since the choices are usually in order, a wrong result tells you which direction to go.`,
      `**Draw and label every geometry figure.** If a figure is given, write the known lengths and angles on it. If no figure is given, draw one. Half of geometry mistakes come from trying to hold the picture in your head.`,
      `**Write the formula first.** Before touching numbers, write the formula (A = πr², slope = rise/run, mean = sum ÷ count). It stops you from using the diameter as the radius or dividing by the wrong count.`,
      `**Estimate to eliminate.** If the answer must be "a bit less than 50," cross out 12 and 210 before doing any arithmetic. Figures are usually drawn roughly to scale unless noted.`,
      `**Use the calculator wisely.** It is great for arithmetic, decimals, and checking. It is terrible at setting up the problem, which is where points are actually lost. Type carefully; use parentheses around numerators, denominators, and negative numbers being squared.`,
      `**Answer the question that was asked.** The ACT loves to ask for 2x after you solved for x, or the perimeter after you found the width. Reread the last sentence before bubbling.`,
    ],
  },

  {
    type: 'p',
    text: `**Formulas the ACT does NOT give you.** Unlike the SAT, the ACT gives you no formula sheet. These must be in your head on test day. Make flashcards for any you cannot write out instantly.`,
  },
  {
    type: 'table',
    headers: ['Topic', 'Formula'],
    rows: [
      ['Area', 'Rectangle lw · Triangle (1/2)bh · Trapezoid (1/2)(b₁ + b₂)h · Circle πr² · Parallelogram bh'],
      ['Circumference', 'C = 2πr = πd'],
      ['Volume', 'Prism/cylinder = (area of base) × height · Cylinder πr²h · Sphere (4/3)πr³ · Cone (1/3)πr²h · Pyramid (1/3)Bh'],
      ['Surface area', 'Rectangular box 2lw + 2lh + 2wh · Cylinder 2πr² + 2πrh · Sphere 4πr²'],
      ['Pythagorean theorem', 'a² + b² = c² · Common triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25 (and multiples)'],
      ['Special right triangles', '45-45-90: legs x, hypotenuse x√2 · 30-60-90: short leg x, long leg x√3, hypotenuse 2x'],
      ['Slope', 'm = (y₂ − y₁)/(x₂ − x₁) · y = mx + b · y − y₁ = m(x − x₁) · Perpendicular slopes multiply to −1'],
      ['Distance and midpoint', 'd = √((x₂ − x₁)² + (y₂ − y₁)²) · Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)'],
      ['Circle equation', '(x − h)² + (y − k)² = r², center (h, k)'],
      ['Quadratic formula', 'x = (−b ± √(b² − 4ac)) / 2a · Discriminant b² − 4ac · Vertex x = −b/2a'],
      ['SOHCAHTOA', 'sin = opp/hyp · cos = adj/hyp · tan = opp/adj · sin²θ + cos²θ = 1'],
      ['Arc length and sector area', 'Arc = (θ/360) × 2πr · Sector = (θ/360) × πr²'],
      ['Polygon angles', 'Interior sum = (n − 2) × 180° · Each exterior angle of a regular n-gon = 360°/n'],
      ['Exponent rules', 'aᵐ · aⁿ = aᵐ⁺ⁿ · aᵐ / aⁿ = aᵐ⁻ⁿ · (aᵐ)ⁿ = aᵐⁿ · a⁻ⁿ = 1/aⁿ · a^(1/n) = ⁿ√a · a⁰ = 1'],
      ['Log rules', 'log_b(x) = y means bʸ = x · log(xy) = log x + log y · log(x/y) = log x − log y · log(xⁿ) = n log x'],
      ['Sequences', 'Arithmetic: aₙ = a₁ + (n − 1)d · Geometric: aₙ = a₁ · rⁿ⁻¹'],
      ['Probability', 'P = favorable/total · P(A and B) = P(A) × P(B) if independent · P(at least one) = 1 − P(none)'],
      ['Averages', 'mean = sum ÷ count, so sum = mean × count'],
      ['Percent change', '(new − old)/old × 100%'],
      ['Distance/rate', 'd = rt'],
    ],
  },

  { type: 'h', text: 'Common traps' },
  {
    type: 'list',
    items: [
      `**Solving for the wrong thing.** The question asks for the value of 2x + 1, the perimeter, the number of girls (not boys), or the cost per person. Underline what is asked.`,
      `**Diameter vs. radius.** "A circle with diameter 10" has r = 5. The wrong answer (100π) is always in the choices.`,
      `**Negative signs and squaring.** (−3)² = 9, but −3² = −9. In a calculator, always put a negative base in parentheses.`,
      `**Flipping the inequality.** Dividing or multiplying by a negative flips the sign. Dividing by a positive does not.`,
      `**Percent of what?** A 20% increase followed by a 20% decrease is not back to the start. Successive percents multiply: 1.2 × 0.8 = 0.96.`,
      `**Units.** Minutes vs. hours, feet vs. inches, cm² vs. cm³. Convert before you compute, not after.`,
      `**Partial answers.** The number you get halfway through (x = 4) is almost always one of the choices. Finish the problem.`,
      `**Figures "not drawn to scale."** When that note appears, do not estimate from the picture. Otherwise, estimation is fair game.`,
    ],
  },

  { type: 'h', text: 'Test-day checklist' },
  {
    type: 'list',
    items: [
      `Approved calculator with fresh batteries (no CAS; check the ACT list). Know how to use parentheses, fractions, and the square root key.`,
      `Several sharpened No. 2 pencils and a good eraser.`,
      `Write the formula, then the numbers. Draw every figure. Label everything.`,
      `Check your pace at Q20 (15 min) and Q35 (32 min).`,
      `Skip anything you cannot start in 20 seconds; bubble a guess; come back.`,
      `Before bubbling, reread the last sentence of the question: is this what they asked for?`,
      `Never leave a blank. Guessing is free.`,
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  LESSONS                                                            */
/* ------------------------------------------------------------------ */

const lessonNumber: Lesson = {
  id: 'math-number-and-arithmetic',
  section: 'math',
  title: 'Number & Arithmetic',
  summary: 'Fractions, percents, ratios, rates, exponents, and number properties: the skills behind 40% of the test.',
  minutes: 12,
  blocks: [
    {
      type: 'p',
      text: `Nothing here is new. That is exactly why it is dangerous: the ACT buries these skills inside word problems and counts on you to rush. Percents, ratios, and rates show up in roughly one of every five questions. Nail them and you have a floor of about 20 points before the "hard" math even starts.`,
    },

    { type: 'h', text: 'Fractions, decimals, and percents' },
    {
      type: 'list',
      items: [
        `To add or subtract, get a common denominator: 2/3 + 1/4 = 8/12 + 3/12 = 11/12.`,
        `To multiply, multiply straight across: (2/3)(5/7) = 10/21. To divide, flip the second and multiply: (2/3) ÷ (5/7) = (2/3)(7/5) = 14/15.`,
        `Complex fractions: (1/2)/(3/4) means (1/2) ÷ (3/4) = (1/2)(4/3) = 2/3.`,
        `Know these conversions cold: 1/8 = 0.125, 1/4 = 0.25, 1/3 ≈ 0.333, 3/8 = 0.375, 1/2 = 0.5, 5/8 = 0.625, 2/3 ≈ 0.667, 3/4 = 0.75, 7/8 = 0.875.`,
        `Your calculator can do fractions, but write the setup first so you do not divide in the wrong order.`,
      ],
    },

    {
      type: 'steps',
      items: [
        `"Percent" means "per 100," so 35% = 0.35 = 35/100. Translate words directly: "of" means multiply, "is" means equals, "what" means x. "What is 35% of 80?" becomes x = 0.35 × 80 = 28. "12 is what percent of 48?" becomes 12 = x × 48, so x = 0.25 = 25%.`,
        `Percent change = (new − old) ÷ old × 100%. The denominator is ALWAYS the original amount.`,
        `A 15% increase: multiply by 1.15. A 15% decrease: multiply by 0.85. One step, no subtraction needed.`,
        `Successive percents multiply. Up 20% then down 20%: 1.20 × 0.80 = 0.96, a 4% net decrease, not 0%.`,
        `Percent "of" vs. percentage "points": going from 10% to 15% is a 5-point rise but a 50% increase.`,
        `When a problem gives a percent, ratio, or fraction of an unknown total and the choices are numbers, pick a convenient total (like 100) and work with real numbers. It is faster and far less error-prone than algebra.`,
      ],
    },
    {
      type: 'example',
      prompt: `A laptop regularly costs $900. It is marked down 30%, and then a coupon takes an additional 10% off the sale price. What is the final price?`,
      solution: `Successive discounts multiply; they do not add. After 30% off: 900 × 0.70 = 630. After another 10% off the SALE price: 630 × 0.90 = 567. Final price: **$567**.\nThe trap: adding 30% + 10% = 40% off gives 900 × 0.60 = $540, which will be one of the choices. The second discount applies to a smaller number, so the total discount is less than 40% (it is 37%).`,
    },

    { type: 'h', text: 'Ratios, proportions, rates, and unit conversion' },
    {
      type: 'p',
      text: `A ratio of 3:5 means "3 parts to 5 parts," so there are 8 parts in total. If the whole is 40, each part is 5, giving 15 and 25. When two ratios are set equal, cross-multiply: if 3/x = 12/20, then 12x = 60 and x = 5.`,
    },
    {
      type: 'example',
      prompt: `In a school club, the ratio of juniors to seniors is 4:7. If there are 33 students in the club, how many more seniors than juniors are there?`,
      solution: `Total parts: 4 + 7 = 11. Each part = 33 ÷ 11 = 3 students. Juniors = 4 × 3 = 12, seniors = 7 × 3 = 21. The question asks for the DIFFERENCE: 21 − 12 = **9**.\nTraps: 21 (number of seniors) and 12 (number of juniors) will both be choices. Answer the question that was asked.`,
    },

    {
      type: 'p',
      text: `A rate is a ratio with units: miles per hour, dollars per pound. Set up unit conversions as fractions so the units cancel: 90 km/h × (1000 m / 1 km) × (1 h / 3600 s) = 25 m/s. If the units do not cancel to what the question wants, you set it up wrong.\n\n**Watch d = rt:** if you drive 30 minutes at 50 mph, you do not go 1500 miles. Convert minutes to hours first: 0.5 h × 50 mph = 25 miles. Mixed units are the number one reason a rate problem goes wrong.`,
    },
    {
      type: 'example',
      prompt: `A printer prints 18 pages per minute. At this rate, how many pages does it print in 2 hours 30 minutes?`,
      solution: `Convert time to minutes: 2 h 30 min = 150 min. Pages = 18 × 150 = **2,700**.\nTrap: treating 2.30 as 2.3 hours gives 18 × 138 = 2,484, and forgetting to convert at all gives 18 × 2.5 = 45. Always match the units of the rate to the units of the time.`,
    },

    { type: 'h', text: 'Exponents, roots, scientific notation, and number properties' },
    {
      type: 'table',
      headers: ['Rule', 'Example'],
      rows: [
        ['aᵐ · aⁿ = aᵐ⁺ⁿ', 'x³ · x⁴ = x⁷'],
        ['aᵐ ÷ aⁿ = aᵐ⁻ⁿ', 'x⁹ ÷ x² = x⁷'],
        ['(aᵐ)ⁿ = aᵐⁿ', '(x³)⁴ = x¹²'],
        ['(ab)ⁿ = aⁿbⁿ', '(2x)³ = 8x³'],
        ['a⁻ⁿ = 1/aⁿ', '5⁻² = 1/25'],
        ['a⁰ = 1 (a ≠ 0)', '(−7)⁰ = 1'],
        ['a^(1/n) = ⁿ√a', '27^(1/3) = 3'],
        ['a^(m/n) = (ⁿ√a)ᵐ', '16^(3/4) = (⁴√16)³ = 2³ = 8'],
        ['√(ab) = √a · √b', '√50 = √25 · √2 = 5√2'],
      ],
    },
    {
      type: 'warning',
      text: `aᵐ · aⁿ adds exponents only when the BASES match. 2³ · 3² is just 8 × 9 = 72; you cannot combine them. And (a + b)² is NOT a² + b². It is a² + 2ab + b². Test with a = b = 1 if you ever doubt it.`,
    },

    {
      type: 'p',
      text: `**Scientific notation.** A number in scientific notation looks like 4.2 × 10⁵, with one nonzero digit before the decimal point. Multiply by multiplying the fronts and adding the exponents: (3 × 10⁴)(2 × 10⁵) = 6 × 10⁹. If the front ends up 10 or more, shift: 15 × 10⁷ = 1.5 × 10⁸. Divide by dividing the fronts and subtracting exponents.`,
    },

    {
      type: 'list',
      items: [
        `PEMDAS: parentheses, exponents, multiply/divide left to right, add/subtract left to right. −3² = −9, but (−3)² = 9.`,
        `Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47. Note 1 is NOT prime and 2 is the only even prime.`,
        `GCF (greatest common factor) is the biggest number that divides both; LCM (least common multiple) is the smallest number both divide into. For 12 and 18: GCF = 6, LCM = 36. Shortcut: GCF × LCM = product of the two numbers.`,
        `Integers: ..., −2, −1, 0, 1, 2, ... (no fractions). Rational numbers can be written as a fraction of integers (0.75, −3, 1/3 all count). Irrational numbers cannot: √2, π.`,
        `Even × anything = even. Odd × odd = odd. Even + odd = odd. When a question says "consecutive integers," you can plug in 1, 2, 3 to test choices.`,
      ],
    },
    {
      type: 'example',
      prompt: `Two buses leave a depot at the same time. One returns every 12 minutes, the other every 18 minutes. After how many minutes will they next leave the depot together?`,
      solution: `"Next time together" means the least common multiple. 12 = 2² × 3 and 18 = 2 × 3², so LCM = 2² × 3² = **36 minutes**.\nTrap: 6 is the GCF, not the LCM, and 216 (12 × 18) is a common multiple but not the least one. If LCM and GCF get mixed up in your head, remember that "multiple" means bigger.`,
    },
  ],
}

const lessonLinear: Lesson = {
  id: 'math-linear-equations-and-inequalities',
  section: 'math',
  title: 'Linear Equations & Inequalities',
  summary: 'Multi-step equations, literal equations, inequalities, absolute value, and turning words into algebra.',
  minutes: 10,
  blocks: [
    { type: 'h', text: 'Solving multi-step and literal equations' },
    {
      type: 'steps',
      items: [
        `Clear fractions by multiplying every term by the common denominator.`,
        `Distribute to remove parentheses.`,
        `Combine like terms on each side.`,
        `Move variable terms to one side and constants to the other (do the opposite operation to both sides).`,
        `Divide by the coefficient. Then plug your answer back in; it takes five seconds and catches most errors.`,
      ],
    },
    {
      type: 'example',
      prompt: `Solve for x: 3(x − 4) + 5 = 2x − 1`,
      solution: `Distribute: 3x − 12 + 5 = 2x − 1, so 3x − 7 = 2x − 1. Subtract 2x: x − 7 = −1. Add 7: **x = 6**.\nCheck: 3(6 − 4) + 5 = 11 and 2(6) − 1 = 11. The classic trap is distributing the 3 to x only ("3x − 4 + 5"), which gives x = −2.`,
    },
    {
      type: 'warning',
      text: `When a negative sign sits in front of parentheses, it flips EVERY sign inside: −(2x − 7) = −2x + 7. Forgetting the second flip is the most common sign error on the entire test.`,
    },

    {
      type: 'p',
      text: `**Literal equations (solving for a letter):** same rules, more letters. Treat every other letter as if it were a number. To solve P = 2l + 2w for w: subtract 2l to get P − 2l = 2w, then divide by 2 to get w = (P − 2l)/2. If the variable you want appears in two places, factor it out: ax + bx = c becomes x(a + b) = c, so x = c/(a + b).`,
    },
    {
      type: 'example',
      prompt: `The formula F = (9/5)C + 32 converts Celsius to Fahrenheit. Which expression gives C in terms of F?`,
      solution: `Subtract 32 from both sides: F − 32 = (9/5)C. Multiply both sides by 5/9: **C = (5/9)(F − 32)**.\nTrap: writing C = (5/9)F − 32 subtracts 32 AFTER multiplying, which is backwards. Undo operations in reverse order: the +32 was done last, so undo it first.`,
    },

    { type: 'h', text: 'Inequalities and absolute value' },
    {
      type: 'p',
      text: `Solve inequalities exactly like equations, with one rule: if you multiply or divide both sides by a NEGATIVE number, flip the inequality sign. Adding or subtracting never flips it. For example, 7 − 2x ≥ 15 gives −2x ≥ 8, and dividing by −2 flips to x ≤ −4.`,
    },
    {
      type: 'list',
      items: [
        `On a number line, open circle for < or >, closed (filled) circle for ≤ or ≥.`,
        `Compound "and": −3 < 2x + 1 ≤ 9. Do the same thing to all three parts: −4 < 2x ≤ 8, so −2 < x ≤ 4.`,
        `"How many integers satisfy...": count carefully, including endpoints only if they are ≤ or ≥. The number of integers from a to b inclusive is b − a + 1.`,
      ],
    },
    {
      type: 'tip',
      text: `Not sure whether you flipped correctly? Test a number. If you got x ≤ −4 from 7 − 2x ≥ 15, try x = −10: 7 − 2(−10) = 27, which is ≥ 15. Good. Try x = 0: 7 ≥ 15 is false. Confirmed.`,
    },

    {
      type: 'p',
      text: `**Absolute value.** |x| is the distance from x to 0, so it is never negative. An absolute value equation splits into two equations: |2x − 3| = 7 means 2x − 3 = 7 OR 2x − 3 = −7, giving x = 5 or x = −2. If an absolute value equals a negative number, there is NO solution.`,
    },
    {
      type: 'table',
      headers: ['Form', 'Rewrite as', 'Memory hook'],
      rows: [
        ['|A| = c', 'A = c or A = −c', 'two separate equations'],
        ['|A| < c', '−c < A < c', '"less than" = sandwiched between'],
        ['|A| > c', 'A > c or A < −c', '"greater than" = two outside pieces'],
      ],
    },
    {
      type: 'example',
      prompt: `A machine fills bottles with 500 mL of juice, but the actual amount can vary by at most 8 mL. Which inequality describes every acceptable amount a, and what is the range?`,
      solution: `"Varies by at most 8 from 500" is a distance statement: **|a − 500| ≤ 8**. Rewrite as −8 ≤ a − 500 ≤ 8, then add 500: 492 ≤ a ≤ 508.\nTrap: writing |a| − 500 ≤ 8 or |a + 500| ≤ 8. The expression inside the bars is always (value − center).`,
    },

    { type: 'h', text: 'Translating words into equations' },
    {
      type: 'table',
      headers: ['Words', 'Math'],
      rows: [
        ['is, was, equals, results in', '='],
        ['of (with a fraction or percent)', '× (multiply)'],
        ['more than, increased by, sum, total', '+'],
        ['less than, decreased by, difference', '− (watch the order: "5 less than x" is x − 5)'],
        ['per, each, for every', 'the rate (slope) that multiplies the variable'],
        ['twice, double / half', '2 × / (1/2) ×'],
        ['at least / at most', '≥ / ≤'],
        ['no more than / no fewer than', '≤ / ≥'],
      ],
    },
    {
      type: 'example',
      prompt: `A gym charges a $40 sign-up fee plus $22 per month. Marisol has budgeted at most $300 for the gym this year. What is the greatest number of whole months she can pay for?`,
      solution: `Cost after m months: 40 + 22m. "At most 300" means 40 + 22m ≤ 300, so 22m ≤ 260 and m ≤ 11.8. Whole months only, so round DOWN: **11 months**.\nTrap: rounding up to 12 (12 months costs $304, over budget), or dividing 300 by 22 and forgetting the sign-up fee (which gives 13).`,
    },
  ],
}

const lessonCoordinate: Lesson = {
  id: 'math-coordinate-geometry',
  section: 'math',
  title: 'Coordinate Geometry',
  summary: 'Slope, line equations, parallel and perpendicular lines, distance, midpoint, and circles on the xy-plane.',
  minutes: 10,
  blocks: [
    { type: 'h', text: 'Slope: the one idea everything else uses' },
    {
      type: 'p',
      text: `Slope measures steepness: m = rise/run = (y₂ − y₁)/(x₂ − x₁). Positive slope goes up to the right, negative goes down to the right. A horizontal line has slope 0 (y = 3); a vertical line has undefined slope (x = 3). It does not matter which point you call "point 1" as long as you subtract in the same order on top and bottom.`,
    },
    {
      type: 'example',
      prompt: `What is the slope of the line through (−2, 7) and (4, −5)?`,
      solution: `m = (−5 − 7)/(4 − (−2)) = (−12)/(6) = **−2**.\nTraps: subtracting in different orders on top and bottom gives +2; putting the x-change on top gives −1/2. Write the formula with the subscripts, then fill in.`,
    },

    { type: 'h', text: 'Three forms of a line, and intercepts' },
    {
      type: 'table',
      headers: ['Form', 'Equation', 'Use it when...'],
      rows: [
        ['Slope-intercept', 'y = mx + b', 'you know the slope and y-intercept, or need to read them off quickly'],
        ['Point-slope', 'y − y₁ = m(x − x₁)', 'you know the slope and any one point (fastest for writing equations)'],
        ['Standard', 'Ax + By = C', 'the ACT hands it to you; convert to y = mx + b to find the slope: m = −A/B'],
      ],
    },
    {
      type: 'p',
      text: `**Warning:** in 3x + 2y = 12, the slope is NOT 3. Solve for y: 2y = −3x + 12, so y = −(3/2)x + 6. Slope −3/2, y-intercept 6. Any time a line is not in y = mx + b form, convert it before reading the slope.\n\n**Intercepts.** The x-intercept is where y = 0; the y-intercept is where x = 0. For 3x + 2y = 12: set y = 0 to get x = 4 (x-intercept (4, 0)); set x = 0 to get y = 6 (y-intercept (0, 6)). The ACT often asks for an intercept of a line through two points: find the equation first, then set the other variable to 0.`,
    },

    { type: 'h', text: 'Parallel and perpendicular' },
    {
      type: 'list',
      items: [
        `Parallel lines have the SAME slope (and different y-intercepts).`,
        `Perpendicular lines have slopes that are negative reciprocals: flip the fraction AND change the sign. Perpendicular to slope 2/3 is −3/2. Perpendicular to slope −4 is 1/4. The two slopes multiply to −1.`,
        `A horizontal line (slope 0) is perpendicular to a vertical line (undefined slope).`,
      ],
    },
    {
      type: 'example',
      prompt: `Which equation represents the line through (6, 1) that is perpendicular to y = −3x + 5?`,
      solution: `The given slope is −3. The perpendicular slope is the negative reciprocal: 1/3. Point-slope with (6, 1): y − 1 = (1/3)(x − 6), so y = (1/3)x − 2 + 1 = **y = (1/3)x − 1**.\nTraps: using slope 3 (flipped sign only) or −1/3 (flipped fraction only). Also check that the point works: (1/3)(6) − 1 = 1. Yes.`,
    },

    { type: 'h', text: 'Distance, midpoint, and circles' },
    {
      type: 'p',
      text: `Distance is the Pythagorean theorem in disguise: d = √((x₂ − x₁)² + (y₂ − y₁)²). The midpoint is just the average of the x's and the average of the y's: ((x₁ + x₂)/2, (y₁ + y₂)/2). If you are given the midpoint and one endpoint, double the midpoint and subtract the known endpoint to find the other.`,
    },
    {
      type: 'example',
      prompt: `Points P(1, −3) and Q(7, 5) are the endpoints of a diameter of a circle. What are the center and the radius of the circle?`,
      solution: `The center is the midpoint: ((1 + 7)/2, (−3 + 5)/2) = **(4, 1)**. The diameter is the distance PQ = √((7 − 1)² + (5 − (−3))²) = √(36 + 64) = √100 = 10, so the radius is **5**.\nTrap: reporting 10 as the radius. The distance between endpoints of a diameter is the diameter; halve it.`,
    },

    {
      type: 'p',
      text: `**Equation of a circle.** (x − h)² + (y − k)² = r² is a circle with center (h, k) and radius r. The signs are flipped from what you see: (x − 3)² + (y + 2)² = 16 has center (3, −2), not (−3, 2), and radius 4, not 16. If the equation is expanded (x² + y² + 6x − 4y = 3), complete the square to get it back into standard form.`,
    },

    { type: 'h', text: 'Graphing inequalities' },
    {
      type: 'list',
      items: [
        `Graph the boundary line: solid for ≤ or ≥, dashed for < or >.`,
        `Shade above the line for y > mx + b (or y ≥), below for y < mx + b. If the inequality is not solved for y, solve it first, remembering to flip when dividing by a negative.`,
        `To check, test a point not on the line, usually (0, 0). If it makes the inequality true, shade the side containing it.`,
        `A system of inequalities is satisfied where the shaded regions overlap.`,
      ],
    },
    {
      type: 'tip',
      text: `If a problem gives you a line and asks which point lies on it, do not graph. Plug each choice into the equation; the one that makes it true is the answer. Twenty seconds, zero drawing. But DO sketch quickly for any question involving two points, a midpoint, or a perpendicular line: even a rough sketch tells you whether the slope should be positive or negative and whether your answer is in the right quadrant.`,
    },
  ],
}

const lessonSystems: Lesson = {
  id: 'math-systems-and-word-problems',
  section: 'math',
  title: 'Systems & Word Problems',
  summary: 'Solve two-equation systems, recognize how many solutions exist, and set up the classic word problems the ACT recycles.',
  minutes: 11,
  blocks: [
    { type: 'h', text: 'Two ways to solve a system' },
    {
      type: 'p',
      text: `A system is two equations with two unknowns, and the solution is the point (x, y) that works in both. Use **substitution** when one equation is already solved for a variable (y = 2x + 1). Use **elimination** when both are in Ax + By = C form: multiply one or both equations so a variable's coefficients are opposites, then add.\n\nTwo shortcuts: when both equations are in y = mx + b form, set the right sides equal to each other. When the answer choices are ordered pairs, skip the algebra and plug each pair into BOTH equations; the first pair that satisfies both is your answer.`,
    },
    {
      type: 'example',
      prompt: `Solve the system: 2x + 3y = 12 and 5x − 3y = 9.`,
      solution: `The y-coefficients are already opposites (+3 and −3), so add the equations: 7x = 21, x = 3. Substitute: 2(3) + 3y = 12, so 3y = 6 and y = 2. Solution **(3, 2)**.\nTrap: the ACT often asks for x + y, xy, or just y, not the ordered pair. Here x + y = 5 and xy = 6. Read the question's last line.`,
    },

    { type: 'h', text: 'How many solutions?' },
    {
      type: 'table',
      headers: ['Lines are...', 'Slopes / intercepts', 'Number of solutions'],
      rows: [
        ['crossing', 'different slopes', 'exactly one'],
        ['parallel', 'same slope, different y-intercepts', 'none'],
        ['the same line', 'same slope, same y-intercept (one equation is a multiple of the other)', 'infinitely many'],
      ],
    },
    {
      type: 'example',
      prompt: `For what value of k does the system 4x − 6y = 10 and 2x − 3y = k have infinitely many solutions?`,
      solution: `Infinitely many solutions means the equations are the same line. The first equation is exactly 2 × the second on the left side (4x − 6y = 2(2x − 3y)), so the right side must also be doubled: 10 = 2k, **k = 5**.\nTrap: any other k gives parallel lines (no solution). Choosing k = 10 (matching the constant without scaling) is the usual error.`,
    },

    { type: 'h', text: 'Setting up word problems' },
    {
      type: 'steps',
      items: [
        `Name the unknowns with letters that mean something (a = adult tickets, c = child tickets). Write what each letter stands for.`,
        `Find two facts in the problem. Each fact becomes an equation: usually one is a COUNT (a + c = 50) and the other is a VALUE (12a + 7c = 480).`,
        `Solve. Then reread the question: do they want a, c, or the difference?`,
        `Sanity check: are the numbers positive, whole where they should be, and reasonable?`,
      ],
    },
    {
      type: 'table',
      headers: ['Problem type', 'Setup'],
      rows: [
        ['Tickets / coins / cost-revenue', 'count equation + value equation: a + c = total items, (price)(a) + (price)(c) = total money'],
        ['Mixture', '(concentration)(amount) + (concentration)(amount) = (final concentration)(total amount)'],
        ['Work (two workers)', '1/a + 1/b = 1/t, where a, b are solo times and t is the time together'],
        ['Age', 'write each age NOW, then add or subtract the same number of years for everyone'],
        ['Consecutive integers', 'n, n + 1, n + 2 (consecutive even or odd: n, n + 2, n + 4)'],
        ['Distance / motion', 'd = rt for each traveler; same distance, total distance, or same time links them'],
        ['Profit', 'profit = revenue − cost; break-even is where they are equal'],
      ],
    },
    {
      type: 'example',
      prompt: `A chemist has 12 liters of a 25% acid solution. How many liters of a 55% acid solution must be added to produce a 40% solution?`,
      solution: `Track the pure acid. Let x = liters of 55% solution. Acid in: 0.25(12) + 0.55x. Acid out: 0.40(12 + x). So 3 + 0.55x = 4.8 + 0.40x, giving 0.15x = 1.8 and **x = 12 liters**.\nTrap: writing 0.40(12) on the right instead of 0.40(12 + x). The final mixture contains BOTH amounts. Sanity check: 40% is exactly halfway between 25% and 55%, so equal amounts (12 and 12) makes sense.`,
    },
    {
      type: 'example',
      prompt: `Working alone, Dev can paint a fence in 6 hours; Priya can paint the same fence in 4 hours. Working together at these rates, how long will it take them?`,
      solution: `Add rates, not times. Dev does 1/6 of the fence per hour; Priya does 1/4. Together: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 of the fence per hour. Time = 1 ÷ (5/12) = 12/5 = **2.4 hours** (2 hours 24 minutes).\nTrap: averaging the times (5 hours) or adding them (10 hours). Together must be FASTER than the faster person alone, so any answer over 4 hours is wrong on sight.`,
    },

    { type: 'h', text: 'Average problems: think "sum"' },
    {
      type: 'p',
      text: `Mean = sum ÷ count, so **sum = mean × count**. Almost every ACT average problem is really a sum problem in disguise. "The average of five tests is 84" tells you the five scores add to 420. From there, finding a missing score, a needed score, or a new average is subtraction.`,
    },
    {
      type: 'example',
      prompt: `Leo's average on his first 4 quizzes is 78. What must he score on the 5th quiz to raise his average to 82?`,
      solution: `Current sum: 78 × 4 = 312. Needed sum for 5 quizzes at 82: 82 × 5 = 410. Fifth score: 410 − 312 = **98**.\nTrap: answering 82 (the target average) or 86 (just adding the 4-point gain to 82). A single score has to pull up four others, so it must be well above the target.`,
    },
    {
      type: 'warning',
      text: `Average speed is total distance ÷ total time, NOT the average of the two speeds. Driving 60 mph out and 40 mph back gives an average speed of 48 mph, not 50, because you spend more time at the slower speed.`,
    },
    {
      type: 'tip',
      text: `Word problems feel long, but the math is usually two lines. Spend your time on the setup (naming variables, writing the two equations), then let the calculator do arithmetic. If a setup takes more than a minute, bubble a guess and come back.`,
    },
  ],
}

const lessonQuadratics: Lesson = {
  id: 'math-quadratics-and-polynomials',
  section: 'math',
  title: 'Quadratics & Polynomials',
  summary: 'FOIL, factoring, roots, the quadratic formula, parabola features, and the basics of polynomial division.',
  minutes: 12,
  blocks: [
    { type: 'h', text: 'Multiplying and factoring' },
    {
      type: 'p',
      text: `(x + 3)(x − 5): First x·x = x², Outer x·(−5) = −5x, Inner 3·x = 3x, Last 3·(−5) = −15. Combine: x² − 2x − 15. Memorize these three patterns so you can go both directions instantly: (a + b)² = a² + 2ab + b², (a − b)² = a² − 2ab + b², and (a + b)(a − b) = a² − b².\n\n**Warning:** (x + 4)² is NOT x² + 16. It is x² + 8x + 16. Missing the middle term is a top-five ACT error, and the wrong version is always a choice.`,
    },

    {
      type: 'steps',
      items: [
        `Pull out the GCF first: 6x² − 12x = 6x(x − 2).`,
        `Two terms? Check for a difference of squares: x² − 49 = (x + 7)(x − 7). (A sum of squares x² + 49 does not factor over the reals.)`,
        `Three terms with a leading 1: x² + bx + c = (x + p)(x + q), where p·q = c and p + q = b. For x² − 7x + 12: numbers that multiply to 12 and add to −7 are −3 and −4, so (x − 3)(x − 4).`,
        `Three terms with a leading coefficient: 2x² + 7x + 3. Try (2x + 1)(x + 3) and check with FOIL: 2x² + 6x + x + 3. Yes. Or use the quadratic formula if trial and error stalls.`,
      ],
    },
    {
      type: 'example',
      prompt: `What are the solutions of x² − 5x = 14?`,
      solution: `Set it equal to zero FIRST: x² − 5x − 14 = 0. Factors of −14 that add to −5: −7 and +2. (x − 7)(x + 2) = 0, so **x = 7 or x = −2**.\nTrap: factoring x² − 5x = x(x − 5) and concluding x = 0 or 5. The zero-product rule only works when one side IS zero.`,
    },

    { type: 'h', text: 'Quadratic formula and the discriminant' },
    {
      type: 'p',
      text: `For ax² + bx + c = 0: x = (−b ± √(b² − 4ac)) / 2a. Use it when factoring is not obvious. The part under the root, b² − 4ac, is the **discriminant**, and it tells you how many real solutions exist before you solve anything.`,
    },
    {
      type: 'table',
      headers: ['Discriminant b² − 4ac', 'Real solutions', 'Graph'],
      rows: [
        ['positive', 'two distinct', 'parabola crosses the x-axis twice'],
        ['zero', 'exactly one (a repeated root)', 'vertex touches the x-axis'],
        ['negative', 'none (two complex solutions)', 'parabola never touches the x-axis'],
      ],
    },
    {
      type: 'example',
      prompt: `Solve 2x² − 4x − 3 = 0.`,
      solution: `a = 2, b = −4, c = −3. Discriminant: (−4)² − 4(2)(−3) = 16 + 24 = 40. x = (4 ± √40)/4 = (4 ± 2√10)/4 = **1 ± (√10)/2**.\nTraps: computing −4(2)(−3) as −24 (sign error gives √(−8), no real solutions), or dividing only the 4 by 2a and not the root. Everything in the numerator gets divided by 2a.`,
    },

    { type: 'h', text: 'Parabola features' },
    {
      type: 'table',
      headers: ['Feature', 'From y = ax² + bx + c', 'From vertex form y = a(x − h)² + k'],
      rows: [
        ['Opens', 'up if a > 0, down if a < 0', 'same'],
        ['Vertex', 'x = −b/(2a); plug in to get y', '(h, k), with the sign of h flipped'],
        ['Axis of symmetry', 'x = −b/(2a)', 'x = h'],
        ['y-intercept', '(0, c)', 'plug in x = 0'],
        ['x-intercepts (zeros)', 'solve ax² + bx + c = 0', 'solve a(x − h)² + k = 0'],
        ['Max / min value', 'the y-coordinate of the vertex', 'k'],
      ],
    },
    {
      type: 'example',
      prompt: `A ball's height in feet after t seconds is h(t) = −16t² + 64t + 5. What is the maximum height of the ball?`,
      solution: `The parabola opens down (a = −16), so the vertex is the maximum. t = −b/(2a) = −64/(2 · −16) = 2 seconds. Height: h(2) = −16(4) + 64(2) + 5 = −64 + 128 + 5 = **69 feet**.\nTrap: answering 2 (that is WHEN the max happens, not the max height) or 5 (the starting height). "Maximum height" means the y-value of the vertex.`,
    },
    {
      type: 'tip',
      text: `The zeros of a parabola are symmetric around the vertex. If the x-intercepts are 1 and 7, the vertex is at x = 4. Conversely, if the vertex is at x = 3 and one zero is at x = −1, the other zero is at x = 7.`,
    },

    { type: 'h', text: 'Polynomial operations and remainders' },
    {
      type: 'list',
      items: [
        `Add or subtract by combining like terms. Distribute the minus sign across EVERY term when subtracting: (3x² + 2x − 1) − (x² − 4x + 2) = 2x² + 6x − 3.`,
        `The degree is the highest exponent. The degree of a product is the sum of the degrees: (x² + 1)(x³ − x) has degree 5.`,
        `If (x − a) is a factor of p(x), then p(a) = 0. Flip it around: if p(a) = 0, then x = a is a zero and (x − a) is a factor.`,
        `**Remainder theorem:** the remainder when p(x) is divided by (x − a) is simply p(a). No long division needed.`,
        `A polynomial of degree n has at most n real zeros and at most n − 1 turning points.`,
      ],
    },
    {
      type: 'example',
      prompt: `What is the remainder when p(x) = x³ + 2x² − 5x + 4 is divided by x + 3?`,
      solution: `x + 3 = x − (−3), so evaluate p(−3): (−27) + 2(9) − 5(−3) + 4 = −27 + 18 + 15 + 4 = **10**.\nTrap: plugging in +3 (which gives 34). The divisor x − a uses a; for x + 3, a = −3. Also watch (−3)³ = −27, not +27.`,
    },
    {
      type: 'tip',
      text: `If a question asks which expression is equivalent and the choices are polynomials, plug in x = 2 (or any small number other than 0 and 1) into the original and into each choice. Matching values means a match; it is faster than expanding.`,
    },
  ],
}

const lessonFunctions: Lesson = {
  id: 'math-functions',
  section: 'math',
  title: 'Functions',
  summary: 'Function notation, composition, inverses, domain and range, graph transformations, piecewise rules, and exponential models.',
  minutes: 11,
  blocks: [
    { type: 'h', text: 'Notation, evaluation, and composition' },
    {
      type: 'p',
      text: `f(x) = 3x − 7 is a rule: take the input, triple it, subtract 7. f(4) means "put 4 in," so f(4) = 5. f(a + 1) means put (a + 1) in everywhere you see x: 3(a + 1) − 7 = 3a − 4. The parentheses in f(x) do NOT mean multiplication.`,
    },
    {
      type: 'example',
      prompt: `If f(x) = x² − 3x, what is f(x + 2) − f(x)?`,
      solution: `f(x + 2) = (x + 2)² − 3(x + 2) = x² + 4x + 4 − 3x − 6 = x² + x − 2. Subtract f(x): (x² + x − 2) − (x² − 3x) = **4x − 2**.\nTraps: (x + 2)² = x² + 4 (missing the middle term) and forgetting to distribute the −3 to the 2. Check with x = 1: f(3) − f(1) = 0 − (−2) = 2, and 4(1) − 2 = 2. Matches.`,
    },

    {
      type: 'p',
      text: `**Composition: inside first.** f(g(x)) means do g first, then feed the result into f. The notation (f ∘ g)(x) means the same thing. Order matters: f(g(x)) and g(f(x)) are usually different. For a number, work from the inside out: g(2) first, then f of that.`,
    },
    {
      type: 'example',
      prompt: `Let f(x) = 2x + 1 and g(x) = x² − 4. What is f(g(3)) − g(f(3))?`,
      solution: `g(3) = 9 − 4 = 5, so f(g(3)) = f(5) = 11. f(3) = 7, so g(f(3)) = g(7) = 49 − 4 = 45. Difference: 11 − 45 = **−34**.\nTrap: computing the compositions in the wrong order, which swaps the two values and gives +34. Inside function first, always.`,
    },

    { type: 'h', text: 'Inverses, domain and range, and reading graphs' },
    {
      type: 'p',
      text: `The inverse f⁻¹ undoes f: if f(2) = 9, then f⁻¹(9) = 2. To find a formula, swap x and y and solve for y. For f(x) = 2x + 6: write y = 2x + 6, swap to x = 2y + 6, solve: y = (x − 6)/2. Graphically, the inverse is the reflection of f across the line y = x. Note: f⁻¹(x) is NOT 1/f(x).`,
    },

    {
      type: 'list',
      items: [
        `Domain = all allowed inputs (x-values). Range = all possible outputs (y-values).`,
        `Two things break the domain: dividing by zero and square-rooting a negative. For f(x) = √(x − 3)/(x − 8): need x − 3 ≥ 0 AND x ≠ 8, so x ≥ 3, x ≠ 8.`,
        `Range of a parabola: starts at the vertex's y-value. y = (x − 1)² + 4 has range y ≥ 4.`,
        `Range of an absolute value or square root: y = |x| − 2 has range y ≥ −2; y = √x has range y ≥ 0.`,
        `On a graph: domain is how far the graph spreads left-right; range is how far it spreads up-down.`,
        `**Reading graphs and tables:** f(3) = 5 means the point (3, 5) is on the graph. "For what x is f(x) = 0?" asks for the x-intercepts. "f(x) > 0" means the graph is above the x-axis; "f is increasing" means the graph rises as you move right.`,
        `Vertical line test: a graph is a function only if no vertical line hits it twice. From a table, check the pattern: constant differences in y mean linear; constant ratios mean exponential.`,
      ],
    },

    { type: 'h', text: 'Transformations' },
    {
      type: 'table',
      headers: ['Change to f(x)', 'Effect on the graph'],
      rows: [
        ['f(x) + k', 'shifts UP k (down if k is negative)'],
        ['f(x − h)', 'shifts RIGHT h (the sign is backwards from what you expect)'],
        ['f(x + h)', 'shifts LEFT h'],
        ['−f(x)', 'reflects over the x-axis (flips upside down)'],
        ['f(−x)', 'reflects over the y-axis (flips left-right)'],
        ['a · f(x), a > 1', 'vertical stretch (taller)'],
        ['a · f(x), 0 < a < 1', 'vertical compression (shorter)'],
        ['f(bx), b > 1', 'horizontal compression (squeezed toward the y-axis)'],
      ],
    },
    {
      type: 'warning',
      text: `Anything INSIDE the parentheses with x acts horizontally and backwards: f(x − 3) moves right 3, f(2x) squeezes. Anything OUTSIDE acts vertically and normally: f(x) − 3 moves down 3, 2f(x) stretches.`,
    },
    {
      type: 'example',
      prompt: `The graph of g is the graph of f(x) = x² shifted 4 units left and 1 unit down, then reflected over the x-axis. Which equation defines g?`,
      solution: `Left 4: (x + 4)². Down 1: (x + 4)² − 1. Reflect over the x-axis (negate the whole output): **g(x) = −[(x + 4)² − 1] = −(x + 4)² + 1**.\nTraps: writing (x − 4)² for "left 4," or reflecting only the squared term to get −(x + 4)² − 1. The reflection applies to the entire function as it exists at that step.`,
    },

    { type: 'h', text: 'Piecewise functions and exponential models' },
    {
      type: 'p',
      text: `A piecewise function uses different rules on different intervals. To evaluate, first find which interval the input belongs to, then use only that rule. For f(x) = { x + 5 if x < 0 ; x² if x ≥ 0 }, f(−3) = 2 (first rule) and f(3) = 9 (second rule). Watch the endpoints: at x = 0, the "≥" rule applies, so f(0) = 0.`,
    },

    {
      type: 'p',
      text: `**Exponential growth and decay.** A quantity that changes by the same PERCENT each period is exponential: A = P(1 + r)ᵗ for growth, A = P(1 − r)ᵗ for decay, where P is the starting amount, r is the rate as a decimal, and t is the number of periods. Doubling every 5 years: A = P · 2^(t/5). Linear change adds the same AMOUNT each period; exponential change multiplies by the same FACTOR.`,
    },
    {
      type: 'example',
      prompt: `A town's population is 8,000 and grows 6% per year. Which expression gives the population after 10 years?`,
      solution: `Growth of 6% per year means multiply by 1.06 each year: **8000(1.06)¹⁰** (about 14,327).\nTraps: 8000(0.06)¹⁰ (forgot the 1), 8000(1.6)¹⁰ (decimal in the wrong place), and 8000 + 8000(0.06)(10) = 12,800 (linear growth, which treats 6% of the ORIGINAL as the yearly gain). Percent-per-period is always exponential.`,
    },

  ],
}

const lessonGeometry: Lesson = {
  id: 'math-geometry',
  section: 'math',
  title: 'Geometry',
  summary: 'Angles, triangles, similar figures, circles, area and perimeter, and 3-D volume and surface area.',
  minutes: 12,
  blocks: [
    { type: 'h', text: 'Angle relationships' },
    {
      type: 'list',
      items: [
        `A straight line is 180°; angles around a point total 360°. Vertical angles (across an X) are equal.`,
        `Parallel lines cut by a transversal make only TWO angle sizes, and they add to 180°. Corresponding, alternate interior, and alternate exterior angles are equal; same-side interior angles are supplementary.`,
        `Triangle angles add to 180°. An exterior angle equals the sum of the two remote interior angles.`,
        `Polygon interior angles add to (n − 2) × 180°. A regular polygon splits that evenly: each interior angle of a regular pentagon is 540°/5 = 108°. Exterior angles of ANY polygon add to 360°.`,
      ],
    },
    {
      type: 'example',
      prompt: `In triangle ABC, the measure of angle A is twice the measure of angle B, and angle C measures 30° more than angle B. What is the measure of angle A?`,
      solution: `Let B = x. Then A = 2x and C = x + 30. Sum to 180: 2x + x + x + 30 = 180, so 4x = 150 and x = 37.5. Angle A = 2x = **75°**.\nTrap: answering 37.5° (that is angle B) or 67.5° (angle C). The question asked for A.`,
    },

    { type: 'h', text: 'Triangles and similar triangles' },
    {
      type: 'list',
      items: [
        `Isosceles: two equal sides, and the angles opposite them are equal. Equilateral: all sides equal, all angles 60°.`,
        `Triangle inequality: any two sides must add to MORE than the third. Sides 3, 4, 8 cannot make a triangle (3 + 4 < 8). The third side is strictly between the difference and the sum of the other two.`,
        `The largest angle is across from the longest side.`,
        `Area = (1/2) × base × height, where the height is PERPENDICULAR to the base (it may fall outside the triangle in an obtuse triangle).`,
        `Pythagorean theorem (right triangles only): a² + b² = c², with c the hypotenuse. Memorize the triples 3-4-5, 5-12-13, 8-15-17, 7-24-25 and their multiples (6-8-10, 9-12-15, 10-24-26).`,
      ],
    },
    {
      type: 'example',
      prompt: `A rectangular park is 120 m long and 50 m wide. How much shorter is the walk from one corner to the opposite corner along the diagonal than along two sides?`,
      solution: `Along two sides: 120 + 50 = 170 m. Diagonal: √(120² + 50²) = √(14,400 + 2,500) = √16,900 = 130 m (a 5-12-13 triple scaled by 10). Difference: 170 − 130 = **40 m**.\nTraps: answering 130 (the diagonal itself) or computing √(120 + 50) instead of squaring. Spot the triple and you skip the calculator entirely.`,
    },

    {
      type: 'p',
      text: `**Similar triangles.** Similar figures have the same shape: equal angles and PROPORTIONAL sides. If two triangles share two angles (including a shared vertical angle or a right angle plus a common angle), they are similar. Set up the ratio of corresponding sides and cross-multiply. Careful: the scale factor applies to lengths; AREAS scale by the factor squared and VOLUMES by the factor cubed.`,
    },
    {
      type: 'example',
      prompt: `A 6-foot-tall person casts a 9-foot shadow at the same time a flagpole casts a 37.5-foot shadow. How tall is the flagpole?`,
      solution: `The sun makes the same angle for both, so the triangles are similar: height/shadow is constant. 6/9 = h/37.5, so 9h = 225 and **h = 25 feet**.\nTrap: setting up 6/9 = 37.5/h (mixing up which number goes where), which gives 56.25. Keep "person" on one side of each fraction and "pole" on the other, or keep heights on top and shadows on bottom.`,
    },

    { type: 'h', text: 'Area, perimeter, and circles' },
    {
      type: 'table',
      headers: ['Shape', 'Area', 'Perimeter / other'],
      rows: [
        ['Rectangle', 'lw', '2l + 2w'],
        ['Square', 's²', '4s; diagonal s√2'],
        ['Parallelogram', 'bh (h is the perpendicular height, not the slanted side)', 'sum of sides'],
        ['Triangle', '(1/2)bh', 'sum of sides'],
        ['Trapezoid', '(1/2)(b₁ + b₂)h', 'sum of sides'],
        ['Circle', 'πr²', 'circumference 2πr = πd'],
      ],
    },
    {
      type: 'warning',
      text: `For odd-shaped figures, split into rectangles and triangles, or subtract a cut-out from a bigger shape. The shaded region between a square and an inscribed circle is (side)² − π(side/2)². Notice the radius is HALF the side.`,
    },

    {
      type: 'list',
      items: [
        `Circumference C = 2πr, area A = πr². Diameter d = 2r. If the problem gives the diameter, halve it before anything else.`,
        `A central angle of θ degrees cuts off a fraction θ/360 of the circle. Arc length = (θ/360) × 2πr. Sector area = (θ/360) × πr².`,
        `An inscribed angle (vertex on the circle) is HALF the arc it opens onto. An inscribed angle that opens onto a diameter is 90°.`,
        `A tangent line is perpendicular to the radius at the point of tangency. Two tangent segments from the same outside point are equal.`,
        `A radius perpendicular to a chord bisects the chord. That creates a right triangle: (half chord)² + (distance to center)² = r².`,
      ],
    },
    {
      type: 'example',
      prompt: `A circular pizza with a 16-inch diameter is cut into 8 equal slices. What is the area of one slice, in square inches?`,
      solution: `Radius = 8 (half the diameter). Whole area = π(8)² = 64π. One slice is 1/8 of the circle: 64π/8 = **8π square inches** (about 25.1).\nTrap: using 16 as the radius gives 256π/8 = 32π. The diameter-for-radius mistake is the most reliable wrong answer in geometry.`,
    },

    { type: 'h', text: 'Three dimensions' },
    {
      type: 'table',
      headers: ['Solid', 'Volume', 'Surface area'],
      rows: [
        ['Rectangular box', 'lwh', '2lw + 2lh + 2wh'],
        ['Cube', 's³', '6s²'],
        ['Cylinder', 'πr²h', '2πr² + 2πrh'],
        ['Any prism', '(area of base) × height', 'add up all faces'],
        ['Sphere', '(4/3)πr³', '4πr²'],
        ['Cone', '(1/3)πr²h', 'πr² + πr·(slant height)'],
        ['Pyramid', '(1/3)(base area)(height)', 'base + triangular faces'],
      ],
    },
    {
      type: 'tip',
      text: `Volume questions usually hide a unit trick or a "how many fit" question. Dividing a big volume by a small volume gives a count. And if every dimension of a solid doubles, the volume becomes 8 times as big, not 2.\n\nNo figure? Draw one, even if it is ugly. Mark every given length and angle, mark right angles with a small square, and mark equal sides with tick marks. The answer is usually visible once the picture is labeled.`,
    },
  ],
}

const lessonTrig: Lesson = {
  id: 'math-trigonometry',
  section: 'math',
  title: 'Trigonometry',
  summary: 'SOHCAHTOA, special right triangles, radians and the unit circle, key identities, sine and cosine graphs, and when to reach for the laws of sines and cosines.',
  minutes: 11,
  blocks: [
    { type: 'h', text: 'SOHCAHTOA and special right triangles' },
    {
      type: 'p',
      text: `In a right triangle, pick the acute angle θ you care about. The side across from it is the **opposite**, the side next to it (not the hypotenuse) is the **adjacent**, and the longest side is the **hypotenuse**. Then sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj. The reciprocals: csc θ = hyp/opp, sec θ = hyp/adj, cot θ = adj/opp.`,
    },
    {
      type: 'example',
      prompt: `In right triangle PQR, the right angle is at Q, PQ = 8, and QR = 15. What is the value of cos R?`,
      solution: `Hypotenuse PR = √(8² + 15²) = √289 = 17 (an 8-15-17 triple). For angle R, the adjacent leg is QR = 15 (it touches R), and the opposite leg is PQ = 8. cos R = adj/hyp = **15/17**.\nTrap: 8/17 is sin R (or cos P). Opposite and adjacent depend on WHICH angle you are standing at, so always re-label from the angle in the question.`,
    },
    {
      type: 'example',
      prompt: `From a point on level ground 40 meters from the base of a tower, the angle of elevation to the top of the tower is 35°. Which expression gives the height of the tower in meters?`,
      solution: `Draw it: the ground distance (40) is adjacent to the 35° angle, and the height is opposite. The ratio that links opposite and adjacent is tangent: tan 35° = h/40, so **h = 40 tan 35°** (about 28 m).\nTraps: 40/tan 35° (flipped the ratio) and 40 sin 35° (sine uses the hypotenuse, which you do not have). Write the ratio before you touch the calculator.`,
    },

    {
      type: 'table',
      headers: ['Triangle', 'Sides', 'Trig values'],
      rows: [
        ['45-45-90', 'leg x, leg x, hypotenuse x√2', 'sin 45° = cos 45° = √2/2, tan 45° = 1'],
        ['30-60-90', 'short leg x (opposite 30°), long leg x√3 (opposite 60°), hypotenuse 2x', 'sin 30° = 1/2, cos 30° = √3/2, tan 30° = √3/3, sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3'],
      ],
    },
    {
      type: 'warning',
      text: `In a 30-60-90 triangle, the √3 goes with the LONG leg (across from 60°), and the hypotenuse is twice the SHORT leg, not twice the long leg. If the hypotenuse is 10, the short leg is 5 and the long leg is 5√3.`,
    },

    { type: 'h', text: 'Radians, the unit circle, and identities' },
    {
      type: 'p',
      text: `180° = π radians. To convert degrees to radians, multiply by π/180; radians to degrees, multiply by 180/π. So 60° = π/3, 90° = π/2, 135° = 3π/4, 270° = 3π/2, 360° = 2π. On the unit circle (radius 1), the point at angle θ is (cos θ, sin θ), which is why cosine is the x-coordinate and sine is the y-coordinate.`,
    },
    {
      type: 'table',
      headers: ['Quadrant', 'Angle range', 'Positive functions'],
      rows: [
        ['I', '0° to 90°', 'all'],
        ['II', '90° to 180°', 'sin (and csc)'],
        ['III', '180° to 270°', 'tan (and cot)'],
        ['IV', '270° to 360°', 'cos (and sec)'],
      ],
    },
    {
      type: 'list',
      items: [
        `"All Students Take Calculus" gives the positive function in quadrants I, II, III, IV. The ACT loves: "If sin θ = 3/5 and 90° < θ < 180°, what is cos θ?" Draw the 3-4-5 triangle, then apply the quadrant sign: cos θ = −4/5.`,
        `sin²θ + cos²θ = 1. Use it to get one from the other: if cos θ = 5/13, then sin²θ = 1 − 25/169 = 144/169, so sin θ = ±12/13 (sign from the quadrant).`,
        `tan θ = sin θ / cos θ, and cot θ = cos θ / sin θ.`,
        `csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ.`,
        `Cofunctions: sin θ = cos(90° − θ). The two acute angles of a right triangle swap sine and cosine.`,
      ],
    },
    {
      type: 'example',
      prompt: `If tan θ = 7/24 and θ is in Quadrant III, what is sin θ?`,
      solution: `tan = opp/adj = 7/24, so the reference triangle has legs 7 and 24 and hypotenuse √(49 + 576) = √625 = 25 (a 7-24-25 triple). Sine is opp/hyp = 7/25 in size. In Quadrant III, sine is negative: **sin θ = −7/25**.\nTraps: +7/25 (ignored the quadrant) and −24/25 (that is cos θ). Build the triangle, then fix the sign.`,
    },

    { type: 'h', text: 'Sine and cosine graphs; laws of sines and cosines' },
    {
      type: 'p',
      text: `y = A sin(Bx) + C (or cos): **amplitude** = |A| (half the distance from peak to valley), **period** = 2π/B (how long one full wave takes), and C shifts the midline up or down. y = sin x starts at the midline going up; y = cos x starts at its peak. Both have amplitude 1, period 2π, and range −1 ≤ y ≤ 1.`,
    },
    {
      type: 'example',
      prompt: `What are the amplitude and period of y = 4 cos(3x) − 1?`,
      solution: `Amplitude = |A| = **4**. Period = 2π/B = **2π/3**. The −1 drops the midline to y = −1, so the graph runs from −5 to 3.\nTraps: calling the period 3 or 6π (multiplying instead of dividing by B), and including the −1 in the amplitude. Amplitude is only about the coefficient in front.`,
    },

    {
      type: 'table',
      headers: ['Law', 'Formula', 'Use when you know...'],
      rows: [
        ['Law of sines', 'a/sin A = b/sin B = c/sin C', 'an angle and its opposite side, plus one more side or angle'],
        ['Law of cosines', 'c² = a² + b² − 2ab cos C', 'two sides and the angle between them (SAS), or all three sides (SSS)'],
      ],
    },
    {
      type: 'tip',
      text: `The ACT rarely makes you compute with these; it usually asks which expression gives a side or angle. Match the setup: angle-opposite-side pairs mean law of sines; a "between" angle or three sides means law of cosines. Notice that with C = 90°, cos C = 0 and the law of cosines turns into the Pythagorean theorem.`,
    },
  ],
}

const lessonStats: Lesson = {
  id: 'math-statistics-and-probability',
  section: 'math',
  title: 'Statistics & Probability',
  summary: 'Center and spread, weighted averages, probability rules, counting, expected value, and reading data displays.',
  minutes: 11,
  blocks: [
    { type: 'h', text: 'Mean, median, mode, range, and weighted averages' },
    {
      type: 'list',
      items: [
        `**Mean** (average): sum ÷ count. So sum = mean × count; that identity solves most average problems.`,
        `**Median**: the middle value after sorting. With an even count, average the two middle values. ALWAYS sort first.`,
        `**Mode**: the most frequent value. There can be more than one, or none.`,
        `**Range**: maximum − minimum. It is one number, not an interval.`,
        `Outliers pull the mean toward them but barely move the median. If a data set has one huge value, the mean is bigger than the median.`,
      ],
    },
    {
      type: 'example',
      prompt: `The data set {12, 7, 9, 15, 7, 20, 11} is given. What is the median minus the mode?`,
      solution: `Sort: 7, 7, 9, 11, 12, 15, 20. Seven values, so the median is the 4th: 11. The mode is 7 (appears twice). Median − mode = 11 − 7 = **4**.\nTrap: taking the median of the UNSORTED list (15) gives 8. The sort step is non-negotiable.`,
    },

    {
      type: 'p',
      text: `**Weighted averages and changing a data point.** When groups have different sizes, you cannot average the averages. Multiply each group's mean by its size, add, and divide by the total count. If one value in a data set changes, the mean changes by (change in that value) ÷ (count); the median changes only if the middle shifts.`,
    },
    {
      type: 'example',
      prompt: `A class of 30 students took a test. The 18 students in the morning section averaged 80, and the 12 students in the afternoon section averaged 90. What is the class average?`,
      solution: `Total points: 18 × 80 + 12 × 90 = 1,440 + 1,080 = 2,520. Divide by 30 students: **84**.\nTrap: averaging 80 and 90 to get 85. The bigger group pulls the overall mean toward its own average, so the answer must be closer to 80 than to 90.`,
    },

    { type: 'h', text: 'Probability basics' },
    {
      type: 'list',
      items: [
        `P(event) = (favorable outcomes) ÷ (total outcomes), always between 0 and 1.`,
        `P(not A) = 1 − P(A).`,
        `**Independent** events ("and"): multiply. P(two heads) = 1/2 × 1/2 = 1/4.`,
        `**Without replacement**: the second probability uses the reduced totals. From 5 red and 3 blue, P(red then red) = 5/8 × 4/7 = 20/56 = 5/14.`,
        `**Mutually exclusive** events ("or"): add. P(roll a 2 or a 5) = 1/6 + 1/6 = 1/3. If they can overlap, subtract the overlap: P(A or B) = P(A) + P(B) − P(A and B).`,
        `**"At least one"**: compute 1 − P(none). P(at least one 6 in three rolls) = 1 − (5/6)³ = 91/216.`,
      ],
    },
    {
      type: 'example',
      prompt: `A drawer holds 6 black socks and 4 white socks. Two socks are pulled out at random without replacement. What is the probability that both are white?`,
      solution: `First white: 4/10. Second white, with one white gone: 3/9. Multiply: (4/10)(3/9) = 12/90 = **2/15**.\nTraps: (4/10)(4/10) = 4/25 ignores that the first sock is not put back; 4/10 + 3/9 adds when you should multiply. "Both" means "and," and "and" means multiply.`,
    },

    { type: 'h', text: 'Counting and expected value' },
    {
      type: 'table',
      headers: ['Situation', 'Rule', 'Example'],
      rows: [
        ['Independent choices in sequence', 'multiply the numbers of options (fundamental counting principle)', '4 shirts × 3 pants × 2 shoes = 24 outfits'],
        ['Arrange n distinct things', 'n! = n × (n − 1) × ... × 1', '5 books on a shelf: 5! = 120'],
        ['Order matters, choose r of n (permutation)', 'nPr = n!/(n − r)!', 'gold-silver-bronze from 8 runners: 8 × 7 × 6 = 336'],
        ['Order does not matter, choose r of n (combination)', 'nCr = n!/(r!(n − r)!)', 'a 3-person committee from 8: 336/3! = 56'],
      ],
    },
    {
      type: 'tip',
      text: `Ask: "Would swapping two of the chosen items create a different outcome?" If yes (president vs. vice president), it is a permutation. If no (a committee, a pizza with three toppings), it is a combination, so divide out the repeats.`,
    },

    {
      type: 'p',
      text: `**Expected value** is the long-run average outcome: multiply each outcome by its probability and add. A game that pays $10 with probability 1/4 and $0 otherwise has expected value 0.25 × 10 = $2.50 per play. If it costs $3 to play, you expect to lose $0.50 per play on average.`,
    },
    {
      type: 'example',
      prompt: `A spinner has 10 equal sections: 1 section is worth 50 points, 4 sections are worth 10 points, and the rest are worth 0 points. What is the expected number of points on one spin?`,
      solution: `(1/10)(50) + (4/10)(10) + (5/10)(0) = 5 + 4 + 0 = **9 points**.\nTrap: averaging the three point values (50 + 10 + 0)/3 = 20 ignores how likely each one is. Every outcome must be weighted by its probability.`,
    },

    { type: 'h', text: 'Charts, tables, and scatterplots' },
    {
      type: 'list',
      items: [
        `Read titles, axis labels, and units BEFORE the numbers. Many errors come from misreading the scale (each gridline is 5, not 1) or the units (thousands).`,
        `Two-way tables: a probability "given that" a condition holds uses only that row or column as the total.`,
        `Scatterplots: positive correlation rises to the right, negative falls. A line of best fit predicts; a point far from it is an outlier. The slope of the fit line is the rate of change in the y-units per x-unit.`,
        `Box plots show minimum, first quartile, median, third quartile, and maximum. The box holds the middle 50% of the data; its width is the interquartile range.`,
        `A histogram's bars show how many values fall in each interval. To find a median from a histogram, count bars until you pass the halfway point.`,
      ],
    },
    {
      type: 'warning',
      text: `"Percent" and "number" are different questions. A graph might show that 40% of seniors and 30% of juniors drive to school; without knowing how many seniors and juniors there are, you cannot say which group has MORE drivers.`,
    },
  ],
}

const lessonAdvanced: Lesson = {
  id: 'math-advanced-topics',
  section: 'math',
  title: 'Advanced Topics',
  summary: 'Matrices, logarithms, complex numbers, arithmetic and geometric sequences, and vectors: a handful of points that most students leave on the table.',
  minutes: 12,
  blocks: [
    {
      type: 'p',
      text: `Each of these topics shows up as only one or two questions per test, but they are usually quick once you know the rule, and most students skip them. None of them requires creativity; each is a two-step recipe. Learn the mechanics below and you pick up points your competition is giving away. If you blank on test day, skip, guess, and return.`,
    },

    { type: 'h', text: 'Matrices' },
    {
      type: 'list',
      items: [
        `A matrix is a grid of numbers. Its dimensions are rows × columns, in that order: a 2 × 3 matrix has 2 rows and 3 columns.`,
        `Add or subtract matrices of the SAME dimensions entry by entry. Scalar multiplication multiplies every entry: 3 × [1 2; 4 5] = [3 6; 12 15].`,
        `To multiply AB, the number of columns of A must equal the number of rows of B. If A is m × n and B is n × p, then AB is m × p. A 2 × 3 times a 3 × 4 gives a 2 × 4; a 2 × 3 times a 2 × 3 is undefined.`,
        `Each entry of a product is row-of-A dot column-of-B: multiply matching entries and add.`,
        `2 × 2 determinant: for [a b; c d], det = ad − bc.`,
      ],
    },
    {
      type: 'example',
      prompt: `What is the determinant of the matrix [5 −3; 2 4]?`,
      solution: `det = ad − bc = (5)(4) − (−3)(2) = 20 − (−6) = **26**.\nTrap: 20 − 6 = 14 comes from dropping the negative sign on −3. Write the subtraction with parentheses around negatives every time.`,
    },

    { type: 'h', text: 'Logarithms and complex numbers' },
    {
      type: 'p',
      text: `A logarithm is an exponent. log_b(x) = y means bʸ = x. So log₂(8) = 3 because 2³ = 8, and log₅(1) = 0 because 5⁰ = 1. "log" with no base means base 10; "ln" means base e. When you see a log, rewrite it in exponent form and the question usually collapses.`,
    },
    {
      type: 'table',
      headers: ['Rule', 'Example'],
      rows: [
        ['log_b(xy) = log_b x + log_b y', 'log 20 + log 5 = log 100 = 2'],
        ['log_b(x/y) = log_b x − log_b y', 'log₃ 54 − log₃ 2 = log₃ 27 = 3'],
        ['log_b(xⁿ) = n · log_b x', 'log₂(8⁵) = 5 · 3 = 15'],
        ['log_b(b) = 1 and log_b(1) = 0', 'log₇ 7 = 1'],
        ['b^(log_b x) = x', '10^(log 50) = 50'],
      ],
    },
    {
      type: 'example',
      prompt: `If log₄(x) = 3/2, what is x?`,
      solution: `Rewrite in exponent form: x = 4^(3/2) = (√4)³ = 2³ = **8**.\nTraps: x = 4 × 3/2 = 6 (multiplied instead of exponentiating) and x = (3/2)⁴. The base goes on the bottom and gets raised to the log's value.`,
    },

    {
      type: 'list',
      items: [
        `i = √(−1), so i² = −1, i³ = −i, i⁴ = 1, and then the cycle repeats. To find i^n, divide n by 4 and use the remainder: i^23 has remainder 3, so i^23 = i³ = −i.`,
        `Add or subtract by combining real parts and imaginary parts: (3 + 2i) + (1 − 5i) = 4 − 3i.`,
        `Multiply with FOIL, then replace i² with −1: (2 + 3i)(1 − i) = 2 − 2i + 3i − 3i² = 2 + i + 3 = 5 + i.`,
        `The conjugate of a + bi is a − bi. Their product is a² + b² (a real number), which is how you divide: multiply top and bottom by the conjugate of the denominator.`,
        `√(−16) = 4i. Pull the i out before multiplying: √(−4) · √(−9) = (2i)(3i) = 6i² = −6, NOT √36 = 6.`,
      ],
    },
    {
      type: 'example',
      prompt: `Which of the following is equivalent to (4 + 2i)/(1 − i)?`,
      solution: `Multiply top and bottom by the conjugate 1 + i. Top: (4 + 2i)(1 + i) = 4 + 4i + 2i + 2i² = 4 + 6i − 2 = 2 + 6i. Bottom: (1 − i)(1 + i) = 1 − i² = 2. Result: (2 + 6i)/2 = **1 + 3i**.\nTrap: forgetting i² = −1 on top gives (4 + 6i)/2 = 2 + 3i. Check: (1 + 3i)(1 − i) = 1 − i + 3i − 3i² = 4 + 2i. Correct.`,
    },

    { type: 'h', text: 'Sequences and vectors' },
    {
      type: 'table',
      headers: ['Type', 'Pattern', 'nth term', 'Sum of first n terms'],
      rows: [
        ['Arithmetic', 'add the same d each time (3, 7, 11, 15, ...)', 'aₙ = a₁ + (n − 1)d', 'Sₙ = n(a₁ + aₙ)/2 (count × average of first and last)'],
        ['Geometric', 'multiply by the same r each time (2, 6, 18, 54, ...)', 'aₙ = a₁ · rⁿ⁻¹', 'Sₙ = a₁(1 − rⁿ)/(1 − r); infinite sum a₁/(1 − r) when |r| < 1'],
      ],
    },
    {
      type: 'warning',
      text: `The exponent in a geometric sequence is n − 1, not n, and the multiplier in an arithmetic sequence is (n − 1), not n. The 10th term of 3, 7, 11, ... is 3 + 9(4) = 39, not 43. Off-by-one is THE error here, and the wrong version is always a choice.`,
    },
    {
      type: 'example',
      prompt: `The 3rd term of an arithmetic sequence is 14 and the 8th term is 39. What is the 20th term?`,
      solution: `From the 3rd to the 8th term is 5 steps: 39 − 14 = 25, so d = 5. Work back to the first term: a₁ = 14 − 2(5) = 4. Then a₂₀ = 4 + 19(5) = **99**.\nTrap: d = 25/8 or 25/3 (dividing by a term number instead of the number of steps between terms), or a₂₀ = 4 + 20(5) = 104 (off by one).`,
    },
    {
      type: 'example',
      prompt: `A ball is dropped from 80 cm and bounces back to 3/4 of its previous height on each bounce. How high does it rise after the 4th bounce?`,
      solution: `Each bounce multiplies the height by 3/4, so after 4 bounces: 80 × (3/4)⁴ = 80 × 81/256 = 6480/256 = **25.3125 cm** (about 25.3 cm).\nTrap: using (3/4)³ (treating the 4th bounce as the 4th term with exponent n − 1). Here "after the 4th bounce" means four multiplications have happened. Read whether the first term is before or after the first change.`,
    },

    {
      type: 'list',
      items: [
        `A vector has magnitude (length) and direction. In component form ⟨a, b⟩, a is the horizontal change and b is the vertical change.`,
        `Add component-wise: ⟨2, 5⟩ + ⟨−4, 1⟩ = ⟨−2, 6⟩. Scalar multiply every component: 3⟨2, −1⟩ = ⟨6, −3⟩.`,
        `Magnitude is the distance formula: |⟨3, −4⟩| = √(9 + 16) = 5.`,
        `Vectors may be written with unit vectors: 3i + 4j means ⟨3, 4⟩ (this i is a direction, not √(−1)).`,
        `Vector from point P(x₁, y₁) to point Q(x₂, y₂): ⟨x₂ − x₁, y₂ − y₁⟩.`,
      ],
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  QUESTIONS                                                          */
/* ------------------------------------------------------------------ */

const questions: Question[] = [
  /* ---------- math-number-and-arithmetic ---------- */
  {
    id: 'math-num-01',
    section: 'math',
    topic: 'math-number-and-arithmetic',
    difficulty: 1,
    stem: `A jacket with a regular price of $80 is on sale for 25% off. What is the sale price of the jacket?`,
    choices: ['$20', '$55', '$60', '$65'],
    answer: 2,
    explanation: `25% off means you pay 75%: 80 × 0.75 = $60. Choice A ($20) is the amount of the discount, not the price after the discount. Choice B subtracts 25 dollars instead of 25 percent.`,
  },
  {
    id: 'math-num-02',
    section: 'math',
    topic: 'math-number-and-arithmetic',
    difficulty: 1,
    stem: `Which of the following is equal to 3/8 written as a decimal?`,
    choices: ['0.35', '0.375', '0.625', '2.667'],
    answer: 1,
    explanation: `3 ÷ 8 = 0.375. Choice D (2.667) divides in the wrong order (8 ÷ 3). Choice C (0.625) is 5/8, the complement of 3/8. Memorize the eighths: 1/8 = 0.125, 3/8 = 0.375, 5/8 = 0.625, 7/8 = 0.875.`,
  },
  {
    id: 'math-num-03',
    section: 'math',
    topic: 'math-number-and-arithmetic',
    difficulty: 2,
    stem: `A shade of green paint is made by mixing blue and yellow paint in the ratio 3:5. If a painter uses 24 liters of yellow paint, how many liters of blue paint are needed?`,
    choices: ['9.6', '14.4', '16', '40'],
    answer: 1,
    explanation: `Set up the proportion blue/yellow = 3/5 = b/24, so 5b = 72 and b = 14.4 liters. Choice D (40) flips the ratio and solves 5/3 = b/24. Choice A (9.6) multiplies 24 by 2/5, the difference of the ratio parts, instead of by 3/5. Keep blue on top in both fractions.`,
  },
  {
    id: 'math-num-04',
    section: 'math',
    topic: 'math-number-and-arithmetic',
    difficulty: 2,
    stem: `The monthly price of a streaming service increased from $40 to $50. By what percent did the price increase?`,
    choices: ['10%', '20%', '25%', '80%'],
    answer: 2,
    explanation: `Percent change = (new − old)/old = (50 − 40)/40 = 10/40 = 25%. Choice B (20%) divides the change by the NEW price (10/50) instead of the original. Choice A (10%) confuses the $10 change with a percent, and choice D (80%) is 40/50, the old price as a percent of the new one.`,
  },
  {
    id: 'math-num-05',
    section: 'math',
    topic: 'math-number-and-arithmetic',
    difficulty: 2,
    stem: `Which expression is equivalent to (3a²b)³?`,
    choices: ['3a⁶b³', '9a⁶b³', '27a⁵b³', '27a⁶b³'],
    answer: 3,
    explanation: `Raise every factor inside to the third power: 3³ = 27, (a²)³ = a⁶, and b³. Result: 27a⁶b³. Choice A forgets to cube the 3, choice B squares it instead of cubing, and choice C adds the exponents on a (2 + 3) instead of multiplying them (2 × 3).`,
  },
  {
    id: 'math-num-06',
    section: 'math',
    topic: 'math-number-and-arithmetic',
    difficulty: 3,
    stem: `Light travels at approximately 3 × 10⁸ meters per second. Approximately how many kilometers does light travel in 2.5 × 10³ seconds?`,
    choices: ['1.2 × 10⁵', '7.5 × 10⁸', '7.5 × 10¹¹', '7.5 × 10¹⁴'],
    answer: 1,
    explanation: `Distance = rate × time = (3 × 10⁸)(2.5 × 10³) = 7.5 × 10¹¹ meters. The question asks for KILOMETERS, so divide by 1,000: 7.5 × 10⁸ km. Choice C stops at meters, choice D multiplies by 1,000 instead of dividing, and choice A divides rate by time instead of multiplying.`,
  },

  /* ---------- math-linear-equations-and-inequalities ---------- */
  {
    id: 'math-lin-01',
    section: 'math',
    topic: 'math-linear-equations-and-inequalities',
    difficulty: 1,
    stem: `If 3x − 7 = 11, what is the value of x?`,
    choices: ['−6', '4/3', '6', '18'],
    answer: 2,
    explanation: `Add 7 to both sides: 3x = 18. Divide by 3: x = 6. Choice D (18) stops after the first step. Choice B (4/3) subtracts 7 instead of adding it, giving 3x = 4. Plug 6 back in to confirm: 3(6) − 7 = 11.`,
  },
  {
    id: 'math-lin-02',
    section: 'math',
    topic: 'math-linear-equations-and-inequalities',
    difficulty: 1,
    stem: `Which of the following describes all solutions of the inequality 5 − 2x > 11?`,
    choices: ['x < −3', 'x > −3', 'x < 3', 'x > −8'],
    answer: 0,
    explanation: `Subtract 5: −2x > 6. Divide by −2 and FLIP the sign: x < −3. Choice B forgets to flip when dividing by a negative. Choice C drops the negative sign entirely. Test x = −10: 5 − 2(−10) = 25 > 11, which confirms the answer.`,
  },
  {
    id: 'math-lin-03',
    section: 'math',
    topic: 'math-linear-equations-and-inequalities',
    difficulty: 2,
    stem: `What is the solution set of the equation |2x − 5| = 9?`,
    choices: ['{7}', '{−2, 7}', '{−7, 2}', '{2, 7}'],
    answer: 1,
    explanation: `Split into two equations: 2x − 5 = 9 gives x = 7, and 2x − 5 = −9 gives 2x = −4, x = −2. The solution set is {−2, 7}. Choice A forgets the negative case. Choice D makes a sign error solving 2x = −4, and choice C puts the negative on the wrong solution.`,
  },
  {
    id: 'math-lin-04',
    section: 'math',
    topic: 'math-linear-equations-and-inequalities',
    difficulty: 2,
    stem: `The area of a trapezoid is given by A = (1/2)h(b₁ + b₂). Which of the following expresses b₁ in terms of A, h, and b₂?`,
    choices: ['b₁ = 2A/h − b₂', 'b₁ = (2A − b₂)/h', 'b₁ = A/(2h) − b₂', 'b₁ = 2A − hb₂'],
    answer: 0,
    explanation: `Multiply both sides by 2: 2A = h(b₁ + b₂). Divide by h: 2A/h = b₁ + b₂. Subtract b₂: b₁ = 2A/h − b₂. Choice B divides b₂ by h even though b₂ was never multiplied by h. Choice C divides by 2 instead of multiplying, and choice D forgets to divide 2A by h.`,
  },
  {
    id: 'math-lin-05',
    section: 'math',
    topic: 'math-linear-equations-and-inequalities',
    difficulty: 2,
    stem: `A phone plan costs $25 per month and includes 200 text messages. Each text message beyond 200 costs $0.10. Last month Jamal's bill was $37.50. How many text messages did he send last month?`,
    choices: ['125', '250', '325', '375'],
    answer: 2,
    explanation: `Let t be the number of texts over 200: 25 + 0.10t = 37.50, so 0.10t = 12.50 and t = 125 extra texts. Total texts: 200 + 125 = 325. Choice A (125) is only the texts beyond the included 200; the question asks for the total. Choice D (375) divides the whole bill by $0.10.`,
  },
  {
    id: 'math-lin-06',
    section: 'math',
    topic: 'math-linear-equations-and-inequalities',
    difficulty: 3,
    stem: `How many integer values of x satisfy the inequality |x + 4| ≤ 6?`,
    choices: ['6', '11', '12', '13'],
    answer: 3,
    explanation: `|x + 4| ≤ 6 means −6 ≤ x + 4 ≤ 6, so −10 ≤ x ≤ 2. The integers from −10 to 2 inclusive number 2 − (−10) + 1 = 13. Choice C (12) forgets to add 1 for inclusive endpoints. Choice B (11) drops both endpoints, and choice A (6) just repeats the number on the right side.`,
  },

  /* ---------- math-coordinate-geometry ---------- */
  {
    id: 'math-coord-01',
    section: 'math',
    topic: 'math-coordinate-geometry',
    difficulty: 1,
    stem: `What is the slope of the line that passes through the points (2, 5) and (6, 13)?`,
    choices: ['1/2', '2', '4', '8'],
    answer: 1,
    explanation: `Slope = (13 − 5)/(6 − 2) = 8/4 = 2. Choice A (1/2) puts the change in x on top. Choice D (8) is only the rise, and choice C (4) is only the run. Write the formula with rise over run before plugging in.`,
  },
  {
    id: 'math-coord-02',
    section: 'math',
    topic: 'math-coordinate-geometry',
    difficulty: 1,
    stem: `What is the y-intercept of the line 3x + 2y = 12 in the standard (x, y) coordinate plane?`,
    choices: ['(0, 4)', '(0, 6)', '(0, 12)', '(4, 0)'],
    answer: 1,
    explanation: `The y-intercept is where x = 0: 2y = 12, so y = 6, giving (0, 6). Choice D (4, 0) is the x-intercept. Choice A (0, 4) mixes up the two intercepts, and choice C (0, 12) reads the constant without dividing by 2.`,
  },
  {
    id: 'math-coord-03',
    section: 'math',
    topic: 'math-coordinate-geometry',
    difficulty: 2,
    stem: `Which of the following is an equation of the line that passes through (4, −1) and is perpendicular to the line y = (2/3)x + 1?`,
    choices: ['y = −(2/3)x + 5/3', 'y = (3/2)x − 7', 'y = −(3/2)x − 1', 'y = −(3/2)x + 5'],
    answer: 3,
    explanation: `The perpendicular slope is the negative reciprocal of 2/3, which is −3/2. Point-slope: y + 1 = −(3/2)(x − 4), so y = −(3/2)x + 6 − 1 = −(3/2)x + 5. Choice B flips the fraction but keeps the sign (that line is not perpendicular). Choice A flips the sign but not the fraction. Choice C uses the right slope but treats −1 as the y-intercept instead of a point's y-coordinate.`,
  },
  {
    id: 'math-coord-04',
    section: 'math',
    topic: 'math-coordinate-geometry',
    difficulty: 2,
    stem: `What is the distance between the points (−3, 2) and (5, −4) in the standard (x, y) coordinate plane?`,
    choices: ['√14', '2√7', '10', '14'],
    answer: 2,
    explanation: `Distance = √((5 − (−3))² + (−4 − 2)²) = √(8² + (−6)²) = √(64 + 36) = √100 = 10. Choice D (14) adds the legs 8 + 6 without squaring and rooting. Choice A (√14) takes the root of the unsquared legs. Recognizing the 6-8-10 triple saves time.`,
  },
  {
    id: 'math-coord-05',
    section: 'math',
    topic: 'math-coordinate-geometry',
    difficulty: 2,
    stem: `A circle in the standard (x, y) coordinate plane has the equation (x − 3)² + (y + 2)² = 25. What are the center and the radius of the circle?`,
    choices: ['center (−3, 2), radius 5', 'center (3, −2), radius 5', 'center (3, −2), radius 25', 'center (−3, 2), radius 25'],
    answer: 1,
    explanation: `The standard form (x − h)² + (y − k)² = r² gives center (h, k) = (3, −2) because (y + 2) means (y − (−2)). The radius is √25 = 5. Choices A and D flip the signs of the center. Choices C and D forget to take the square root of 25.`,
  },
  {
    id: 'math-coord-06',
    section: 'math',
    topic: 'math-coordinate-geometry',
    difficulty: 3,
    stem: `The midpoint of line segment AB is M(1, 4). If the coordinates of A are (−3, 7), what are the coordinates of B?`,
    choices: ['(−1, 5.5)', '(−7, 10)', '(2, −3)', '(5, 1)'],
    answer: 3,
    explanation: `The midpoint averages the endpoints, so B = (2 × 1 − (−3), 2 × 4 − 7) = (5, 1). Check: ((−3 + 5)/2, (7 + 1)/2) = (1, 4). Choice A is the midpoint of A and M, not the other endpoint. Choice B goes the same distance from M but in the wrong direction (toward A). Choice C uses the raw differences (1 − (−3), 4 − 7) incorrectly.`,
  },

  /* ---------- math-systems-and-word-problems ---------- */
  {
    id: 'math-sys-01',
    section: 'math',
    topic: 'math-systems-and-word-problems',
    difficulty: 1,
    stem: `What is the solution (x, y) of the system y = 2x + 1 and y = −x + 7?`,
    choices: ['(−2, −3)', '(2, 5)', '(3, 4)', '(5, 2)'],
    answer: 1,
    explanation: `Set the right sides equal: 2x + 1 = −x + 7, so 3x = 6 and x = 2. Then y = 2(2) + 1 = 5. Choice D swaps x and y. Choice C works in the second equation (−3 + 7 = 4) but not the first (2 × 3 + 1 = 7, not 4); a solution must satisfy BOTH equations.`,
  },
  {
    id: 'math-sys-02',
    section: 'math',
    topic: 'math-systems-and-word-problems',
    difficulty: 1,
    stem: `Nadia's scores on her first three history tests were 78, 92, and 88. What score does she need on the fourth test so that her average (arithmetic mean) for the four tests is exactly 85?`,
    choices: ['80', '82', '85', '86'],
    answer: 1,
    explanation: `An average of 85 on four tests requires a total of 85 × 4 = 340 points. She has 78 + 92 + 88 = 258, so she needs 340 − 258 = 82. Choice C (85) assumes she needs to score the target average itself, and choice D (86) is the average of her three current scores, not the needed fourth score.`,
  },
  {
    id: 'math-sys-03',
    section: 'math',
    topic: 'math-systems-and-word-problems',
    difficulty: 2,
    stem: `A community theater sold 50 tickets to a play for a total of $480. Adult tickets cost $12 each and child tickets cost $7 each. How many adult tickets were sold?`,
    choices: ['20', '24', '26', '30'],
    answer: 2,
    explanation: `Let a = adult tickets, so 50 − a = child tickets: 12a + 7(50 − a) = 480, giving 5a + 350 = 480, 5a = 130, a = 26. Choice B (24) is the number of CHILD tickets, which the problem does not ask for. Check: 26 × 12 + 24 × 7 = 312 + 168 = 480.`,
  },
  {
    id: 'math-sys-04',
    section: 'math',
    topic: 'math-systems-and-word-problems',
    difficulty: 2,
    stem: `How many solutions does the system 2x + 4y = 8 and x + 2y = 3 have?`,
    choices: ['Exactly one', 'Exactly two', 'Infinitely many', 'None'],
    answer: 3,
    explanation: `Divide the first equation by 2: x + 2y = 4. The second says x + 2y = 3. The same expression cannot equal both 4 and 3, so the lines are parallel and there is no solution. Choice C would be correct only if the first equation reduced to x + 2y = 3 exactly. Choice B is impossible for two straight lines.`,
  },
  {
    id: 'math-sys-05',
    section: 'math',
    topic: 'math-systems-and-word-problems',
    difficulty: 2,
    stem: `One hose can fill a pool in 4 hours. A second hose can fill the same pool in 6 hours. If both hoses are used together, how many hours will it take to fill the pool?`,
    choices: ['2.4', '2.5', '5', '10'],
    answer: 0,
    explanation: `Add the rates: 1/4 + 1/6 = 3/12 + 2/12 = 5/12 of the pool per hour, so the time is 12/5 = 2.4 hours. Choice C (5) averages the two times, and choice D (10) adds them; both are impossible because two hoses together must beat the faster hose alone (4 hours).`,
  },
  {
    id: 'math-sys-06',
    section: 'math',
    topic: 'math-systems-and-word-problems',
    difficulty: 3,
    stem: `A lab technician has 10 liters of a 50% saline solution. How many liters of a 20% saline solution must be added to produce a 30% saline solution?`,
    choices: ['5', '10', '15', '20'],
    answer: 3,
    explanation: `Track the salt. Let x = liters of 20% solution: 0.50(10) + 0.20x = 0.30(10 + x), so 5 + 0.2x = 3 + 0.3x, which gives 2 = 0.1x and x = 20. Choice B (10) assumes equal amounts, which would give a 35% mixture (halfway between 50% and 20%). Since 30% is closer to 20% than to 50%, more of the 20% solution is needed than the 50% solution, which rules out choices A and B immediately.`,
  },

  /* ---------- math-quadratics-and-polynomials ---------- */
  {
    id: 'math-quad-01',
    section: 'math',
    topic: 'math-quadratics-and-polynomials',
    difficulty: 1,
    stem: `Which of the following is equivalent to (x + 3)(x − 5)?`,
    choices: ['x² − 15', 'x² − 2x − 15', 'x² + 2x − 15', 'x² − 8x − 15'],
    answer: 1,
    explanation: `FOIL: x² − 5x + 3x − 15 = x² − 2x − 15. Choice A skips the outer and inner terms entirely. Choice C gets the sign of the middle term wrong (−5x + 3x is −2x, not +2x). Choice D subtracts 5 and 3 as if both were negative.`,
  },
  {
    id: 'math-quad-02',
    section: 'math',
    topic: 'math-quadratics-and-polynomials',
    difficulty: 1,
    stem: `What are the solutions of x² − 7x + 12 = 0?`,
    choices: ['x = −3 and x = −4', 'x = −2 and x = −6', 'x = 2 and x = 6', 'x = 3 and x = 4'],
    answer: 3,
    explanation: `Find two numbers that multiply to 12 and add to −7: −3 and −4. So (x − 3)(x − 4) = 0 and x = 3 or x = 4. Choice A gives the factors' signs instead of the roots (x − 3 = 0 means x = +3). Choices B and C use 2 and 6, which multiply to 12 but add to 8, not 7.`,
  },
  {
    id: 'math-quad-03',
    section: 'math',
    topic: 'math-quadratics-and-polynomials',
    difficulty: 2,
    stem: `What is the vertex of the parabola y = x² − 6x + 5 in the standard (x, y) coordinate plane?`,
    choices: ['(−3, 32)', '(3, −4)', '(3, 5)', '(6, 5)'],
    answer: 1,
    explanation: `The x-coordinate of the vertex is −b/(2a) = 6/2 = 3. Plug in: y = 9 − 18 + 5 = −4, so the vertex is (3, −4). Choice A uses x = −3 (sign error on −b/2a). Choice C pairs the correct x with the y-intercept, and choice D uses x = −b = 6 instead of −b/(2a) = 3; the point (6, 5) is on the parabola but is not the vertex.`,
  },
  {
    id: 'math-quad-04',
    section: 'math',
    topic: 'math-quadratics-and-polynomials',
    difficulty: 2,
    stem: `How many distinct real solutions does the equation 2x² − 3x + 5 = 0 have?`,
    choices: ['0', '1', '2', 'Cannot be determined'],
    answer: 0,
    explanation: `Check the discriminant: b² − 4ac = (−3)² − 4(2)(5) = 9 − 40 = −31. A negative discriminant means no real solutions (the parabola never crosses the x-axis). Choice C comes from computing 9 + 40 = 49 by mishandling the sign. Choice B would require the discriminant to be exactly 0.`,
  },
  {
    id: 'math-quad-05',
    section: 'math',
    topic: 'math-quadratics-and-polynomials',
    difficulty: 2,
    stem: `What are the solutions of the equation x² + 4x − 2 = 0?`,
    choices: ['x = −4 ± √6', 'x = −2 ± 2√6', 'x = −2 ± √6', 'x = 2 ± √6'],
    answer: 2,
    explanation: `Quadratic formula with a = 1, b = 4, c = −2: x = (−4 ± √(16 + 8))/2 = (−4 ± √24)/2 = (−4 ± 2√6)/2 = −2 ± √6. Choice A forgets to divide −4 by 2. Choice B divides the −4 but not the root. Choice D drops the sign on −b.`,
  },
  {
    id: 'math-quad-06',
    section: 'math',
    topic: 'math-quadratics-and-polynomials',
    difficulty: 3,
    stem: `What is the remainder when x³ − 2x² + 4x − 7 is divided by x − 2?`,
    choices: ['−31', '−7', '1', '9'],
    answer: 2,
    explanation: `By the remainder theorem, the remainder when dividing by x − 2 is p(2) = 8 − 8 + 8 − 7 = 1. Choice A (−31) evaluates p(−2) instead, which is the remainder for division by x + 2. Choice B (−7) is just the constant term, which is the remainder only when dividing by x itself.`,
  },
]

const questionsB: Question[] = [
  /* ---------- math-functions ---------- */
  {
    id: 'math-func-01',
    section: 'math',
    topic: 'math-functions',
    difficulty: 1,
    stem: `If f(x) = 3x² − 2x + 1, what is the value of f(−2)?`,
    choices: ['−7', '9', '13', '17'],
    answer: 3,
    explanation: `f(−2) = 3(−2)² − 2(−2) + 1 = 3(4) + 4 + 1 = 17. Choice B (9) makes the sign error −2(−2) = −4. Choice A (−7) computes 3(−2)² as −12, forgetting that squaring a negative gives a positive. Put negative inputs in parentheses on your calculator.`,
  },
  {
    id: 'math-func-02',
    section: 'math',
    topic: 'math-functions',
    difficulty: 1,
    stem: `Let g(x) = x² + 1 and h(x) = 2x − 3. What is the value of g(h(2))?`,
    choices: ['2', '5', '7', '10'],
    answer: 0,
    explanation: `Work from the inside out: h(2) = 2(2) − 3 = 1, then g(1) = 1² + 1 = 2. Choice C (7) computes h(g(2)) = h(5) = 7, the composition in the wrong order. Choice B (5) stops at g(2). Inner function first, always.`,
  },
  {
    id: 'math-func-03',
    section: 'math',
    topic: 'math-functions',
    difficulty: 2,
    stem: `If f(x) = (x − 4)/3, which of the following is f⁻¹(x)?`,
    choices: ['f⁻¹(x) = (x + 4)/3', 'f⁻¹(x) = 3/(x − 4)', 'f⁻¹(x) = 3x − 4', 'f⁻¹(x) = 3x + 4'],
    answer: 3,
    explanation: `Swap x and y, then solve: x = (y − 4)/3, so 3x = y − 4 and y = 3x + 4. Check: f(3x + 4) = (3x + 4 − 4)/3 = x. Choice B is the reciprocal 1/f(x), which is not the inverse. Choice C undoes the operations in the wrong order (subtracting before multiplying), and choice A only flips one sign.`,
  },
  {
    id: 'math-func-04',
    section: 'math',
    topic: 'math-functions',
    difficulty: 2,
    stem: `What is the domain of the function f(x) = √(x − 2) / (x − 5)?`,
    choices: ['All real numbers except 5', 'x > 2', 'x ≥ 2', 'x ≥ 2 and x ≠ 5'],
    answer: 3,
    explanation: `Two restrictions: the radicand must be nonnegative (x − 2 ≥ 0, so x ≥ 2) and the denominator cannot be zero (x ≠ 5). Both apply, giving x ≥ 2 and x ≠ 5. Choice C forgets the denominator. Choice A forgets the square root. Choice B wrongly excludes x = 2, where √0 = 0 is perfectly fine.`,
  },
  {
    id: 'math-func-05',
    section: 'math',
    topic: 'math-functions',
    difficulty: 2,
    stem: `The graph of y = g(x) is obtained by shifting the graph of y = f(x) 3 units to the right and 2 units up. Which equation defines g?`,
    choices: ['g(x) = f(x + 3) − 2', 'g(x) = f(x + 3) + 2', 'g(x) = f(x − 3) − 2', 'g(x) = f(x − 3) + 2'],
    answer: 3,
    explanation: `A shift RIGHT by 3 replaces x with (x − 3), which feels backwards but is correct. A shift UP by 2 adds 2 outside: g(x) = f(x − 3) + 2. Choice B uses (x + 3), which shifts LEFT. Choice C moves right correctly but shifts down. Test with a point: if f(0) = 1, then g(3) = f(0) + 2 = 3, so (0, 1) moved to (3, 3).`,
  },
  {
    id: 'math-func-06',
    section: 'math',
    topic: 'math-functions',
    difficulty: 3,
    stem: `A car purchased for $24,000 loses 15% of its value each year. To the nearest dollar, what is the car's value 3 years after purchase?`,
    choices: ['$10,800', '$13,200', '$14,739', '$20,400'],
    answer: 2,
    explanation: `Losing 15% per year means multiplying by 0.85 each year: 24,000 × 0.85³ = 24,000 × 0.614125 ≈ $14,739. Choice B ($13,200) subtracts 15% three times from the ORIGINAL (linear decay: 24,000 × 0.55). Choice D ($20,400) is the value after only one year, and choice A is 24,000 × 0.45.`,
  },

  /* ---------- math-geometry ---------- */
  {
    id: 'math-geo-01',
    section: 'math',
    topic: 'math-geometry',
    difficulty: 1,
    stem: `Two angles of a triangle measure 48° and 67°. What is the measure of the third angle?`,
    choices: ['55°', '65°', '75°', '115°'],
    answer: 1,
    explanation: `Triangle angles total 180°: 180 − 48 − 67 = 65°. Choice D (115°) is 48 + 67, the sum of the two given angles (which equals the EXTERIOR angle at the third vertex, not the interior one). Choice C (75°) comes from an arithmetic slip, 180 − 105 miscounted.`,
  },
  {
    id: 'math-geo-02',
    section: 'math',
    topic: 'math-geometry',
    difficulty: 1,
    stem: `A circular tabletop has a diameter of 10 feet. What is the area of the tabletop, in square feet?`,
    choices: ['5π', '10π', '25π', '100π'],
    answer: 2,
    explanation: `Radius = 10/2 = 5, so area = πr² = 25π square feet. Choice D (100π) uses the diameter as the radius, the most common circle mistake. Choice B (10π) is the circumference (2πr = πd), not the area.`,
  },
  {
    id: 'math-geo-03',
    section: 'math',
    topic: 'math-geometry',
    difficulty: 2,
    stem: `A 13-foot ladder leans against a vertical wall. The base of the ladder is 5 feet from the bottom of the wall on level ground. How many feet up the wall does the ladder reach?`,
    choices: ['8', '12', '√194', '18'],
    answer: 1,
    explanation: `The ladder is the hypotenuse: h² + 5² = 13², so h² = 169 − 25 = 144 and h = 12 (a 5-12-13 triple). Choice C (√194) ADDS the squares as if the ladder were a leg. Choice A (8) subtracts 13 − 5 without squaring, and choice D (18) adds them.`,
  },
  {
    id: 'math-geo-04',
    section: 'math',
    topic: 'math-geometry',
    difficulty: 2,
    stem: `What is the measure of each interior angle of a regular hexagon?`,
    choices: ['108°', '120°', '135°', '720°'],
    answer: 1,
    explanation: `The interior angles of an n-gon total (n − 2) × 180° = 4 × 180° = 720°. A regular hexagon splits that equally among 6 angles: 720/6 = 120°. Choice D (720°) is the total, not each angle. Choice A (108°) is a regular pentagon's angle and choice C (135°) a regular octagon's.`,
  },
  {
    id: 'math-geo-05',
    section: 'math',
    topic: 'math-geometry',
    difficulty: 2,
    stem: `Triangle ABC has side lengths 6, 8, and 10. Triangle DEF is similar to triangle ABC, and its shortest side has length 9. What is the length of the longest side of triangle DEF?`,
    choices: ['11', '12', '13', '15'],
    answer: 3,
    explanation: `Similar triangles have proportional sides. The scale factor is 9/6 = 1.5, so the longest side is 10 × 1.5 = 15. Choice C (13) adds 3 to the longest side because 9 is 3 more than 6; similarity multiplies, it does not add. Choice B (12) scales the middle side (8 × 1.5) instead of the longest.`,
  },
  {
    id: 'math-geo-06',
    section: 'math',
    topic: 'math-geometry',
    difficulty: 3,
    stem: `A circle has a radius of 12 centimeters. A sector of the circle has a central angle of 60°. What is the area of the sector, in square centimeters?`,
    choices: ['4π', '12π', '24π', '48π'],
    answer: 2,
    explanation: `A 60° sector is 60/360 = 1/6 of the circle. The whole area is π(12)² = 144π, so the sector is 144π/6 = 24π. Choice A (4π) is the ARC LENGTH of the sector (1/6 of the circumference 24π). Choice B (12π) uses the radius instead of the radius squared, and choice D doubles the correct answer.`,
  },

  /* ---------- math-trigonometry ---------- */
  {
    id: 'math-trig-01',
    section: 'math',
    topic: 'math-trigonometry',
    difficulty: 1,
    stem: `In a right triangle, the side opposite angle θ has length 5 and the hypotenuse has length 13. What is sin θ?`,
    choices: ['5/13', '5/12', '12/13', '13/5'],
    answer: 0,
    explanation: `sin θ = opposite/hypotenuse = 5/13. Choice C (12/13) is cos θ (the other leg is 12 by the 5-12-13 triple). Choice B (5/12) is tan θ, and choice D (13/5) is csc θ, the reciprocal of sine.`,
  },
  {
    id: 'math-trig-02',
    section: 'math',
    topic: 'math-trigonometry',
    difficulty: 1,
    stem: `An isosceles right triangle has legs of length 7. What is the length of the hypotenuse?`,
    choices: ['7/√2', '7√2', '7√3', '14'],
    answer: 1,
    explanation: `A 45-45-90 triangle has hypotenuse = leg × √2 = 7√2 (about 9.9). Check with the Pythagorean theorem: √(49 + 49) = √98 = 7√2. Choice D (14) doubles the leg, which only works in a 30-60-90 triangle. Choice C uses √3, the 30-60-90 long-leg ratio. Choice A divides instead of multiplying.`,
  },
  {
    id: 'math-trig-03',
    section: 'math',
    topic: 'math-trigonometry',
    difficulty: 2,
    stem: `What is the radian measure of an angle of 150°?`,
    choices: ['3π/4', '5π/6', '5π/3', '150π'],
    answer: 1,
    explanation: `Multiply by π/180: 150π/180 = 5π/6. Choice A (3π/4) is 135°, and choice C (5π/3) is 300°. Choice D forgets to divide by 180 altogether. A quick sanity check: 150° is a bit less than 180° = π, so the answer should be a bit less than π, and 5π/6 fits.`,
  },
  {
    id: 'math-trig-04',
    section: 'math',
    topic: 'math-trigonometry',
    difficulty: 2,
    stem: `If sin θ = 3/5 and 90° < θ < 180°, what is cos θ?`,
    choices: ['−4/5', '−3/4', '3/4', '4/5'],
    answer: 0,
    explanation: `From sin²θ + cos²θ = 1: cos²θ = 1 − 9/25 = 16/25, so cos θ = ±4/5 (a 3-4-5 triangle). Between 90° and 180° (Quadrant II), cosine is negative: cos θ = −4/5. Choice D ignores the quadrant. Choice B (−3/4) is −tan θ in size, not cosine.`,
  },
  {
    id: 'math-trig-05',
    section: 'math',
    topic: 'math-trigonometry',
    difficulty: 2,
    stem: `What are the amplitude and the period of the function y = 3 sin(2x)?`,
    choices: ['amplitude 2, period 3', 'amplitude 3, period π', 'amplitude 3, period 2π', 'amplitude 3, period 4π'],
    answer: 1,
    explanation: `For y = A sin(Bx), amplitude = |A| = 3 and period = 2π/B = 2π/2 = π. Choice C forgets that the 2 inside compresses the period. Choice D multiplies 2π by 2 instead of dividing. Choice A swaps the roles of the two numbers.`,
  },
  {
    id: 'math-trig-06',
    section: 'math',
    topic: 'math-trigonometry',
    difficulty: 3,
    stem: `Two sides of a triangle have lengths 7 and 8, and the angle between them measures 60°. What is the length of the third side?`,
    choices: ['1', '√57', '√113', '15'],
    answer: 1,
    explanation: `Two sides and the included angle call for the law of cosines: c² = 7² + 8² − 2(7)(8)cos 60° = 49 + 64 − 112(1/2) = 113 − 56 = 57, so c = √57 (about 7.5). Choice C (√113) forgets the −2ab cos C term, treating it like a right triangle. Choice A uses cos 60° = 1, and choice D (15) simply adds the two sides, which the triangle inequality forbids.`,
  },

  /* ---------- math-statistics-and-probability ---------- */
  {
    id: 'math-stat-01',
    section: 'math',
    topic: 'math-statistics-and-probability',
    difficulty: 1,
    stem: `What is the median of the data set 4, 8, 15, 16, 23, 42?`,
    choices: ['15', '15.5', '16', '18'],
    answer: 1,
    explanation: `The list is already sorted and has an even number of values, so the median is the average of the two middle values: (15 + 16)/2 = 15.5. Choice D (18) is the mean (108/6). Choices A and C each pick one of the middle numbers instead of averaging them.`,
  },
  {
    id: 'math-stat-02',
    section: 'math',
    topic: 'math-statistics-and-probability',
    difficulty: 1,
    stem: `A bag contains 3 red marbles, 5 blue marbles, and 2 green marbles. If one marble is drawn at random, what is the probability that it is blue?`,
    choices: ['3/10', '1/3', '1/2', '5/8'],
    answer: 2,
    explanation: `Total marbles: 3 + 5 + 2 = 10. Blue: 5. P(blue) = 5/10 = 1/2. Choice A (3/10) is the probability of red. Choice B (1/3) treats the three colors as equally likely. Choice D (5/8) leaves the green marbles out of the total.`,
  },
  {
    id: 'math-stat-03',
    section: 'math',
    topic: 'math-statistics-and-probability',
    difficulty: 2,
    stem: `The mean of 5 numbers is 12. When a sixth number is added to the set, the mean of the 6 numbers is 14. What is the sixth number?`,
    choices: ['2', '14', '24', '26'],
    answer: 2,
    explanation: `Sum of the first five: 12 × 5 = 60. Sum of all six: 14 × 6 = 84. The sixth number is 84 − 60 = 24. Choice B (14) assumes the new number equals the new mean, but to pull the mean UP it must be above 14. Choice A (2) subtracts the means instead of the sums.`,
  },
  {
    id: 'math-stat-04',
    section: 'math',
    topic: 'math-statistics-and-probability',
    difficulty: 2,
    stem: `A box contains 4 red pens and 6 black pens. Two pens are drawn at random without replacement. What is the probability that both pens are red?`,
    choices: ['2/15', '4/25', '1/5', '2/5'],
    answer: 0,
    explanation: `First red: 4/10. Second red, with one red gone and 9 pens left: 3/9. Multiply: (4/10)(3/9) = 12/90 = 2/15. Choice B (4/25) is (4/10)², which assumes the first pen is put back. Choice D (2/5) is just the probability of one red pen, and choice C (1/5) multiplies 4/10 by 1/2 as if half of the remaining pens were red.`,
  },
  {
    id: 'math-stat-05',
    section: 'math',
    topic: 'math-statistics-and-probability',
    difficulty: 2,
    stem: `A club with 7 members must choose 3 of them to serve on a committee. How many different committees are possible?`,
    choices: ['21', '35', '210', '343'],
    answer: 1,
    explanation: `A committee has no order, so use a combination: 7C3 = 7!/(3!4!) = (7 × 6 × 5)/(3 × 2 × 1) = 35. Choice C (210) is the permutation 7 × 6 × 5, which counts each committee 6 times (once per ordering). Choice D (343) is 7³, which allows the same person to be chosen repeatedly. Choice A (21) is 7C2.`,
  },
  {
    id: 'math-stat-06',
    section: 'math',
    topic: 'math-statistics-and-probability',
    difficulty: 3,
    stem: `A carnival spinner has 8 equal sections. One section pays $20, three sections pay $4, and the remaining sections pay nothing. What is the expected payout of one spin?`,
    choices: ['$2.50', '$3.00', '$4.00', '$8.00'],
    answer: 2,
    explanation: `Expected value = sum of (payout × probability): 20(1/8) + 4(3/8) + 0(4/8) = 2.5 + 1.5 + 0 = $4.00. Choice A ($2.50) counts only the $20 section. Choice D ($8.00) is the average of the three payout amounts (20 + 4 + 0)/3, ignoring how likely each is. Choice B ($3.00) is the $24 total of the paying sections divided by 8 as if each paid only once.`,
  },

  /* ---------- math-advanced-topics ---------- */
  {
    id: 'math-adv-01',
    section: 'math',
    topic: 'math-advanced-topics',
    difficulty: 1,
    stem: `What is the sum (3 + 2i) + (1 − 5i)?`,
    choices: ['2 − 3i', '4 − 3i', '4 + 3i', '4 + 7i'],
    answer: 1,
    explanation: `Add the real parts (3 + 1 = 4) and the imaginary parts (2i − 5i = −3i): 4 − 3i. Choice D adds 5i instead of subtracting it. Choice C drops the sign on −3i, and choice A subtracts the real parts.`,
  },
  {
    id: 'math-adv-02',
    section: 'math',
    topic: 'math-advanced-topics',
    difficulty: 1,
    stem: `What is the value of log₂ 32?`,
    choices: ['4', '5', '6', '16'],
    answer: 1,
    explanation: `log₂ 32 asks "2 to what power is 32?" Since 2⁵ = 32, the answer is 5. Choice D (16) is 32/2, treating the log like division. Choice A (4) gives 2⁴ = 16, one power short, and choice C gives 2⁶ = 64.`,
  },
  {
    id: 'math-adv-03',
    section: 'math',
    topic: 'math-advanced-topics',
    difficulty: 2,
    stem: `What is the determinant of the matrix with first row [3  −2] and second row [4  5]?`,
    choices: ['−23', '7', '11', '23'],
    answer: 3,
    explanation: `For [a b; c d], the determinant is ad − bc = (3)(5) − (−2)(4) = 15 − (−8) = 23. Choice B (7) computes 15 − 8, losing the negative sign on −2. Choice A (−23) reverses the subtraction order (bc − ad). Choice C (11) subtracts only the entry 4 instead of the product (−2)(4), giving 15 − 4.`,
  },
  {
    id: 'math-adv-04',
    section: 'math',
    topic: 'math-advanced-topics',
    difficulty: 2,
    stem: `The first three terms of an arithmetic sequence are 7, 11, and 15. What is the 20th term of the sequence?`,
    choices: ['79', '80', '83', '87'],
    answer: 2,
    explanation: `The common difference is 4. Use aₙ = a₁ + (n − 1)d: a₂₀ = 7 + 19 × 4 = 7 + 76 = 83. Choice D (87) uses 20d instead of 19d, the classic off-by-one error. Choice A (79) uses 18d, and choice B (80) is 20 × 4 with no starting term.`,
  },
  {
    id: 'math-adv-05',
    section: 'math',
    topic: 'math-advanced-topics',
    difficulty: 2,
    stem: `Which of the following is equivalent to (2 + 3i)(1 − i), where i = √(−1)?`,
    choices: ['−1 + i', '2 − 3i', '5 − i', '5 + i'],
    answer: 3,
    explanation: `FOIL: 2 − 2i + 3i − 3i² = 2 + i − 3i². Since i² = −1, −3i² = +3, giving 5 + i. Choice A (−1 + i) treats i² as +1, so the last term becomes −3 instead of +3. Choice C gets the sign of the middle term wrong. Choice B just multiplies the parts without FOILing.`,
  },
  {
    id: 'math-adv-06',
    section: 'math',
    topic: 'math-advanced-topics',
    difficulty: 3,
    stem: `What is the solution of the equation log₃(x) + log₃(x − 2) = 1?`,
    choices: ['x = −1', 'x = 3', 'x = −1 and x = 3', 'x = 5'],
    answer: 1,
    explanation: `Combine the logs: log₃(x(x − 2)) = 1, so x(x − 2) = 3¹ = 3. Then x² − 2x − 3 = 0 factors as (x − 3)(x + 1) = 0, giving x = 3 or x = −1. But log₃(−1) is undefined, so x = −1 is extraneous and the only solution is x = 3. Choice C forgets to check the domain. Choice D sets x + (x − 2) = ... treating the sum of logs as a log of a sum.`,
  },
]

/* ------------------------------------------------------------------ */
/*  SECTION                                                            */
/* ------------------------------------------------------------------ */

export const math: SectionContent = {
  id: 'math',
  name: 'Math',
  tagline: 'Medium math, done fast and clean: 45 questions, 50 minutes, no formula sheet.',
  format: { questions: 45, minutes: 50 },
  overview,
  lessons: [
    lessonNumber,
    lessonLinear,
    lessonCoordinate,
    lessonSystems,
    lessonQuadratics,
    lessonFunctions,
    lessonGeometry,
    lessonTrig,
    lessonStats,
    lessonAdvanced,
  ],
  passages: [],
  questions: [...questions, ...questionsB],
}
