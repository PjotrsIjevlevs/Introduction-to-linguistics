/* =========================================================
   FOUNDATIONS OF LINGUISTICS
   Interactive learning module
   ========================================================= */


/* ---------------------------------------------------------
   1. SMOOTH SCROLL
--------------------------------------------------------- */

document.querySelectorAll("[data-scroll]").forEach(button => {

  button.addEventListener("click", () => {

    const target = document.querySelector(
      button.dataset.scroll
    );

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* ---------------------------------------------------------
   2. REVEAL BUTTONS
--------------------------------------------------------- */

document.querySelectorAll(".reveal-btn").forEach(button => {

  button.addEventListener("click", () => {

    const targetId = button.dataset.target;

    const target = document.getElementById(targetId);

    if (!target) return;

    target.classList.toggle("hidden");

    if (!target.classList.contains("hidden")) {

      button.textContent = "Hide explanation ↑";

    } else {

      button.textContent = "Show explanation →";

    }

  });

});


/* ---------------------------------------------------------
   3. LINGUISTICS QUESTION
--------------------------------------------------------- */

document
  .querySelectorAll('[data-question="linguistics"]')
  .forEach(button => {

    button.addEventListener("click", () => {

      const isCorrect =
        button.dataset.correct === "true";

      const feedback =
        document.getElementById(
          "linguistics-feedback"
        );

      document
        .querySelectorAll('[data-question="linguistics"]')
        .forEach(option => {

          option.classList.remove(
            "is-correct",
            "is-wrong"
          );

        });

      if (isCorrect) {

        button.classList.add("is-correct");

        feedback.textContent =
          "Correct. Linguistics asks what patterns speakers actually use and what those patterns tell us about language.";

        feedback.className =
          "quiz-feedback correct";

      } else {

        button.classList.add("is-wrong");

        feedback.textContent =
          "Not quite. A linguist begins with observation and evidence rather than deciding which variety is 'better'.";

        feedback.className =
          "quiz-feedback incorrect";

      }

    });

  });


/* ---------------------------------------------------------
   4. SIX AREAS OF LINGUISTICS
--------------------------------------------------------- */

const disciplineContent = {

  phonetics: {

    label: "01 · PHONETICS",

    title: "Physical speech sounds",

    text:
      "Phonetics focuses on the physical properties of speech sounds: how they are produced, what they are like acoustically, and how they are perceived."

  },

  phonology: {

    label: "02 · PHONOLOGY",

    title: "Sound patterns",

    text:
      "Phonology focuses on how sounds are organized and patterned within a particular language, including the ways sounds can combine."

  },

  morphology: {

    label: "03 · MORPHOLOGY",

    title: "Word structure",

    text:
      "Morphology examines how meaningful pieces combine inside words and how words are formed."

  },

  syntax: {

    label: "04 · SYNTAX",

    title: "Sentence structure",

    text:
      "Syntax examines how words combine into phrases and sentences and what structural patterns make expressions possible."

  },

  semantics: {

    label: "05 · SEMANTICS",

    title: "Meaning",

    text:
      "Semantics investigates how linguistic structures contribute to meaning."

  },

  pragmatics: {

    label: "06 · PRAGMATICS",

    title: "Meaning in context",

    text:
      "Pragmatics considers how context influences the interpretation of linguistic expressions."

  }

};


document
  .querySelectorAll("[data-reveal]")
  .forEach(card => {

    card.addEventListener("click", () => {

      const key = card.dataset.reveal;

      const content =
        disciplineContent[key];

      if (!content) return;

      const panel =
        document.getElementById(
          "disciplineDetail"
        );

      document.getElementById(
        "detailLabel"
      ).textContent =
        content.label;

      document.getElementById(
        "detailTitle"
      ).textContent =
        content.title;

      document.getElementById(
        "detailText"
      ).textContent =
        content.text;

      panel.classList.remove("hidden");

      panel.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });

    });

  });


/* ---------------------------------------------------------
   5. PHONOTACTICS EXPERIMENT
--------------------------------------------------------- */

document
  .querySelectorAll(".word-option")
  .forEach(button => {

    button.addEventListener("click", () => {

      const word =
        button.dataset.word;

      const feedback =
        document.getElementById(
          "phonotactics-feedback"
        );

      document
        .querySelectorAll(".word-option")
        .forEach(option => {

          option.classList.remove(
            "selected"
          );

        });

      button.classList.add("selected");

      if (word === "blifter") {

        feedback.innerHTML =
          "<span class='correct'>✓ Good choice.</span> " +
          "<strong>blifter</strong> fits English phonotactic patterns much better than <strong>lbitfer</strong>.";

        feedback.className =
          "experiment-feedback correct";

      } else {

        feedback.innerHTML =
          "<span class='incorrect'>Not quite.</span> " +
          "<strong>blifter</strong> is the more English-like candidate. " +
          "The important point is that your judgment reveals knowledge about possible sound combinations.";

        feedback.className =
          "experiment-feedback incorrect";

      }

    });

  });


/* ---------------------------------------------------------
   6. PHONETICS / PHONOLOGY COMPARISON
--------------------------------------------------------- */

document
  .querySelectorAll(".comparison-answer")
  .forEach(button => {

    button.addEventListener("click", () => {

      const answerType =
        button.dataset.answer;

      const isCorrect =
        button.dataset.correct === "true";

      let feedbackId;

      if (answerType === "phonetics") {

        feedbackId =
          "phonetics-answer";

      } else {

        feedbackId =
          "phonology-answer";

      }

      const feedback =
        document.getElementById(
          feedbackId
        );

      if (isCorrect) {

        feedback.textContent =
          "✓ Correct.";

        feedback.className =
          "comparison-feedback correct";

      } else {

        feedback.textContent =
          "Not quite — try thinking about whether the question concerns physical production or language-specific patterns.";

        feedback.className =
          "comparison-feedback incorrect";

      }

    });

  });


/* ---------------------------------------------------------
   7. PHONE / PHONEME / ALLOPHONE
--------------------------------------------------------- */

document
  .querySelectorAll(".yes-no")
  .forEach(button => {

    button.addEventListener("click", () => {

      const isCorrect =
        button.dataset.correct === "true";

      const container =
        button.closest(".practice-card");

      const feedback =
        container.querySelector(
          ".yes-no-feedback"
        );

      if (isCorrect) {

        feedback.innerHTML =
          "<strong>✓ Correct.</strong> " +
          "[pʰ] and [p] can be context-dependent realizations of the same phoneme /p/.";

        feedback.className =
          "yes-no-feedback correct";

      } else {

        feedback.innerHTML =
          "<strong>Not quite.</strong> " +
          "The important distinction here is between physical realizations and an abstract phoneme.";

        feedback.className =
          "yes-no-feedback incorrect";

      }

    });

  });


/* ---------------------------------------------------------
   8. QUICK CHECK QUIZZES
--------------------------------------------------------- */

document
  .querySelectorAll(".quiz-option")
  .forEach(button => {

    button.addEventListener("click", () => {

      const block =
        button.closest(".quiz-block");

      const options =
        block.querySelectorAll(
          ".quiz-option"
        );

      const feedback =
        block.querySelector(
          ".quiz-feedback"
        );

      const isCorrect =
        button.dataset.correct === "true";


      /* Reset option styles */

      options.forEach(option => {

        option.classList.remove(
          "is-correct",
          "is-wrong"
        );

      });


      /* Apply result */

      if (isCorrect) {

        button.classList.add(
          "is-correct"
        );

        feedback.textContent =
          "✓ Correct.";

        feedback.className =
          "quiz-feedback correct";

      } else {

        button.classList.add(
          "is-wrong"
        );

        feedback.textContent =
          "Not quite — try another option.";

        feedback.className =
          "quiz-feedback incorrect";

      }

    });

  });


/* ---------------------------------------------------------
   9. SCROLL PROGRESS
--------------------------------------------------------- */

function updateProgress() {

  const scrollTop =
    window.scrollY;

  const documentHeight =
    document.documentElement
      .scrollHeight;

  const viewportHeight =
    window.innerHeight;

  const scrollable =
    documentHeight -
    viewportHeight;

  let percentage = 0;

  if (scrollable > 0) {

    percentage =
      (scrollTop / scrollable) * 100;

  }

  percentage =
    Math.max(
      0,
      Math.min(
        100,
        percentage
      )
    );

  document
    .getElementById("progressBar")
    .style.width =
      percentage + "%";

}


window.addEventListener(
  "scroll",
  updateProgress,
  { passive: true }
);

window.addEventListener(
  "resize",
  updateProgress
);

updateProgress();


/* ---------------------------------------------------------
   10. SIMPLE COMPLETION MESSAGE
--------------------------------------------------------- */

const finalSection =
  document.querySelector(
    ".final-section"
  );

let completionShown = false;

const completionObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (
          entry.isIntersecting &&
          !completionShown
        ) {

          completionShown = true;

          console.log(
            "Foundations of Linguistics module completed."
          );

        }

      });

    },
    {
      threshold: 0.35
    }
  );


if (finalSection) {

  completionObserver.observe(
    finalSection
  );

}