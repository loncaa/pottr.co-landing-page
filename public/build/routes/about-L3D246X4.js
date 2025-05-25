import {
  Team,
  description,
  label
} from "/build/_shared/chunk-TXGIOAM7.js";
import {
  about
} from "/build/_shared/chunk-DJXVQWJF.js";
import {
  BodyContent,
  SectionWrapper
} from "/build/_shared/chunk-YTEJ6CCR.js";
import {
  Footer,
  Header
} from "/build/_shared/chunk-DCXMWGDH.js";
import "/build/_shared/chunk-6LSSOQVS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-6LKQV3EM.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/about.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/about.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/about.tsx"
  );
  import.meta.hot.lastModified = "1744899985291.8542";
}
var meta = () => {
  return [{
    title: about.title
  }, {
    name: "description",
    content: about.description
  }];
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BodyContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "gap-x-8 gap-y-20 m-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-semibold tracking-tight text-[#FF4F01] text-lg mb-2 text-center md:text-left", children: label }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-600 col-span-1", children: description }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Team, {}, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/about.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/about-L3D246X4.js.map
