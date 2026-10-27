import type { SectionContent } from './types'

/**
 * ACT Science section content (Enhanced ACT, 2025+).
 * 40 questions / 40 minutes / 6 passages / 4 answer choices. Optional; not part of the Composite.
 */
export const science: SectionContent = {
  id: 'science',
  name: 'Science',
  tagline: 'A reading-and-data test wearing a lab coat. Find the number, follow the trend, ignore the noise.',
  format: { questions: 40, minutes: 40, optional: true },

  overview: [
    { type: 'h', text: 'What this section really tests' },
    {
      type: 'p',
      text: `Here is the secret nobody tells you in chemistry class: the ACT Science section is barely a science test. It is a **reading and data test**. Almost every question can be answered by looking at a table, following a trend, or comparing what two people said. You do not need to remember the Krebs cycle. You need to find the right row, read the right column, and not panic when the passage is about something you have never heard of (it usually is, on purpose).\n\nThe test has 40 questions in 40 minutes across 6 passages, each with 4 answer choices. Three passage types show up: **Data Representation** (tables and graphs, about 2 passages), **Research Summaries** (2–3 experiments described step by step, about 3 passages), and **Conflicting Viewpoints** (2–4 scientists or students disagree about one thing, 1 passage). The skills tested are Interpretation of Data (about half the questions), Scientific Investigation (about a quarter), and Evaluation of Models and Results (about a quarter).`,
    },
    {
      type: 'p',
      text: `**Should you take it?** Since 2025 the Science section is **optional**. It does not change your 1–36 Composite, which is now the average of English, Math, and Reading. It is reported as its own 1–36 score, and if you take it you also get a STEM score (average of Math and Science). So: check the schools and scholarships on your list. Some engineering and pre-med programs, and some state testing requirements, still want a Science score. If even one place you care about asks for it, take it. If none do and you would rather spend the prep time on Math, that is a fair call too. The good news is that this section rewards strategy more than any other, so 4–6 focused hours of practice can move your score a lot.`,
    },
    { type: 'h', text: 'Pacing' },
    {
      type: 'list',
      items: [
        `40 minutes for 6 passages is about **6.5 minutes per passage**. Data Representation passages should take less (5 min); Conflicting Viewpoints takes more (8 min).`,
        `Checkpoints: after passage 2 you should be near 13 minutes; after passage 4, near 26; after passage 5, near 33. Leave 7 minutes for the last one.`,
        `**Do data passages first.** They are quick points. Do the Conflicting Viewpoints passage last, or whenever you feel freshest, because it is the only one that requires real reading.`,
        `Never leave a bubble blank. There is no penalty for guessing. If you have 90 seconds left, fill in the rest.`,
      ],
    },
    { type: 'h', text: 'The strategies that earn the most points' },
    {
      type: 'steps',
      items: [
        `**Questions first for data passages.** Skim the title and the table captions (10 seconds), then go straight to question 1. The passage text is a reference you look things up in, not a story you read.`,
        `**Read the question and find the thing it names.** "According to Table 2…" means your eyes go to Table 2 and nowhere else. Most wrong answers come from reading the wrong table.`,
        `**Put your finger on the row and column.** Literally. Trace to the cell. Then check the **units** in the header and the direction the values are moving.`,
        `**For Research Summaries, note what changed between experiments.** Usually exactly one thing differs between Experiment 1 and Experiment 2. Write it in the margin: "Exp 1 = temp, Exp 2 = conc."`,
        `**For Conflicting Viewpoints, write a 1-line summary of each view** before touching the questions: "S1: mussels ate the food. S2: overfishing." Then every question becomes a matching game.`,
        `**Extrapolation = continue the trend.** If values go 10, 20, 40, 80 and they ask about the next step, the answer is near 160, not 100.`,
        `**"If … then" questions = apply the pattern.** Find the pattern in the data, then plug in the new condition. You are not being asked to know the science, just to extend it.`,
      ],
    },
    { type: 'h', text: 'Traps to watch for' },
    {
      type: 'list',
      items: [
        `**Wrong table.** The question says Table 1 and the number you grabbed is from Table 2. Always re-read the question stem once before bubbling.`,
        `**Reversed trend.** "As X increased, Y decreased" is easy to flip. Check the direction of both variables, not just one.`,
        `**Mixed-up experiment.** Experiment 2 used a different solution than Experiment 1. If the question says "Experiment 2," the Experiment 1 table cannot help you.`,
        `**Extreme answers.** "Always," "never," "proves," and "all scientists agree" are almost never right. Data "supports" or "is consistent with" a claim; it rarely "proves" it.`,
        `**Units and scales.** Milliliters vs liters, °C vs K, a column labeled "change in mass" vs "mass." Read the header.`,
      ],
    },
    { type: 'h', text: 'The handful of outside facts worth knowing' },
    {
      type: 'p',
      text: `Most years, 2–4 questions assume a basic fact that is not in the passage. These are the ones that show up. Know them cold and you are done with "outside knowledge."`,
    },
    {
      type: 'table',
      headers: ['Fact', 'What to remember'],
      rows: [
        ['Water phase changes', 'Freezes at 0 °C (32 °F, 273 K); boils at 100 °C (212 °F, 373 K) at sea level.'],
        ['pH scale', 'Below 7 = acidic, 7 = neutral, above 7 = basic. Each step is a factor of 10.'],
        ['Density', 'density = mass ÷ volume. Less dense things float on more dense things.'],
        ['Photosynthesis', 'Inputs: CO₂ + water + light. Outputs: glucose (sugar) + O₂. Happens in chloroplasts.'],
        ['Central dogma', 'DNA → RNA (transcription) → protein (translation). Genes are DNA; proteins do the work.'],
        ["Newton's laws", '1st: objects keep doing what they are doing unless a net force acts. 2nd: F = ma. 3rd: every force has an equal and opposite partner.'],
        ['Kinetic vs potential energy', 'Kinetic = energy of motion (more speed, more KE). Potential = stored energy (height, stretched spring). One converts into the other.'],
        ['Independent vs dependent variable', 'Independent = what the experimenter changes on purpose. Dependent = what is measured as a result.'],
        ['Control group', 'The group that gets no treatment (or the standard treatment) so you have something to compare against.'],
        ['Mass vs weight', 'Mass (kg) is the amount of stuff and never changes. Weight is the force of gravity on that mass and changes with location.'],
        ['Speed of light vs sound', 'Light: about 300,000 km/s. Sound in air: about 340 m/s. That is why you see lightning before you hear thunder.'],
        ['Punnett squares', 'Capital letter = dominant allele. Aa × Aa gives 1 AA : 2 Aa : 1 aa, so 3/4 show the dominant trait.'],
      ],
    },
    { type: 'h', text: 'Test-day checklist' },
    {
      type: 'list',
      items: [
        `Decide your passage order in the first 20 seconds: data passages first, Conflicting Viewpoints last.`,
        `For every data question: name the table, finger on the cell, check the units, check the direction.`,
        `For every research question: what was different in this experiment?`,
        `For every viewpoint question: whose view? What is their one-line claim?`,
        `Cross out extreme answers. Pick the one the data actually shows.`,
        `Watch the clock at passages 2, 4, and 5. Bubble everything before time is called.`,
      ],
    },
  ],

  lessons: [
    // ------------------------------------------------------------------
    {
      id: 'sci-approach-and-pacing',
      section: 'science',
      title: 'The Approach: Passage Types, Pacing, and Questions First',
      summary: 'A repeatable game plan for each of the three passage types, plus the time checkpoints that keep you from running out of clock.',
      minutes: 8,
      blocks: [
        { type: 'h', text: 'Three passage types, three plans' },
        {
          type: 'p',
          text: `You will see 6 passages. Each one is one of three types, and each type gets its own routine. Learn to recognize the type in 3 seconds (look for tables only, "Experiment 1 / Experiment 2," or "Scientist 1 / Scientist 2") and switch into the right mode.`,
        },
        {
          type: 'table',
          headers: ['Type', 'How to spot it', 'Target time', 'Plan'],
          rows: [
            ['Data Representation', 'Tables/figures with a short intro, no numbered experiments', '5 min', 'Skim captions, go straight to questions'],
            ['Research Summaries', '"Experiment 1," "Study 2," step-by-step procedures', '6–7 min', 'Read the setup, note what changed per experiment, then questions'],
            ['Conflicting Viewpoints', '"Scientist 1," "Student 2," paragraphs of argument', '8 min', 'Read everything, summarize each view in one line, then questions'],
          ],
        },
        { type: 'h', text: 'Questions first (for data passages)' },
        {
          type: 'p',
          text: `For a Data Representation passage, the text is reference material. Spend about 10 seconds reading the title and the table captions so you know what each table is about. Then go to question 1. Each question tells you exactly where to look: "According to Table 2," "Based on Figure 1." Go there, find the value, answer, move on. You will read the intro paragraph only if a question uses a term you cannot find in the tables.`,
        },
        {
          type: 'tip',
          text: `A good habit: before you look at the answer choices, decide what the answer should be from the data. Then find the choice that matches. If you read choices first, the wrong ones start sounding reasonable.`,
        },
        { type: 'h', text: 'When you DO read the intro' },
        {
          type: 'list',
          items: [
            `Research Summaries: always read the opening paragraph and the setup of each experiment. That is where the "what changed" information lives.`,
            `Any passage where a table header uses an abbreviation you do not recognize (like "DO" or "NTU"). The definition is in the intro.`,
            `Any question that asks about the **purpose** of a step or **why** something was done. The reason is usually a sentence in the procedure.`,
            `Conflicting Viewpoints: the intro paragraph states the facts everyone agrees on. Questions love to ask "all the scientists would agree that…" and the answer is in the intro.`,
          ],
        },
        { type: 'h', text: 'Time checkpoints' },
        {
          type: 'steps',
          items: [
            `Minute 0: flip through, mark the Conflicting Viewpoints passage, start with a data passage.`,
            `Minute 13: you should be finishing passage 2.`,
            `Minute 26: finishing passage 4.`,
            `Minute 33: finishing passage 5. Seven minutes left for the last one.`,
            `Minute 39: stop working and bubble anything that is blank.`,
          ],
        },
        {
          type: 'warning',
          text: `The number one score-killer is spending 3 minutes on one hard question. Each question is worth the same. If you have read a stem twice and still do not know where to look, pick the most data-consistent answer, circle the number, and move on. Come back if there is time.`,
        },
        {
          type: 'example',
          prompt: `You open a passage. It has a two-sentence intro about tide pools, then Table 1 (water temperature at 4 pools at 6 am, noon, 6 pm) and Table 2 (number of snails counted at each pool at the same times). Question 1: "According to Table 2, at which pool was the number of snails greatest at noon?" Walk through the approach.`,
          solution: `This is Data Representation (tables, no experiments), so you did not read the intro. The stem names **Table 2** and the time **noon**, so put your finger on the noon column of Table 2 and scan down the four pool rows for the biggest number. Say the values are 14, 31, 9, 22: the answer is the pool in row 2. Total time: about 15 seconds. Notice you never needed Table 1 or any knowledge about snails. If a later question asks you to relate temperature to snail count, then you use both tables, matching pools and times carefully.`,
        },
        {
          type: 'example',
          prompt: `A Research Summaries passage describes Experiment 1 (students test how far a toy car rolls when released from ramp heights of 10, 20, 30, 40 cm) and Experiment 2 (same ramp, same 20 cm height, but the car carries added masses of 0, 50, 100, 150 g). Before reading the questions, what should you jot down?`,
          solution: `Two margin notes: "Exp 1: changed **height**, measured distance" and "Exp 2: changed **mass**, height fixed at 20 cm, measured distance." That is it. Now a question like "Which variable was held constant in Experiment 2?" is instant (height, 20 cm), and a question like "If a 30 cm ramp had been used in Experiment 2…" tells you to go back to Experiment 1's table, because that is where height varied. Research Summaries questions are mostly about knowing which experiment answers which question.`,
        },
        {
          type: 'tip',
          text: `Do not try to understand the science. Try to understand the **experiment**: what did they change, what did they measure, what did they keep the same? That is 90% of the section.`,
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'sci-reading-tables-and-graphs',
      section: 'science',
      title: 'Reading Tables and Graphs',
      summary: 'Locate values fast, read units, name relationships, interpolate and extrapolate, and handle multi-variable tables and strange axes.',
      minutes: 10,
      blocks: [
        { type: 'h', text: 'Locate, then read' },
        {
          type: 'p',
          text: `About half the questions on this section are "find the number" or "find the trend." The routine never changes: find the table named in the question, find the row (usually the condition), find the column (usually the measured quantity), read the cell, check the units in the header. Say the units out loud in your head: "37.3 **grams per 100 grams of water**." Half of the trap answers are the right number in the wrong units or from the neighboring column.`,
        },
        { type: 'h', text: 'Direct vs inverse relationships' },
        {
          type: 'list',
          items: [
            `**Direct** (positive): as X goes up, Y goes up. Example: more fertilizer, taller plants.`,
            `**Inverse** (negative): as X goes up, Y goes down. Example: higher temperature, shorter reaction time.`,
            `**No relationship**: Y stays about the same no matter what X does. Those "about the same" columns are gold for questions like "which variable had no effect?"`,
            `**Non-monotonic**: Y goes up then down (or levels off). The ACT loves to hide one of these in a table so that "increased only" is wrong and "increased, then decreased" is right. Always scan the whole column, not just the ends.`,
          ],
        },
        {
          type: 'warning',
          text: `"Increased" and "increased only" are different claims. If a column goes 12, 18, 25, 24, 30, it increased overall but did NOT increase only. Read every value before picking a trend answer.`,
        },
        { type: 'h', text: 'Interpolation and extrapolation' },
        {
          type: 'p',
          text: `**Interpolation (reading between the data).** If a table gives values at 20 °C and 40 °C and the question asks about 30 °C, the answer lies between the two listed values (assuming the trend is steady). The ACT almost always writes the correct choice as a range: "between 64 g and 110 g." You do not have to calculate the exact value; you have to bracket it.\n\n**Extrapolation (continuing the trend).** If the table stops at 100 °C and the question asks about 120 °C, continue the pattern. Look at how much the value changes per step. If each 20 °C step adds about 60 g, then 120 °C is about 60 g above the 100 °C value. If the trend is leveling off, the extrapolated value will be only slightly higher. If the trend is accelerating (10, 20, 40, 80…), the next step is a big jump (160), not a small one.`,
        },
        {
          type: 'example',
          prompt: `Table: Volume of gas collected (mL) vs time. 0 min: 0; 2 min: 18; 4 min: 36; 6 min: 54; 8 min: 72. Question A: "At 5 min, the volume was most likely:" Question B: "If the trial had continued to 12 min, the volume would most likely have been closest to:"`,
          solution: `First find the pattern: +18 mL every 2 min, perfectly steady. **A (interpolation):** 5 min is halfway between 4 and 6, so about halfway between 36 and 54, which is 45 mL. The answer choice would be "between 36 mL and 54 mL." **B (extrapolation):** continue the pattern two more steps. 8 → 10 min: 90 mL. 10 → 12 min: 108 mL. Pick the choice closest to 108. A trap choice would be 72 mL (just repeating the last value) or 144 mL (doubling because the time was "doubled" from 6, which is not the pattern).`,
        },
        {
          type: 'p',
          text: `**Multi-variable tables.** Some tables have two inputs, like stirring speed down the side and crystal size across the top, with dissolving time in the cells. To read a trend, **hold one variable fixed and move along the other**. "As stirring speed increased for fine powder" means you read down the fine-powder column only. A question that mixes the two ("coarse crystals at 300 rpm vs fine powder at 100 rpm") just means two separate lookups and a comparison.`,
        },
        { type: 'h', text: 'Odd axes and scales (described)' },
        {
          type: 'list',
          items: [
            `**Log scale:** each tick is 10 times the last (1, 10, 100, 1,000). A point halfway between 10 and 100 is about 30, not 55. If a passage says a figure uses a logarithmic axis, small visual differences mean big real differences.`,
            `**Reversed axis:** depth graphs often have 0 at the top and larger depths going down. "Higher on the graph" means shallower.`,
            `**Two y-axes:** a figure with temperature on the left axis and pressure on the right. Match each curve to its axis by the label or legend before reading a value.`,
            `**Percent change vs value:** a column labeled "change in mass (%)" can be negative even if mass is still large. Read what is actually being reported.`,
          ],
        },
        {
          type: 'p',
          text: `**Comparing two data sets.** "Which salt's solubility was least affected by temperature?" means: for each salt, subtract the first value from the last. The smallest difference wins. "Which sample showed the greatest percent increase?" means divide the change by the starting value. For "same at what point?" questions, look for where two columns have equal values or where the figure says the curves cross.`,
        },
        {
          type: 'example',
          prompt: `Table: Dissolved oxygen (mg/L) at three depths in a lake in July and in January. July: 1 m = 8.9, 5 m = 6.1, 10 m = 2.0. January: 1 m = 12.4, 5 m = 12.1, 10 m = 11.8. "Which of the following best describes how dissolved oxygen changed with depth in each month?"`,
          solution: `Read each month as its own data set. July: 8.9 → 6.1 → 2.0, a steep decrease (down 6.9 mg/L). January: 12.4 → 12.1 → 11.8, barely changes (down 0.6 mg/L). So the correct description is "decreased with depth in both months, but much more steeply in July." Tempting wrong answers: "decreased in July and increased in January" (January does not increase; check the direction) and "remained constant in January" (it did drop, just slightly; "approximately constant" would be fair, "constant" is a stretch when there is a clear trend). Also note the outside-knowledge hook: cold water holds more oxygen, which is why January values are higher, but you did not need that to answer.`,
        },
        {
          type: 'tip',
          text: `When a question gives you a value and asks for the condition that produced it (the reverse lookup), scan the measured column for that value and read sideways to the condition. Same routine, opposite direction.`,
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'sci-experimental-design',
      section: 'science',
      title: 'Experimental Design',
      summary: 'Independent, dependent, and controlled variables; control groups; why a step was done; and how to improve an experiment.',
      minutes: 8,
      blocks: [
        { type: 'h', text: 'The three kinds of variables' },
        {
          type: 'table',
          headers: ['Variable', 'Plain English', 'Where you find it'],
          rows: [
            ['Independent', 'The thing the experimenter changed on purpose', 'Usually the first column of the table; different for each trial'],
            ['Dependent', 'The thing that was measured to see the effect', 'The results column(s); the "y" of any graph'],
            ['Controlled (constant)', 'Everything kept the same so it cannot be blamed for the result', 'Stated in the procedure: "all trials used 50 mL of water at 20 °C"'],
          ],
        },
        {
          type: 'p',
          text: `A question like "Which of the following was the independent variable in Experiment 2?" is asking: what differs from trial to trial in Experiment 2's table? Look at the column whose values were chosen by the experimenter (5, 10, 20, 40 µg). The dependent variable is what they wrote down afterward (zone diameter in mm).`,
        },
        { type: 'h', text: 'Control groups' },
        {
          type: 'p',
          text: `A **control** is a trial where the treatment is left out: the disc soaked in plain water, the plant grown in the dark, the beaker with no catalyst. Its job is comparison. Without it, you cannot tell whether the antibiotic shrank the bacteria or whether the paper disc did. When a question asks "What was the purpose of the trial with no fertilizer?" the answer is almost always "to determine how much growth occurs without the treatment, for comparison."`,
        },
        {
          type: 'p',
          text: `**"Why was this step performed?"** These questions look like they need biology knowledge. They do not. The answer is logic about fairness and measurement. Common reasons a step was done:`,
        },
        {
          type: 'list',
          items: [
            `To keep a variable constant so trials can be compared (rinsing beakers, using the same volume, waiting the same time).`,
            `To make the dependent variable measurable (adding a dye so you can see when the reaction ends; drying leaves before weighing so water weight does not count).`,
            `To remove a confounding factor (keeping all plants in the same room so temperature is not different for different colors of light).`,
            `To get a baseline (measuring before the treatment, or including a control).`,
            `To reduce random error (repeating each trial 3 times and averaging).`,
          ],
        },
        {
          type: 'p',
          text: `**Improving an experiment.** "Which change would most improve the design?" Pick the choice that fixes a real weakness: add a control if there is none, test more values of the independent variable, repeat trials, or hold constant something that was allowed to vary. Reject choices that change the question being asked (switching to a different organism) or that add a second changing variable (now you cannot tell which one caused the result).`,
        },
        { type: 'h', text: 'Hypothesis vs result' },
        {
          type: 'p',
          text: `A **hypothesis** is the prediction made before the experiment ("heavier pendulum bobs will swing more slowly"). The **result** is what the data showed. Questions ask whether the results **support** the hypothesis. The procedure: find the prediction, find the matching data, and check whether they agree. If the data show no change where the hypothesis predicted a change, the hypothesis is not supported. Do not confuse "not supported" with "proven wrong forever"; the ACT's answer will say "do not support" or "are inconsistent with."`,
        },
        {
          type: 'example',
          prompt: `An experiment tests how the concentration of sugar in water affects how fast yeast produces gas. Five flasks get 0%, 2%, 4%, 8%, and 16% sugar; each has the same yeast amount, is kept at 30 °C, and gas volume is recorded after 20 minutes. Identify the independent variable, dependent variable, two controlled variables, and the control.`,
          solution: `**Independent:** sugar concentration (the experimenter chose 0–16%). **Dependent:** gas volume after 20 minutes (what was measured). **Controlled:** yeast amount, temperature (30 °C), time (20 minutes), and presumably flask size. **Control:** the 0% flask, which shows how much gas yeast makes with no sugar at all. If a question asked "What was the purpose of the 0% flask?" the answer is "to measure gas production in the absence of sugar, for comparison with the other flasks." If a question asked "Which change would most improve this experiment?" a good choice is "repeat each concentration three times and average the results," and a bad choice is "use a different species of yeast in each flask."`,
        },
        {
          type: 'example',
          prompt: `A student hypothesizes that adding salt to water lowers its freezing point. She puts four cups in a freezer: 0 g, 5 g, 10 g, and 15 g of salt in 200 mL of water each. She records the temperature at which ice first appears: 0.0 °C, −1.5 °C, −3.0 °C, and −4.4 °C. A question asks: "Do the results support the student's hypothesis?" What is the answer and the reasoning?`,
          solution: `Yes. The hypothesis predicts that more salt means a lower freezing point. The data show freezing temperatures going 0.0 → −1.5 → −3.0 → −4.4 °C as salt goes 0 → 15 g, which is exactly that: a steady drop (about 1.5 °C per 5 g). So the answer is "Yes, because the freezing temperature decreased as the amount of salt increased." The trap answers say "No, because the temperature increased" (they misread negative numbers; −4.4 is lower than −1.5) or "Yes, because the water took longer to freeze" (time was never measured; the ACT will not accept reasoning based on data that is not in the table). Notice the 0 g cup is the control and 0.0 °C is the outside fact that pure water freezes at 0 °C.`,
        },
        {
          type: 'warning',
          text: `When a question asks which variable was "held constant in all three experiments," check every experiment. Something constant in Experiments 1 and 2 may have been the variable that changed in Experiment 3.`,
        },
        {
          type: 'tip',
          text: `"Direct measurement" vs "indirect": if the experimenters counted bubbles to estimate reaction rate, they measured the rate indirectly. Questions sometimes ask what assumption that requires: that bubble count is proportional to the amount of gas produced.`,
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'sci-research-summaries',
      section: 'science',
      title: 'Research Summaries: Tracking Experiments 1, 2, 3',
      summary: 'How to keep three experiments straight, predict the result of a new trial, and know which experiment answers which question.',
      minutes: 9,
      blocks: [
        { type: 'h', text: 'The structure is always the same' },
        {
          type: 'p',
          text: `A Research Summaries passage opens with a short setup (what is being studied and the basic method), then describes two or three experiments. Usually **one thing changes between experiments**: Experiment 1 varies temperature, Experiment 2 varies concentration, Experiment 3 adds a catalyst or tests a different material. Each experiment gets its own table. Your whole job on first read is to write down, for each experiment, what varied and what stayed fixed.`,
        },
        { type: 'h', text: 'The margin-note method' },
        {
          type: 'steps',
          items: [
            `Read the setup paragraph once. Circle what is being **measured** (reaction time, plant mass, zone diameter). That is the dependent variable for every experiment.`,
            `For each experiment, read the procedure and write a 5-word note: "E1: vary temp, 0.10 M fixed."`,
            `Glance at each table and confirm your note: the first column should be the variable you wrote down.`,
            `Now go to the questions. Each stem names an experiment; go to that experiment's table and only that table.`,
          ],
        },
        {
          type: 'tip',
          text: `Look for the trial that appears in more than one experiment (the same conditions tested twice). It is the "link" between experiments and the ACT loves to ask about it, such as "Which trial in Experiment 2 used the same conditions as Trial 3 in Experiment 1?"`,
        },
        { type: 'h', text: 'Predicting a new trial' },
        {
          type: 'p',
          text: `"If the trial had been repeated at 45 °C, the time would most likely have been…" This is interpolation or extrapolation using that experiment's table. Find the two listed conditions that bracket the new one (40 °C and 50 °C), read their results (16 s and 8 s), and the new result is between them. If the new condition is beyond the table, continue the trend. If the trend is leveling off, say so: the correct choice will be "slightly greater than" the last value, not a big jump.`,
        },
        { type: 'h', text: 'Which experiment answers the question?' },
        {
          type: 'p',
          text: `Some questions do not name an experiment: "Do the results indicate that light intensity affects plant mass?" You decide which experiment varied light intensity (your margin notes tell you instantly) and look at its table. If no experiment varied that factor, the answer is "cannot be determined from the results," and that is a legitimate right answer on the ACT, but only when the factor truly was not tested.`,
        },
        {
          type: 'warning',
          text: `"Cannot be determined" is a trap when the data DO answer the question. Only choose it if the variable in the question was never varied in any experiment.`,
        },
        {
          type: 'p',
          text: `**Comparing across experiments.** Harder questions combine experiments: "Is the effect of doubling concentration larger or smaller than the effect of raising temperature by 10 °C?" Do two separate lookups, then compare the changes. Write the two numbers down before comparing; doing it in your head is how you flip them.`,
        },
        {
          type: 'example',
          prompt: `Experiment 1: a ball is dropped onto a floor from heights of 50, 100, 150, 200 cm and the bounce height is recorded: 36, 71, 106, 140 cm. Experiment 2: the ball is dropped from 100 cm onto four surfaces (tile, wood, carpet, foam): 71, 64, 38, 12 cm. Question: "If, in Experiment 2, the ball had been dropped from 200 cm onto carpet, the bounce height would most likely have been:" choices: less than 38 cm; about 38 cm; about 76 cm; about 140 cm.`,
          solution: `Combine the two patterns. Experiment 1 shows that bounce height is roughly proportional to drop height (doubling drop height from 100 to 200 cm roughly doubled bounce from 71 to 140). Experiment 2 shows carpet from 100 cm gives 38 cm. Doubling the drop height on carpet should roughly double the bounce: about **76 cm**. The trap "about 140 cm" uses Experiment 1's tile value, forgetting the surface changed; "about 38 cm" ignores that height changed. Also note the link trial: 100 cm onto tile gave 71 cm in both experiments, so the floor in Experiment 1 was tile.`,
        },
        {
          type: 'example',
          prompt: `A passage describes Experiment 1 (how quickly four brands of paper towel absorb water, each tested in 20 °C water) and Experiment 2 (Brand C only, tested in water at 5, 20, 35, and 50 °C). Question: "Which of the following questions can be answered using the results of Experiment 1 but NOT Experiment 2?"`,
          solution: `Experiment 1 varied **brand** at a fixed temperature; Experiment 2 varied **temperature** for a fixed brand. So Experiment 1 alone can answer "Which brand absorbs fastest?" and Experiment 2 alone can answer "Does water temperature affect absorption for Brand C?" Neither can answer "Does temperature affect Brand A?" (Brand A was only tested at 20 °C), so that one would be "cannot be determined." Distractors will swap the experiments, so double-check your margin notes before you commit.`,
        },
        {
          type: 'tip',
          text: `When a question asks what the experimenters "assumed," the answer is usually that the measurement method is valid (the X really disappears when a fixed amount of product forms) or that a controlled variable actually stayed constant (room temperature did not drift).`,
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'sci-conflicting-viewpoints',
      section: 'science',
      title: 'Conflicting Viewpoints',
      summary: 'Map each scientist to a one-line claim, find where they agree and disagree, and handle "would agree with" and new-evidence questions.',
      minutes: 9,
      blocks: [
        { type: 'h', text: 'What this passage is' },
        {
          type: 'p',
          text: `One passage per test gives you a shared setup (a phenomenon everyone agrees happened) and then 2–4 people who disagree about **why**. It is the only Science passage that is really a reading passage, which is why it takes longest and why you should do it when you are fresh, or last so it cannot eat the time you need for easier points.`,
        },
        { type: 'h', text: 'Map the views before answering anything' },
        {
          type: 'steps',
          items: [
            `Read the intro and underline the facts everyone accepts (the population crashed, the crater is 1 km wide). These are the "all scientists would agree" answers.`,
            `Read each viewpoint. At the end of each, write a one-line summary in the margin: the **cause** they propose and their **one best piece of evidence**.`,
            `Note any sentence where a scientist directly attacks another view ("Mussels cannot explain why only large fish vanished"). Those lines are question magnets.`,
            `Then go to the questions. Each one either asks about one view (match to the summary), asks about agreement (compare summaries), or gives new evidence (ask who it helps or hurts).`,
          ],
        },
        {
          type: 'table',
          headers: ['Question type', 'What it looks like', 'How to answer'],
          rows: [
            ['Single view', '"Scientist 2 would most likely agree with which statement?"', 'Match to that scientist\'s summary; reject anything only another scientist said'],
            ['Agreement', '"Which scientists would agree that…?"', 'Check each summary for the claim; usually the intro facts or one shared assumption'],
            ['Disagreement', '"Scientists 1 and 3 disagree about…"', 'Find the one factor they explain differently'],
            ['New evidence', '"Suppose a new study found X. This would support…"', 'Ask: whose cause predicts X? Whose cause is contradicted by X?'],
            ['Weakness', '"Which finding would most weaken Scientist 1?"', 'Find data that the proposed cause cannot explain'],
          ],
        },
        { type: 'h', text: '"Would most likely agree" questions' },
        {
          type: 'p',
          text: `The right answer is a restatement of something the scientist actually said, or an obvious consequence of it. Wrong answers are usually (a) something a different scientist said, (b) an exaggeration of the scientist's view ("the only possible cause"), or (c) true in real life but never mentioned in the passage. Stay inside the text.`,
        },
        { type: 'h', text: 'New-evidence questions' },
        {
          type: 'p',
          text: `Treat each viewpoint as a prediction. If Scientist 2 says overfishing caused the crash, then Scientist 2 predicts that a lake with no fishing would not crash. A finding that a no-fishing lake also crashed **weakens** Scientist 2. A finding that catch records show far more fish were caught **supports** Scientist 2. Ask of each view: does this new fact fit, or does it contradict?`,
        },
        {
          type: 'warning',
          text: `Do not bring in your own opinion about who is right. The passage is written so each view is plausible. Your job is to report what each one claims and what would follow from it.`,
        },
        {
          type: 'example',
          prompt: `Setup: a large circular depression 1.2 km across was found in a desert. Scientist 1 says it is a meteorite impact crater (evidence: rim of upturned rock, shocked quartz grains nearby). Scientist 2 says it is a collapsed volcanic feature (evidence: basalt fragments in the region, no meteorite fragments found). Question: "Suppose drilling at the center of the depression found a layer of melted and re-solidified rock mixed with nickel-iron fragments. This finding would most likely:"`,
          solution: `Ask what each view predicts at the center. Impact (Scientist 1) predicts melt plus bits of the meteorite, and meteorites are commonly nickel-iron. Volcanic collapse (Scientist 2) predicts basalt and perhaps a magma chamber, not nickel-iron fragments. So the finding **supports Scientist 1 and weakens Scientist 2**, and it directly answers Scientist 2's "no meteorite fragments" objection. The trap: "supports both, because melted rock is consistent with volcanoes." The melt alone would be ambiguous, but the nickel-iron is specific to impacts, and the question asks about the finding as a whole.`,
        },
        {
          type: 'example',
          prompt: `Three students explain why a cup of hot coffee cools faster when it sits on a metal table than on a wooden one. Student 1: metal conducts heat away faster. Student 2: the metal table is colder to begin with, so the temperature difference is bigger. Student 3: the cup on the metal table happened to be in a draft; table material does not matter. Question: "With which statement would Students 1 and 2 agree, but Student 3 disagree?"`,
          solution: `Summaries: S1 = conduction through metal; S2 = bigger temperature gap on metal; S3 = air, not table. Students 1 and 2 both say **the table material affects cooling** (for different reasons). Student 3 explicitly says it does not. So the shared statement is "The material of the table surface affects how fast the coffee cools." Wrong choices: "Metal conducts heat better than wood" (only S1 said this), "The tables started at different temperatures" (only S2), and "Air movement does not affect cooling" (none of them said that; S1 and S2 never mention air at all, and absence of a claim is not disagreement).`,
        },
        {
          type: 'tip',
          text: `If two views differ in a single word ("mussels" vs "warming"), a question about the difference will almost always come down to that word. Find it, underline it, and answer with it.`,
        },
        {
          type: 'p',
          text: `Budget: about 3 minutes to read and map, 5 minutes for 7 questions. If a question asks something you did not note, go back to the specific scientist's paragraph; do not re-read the whole passage.`,
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'sci-reasoning-and-outside-knowledge',
      section: 'science',
      title: 'Reasoning, Claims, and the Few Outside Facts',
      summary: 'Decide whether the data support a claim, handle "which finding would weaken" questions, and know the small set of outside facts that actually appear.',
      minutes: 8,
      blocks: [
        { type: 'h', text: 'Does the data support the claim?' },
        {
          type: 'p',
          text: `These questions give a claim ("all salts dissolve better in hot water") and ask whether the results support it. Answer choices come in the form "Yes, because…" and "No, because…" Treat it as two decisions: first the yes/no, then the reason. The **reason must cite the data**, not a plausible-sounding idea. A choice that says "No, because the beakers were different sizes" is wrong if beaker size is not in the passage, even if it sounds scientific.`,
        },
        {
          type: 'steps',
          items: [
            `Translate the claim into a prediction about the table: "every salt's solubility column should go up as temperature goes up."`,
            `Check the table for that prediction. One counterexample is enough to say the claim is not supported.`,
            `Pick the choice whose yes/no matches AND whose reason names the actual row or trend you found.`,
          ],
        },
        { type: 'h', text: '"Which of the following, if true, would weaken…"' },
        {
          type: 'p',
          text: `A claim is weakened by a fact its explanation cannot account for, or by removing the connection between cause and effect. If the claim is "the antibiotic killed the bacteria," a finding that the control disc (no antibiotic) produced the same clear zone weakens it, because now the antibiotic is not needed to explain the result. If the claim is "more intensity, more growth," a finding that growth was the same at 400 and 800 weakens the "more is always better" version but not the "intensity matters up to a point" version. Read the claim's exact wording.`,
        },
        { type: 'h', text: 'Strength of language' },
        {
          type: 'list',
          items: [
            `Data **are consistent with** or **support** a hypothesis. Data rarely **prove** one. Choices with "proves," "always," "never," or "the only cause" are almost never correct.`,
            `"Most likely" and "best supported" are the test-writers' way of saying "this is the one the data point to." Pick the one the numbers show, even if it is not a certainty.`,
            `If two choices say the same thing but one adds a specific number from the table, the specific one is usually the answer; the test rewards citing the data.`,
          ],
        },
        { type: 'h', text: 'When outside knowledge appears' },
        {
          type: 'p',
          text: `A few questions per test lean on a fact that is not in the passage. The fact is always basic, middle-school level. The passage may say "the solution was tested with litmus paper" and the question asks which sample was acidic; you need to know pH below 7 means acid. Or a table lists densities and the question asks which object would float in water; you need to know water's density is 1.0 g/mL and less-dense things float. Keep the overview's fact table in your head and you are covered.`,
        },
        {
          type: 'table',
          headers: ['If the passage is about…', 'The outside fact it may assume'],
          rows: [
            ['Solutions, acids, bases', 'pH < 7 acidic, 7 neutral, > 7 basic'],
            ['Floating, sinking, layers of liquid', 'density = mass ÷ volume; water is 1.0 g/mL; less dense floats on more dense'],
            ['Plants, leaves, light', 'Photosynthesis uses CO₂, water, light; produces glucose and O₂'],
            ['Genetics, crosses, traits', 'Dominant allele shows with one copy; Aa × Aa gives 3:1'],
            ['Cells, genes, enzymes', 'DNA → RNA → protein; enzymes speed reactions and are affected by temperature and pH'],
            ['Motion, forces, collisions', 'F = ma; objects keep moving unless a force acts; action-reaction pairs'],
            ['Pendulums, ramps, roller coasters', 'Potential energy at the top turns into kinetic energy at the bottom'],
            ['Ice, steam, heating curves', 'Water freezes at 0 °C and boils at 100 °C; temperature holds steady during a phase change'],
            ['Lightning, echoes, sonar', 'Light is vastly faster than sound; sound needs a medium'],
            ['Any experiment', 'Independent variable is changed; dependent is measured; control gets no treatment'],
          ],
        },
        {
          type: 'example',
          prompt: `Table: solubility (g per 100 g water) of three compounds at 20 °C and 80 °C. Compound X: 32 → 169. Compound Y: 36 → 38. Compound Z: 10 → 4. A student claims: "Heating water always increases the amount of a solid that can dissolve in it." Do the results support the claim? Choices: Yes, because X dissolved more at 80 °C; Yes, because all three values changed; No, because Z dissolved less at 80 °C than at 20 °C; No, because Y barely changed.`,
          solution: `Translate the claim: every compound's solubility should rise with temperature. Check: X rose (32 → 169), Y rose a little (36 → 38), Z **fell** (10 → 4). One counterexample sinks an "always" claim, so the answer is **No, because Z dissolved less at 80 °C than at 20 °C.** "No, because Y barely changed" gets the yes/no right but the reason wrong: Y did still increase, so it does not contradict the claim. "Yes, because X…" ignores Z. The specific, data-citing reason wins.`,
        },
        {
          type: 'example',
          prompt: `A passage reports that four liquids were poured into one cylinder and formed layers. Table: Liquid A density 0.79 g/mL, Liquid B 1.26 g/mL, Liquid C 0.92 g/mL, Liquid D 1.00 g/mL (water). Question: "Which liquid formed the bottom layer, and which liquid would a plastic bead of density 0.95 g/mL float on top of?"`,
          solution: `Outside fact: denser liquids sink below less-dense ones, and an object floats on any liquid denser than itself. Order the densities: B (1.26) is the densest, so B is the **bottom** layer; then D (1.00), then C (0.92), then A (0.79) on top. The bead at 0.95 g/mL sinks through A (0.79) and C (0.92) because it is denser than both, and floats on D (1.00) because it is less dense than D. So it rests on top of **Liquid D**. The trap is picking B because it is "the densest"; the bead stops at the first layer denser than itself, which is D.`,
        },
        {
          type: 'warning',
          text: `If you catch yourself thinking "I remember from class that…," pause. If the passage contains data on the point, the data win. Outside knowledge is for filling a gap, never for overriding the table.`,
        },
        {
          type: 'tip',
          text: `On any "which conclusion is best supported" question, eliminate every choice that mentions a variable not in the tables. What is left is usually the answer.`,
        },
      ],
    },
  ],

  passages: [
    // ------------------------------------------------------------------
    {
      id: 'sci-data-1',
      section: 'science',
      kind: 'data-representation',
      title: 'Solubility of Three Salts',
      intro: 'Passage I',
      text: `The *solubility* of a salt is the maximum mass of that salt that can dissolve in a given mass of water at a given temperature. A solution containing the maximum amount of dissolved salt is *saturated*; any additional salt added to a saturated solution remains as solid at the bottom of the container.

Students measured the solubility of three salts, potassium nitrate (KNO₃), sodium chloride (NaCl), and cerium(III) sulfate (Ce₂(SO₄)₃), in 100 g of water at six temperatures between 0 °C and 100 °C. For each trial, salt was added to the water in small portions with stirring until no more would dissolve, and the total mass of dissolved salt was recorded. The results are shown in Table 1. Figure 1 (not shown) plots the same data as three solubility curves, with temperature on the horizontal axis and solubility on the vertical axis.

The students then examined how quickly a fixed mass of KNO₃ dissolves. In each trial, 10.0 g of KNO₃ was added to 100 g of water at 20 °C, and the time required for all of the salt to dissolve was measured. Trials were run with coarse crystals (about 2 mm across) and with fine powder (less than 0.1 mm across) at five stirring rates. The results are shown in Table 2.`,
      tables: [
        {
          caption: 'Table 1. Solubility (g of salt per 100 g of water) at various temperatures',
          headers: ['Temperature (°C)', 'KNO₃ (g/100 g water)', 'NaCl (g/100 g water)', 'Ce₂(SO₄)₃ (g/100 g water)'],
          rows: [
            ['0', '13', '35.7', '21.4'],
            ['20', '32', '36.0', '9.8'],
            ['40', '64', '36.6', '7.2'],
            ['60', '110', '37.3', '5.0'],
            ['80', '169', '38.4', '3.7'],
            ['100', '246', '39.8', '2.5'],
          ],
        },
        {
          caption: 'Table 2. Time (s) for 10.0 g of KNO₃ to dissolve in 100 g of water at 20 °C',
          headers: ['Stirring rate (rpm)', 'Coarse crystals (s)', 'Fine powder (s)'],
          rows: [
            ['0', '310', '150'],
            ['100', '142', '70'],
            ['200', '78', '39'],
            ['300', '45', '24'],
            ['400', '44', '23'],
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'sci-data-2',
      section: 'science',
      kind: 'data-representation',
      title: 'Period of a Simple Pendulum',
      intro: 'Passage II',
      text: `A *simple pendulum* consists of a small mass (the *bob*) hanging from a string of negligible mass. When the bob is pulled to one side and released, it swings back and forth. The *period* is the time required for one complete swing (out and back). The *amplitude* is the maximum angle, measured from the vertical, that the string reaches during a swing.

A student built a pendulum and measured its period under various conditions. In each trial, the student used a stopwatch to time 10 complete swings and divided by 10 to obtain the period. Unless otherwise noted, the string length was 40 cm, the bob mass was 50 g, and the amplitude was 10°. All trials were performed indoors with the same string and support.

In Study 1 the student varied the string length (Table 1). In Study 2 the student varied the bob mass by hanging different metal cylinders of the same shape from the string (Table 2). In Study 3 the student varied the amplitude by releasing the bob from different angles (Table 3). Figure 1 (not shown) plots period against string length for Study 1; the plotted points form a curve that rises steeply at first and then more gradually.`,
      tables: [
        {
          caption: 'Table 1. Study 1: Period vs string length (mass 50 g, amplitude 10°)',
          headers: ['String length (cm)', 'Period (s)'],
          rows: [
            ['10', '0.63'],
            ['20', '0.90'],
            ['40', '1.27'],
            ['80', '1.79'],
            ['160', '2.54'],
          ],
        },
        {
          caption: 'Table 2. Study 2: Period vs bob mass (length 40 cm, amplitude 10°)',
          headers: ['Bob mass (g)', 'Period (s)'],
          rows: [
            ['25', '1.27'],
            ['50', '1.27'],
            ['100', '1.28'],
            ['200', '1.27'],
          ],
        },
        {
          caption: 'Table 3. Study 3: Period vs amplitude (length 40 cm, mass 50 g)',
          headers: ['Amplitude (degrees)', 'Period (s)'],
          rows: [
            ['5', '1.27'],
            ['10', '1.27'],
            ['20', '1.28'],
            ['40', '1.31'],
            ['60', '1.36'],
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'sci-research-1',
      section: 'science',
      kind: 'research-summary',
      title: 'Light and Radish Seedling Growth',
      intro: 'Passage III',
      text: `Plants use light energy for *photosynthesis*, the process that produces the sugars a plant needs to build new tissue. Researchers studied how the color, intensity, and daily duration of light affect the growth of radish seedlings. In every experiment, 20 seedlings were planted in identical trays of soil, watered with the same volume of water each day, and kept at 22 °C for 14 days. At the end of 14 days, the average height of the seedlings was measured, and the seedlings were then dried in an oven and weighed to determine the average *dry mass* (the mass of plant tissue with all water removed).

**Experiment 1**
Four trays were placed under LED lamps that emitted red, blue, green, or white light (one color per tray) at an intensity of 200 µmol/m²/s for 12 hours per day. A fifth tray was kept in complete darkness. The results are shown in Table 1.

**Experiment 2**
Five trays were placed under white LED lamps for 12 hours per day at intensities ranging from 50 to 800 µmol/m²/s. The results are shown in Table 2.

**Experiment 3**
Four trays were placed under red LED lamps at 200 µmol/m²/s for 6, 12, 18, or 24 hours per day. The results are shown in Table 3.`,
      tables: [
        {
          caption: 'Table 1. Experiment 1: Light color (200 µmol/m²/s, 12 h/day)',
          headers: ['Light color', 'Average height (cm)', 'Average dry mass (mg)'],
          rows: [
            ['Red', '8.4', '62'],
            ['Blue', '5.1', '71'],
            ['Green', '6.2', '28'],
            ['White', '7.0', '75'],
            ['None (darkness)', '11.6', '15'],
          ],
        },
        {
          caption: 'Table 2. Experiment 2: Light intensity (white light, 12 h/day)',
          headers: ['Intensity (µmol/m²/s)', 'Average height (cm)', 'Average dry mass (mg)'],
          rows: [
            ['50', '7.9', '31'],
            ['100', '7.4', '52'],
            ['200', '7.0', '75'],
            ['400', '6.6', '96'],
            ['800', '6.5', '97'],
          ],
        },
        {
          caption: 'Table 3. Experiment 3: Daily light duration (red light, 200 µmol/m²/s)',
          headers: ['Duration (h/day)', 'Average height (cm)', 'Average dry mass (mg)'],
          rows: [
            ['6', '9.0', '38'],
            ['12', '8.5', '55'],
            ['18', '8.3', '66'],
            ['24', '8.1', '60'],
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'sci-research-2',
      section: 'science',
      kind: 'research-summary',
      title: 'Rate of the Thiosulfate–Acid Reaction',
      intro: 'Passage IV',
      text: `When sodium thiosulfate solution is mixed with hydrochloric acid (HCl), the reaction slowly produces solid sulfur, which makes the mixture cloudy. Students measured the rate of this reaction by placing a flask on a sheet of paper marked with a black X, adding the two solutions, and recording the time until the X could no longer be seen through the mixture. A shorter time indicates a faster reaction.

In every trial, 50 mL of sodium thiosulfate solution was placed in the flask, 5 mL of HCl was added, the flask was swirled once, and timing began immediately. The same flask, paper, and observer were used for all trials. Unless otherwise noted, the thiosulfate concentration was 0.10 M, the HCl concentration was 1.0 M, and the solutions were at 20 °C.

**Experiment 1**
Trials were performed with both solutions warmed or cooled to 10 °C, 20 °C, 30 °C, 40 °C, or 50 °C in a water bath before mixing. The results are shown in Table 1.

**Experiment 2**
Trials were performed at 20 °C with thiosulfate concentrations of 0.025 M, 0.050 M, 0.10 M, and 0.20 M. The results are shown in Table 2.

**Experiment 3**
Trials were performed at 20 °C with 0.10 M thiosulfate and HCl concentrations of 0.25 M, 0.50 M, 1.0 M, and 2.0 M. The results are shown in Table 3.`,
      tables: [
        {
          caption: 'Table 1. Experiment 1: Temperature (0.10 M thiosulfate, 1.0 M HCl)',
          headers: ['Temperature (°C)', 'Time for X to disappear (s)'],
          rows: [
            ['10', '124'],
            ['20', '62'],
            ['30', '31'],
            ['40', '16'],
            ['50', '8'],
          ],
        },
        {
          caption: 'Table 2. Experiment 2: Thiosulfate concentration (20 °C, 1.0 M HCl)',
          headers: ['Thiosulfate concentration (M)', 'Time for X to disappear (s)'],
          rows: [
            ['0.025', '248'],
            ['0.050', '124'],
            ['0.10', '62'],
            ['0.20', '31'],
          ],
        },
        {
          caption: 'Table 3. Experiment 3: HCl concentration (20 °C, 0.10 M thiosulfate)',
          headers: ['HCl concentration (M)', 'Time for X to disappear (s)'],
          rows: [
            ['0.25', '64'],
            ['0.50', '63'],
            ['1.0', '62'],
            ['2.0', '61'],
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'sci-research-3',
      section: 'science',
      kind: 'research-summary',
      title: 'Antibiotics and Bacterial Growth',
      intro: 'Passage V',
      text: `The effectiveness of an antibiotic against a type of bacteria can be tested with a *disc diffusion assay*. Bacteria are spread evenly over the surface of a nutrient gel in a dish, and small paper discs soaked in antibiotic solution are placed on the surface. As the antibiotic diffuses outward from each disc, it prevents bacteria from growing nearby, producing a clear circle called the *zone of inhibition*. A larger zone diameter indicates that the antibiotic is more effective against that bacterium.

Researchers tested two species of bacteria, *Escherichia coli* and *Staphylococcus aureus*. In every trial, dishes were incubated at 37 °C for 24 hours, and each zone diameter reported is the average of 3 dishes. A disc soaked in sterile water was included in every dish.

**Experiment 1**
Discs containing 30 µg of each of four antibiotics were tested against each bacterial species. The results are shown in Table 1.

**Experiment 2**
Discs containing 5, 10, 20, 40, or 80 µg of tetracycline were tested against *E. coli*. The results are shown in Table 2.`,
      tables: [
        {
          caption: 'Table 1. Experiment 1: Zone of inhibition diameter (mm) for 30 µg of each antibiotic',
          headers: ['Disc', 'E. coli (mm)', 'S. aureus (mm)'],
          rows: [
            ['Ampicillin', '18', '24'],
            ['Tetracycline', '22', '20'],
            ['Streptomycin', '15', '14'],
            ['Erythromycin', '9', '23'],
            ['Sterile water', '0', '0'],
          ],
        },
        {
          caption: 'Table 2. Experiment 2: Zone of inhibition diameter (mm) vs amount of tetracycline, E. coli',
          headers: ['Tetracycline (µg)', 'Zone diameter (mm)'],
          rows: [
            ['5', '11'],
            ['10', '15'],
            ['20', '20'],
            ['40', '24'],
            ['80', '25'],
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'sci-viewpoints-1',
      section: 'science',
      kind: 'conflicting-viewpoints',
      title: 'The Walleye Decline in Lake Marrow',
      intro: 'Passage VI',
      text: `Lake Marrow is a 900-hectare freshwater lake with a maximum depth of 28 m. For decades it supported a large population of walleye, a predatory fish that feeds mainly on smaller fish and prefers cool, dim water. Annual surveys show that the number of adult walleye fell by about 80% between 2019 and 2022, while the number of young walleye (less than one year old) fell by about 50%. During the same period, the lake's average water clarity (the depth at which a white disc is still visible) increased from 2.1 m to 4.6 m, the average summer surface temperature rose by about 2 °C, and the concentration of plankton in the water fell by roughly half. Invasive zebra mussels were first found in the lake in 2018. A new boat ramp opened in 2017, and the number of fishing permits sold for the lake rose by 40% between 2017 and 2021. Three scientists offer explanations for the walleye decline.

**Scientist 1**
The decline was caused by zebra mussels. Each mussel filters about a liter of water per day, removing the plankton that small fish depend on. Within two years of the mussels' arrival, plankton fell by half and the water became much clearer, which is exactly what a mussel invasion produces. With less plankton, the small fish that walleye eat became scarce, and walleye starved or failed to reproduce. The timing is decisive: mussels appeared in 2018, and the crash began the next year. Warmer temperatures and fishing existed before 2018 without causing a crash. Other lakes invaded by zebra mussels have shown similar drops in predatory fish within a few years.

**Scientist 2**
The decline was caused by overfishing. The new boat ramp made the lake far easier to reach, and permit sales rose 40%. Walleye grow slowly and do not reproduce until they are four or five years old, so removing large adults quickly reduces the number of eggs laid. The pattern of the decline supports this: adults, the fish anglers keep, fell by 80%, while young walleye fell by only 50%. If food shortage were the cause, the young fish, which are most vulnerable to starvation, would have declined at least as much as adults. Zebra mussels and a slight warming may have added stress, but neither removes thousands of adult fish from a lake each year the way anglers do. Strict catch limits would allow the population to recover.

**Scientist 3**
The decline was caused by warming and increased light. Walleye are cool-water fish with light-sensitive eyes; they hunt most successfully in dim water. A 2 °C rise in summer surface temperature lowers the oxygen content of deep water, shrinking the cool, oxygen-rich zone walleye require. At the same time, clearer water lets sunlight reach deeper, warming the lake further and leaving walleye with little dim habitat in which to hunt. Warm-water, sight-feeding competitors such as largemouth bass thrive under these conditions and prey on young walleye. Zebra mussels contributed to the clearer water, but it is the resulting loss of suitable habitat, not a shortage of food, that drove the decline. Fishing pressure alone cannot explain why young walleye, which anglers do not keep, also fell by half.`,
    },
  ],

  questions: [
    // ---------------- Passage I: sci-data-1 ----------------
    {
      id: 'sci-d1-01',
      section: 'science',
      topic: 'sci-reading-tables-and-graphs',
      difficulty: 1,
      passageId: 'sci-data-1',
      stem: `According to Table 1, as the temperature increased from 0 °C to 100 °C, the solubility of Ce₂(SO₄)₃:`,
      choices: ['increased only.', 'remained the same.', 'increased, then decreased.', 'decreased only.'],
      answer: 3,
      explanation: `Read down the Ce₂(SO₄)₃ column of Table 1: 21.4, 9.8, 7.2, 5.0, 3.7, 2.5 g per 100 g of water. Every step is a decrease, so the solubility decreased only. "Increased only" describes KNO₃ and NaCl, the other two columns, which is the trap for anyone who assumes all salts behave the same way.`,
    },
    {
      id: 'sci-d1-02',
      section: 'science',
      topic: 'sci-approach-and-pacing',
      difficulty: 1,
      passageId: 'sci-data-1',
      stem: `According to Table 1, the solubility of KNO₃ at 60 °C was closest to:`,
      choices: ['37 g per 100 g of water.', '64 g per 100 g of water.', '110 g per 100 g of water.', '169 g per 100 g of water.'],
      answer: 2,
      explanation: `Find the 60 °C row of Table 1 and read across to the KNO₃ column: 110 g per 100 g of water. The distractors are real table values in the wrong place: 64 is KNO₃ at 40 °C, 169 is KNO₃ at 80 °C, and 37 is roughly the NaCl value at 60 °C (37.3), the neighboring column.`,
    },
    {
      id: 'sci-d1-03',
      section: 'science',
      topic: 'sci-reading-tables-and-graphs',
      difficulty: 2,
      passageId: 'sci-data-1',
      stem: `Based on Table 1, if the solubility of KNO₃ had been measured at 50 °C, it would most likely have been:`,
      choices: ['less than 32 g per 100 g of water.', 'between 32 g and 64 g per 100 g of water.', 'between 64 g and 110 g per 100 g of water.', 'greater than 110 g per 100 g of water.'],
      answer: 2,
      explanation: `50 °C falls between the 40 °C row (64 g) and the 60 °C row (110 g), and the KNO₃ column increases steadily, so the value at 50 °C must lie between 64 and 110 g. This is interpolation: bracket the unknown with the two nearest table values. "Between 32 and 64" would be correct for 30 °C, not 50 °C.`,
    },
    {
      id: 'sci-d1-04',
      section: 'science',
      topic: 'sci-reading-tables-and-graphs',
      difficulty: 2,
      passageId: 'sci-data-1',
      stem: `According to Table 1, the solubility of which salt was LEAST affected by temperature over the range 0 °C to 100 °C?`,
      choices: ['KNO₃', 'NaCl', 'Ce₂(SO₄)₃', 'All three salts were affected equally.'],
      answer: 1,
      explanation: `Compare the total change in each column from 0 °C to 100 °C. KNO₃ changed from 13 to 246 (a change of 233 g); Ce₂(SO₄)₃ changed from 21.4 to 2.5 (a change of about 19 g); NaCl changed only from 35.7 to 39.8 (about 4 g). NaCl is by far the least affected. The direction of change does not matter for this question, only its size.`,
    },
    {
      id: 'sci-d1-05',
      section: 'science',
      topic: 'sci-reasoning-and-outside-knowledge',
      difficulty: 2,
      passageId: 'sci-data-1',
      stem: `Suppose 40 g of KNO₃ is added to 100 g of water at 20 °C and the mixture is stirred until no more salt dissolves. Based on Table 1, approximately how much solid KNO₃ would remain undissolved?`,
      choices: ['0 g', '8 g', '32 g', '40 g'],
      answer: 1,
      explanation: `Table 1 gives the solubility of KNO₃ at 20 °C as 32 g per 100 g of water, so at most 32 g can dissolve. The remaining 40 − 32 = 8 g stays as solid, which is what the passage calls a saturated solution with excess salt. "32 g" is the amount dissolved, not the amount left over; "0 g" would require a solubility of at least 40 g, which is not reached until somewhere between 20 °C and 40 °C.`,
    },
    {
      id: 'sci-d1-06',
      section: 'science',
      topic: 'sci-reading-tables-and-graphs',
      difficulty: 3,
      passageId: 'sci-data-1',
      stem: `According to Table 2, increasing the stirring rate from 300 rpm to 400 rpm had which of the following effects on the time required for coarse crystals to dissolve?`,
      choices: [
        'It decreased the time by about 33 s, similar to the decrease from 200 rpm to 300 rpm.',
        'It decreased the time by about 1 s, much less than the decrease from 200 rpm to 300 rpm.',
        'It increased the time by about 1 s.',
        'It had no effect; the time was 45 s at both stirring rates.',
      ],
      answer: 1,
      explanation: `In the coarse-crystal column of Table 2, the time goes from 78 s at 200 rpm to 45 s at 300 rpm (a 33 s decrease), but only from 45 s to 44 s at 400 rpm (a 1 s decrease). So the extra stirring barely helped: the effect was leveling off. Choice A describes the previous step, not this one; choice D is wrong because the values are 45 and 44, not identical; the time did not increase.`,
    },
    {
      id: 'sci-d1-07',
      section: 'science',
      topic: 'sci-experimental-design',
      difficulty: 2,
      passageId: 'sci-data-1',
      stem: `In the trials summarized in Table 2, which of the following was held constant?`,
      choices: ['Stirring rate', 'Crystal size', 'Water temperature', 'Time required for the salt to dissolve'],
      answer: 2,
      explanation: `The passage states that every Table 2 trial used 10.0 g of KNO₃ in 100 g of water at 20 °C, so water temperature was a controlled variable. Stirring rate and crystal size were the two variables deliberately changed (they are the row labels and column headers), and dissolving time was the dependent variable that was measured, so none of those was constant.`,
    },

    // ---------------- Passage II: sci-data-2 ----------------
    {
      id: 'sci-d2-01',
      section: 'science',
      topic: 'sci-reading-tables-and-graphs',
      difficulty: 1,
      passageId: 'sci-data-2',
      stem: `According to Table 1, as the string length increased from 10 cm to 160 cm, the period of the pendulum:`,
      choices: ['increased only.', 'decreased only.', 'remained constant.', 'increased, then decreased.'],
      answer: 0,
      explanation: `The period column of Table 1 reads 0.63, 0.90, 1.27, 1.79, 2.54 s as length goes from 10 to 160 cm. Every value is larger than the one before, so the period increased only. "Remained constant" describes Table 2 (mass), not Table 1, and nothing in Table 1 ever decreases.`,
    },
    {
      id: 'sci-d2-02',
      section: 'science',
      topic: 'sci-reading-tables-and-graphs',
      difficulty: 2,
      passageId: 'sci-data-2',
      stem: `According to Table 1, when the string length was doubled from 40 cm to 80 cm, the period:`,
      choices: ['doubled.', 'was cut in half.', 'remained the same.', 'increased by a factor of about 1.4.'],
      answer: 3,
      explanation: `Table 1 gives 1.27 s at 40 cm and 1.79 s at 80 cm. Dividing, 1.79 ÷ 1.27 ≈ 1.41, so the period grew by a factor of about 1.4, not 2. The same ratio appears for every doubling in the table (0.90 ÷ 0.63 ≈ 1.4, 2.54 ÷ 1.79 ≈ 1.4), which is why the passage says the curve in Figure 1 rises more gradually as length increases. "Doubled" is the trap for anyone who assumes the relationship is proportional.`,
    },
    {
      id: 'sci-d2-03',
      section: 'science',
      topic: 'sci-reading-tables-and-graphs',
      difficulty: 3,
      passageId: 'sci-data-2',
      stem: `Suppose Study 1 had been repeated with a string length of 320 cm. Based on Table 1, the period would most likely have been closest to:`,
      choices: ['2.5 s', '3.6 s', '5.1 s', '7.2 s'],
      answer: 1,
      explanation: `Table 1 shows that each doubling of the length multiplies the period by about 1.4 (for example 1.79 → 2.54 s from 80 to 160 cm). Going from 160 cm to 320 cm is one more doubling, so the period should be about 2.54 × 1.4 ≈ 3.6 s. "5.1 s" doubles the period along with the length, which the table shows is wrong; "2.5 s" assumes no change.`,
    },
    {
      id: 'sci-d2-04',
      section: 'science',
      topic: 'sci-experimental-design',
      difficulty: 1,
      passageId: 'sci-data-2',
      stem: `In Study 2, the independent variable was the:`,
      choices: ['string length.', 'amplitude.', 'period.', 'bob mass.'],
      answer: 3,
      explanation: `The independent variable is what the experimenter deliberately changed. Table 2 lists bob masses of 25, 50, 100, and 200 g, so mass was varied in Study 2. String length (40 cm) and amplitude (10°) were held constant, and the period was the dependent variable that was measured.`,
    },
    {
      id: 'sci-d2-05',
      section: 'science',
      topic: 'sci-reasoning-and-outside-knowledge',
      difficulty: 2,
      passageId: 'sci-data-2',
      stem: `Before Study 2, the student hypothesized that a heavier bob would produce a longer period. Do the results of Study 2 support this hypothesis?`,
      choices: [
        'Yes; the period increased from 1.27 s to 1.28 s as the mass increased.',
        'Yes; the 200 g bob had the longest period of the four.',
        'No; the period was approximately the same (1.27–1.28 s) for all four masses.',
        'No; the period decreased steadily as the mass increased.',
      ],
      answer: 2,
      explanation: `Table 2 shows periods of 1.27, 1.27, 1.28, and 1.27 s for masses of 25 to 200 g. Multiplying the mass by eight changed the period by at most 0.01 s, which is within what a stopwatch can resolve, so mass had no meaningful effect and the hypothesis is not supported. Choice A treats a 0.01 s wobble as a trend; choice B is false (the 200 g bob gave 1.27 s, not the largest value); choice D describes a decrease that is not in the data.`,
    },
    {
      id: 'sci-d2-06',
      section: 'science',
      topic: 'sci-reading-tables-and-graphs',
      difficulty: 3,
      passageId: 'sci-data-2',
      stem: `Which of the following statements best describes the results of Study 3?`,
      choices: [
        'The period increased by the same amount for each increase in amplitude.',
        'The period was unaffected by amplitude over the entire range tested.',
        'The period remained approximately constant for amplitudes up to about 20°, then increased as amplitude increased further.',
        'The period decreased as amplitude increased.',
      ],
      answer: 2,
      explanation: `Table 3 shows 1.27, 1.27, and 1.28 s at 5°, 10°, and 20° (essentially constant), then 1.31 s at 40° and 1.36 s at 60°. So amplitude did not matter for small swings but did matter for large ones. Choice B ignores the rise at 40° and 60°, and choice A is wrong because the increases are 0, 0.01, 0.03, and 0.05 s, not equal steps. Reading the whole column, not just the ends, is what this question tests.`,
    },
    {
      id: 'sci-d2-07',
      section: 'science',
      topic: 'sci-approach-and-pacing',
      difficulty: 2,
      passageId: 'sci-data-2',
      stem: `The student wants to build a pendulum with a period of 2.0 s using a 50 g bob and a 10° amplitude. Based on Table 1, the string length should be:`,
      choices: ['between 20 cm and 40 cm.', 'between 40 cm and 80 cm.', 'between 80 cm and 160 cm.', 'greater than 160 cm.'],
      answer: 2,
      explanation: `This is a reverse lookup in Table 1: find where 2.0 s would fall in the period column. The period is 1.79 s at 80 cm and 2.54 s at 160 cm, so a 2.0 s period requires a length between 80 and 160 cm. The conditions in the question (50 g, 10°) match Table 1, so no other table is needed. "Greater than 160 cm" would give periods above 2.54 s.`,
    },

    // ---------------- Passage III: sci-research-1 ----------------
    {
      id: 'sci-r1-01',
      section: 'science',
      topic: 'sci-research-summaries',
      difficulty: 1,
      passageId: 'sci-research-1',
      stem: `In Experiment 1, which light color produced the greatest average dry mass?`,
      choices: ['Red', 'Blue', 'Green', 'White'],
      answer: 3,
      explanation: `Scan the dry-mass column of Table 1: red 62 mg, blue 71 mg, green 28 mg, white 75 mg, darkness 15 mg. White is the largest. Red is the trap for anyone who reads the height column instead (red seedlings were the tallest of the lit groups at 8.4 cm), but the question asks about dry mass.`,
    },
    {
      id: 'sci-r1-02',
      section: 'science',
      topic: 'sci-research-summaries',
      difficulty: 2,
      passageId: 'sci-research-1',
      stem: `Which of the following variables was held constant in all three experiments?`,
      choices: ['Light color', 'Light intensity', 'Number of seedlings per tray', 'Daily light duration'],
      answer: 2,
      explanation: `The introduction says every experiment used 20 seedlings per tray, the same watering, 22 °C, and 14 days, so the number of seedlings was constant throughout. Light color varied in Experiment 1, intensity varied in Experiment 2, and duration varied in Experiment 3, so each of the other choices was the independent variable in at least one experiment. Check every experiment before answering an "all three" question.`,
    },
    {
      id: 'sci-r1-03',
      section: 'science',
      topic: 'sci-reasoning-and-outside-knowledge',
      difficulty: 3,
      passageId: 'sci-research-1',
      stem: `Based on the results of Experiment 1, which of the following statements about using seedling height as a measure of plant growth is best supported?`,
      choices: [
        'Height is a reliable measure of growth, because the tallest seedlings produced the most plant tissue.',
        'Height alone is not a reliable measure of growth, because the seedlings grown in darkness were the tallest but had the least dry mass.',
        'Height is a reliable measure of growth, because height and dry mass increased together for all five groups.',
        'Height alone is not a reliable measure of growth, because green light produced the tallest seedlings.',
      ],
      answer: 1,
      explanation: `Table 1 shows the darkness group was the tallest (11.6 cm) yet had the lowest dry mass (15 mg), while the white-light group was shorter (7.0 cm) with the highest dry mass (75 mg). Height and dry mass clearly do not track each other, so height by itself is a poor measure of how much tissue a plant built. Choices A and C claim the opposite of what the table shows, and choice D is factually wrong (green seedlings were 6.2 cm, not the tallest).`,
    },
    {
      id: 'sci-r1-04',
      section: 'science',
      topic: 'sci-research-summaries',
      difficulty: 2,
      passageId: 'sci-research-1',
      stem: `Based on the results of Experiment 2, if a tray had been grown under white light at an intensity of 300 µmol/m²/s, the average dry mass would most likely have been:`,
      choices: ['between 52 mg and 75 mg.', 'between 75 mg and 96 mg.', 'between 96 mg and 97 mg.', 'greater than 97 mg.'],
      answer: 1,
      explanation: `In Table 2, 300 µmol/m²/s lies between the 200 row (75 mg) and the 400 row (96 mg), and dry mass rises steadily through that part of the table, so the value should be between 75 and 96 mg. "Between 52 and 75" is the bracket for 150 µmol/m²/s, and "between 96 and 97" is the bracket for intensities between 400 and 800.`,
    },
    {
      id: 'sci-r1-05',
      section: 'science',
      topic: 'sci-research-summaries',
      difficulty: 2,
      passageId: 'sci-research-1',
      stem: `Which of the following best describes the relationship between light intensity and average dry mass in Experiment 2?`,
      choices: [
        'Dry mass increased by about the same amount for each doubling of intensity across the entire range.',
        'Dry mass increased with intensity up to 400 µmol/m²/s and then leveled off.',
        'Dry mass decreased as intensity increased.',
        'Dry mass increased with intensity up to 200 µmol/m²/s and then decreased.',
      ],
      answer: 1,
      explanation: `The dry-mass column of Table 2 reads 31, 52, 75, 96, 97 mg. It climbs by roughly 20 mg per doubling up to 400 µmol/m²/s, then rises only 1 mg from 400 to 800, which is a plateau. Choice A ignores the plateau, choice D invents a decrease, and choice C describes the height column (7.9 down to 6.5 cm), not dry mass.`,
    },
    {
      id: 'sci-r1-06',
      section: 'science',
      topic: 'sci-experimental-design',
      difficulty: 1,
      passageId: 'sci-research-1',
      stem: `What was the most likely purpose of the tray kept in complete darkness in Experiment 1?`,
      choices: [
        'To serve as a control showing how seedlings grow in the absence of light',
        'To determine whether radish seedlings grow best without light',
        'To test the effect of light intensity on dry mass',
        'To keep the temperature of the other trays constant',
      ],
      answer: 0,
      explanation: `The darkness tray received none of the treatment (light), so it is the control: it shows what height and mass look like with no light at all, giving a baseline for comparing the four colors. The researchers were not testing whether darkness is best (choice B); intensity was the subject of Experiment 2, not this tray (choice C); and a tray cannot regulate the temperature of other trays (choice D).`,
    },
    {
      id: 'sci-r1-07',
      section: 'science',
      topic: 'sci-research-summaries',
      difficulty: 3,
      passageId: 'sci-research-1',
      stem: `Before Experiment 3, a student predicted that average dry mass would continue to increase as the daily light duration increased from 18 h to 24 h. Do the results of Experiment 3 support this prediction?`,
      choices: [
        'Yes; the dry mass at 24 h/day (60 mg) was greater than the dry mass at 12 h/day (55 mg).',
        'Yes; average height increased from 18 h/day to 24 h/day.',
        'No; the dry mass decreased from 66 mg at 18 h/day to 60 mg at 24 h/day.',
        'No; the dry mass was the same at 18 h/day and 24 h/day.',
      ],
      answer: 2,
      explanation: `Table 3 shows dry mass rising from 38 to 55 to 66 mg for 6, 12, and 18 h/day, then falling to 60 mg at 24 h/day. The prediction concerned the step from 18 to 24 h, and in that step dry mass went down, so the prediction is not supported. Choice A compares 24 h to the wrong row (12 h); choice B is false (height fell from 8.3 to 8.1 cm) and height was not what was predicted anyway; choice D misreads 66 and 60 as equal.`,
    },

    // ---------------- Passage IV: sci-research-2 ----------------
    {
      id: 'sci-r2-01',
      section: 'science',
      topic: 'sci-research-summaries',
      difficulty: 1,
      passageId: 'sci-research-2',
      stem: `According to the results of Experiment 1, as the temperature of the solutions increased, the time for the X to disappear:`,
      choices: ['increased only.', 'remained the same.', 'increased, then decreased.', 'decreased only.'],
      answer: 3,
      explanation: `Table 1 reads 124, 62, 31, 16, 8 s as temperature goes from 10 °C to 50 °C, so the time fell at every step. Remember that a shorter time means a faster reaction, so the reaction sped up with temperature. "Remained the same" describes Table 3 (HCl concentration), not Table 1.`,
    },
    {
      id: 'sci-r2-02',
      section: 'science',
      topic: 'sci-research-summaries',
      difficulty: 2,
      passageId: 'sci-research-2',
      stem: `Based on the results of Experiment 1, if a trial had been repeated at 45 °C, the time for the X to disappear would most likely have been:`,
      choices: ['less than 8 s.', 'between 8 s and 16 s.', 'between 16 s and 31 s.', 'greater than 31 s.'],
      answer: 1,
      explanation: `45 °C sits between the 40 °C row (16 s) and the 50 °C row (8 s) in Table 1, and the time decreases steadily, so the 45 °C result must be between 8 and 16 s. "Between 16 and 31" is the bracket for 35 °C; "less than 8" would require a temperature above 50 °C.`,
    },
    {
      id: 'sci-r2-03',
      section: 'science',
      topic: 'sci-reading-tables-and-graphs',
      difficulty: 1,
      passageId: 'sci-research-2',
      stem: `According to Table 2, each time the thiosulfate concentration was doubled, the time for the X to disappear:`,
      choices: ['doubled.', 'decreased by 62 s.', 'remained the same.', 'was cut in half.'],
      answer: 3,
      explanation: `Table 2 lists concentrations that double each row (0.025 → 0.050 → 0.10 → 0.20 M) with times 248 → 124 → 62 → 31 s. Each time is half the previous one, so doubling the concentration halved the time. The decrease in seconds is different each step (124, 62, 31), so "decreased by 62 s" is wrong; it only describes one step.`,
    },
    {
      id: 'sci-r2-04',
      section: 'science',
      topic: 'sci-research-summaries',
      difficulty: 3,
      passageId: 'sci-research-2',
      stem: `Which experiment provides the strongest evidence that the concentration of HCl has little effect on the rate of this reaction?`,
      choices: ['Experiment 1', 'Experiment 2', 'Experiment 3', 'None of the experiments tested HCl concentration.'],
      answer: 2,
      explanation: `Experiment 3 is the only one that varied HCl concentration (0.25 M to 2.0 M), and Table 3 shows the time barely moved: 64, 63, 62, 61 s. An eightfold increase in HCl changed the time by 3 s, so HCl concentration has little effect. Experiment 1 varied temperature and Experiment 2 varied thiosulfate concentration, with HCl fixed at 1.0 M in both, so neither can speak to HCl at all; choice D ignores Experiment 3.`,
    },
    {
      id: 'sci-r2-05',
      section: 'science',
      topic: 'sci-experimental-design',
      difficulty: 1,
      passageId: 'sci-research-2',
      stem: `In all three experiments, the dependent variable was the:`,
      choices: ['temperature of the solutions.', 'concentration of thiosulfate.', 'concentration of HCl.', 'time for the X to disappear.'],
      answer: 3,
      explanation: `The dependent variable is the quantity measured to see the effect, and in every experiment the students recorded the time until the X could no longer be seen. Temperature, thiosulfate concentration, and HCl concentration were each the independent variable in one experiment (1, 2, and 3 respectively) and were held constant in the others.`,
    },
    {
      id: 'sci-r2-06',
      section: 'science',
      topic: 'sci-reasoning-and-outside-knowledge',
      difficulty: 3,
      passageId: 'sci-research-2',
      stem: `Based on the results of Experiments 1 and 2, how did the time for the X to disappear with 0.20 M thiosulfate at 20 °C compare with the time with 0.10 M thiosulfate at 30 °C?`,
      choices: [
        'The 0.20 M, 20 °C time was about half as long.',
        'The 0.20 M, 20 °C time was about twice as long.',
        'The two times were approximately the same.',
        'The comparison cannot be made because the two trials were in different experiments.',
      ],
      answer: 2,
      explanation: `This takes two lookups. In Table 2 (Experiment 2, 20 °C), 0.20 M gives 31 s. In Table 1 (Experiment 1, 0.10 M), 30 °C gives 31 s. The times are identical: doubling the concentration had the same effect as raising the temperature by 10 °C. Choice D is a trap; the experiments share the same procedure and the same baseline trial (0.10 M at 20 °C, 62 s in both tables), so their results can be compared directly.`,
    },
    {
      id: 'sci-r2-07',
      section: 'science',
      topic: 'sci-approach-and-pacing',
      difficulty: 2,
      passageId: 'sci-research-2',
      stem: `Which of the following sets of conditions was tested in all three experiments?`,
      choices: [
        '0.10 M thiosulfate, 1.0 M HCl, 20 °C',
        '0.10 M thiosulfate, 1.0 M HCl, 30 °C',
        '0.20 M thiosulfate, 1.0 M HCl, 20 °C',
        '0.10 M thiosulfate, 2.0 M HCl, 20 °C',
      ],
      answer: 0,
      explanation: `The passage says the default conditions were 0.10 M thiosulfate, 1.0 M HCl, and 20 °C, and each experiment changed only one of these. So the 20 °C trial in Table 1, the 0.10 M trial in Table 2, and the 1.0 M HCl trial in Table 3 are all the same conditions, and all three report 62 s. The 30 °C trial appears only in Experiment 1, the 0.20 M trial only in Experiment 2, and the 2.0 M HCl trial only in Experiment 3.`,
    },

    // ---------------- Passage V: sci-research-3 ----------------
    {
      id: 'sci-r3-01',
      section: 'science',
      topic: 'sci-approach-and-pacing',
      difficulty: 1,
      passageId: 'sci-research-3',
      stem: `According to Table 1, which antibiotic was most effective against *E. coli*?`,
      choices: ['Ampicillin', 'Erythromycin', 'Streptomycin', 'Tetracycline'],
      answer: 3,
      explanation: `The passage says a larger zone of inhibition means a more effective antibiotic. Read down the E. coli column of Table 1: ampicillin 18, tetracycline 22, streptomycin 15, erythromycin 9 mm. Tetracycline has the largest zone. Ampicillin is the trap for anyone who reads the S. aureus column (where ampicillin's 24 mm is largest) instead.`,
    },
    {
      id: 'sci-r3-02',
      section: 'science',
      topic: 'sci-research-summaries',
      difficulty: 2,
      passageId: 'sci-research-3',
      stem: `According to Table 1, which disc produced a zone of inhibition more than twice as large against *S. aureus* as against *E. coli*?`,
      choices: ['Ampicillin', 'Tetracycline', 'Streptomycin', 'Erythromycin'],
      answer: 3,
      explanation: `Compare the two columns row by row. Erythromycin: 23 mm against S. aureus versus 9 mm against E. coli, and 23 is more than twice 9 (18). Ampicillin was also larger against S. aureus (24 vs 18) but not twice as large. Tetracycline (20 vs 22) and streptomycin (14 vs 15) were slightly smaller against S. aureus, not larger.`,
    },
    {
      id: 'sci-r3-03',
      section: 'science',
      topic: 'sci-experimental-design',
      difficulty: 1,
      passageId: 'sci-research-3',
      stem: `What was the most likely purpose of including a disc soaked in sterile water in every dish?`,
      choices: [
        'To confirm that the paper disc by itself does not inhibit bacterial growth',
        'To dilute the antibiotics so that the zones would not overlap',
        'To provide moisture that the bacteria need to grow',
        'To measure how quickly antibiotics diffuse through the gel',
      ],
      answer: 0,
      explanation: `The water disc is the control. It contains everything except the antibiotic, so if it produced a clear zone, the researchers would know the disc or the water was responsible rather than the drug. Its 0 mm zone in Table 1 shows the discs themselves do nothing, which lets the antibiotic zones be credited to the antibiotics. The other choices describe functions the water disc could not perform: it is separate from the antibiotic discs, the gel already contains nutrients and water, and a disc with no antibiotic cannot measure antibiotic diffusion.`,
    },
    {
      id: 'sci-r3-04',
      section: 'science',
      topic: 'sci-research-summaries',
      difficulty: 2,
      passageId: 'sci-research-3',
      stem: `Based on the results of Experiment 2, if a disc containing 160 µg of tetracycline had been tested against *E. coli*, the zone diameter would most likely have been closest to:`,
      choices: ['12 mm', '26 mm', '50 mm', '100 mm'],
      answer: 1,
      explanation: `Table 2 shows the zone growing quickly at first (11, 15, 20, 24 mm) and then almost stopping (24 to 25 mm when the dose doubled from 40 to 80 µg). Continuing that flattening trend, another doubling to 160 µg should add about a millimeter, giving roughly 26 mm. "50 mm" assumes the zone doubles with the dose, which the table rules out, and "12 mm" is below the value for 10 µg.`,
    },
    {
      id: 'sci-r3-05',
      section: 'science',
      topic: 'sci-reasoning-and-outside-knowledge',
      difficulty: 3,
      passageId: 'sci-research-3',
      stem: `Which of the following conclusions is best supported by the results of Experiment 2?`,
      choices: [
        'Zone diameter is directly proportional to the amount of tetracycline over the entire range tested.',
        'Increasing the amount of tetracycline beyond 40 µg produced little additional effect on E. coli.',
        'Tetracycline has no effect on E. coli at amounts below 20 µg.',
        'The zone diameter doubled each time the amount of tetracycline doubled.',
      ],
      answer: 1,
      explanation: `In Table 2, going from 40 to 80 µg raised the zone only from 24 to 25 mm, compared with a 4 mm gain from 20 to 40 µg, so extra drug beyond 40 µg did very little. Choice A and choice D both claim proportionality, but doubling from 5 to 10 µg went from 11 to 15 mm, nowhere near double. Choice C is contradicted by the 11 mm and 15 mm zones at 5 and 10 µg.`,
    },
    {
      id: 'sci-r3-06',
      section: 'science',
      topic: 'sci-reading-tables-and-graphs',
      difficulty: 2,
      passageId: 'sci-research-3',
      stem: `Based on Table 2, a disc containing 30 µg of tetracycline tested against *E. coli* would most likely produce a zone diameter:`,
      choices: ['between 15 mm and 20 mm.', 'between 20 mm and 24 mm.', 'between 24 mm and 25 mm.', 'greater than 25 mm.'],
      answer: 1,
      explanation: `30 µg lies between the 20 µg row (20 mm) and the 40 µg row (24 mm) of Table 2, so the zone should be between 20 and 24 mm. You can check this against Table 1, where the 30 µg tetracycline disc against E. coli gave 22 mm, right in that range. "Between 15 and 20" is the bracket for 10–20 µg.`,
    },
    {
      id: 'sci-r3-07',
      section: 'science',
      topic: 'sci-approach-and-pacing',
      difficulty: 1,
      passageId: 'sci-research-3',
      stem: `The question "Does the amount of tetracycline on a disc affect the size of the zone of inhibition against *E. coli*?" is best answered by the results of:`,
      choices: ['Experiment 1 only.', 'Experiment 2 only.', 'both Experiment 1 and Experiment 2.', 'neither experiment.'],
      answer: 1,
      explanation: `Only Experiment 2 varied the amount of tetracycline (5 to 80 µg); Experiment 1 used a single amount (30 µg) for every antibiotic and varied the antibiotic and the bacterium instead. So Experiment 2 alone addresses the dose question. Experiment 1 can tell you how tetracycline compares with other antibiotics, not how its dose matters.`,
    },

    // ---------------- Passage VI: sci-viewpoints-1 ----------------
    {
      id: 'sci-v1-01',
      section: 'science',
      topic: 'sci-conflicting-viewpoints',
      difficulty: 1,
      passageId: 'sci-viewpoints-1',
      stem: `Scientist 1's explanation for the walleye decline is based mainly on the claim that zebra mussels:`,
      choices: [
        'raised the temperature of the lake.',
        'removed the plankton that the small fish eaten by walleye depend on.',
        'were eaten by walleye and were toxic to them.',
        'attracted more anglers to the lake.',
      ],
      answer: 1,
      explanation: `Scientist 1 says each mussel filters about a liter of water per day, removing plankton, so the small fish that walleye eat became scarce and walleye starved. That is a food-chain argument. Warming belongs to Scientist 3 and angler pressure to Scientist 2, and no scientist claims walleye eat mussels.`,
    },
    {
      id: 'sci-v1-02',
      section: 'science',
      topic: 'sci-conflicting-viewpoints',
      difficulty: 2,
      passageId: 'sci-viewpoints-1',
      stem: `Which of the scientists use the increase in water clarity as part of their explanation for the decline?`,
      choices: ['Scientist 1 only', 'Scientist 2 only', 'Scientists 1 and 3', 'Scientists 2 and 3'],
      answer: 2,
      explanation: `Scientist 1 cites clearer water as evidence that mussels filtered out the plankton. Scientist 3 says clearer water lets sunlight reach deeper, warming the lake and removing the dim habitat walleye need. Scientist 2 never mentions clarity; that explanation rests on the boat ramp, permit sales, and the adult-versus-young pattern.`,
    },
    {
      id: 'sci-v1-03',
      section: 'science',
      topic: 'sci-conflicting-viewpoints',
      difficulty: 2,
      passageId: 'sci-viewpoints-1',
      stem: `Scientist 2 would most likely agree with which of the following statements?`,
      choices: [
        'Walleye are not affected by changes in water temperature.',
        'Reducing the number of adult walleye removed by anglers would allow the population to recover.',
        'Zebra mussels were the primary cause of the decline.',
        'Young walleye declined by a larger percentage than adult walleye.',
      ],
      answer: 1,
      explanation: `Scientist 2 blames overfishing and ends by stating that strict catch limits would allow the population to recover, which is choice B restated. Scientist 2 calls mussels and warming "added stress," not the primary cause, so C is wrong and A overstates the view. Choice D reverses the data Scientist 2 relies on: adults fell 80%, young fell 50%.`,
    },
    {
      id: 'sci-v1-04',
      section: 'science',
      topic: 'sci-conflicting-viewpoints',
      difficulty: 3,
      passageId: 'sci-viewpoints-1',
      stem: `Suppose a study of a nearby lake found that zebra mussels arrived in 2018 and the walleye population crashed over the following three years, even though fishing had been prohibited in that lake since 2010. This finding would most likely:`,
      choices: [
        'support the viewpoint of Scientist 1 and weaken the viewpoint of Scientist 2.',
        'support the viewpoint of Scientist 2 and weaken the viewpoint of Scientist 1.',
        'support the viewpoints of Scientists 1 and 2 equally.',
        'weaken the viewpoints of all three scientists.',
      ],
      answer: 0,
      explanation: `Scientist 2's explanation requires anglers removing adult fish; a crash in a lake with no fishing is something that view cannot explain, so it is weakened. Scientist 1 predicts that mussels alone can produce a crash within a few years and even cites other invaded lakes, so this is exactly the evidence that view predicts. The finding does not touch Scientist 3's warming argument one way or the other, so "weaken all three" is wrong.`,
    },
    {
      id: 'sci-v1-05',
      section: 'science',
      topic: 'sci-conflicting-viewpoints',
      difficulty: 2,
      passageId: 'sci-viewpoints-1',
      stem: `According to Scientist 3, walleye are best described as:`,
      choices: [
        'warm-water fish that hunt by sight in bright, shallow water.',
        'cool-water fish with light-sensitive eyes that hunt most successfully in dim water.',
        'fish that feed mainly on plankton filtered from the water.',
        'fish that reproduce during their first year of life.',
      ],
      answer: 1,
      explanation: `Scientist 3 opens with "walleye are cool-water fish with light-sensitive eyes; they hunt most successfully in dim water," and the whole argument follows from that: warming and clearer water destroy that habitat. Choice A describes the largemouth bass Scientist 3 names as competitors. Choice C confuses walleye with the small fish (and mussels) in Scientist 1's argument, and choice D contradicts Scientist 2's statement that walleye do not reproduce until age four or five.`,
    },
    {
      id: 'sci-v1-06',
      section: 'science',
      topic: 'sci-reasoning-and-outside-knowledge',
      difficulty: 3,
      passageId: 'sci-viewpoints-1',
      stem: `Which of the following findings, if true, would most strongly support the viewpoint of Scientist 3 over those of Scientists 1 and 2?`,
      choices: [
        'Between 2019 and 2022, the largemouth bass population in Lake Marrow rose sharply while the volume of cool, oxygen-rich deep water shrank each summer.',
        'Anglers\' catch records show that far more adult walleye were kept in 2019–2021 than in any earlier period.',
        'The small fish that walleye feed on became scarce in Lake Marrow after 2019.',
        'The number of fishing permits sold for Lake Marrow fell in 2022.',
      ],
      answer: 0,
      explanation: `Scientist 3 specifically predicts that warming shrinks the deep oxygen-rich zone and that warm-water competitors like largemouth bass thrive and eat young walleye. Choice A confirms both predictions and is not predicted by the mussel or fishing explanations. Choice B supports Scientist 2, and choice C supports Scientist 1 (food shortage, which Scientist 3 explicitly rejects). Choice D slightly weakens Scientist 2 but gives no positive evidence for Scientist 3.`,
    },
    {
      id: 'sci-v1-07',
      section: 'science',
      topic: 'sci-conflicting-viewpoints',
      difficulty: 2,
      passageId: 'sci-viewpoints-1',
      stem: `All three scientists would most likely agree with which of the following statements?`,
      choices: [
        'The adult walleye population of Lake Marrow declined sharply between 2019 and 2022.',
        'Zebra mussels were the main cause of the decline.',
        'Fishing had no effect on the walleye population.',
        'Walleye starved because plankton became scarce.',
      ],
      answer: 0,
      explanation: `The 80% decline in adults is stated as a fact in the introduction, and all three scientists set out to explain it, so all three accept it. Choices B and D are Scientist 1's view, which Scientists 2 and 3 reject (Scientist 3 says "not a shortage of food"). Choice C is too strong even for Scientists 1 and 3, who treat fishing as a minor or added stress rather than as having no effect.`,
    },
  ],
}
