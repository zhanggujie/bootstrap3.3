/**
 * Created by zhangguijie on 2017/10/28.
 */
/**
 * treeview  使用参数
 *  animated  string  number  设置展开子节点的速度  有 slow normal fast
 *  persist  string  记忆的折叠方式  location 页面刷新不保留折叠装太 coolie 页面刷新 保留折叠装态
 *  collapsed: Boolean,//初始化状态为关闭  false  展开
 *  unique  boolean 展开同级节点的唯一性 展开一个节点时  同级关闭  flase  不关闭
 *  control  selector  指定一个溶体，控制整个tree展开 收缩 或者收放所有节点
 *  toggle callback  当一个节点的收放状态改变时  调用自定义函数 callback
 *  add  selector 向已知的树种追加节点  selector  为需要追加的节点集合
 *  cookieId string 设置persist cookie 后 用此参数设置cookie的名称
 *  url  string  异步加载时设置URL地址
 *
 * */

$(function () {
    $("#red").treeview({
        animated: "fast",
        collapsed: true,//初始化状态为关闭  false  展开
        unique: true,//展开时同级的节点会关闭  false  不关
        persist: "location",
        toggle: function () {//展开
            window.console && console.log("%o was toggled", this);
        }
    });
    var _this="";
    $('#red').on('click','li',function (event) {
        window.event? window.event.cancelBubble = true : event.stopPropagation();
        _this = $(this);
        return false
    });
    $('#add').on('click',function () {
        var tree =  $("#red").treeview();

        var val = $('.input').val();
        if (_this.children('ul')[0]){
            var newTree = $('<li><span>'+val+'</span></li>').appendTo(_this.children('ul'));
            tree.treeview({ add: newTree});
            $("#red").treeview()
        }else{
            var newTree = $('<li><span>'+val+'</span></li>').appendTo(_this);
            _this.prepend('<div class="hitarea collapsable-hitarea lastCollapsable-hitarea"></div>');
            tree.treeview({ add: newTree});
        }
    });

    $('#ad').click(function () {
        var val = $('.zhiwu').val();
        var tree =  $("#red").treeview();
        var newTree = $('<li><span>'+val+'</span></li>').appendTo(tree);
        tree.treeview({ add: newTree});
    })
});


