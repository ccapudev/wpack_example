import bar from '@/bar';

if (module.hot) {
    module.hot.accept();
}

bar();
console.log("log index.jxs");
