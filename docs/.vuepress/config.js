module.exports = {
    title: 'Ray1024',
    description: 'Just playing around',
    base: '/',
    // dest: 'public',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    markdown: {
        lineNumbers: false
    },
    dest: 'dist',
    configureWebpack: {
        resolve: {
            alias: {
                '@static': '../static/'
            }
        }
    },
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',

        nav: [
            { text: '学习', link: '/learn/' },
            { text: '工作', link: '/work/' },
            { text: '日常', link: '/daily/' },
            {
                text: '友情链接',
                // ariaLabel: 'friend links',
                items: [
                    { text: 'github', link: 'https://github.com/' },
                    { text: 'datastory', link: 'https://www.datastory.com.cn/' }
                ]
            }
        ],
        displayAllHeaders: true,
        // sidebar: 'auto',

        sidebar: [
            {
                title: '-学习-',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/learn/',
                    '/learn/http-link.md',
                    '/learn/http-nginx.md',
                    '/learn/js-webpack-splitChunks.md',
                ]
            }
        ],
        // locales: {
        //     '/': {
        //         label: '11111111',
        //         sidebar: {
        //             '/learn/': [
        //                 {
        //                     title: '指南',
        //                     collapsable: false,
        //                     sidebarDepth: 1,
        //                     children: [
        //                         '../learn/',
        //                         'http/http-link',
        //                         'http/nginx',
        //                         'js/webpack-splitChunks',
        //                     ]
        //                 },
        //                 {
        //                     title: '首页',
        //                     collapsable: false,
        //                     sidebarDepth: 0,
        //                     children: [
        //                         // '../learn/',
        //                         '../daily/',
        //                         '../work/',
        //                     ]
        //                 }
        //             ]
        //         }
        //     }
        // }
    }
}