import {
  home
} from "/build/_shared/chunk-DJXVQWJF.js";
import {
  BodyContent,
  SectionWrapper
} from "/build/_shared/chunk-YTEJ6CCR.js";
import {
  Footer,
  Header
} from "/build/_shared/chunk-DCXMWGDH.js";
import {
  Link
} from "/build/_shared/chunk-6LSSOQVS.js";
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

// app/locales/en/home.json
var services = {
  label: "services",
  list: [
    {
      title: "Startup Acceleration for Ambitious Founders",
      description: "We specialize in helping ambitious founders like you turn innovative concepts into thriving businesses. We take a customized approach, tailoring our services to your specific needs and goals."
    },
    {
      title: "E-commerce Integrations for Growth ",
      description: "Custom E-commerce integrations, created and integrated into your store by seasoned experts. We'll make sure that your e-commerce ecosystem functions in complete harmony."
    },
    {
      title: "Custom UI/UX Research and Design",
      description: "Research and design for your e-commerce project that's tailored to your business goals. Our team is ready to validate and build a design solution to delight your customers."
    },
    {
      title: "Website Copywriting and SEO",
      description: "All-inclusive website copywriting and SEO services for your e-commerce Shopify store. Let our experts guide and help craft messaging that converts customers at scale."
    }
  ]
};
var trustedBy = {
  label: "trusted by companies"
};
var technology = {
  title: "tech stack",
  label: "Technology",
  description: "Here are the main technologies used in our projects. Don't see your technologies listed here? No problem \u2013 we've got it covered!",
  contactUs: "contact us"
};
var chat = {
  title: "Looking for custom services?",
  label: "Get in touch directly and we'll set up a discovery workshop.",
  action: "let's chat"
};

// app/components/HeroHorizontal.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/HeroHorizontal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/HeroHorizontal.tsx"
  );
  import.meta.hot.lastModified = "1744899985284.949";
}
function HeroHorizontal() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold tracking-tight text-[#FF4F01] text-lg mb-4 text-center md:text-left", children: technology.title }, void 0, false, {
      fileName: "app/components/HeroHorizontal.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl col-span-2 md:col-span-1", children: technology.label }, void 0, false, {
      fileName: "app/components/HeroHorizontal.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex-col items-start m-auto align-middle grid grid-cols-1 md:grid-cols-2 gap-12 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-y-3 mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-base tracking-tight text-gray-600", children: technology.description }, void 0, false, {
          fileName: "app/components/HeroHorizontal.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex md:mt-6 lg:justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "inline-flex text-sm font-semibold text-black duration-200 hover:text-[#FF4F01] focus:outline-none focus-visible:outline-gray-600 hid", to: "/contact", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
          technology.contactUs,
          " \xA0 \u2192 "
        ] }, void 0, true, {
          fileName: "app/components/HeroHorizontal.tsx",
          lineNumber: 38,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/HeroHorizontal.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/HeroHorizontal.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/HeroHorizontal.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "items-center space-x-6 lg:space-x-8 col-span-2 md:col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-lg items-center gap-x-8 gap-y-10 lg:mt-0 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none grid grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/nodejs.svg", alt: "Node.js", className: "max-h-12 w-full object-contain col-span-1" }, void 0, false, {
          fileName: "app/components/HeroHorizontal.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/shopify.svg", alt: "Shopify", className: "max-h-12 w-full object-contain col-span-1" }, void 0, false, {
          fileName: "app/components/HeroHorizontal.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/glc.svg", alt: "Google Cloud", className: "max-h-12 w-full object-contain col-span-1" }, void 0, false, {
          fileName: "app/components/HeroHorizontal.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/react.svg", alt: "React.js", className: "max-h-12 w-full object-contain col-span-1" }, void 0, false, {
          fileName: "app/components/HeroHorizontal.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/graphql.svg", alt: "Graphql", className: "max-h-12 w-full object-contain col-span-1" }, void 0, false, {
          fileName: "app/components/HeroHorizontal.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/firebase.svg", alt: "Firebase", className: "max-h-12 w-full object-contain col-span-1" }, void 0, false, {
          fileName: "app/components/HeroHorizontal.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/postgresql.svg", alt: "Postgresql", className: "max-h-12 w-full object-contain col-span-1" }, void 0, false, {
          fileName: "app/components/HeroHorizontal.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/HeroHorizontal.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/HeroHorizontal.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/HeroHorizontal.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/HeroHorizontal.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = HeroHorizontal;
var _c;
$RefreshReg$(_c, "HeroHorizontal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/LetsChat.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/LetsChat.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/LetsChat.tsx"
  );
  import.meta.hot.lastModified = "1744899985285.3704";
}
function LetsChat() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl col-span-2 md:col-span-1", children: chat.title }, void 0, false, {
      fileName: "app/components/LetsChat.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex-col items-start m-auto align-middle grid grid-cols-1 md:grid-cols-2 gap-12 mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid gap-y-3 mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-base tracking-tight text-gray-600", children: chat.label }, void 0, false, {
        fileName: "app/components/LetsChat.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex md:mt-6 lg:justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "inline-flex text-sm font-semibold text-black duration-200 hover:text-[#FF4F01] focus:outline-none focus-visible:outline-gray-600 hid", to: "/contact", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
        chat.action,
        " \xA0 \u2192 "
      ] }, void 0, true, {
        fileName: "app/components/LetsChat.tsx",
        lineNumber: 35,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/LetsChat.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/LetsChat.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/LetsChat.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/LetsChat.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/LetsChat.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c2 = LetsChat;
var _c2;
$RefreshReg$(_c2, "LetsChat");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/LogoCloud.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/LogoCloud.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/LogoCloud.tsx"
  );
  import.meta.hot.lastModified = "1744899985285.8276";
}
function LogoCloud() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative items-center w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "font-semibold tracking-tight text-[#FF4F01] text-lg mb-4 text-center md:text-left", children: trustedBy.label }, void 0, false, {
      fileName: "app/components/LogoCloud.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto max-w-lg items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none grid grid-cols-2 md:grid-cols-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "max-h-12 w-full object-contain col-span-1", src: "/paldesk.svg", alt: "Paldesk", width: 158, height: 48 }, void 0, false, {
        fileName: "app/components/LogoCloud.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "max-h-12 w-full object-contain col-span-1", src: "/aarke.svg", alt: "Aarke", width: 158, height: 48 }, void 0, false, {
        fileName: "app/components/LogoCloud.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "max-h-12 w-full object-contain col-span-1 ", src: "/coi.svg", alt: "Coi", width: 158, height: 48 }, void 0, false, {
        fileName: "app/components/LogoCloud.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "max-h-12 w-full object-contain col-span-1 grayscale", src: "/droppa.svg", alt: "Droppa", width: 158, height: 48 }, void 0, false, {
        fileName: "app/components/LogoCloud.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "max-h-12 w-full object-contain col-span-1 grayscale", src: "/phishar.svg", alt: "PhishAR", width: 158, height: 48 }, void 0, false, {
        fileName: "app/components/LogoCloud.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/LogoCloud.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/LogoCloud.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c3 = LogoCloud;
var _c3;
$RefreshReg$(_c3, "LogoCloud");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ShowcaseItem.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ShowcaseItem.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ShowcaseItem.tsx"
  );
  import.meta.hot.lastModified = "1744895504403.5405";
}
function ShowcaseItem({
  title,
  description
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative items-center lg:inline-flex md:order-first", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-center md:text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl min-h-24", children: title }, void 0, false, {
      fileName: "app/components/ShowcaseItem.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "mt-4 text-base tracking-tight text-gray-600", children: description }, void 0, false, {
      fileName: "app/components/ShowcaseItem.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ShowcaseItem.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ShowcaseItem.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ShowcaseItem.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c4 = ShowcaseItem;
var _c4;
$RefreshReg$(_c4, "ShowcaseItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Services.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Services.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Services.tsx"
  );
  import.meta.hot.lastModified = "1744899985286.3125";
}
function Services() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative items-center w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "font-semibold tracking-tight text-[#FF4F01] text-lg mb-2 text-center md:text-left", children: services.label }, void 0, false, {
      fileName: "app/components/Services.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative flex-col items-start m-auto align-middle grid grid-cols-1 md:grid-cols-2 gap-12", children: services.list.map(({
      title,
      description
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ShowcaseItem, { title, description, heroLinkUrl: "/" }, title, false, {
      fileName: "app/components/Services.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/components/Services.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Services.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c5 = Services;
var _c5;
$RefreshReg$(_c5, "Services");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1744899985291.4514";
}
var meta = () => {
  return [{
    title: home.title
  }, {
    name: "description",
    content: home.description
  }];
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Header, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BodyContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SectionWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Services, {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SectionWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LogoCloud, {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SectionWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(HeroHorizontal, {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SectionWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LetsChat, {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_c6 = Index;
var _c6;
$RefreshReg$(_c6, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-QYVTFHD4.js.map
