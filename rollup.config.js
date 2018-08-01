import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  sourcemap: true,
  output: [
    {
      extend: true,
      format: 'umd',
      name: 'JC',
      globals: {
        jcc2d: 'JC',
      },
      file: 'build/jcc2d.axes.js',
    },
    {
      extend: true,
      format: 'es',
      globals: {
        jcc2d: 'JC',
      },
      file: 'build/jcc2d.axes.module.js',
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  external: [ 'jcc2d' ],
  watch: {
    exclude: [ 'node_modules/**' ],
  },
};
