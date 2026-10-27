import type { SectionContent } from './types'

export const reading: SectionContent = {
  id: 'reading',
  name: 'Reading',
  tagline: 'Four passages, 36 questions, 40 minutes. Every answer is in the text.',
  format: { questions: 36, minutes: 40 },

  overview: [
    { type: 'h', text: 'What the Reading section tests' },
    {
      type: 'p',
      text: `The Reading section gives you **4 passages** and **36 questions** in **40 minutes**. That is 9 questions per passage and about 10 minutes for each one. It is not a vocabulary test and it is not a memory test. It tests whether you can read something unfamiliar, figure out what the author is doing, and prove an answer by pointing at the page. Reading counts toward your Composite score, so a 4-point jump here moves your overall number just as much as a 4-point jump in Math.`,
    },
    {
      type: 'table',
      headers: ['Passage type', 'What it looks like', 'What they ask about'],
      rows: [
        ['Literary Narrative', 'A scene from a short story, novel, or memoir. A character wants something, and something shifts.', 'Characters\' feelings and motives, the narrator\'s attitude, what a line of dialogue reveals, how the mood changes.'],
        ['Social Science', 'A magazine-style article on history, economics, psychology, politics, or urban planning. Usually some numbers.', 'Main idea, specific facts and figures, cause and effect, the author\'s opinion of a policy or trend.'],
        ['Humanities', 'An essay about art, music, film, architecture, literature, or a personal reflection on a craft.', 'Author\'s purpose and tone, meaning of a vivid phrase, why a paragraph is included, what an anecdote illustrates.'],
        ['Natural Science', 'A clear explanation of a scientific question, often with one study described in detail.', 'Details of a method or finding, what a term means in context, what the evidence does and does not show.'],
      ],
    },
    {
      type: 'p',
      text: `One of the four slots is sometimes a **paired set**: two short passages (A and B) on the same topic by different authors, with a few questions on each one and a few that compare them. You will learn a specific order for handling those in the last lesson.`,
    },
    { type: 'h', text: 'Your pacing plan' },
    {
      type: 'list',
      items: [
        '**About 3 minutes reading, about 6 minutes answering, 1 minute of slack** per passage. If you are spending 6 minutes reading, you are reading too carefully.',
        '**Do the passages in your strongest order.** If you always score best on Natural Science and worst on Literary Narrative, start with science and end with fiction. The order on the test is arbitrary; your order should not be.',
        '**Check the clock at the end of each passage.** Four passages, four checkpoints: 10, 20, 30, 40 minutes. If you are more than 2 minutes behind at a checkpoint, make up the time by guessing faster on the hardest question of the next passage, not by skipping reading.',
        '**Never leave a blank.** There is no penalty for wrong answers. With 1 minute left, bubble something for every remaining question.',
      ],
    },
    { type: 'h', text: 'The strategies that are worth the most points' },
    {
      type: 'list',
      items: [
        '**Read for structure and attitude, not for details.** On the first pass you need to know what each paragraph is for and how the author feels about the subject. You do not need to remember the number of bus routes. You need to remember where that number is.',
        '**Map each paragraph in 3 to 5 words.** A scribble in the margin like "old method: banding, bad" takes 3 seconds and tells you exactly where to look later.',
        '**Go back to the text for every detail question.** Every time. Your memory of a passage you read 4 minutes ago is worse than you think, and the test writers know it.',
        '**The right answer is provable.** You should be able to put your finger on the sentence that makes the correct choice correct. If you cannot, you are guessing.',
        '**Eliminate extreme and absolute answers.** "Always," "never," "completely," "proves," "the only reason": authors of ACT passages almost never make claims that strong, so answers that do are usually wrong.',
        '**"In context" means substitute.** For vocabulary questions, cover the word, read the sentence, and ask what word belongs there. Then test each choice in the blank.',
      ],
    },
    {
      type: 'tip',
      text: `When two answers both seem right, find the one word that makes one of them wrong. The test is built so that exactly one choice survives a close reading of the passage. The difference is usually a single word: "most," "some," "because," "despite."`,
    },
    { type: 'h', text: 'Traps that catch strong readers' },
    {
      type: 'list',
      items: [
        '**True but not asked.** The choice says something the passage really does say, just not in answer to this question. Reread the stem before you commit.',
        '**Half right.** The first half of the choice is perfect; the second half quietly adds something the passage never said. Read every answer to the end.',
        '**Passage words out of context.** The choice recycles a phrase from the passage to look familiar, but the meaning is twisted. Familiar is not the same as correct.',
        '**Outside knowledge.** You may know a lot about jazz or bird migration. The question is what *this author* said. Answer from the page only.',
        '**Too broad or too narrow.** For main-idea questions, one wrong answer describes a single paragraph and another describes the entire field of study. The right one fits the whole passage and nothing more.',
      ],
    },
    {
      type: 'warning',
      text: `Do not reread the whole passage when you get stuck. A stuck question costs you 2 to 3 other questions. Pick the best remaining choice, mark the number, and keep moving. Come back only if time is left.`,
    },
    { type: 'h', text: 'Test-day checklist' },
    {
      type: 'steps',
      items: [
        'Before the section starts, decide your passage order. Write it in the margin as soon as you can see the passage types.',
        'For each passage: read the intro line (it tells you the genre and sometimes the setup), then read with a pencil, mapping each paragraph in a few words.',
        'Answer the questions that point you to a specific place first (line references, named paragraphs, quoted phrases). Then do main idea and tone questions, when the whole passage is fresh.',
        'For every question, find the proof in the text before choosing. Cross out choices as you kill them.',
        'Check the clock after each passage. Adjust, do not panic.',
        'With 1 minute left, fill in every remaining bubble.',
      ],
    },
  ],

  lessons: [
    {
      id: 'rd-approach-and-pacing',
      section: 'reading',
      title: 'The Reading Method and Pacing',
      summary: 'A repeatable way to read each passage in 3 minutes, map it, and get through all 36 questions without panicking.',
      minutes: 9,
      blocks: [
        { type: 'h', text: 'The method, in one sentence' },
        {
          type: 'p',
          text: `Read the whole passage once, quickly, for **what each paragraph does** and **how the author feels**, then answer the questions by going back to the text. That is it. Students lose points in two opposite ways: reading so slowly they run out of time, or skipping the reading and trying to answer from skimmed fragments. The method below lives in the middle.`,
        },
        {
          type: 'steps',
          items: [
            '**Read the intro line.** It tells you the genre and sometimes the topic ("Adapted from a memoir about growing up on a dairy farm"). That is free context.',
            '**Read the passage in about 3 minutes.** Do not slow down for details. Do slow down for the first and last sentence of each paragraph, and for any sentence where the author gives an opinion ("but," "however," "in fact," "I think").',
            '**Map each paragraph** with 3 to 5 words in the margin as you finish it. Not a summary, just a label: "why old maps failed," "grandpa\'s hands," "the 1994 interview."',
            '**Note the author\'s attitude** in one word at the end: admiring, skeptical, nostalgic, neutral, amused.',
            '**Answer the questions**, going back to the text every single time a question mentions a detail, a line, a paragraph, or a quoted word.',
          ],
        },
        { type: 'h', text: 'Paragraph mapping' },
        {
          type: 'p',
          text: `The map is the most valuable 20 seconds you will spend on a passage. It turns "somewhere in this 700-word thing" into "paragraph 4." It also forces you to notice structure: when you write "objection from seniors" next to one paragraph and "the compromise" next to the next, you have already understood the passage better than most test takers.`,
        },
        {
          type: 'example',
          prompt: `Map this paragraph in 3 to 5 words:\n\n"For most of the twentieth century, what scientists knew about bird migration came from a method that was simple, cheap, and almost comically inefficient. A researcher would catch a bird, clip a numbered aluminum band around its leg, and release it. If the bird was ever found again, the researcher learned two points on its journey. Everything in between was guesswork."`,
          solution: `A good map: **"old method: banding = 2 points only."** Notice what the label captures: the topic (banding), and the author's judgment (inefficient, guesswork). A question later asks "The passage suggests the main limitation of banding was..." and you know instantly where to look and roughly what the answer is: it only gave the start and end of the trip. What the map does *not* capture is fine. You do not need "twentieth century" or "aluminum" in your head; you need to know where they live.`,
        },
        {
          type: 'table',
          headers: ['Checkpoint', 'Where you should be', 'If you are behind'],
          rows: [
            ['10:00', 'Finished passage 1 (all 9 questions bubbled)', 'Nothing yet. One slow passage is normal.'],
            ['20:00', 'Finished passage 2', 'Guess on the 2 hardest questions of passage 3 after a 20-second attempt each.'],
            ['30:00', 'Finished passage 3', 'Read passage 4 in 2 minutes, do detail and line-reference questions first, guess the rest.'],
            ['38:00', 'Finishing passage 4', 'Bubble every blank now. Then use the last 2 minutes on the one question you were closest on.'],
          ],
        },
        { type: 'h', text: 'Which passage first?' },
        {
          type: 'p',
          text: `The passages always appear in the same genre order: Literary Narrative, Social Science, Humanities, Natural Science. You do not have to do them in that order. Take 3 or 4 timed practice sets and look at your accuracy by genre. Then start with your best genre and end with your worst. Two reasons: you bank the easy points while you are fresh, and if you run out of time, the questions you guess on are the ones you were most likely to miss anyway.`,
        },
        {
          type: 'tip',
          text: `Within a passage, do the questions in this order: (1) questions that name a paragraph, a line, or a quoted phrase, (2) detail questions you can find with a key word, (3) main idea, purpose, and tone questions last, once you have gone back to the passage several times and know it well.`,
        },
        { type: 'h', text: 'When you are running out of time' },
        {
          type: 'list',
          items: [
            '**With 5 minutes and one passage left:** read the first paragraph and the first sentence of every other paragraph (about 60 seconds). Do the questions that point to a specific place. Guess on main idea using what the first and last paragraphs say.',
            '**With 2 minutes left:** stop reading. Answer any vocabulary-in-context questions (they take 20 seconds each). Bubble the same letter for everything else.',
            '**With 1 minute left:** bubble. Blanks are zero; guesses are 25%.',
          ],
        },
        {
          type: 'warning',
          text: `Do not try to make up time by reading faster than you can understand. A passage you did not understand produces 9 guesses. A passage you read in 3 and a half minutes instead of 3 produces 7 or 8 right answers. The reading is where the points come from.`,
        },
        {
          type: 'example',
          prompt: `A question asks: "Which of the following best describes the organization of the passage?" The choices are (A) a problem is described, a concept is explained, a decision is narrated, and results are evaluated; (B) two cities are compared point by point; (C) a series of objections is raised and each one is refuted; (D) a personal anecdote is followed by general advice. Your paragraph map reads: "spaghetti map / coverage vs frequency / board asks residents / objections + compromise / new map launches / results numbers / losers / case study."`,
          solution: `This is where the map pays off. Read it top to bottom: problem (spaghetti map), concept (coverage vs frequency), decision (board asks, compromise, launch), results (numbers, losers, case study). That is choice **A**, almost word for word. B fails because only one city is discussed. C fails because objections appear in one paragraph and are met with a compromise, not refuted one by one. D fails because there is no personal anecdote. You answered an "organization" question in 15 seconds without rereading a word, because you built the map while reading.`,
        },
      ],
    },
    {
      id: 'rd-main-idea-and-purpose',
      section: 'reading',
      title: 'Main Idea and Author\'s Purpose',
      summary: 'Telling the topic from the main idea, naming what the author is trying to do, and reading tone from word choice.',
      minutes: 8,
      blocks: [
        { type: 'h', text: 'Topic is not main idea' },
        {
          type: 'p',
          text: `The **topic** is what the passage is about: bus networks, a jazz pianist, a boat. The **main idea** is what the author says about the topic: that a city improved its buses by choosing frequency over coverage; that the pianist's genius was in what she left out. A main idea is a full sentence with a verb. If your answer to "what is the main idea?" could be a title on a library shelf, it is a topic, not a main idea.`,
        },
        {
          type: 'example',
          prompt: `Read this opening and state the main idea in one sentence:\n\n"Every few months a headline announces that a great museum has 'returned' an object to the country where it was made, and the story is told as a simple act of justice. I have spent thirty years in such museums, and I want to complicate the story, not because the wrongs were not real but because the remedy is not as simple as the headline suggests."`,
          solution: `Topic: museums returning artifacts. Main idea: **the author argues that returning artifacts is more complicated than the headlines make it sound.** Notice how the author hands it to you. "I want to complicate the story" is the thesis, and "not because... but because..." tells you the author's exact position: the wrongs were real, the remedy is not simple. An answer choice saying "the author argues that no artifact should be returned" is too extreme; the author explicitly says the wrongs were real. An answer saying "the author describes the history of museum collecting" is a topic, not a claim.`,
        },
        { type: 'h', text: 'Purpose: what is the author doing?' },
        {
          type: 'p',
          text: `Purpose questions ask why the author wrote the passage (or a paragraph). The answer always starts with a verb. Learn to sort the verbs into families:`,
        },
        {
          type: 'list',
          items: [
            '**Inform / describe / explain:** the author presents something without taking a strong side. Most Natural Science passages.',
            '**Argue / persuade / challenge / defend:** the author takes a position and wants you to agree. Watch for "I think," "should," "in fact," rhetorical questions.',
            '**Reflect / recall / portray:** the author is telling a personal story or characterizing a person or place. Most Literary Narrative and some Humanities.',
            '**Evaluate / assess / weigh:** the author presents a thing and judges it, usually with pros and cons. Many Social Science passages.',
          ],
        },
        { type: 'h', text: 'Where the main idea hides' },
        {
          type: 'p',
          text: `Check three places, in order: the **last paragraph** (authors often state the point most clearly at the end), the **first paragraph** (especially its final sentence), and the **first sentence of each body paragraph**. If the first and last paragraphs agree on something, that something is the main idea. Fiction is different: there is rarely a stated thesis, so the main idea is usually the character's change, which you find by comparing the character at the start with the character at the end.`,
        },
        {
          type: 'tip',
          text: `Test each main-idea choice against two questions: "Does the whole passage support this?" and "Does this say more than the passage does?" The right answer passes both. A choice that only matches paragraph 3 fails the first. A choice that says the author "proves" something or calls a trend "the most important development" usually fails the second.`,
        },
        { type: 'h', text: 'Tone words you need to know' },
        {
          type: 'table',
          headers: ['Tone word', 'Means the author is...', 'Clues in the text'],
          rows: [
            ['admiring / appreciative', 'impressed by the subject', 'praise words, "remarkable," "genius," affectionate details'],
            ['skeptical', 'doubtful, not convinced', '"supposedly," "claims," questions without answers, "but" after each claim'],
            ['nostalgic / wistful', 'fondly missing the past', 'sensory memories, "I still remember," gentle sadness'],
            ['critical', 'finding fault', 'words like "failed," "ignored," "mistake," direct disagreement'],
            ['ambivalent', 'seeing both sides, unsure', '"on the other hand," "still," "and yet," praise followed by concern'],
            ['detached / objective', 'reporting without emotion', 'numbers, no "I," no judgment words'],
            ['amused / wry', 'gently poking fun', 'understatement, exaggeration, "almost comically"'],
          ],
        },
        {
          type: 'example',
          prompt: `What is the author's attitude toward the subject?\n\n"The results arrived faster than the board expected. Ridership rose eleven percent in the first year and twenty-six percent by the third. There were losers, though. About nine percent of former riders now had a longer walk to their nearest stop, and roughly a third of them said they rode less often."`,
          solution: `The first two sentences are positive and factual. The third sentence turns: "There were losers, though." Then the author gives the cost in the same precise way she gave the benefit. That combination, favorable but honest about downsides, is **"generally favorable but attentive to its costs."** Wrong answers: "uncritical enthusiasm" ignores the losers; "skeptical" ignores the clearly positive numbers; "neutral and purely statistical" ignores that the author chose to say "faster than the board expected," which is a judgment. The right tone word is almost always the moderate one that accounts for *everything* in the paragraph.`,
        },
        {
          type: 'warning',
          text: `Do not pick a main idea because it sounds smart or important. The test loves a choice that says something grand about "the human condition" or "modern society" when the passage is about one summer, one city, or one pianist. Stay the exact size of the passage.`,
        },
      ],
    },
    {
      id: 'rd-detail-and-locating',
      section: 'reading',
      title: 'Detail Questions and Finding the Spot',
      summary: 'How to locate the sentence a question is built on in under 15 seconds, and how to match it to a paraphrased answer.',
      minutes: 7,
      blocks: [
        { type: 'h', text: 'The easiest points on the section' },
        {
          type: 'p',
          text: `Detail questions ("According to the passage...," "The passage states that...," "The author mentions which of the following...") have answers that are sitting on the page in nearly the same words. The only way to miss them is to answer from memory. Students who go back to the text every time get these right at about 95%. Students who trust their memory get about 70%. Go back every time.`,
        },
        {
          type: 'steps',
          items: [
            '**Pull the lead word** from the stem: the most specific, least common word or number. In "According to the passage, the researchers recaptured how many birds?" the lead word is *recaptured*.',
            '**Use your paragraph map** to guess which paragraph. "Recaptured" belongs in the "the study" paragraph, not the "old banding method" paragraph.',
            '**Scan for the lead word**, not for meaning. Let your eye run down the paragraph looking for the shape of that word. Capitalized names, numbers, and unusual words are the fastest to find.',
            '**Read the full sentence around it**, plus the one before and after. The answer is often in the neighboring sentence.',
            '**Match the meaning to a choice.** The right choice usually paraphrases the passage; the wrong ones usually copy its words.',
          ],
        },
        { type: 'h', text: 'Lead words that work and lead words that do not' },
        {
          type: 'p',
          text: `Good lead words are rare in the passage: *Nova Scotia*, *1994*, *clamp*, *geolocator*. Bad lead words appear everywhere: *bird*, *music*, *city*, *the author*. If the stem only gives you common words, use the map instead and go to the paragraph whose label matches the idea. If the stem says "in the third paragraph," count paragraphs with your pencil; do not estimate.`,
        },
        {
          type: 'example',
          prompt: `Question: "According to the passage, the board responded to objections from low-density neighborhoods by..."\n\nText: "The board responded with a compromise: the new network would devote roughly seventy percent of its service hours to a grid of frequent routes and reserve the remaining thirty percent for coverage routes and an on-demand van service in the outer neighborhoods."`,
          solution: `Lead words: *objections*, *responded*, *compromise*. Scan, find "The board responded with a compromise," read the whole sentence. The answer is **keeping some coverage routes and adding an on-demand van service in outer neighborhoods.** Tempting wrong answers: "cutting the frequent routes to 30%" flips the numbers; "eliminating all coverage routes" is the opposite of what happened; "holding forty public meetings" is true (it is in a different paragraph) but it is not the *response to the objections*. That last one is the classic "true but not asked" trap.`,
        },
        { type: 'h', text: 'Paraphrase matching' },
        {
          type: 'p',
          text: `The ACT almost never copies the passage into the right answer. It rewords. "He could not finish it alone" becomes "the grandfather needed assistance." "Running so often that riders do not need a schedule" becomes "frequent enough that timetables were unnecessary." Your job is to translate the passage sentence into plain language in your head, then look for the choice that says the same plain thing. Meanwhile, wrong answers often *do* copy exact phrases, which makes them feel right and makes them dangerous.`,
        },
        {
          type: 'example',
          prompt: `Text: "The devices do not transmit; the data stays on the tag, which means the only way to read it is to catch the same bird again the following spring."\n\nQuestion: "The passage indicates that researchers could obtain data from a geolocator only by..."\n(A) downloading it by satellite  (B) recapturing the bird that carried it  (C) transmitting it to a base station  (D) finding the tag after it fell off`,
          solution: `Plain-language translation: *the tag does not send anything, so you have to catch the bird again.* That is **B**. Choices A and C use words that appear near the passage ("transmit," satellite from earlier) but say the opposite of what it says. D invents a detail. Notice how B does not use the word "catch" at all; it says "recapturing." Train yourself to match meanings, not words.`,
        },
        {
          type: 'warning',
          text: `When a detail question includes a number, check the number *and* what it is a number of. The passage may give you 11%, 26%, 18%, and 31% in one paragraph. The wrong answers will be the other numbers from that paragraph. Read the label on the number, not just the digits.`,
        },
        {
          type: 'tip',
          text: `"EXCEPT" and "NOT" questions ("The passage mentions all of the following EXCEPT...") are detail questions in disguise. Find three choices in the passage and cross them out. What is left is the answer. These take longer than they look, so if time is short, skip them and come back.`,
        },
        {
          type: 'list',
          items: [
            'Stem says "in the second paragraph": count paragraphs, go there, read the whole paragraph.',
            'Stem quotes a phrase: scan for the quoted words; they are in the passage exactly.',
            'Stem gives a name, date, or number: scan for it; those are the fastest lead words.',
            'Stem gives only an idea: use your map to pick the paragraph, then read it.',
          ],
        },
      ],
    },
    {
      id: 'rd-inference',
      section: 'reading',
      title: 'Inference: One Small Step from the Text',
      summary: 'What "reasonably inferred" actually means on the ACT, and how to avoid the leaps the test punishes.',
      minutes: 8,
      blocks: [
        { type: 'h', text: 'What an inference is (on this test)' },
        {
          type: 'p',
          text: `In everyday life, an inference can be a creative guess. On the ACT, an inference is a conclusion that the passage *forces* you to reach even though it never states it directly. The correct inference is one tiny step from the text, and every reader who reads carefully would take the same step. If your answer needs you to imagine something the passage does not mention, it is not an inference; it is a story you made up.`,
        },
        {
          type: 'list',
          items: [
            '**Supported:** The passage says the grandfather\'s fingers would not close around the clamp and that he handed it to the narrator. Inference: he was having trouble with his hands. Tiny step.',
            '**Not supported:** Inference: he has arthritis and has been hiding it from the family for years. Possible, but the passage never says it. Too big a step.',
            '**Not supported:** Inference: the narrator will become a professional boatbuilder. Nothing in the text points there at all.',
          ],
        },
        {
          type: 'example',
          prompt: `Text: "I complained to my mother that night. 'He doesn't even talk,' I said. 'He just points.' 'He's talking,' she said. 'You're not listening yet.'"\n\nQuestion: "It can reasonably be inferred that the narrator's mother believes the grandfather..."\n(A) is unable to speak clearly because of his age  (B) communicates in ways the narrator has not learned to notice  (C) is angry with the narrator  (D) would prefer to work alone`,
          solution: `The mother says "He's talking" (so he *is* communicating) and "You're not listening *yet*" (so the narrator will learn to). That is one small step to **B**. A invents a medical cause. C and D add emotions and preferences that no sentence supports. Notice that the correct answer is almost boring. On the ACT, the boring inference is usually the right one, because it is the only one that stays attached to the text.`,
        },
        { type: 'h', text: 'Recognizing inference stems' },
        {
          type: 'p',
          text: `These phrases tell you the answer is not stated word for word, but it is still provable: *"It can reasonably be inferred that..."*, *"The passage suggests..."*, *"The author implies..."*, *"The passage most strongly suggests..."*, *"Based on the passage, which of the following is most likely true?"*, *"The author would most likely agree that..."*. Treat them like detail questions with one extra step: find the sentences, then ask "what must be true if these sentences are true?"`,
        },
        { type: 'h', text: 'Staying one step from the text' },
        {
          type: 'steps',
          items: [
            '**Locate.** Use the lead word or map to find the one or two sentences the question is built on.',
            '**Paraphrase.** Say what those sentences mean in plain words.',
            '**Ask "so what follows?"** Take exactly one step: what does this mean about the character, the author\'s view, or the situation?',
            '**Check each choice against the text.** For every choice, ask "which sentence supports this?" If you cannot point to one, cross it out, even if it sounds plausible.',
            '**Prefer the modest choice.** Between a choice with "may," "some," "tends to" and one with "always," "all," "proves," the modest one wins almost every time.',
          ],
        },
        {
          type: 'example',
          prompt: `Text: "One reviewer complained that she played 'like someone paying for each note.' She kept the clipping, friends said, and quoted it with satisfaction."\n\nQuestion: "The passage suggests that Avery regarded the reviewer's remark as..."\n(A) a cruel insult she never forgave  (B) an accurate description of a quality she valued in her own playing  (C) proof that critics did not understand jazz  (D) a reason to add more notes to her solos`,
          solution: `What do we know? She *kept* it and quoted it *with satisfaction*. People do not keep and happily repeat insults; they keep compliments, or criticisms they secretly agree with. One step: she took "paying for each note" as a description of exactly what she was trying to do. That is **B**. A contradicts "satisfaction." C and D are things she might have thought, but nothing in the text points to them; they require you to supply a whole attitude the passage never shows.`,
        },
        {
          type: 'warning',
          text: `Outside knowledge is the number one cause of wrong inference answers. You may know that frequent bus service is expensive, or that jazz critics in the 1960s were tough. Irrelevant. The only evidence that counts is the evidence on this page. If an answer feels right because of something you learned elsewhere, be suspicious of it.`,
        },
        {
          type: 'tip',
          text: `For "the author would most likely agree" questions, go to the places where the author gives an opinion (sentences with "but," "I think," "should," "in fact," or a judgment word) and pick the choice that restates one of those opinions in slightly more general terms. The right answer is the author's own view in a new outfit.`,
        },
      ],
    },
    {
      id: 'rd-vocabulary-in-context',
      section: 'reading',
      title: 'Vocabulary in Context',
      summary: 'The substitution method for "most nearly means" questions, including common words with sneaky second meanings.',
      minutes: 7,
      blocks: [
        { type: 'h', text: 'These are not vocabulary questions' },
        {
          type: 'p',
          text: `"As it is used in the third paragraph, the word *settled* most nearly means..." looks like a vocabulary question. It is actually a reading question. The ACT almost always picks a common word with several meanings and asks which one the author is using here. The dictionary definition you memorized is usually one of the wrong answers. The correct answer is whatever fits the sentence.`,
        },
        {
          type: 'steps',
          items: [
            '**Find the word in the passage** and read the full sentence, plus the one before it.',
            '**Cover the word** with your finger and read the sentence as a fill-in-the-blank.',
            '**Supply your own word** for the blank before you look at the choices. Keep it simple: "decided," "ordinary," "removing."',
            '**Test each choice in the blank.** Reread the sentence with the choice substituted in. One will sound right and keep the author\'s meaning. The others will sound off or change the meaning.',
          ],
        },
        {
          type: 'example',
          prompt: `Text: "'It doesn't,' my grandfather said, when I finally asked. 'Not yet.' He said it the way he said most things, as if the subject had already been settled and he was only reminding me."\n\nQuestion: "As it is used in this paragraph, the word *settled* most nearly means..."\n(A) paid  (B) decided  (C) calmed  (D) landed`,
          solution: `Cover "settled": "as if the subject had already been ______ and he was only reminding me." Your own word: *decided*, *resolved*. Now test. "The subject had already been paid"? No. "Decided"? Yes, and it matches "only reminding me." "Calmed"? A subject does not get calmed. "Landed"? That is the boat meaning (the hull "settled onto the water" later in the story), which is exactly the trap: the same word appears elsewhere in the passage with a different meaning. Answer: **B**. Always go to the *specific* sentence the question names.`,
        },
        { type: 'h', text: 'Words with more than one meaning' },
        {
          type: 'p',
          text: `The test picks words whose everyday meaning differs from their meaning in the sentence. The wrong answers are built from the meanings you did *not* need. Here are some frequent offenders:`,
        },
        {
          type: 'table',
          headers: ['Word', 'Common meaning', 'Other meanings the ACT uses'],
          rows: [
            ['settle', 'calm down', 'decide; come to rest; pay; establish a home'],
            ['coverage', 'news reporting', 'area reached or served; insurance'],
            ['plain / plainly', 'ugly, simple', 'clearly, without decoration; a flat landscape'],
            ['austere', 'strict, harsh', 'stripped down, without ornament'],
            ['edit', 'fix errors', 'cut and select material'],
            ['comically', 'in a funny way', 'to an absurd degree ("comically inefficient")'],
            ['claim', 'say something is true', 'a right to something ("one claimant among many")'],
            ['arrest', 'take into custody', 'stop or hold ("an arresting image")'],
          ],
        },
        {
          type: 'example',
          prompt: `Text: "She had begun a ballad everyone in the room knew, one of those standards that has been recorded so many times it is less a song than a piece of furniture."\n\nQuestion: "The author's description of the ballad as 'a piece of furniture' most nearly suggests that the tune was..."\n(A) rarely performed  (B) so familiar it had become ordinary and unnoticed  (C) difficult to play  (D) heavy and structurally complex`,
          solution: `This is figurative language, so do not ask what furniture *is*; ask what furniture is *like* in the way the author means. The clue is right before it: "recorded so many times." Furniture is something you live with and stop noticing. So: **B**. A contradicts "recorded so many times." C and D take "furniture" literally (hard to move, heavy), which is the standard trap for figurative questions. The author's point is about familiarity, not weight.`,
        },
        { type: 'h', text: 'Figurative language and tone-based word questions' },
        {
          type: 'p',
          text: `Some questions ask what a phrase "most strongly suggests" or what a word "conveys." These are vocabulary questions with a tone layer. Ask two things: what the phrase literally pictures, and what feeling the author attaches to it. "Like someone paying for each note" literally pictures stinginess; the author's feeling, given the rest of the paragraph, is admiration for discipline. The right answer catches both.`,
        },
        {
          type: 'tip',
          text: `If two choices both fit the blank, reread the sentence *after* the word. Authors usually extend or explain their meaning in the next sentence, and that extension kills one of the two choices.`,
        },
        {
          type: 'warning',
          text: `Never pick the choice that is the "hardest" or most impressive word. The ACT does not reward you for knowing *ameliorate*. It rewards you for noticing that "plainly" in "she played the melody once, plainly" means "simply, without ornament," not "obviously." Context beats vocabulary every time.`,
        },
      ],
    },
    {
      id: 'rd-structure-and-paired-passages',
      section: 'reading',
      title: 'Structure, Function, and Paired Passages',
      summary: 'Why a paragraph or sentence is there, how passages are organized, and the exact order for attacking a paired set.',
      minutes: 10,
      blocks: [
        { type: 'h', text: 'Function questions: why is this here?' },
        {
          type: 'p',
          text: `"The author includes the question beginning 'If the budget stays the same' primarily to..." is not asking what the sentence says. It is asking what job the sentence does for the paragraph around it. Every function answer starts with a verb, and the verb is the whole game. Learn the common ones:`,
        },
        {
          type: 'list',
          items: [
            '**Introduce** a topic, example, or counterargument that follows.',
            '**Illustrate / support** a claim made just before it, with an example or data.',
            '**Qualify / concede** a point: admit a limitation before moving on ("Five is a small number, and the researchers were careful to say so").',
            '**Contrast / transition** from one idea to its opposite ("But by the early seventies...").',
            '**Emphasize** a point already made, often with a vivid image or a repetition.',
            '**Foreshadow / set up** something that will matter later (common in fiction).',
          ],
        },
        {
          type: 'example',
          prompt: `Text: "Five is a small number, and the researchers were careful to say so. But all five told the same story. Each bird had left the coast in early October, flown southeast over the Atlantic, and reached the Caribbean two to three days later without stopping."\n\nQuestion: "The first sentence of this paragraph primarily serves to..."\n(A) undermine the study's conclusions  (B) acknowledge a limitation before explaining why the results were still convincing  (C) criticize the researchers for poor planning  (D) introduce a competing study`,
          solution: `Read the sentence *and the one after it*. "Five is a small number" is a concession; "But all five told the same story" is the turn. Concede, then turn: that is **B**. A goes too far; the author clearly thinks the results are convincing. C invents a criticism; the researchers were "careful," which is praise. D has no competing study anywhere. For function questions, the sentence after the one you are asked about is almost always the key to the verb.`,
        },
        { type: 'h', text: 'Common organization patterns' },
        {
          type: 'table',
          headers: ['Pattern', 'How to spot it', 'Typical genre'],
          rows: [
            ['Problem, solution, results', 'Old way fails, new idea introduced, outcome measured', 'Social Science, Natural Science'],
            ['Chronological narrative', 'Time words: "the first week," "by August," "years later"', 'Literary Narrative, memoir'],
            ['Claim and counterclaim', '"Some say... but"; the author presents a view, then complicates it', 'Humanities essays, paired passages'],
            ['Frame story', 'Opens with a specific scene, zooms out to a general idea, returns to the scene at the end', 'Humanities, memoir'],
            ['Compare and contrast', 'Two things (two methods, two musicians, two eras) weighed against each other', 'Any'],
          ],
        },
        { type: 'h', text: 'Paired passages: the order that works' },
        {
          type: 'p',
          text: `One of the four slots may be a paired set: Passage A and Passage B on the same topic, usually by authors who disagree or emphasize different things. The questions come in three groups: a few on A only, a few on B only, and a few comparing both. The mistake most students make is reading both passages, then starting the questions, by which point the two authors have blurred together.`,
        },
        {
          type: 'steps',
          items: [
            '**Read Passage A** (about 90 seconds). Map it. Write one word for the author\'s position at the bottom: "keep," "return," "both."',
            '**Answer the Passage A questions.** The question stems tell you which ones they are ("In Passage A..."). Do them now while A is fresh.',
            '**Read Passage B.** Map it. Write its position. Note the one or two specific points where B pushes back on A.',
            '**Answer the Passage B questions.**',
            '**Answer the comparison questions last.** For each one, find the sentence in A *and* the sentence in B that it depends on. Comparison answers must be provable from both.',
          ],
        },
        {
          type: 'example',
          prompt: `Passage A (a curator): "When we send a bronze to a national government, we are not reuniting it with its makers. We are choosing one claimant among many."\n\nPassage B (a historian): "The argument that modern nations are not the 'real' heirs of ancient makers proves too much. By that logic, no one is the heir, and the object should belong to whoever happened to carry it off."\n\nQuestion: "How would the author of Passage B most likely respond to the claim in Passage A that returning an object means 'choosing one claimant among many'?"`,
          solution: `This is the comparison question in its purest form: B is literally answering A. Find A's claim (modern nations are not the makers), then find B's response (that argument "proves too much," because it would leave the object with whoever took it). The right answer paraphrases B's rebuttal: **B would argue that A's logic, taken seriously, would mean the object belongs to whoever carried it off.** Wrong answers include things *A* might say ("propose shared custody") and positions neither author holds ("deny that borders have changed"). On comparison questions, always check which passage each answer choice actually comes from.`,
        },
        {
          type: 'tip',
          text: `For "both authors would agree that..." questions, look for the moderate, shared ground. Authors who disagree about the big question usually concede the same small things: here, both say that *some* objects were acquired legitimately and need not be returned. Extreme choices ("all objects should be returned") fail because at least one author rejects them.`,
        },
        { type: 'h', text: 'Point of view' },
        {
          type: 'p',
          text: `Point-of-view questions ask who is telling the story and how that shapes what you see. A first-person narrator ("I") can only report what she notices, so what she *fails* to notice is often the point: the narrator in the boat story does not see her grandfather's hands until the third week, and the author wants you to feel that delay. In nonfiction, point of view means the author's vantage: a curator writing about museums has an insider's stake, and the test may ask how that position shapes the argument. Always ask: who is speaking, what do they know, and what do they want?`,
        },
        {
          type: 'warning',
          text: `On comparison questions, the most common wrong answer describes the relationship backwards: it says A responds to B when B was written in response to A, or it says both agree when only one holds the view. Before you choose, say the relationship out loud in your head: "B pushes back on A's point about X, but both admit Y." Then find the choice that matches.`,
        },
      ],
    },
  ],

  passages: [
    {
      id: 'rd-literary-1',
      section: 'reading',
      kind: 'prose-fiction',
      title: 'The Boat in the Garage',
      intro: 'LITERARY NARRATIVE: Adapted from a short story published in 2021.',
      text: `The rowboat had been upside down on sawhorses in my grandfather's garage for as long as I could remember, which meant it had been there at least sixteen years and probably closer to thirty. It was the kind of object you stop seeing. I had walked past it a thousand times on the way to the refrigerator he kept out there, the one stocked with root beer, and I had never once wondered whether it floated.

"It doesn't," my grandfather said, when I finally asked, the first week of that summer. "Not yet." He said it the way he said most things, as if the subject had already been settled and he was only reminding me.

I had not wanted to spend June in his garage. My friends were lifeguarding, or pretending to lifeguard, at the lake, and my mother had decided, in the quiet, unarguable way she had, that I would spend three afternoons a week helping Grandpa Ellis "with his projects." "He has never had a granddaughter to teach," she said, which was true and explained nothing. I understood this to be a punishment for something, though no one would tell me what.

The first afternoon he handed me a scraper and showed me how to find the seams between the planks. Old paint came off in curls. Underneath, the cedar was gray and dry and, in a few places, soft enough to press a thumbnail into. He marked those places with a carpenter's pencil and said nothing about them. We worked for two hours, mostly in silence, and when I left my shoulders ached and my hair was full of white dust.

I complained to my mother that night. "He doesn't even talk," I said. "He just points."

"He's talking," she said. "You're not listening yet."

By the second week I could tell a good plank from a bad one without his pencil. He taught me to steam a new strip of cedar in a length of pipe over a camp stove until it would bend without cracking, and then to clamp it, still hot, against the curve of the hull. Every time I rushed, the wood split. Every time I waited the extra minute he wanted me to wait, it held. He never said "I told you so." He only nodded, once, which was somehow worse and better at the same time.

It was during the third week that I noticed his hands. He was fitting a plank and his fingers would not close around the clamp. He tried twice, then set the clamp on the bench and flexed his hand and looked at it the way you might look at a tool that had let you down. Then he picked up the clamp again and held it out to me.

"You do it," he said. "You've got the feel for it now."

I took it. I did not say anything, because I understood, suddenly and completely, that I was not there as a punishment. I was there because the boat needed to be finished and he could not finish it alone, and because he would not ask anyone for help in words. He had asked my mother instead, and she had sent me, and neither of them had told me, because telling me would have made it a favor, and he did not want a favor. He wanted a boat.

We finished it in August. The last thing we did was paint the name on the stern, which he let me choose. I picked *Root Beer*, and he laughed, a real laugh, the first I had heard from him all summer.

The morning we carried it down to the lake, he let me take the bow. The water was cold around my ankles and then around my knees, and the hull settled onto the surface and stayed there, and nothing leaked. He climbed in slowly, one hand on my shoulder, and sat facing me with the oars across his lap.

"Well," he said, and looked out at the water, and did not finish the sentence. He did not need to. I had learned, by then, to listen.`,
    },
    {
      id: 'rd-social-1',
      section: 'reading',
      kind: 'social-science',
      title: 'The Grid That Moved a City',
      intro: 'SOCIAL SCIENCE: Adapted from a 2023 magazine feature on urban transportation.',
      text: `For most of its history, the bus map of Harlow looked like a plate of spaghetti dropped from a great height. Forty-one routes wound through the city, many of them tracing streetcar lines that had been torn out before World War II. Some routes ran every fifteen minutes; others ran twice an hour, or once, or only on weekdays before six. A rider who wanted to get from the east side to the hospital district could do it, in theory, but the trip required two transfers and a schedule that few people could memorize. In 2016, fewer than four percent of Harlow's commuters used the bus. The system cost the city thirty-eight million dollars a year.

The problem, as the planners who eventually redrew the map saw it, was not a lack of buses. It was a question of what the buses were for. Harlow's network had been designed around *coverage*, the principle that every neighborhood deserves a bus stop within a short walk, even if the bus that serves that stop comes rarely. The alternative is a network designed around *frequency*: fewer routes, running so often that riders do not need a schedule at all. Coverage networks reach more places. Frequency networks reach fewer places, but they make the places they do reach genuinely usable without a car.

Every transit agency in the country sits somewhere on this spectrum, and most of them sit there by accident, having inherited routes from decades of small decisions. What made Harlow unusual was that in 2017 its transit board decided to choose on purpose. The board hired a consulting firm, held forty public meetings, and asked residents a blunt question: If the budget stays the same, would you rather have a bus near your house that comes every forty minutes, or a bus a few blocks farther away that comes every ten?

The answer was not unanimous, and it was not painless. Residents of several low-density neighborhoods on the city's southern edge objected, correctly, that under a frequency-first plan their stops would disappear. Advocates for seniors pointed out that "a few blocks farther" means something different to a nineteen-year-old than to an eighty-year-old with a cane. The board responded with a compromise: the new network would devote roughly seventy percent of its service hours to a grid of frequent routes and reserve the remaining thirty percent for coverage routes and an on-demand van service in the outer neighborhoods.

The new map launched in the spring of 2019. In place of forty-one tangled routes, there were nineteen: twelve frequent lines arranged in a rough grid, running every ten to twelve minutes from early morning until late evening, and seven coverage routes. The grid was the key. On a grid, a rider can reach almost any point by making at most one transfer, and because the lines are frequent, a transfer costs a few minutes of waiting rather than a half hour.

The results arrived faster than the board expected. Weekday ridership rose eleven percent in the first year and twenty-six percent by the end of the third, even as ridership fell in most comparable cities. The share of jobs in Harlow that a typical resident could reach by bus within forty-five minutes rose from eighteen percent to thirty-one percent. Operating costs barely changed, because the agency was running roughly the same number of bus-hours; it had simply moved them.

There were losers. A survey conducted in 2021 found that about nine percent of former riders had a longer walk to their nearest stop, and roughly a third of that group said they now rode less often. The on-demand van service, intended to fill the gap, was popular but expensive per trip and chronically short of drivers.

Still, the Harlow redesign has become something of a case study. Transit planners from more than a dozen cities have visited, and at least four have launched similar overhauls. What they come to see is less a map than a decision: a city that stopped treating its bus network as an inheritance and started treating it as a choice.`,
    },
    {
      id: 'rd-humanities-1',
      section: 'reading',
      kind: 'humanities',
      title: 'What the Silence Is For',
      intro: 'HUMANITIES: Adapted from a 2020 collection of essays on American music.',
      text: `The first time I heard the pianist Lorraine Avery play, I thought she had forgotten the tune. It was a small club, late on a Tuesday, and she had begun a ballad everyone in the room knew, one of those standards that has been recorded so many times it is less a song than a piece of furniture. She played the melody once, plainly, the way you would read a sentence aloud to make sure you had it right. Then she stopped. Not a pause: a stop. Four full beats of nothing, with the bass player holding a single note and the drummer's brushes barely moving. In the silence a man at the bar set down his glass, and the sound of it was shocking.

Then she came back in, a half step away from where she had left, and the room exhaled.

I have thought about those four beats for years, because they explain something about improvisation that the usual descriptions miss. We tend to talk about jazz soloists as if they were fountains: the music pours out, and the only question is how much. The great players are described in terms of speed, range, inventiveness, the sheer quantity of ideas. Avery, who died in 2018 after a career that never quite reached the fame her peers thought she deserved, was interested in a different question. Not how much to play, but how much to leave out.

"The silence is not the absence of music," she told an interviewer in 1994. "The silence is where the listener plays." She meant this literally. A rest in the middle of a phrase forces the ear to supply what is missing, to guess at where the line is going, and when the player returns, the listener is rewarded or surprised. Either way, the listener has participated. A solo with no rests, Avery argued, leaves the audience nothing to do but admire.

This was not a popular position among younger musicians in the 1960s, when she came up. The dominant style then prized density: more notes, faster, harmonies stacked until the chords groaned under the weight. Avery could play that way, and on a few early recordings she did. But by the early seventies she had stripped her playing down to something that critics, not always kindly, called "austere." One reviewer complained that she played "like someone paying for each note." She kept the clipping, friends said, and quoted it with satisfaction.

What the reviewer heard as stinginess was in fact a kind of editing. Avery practiced by recording herself, then listening back and marking, on a legal pad, every phrase she thought she could have left out. Her practice sessions were subtraction. By the time she sat down in front of an audience, she had already removed most of what a less disciplined player would have included, and what remained had the weight of the things that survive a fire.

There is a tendency to romanticize this, to make her sound like a sage rather than a working musician who took the gigs she could get. She would have hated that. She was funny, impatient, and famously exact about money. But the discipline was real, and it was hers, and it produced something the fountains could not: performances in which the listener leaned forward rather than back.

I went back to that club many times after that first Tuesday. I never heard her stop for four beats again. The silences were always there, but each one was shaped to its moment, some barely a breath, some long enough to make you wonder. She was not repeating a trick. She was asking, every night, how little she could play and still say what she meant, and the answer was never the same twice.`,
    },
    {
      id: 'rd-natural-1',
      section: 'reading',
      kind: 'natural-science',
      title: 'Lighter Than a Paper Clip',
      intro: 'NATURAL SCIENCE: Adapted from a 2022 article in a popular science magazine.',
      text: `For most of the twentieth century, what scientists knew about bird migration came from a method that was simple, cheap, and almost comically inefficient. A researcher would catch a bird in a fine net, clip a numbered aluminum band around its leg, and release it. If the bird was ever caught again, or found dead, and if whoever found it bothered to report the number, the researcher learned two points on the bird's journey: where it started and where it ended up. Everything in between was guesswork. Of the millions of songbirds banded in North America since the 1920s, fewer than one in a hundred has ever been recovered.

The obvious solution, a tracking device the bird could carry, ran into an equally obvious problem. A satellite transmitter small enough for a goose weighs about twenty grams. A warbler weighs twelve. The rule of thumb among ornithologists is that a tag should not exceed about three to five percent of a bird's body mass, or it begins to change the behavior it is meant to record. For the smallest migrants, that meant a device of half a gram or less, lighter than a paper clip.

The breakthrough came not from better satellites but from a cleverer kind of ignorance. A light-level geolocator does not know where it is. It only records, every few minutes, how bright the sky is. From that single stream of numbers, a computer can later reconstruct the times of sunrise and sunset each day. The length of the day gives latitude; the midpoint of the day, compared to a clock, gives longitude. The result is a rough position, accurate to perhaps a hundred and fifty kilometers, which is useless for finding a bird in a forest and remarkable for finding out which ocean it crossed. The smallest geolocators now weigh about three-tenths of a gram.

The study that made the method famous involved the blackpoll warbler, a bird about the size of a thumb that breeds in the spruce forests of Canada and New England and winters in northern South America. Birders had long suspected that blackpolls did something extraordinary in the fall. They fattened up on the Atlantic coast until they nearly doubled in weight, and then they vanished. They were not seen moving down the coast. Occasionally one would turn up on a ship far out at sea. The suspicion was that the birds flew directly over the open ocean, a trip of more than two thousand kilometers with nowhere to land, but no one could prove it, and plenty of scientists considered a nonstop flight of that length physically impossible for a bird so small.

A team led by ornithologist Priya Natarajan set out to test it. In the summer of 2019 they fitted forty blackpolls at two breeding sites, one in Nova Scotia and one in Vermont, with geolocators weighing half a gram, attached by a thin harness looped around the legs. The birds then left on their own schedule. The devices do not transmit; the data stays on the tag, which means the only way to read it is to catch the same bird again the following spring, at the same site, after it has flown to South America and back. The team recaptured five.

Five is a small number, and the researchers were careful to say so. But all five told the same story. Each bird had left the coast in late September or early October, flown southeast over the Atlantic, and reached the Caribbean two to three days later without stopping. The shortest flight was about twenty-two hundred kilometers; the longest, nearly twenty-seven hundred. One bird's light record showed sixty-two consecutive hours over water.

The finding settled a debate that had lasted half a century, but it also opened new questions. How do the birds know when a weather system will give them a tailwind? Why do they risk the ocean in fall but return in spring along the land route through Florida? And how many other "impossible" journeys are being made every year by birds too small, until recently, to be asked?`,
    },
    {
      id: 'rd-paired-1',
      section: 'reading',
      kind: 'humanities',
      title: 'Who Owns the Past?',
      intro: 'HUMANITIES: Passage A is adapted from a 2022 essay by a museum curator. Passage B is adapted from a 2023 essay by a historian of archaeology. Both address whether large museums should return artifacts to the countries they came from.',
      text: `**Passage A**

Every few months a headline announces that a great museum has "returned" an object to the country where it was dug up, carved, or cast, and the story is told as a simple act of justice: a wrong undone. I have spent thirty years working in such museums, and I want to complicate the story, not because the wrongs were not real but because the remedy is not as simple as the headline suggests.

Begin with the word *return*. It implies that the object is going home, to the people who made it. But the people who made a four-thousand-year-old vessel are not the people who live on that land today, any more than I am the ancient inhabitant of the patch of ground under my apartment. Modern borders were drawn long after most of these objects were made. When we send a bronze to a national government, we are not reuniting it with its makers. We are choosing one claimant among many.

There is also the question of what a museum is for. The large encyclopedic museums were built on an idea that still seems to me worth defending: that a person in one city should be able to walk through the art of the whole world in an afternoon, and in doing so come to feel that none of it is foreign. A museum that holds only its own nation's objects teaches the opposite lesson. It says that culture belongs to blood and soil.

None of this means every object should stay where it is. Things that were stolen outright, or taken in war, or acquired by fraud, should go back, and many have. But the current enthusiasm for emptying the galleries treats every acquisition as theft and every return as healing. I would rather we did the slower work: shared custody, long-term loans, joint exhibitions, and honest labels that tell visitors exactly how an object came to be in the room. That is harder than a headline. It is also more likely to last.

**Passage B**

Defenders of the great museums like to say that their collections belong to "all of humanity." It is a generous phrase. It is also, when you look at who actually gets to stand in front of the objects, mostly untrue. The visitor who can see the whole world in an afternoon is a visitor who can afford a plane ticket to London or Paris or New York. For a schoolchild in the country the objects came from, the art of her own ancestors is a photograph in a textbook.

The argument that modern nations are not the "real" heirs of ancient makers proves too much. By that logic, no one is the heir, and the object should belong to whoever happened to carry it off. The museums did not, after all, apply that logic to themselves. They acquired these things on the explicit grounds that they were the heritage of specific places; the labels said so. It is only now, when the places ask for them back, that the heritage has become everyone's.

I do not think every object must be returned, and I am wary of arguments that treat a museum as a crime scene. The history of collecting is tangled, and some objects were bought fairly or rescued from destruction. But the burden of proof has been on the wrong side for a century. A museum that cannot show how it came to own something should not assume that silence means consent.

What I want is not empty galleries. It is a reversal of the default. Let the institutions that hold the objects begin from the assumption that the communities of origin have the stronger claim, and then make the case, object by object, for why a particular piece should stay. Some of those cases will succeed. Many will not. Either way, the conversation will finally be taking place on the right terms, with the people who were left out of it for so long sitting at the table rather than reading about it afterward.`,
    },
  ],

  questions: [
    // ---------- rd-literary-1 ----------
    {
      id: 'rd-lit-01',
      section: 'reading',
      topic: 'rd-main-idea-and-purpose',
      difficulty: 1,
      passageId: 'rd-literary-1',
      stem: 'The passage is best described as:',
      choices: [
        'an account of an ongoing conflict between a mother and her teenage daughter.',
        'an argument that teenagers benefit from learning traditional crafts from their elders.',
        'a technical description of the steps involved in restoring a wooden boat.',
        "a narrator's recollection of a summer that changed her understanding of her grandfather.",
      ],
      answer: 3,
      explanation: `The whole passage moves from the narrator's resentment ("I had not wanted to spend June in his garage") to her realization in the clamp scene and the final line, "I had learned, by then, to listen." That arc is choice D. Choice B is too broad and preachy; the narrator never argues a general point. Choice C describes only the details in paragraphs 4 and 7, not the point of the story. Choice A invents a conflict; the mother's role is small and quiet.`,
    },
    {
      id: 'rd-lit-02',
      section: 'reading',
      topic: 'rd-detail-and-locating',
      difficulty: 1,
      passageId: 'rd-literary-1',
      stem: 'According to the passage, the narrator learned to bend new strips of cedar by:',
      choices: [
        'soaking them in the lake overnight.',
        'scoring them with a carpenter\'s pencil.',
        'clamping them cold against the hull and waiting.',
        'steaming them in a length of pipe over a camp stove.',
      ],
      answer: 3,
      explanation: `In the paragraph beginning "By the second week," the grandfather teaches her "to steam a new strip of cedar in a length of pipe over a camp stove until it would bend without cracking." That is choice D. Choice C is backwards: the strips are clamped "still hot," not cold. The carpenter's pencil (B) was used earlier to mark soft spots, not to bend wood. Nothing in the passage mentions soaking (A).`,
    },
    {
      id: 'rd-lit-03',
      section: 'reading',
      topic: 'rd-inference',
      difficulty: 2,
      passageId: 'rd-literary-1',
      stem: 'It can reasonably be inferred that, at the start of the summer, the narrator believed she was sent to the garage because:',
      choices: [
        'her grandfather had specifically asked for her.',
        'she was being punished for something.',
        'her friends were all away at the lake.',
        'she had shown an interest in boats.',
      ],
      answer: 1,
      explanation: `The third paragraph states, "I understood this to be a punishment for something, though no one would tell me what." Choice B restates that directly. Choice A is what she figures out later, in the paragraph beginning "I took it," so it is the opposite of her initial belief. Choice C is a detail about her friends, not the reason she gives. Choice D contradicts her first line about never wondering whether the boat floated.`,
    },
    {
      id: 'rd-lit-04',
      section: 'reading',
      topic: 'rd-vocabulary-in-context',
      difficulty: 2,
      passageId: 'rd-literary-1',
      stem: 'As it is used in the second paragraph, the word *settled* most nearly means:',
      choices: ['paid.', 'calmed.', 'decided.', 'landed.'],
      answer: 2,
      explanation: `The sentence reads, "as if the subject had already been settled and he was only reminding me." A subject that has been "settled" is one that has been decided or resolved, so C fits. Choice D is the trap: later in the passage "the hull settled onto the surface," where the word does mean "came to rest," but the question asks about the second paragraph. "Paid" (A) and "calmed" (B) do not make sense with "the subject."`,
    },
    {
      id: 'rd-lit-05',
      section: 'reading',
      topic: 'rd-approach-and-pacing',
      difficulty: 2,
      passageId: 'rd-literary-1',
      stem: 'Which of the following best describes the organization of the passage?',
      choices: [
        "a chronological account of one summer that traces the narrator's changing attitude toward her grandfather",
        "a series of flashbacks to different periods of the narrator's childhood, arranged by theme rather than by time",
        'a point-by-point comparison between the restored rowboat and a newer boat the family later buys',
        'a general argument about what families owe one another, followed by a single supporting example',
      ],
      answer: 0,
      explanation: `The passage moves forward in time with clear markers ("the first week," "The first afternoon," "By the second week," "the third week," "We finished it in August," "The morning we carried it down"), and it opens with the narrator's indifference and closes with her understanding. That is A. There are no flashbacks (B), no second boat (C), and no stated argument (D); the story shows rather than argues.`,
    },
    {
      id: 'rd-lit-06',
      section: 'reading',
      topic: 'rd-inference',
      difficulty: 3,
      passageId: 'rd-literary-1',
      stem: 'The narrator\'s realization in the paragraph beginning "I took it" is best summarized as:',
      choices: [
        'her grandfather had intended to finish the boat alone but changed his mind when he saw her skill.',
        'her mother had punished her for a reason that she still did not understand.',
        'her grandfather needed help he would not ask for directly and had quietly arranged it through her mother.',
        'her grandfather had decided to give her the boat as a gift at the end of the summer.',
      ],
      answer: 2,
      explanation: `The paragraph spells it out: he "could not finish it alone," he "would not ask anyone for help in words," he "had asked my mother instead," and "neither of them had told me, because telling me would have made it a favor." Choice C captures all of that. Choice A contradicts "could not finish it alone." Choice B is what she thought before the realization, which she now rejects ("I was not there as a punishment"). Choice D is never suggested; she chooses the boat's name, but no one gives it to her.`,
    },
    {
      id: 'rd-lit-07',
      section: 'reading',
      topic: 'rd-structure-and-paired-passages',
      difficulty: 3,
      passageId: 'rd-literary-1',
      stem: 'The mother\'s reply, "He\'s talking. You\'re not listening yet," primarily serves to:',
      choices: [
        "reject the narrator's complaint and foreshadow a change in how she understands her grandfather.",
        "show that the mother shares the narrator's frustration with the grandfather's silence.",
        'explain that the grandfather has a medical condition that makes speech difficult.',
        'introduce doubt about whether the boat will ever be finished.',
      ],
      answer: 0,
      explanation: `The mother rejects the complaint ("He's talking") and the word "yet" points ahead to a time when the narrator will listen, which is exactly where the story ends: "I had learned, by then, to listen." That makes A correct. Choice B is the opposite of what the mother says. Choice C invents a condition the passage never mentions; the only physical detail is about his hands, not his speech. Choice D has nothing to do with the exchange.`,
    },
    {
      id: 'rd-lit-08',
      section: 'reading',
      topic: 'rd-vocabulary-in-context',
      difficulty: 2,
      passageId: 'rd-literary-1',
      stem: 'In the first paragraph, the statement that the boat "was the kind of object you stop seeing" most nearly means that the boat:',
      choices: [
        'was hidden behind other items in the garage.',
        'was kept in a part of the garage that was too dark to see.',
        'had been damaged beyond recognition.',
        'had become so familiar that it went unnoticed.',
      ],
      answer: 3,
      explanation: `The surrounding sentences explain the phrase: the boat had been there "for as long as I could remember," and the narrator "had walked past it a thousand times" without wondering about it. Familiarity made it invisible, which is D. Choices A and B take "stop seeing" literally, as if the boat were physically hidden, but she walks past it constantly. Choice C is contradicted by the fact that it is clearly recognizable as a rowboat.`,
    },
    {
      id: 'rd-lit-09',
      section: 'reading',
      topic: 'rd-detail-and-locating',
      difficulty: 1,
      passageId: 'rd-literary-1',
      stem: 'Which of the following events happens last in the passage?',
      choices: [
        'The narrator chooses a name for the boat.',
        "The grandfather's fingers fail to close around the clamp.",
        'The narrator notices soft spots in the cedar planks.',
        'The grandfather rests a hand on the narrator\'s shoulder.',
      ],
      answer: 3,
      explanation: `The passage is told in order. Soft spots in the cedar appear on "the first afternoon" (C). The clamp incident happens "during the third week" (B). The naming happens when they "finished it in August" (A). The hand on the shoulder comes in the final scene at the lake, "The morning we carried it down," so D is last.`,
    },

    // ---------- rd-social-1 ----------
    {
      id: 'rd-soc-01',
      section: 'reading',
      topic: 'rd-main-idea-and-purpose',
      difficulty: 1,
      passageId: 'rd-social-1',
      stem: 'The main purpose of the passage is to:',
      choices: [
        'describe how one city deliberately redesigned its bus network and what resulted.',
        'argue that every city should abandon coverage-based transit in favor of frequency.',
        'trace the history of streetcar lines in American cities before World War II.',
        "criticize Harlow's transit board for ignoring the needs of senior citizens.",
      ],
      answer: 0,
      explanation: `The passage walks through Harlow's old network, the board's decision, the compromise, the launch, the results, and the costs. That is a description of one redesign and its outcome, choice A. Choice B is too strong; the author reports a compromise, not a universal rule. Choice C is a single detail from the first paragraph. Choice D is contradicted by the compromise, which the board made partly in response to senior advocates.`,
    },
    {
      id: 'rd-soc-02',
      section: 'reading',
      topic: 'rd-detail-and-locating',
      difficulty: 1,
      passageId: 'rd-social-1',
      stem: 'According to the passage, before the redesign, the share of Harlow commuters who used the bus was:',
      choices: ['under four percent.', 'eleven percent.', 'eighteen percent.', 'twenty-six percent.'],
      answer: 0,
      explanation: `The first paragraph states, "In 2016, fewer than four percent of Harlow's commuters used the bus." The other numbers all appear in the passage but measure different things: eleven and twenty-six percent are ridership *increases* after the redesign, and eighteen percent is the share of *jobs* reachable by bus before the change. Always check what a number is a number of.`,
    },
    {
      id: 'rd-soc-03',
      section: 'reading',
      topic: 'rd-vocabulary-in-context',
      difficulty: 1,
      passageId: 'rd-social-1',
      stem: 'As it is used in the second paragraph, the word *coverage* most nearly refers to:',
      choices: [
        'the number of passengers a single bus can carry.',
        'the principle that every neighborhood should have a nearby bus stop.',
        'news reporting about the transit system.',
        'insurance protecting the agency against accidents.',
      ],
      answer: 1,
      explanation: `The author defines the word in the same sentence: "coverage, the principle that every neighborhood deserves a bus stop within a short walk, even if the bus that serves that stop comes rarely." That is B. Choices C and D are everyday meanings of "coverage" that do not fit a sentence about network design. Choice A confuses coverage with capacity, which the passage never discusses.`,
    },
    {
      id: 'rd-soc-04',
      section: 'reading',
      topic: 'rd-approach-and-pacing',
      difficulty: 2,
      passageId: 'rd-social-1',
      stem: 'Which of the following best describes how the passage is organized?',
      choices: [
        'A problem is described, a key concept is explained, a decision is narrated, and the results are evaluated.',
        'Two cities with different transit systems are compared point by point.',
        'A series of objections to a plan is raised, and each objection is refuted in turn.',
        'A personal anecdote about riding the bus is followed by general advice to planners.',
      ],
      answer: 0,
      explanation: `Paragraph 1 is the problem (the "spaghetti" map), paragraph 2 explains coverage versus frequency, paragraphs 3 through 5 narrate the board's decision and the launch, and paragraphs 6 through 8 weigh the results, including the losers. That is choice A. Only one city is examined in detail (B). Objections appear in one paragraph and are answered with a compromise, not refuted one at a time (C). There is no personal anecdote (D).`,
    },
    {
      id: 'rd-soc-05',
      section: 'reading',
      topic: 'rd-inference',
      difficulty: 2,
      passageId: 'rd-social-1',
      stem: 'The passage suggests that the main reason the grid design made trips faster was that:',
      choices: [
        'buses on the new routes were permitted to drive at higher speeds.',
        'most riders no longer needed to transfer at all.',
        'the agency added a large number of new buses to the fleet.',
        'riders needed at most one transfer, and a transfer meant only a few minutes of waiting.',
      ],
      answer: 3,
      explanation: `The fifth paragraph explains: "On a grid, a rider can reach almost any point by making at most one transfer, and because the lines are frequent, a transfer costs a few minutes of waiting rather than a half hour." That is D. Choice B overstates it; the passage says at most one transfer, not none. Choice C is contradicted by the sixth paragraph, which says the agency ran "roughly the same number of bus-hours." Nothing mentions speed limits (A).`,
    },
    {
      id: 'rd-soc-06',
      section: 'reading',
      topic: 'rd-structure-and-paired-passages',
      difficulty: 2,
      passageId: 'rd-social-1',
      stem: 'The author includes the question beginning "If the budget stays the same" primarily to:',
      choices: [
        'explain why operating costs rose after the redesign.',
        'suggest that the board had already decided on a frequency-first plan.',
        'criticize residents who did not attend the public meetings.',
        'show that the board presented the decision to residents as a direct tradeoff.',
      ],
      answer: 3,
      explanation: `The question follows the sentence about the board choosing "on purpose" and holding forty public meetings; it shows the board putting the coverage-versus-frequency tradeoff to residents in plain terms, which is D. Choice B reads intent into the question that the passage never supports; the next paragraph shows real disagreement and a compromise. Choice C has no basis. Choice A is wrong because costs "barely changed."`,
    },
    {
      id: 'rd-soc-07',
      section: 'reading',
      topic: 'rd-inference',
      difficulty: 3,
      passageId: 'rd-social-1',
      stem: 'Based on the passage, which group most likely had the strongest reason to oppose a frequency-first plan?',
      choices: [
        'residents of dense neighborhoods near the center of the city',
        'transit planners visiting from other cities',
        "residents of low-density neighborhoods on the city's southern edge",
        'commuters traveling to the hospital district',
      ],
      answer: 2,
      explanation: `The fourth paragraph says residents of "low-density neighborhoods on the city's southern edge objected, correctly, that under a frequency-first plan their stops would disappear." Losing your stop is the strongest reason to object, so C is the answer. Dense central neighborhoods (A) are where frequent grid lines concentrate, so they gain. Visiting planners (B) came to admire the redesign. Hospital commuters (D) are mentioned only as an example of how hard the old system was.`,
    },
    {
      id: 'rd-soc-08',
      section: 'reading',
      topic: 'rd-main-idea-and-purpose',
      difficulty: 3,
      passageId: 'rd-social-1',
      stem: "The author's attitude toward the Harlow redesign is best described as:",
      choices: [
        'uncritical enthusiasm.',
        'skepticism that it accomplished anything meaningful.',
        'generally favorable but attentive to its costs.',
        'strict neutrality, with no evaluation offered.',
      ],
      answer: 2,
      explanation: `The author reports strong gains ("faster than the board expected," ridership up twenty-six percent) and then devotes a full paragraph to the "losers" and the struggling van service, before calling the redesign "something of a case study." Praise plus honest accounting equals C. Choice A ignores the losers paragraph. Choice B ignores the positive results. Choice D ignores judgment words like "faster than the board expected" and "the grid was the key."`,
    },
    {
      id: 'rd-soc-09',
      section: 'reading',
      topic: 'rd-detail-and-locating',
      difficulty: 2,
      passageId: 'rd-social-1',
      stem: 'The passage indicates that operating costs barely changed after the redesign because:',
      choices: [
        'the agency eliminated the on-demand van service.',
        'increased ridership paid for the purchase of new buses.',
        'the agency ran about the same number of bus-hours, reorganized onto different routes.',
        'the consulting firm agreed to work without a fee.',
      ],
      answer: 2,
      explanation: `The sixth paragraph says costs "barely changed, because the agency was running roughly the same number of bus-hours; it had simply moved them." That is C. Choice A is contradicted by the seventh paragraph, where the van service still exists. Choice B invents new buses the passage never mentions. Choice D invents a detail about the consultants.`,
    },

    // ---------- rd-humanities-1 ----------
    {
      id: 'rd-hum-01',
      section: 'reading',
      topic: 'rd-main-idea-and-purpose',
      difficulty: 1,
      passageId: 'rd-humanities-1',
      stem: 'The passage as a whole is best described as:',
      choices: [
        'an appreciation of a musician whose approach centered on what she chose to leave out.',
        'a step-by-step guide to improvising over jazz standards.',
        "a complete biography of Lorraine Avery from childhood to death.",
        'a complaint about audiences who fail to appreciate live music.',
      ],
      answer: 0,
      explanation: `The author opens with a memory of Avery's silence, explains her philosophy ("how much to leave out"), describes her subtractive practice, and closes by praising performances that made listeners "lean forward." That is an appreciation, choice A. Choice B is too technical; no method is taught. Choice C overstates the scope; only a few career details appear. Choice D misreads the single detail about the man at the bar.`,
    },
    {
      id: 'rd-hum-02',
      section: 'reading',
      topic: 'rd-vocabulary-in-context',
      difficulty: 2,
      passageId: 'rd-humanities-1',
      stem: 'The author\'s description of the ballad as "less a song than a piece of furniture" most nearly suggests that the tune was:',
      choices: [
        'rarely performed in small clubs.',
        'so familiar that it had become ordinary and unnoticed.',
        'unusually difficult to play.',
        'heavy and complicated in its structure.',
      ],
      answer: 1,
      explanation: `The phrase follows "recorded so many times," and furniture is something you live with and stop noticing, so the comparison points to familiarity: choice B. Choice A contradicts "recorded so many times." Choices C and D take "furniture" literally (heavy, hard to handle), the classic trap on figurative-language questions. The author's point is about how ordinary the tune had become, which makes Avery's treatment of it more striking.`,
    },
    {
      id: 'rd-hum-03',
      section: 'reading',
      topic: 'rd-detail-and-locating',
      difficulty: 1,
      passageId: 'rd-humanities-1',
      stem: 'According to the passage, Avery practiced by:',
      choices: [
        'playing with younger musicians who favored a denser style.',
        'transcribing solos by other pianists.',
        'memorizing as many standards as possible.',
        'recording herself and marking the phrases she could have left out.',
      ],
      answer: 3,
      explanation: `The paragraph beginning "What the reviewer heard" says Avery "practiced by recording herself, then listening back and marking, on a legal pad, every phrase she thought she could have left out." That is D. Choice A borrows the younger musicians from a different paragraph, where they are a contrast, not practice partners. Choices B and C are never mentioned.`,
    },
    {
      id: 'rd-hum-04',
      section: 'reading',
      topic: 'rd-inference',
      difficulty: 2,
      passageId: 'rd-humanities-1',
      stem: 'It can reasonably be inferred that Avery kept the reviewer\'s clipping because she:',
      choices: [
        'was deeply hurt by the criticism and could not let it go.',
        'intended to confront the reviewer in person.',
        'regarded the criticism as an accurate description of something she valued.',
        'planned to change her style in response.',
      ],
      answer: 2,
      explanation: `She "quoted it with satisfaction," and the next paragraph explains that what the reviewer called stinginess "was in fact a kind of editing" she practiced deliberately. Keeping and happily quoting a remark means she agreed with it, so C. Choice A contradicts "satisfaction." Choice B adds a confrontation the passage never hints at. Choice D is wrong because the passage shows her keeping the stripped-down style for decades.`,
    },
    {
      id: 'rd-hum-05',
      section: 'reading',
      topic: 'rd-structure-and-paired-passages',
      difficulty: 2,
      passageId: 'rd-humanities-1',
      stem: 'The author introduces the image of soloists as "fountains" primarily to:',
      choices: [
        'praise the technical speed and range of the greatest jazz pianists.',
        "describe the sound of Avery's early recordings from the 1960s.",
        "characterize the conventional view of soloists that Avery's approach departed from.",
        'explain how the musicians in a small jazz club are typically arranged.',
      ],
      answer: 2,
      explanation: `The third paragraph says "We tend to talk about jazz soloists as if they were fountains," then contrasts that with Avery, who "was interested in a different question." The fountain is the usual view, set up so Avery can be the exception: choice C. Choice A takes the praise at face value when the author is actually questioning it. Choice B is wrong; her early recordings are discussed later, and only briefly. Choice D is unrelated.`,
    },
    {
      id: 'rd-hum-06',
      section: 'reading',
      topic: 'rd-approach-and-pacing',
      difficulty: 2,
      passageId: 'rd-humanities-1',
      stem: 'The passage is organized primarily around:',
      choices: [
        "one remembered performance, which frames a discussion of Avery's ideas and is returned to at the end.",
        "a chronological survey of Avery's recordings from her debut in the 1960s to her death in 2018.",
        'a comparison of three pianists who took different approaches to silence in their solos.',
        'a series of interviews with the musicians who played alongside Avery in small clubs.',
      ],
      answer: 0,
      explanation: `The passage opens on "The first time I heard" Avery at the club, moves into her ideas and practice, and closes with "I went back to that club many times after that first Tuesday." That is a frame structure built around one performance, choice A. No recordings are listed (B), no other pianists are named (C), and only one interview quotation appears, from Avery herself (D).`,
    },
    {
      id: 'rd-hum-07',
      section: 'reading',
      topic: 'rd-inference',
      difficulty: 3,
      passageId: 'rd-humanities-1',
      stem: 'The author\'s statement "I never heard her stop for four beats again" most strongly supports the idea that Avery:',
      choices: [
        'lost confidence in using silence after that first performance.',
        'shaped each silence to its particular moment rather than repeating a device.',
        'stopped performing ballads in small clubs.',
        'eventually adopted the denser style of her peers.',
      ],
      answer: 1,
      explanation: `The sentences right after the quoted line explain it: "The silences were always there, but each one was shaped to its moment... She was not repeating a trick." So the four-beat stop never recurred because every silence was made fresh, choice B. Choice A contradicts "The silences were always there." Choices C and D add facts the passage never states; the final paragraph describes her still playing with restraint.`,
    },
    {
      id: 'rd-hum-08',
      section: 'reading',
      topic: 'rd-vocabulary-in-context',
      difficulty: 3,
      passageId: 'rd-humanities-1',
      stem: 'As it is used in the paragraph beginning "What the reviewer heard," the word *editing* most nearly means:',
      choices: [
        'correcting mistakes in written sheet music.',
        'publishing critical reviews of other musicians.',
        'rearranging the order of songs in a performance.',
        'deliberately removing material to strengthen what remains.',
      ],
      answer: 3,
      explanation: `The paragraph defines the word through examples: marking "every phrase she thought she could have left out," practice sessions that "were subtraction," and having "removed most of what a less disciplined player would have included." Editing here is cutting to improve, choice D. Choice A is the everyday meaning, but no sheet music is involved. Choices B and C do not fit a paragraph about phrases within a solo.`,
    },
    {
      id: 'rd-hum-09',
      section: 'reading',
      topic: 'rd-main-idea-and-purpose',
      difficulty: 2,
      passageId: 'rd-humanities-1',
      stem: 'The author\'s main purpose in the paragraph beginning "There is a tendency to romanticize" is to:',
      choices: [
        "admit that accounts of Avery's discipline have been greatly exaggerated.",
        "criticize Avery for being impatient and preoccupied with money.",
        "caution against turning Avery into a legend while insisting that her discipline was genuine.",
        'argue that Avery was a more important musician than any of the "fountains."',
      ],
      answer: 2,
      explanation: `The paragraph warns against making Avery "sound like a sage," notes that "She would have hated that," and then pivots: "But the discipline was real, and it was hers." Warning plus affirmation is choice C. Choice A takes only the first half. Choice B treats the author's affectionate details (funny, impatient, exact about money) as criticism, which they are not. Choice D overstates; the author says her playing produced something the fountains could not, not that she was more important.`,
    },

    // ---------- rd-natural-1 ----------
    {
      id: 'rd-nat-01',
      section: 'reading',
      topic: 'rd-main-idea-and-purpose',
      difficulty: 1,
      passageId: 'rd-natural-1',
      stem: 'The main purpose of the passage is to:',
      choices: [
        "explain how tiny light-level trackers allowed researchers to confirm a small songbird's ocean crossing.",
        'argue that leg banding should no longer be used in migration research.',
        'describe the complete life cycle of the blackpoll warbler.',
        'compare the accuracy of satellite transmitters with that of GPS devices.',
      ],
      answer: 0,
      explanation: `The passage moves from the limits of banding, to the weight problem, to how geolocators work, to the blackpoll study that "settled a debate." That is choice A. Choice B is too strong; the author calls banding inefficient but never argues for abandoning it. Choice C is far too broad; only the fall migration is covered. Choice D names GPS, which the passage never mentions.`,
    },
    {
      id: 'rd-nat-02',
      section: 'reading',
      topic: 'rd-detail-and-locating',
      difficulty: 1,
      passageId: 'rd-natural-1',
      stem: 'According to the passage, a light-level geolocator records:',
      choices: [
        "the bird's exact position, transmitted by satellite.",
        'how bright the sky is, at regular intervals.',
        "the bird's heart rate during flight.",
        'the speed and direction of the wind.',
      ],
      answer: 1,
      explanation: `The third paragraph states that a geolocator "does not know where it is. It only records, every few minutes, how bright the sky is." That is B. Choice A describes a satellite transmitter, which the passage says is too heavy for a warbler, and the geolocator explicitly does not transmit. Choices C and D are never mentioned.`,
    },
    {
      id: 'rd-nat-03',
      section: 'reading',
      topic: 'rd-detail-and-locating',
      difficulty: 2,
      passageId: 'rd-natural-1',
      stem: 'The passage indicates that of the forty blackpolls fitted with geolocators, the number the team recaptured the following spring was:',
      choices: ['five.', 'twelve.', 'twenty-two.', 'forty.'],
      answer: 0,
      explanation: `The fifth paragraph ends, "The team recaptured five," and the next paragraph begins, "Five is a small number." Twelve is the weight in grams of a warbler, twenty-two hundred is the shortest flight in kilometers, and forty is the number of birds originally tagged. All of those numbers appear nearby, which is why you must read the label on the number, not just the digits.`,
    },
    {
      id: 'rd-nat-04',
      section: 'reading',
      topic: 'rd-inference',
      difficulty: 2,
      passageId: 'rd-natural-1',
      stem: 'The passage most strongly suggests that the main limitation of leg banding was that it:',
      choices: [
        'caused injuries to the legs of the small birds that wore the bands.',
        'was too expensive for most research programs to carry out on a large scale.',
        "revealed only two points on a bird's journey, and only when a band happened to be recovered.",
        'could be used only on birds as large as geese, not on small songbirds.',
      ],
      answer: 2,
      explanation: `The first paragraph says banding yielded "two points on the bird's journey... Everything in between was guesswork," and that "fewer than one in a hundred" banded birds has ever been recovered. Put together, that is C. Choice B contradicts "simple, cheap." Choice A is never mentioned. Choice D confuses banding with satellite transmitters, which are the ones limited by bird size.`,
    },
    {
      id: 'rd-nat-05',
      section: 'reading',
      topic: 'rd-vocabulary-in-context',
      difficulty: 2,
      passageId: 'rd-natural-1',
      stem: 'As it is used in the third paragraph, the phrase "a cleverer kind of ignorance" most nearly means that the geolocator:',
      choices: [
        'was designed by researchers with little formal training in electronics.',
        'is used mainly by amateur birdwatchers rather than by professional scientists.',
        'fails more often than a satellite transmitter does under the same conditions.',
        'succeeds by recording one simple measurement rather than trying to know its own location.',
      ],
      answer: 3,
      explanation: `The sentences that follow explain the phrase: the device "does not know where it is. It only records... how bright the sky is," and from that a computer later works out the position. The "ignorance" is the device's simplicity, and the "cleverness" is getting location out of it anyway: choice D. Choices A and B read "ignorance" as a description of people, not the device. Choice C is contradicted by the passage calling the method a "breakthrough."`,
    },
    {
      id: 'rd-nat-06',
      section: 'reading',
      topic: 'rd-approach-and-pacing',
      difficulty: 2,
      passageId: 'rd-natural-1',
      stem: 'Which of the following best describes the structure of the passage?',
      choices: [
        "An old method's limits are described, a new tool is explained, one study is detailed, and open questions are raised.",
        'Several migratory bird species are listed in order of body size, from the largest to the smallest.',
        'Two scientists debate, point by point, whether a nonstop ocean crossing is possible for a songbird.',
        "A researcher's career is narrated from her first field season through to her retirement.",
      ],
      answer: 0,
      explanation: `Paragraph 1 is banding's limits, paragraphs 2 and 3 are the weight problem and the geolocator solution, paragraphs 4 through 6 are the blackpoll study, and paragraph 7 is the open questions. That matches A exactly. No list of species appears (B), the "debate" is mentioned only in passing and is not staged between two people (C), and Natarajan appears in just one paragraph (D).`,
    },
    {
      id: 'rd-nat-07',
      section: 'reading',
      topic: 'rd-structure-and-paired-passages',
      difficulty: 3,
      passageId: 'rd-natural-1',
      stem: 'The statement "Five is a small number, and the researchers were careful to say so" primarily functions to:',
      choices: [
        "undermine the study's conclusions by questioning the size of its sample.",
        'acknowledge a limitation before explaining why the results were nonetheless convincing.',
        'criticize the researchers for poor planning during their field season.',
        'introduce a competing study that used a much larger sample of birds.',
      ],
      answer: 1,
      explanation: `The very next sentence is "But all five told the same story," followed by the consistent flight data. Conceding the small sample and then turning to the strength of the evidence is choice B. Choice A goes too far; the author then says the finding "settled a debate." Choice C misreads "careful," which is praise. Choice D invents a second study that never appears.`,
    },
    {
      id: 'rd-nat-08',
      section: 'reading',
      topic: 'rd-inference',
      difficulty: 3,
      passageId: 'rd-natural-1',
      stem: 'Based on the passage, which of the following did skeptical scientists most likely consider "physically impossible" before the study?',
      choices: [
        'a warbler nearly doubling its weight before migration',
        'a warbler flying more than two thousand kilometers over open ocean without stopping',
        'a warbler being spotted on a ship far out at sea',
        'a warbler returning north in spring along a land route through Florida',
      ],
      answer: 1,
      explanation: `The fourth paragraph says "plenty of scientists considered a nonstop flight of that length physically impossible for a bird so small," right after describing "a trip of more than two thousand kilometers with nowhere to land." That is B. Choice A (fattening) and choice C (seen on ships) are observations the passage treats as established, not disputed. Choice D is the spring land route, which no one doubted.`,
    },
    {
      id: 'rd-nat-09',
      section: 'reading',
      topic: 'rd-vocabulary-in-context',
      difficulty: 1,
      passageId: 'rd-natural-1',
      stem: 'As it is used in the fifth paragraph, the word *harness* most nearly refers to:',
      choices: [
        'a device that captures energy from the bird\'s movement.',
        'the fine net used to catch the birds.',
        'a thin strap system used to attach the tag to the bird.',
        'the cage in which birds were held before release.',
      ],
      answer: 2,
      explanation: `The sentence says the geolocators were "attached by a thin harness looped around the legs," so the harness is the strap that holds the tag on: choice C. Choice A borrows the "harness energy" meaning, which does not fit "looped around the legs." The net (B) is mentioned in the first paragraph for a different purpose, and no cage (D) appears anywhere.`,
    },

    // ---------- rd-paired-1 ----------
    {
      id: 'rd-pair-01',
      section: 'reading',
      topic: 'rd-main-idea-and-purpose',
      difficulty: 1,
      passageId: 'rd-paired-1',
      stem: 'The main purpose of Passage A is to:',
      choices: [
        'argue that the question of returning artifacts is more complicated than news headlines suggest.',
        'argue that no artifact should ever be returned to its country of origin.',
        'describe the history of one museum\'s collection.',
        'praise recent returns of artifacts as acts of justice.',
      ],
      answer: 0,
      explanation: `The author states the thesis in the first paragraph: "I want to complicate the story, not because the wrongs were not real but because the remedy is not as simple as the headline suggests." That is A. Choice B is too extreme; the author says stolen objects "should go back, and many have." Choice C is not what the passage does. Choice D is the headline view the author is pushing back against.`,
    },
    {
      id: 'rd-pair-02',
      section: 'reading',
      topic: 'rd-detail-and-locating',
      difficulty: 1,
      passageId: 'rd-paired-1',
      stem: 'According to Passage A, which of the following objects should be returned?',
      choices: [
        'any object requested by a national government',
        'objects that were stolen, taken in war, or acquired by fraud',
        'objects more than four thousand years old',
        'objects currently held on long-term loan',
      ],
      answer: 1,
      explanation: `The fourth paragraph of Passage A says, "Things that were stolen outright, or taken in war, or acquired by fraud, should go back, and many have." That is B. Choice A is the opposite of the author's point about "choosing one claimant among many." Choice C borrows the "four-thousand-year-old vessel" example, which was about who the makers were, not about what to return. Choice D names one of the author's proposed alternatives to return.`,
    },
    {
      id: 'rd-pair-03',
      section: 'reading',
      topic: 'rd-approach-and-pacing',
      difficulty: 2,
      passageId: 'rd-paired-1',
      stem: 'Passage A is organized primarily as:',
      choices: [
        'a list of specific objects that have been returned in recent years.',
        'a personal memoir of the author\'s thirty years of working in museums.',
        'a chronological history of how the great museums acquired their collections.',
        'a series of complications to a familiar story, followed by the author\'s alternative proposal.',
      ],
      answer: 3,
      explanation: `The first paragraph announces the plan ("I want to complicate the story"), the second and third paragraphs each raise a complication (the word "return," what a museum is for), and the fourth offers the author's alternative ("the slower work: shared custody, long-term loans..."). That is D. The thirty years are mentioned once, not narrated (B). There is no chronology (C) and no list of objects (A).`,
    },
    {
      id: 'rd-pair-04',
      section: 'reading',
      topic: 'rd-structure-and-paired-passages',
      difficulty: 2,
      passageId: 'rd-paired-1',
      stem: 'In Passage B, the author mentions "a schoolchild in the country the objects came from" primarily to:',
      choices: [
        'argue that textbooks should include more photographs.',
        'challenge the claim that museum collections truly belong to "all of humanity."',
        'suggest that children should be required to visit museums.',
        'describe a specific educational program run by museums.',
      ],
      answer: 1,
      explanation: `The first paragraph of Passage B quotes the museums' phrase "all of humanity," calls it "mostly untrue," and then gives the schoolchild as the example of someone left out. The example exists to puncture that claim, choice B. Choices A, C, and D each invent a purpose the paragraph never has; it is about who can and cannot stand in front of the objects.`,
    },
    {
      id: 'rd-pair-05',
      section: 'reading',
      topic: 'rd-detail-and-locating',
      difficulty: 1,
      passageId: 'rd-paired-1',
      stem: 'According to Passage B, a "reversal of the default" would mean that:',
      choices: [
        'all objects in the great museums would be returned at once to their countries of origin.',
        'countries of origin would be required to prove their ownership before any object is returned to them.',
        'museums would presume that communities of origin have the stronger claim and argue case by case for keeping a piece.',
        'museums would close their galleries to the public while competing claims are being reviewed.',
      ],
      answer: 2,
      explanation: `The final paragraph of Passage B defines the phrase: institutions should "begin from the assumption that the communities of origin have the stronger claim, and then make the case, object by object, for why a particular piece should stay." That is C. Choice A contradicts "I do not think every object must be returned." Choice B puts the burden on the wrong side, the opposite of what the author wants. Choice D contradicts "What I want is not empty galleries."`,
    },
    {
      id: 'rd-pair-06',
      section: 'reading',
      topic: 'rd-structure-and-paired-passages',
      difficulty: 2,
      passageId: 'rd-paired-1',
      stem: 'Which of the following best describes the relationship between Passage A and Passage B?',
      choices: [
        'Passage B directly challenges arguments made in Passage A while sharing its view that not every object must be returned.',
        'Passage B presents a historical account of collecting that Passage A disputes point by point.',
        'Both passages argue that the great museums should keep their collections intact and resist returns.',
        'Passage A is written as a direct response to claims that were first made in Passage B.',
      ],
      answer: 0,
      explanation: `Passage B takes on A's two main points, the "all of humanity" idea and the "not the real heirs" argument, and rebuts them, yet it also concedes "I do not think every object must be returned," which matches A's objection to an enthusiasm that "treats every acquisition as theft" and A's call for shared custody and loans rather than wholesale return. That is A. Choice B is wrong because B is argument, not history. Choice C misstates B, which wants the default reversed. Choice D has the direction backwards; B responds to the kind of claims A makes.`,
    },
    {
      id: 'rd-pair-07',
      section: 'reading',
      topic: 'rd-structure-and-paired-passages',
      difficulty: 3,
      passageId: 'rd-paired-1',
      stem: 'The authors of both passages would most likely agree that:',
      choices: [
        'modern nations are the rightful heirs of the people who made ancient objects.',
        'some objects in museum collections were acquired legitimately and need not be returned.',
        'large museums should empty their galleries of foreign objects.',
        'news headlines about returned artifacts are generally accurate.',
      ],
      answer: 1,
      explanation: `Passage A criticizes the view that "treats every acquisition as theft" and limits the objects that "should go back" to those stolen, taken in war, or acquired by fraud; Passage B says "some objects were bought fairly or rescued from destruction" and "I do not think every object must be returned." Both accept that some acquisitions were legitimate, choice B. Choice A is flatly rejected by Passage A ("we are not reuniting it with its makers"), and even Passage B never claims it; B only argues that A's objection "proves too much." Choice C is rejected by both: A calls for "shared custody, long-term loans," and B says "What I want is not empty galleries." Choice D is rejected by A, whose first paragraph sets out to complicate the headline version of the story.`,
    },
    {
      id: 'rd-pair-08',
      section: 'reading',
      topic: 'rd-inference',
      difficulty: 3,
      passageId: 'rd-paired-1',
      stem: 'How would the author of Passage B most likely respond to Passage A\'s point that returning an object means "choosing one claimant among many"?',
      choices: [
        'by agreeing that this makes return impossible in practice',
        'by arguing that the logic proves too much, since it would leave the object with whoever carried it off',
        'by proposing shared custody and long-term loans as a middle path',
        'by denying that modern borders differ from ancient ones',
      ],
      answer: 1,
      explanation: `The second paragraph of Passage B answers this exact argument: "The argument that modern nations are not the 'real' heirs... proves too much. By that logic, no one is the heir, and the object should belong to whoever happened to carry it off." That is B. Choice A is the opposite of B's position. Choice C is Passage A's own proposal, not B's. Choice D attributes a claim neither author makes; B's point is about the logic of the argument, not the borders.`,
    },
  ],
}
