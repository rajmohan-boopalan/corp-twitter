package com.csc.devops.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.csc.devops.model.Login;

@Controller
public class LoginController {

	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	public ModelAndView authenticate(Login login) {
		
		System.out.println("Entering into authenticate method()");
		
		if (login.getUserName().trim().equalsIgnoreCase("admin") && login.getPassword().equals("P@ssw0rd!")) {
			ModelAndView homeView = new ModelAndView("home");
			homeView.addObject("userName", login.getUserName().toUpperCase());
			return homeView;	
		}
		
		ModelAndView loginView = new ModelAndView("login");
		loginView.addObject("err_msg", "Authentication failed.");
		
		return loginView;
	}
	
	@RequestMapping(value="/", method = RequestMethod.GET)
	public ModelAndView authenticate() {
		System.out.println("Entering into authenticate method - 2()");
		return new ModelAndView("login");
	}
}
