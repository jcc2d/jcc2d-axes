
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  sourcemap: true,
  output: [
    {
      format: 'umd',
      name: 'JC',
      file: 'build/jcc2d.axes.js',
    },
    {
      format: 'es',
      file: 'build/jcc2d.axes.module.js',
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  extend: true,
  watch: {
    exclude: [ 'node_modules/**' ],
  },
};
