import esbuild from "esbuild";

esbuild.build({
  outdir: "dist",
  entryPoints: ["src/app.ts"],
  platform: "node",
  bundle: true,
  minify: true,
});
