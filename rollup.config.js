import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@wessberg/rollup-plugin-ts';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'build/xlsxp.js',
      format: 'cjs',
    },
    {
      file: 'build/xlsxp.min.js',
      format: 'iife',
      name: 'xlsxp',
    },
  ],
  plugins: [
    resolve(),
    typescript(),
    commonjs({
      include: ['src/*.ts*'],
    })
  ],
};
