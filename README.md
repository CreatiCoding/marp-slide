# marp-slide

Example VanillaJS Component for Marp and Tiny Slider

## demo

https://unpkg.com/marp-slide@latest/demo.html

## usage

```html
<body>
  <div class="marp-slide"></div>
  <script src="//unpkg.com/marp-slide@0.0.8/dist/marp-slide.min.js"></script>
  <script>
    const contents = [
      `# 🧑‍💻 Frontend & DevOps Developer `,
      `[Creco](https://creco.today) [CreatiCoding(Jeong Seok Ho)](https://github.com/CreatiCoding)`,
      `---`,
      `# 🌠 Online Marp Slide Show`,
      `HaHaHa`,
      `---`,
      `# 🆓 Feel free`,
      `Just use it`,
      `---`,
      `# 😉 Have a nice day`,
      `https://creco.today`,
    ].join("\n\n");
    new MarpSlide({
      $target: document.querySelector(".marp-slide"),
      contents,
    });
  </script>
</body>
```
