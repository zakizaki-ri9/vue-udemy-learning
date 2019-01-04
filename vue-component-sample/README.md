# vue-cli

> A Vue.js project

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

# memo

## UssrDetail.vueについて

### switchName()

親コンポーネントからの渡された`userName`の値、
それを`switchName`で逆転している。

親コンポーネントの`User.vue`の動作により、
`userName`の値が変化する。

1. `userName`の値変化
2. `switchName`で逆転
3. 表示

の順で動作している。
