import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "portfolio",
  outDir: './dist/static',
  // puppeteerLaunchOptions: {
  //   args: [
  //     "--disable-gpu",
  //     "--renderer",
  //     "--no-sandbox",
  //     "--no-service-autorun",
  //     "--no-experiments",
  //     "--no-default-browser-check",
  //     "--disable-dev-shm-usage",
  //     "--disable-setuid-sandbox",
  //     "--no-first-run",
  //     "--no-zygote",
  //     "--single-process",
  //     "--disable-extensions"
  //   ]
  // },
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};