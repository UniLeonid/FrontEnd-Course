import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
    input: ['src/buttons.ts', 'src/xkcd.ts'],
    output: { dir: 'bundle' },
    plugins: [
        typescript(),
        nodeResolve({ browser: true }),
        terser()
    ],
};
