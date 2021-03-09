var isBrowser = true;
if (typeof process === "object") {
  if (typeof process.versions === "object") {
    if (typeof process.versions.node !== "undefined") {
      isBrowser = false;
    }
  }
}
const load = function (v, t = "script", k = "src", e) {
  if (isBrowser) {
    return new Promise((r, j) => {
      try {
        const el = document.createElement(t);
        el[k] = v;
        if (e && e[0]) el[e[0]] = e[1];
        el.addEventListener("load", () => r(true));
        document.head.appendChild(el);
      } catch (e) {
        console.error(e);
        j(e);
        throw e;
      }
    });
  } else {
    return new Promise((r) => r(true));
  }
};

const Marp = require("@marp-team/marp-core");
function MarpSlide({ $target, contents, marpOption, tnsOption }) {
  if (!marpOption) {
    marpOption = {};
  }
  if (!tnsOption) {
    tnsOption = {
      container: ".marpit",
      slideBy: "page",
      controls: false,
      nav: false,
      mouseDrag: true,
      loop: false,
    };
  }
  const self = {
    setState(data) {
      this.data = data;
      this.render();
    },
    async render() {
      await load(
        "//cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js"
      );
      await load(
        "//cdn.jsdelivr.net/npm/@marp-team/marpit-svg-polyfill/lib/polyfill.browser.js"
      );
      await load(
        "//cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.min.css",
        "link",
        "href",
        ["rel", "stylesheet"]
      );
      const marp = new Marp.Marp(marpOption);
      const { html, css } = marp.render(contents);
      var s = document.createElement("style");
      s.innerText = css;
      document.body.appendChild(s);
      $target.style.display = "none";
      $target.innerHTML = html;
      tns(tnsOption);
      $target.style.display = "block";
    },
  };

  self.render();
  return self;
}
if (isBrowser) {
  window.MarpSlide = MarpSlide;
}
module.exports = MarpSlide;
