module.exports = {
    base:'/myWheels/',
    title: 'Wheels UI',
    description: '一个好用的UI框架',
    themeConfig: {
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/install',
                    '/get-started/start'
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/collapse',
                    '/components/grid',
                    '/components/input',
                    '/components/layout',
                    '/components/popover',
                    '/components/tabs',
                    '/components/toast',
                ]
            }
        ]
    }
}