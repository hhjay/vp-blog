module.exports = {
    title: 'Ray1024',
    description: 'Just playing around',
    base: '/',
    dest: 'public',
    configureWebpack: {
        resolve: {
            alias: {
                '@static': '../static/'
            }
        }
    },
    themeConfig: {
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
        sidebar: 'auto',
        // sidebar: [
        //     {
        //         title: 'Group 1',   // 必要的
        //         path: '/foo/',      // 可选的, 应该是一个绝对路径
        //         collapsable: true, // 可选的, 默认值是 true,
        //         sidebarDepth: 2,    // 可选的, 默认值是 1
        //         children: [
        //             '/'
        //         ]
        //     },
        //     {
        //         title: 'Group 333',
        //         path: '/foo/',
        //         collapsable: false,
        //         sidebarDepth: 1,
        //         children: [
        //             '/'
        //         ]
        //     },
        // ]
    }
}