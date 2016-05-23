package com.csc.devops.ut.web;

import org.junit.Assert;
import org.springframework.web.servlet.ModelAndView;

import com.csc.devops.model.Login;
import com.csc.devops.web.controller.LoginController;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyLoginStepDefinitions {
	
	private LoginController controller = new LoginController(); 
	private Login login = new Login();
	private ModelAndView modelAndView;
	
	
	@Given("^Invalid credentials (.+) and (.+)$")
	public void invalidCredentials(String userName, String password) {
		System.out.println("User Name = " + userName);
		System.out.println("Password = " + password);
		login.setUserName(userName);
		login.setPassword(password);
	}
	
	@When("^I try to login$")
	public void whenTryToLogin() {
		System.out.println("I try to login");
		modelAndView = controller.authenticate(login);
	}
	
	@Then("^application should return (.+) page$")
	public void applicationShouldReturnPage(String view) {
		System.out.println("Application should return -> " + view);
		//assertThat(modelAndView.getViewName(), is(view));
		Assert.assertEquals(modelAndView.getViewName(), view);
	}
}
