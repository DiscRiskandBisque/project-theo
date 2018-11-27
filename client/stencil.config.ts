import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import builtins from 'rollup-plugin-node-builtins';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  plugins: [
    builtins(),
    sass()
  ]
};
