import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

const config = {
  entryPoints: ["src/assets/sass/main.scss", "src/assets/sass/whitepaper.scss"],
  outdir: "docs/assets/css",
  bundle: true,
  minify: true,
  plugins: [sassPlugin()],
  sourcemap: true,
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  loader: {
    ".png": "dataurl",
    ".woff": "dataurl",
    ".woff2": "dataurl",
    ".eot": "dataurl",
    ".ttf": "dataurl",
    ".svg": "dataurl",
  },
};

function success() {
  console.log("Bundling successful!");
}

function error(msg) {
  console.error("Bundling failed:", msg);
}

await esbuild.build(config).then(success).catch(error);
