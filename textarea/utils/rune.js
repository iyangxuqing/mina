
function worker(){
    setInterval(run, 1000)
}
worker();

// module.exports = {
//   worker: worker
// }

let i = 0;
function run(){
    i++;
    console.log(i)
    var pages = getCurrentPages();
    if(!pages.length) return;
    var curPage = pages.pop();
    console.log(curPage.data.page)
    curPage.setData({
        abc: 'abc' + i
    })
}