package com.zc.art_manager_system;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;


@EnableAutoConfiguration
@SpringBootApplication
@EnableScheduling
@ComponentScan(basePackages={"com.zc"})//指定spring要扫描的包
public class ArtManagerSystemApplication {


    public static void main(String[] args) {
        SpringApplication.run(ArtManagerSystemApplication.class, args);
    }

}
