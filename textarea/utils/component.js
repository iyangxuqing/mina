
function component(page) {
    page.setData({
        component: {
            a: 1,
            b: 2,
            c: 'a',
            d: [1, 2, 3]
        }
    })
    page.setA = function(){
        this.setData({
            'component.a': 2
        })
    }
}

module.exports = {
    component: component
} 