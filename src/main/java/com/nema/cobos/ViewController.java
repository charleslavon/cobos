package com.nema.cobos;

import java.util.Date;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {
	
	@Value("${application.message:Default Value}")
	private String message = "Will be overwritten by property file value";
	
//	@RequestMapping("/")
//	public String mainView() {
//		return "index";
//	}

	@RequestMapping("/")
	public String home(Map<String, Object> model, HttpServletRequest request) {
		model.put("appRoot", request.getContextPath());
		
		return "home";
	}

	@RequestMapping("/az-picker")
	public String azPicker() {
		return "az-picker";
	}

	
	@RequestMapping("/welcome")
	public String welcome(Map<String, Object> model) {
		model.put("time", new Date());
		model.put("message", this.message);
		return "welcome";
	}
	
	@RequestMapping("/foo")
	public String foo(Map<String, Object> model) {
		throw new RuntimeException("Foo");
	}

}
