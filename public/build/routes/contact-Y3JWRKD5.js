import {
  contact,
  url
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

// app/locales/en/contact.json
var label = "get in touch!";
var description = "If you have questions about our expertise and skills, or if you're interested in exploring collaboration possibilities, feel free to send us a quick message. Our team of specialists is eager to bring your ideas to life.";
var form = {
  label: "What type of project do you have in mind?",
  optionDefault: "Choose a gig type",
  options: [
    "Create an custom Shopify app",
    "Create a custom Shopify integration",
    "Work on a Node.js project",
    "Create and MVP project",
    "I'm not sure"
  ],
  fullname: "Full name",
  email: "Email address",
  message: "Message",
  send: "send"
};

// app/components/ContactForm.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ContactForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ContactForm.tsx"
  );
  import.meta.hot.lastModified = "1744899985283.5876";
}
function ContactForm() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { action: "https://formsubmit.co/aloncar.mail@gmail.com", method: "POST", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_subject", value: `New submission from ${url.replace(/(^\w+:|^)\/\//, "")}!` }, void 0, false, {
      fileName: "app/components/ContactForm.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_captcha", value: "true" }, void 0, false, {
      fileName: "app/components/ContactForm.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pb-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "project-type", className: "block text-sm font-medium leading-6 text-gray-900", children: form.label }, void 0, false, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 31,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { required: true, id: "project-type", name: "project-type", className: "block w-full bg-white border border-[#16161d]py-1.5 text-gray-900  focus:border-[#FF4F01] focus:outline-none focus:ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6 sm:max-w-xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { disabled: true, value: "", children: form.optionDefault }, void 0, false, {
            fileName: "app/components/ContactForm.tsx",
            lineNumber: 36,
            columnNumber: 19
          }, this),
          form.options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: option, children: option }, option, false, {
            fileName: "app/components/ContactForm.tsx",
            lineNumber: 39,
            columnNumber: 47
          }, this))
        ] }, void 0, true, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 35,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 34,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ContactForm.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-1 sm:col-span-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", className: "block text-sm font-medium leading-6 text-gray-900", children: form.fullname }, void 0, false, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { required: true, type: "text", name: "name", id: "name", autoComplete: "given-name", className: "block w-full border border-[#16161d]py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:border-[#FF4F01] focus:outline-none focus:ring-0" }, void 0, false, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ContactForm.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-full sm:col-span-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: form.email }, void 0, false, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 56,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { required: true, id: "email", name: "email", type: "email", autoComplete: "email", className: "block w-full border border-[#16161d]py-1.5 text-gray-900  focus:border-[#FF4F01] focus:outline-none focus:ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6" }, void 0, false, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 60,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 59,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ContactForm.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "message", className: "block text-sm font-medium leading-6 text-gray-900", children: form.message }, void 0, false, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { required: true, name: "message", id: "message", rows: 3, defaultValue: "", className: "block w-full border border-[#16161d]py-1.5 text-gray-900  focus:border-[#FF4F01] focus:outline-none focus:ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6" }, void 0, false, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 68,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ContactForm.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ContactForm.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/ContactForm.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ContactForm.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-end gap-x-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-[#FF4F01] focus:outline-none focus-visible:outline-gray-600", type: "submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
      "\xA0\u2192\xA0\u2192\xA0\u2192\xA0",
      form.send,
      "\xA0\u2192"
    ] }, void 0, true, {
      fileName: "app/components/ContactForm.tsx",
      lineNumber: 78,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/ContactForm.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ContactForm.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ContactForm.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = ContactForm;
var _c;
$RefreshReg$(_c, "ContactForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/contact.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/contact.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/contact.tsx"
  );
  import.meta.hot.lastModified = "1744899985292.4832";
}
var meta = () => {
  return [{
    title: contact.title
  }, {
    name: "description",
    content: contact.description
  }];
};
function Contact() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Header, {}, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BodyContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SectionWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative items-center flex-col m-auto align-middle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "gap-x-8 grid grid-cols-1 lg:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-span-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "font-semibold tracking-tight text-[#FF4F01] text-lg mb-2 text-center md:text-left", children: label }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 44,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-600", children: description }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 47,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", {}, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 43,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ContactForm, {}, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 53,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c2 = Contact;
var _c2;
$RefreshReg$(_c2, "Contact");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Contact as default,
  meta
};
//# sourceMappingURL=/build/routes/contact-Y3JWRKD5.js.map
