export default {
    mount: {
        public: '/',
        src: '/dist'
    },
    routes: [
        {
            match: 'routes',
            src: '.*',
            dest: '/index.html',
        }
    ],
    plugins: [
        '@snowpack/plugin-sass'
    ]
};
