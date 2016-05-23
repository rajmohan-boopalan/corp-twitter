package com.csc.devops.ft.web;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FunctionDefinition {



	private WebDriver driver;
	
	public FunctionDefinition() {
		driver = new FirefoxDriver();  
	}

	@Given("^Invalid credentials (.+) and (.+)$")
	public void invalidCredentials(String userName, String password) {

		System.out.println("starting selenium web driver");  
		driver.get("http://localhost:8080/corp-twitter/");  

		driver.findElement(By.name("userName")).sendKeys(userName);
		driver.findElement(By.name("password")).sendKeys(password);

	}

	@When("^I try to login$")
	public void whenTryToLogin() {
		driver.findElement(By.name("do_login")).click();
	}

	@Then("^application should return (.+) page$")
	public void applicationShouldReturnPage(String view) {
		System.out.println(driver.getCurrentUrl());
	}
}
