import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './apps/site/src',
  projectName: 'site',
  outDir: './dist/apps/site-static',
  routes: {
    '/events/:date': {
      type: 'contentFolder',
      date: {
        folder: './apps/site/src/assets/events',
      },
    },
  },
};
