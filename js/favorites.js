import { getFavorites, removeFavorite, clearFavorites } from "./storage.js";
import { setYear } from "./footer.js";
setYear();

const listEl    = document.getElementById("favorites-list");
const clearBtn  = document.getElementById("clear-all");
const statusEl  = document.getElementById("status");

function render() {
  const favorites = getFavorites();

  if (favorites.length === 0) {
    listEl.innerHTML = `<p class="empty">No favorites yet. Go save some on the Home page!</p>`;
    clearBtn.style.display = "none";
    return;
  }

  clearBtn.style.display = "inline-block";
  listEl.innerHTML = favorites
    .map(
      (fav, i) => `
      <div class="card">
        <img src="${fav.image}" alt="Saved dog" />
        <p class="advice">${escapeHtml(fav.advice)}</p>
        <button class="danger" data-index="${i}">Remove</button>
      </div>`
    )
    .join("");

  // wire remove buttons
  listEl.querySelectorAll("button[data-index]").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeFavorite(Number(btn.dataset.index));
      render();
    });
  });
}

clearBtn.addEventListener("click", () => {
  clearFavorites();
  statusEl.textContent = "All favorites cleared.";
  render();
});

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

render();