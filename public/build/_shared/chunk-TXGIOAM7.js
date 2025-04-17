import {
  Link
} from "/build/_shared/chunk-6LSSOQVS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-6LKQV3EM.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/locales/en/about.json
var label = "about";
var description = "Pottr is a digital software agency, specializing in delivering custom e-commerce solutions. Founded in 2023, its mission is to create and deliver extraordinary products at scale.";
var team = {
  label: "Meet the team",
  description: "We're a multi-disciplinary team of individuals from Croatia with a passion for creativity, problem-solving, and innovation."
};

// app/components/TeamPerson.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/TeamPerson.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/TeamPerson.tsx"
  );
  import.meta.hot.lastModified = "1744895504404.9365";
}
function TeamPerson({
  person
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: person.linkedinUrl || "#", target: "_blank", rel: "noreferrer", className: "transition duration-500 ease-in-out translate-y-1 py-1 px-4 border-transparent hover:border-[#FF4F01] border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-16 w-16 rounded-full", src: person.imageUrl, alt: "" }, void 0, false, {
      fileName: "app/components/TeamPerson.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-base font-semibold leading-7 tracking-tight text-gray-900", children: person.name }, void 0, false, {
        fileName: "app/components/TeamPerson.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-semibold leading-6 text-[#FF4F01]", children: person.role }, void 0, false, {
        fileName: "app/components/TeamPerson.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/TeamPerson.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/TeamPerson.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/TeamPerson.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = TeamPerson;
var _c;
$RefreshReg$(_c, "TeamPerson");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Team.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Team.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Team.tsx"
  );
  import.meta.hot.lastModified = "1744899985286.7188";
}
var people = [{
  name: "Antonio Loncar",
  role: "Software Engineer & Founder",
  email: "antonio@pottr.co",
  linkedinUrl: "https://www.linkedin.com/in/antonio-loncar",
  imageUrl: "/aloncar.jpg"
}, {
  name: "Branimir Hr\u017Eenjak",
  role: "Digital Marketing Specialist",
  email: "antonio@pottr.co",
  linkedinUrl: "https://www.linkedin.com/in/branimir-hr%C5%BEenjak-616738127",
  imageUrl: "/branimir.jpg"
}];
function Team() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl", children: team.label }, void 0, false, {
      fileName: "app/components/Team.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid gap-x-8 gap-y-10 xl:grid-cols-3 mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "text-lg leading-8 text-gray-600", children: team.description }, void 0, false, {
        fileName: "app/components/Team.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { role: "list", className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-x-1 xl:col-span-2", children: people.map((person) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TeamPerson, { person }, person.name, false, {
        fileName: "app/components/Team.tsx",
        lineNumber: 44,
        columnNumber: 33
      }, this)) }, void 0, false, {
        fileName: "app/components/Team.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Team.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Team.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c2 = Team;
var _c2;
$RefreshReg$(_c2, "Team");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  label,
  description,
  Team
};
//# sourceMappingURL=/build/_shared/chunk-TXGIOAM7.js.map
