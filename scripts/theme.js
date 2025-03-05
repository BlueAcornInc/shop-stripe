(() => {
  Object.keys(sessionStorage).forEach(key => {
    let config = {};
    if (key.indexOf('config:') === 0) {
      JSON.parse(sessionStorage[key])?.data?.forEach(item => {
        config[item.key] = item.value;
      });
    }
    let color1 = config['theme-color-1'];
    let color2 = config['theme-color-2'];
    let color3 = config['theme-color-3'];

    const styleEl = document.createElement('style');
    const styleStr = `
    :root {
      --theme-color-1: ${color1};
      --theme-color-2: ${color2};
      --theme-color-3: ${color3};
    }
    `
    styleEl.innerHTML = styleStr;
    if (color1 && color2 && color3) {
      document?.head.appendChild(styleEl);
    }
  })
})()
