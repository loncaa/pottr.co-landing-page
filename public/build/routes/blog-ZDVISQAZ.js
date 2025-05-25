import {
  Link,
  useLoaderData
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/cloudflare
var require_cloudflare = __commonJS({
  "empty-module:@remix-run/cloudflare"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/data/blogList.server
var require_blogList = __commonJS({
  "empty-module:~/data/blogList.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/blog.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);
var import_blogList = __toESM(require_blogList(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/blog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/blog.tsx"
  );
  import.meta.hot.lastModified = "1744899985292.088";
}
function Blog() {
  _s();
  const posts = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto my-0 w-full max-w-[42em]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mb-20 text-2xl font-bold leading-[1.3] md:text-4xl", children: "Blog" }, void 0, false, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    posts.map((post, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        index !== 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "mx-auto my-[60px]" }, void 0, false, {
          fileName: "app/routes/blog.tsx",
          lineNumber: 38,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: " mb-4 mt-6 font-sans text-xl font-bold leading-[1.3] md:text-3xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: post.slug, children: post.title }, void 0, false, {
          fileName: "app/routes/blog.tsx",
          lineNumber: 41,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/blog.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "my-6 md:text-lg", children: post.description }, void 0, false, {
          fileName: "app/routes/blog.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-sans font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-4 text-left uppercase text-text-secondary dark:text-d-text-secondary", children: [
          "\u2014 ",
          post.publishDate
        ] }, void 0, true, {
          fileName: "app/routes/blog.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/blog.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this)
      ] }, index, true, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 37,
        columnNumber: 14
      }, this);
    })
  ] }, void 0, true, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_s(Blog, "rS0svS2rd/CL+3YJKDM/pDuPDGo=", false, function() {
  return [useLoaderData];
});
_c = Blog;
var _c;
$RefreshReg$(_c, "Blog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Blog as default
};
//# sourceMappingURL=/build/routes/blog-ZDVISQAZ.js.map
