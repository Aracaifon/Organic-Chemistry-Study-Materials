
// ==========================
// DOM ELEMENT REFERENCES
// ==========================

// Grabs dropdown for Chapter filter (left-side filter system)
const chapterEl = document.getElementById("chapter");

// Grabs dropdown for Regiochemistry filter (Markovnikov, etc.)
const regioEl = document.getElementById("regio");

// Grabs dropdown for Stereochemistry filter (Syn, Anti, Both)
const stereoEl = document.getElementById("stereo");

// Grabs dropdown for Product Type filter (OH, H, X, O, CLEAVAGE)
// This is your custom “bond addition” classification system
const productTypeEl = document.getElementById("productType");


// ==========================
// DIRECT SEARCH ELEMENTS
// ==========================

// First-level dropdown: chapter selection for direct lookup mode
const chapterSelect = document.getElementById("chapterSelect");

// Second-level dropdown: populated dynamically based on chapter
const reactionSelect = document.getElementById("reactionSelect");


// ==========================
// FILTER EVENT LISTENERS
// ==========================

// Whenever any filter changes, re-run the filtering function
chapterEl.addEventListener("change", filterReactions);
regioEl.addEventListener("change", filterReactions);
stereoEl.addEventListener("change", filterReactions);
productTypeEl.addEventListener("change", filterReactions);


// ==========================
// DIRECT SEARCH: CHAPTER SELECTION
// ==========================

// When user selects a chapter in direct search mode
chapterSelect.addEventListener("change", () => {

  const selectedChapter = chapterSelect.value;

  // Reset reaction dropdown each time chapter changes
  reactionSelect.innerHTML = '<option value="">Select Reaction</option>';

  // If no chapter selected, hide reaction dropdown
  if (!selectedChapter) {
    reactionSelect.classList.add("hidden");
    return;
  }

  // Filter reactions belonging only to selected chapter
  const filtered = reactions.filter(r => r.chapter === selectedChapter);

  // Populate second dropdown with reaction names
  filtered.forEach(r => {
    const option = document.createElement("option");
    option.value = r.name;
    option.textContent = r.name;
    reactionSelect.appendChild(option);
  });

  // Show the reaction dropdown once populated
  reactionSelect.classList.remove("hidden");
});


// ==========================
// DIRECT SEARCH: REACTION SELECTION
// ==========================

// When user selects a specific reaction from dropdown
reactionSelect.addEventListener("change", () => {

  const selectedName = reactionSelect.value;

  // If nothing selected, show all reactions
  if (!selectedName) {
    display(reactions);
    return;
  }

  // Find only the selected reaction and display it
  const match = reactions.filter(r => r.name === selectedName);
  display(match);
});


// ==========================
// MAIN FILTER FUNCTION
// ==========================

function filterReactions() {

  // Read current values from all filter dropdowns
  const chapter = chapterEl.value;
  const regio = regioEl.value;
  const stereo = stereoEl.value;
  const productType = productTypeEl.value;

  // Apply multi-criteria filtering across dataset
  const filtered = reactions.filter(r => {
    return (!chapter || r.chapter === chapter) &&
           (!regio || r.regio === regio) &&
           (!stereo || r.stereo === stereo) &&
           (!productType || r.productType.includes(productType));
  });

  // Render filtered results
  display(filtered);
}


// ==========================
// CARD RENDERING FUNCTION
// ==========================

function display(data) {

  // Container where all reaction cards are displayed
  const container = document.getElementById("results");

  // Clear previous results before rendering new ones
  container.innerHTML = "";

  // Loop through each reaction and create a visual card
  data.forEach((r, index) => {

    const card = document.createElement("div");
    card.className = "card";

    // Build the HTML structure of each reaction card
    card.innerHTML = `
      <h3>${r.name}</h3>

      <!-- Tag section showing key reaction properties -->
      <div class="tags">
        <span class="tag">Chapter ${r.chapter}</span>
        <span class="tag">${r.regio}</span>
        <span class="tag">${r.stereo}</span>
      </div>

      <!-- Reaction details -->
      <p><strong>Reagents:</strong> ${r.reagents}</p>

      <!-- "Product" display (you renamed this as Added) -->
      <p><strong>Added:</strong> ${r.product}</p>

      <!-- Button toggles mechanism image visibility -->
      <button class="toggle-btn" onclick="toggleImage(${index})" id="btn-${index}">
        Show Mechanism
      </button>

      <!-- Hidden mechanism image container -->
      <div id="img-${index}" class="hidden">
        <img src="${r.image}" alt="mechanism diagram">
      </div>
    `;

    container.appendChild(card);
  });
}


// ==========================
// IMAGE TOGGLE FUNCTION
// ==========================

// Shows/hides mechanism image when button is clicked
function toggleImage(index) {

  const imgDiv = document.getElementById(`img-${index}`);
  const btn = document.getElementById(`btn-${index}`);

  if (imgDiv.classList.contains("hidden")) {
    imgDiv.classList.remove("hidden");
    btn.textContent = "Hide Mechanism";
  } else {
    imgDiv.classList.add("hidden");
    btn.textContent = "Show Mechanism";
  }
}


// ==========================
// RESET FILTERS
// ==========================

function resetFilters() {

  // Reset all dropdown values to default (empty)
  chapterEl.value = "";
  regioEl.value = "";
  stereoEl.value = "";
  productTypeEl.value = "";

  // Re-render full dataset
  display(reactions);
}


// ==========================
// POPULATE FILTER DROPDOWNS
// ==========================

function populateFilters() {

  // Sets automatically collect unique values (no duplicates)
  const chapters = new Set();
  const regios = new Set();
  const stereos = new Set();

  // Extract unique values from dataset
  reactions.forEach(r => {
    chapters.add(r.chapter);
    regios.add(r.regio);
    stereos.add(r.stereo);
  });

  // Reset dropdowns to base state before repopulating
  chapterEl.innerHTML = '<option value="">All Chapters</option>';
  regioEl.innerHTML = '<option value="">All Regiochemistry</option>';
  stereoEl.innerHTML = '<option value="">All Stereochemistry</option>';

  // Populate chapter dropdown
  chapters.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = "Chapter " + c;
    chapterEl.appendChild(opt);
  });

  // Populate regio dropdown
  regios.forEach(r => {
    const opt = document.createElement("option");
    opt.value = r;
    opt.textContent = r;
    regioEl.appendChild(opt);
  });

  // Populate stereo dropdown
  stereos.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = s;
    stereoEl.appendChild(opt);
  });
}


// ==========================
// POPULATE PRODUCT TYPE DROPDOWN
// ==========================

function populateProductTypes() {

  // Collects all unique productType values from dataset
  const types = new Set();

  reactions.forEach(r => {
    r.productType.forEach(t => types.add(t));
  });

  // Convert Set into dropdown options
  types.forEach(t => {
    const option = document.createElement("option");
    option.value = t;
    option.textContent = t;
    productTypeEl.appendChild(option);
  });
}


// ==========================
// INITIALIZATION ON PAGE LOAD
// ==========================

window.onload = function () {

  // Build all dropdown menus dynamically from dataset
  populateFilters();

  // Build product type dropdown dynamically
  populateProductTypes();

  // Render full reaction list on first load
  display(reactions);
};