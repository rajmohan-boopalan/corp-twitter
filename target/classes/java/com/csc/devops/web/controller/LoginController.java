package com.csc.devops.web.controller;

import main.java.com.csc.devops.dao.LoginDAO;
import main.java.com.csc.devops.model.Login;

@Controller
public class LoginController {

	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	public ModelAndView authenticate(Login login) {
		
		System.out.println("Entering into authenticate method()");
		LoginDAO loginDAO = new LoginDAO();
		//if (login.getUserName().trim().equalsIgnoreCase("admin") && login.getPassword().equals("P@ssw0rd!")) {
		if (loginDAO.authentiate(login.getUserName(), login.getPassword()))
		{
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
