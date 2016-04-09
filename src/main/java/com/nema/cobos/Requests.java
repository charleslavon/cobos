package com.nema.cobos;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Requests {

    @RequestMapping("/test")
    String test() {
        return "test";
    }


}