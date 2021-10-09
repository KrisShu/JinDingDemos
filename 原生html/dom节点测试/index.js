
$(function () {
    console.log("git提交测试")
    $(".html-way-wrap").on("click", function () {
        let html = ''
        html += '<p>我是通过html()方式添加的子节点</p>'
        $(this).html(html)
    })

    $(".after-way-wrap").on("click", function () {
        let html = ''
        html += '<p>我是通过after()方式添加的子节点</p>'
        $(this).after(html)
    })


})