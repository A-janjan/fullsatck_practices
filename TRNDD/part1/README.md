# Some Tips


## setting up TypeScript with node.js

npm init -y

--------------------------------------

npm install typescript --save-dev

--------------------------------------

npm install @types/node --save-dev

-------------------------------------------------------

npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true

---------------------------------------------------------

mkdir src
code src/index.ts

--------------------------------------------------------

npx tsc

---------------------------------------------------------


FINISH: you can now see the compiled file in build/index.js 