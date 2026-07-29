(function () {
  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function formatDate(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr + "T00:00:00");
    if (isNaN(d)) return dateStr;
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  }

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  const items = typeof ITEMS !== "undefined" ? ITEMS : [];
  const post = items.find((item) => item.type === "blog" && item.slug === slug);

  const titleEl = document.getElementById("post-title");
  const dateEl = document.getElementById("post-date");
  const tagsEl = document.getElementById("post-tags");
  const bodyEl = document.getElementById("post-body");
  const metaRow = document.querySelector(".post-meta");
  const notFoundEl = document.getElementById("post-not-found");

  if (!post) {
    notFoundEl.style.display = "block";
    titleEl.style.display = "none";
    if (metaRow) metaRow.style.display = "none";
    bodyEl.style.display = "none";
    return;
  }

  document.getElementById("page-title").textContent = post.title + " — Desi";
  const metaDesc = document.getElementById("page-description");
  if (metaDesc) metaDesc.setAttribute("content", post.description || "");

  titleEl.textContent = post.title;
  dateEl.textContent = post.date ? formatDate(post.date) : "";
  tagsEl.innerHTML = (post.tags || []).map(escapeHTML).join(" · ");
  bodyEl.innerHTML = post.body || `<p>${escapeHTML(post.description || "")}</p>`;
})();
