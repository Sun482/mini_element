import Alert from "../components/Alert.vue";
import { createApp } from "vue";
const Galert = {
  install: function (Vue) {
    const prototype = Object.getPrototypeOf(Vue);
    prototype.$alert = (function () {
      let index = 0;
      let styleList = [];
      let isFlow = false;
      const flowUp = () => {
        let newStyleList = [];
        styleList.forEach((value) => {
          if (value.index >= 1) {
            value.index--;
            value.style.top = `${value.index * 40}px`;
            newStyleList.push(value);
          } else {
            value.style.top = "-10px";
            value.style.opacity = "0";
            index--;
            setTimeout(() => {
              document.body.removeChild(value.container);
            }, 500);
          }
        });
        styleList = newStyleList;
        if (styleList.length) {
          setTimeout(() => {
            flowUp();
          }, 2000);
        } else {
          isFlow = false;
        }
      };
      return function () {
        if (!isFlow) {
          setTimeout(() => {
            flowUp();
          }, 5000);
          isFlow = true;
        }
        const container = document.createElement("div");
        container.style = `
            zIndex: ${2000 + index};
            width: 100%;
            position: fixed;
            left: 35%;
            transition: top .5s, opacity .5s;
            top: -10px;`;
        setTimeout(() => {
          container.style.top = `${index * 40}px`;
        }, 0);
        styleList.push({
          style: container.style,
          index,
          container,
        });
        createApp(Alert).mount(container);
        document.body.appendChild(container);
        index++;
      };
    })();
  },
};
export default Galert;
