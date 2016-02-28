package com.nema.cobos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@EnableAutoConfiguration
public class Requests {

    @RequestMapping("/")
    ModelAndView home() {
        return new ModelAndView("index");
    }
    
    @RequestMapping("/test")
    String test() {
        return "test";
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Requests.class, args);
    }

}