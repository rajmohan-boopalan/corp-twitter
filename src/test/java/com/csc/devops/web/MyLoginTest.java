package com.csc.devops.web;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(strict = false, features = "src/test/resources/com/csc/devops/web", 
		plugin = {
				"pretty",
        		"json:target/cucumber.json", 
				"junit:target/cucumber.xml",
        		"html:target/html/"
				}, tags = { "~@ignore" },
				glue = "com.csc.devops.ut.web")
public class MyLoginTest extends AbstractTestNGCucumberTests {

}