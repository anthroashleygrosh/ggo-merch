"use strict";

/* GGO MERCH CONFIGURATION — the only links you'll usually need to edit. */
const LINKS = {
  form: "",       // Google Form responder link: https://docs.google.com/forms/d/e/.../viewform
  instagram: "https://www.instagram.com/gis_neiu/",  // GGO Instagram URL
  connect: "https://neiu.campusgroups.com/feeds?type=club&type_id=35546&tab=about",    // NEIU Connects club URL
  discord: "https://discord.gg/zTfUBWYkK"     // GGO Discord invite URL
};

/* Exact Printful filenames shown in the user's Windows Mockups folder:
   Shirt1_front, Shirt1_back, Shirt1_angle
   Shirt2_front, Shirt2_back, Shirt2_angle
   Shirt3_front, Shirt3_back, Shirt3_angle
   Shirt4_front, Shirt4_back, Shirt4_angle
   Hoodie1, Hoodie2, Hoodie3
   CanCooler1, CanCooler2, stickerstogether1
   The Windows screenshot hides extensions; loader checks PNG/JPG/JPEG/WEBP.
   Files belong in Mockups/ beside index.html, unchanged names. */
const TEE_MOCKUPS = [
  { label: "Light Blue", color: "#a7d7ee", prefix: "Shirt1" },
  { label: "Military Green", color: "#4d563d", prefix: "Shirt2" },
  { label: "White", color: "#ffffff", prefix: "Shirt3" },
  { label: "Pink", color: "#f3c6d6", prefix: "Shirt4" }
];
const TEE_VIEWS = [
  { label: "Front", suffix: "front" },
  { label: "Back", suffix: "back" },
  { label: "Angled", suffix: "angle" }
];

/* Named color options from the Printful Bella + Canvas 3001 product page.
   Hex colors are approximate visual helpers, NOT supplier color codes.
   Recheck current availability and size combinations before opening orders. */
const TEE_COLORS = [
  ["Aqua", "#65c8d0"], ["Army", "#4c5644"], ["Ash", "#ebebe9"],
  ["Asphalt", "#535758"], ["Athletic Heather", "#aeb3b7"], ["Autumn", "#b85029"],
  ["Baby Blue", "#a7cee5"], ["Berry", "#ba356a"], ["Black", "#17191a"],
  ["Black Heather", "#34383e"], ["Brown", "#50332c"], ["Burnt Orange", "#b45b2f"],
  ["Cardinal", "#8f2039"], ["Charity Pink", "#ed80b1"], ["Dark Grey", "#525359"],
  ["Dark Grey Heather", "#64646a"], ["Deep Heather", "#777a80"], ["Forest", "#273c32"],
  ["Gold", "#e5b83b"], ["Heather Aqua", "#a6d7d4"], ["Heather Autumn", "#ba755f"],
  ["Heather Brown", "#9d7b72"], ["Heather Cardinal", "#a26373"],
  ["Heather Carolina Blue", "#8eb6d1"], ["Heather Clay", "#bfa19b"],
  ["Heather Columbia Blue", "#acccde"], ["Heather Deep Teal", "#44707b"],
  ["Heather Dust", "#dad0c5"], ["Heather Dusty Blue", "#8e9fb3"],
  ["Heather Emerald", "#398d75"], ["Heather Forest", "#516b5b"],
  ["Heather Grass Green", "#77a36e"], ["Heather Ice Blue", "#d9e4e7"],
  ["Heather Kelly", "#3c916d"], ["Heather Mauve", "#c1a1aa"],
  ["Heather Midnight Navy", "#354455"], ["Heather Mint", "#b9d9ca"],
  ["Heather Natural", "#e9e3d8"], ["Heather Navy", "#5e7083"],
  ["Heather Olive", "#85836c"], ["Heather Orange", "#df9872"],
  ["Heather Orchid", "#b49bba"], ["Heather Prism Dusty Blue", "#c5d0e1"],
  ["Heather Prism Ice Blue", "#e4edf1"], ["Heather Prism Lilac", "#e9dcec"],
  ["Heather Prism Mint", "#d5e9de"], ["Heather Prism Peach", "#f5dacb"],
  ["Heather Raspberry", "#bc668c"], ["Heather Red", "#c77175"],
  ["Heather Slate", "#758594"], ["Heather Stone", "#bab7b2"],
  ["Heather Team Purple", "#75698c"], ["Heather True Royal", "#5d89c0"],
  ["Heather Yellow Gold", "#e8bd71"], ["Kelly", "#087648"],
  ["Leaf", "#5b9138"], ["Light Blue", "#a7d7ee"], ["Lilac", "#bfa7d3"],
  ["Maroon", "#653343"], ["Mauve", "#b77893"], ["Military Green", "#4d563d"],
  ["Mint", "#92cbb3"], ["Mustard", "#c6962c"], ["Natural", "#e5d8bd"],
  ["Navy", "#26334e"], ["Ocean Blue", "#267caa"], ["Olive", "#706a4a"],
  ["Orange", "#ea6b2b"], ["Oxblood Black", "#321f29"], ["Pebble", "#9b8e79"],
  ["Pink", "#f3c6d6"], ["Red", "#d12c3a"], ["Sage", "#9caa95"],
  ["Silver", "#c4c6c7"], ["Soft Cream", "#f7ecd8"], ["Soft Pink", "#f1dbe0"],
  ["Solid Black Blend", "#262628"], ["Solid White Blend", "#f8f8f7"],
  ["Steel Blue", "#607d95"], ["Tan", "#ba8a65"], ["Teal", "#188f91"],
  ["Team Purple", "#49355f"], ["Toast", "#a57657"], ["True Royal", "#1b57aa"],
  ["Turquoise", "#2ab7d0"], ["Vintage Black", "#53565a"],
  ["Vintage White", "#f4f0e7"], ["White", "#ffffff"], ["Yellow", "#f2db52"]
];

/* Hoodie colors shown in the supplied Printful screenshot, matched to
   the Bella + Canvas 3719 names published by Printful. The lilac option is
   pink-toned in the sample mockup. Swatch hex values are approximate. */
const HOODIE_COLORS = [
  ["Black", "#141414"],
  ["Black Heather", "#262626"],
  ["Maroon", "#62212d"],
  ["Forest", "#1d3929"],
  ["Heather Navy", "#343949"],
  ["Team Purple", "#56336a"],
  ["Heather Forest", "#414e4c"],
  ["True Royal", "#3052b4"],
  ["Athletic Heather", "#b9b9b9"],
  ["Lilac", "#f0b1cc"],
  ["White", "#ffffff"]
];

// Enable the three socials immediately. Google Forms activates when you add its URL.
document.querySelectorAll("[data-link]").forEach(link => {
  const url = LINKS[link.dataset.link];
  if (url && /^https:\/\//i.test(url)) {
    link.href = url;
    link.classList.remove("disabled-link");
    link.removeAttribute("aria-disabled");
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    if (link.dataset.link === "form") link.textContent = "Open Google Order Form ↗";
  }
});

// Filename resolver: accepts png, jpg, jpeg, webp and common capitalization.
// All paths are relative to index.html and work on local disk AND GitHub Pages.
function mockupPaths(stem) {
  const clean = stem.replace(/\.(png|jpe?g|webp)$/i, "");
  const extensions = ["png", "jpg", "jpeg", "webp", "PNG", "JPG", "JPEG", "WEBP"];
  return ["Mockups", "mockups", "assets/mockups"].flatMap(folder => extensions.map(ext => `${folder}/${clean}.${ext}`));
}
function loadImage(img, urls, slot=null) {
  let i = 0;
  img.hidden = true;
  if (slot) slot.classList.remove("has-image");
  img.onload = () => {
    img.hidden = false;
    if (slot) slot.classList.add("has-image");
  };
  img.onerror = () => {
    i++;
    if (i < urls.length) img.src = encodeURI(urls[i]);
    else { img.hidden = true; if(slot) slot.classList.remove("has-image"); }
  };
  img.src = encodeURI(urls[0]);
}

// Banner and sticker sheet include built-in image fallbacks for reliable previews.
const siteBanner = document.getElementById("siteBanner");
loadImage(siteBanner, ["GGO Merch Header.png", "assets/ggo-merch-header.png"]);
const stickerImage = document.getElementById("stickerImage");
loadImage(stickerImage, [...mockupPaths("stickerstogether1"), "assets/sticker-sheet-preview.png"]);

// Load all other merchandise from the user's existing Mockups folder.
document.querySelectorAll("[data-image]").forEach(slot => {
  const img = document.createElement("img");
  img.alt = slot.dataset.alt || "GGO merchandise mockup";
  img.loading = "lazy";
  slot.prepend(img);
  loadImage(img, mockupPaths(slot.dataset.image), slot);
});

// Can cooler: the two original Printful mockups are CanCooler1 and CanCooler2.
const coolerShell = document.getElementById("canCoolerShell");
const coolerPhoto = document.createElement("img");
coolerPhoto.alt = "GGO can cooler product mockup";
coolerPhoto.loading = "lazy";
coolerShell.prepend(coolerPhoto);
function showCanCooler(view) {
  const stem = `CanCooler${view}`;
  coolerPhoto.alt = view === 1 ? "GGO can cooler held in a hand" : "GGO can cooler standalone product view";
  coolerShell.querySelector(".missing-image").innerHTML = `Add <code>${stem}</code> to your Mockups folder`;
  loadImage(coolerPhoto, mockupPaths(stem), coolerShell);
  [1, 2].forEach(n => {
    const btn = document.getElementById(`coolerView${n}`);
    btn.classList.toggle("active-view", n === view);
    btn.setAttribute("aria-pressed", String(n === view));
  });
}
document.getElementById("coolerView1").addEventListener("click", () => showCanCooler(1));
document.getElementById("coolerView2").addEventListener("click", () => showCanCooler(2));
showCanCooler(1);

// Compact shirt gallery: four color tabs and three views per color.
const teeTabs = document.getElementById("teeColorTabs");
const teeViews = document.getElementById("teeViewButtons");
const teePhotoShell = document.getElementById("teePhotoShell");
const teePhoto = document.createElement("img");
teePhoto.alt = "";
teePhoto.loading = "eager";
teePhotoShell.prepend(teePhoto);
let teeColorIndex = 0;
let teeViewIndex = 0;

TEE_MOCKUPS.forEach((tee, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "tee-tab";
  button.id = `tee-tab-${index}`;
  button.setAttribute("role", "tab");
  const dot = document.createElement("span");
  dot.className = "color-dot";
  dot.style.backgroundColor = tee.color;
  dot.setAttribute("aria-hidden", "true");
  button.append(dot, document.createTextNode(tee.label));
  button.addEventListener("click", () => { teeColorIndex = index; teeViewIndex = 0; updateTeeGallery(); });
  teeTabs.append(button);
});
TEE_VIEWS.forEach((view, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "btn btn-sm btn-outline-secondary view-btn";
  button.textContent = view.label;
  button.addEventListener("click", () => { teeViewIndex = index; updateTeeGallery(); });
  teeViews.append(button);
});
function updateTeeGallery() {
  const tee = TEE_MOCKUPS[teeColorIndex];
  const view = TEE_VIEWS[teeViewIndex];
  document.getElementById("currentTeeColor").textContent = `${tee.label} • ${view.label} view`;
  teeTabs.querySelectorAll(".tee-tab").forEach((button, index) => {
    button.setAttribute("aria-selected", String(index===teeColorIndex));
    button.tabIndex = index===teeColorIndex ? 0 : -1;
  });
  teeViews.querySelectorAll("button").forEach((button, index) => {
    button.classList.toggle("active-view", index===teeViewIndex);
    button.setAttribute("aria-pressed", String(index===teeViewIndex));
  });
  teePhoto.alt = `${tee.label} GGO T-shirt, ${view.label.toLowerCase()} view`;
  const fallback = document.getElementById("teeMissing");
  fallback.innerHTML = `Add <strong>${tee.prefix}_${view.suffix}</strong> to your Mockups folder`;
  loadImage(teePhoto, mockupPaths(`${tee.prefix}_${view.suffix}`), teePhotoShell);
}
document.getElementById("teePrev").addEventListener("click", () => { teeViewIndex=(teeViewIndex+2)%3; updateTeeGallery(); });
document.getElementById("teeNext").addEventListener("click", () => { teeViewIndex=(teeViewIndex+1)%3; updateTeeGallery(); });
let touchStartX=0;
teePhotoShell.addEventListener("touchstart", e => {touchStartX=e.changedTouches[0].clientX;}, {passive:true});
teePhotoShell.addEventListener("touchend", e => {
  const diff=e.changedTouches[0].clientX-touchStartX;
  if(Math.abs(diff)>40){teeViewIndex=(teeViewIndex+(diff<0?1:2))%3;updateTeeGallery();}
}, {passive:true});
updateTeeGallery();

// All colors are individually named, searchable, selectable, and copyable.
const palette = document.getElementById("colorPalette");
const search = document.getElementById("colorSearch");
const selectedColorName = document.getElementById("selectedColorName");
const copyButton = document.getElementById("copyColorBtn");
const copyStatus = document.getElementById("copyStatus");
document.getElementById("paletteTotal").textContent = `(${TEE_COLORS.length} listed)`;
let selectedColor = "";

function selectColor(name) {
  selectedColor = name;
  selectedColorName.textContent = name;
  copyStatus.textContent = "";
  copyButton.disabled = false;
  document.querySelectorAll(".palette-item").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.colorName === name)));
}

function drawPalette() {
  const query = search.value.trim().toLocaleLowerCase();
  const filtered = TEE_COLORS.filter(([name]) => name.toLocaleLowerCase().includes(query));
  palette.replaceChildren();
  filtered.forEach(([name, hex]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "palette-item";
    button.dataset.colorName = name;
    button.setAttribute("aria-label", `Select color ${name}`);
    button.setAttribute("aria-pressed", String(name === selectedColor));
    const dot = document.createElement("span");
    dot.className = "color-dot";
    dot.style.backgroundColor = hex;
    dot.setAttribute("aria-hidden", "true");
    const label = document.createElement("span");
    label.textContent = name;
    button.append(dot, label);
    button.addEventListener("click", () => selectColor(name));
    palette.append(button);
  });
  document.getElementById("paletteEmpty").hidden = filtered.length > 0;
}
search.addEventListener("input", drawPalette);
copyButton.addEventListener("click", async () => {
  if (!selectedColor) return;
  try {
    await navigator.clipboard.writeText(selectedColor);
    copyStatus.textContent = "Copied!";
  } catch (_) {
    copyStatus.textContent = "Select and copy the name above.";
  }
});
drawPalette();


// Hoodie palette: use exact supplier color labels when filling out the order form.
const hoodiePalette = document.getElementById("hoodieColorPalette");
const hoodieSelectedName = document.getElementById("selectedHoodieColorName");
const hoodieCopyButton = document.getElementById("copyHoodieColorBtn");
const hoodieCopyStatus = document.getElementById("hoodieCopyStatus");
document.getElementById("hoodiePaletteTotal").textContent = `(${HOODIE_COLORS.length} listed)`;
let selectedHoodieColor = "";
HOODIE_COLORS.forEach(([name, hex]) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "palette-item";
  button.dataset.hoodieColorName = name;
  button.setAttribute("aria-label", `Select hoodie color ${name}`);
  button.setAttribute("aria-pressed", "false");
  const dot = document.createElement("span");
  dot.className = "color-dot";
  dot.style.backgroundColor = hex;
  dot.setAttribute("aria-hidden", "true");
  const label = document.createElement("span");
  label.textContent = name;
  button.append(dot, label);
  button.addEventListener("click", () => {
    selectedHoodieColor = name;
    hoodieSelectedName.textContent = name;
    hoodieCopyStatus.textContent = "";
    hoodieCopyButton.disabled = false;
    hoodiePalette.querySelectorAll(".palette-item").forEach(item =>
      item.setAttribute("aria-pressed", String(item.dataset.hoodieColorName === name))
    );
  });
  hoodiePalette.appendChild(button);
});
hoodieCopyButton.addEventListener("click", async () => {
  if (!selectedHoodieColor) return;
  try {
    await navigator.clipboard.writeText(selectedHoodieColor);
    hoodieCopyStatus.textContent = "Copied!";
  } catch (_) {
    hoodieCopyStatus.textContent = "Select and copy the name above.";
  }
});
