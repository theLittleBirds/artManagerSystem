$(function () {
    //全局左侧 菜单栏 复选框调用
    layui.use('form', function () {
            var form = layui.form;
            //切换企业


        });
    $('header').css('width',($(window).width()-278+'px'));
    $(window).resize(function(){
        $('header').css('width',($(window).width()-278+'px'));
    });

    $("#changeEnter").trigger("chosen:updated");
    $("#changeEnter").chosen({
        search_contains: true,
        placeholder_text_single: "抱歉暂时没有对应企业"
    });
    $("#changeEnter").change(function(){
        window.location.href = "changeEnter?enterpriseSeq=" + $(this).val();
    })

    // 获取短信验证码 公共
    $(".js-getCode").on("click", function () {
        var telephone = $("#telephone").val();
        var valid_rule = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
        if (telephone == null || telephone == "") {
            layer.msg("请输入手机号");
            return;
        }
        if (!valid_rule.test(telephone)) {
            layer.msg("您输入的手机号格式不正确")
            return false;
        }
        if ($(this).html() == "获取短信验证码") {
            var time = 60;
            var _this = $(this);
            _this.html(time + "s");
            var timer = setInterval(function () {
                time--;
                _this.html(time + "s");
                if (time <= 0) {
                    _this.html("获取短信验证码");
                    clearInterval(timer);
                }
            }, 1000);
            // 调用验证码接口
            $.ajax({
                type: "POST",
                url: "/sendValidCode",
                async: false,
                data: {
                    "telephone": telephone,
                },
                success: function (data) {
                    if (data != 'success') {
                        layer.msg("短信发送失败");
                    }
                }
            });

        } else {
            return false;
        }
    });

    // 获取短信验证码 公共
    $(".js-getCode1").on("click", function () {
        var telephone = $("#telephone1").val();
        var valid_rule = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
        if (telephone == null || telephone == "") {
            layer.msg("请输入手机号");
            return;
        }
        if (!valid_rule.test(telephone)) {
            layer.msg("您输入的手机号格式不正确")
            return;
        }
        if ($(this).html() == "获取短信验证码") {
            var time = 60;
            var _this = $(this);
            _this.html(time + "s");
            var timer = setInterval(function () {
                time--;
                _this.html(time + "s");
                if (time <= 0) {
                    _this.html("获取短信验证码");
                    clearInterval(timer);
                }
            }, 1000);
            // 调用验证码接口

            $.ajax({
                type: "POST",
                url: "/sendValidCode",
                async: false,
                data: {
                    "telephone": telephone,
                },
                success: function (data) {
                    if (data != 'success') {
                        layer.msg("短信发送失败");
                    }
                }
            });

        } else {
            return false;
        }
    });

    //照片样式js
    $(".js-file").on("change", function () {
        function readFile() {
            var file = $(".js-file")[0].files[0];
            //判断是否是图片类型
            if (!/image\/\w+/.test(file.type)) {
                layer.msg("只能上传图片!");
                return false;
            }
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                $(".js-img").attr("src", this.result)
            }
        }

        readFile();
    });

});

