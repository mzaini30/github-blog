import esbuild from "esbuild";

esbuild.build({
  outdir: "dist",
  entryPoints: ["src/app.ts"],
  minify: true,
});
