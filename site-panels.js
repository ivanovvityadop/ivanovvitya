(() => {
  const email = "victor@push.xyz";
  document.body.insertAdjacentHTML("beforeend", `
    <div class="panel-scrim" id="panel-scrim"></div>

    <aside class="about-panel" id="about-panel" aria-hidden="true" aria-labelledby="about-panel-title">
      <div class="about-top">
        <span id="about-panel-title">About</span>
        <button class="about-close" type="button" data-panel-close>Close ×</button>
      </div>
      <p class="about-copy">Victor Ivanov is a Director of Photography based in Tokyo. <span>Working across commercials, music films and editorial projects.</span></p>
      <div class="about-bottom">
        <span>Tokyo, Japan<br>Available for commissions</span>
        <span><a href="mailto:${email}">${email}</a><br><a href="https://instagram.com/ivanovvitya" target="_blank" rel="noreferrer">@ivanovvitya</a></span>
      </div>
    </aside>

    <aside class="about-panel" id="contact-panel" aria-hidden="true" aria-labelledby="contact-panel-title">
      <div class="about-top">
        <span id="contact-panel-title">Contact</span>
        <button class="about-close" type="button" data-panel-close>Close ×</button>
      </div>
      <p class="about-copy">For projects, availability and collaborations. <span>Get in touch directly.</span></p>
      <div class="about-bottom">
        <span><a href="mailto:${email}">${email}</a><br><button class="panel-action" type="button" data-copy-email>Copy email</button></span>
        <span>Instagram<br><a href="https://instagram.com/ivanovvitya" target="_blank" rel="noreferrer">@ivanovvitya</a></span>
      </div>
    </aside>`);

  const scrim = document.querySelector("#panel-scrim");
  let activePanel = null;
  let previousFocus = null;

  const closePanel = () => {
    if (!activePanel) return;
    activePanel.classList.remove("open");
    activePanel.setAttribute("aria-hidden", "true");
    scrim.classList.remove("open");
    document.body.classList.remove("locked");
    activePanel = null;
    if (previousFocus) previousFocus.focus();
  };

  const openPanel = (panelId, trigger) => {
    const panel = document.getElementById(panelId);
    if (!panel) return;
    if (activePanel) {
      activePanel.classList.remove("open");
      activePanel.setAttribute("aria-hidden", "true");
    }
    previousFocus = trigger;
    activePanel = panel;
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    scrim.classList.add("open");
    document.body.classList.add("locked");
    panel.querySelector("[data-panel-close]").focus();
  };

  document.querySelectorAll("[data-panel-open]").forEach((button) => {
    button.addEventListener("click", () => openPanel(button.dataset.panelOpen, button));
  });
  document.querySelectorAll("[data-panel-close]").forEach((button) => button.addEventListener("click", closePanel));
  scrim.addEventListener("click", closePanel);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activePanel) closePanel();
  });

  document.querySelectorAll("[data-copy-email]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(email);
      } catch {
        const field = document.createElement("textarea");
        field.value = email;
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.append(field);
        field.select();
        document.execCommand("copy");
        field.remove();
      }
      button.textContent = "Copied";
      window.setTimeout(() => { button.textContent = "Copy email"; }, 1600);
    });
  });
})();
