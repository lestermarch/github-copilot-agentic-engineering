import Reveal from "reveal.js";
import Notes from "reveal.js/plugin/notes";
import pdfUrl from "./assets/from-coding-assistance-to-agentic-engineering.pdf?url";
import pptxUrl from "./assets/from-coding-assistance-to-agentic-engineering.pptx?url";
import "reveal.js/reveal.css";
import "./theme-tokens.css";
import "./styles.css";

document.querySelector("#pdf-download").href = pdfUrl;
document.querySelector("#pptx-download").href = pptxUrl;

document.querySelectorAll(".slide-frame img").forEach((image, index) => {
  const link = document.createElement("a");
  link.href = image.src;
  link.target = "_blank";
  link.rel = "noopener";
  link.ariaLabel = `Open slide ${index + 1} at full size`;
  image.parentNode.insertBefore(link, image);
  link.appendChild(image);
});

const deck = new Reveal({
  width: 1920,
  height: 1080,
  margin: 0,
  hash: true,
  controls: true,
  progress: true,
  center: true,
  navigationMode: "linear",
  scrollActivationWidth: 0,
  transition: "none",
  backgroundTransition: "none",
  plugins: [Notes]
});

await deck.initialize();
globalThis.revealDeck = deck;

const previousButton = document.querySelector("#previous-slide");
const nextButton = document.querySelector("#next-slide");
const slideCounter = document.querySelector("#slide-counter");
const slideCount = deck.getSlides().length;

function updateNavigation() {
  const currentIndex = deck.getSlidePastCount();
  previousButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === slideCount - 1;
  slideCounter.textContent = `${currentIndex + 1} / ${slideCount}`;
}

previousButton.addEventListener("click", () => deck.prev());
nextButton.addEventListener("click", () => deck.next());
deck.on("slidechanged", updateNavigation);
updateNavigation();
