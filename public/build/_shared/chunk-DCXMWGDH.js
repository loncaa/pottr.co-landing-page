import {
  Link,
  useLocation
} from "/build/_shared/chunk-6LSSOQVS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-6LKQV3EM.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/locales/en/footer.json
var language = "Language";

// app/components/Footer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Footer.tsx"
  );
  import.meta.hot.lastModified = "1744899985284.0896";
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row border-[#201515]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "\xA9 Copyright 2024 Pottr. All rights reserved." }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "inline-flex text-base font-semibold text-black duration-200 focus:outline-none focus-visible:outline-gray-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: language }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "https://pottr.co", target: "_blank", rel: "noreferrer", className: "text-sm text-gray-600 hover:text-[#FF4F01] transition-colors duration-300", children: "English" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "https://pottr.hr", target: "_blank", rel: "noreferrer", className: "text-sm text-gray-600 hover:text-[#FF4F01] transition-colors duration-300", children: "Hrvatski" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "https://www.linkedin.com/company/101435742", target: "_blank", rel: "noreferrer", className: "text-sm text-gray-600 transition-colors duration-300 hover:text-[#FF4F01]", children: "LinkedIn" }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = Footer;
var _c;
$RefreshReg$(_c, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/@heroicons/react/16/solid/esm/HomeIcon.js
var React = __toESM(require_react(), 1);
function HomeIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z"
  }));
}
var ForwardRef = /* @__PURE__ */ React.forwardRef(HomeIcon);
var HomeIcon_default = ForwardRef;

// app/components/Header.tsx
var import_react3 = __toESM(require_react(), 1);

// app/locales/en/header.json
var description = "custom software solutions";
var menu = {
  contact: "contact",
  about: "about"
};

// app/components/Header.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Header.tsx"
  );
  import.meta.hot.lastModified = "1744899985284.423";
}
var buttonCss = "backdrop-blur-sm transition duration-500 ease-in-out translate-y-1 text-lg py-1 px-4 inline-flex items-center border border-[#FF4F01] bg-white  text-[#FF4F01] hover:bg-neutral-200 hover:border-[#FF4F01]";
var selectedButtonCss = "backdrop-blur-sm transition duration-500 ease-in-out translate-y-1 text-lg py-1 px-4 inline-flex items-center border border-[#FF4F01] bg-[#FF4F01] text-white ";
var navbarCss = "px-4 mx-auto text-left md:max-w-none md:text-center bg-white md:shadow-none";
function Header() {
  _s();
  const [isHeaderVisible, setIsHeaderVisible] = (0, import_react3.useState)(true);
  const divRef = (0, import_react3.useRef)(null);
  const location = useLocation();
  (0, import_react3.useEffect)(() => {
    if (!divRef || !divRef.current) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setIsHeaderVisible(entry.isIntersecting);
    }, {
      rootMargin: "0px"
    });
    observer.observe(divRef.current);
    return () => observer.disconnect();
  }, []);
  const getButtonCss = (uri) => {
    return location.pathname == uri ? selectedButtonCss : buttonCss;
  };
  const HeaderButtons = () => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center py-4 space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: `${getButtonCss("/")}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HomeIcon_default, { className: "w-6 inline" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 54,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: location.pathname == "/contact" ? "/" : "/contact", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: getButtonCss("/contact"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
        " ",
        menu.contact
      ] }, void 0, true, {
        fileName: "app/components/Header.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: location.pathname == "/about" ? "/" : "/about", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: getButtonCss("/about"), children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: menu.about }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 50,
      columnNumber: 12
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "pb-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { ref: divRef, className: "max-w-lg px-4 pt-12 sm:pb-8 mx-auto md:max-w-none text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "font-extrabold leading-10 tracking-tight text-[#201515] text-center sm:leading-none text-5xl sm:text-9xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "inline md:block", children: "pottr!" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "relative mt-5 bg-clip-text text-[#201515] inline-block text-2xl", children: description }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${navbarCss} ${isHeaderVisible ? "visible" : "invisible md:visible"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HeaderButtons, {}, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `fixed top-0 w-full z-50 shadow-sm ${navbarCss} ${!isHeaderVisible ? "visible md:invisible" : "invisible"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HeaderButtons, {}, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_s(Header, "OGIDlw6cIVph6qqt4nNHdheZ4yQ=", false, function() {
  return [useLocation];
});
_c2 = Header;
var _c2;
$RefreshReg$(_c2, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Footer,
  Header
};
//# sourceMappingURL=/build/_shared/chunk-DCXMWGDH.js.map
