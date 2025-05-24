/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />
declare module "*.mdx" {
    let MDXComponent: (props) => JSX.Element;
    export const frontmatter;
    export default MDXComponent;
}