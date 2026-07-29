(function () {
  const state = {
    query: "",
    type: "all",
    tags: new Set()
  };

  const lists = {
    writing: document.getElementById("list-writing"),
    press: document.getElementById("list-press"),
    youtube: document.getElementById("list-youtube"),
    podcast: document.getElementById("list-podcast"),
    newsletter: document.getElementById("list-newsletter")
  };
  const sections = {
    writing: document.querySelector('section[data-section="writing"]'),
    press: document.querySelector('section[data-section="press"]'),
    youtube: document.querySelector('section[data-section="youtube"]'),
    podcast: document.querySelector('section[data-section="podcast"]'),
    newsletter: document.querySelector('section[data-section="newsletter"]')
  };

  const emptyState = document.getElementById("empty-state");
  const searchInput = document.getElementById("search");
  const typeFiltersEl = document.getElementById("type-filters");
  const tagCloudEl = document.getElementById("tag-cloud");
  const tagsToggleEl = document.getElementById("tags-toggle");
  const tagsToggleCountEl = document.getElementById("tags-toggle-count");

  function allTags() {
    const set = new Set();
    ITEMS.forEach((item) => item.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }

  function buildTagCloud() {
    tagCloudEl.innerHTML = "";
    allTags().forEach((tag) => {
      const btn = document.createElement("button");
      btn.textContent = tag;
      btn.dataset.tag = tag;
      btn.addEventListener("click", () => {
        if (state.tags.has(tag)) {
          state.tags.delete(tag);
        } else {
          state.tags.add(tag);
        }
        render();
      });
      tagCloudEl.appendChild(btn);
    });
  }

  function matches(item) {
    if (state.type !== "all" && item.type !== state.type) return false;

    if (state.tags.size > 0) {
      const hasAll = Array.from(state.tags).every((t) => item.tags.includes(t));
      if (!hasAll) return false;
    }

    if (state.query.trim() !== "") {
      const q = state.query.trim().toLowerCase();
      const haystack = [item.title, item.description, ...item.tags]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }

    return true;
  }

  function formatDate(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr + "T00:00:00");
    if (isNaN(d)) return dateStr;
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeAttr(str) {
    return escapeHTML(str).replace(/"/g, "&quot;");
  }

  function rowHTML(item) {
    const tagsHTML = item.tags.map(escapeHTML).join(" · ");
    return `
      <a class="row" href="${escapeAttr(item.url)}" target="_blank" rel="noopener noreferrer">
        <div class="row-main">
          <span class="row-title">${escapeHTML(item.title)}</span>
          <div class="row-tags">${tagsHTML}</div>
        </div>
        <span class="row-date">${item.date ? formatDate(item.date) : ""}</span>
      </a>
    `;
  }

  function render() {
    const filtered = ITEMS.filter(matches).sort((a, b) => {
      const aTime = a.date ? new Date(a.date).getTime() : 0;
      const bTime = b.date ? new Date(b.date).getTime() : 0;
      return bTime - aTime;
    });

    Object.keys(lists).forEach((type) => {
      lists[type].innerHTML = "";
    });

    filtered.forEach((item) => {
      if (!lists[item.type]) return;
      const li = document.createElement("li");
      li.innerHTML = rowHTML(item);
      lists[item.type].appendChild(li);
    });

    Object.keys(sections).forEach((type) => {
      const hasItems = lists[type].children.length > 0;
      sections[type].classList.toggle("hidden", !hasItems);
    });

    emptyState.style.display = filtered.length === 0 ? "block" : "none";

    Array.from(typeFiltersEl.children).forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.type === state.type);
    });
    Array.from(tagCloudEl.children).forEach((btn) => {
      btn.classList.toggle("active", state.tags.has(btn.dataset.tag));
    });

    updateTagsToggleCount();
  }

  searchInput.addEventListener("input", (e) => {
    state.query = e.target.value;
    render();
  });

  typeFiltersEl.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;
    state.type = e.target.dataset.type;
    render();
  });

  // --- Collapsible tag cloud ---
  if (tagsToggleEl && tagCloudEl) {
    tagsToggleEl.addEventListener("click", () => {
      const isOpen = !tagCloudEl.hidden;
      tagCloudEl.hidden = isOpen;
      tagsToggleEl.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  function updateTagsToggleCount() {
    if (!tagsToggleCountEl) return;
    tagsToggleCountEl.textContent = state.tags.size > 0 ? `(${state.tags.size})` : "";
  }


  // --- Social links (header + drawer) ---
  function applySocialLinks() {
    if (typeof SOCIAL_LINKS === "undefined") return;
    const map = {
      "link-youtube": SOCIAL_LINKS.youtube,
      "link-podcast": SOCIAL_LINKS.podcast,
      "link-linkedin": SOCIAL_LINKS.linkedin,
      "link-newsletter": SOCIAL_LINKS.newsletter,
      "drawer-youtube": SOCIAL_LINKS.youtube,
      "drawer-podcast": SOCIAL_LINKS.podcast,
      "drawer-linkedin": SOCIAL_LINKS.linkedin,
      "drawer-newsletter": SOCIAL_LINKS.newsletter
    };
    Object.keys(map).forEach((id) => {
      const el = document.getElementById(id);
      if (el && map[id]) el.href = map[id];
    });
  }

  // --- Side menu (hamburger drawer) ---
  function setupDrawer() {
    const toggle = document.getElementById("menu-toggle");
    const closeBtn = document.getElementById("menu-close");
    const drawer = document.getElementById("nav-drawer");
    const backdrop = document.getElementById("backdrop");
    if (!toggle || !drawer || !backdrop) return;

    function openDrawer() {
      drawer.classList.add("open");
      backdrop.classList.add("open");
      drawer.setAttribute("aria-hidden", "false");
      toggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("drawer-open");
    }

    function closeDrawer() {
      drawer.classList.remove("open");
      backdrop.classList.remove("open");
      drawer.setAttribute("aria-hidden", "true");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("drawer-open");
    }

    toggle.addEventListener("click", () => {
      if (drawer.classList.contains("open")) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    closeBtn.addEventListener("click", closeDrawer);
    backdrop.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeDrawer();
    });

    drawer.querySelectorAll("[data-type]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        state.type = link.dataset.type;
        render();
        closeDrawer();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  applySocialLinks();
  setupDrawer();

  buildTagCloud();
  render();
})();
