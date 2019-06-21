package com.zc.controller;

/*
 *  Creat by zhoudi on 2019/6/21.
 */

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {

    @RequestMapping("/")
    public String login(){
        return "login/login";
    }

    @RequestMapping("/login")
    public String login1(){
        return "/login";
    }
}
