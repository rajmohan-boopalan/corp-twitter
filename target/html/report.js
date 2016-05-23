$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "id": "login",
  "description": "",
  "name": "login",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "login;valid-login",
  "description": "",
  "name": "Valid login",
  "keyword": "Scenario Outline",
  "line": 3,
  "type": "scenario_outline"
});
formatter.step({
  "name": "Invalid credentials \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I try to login",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "application should return \u003cview\u003e page",
  "keyword": "Then ",
  "line": 6
});
formatter.examples({
  "id": "login;valid-login;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 8,
  "rows": [
    {
      "id": "login;valid-login;;1",
      "cells": [
        "username",
        "password",
        "view"
      ],
      "line": 9
    },
    {
      "id": "login;valid-login;;2",
      "cells": [
        "raj",
        "mohan",
        "login"
      ],
      "line": 10
    },
    {
      "id": "login;valid-login;;3",
      "cells": [
        "aaa",
        "asadasd",
        "login"
      ],
      "line": 11
    },
    {
      "id": "login;valid-login;;4",
      "cells": [
        "2323",
        "w3434",
        "login"
      ],
      "line": 12
    },
    {
      "id": "login;valid-login;;5",
      "cells": [
        "admin",
        "P@ssw0rd!",
        "home"
      ],
      "line": 13
    }
  ]
});
formatter.scenario({
  "id": "login;valid-login;;2",
  "description": "",
  "name": "Valid login",
  "keyword": "Scenario Outline",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "Invalid credentials raj and mohan",
  "keyword": "Given ",
  "line": 4,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "I try to login",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "application should return login page",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "raj",
      "offset": 20
    },
    {
      "val": "mohan",
      "offset": 28
    }
  ],
  "location": "FunctionDefinition.invalidCredentials(String,String)"
});
formatter.result({
  "duration": 13276692378,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"name\",\"selector\":\"userName\"}\nCommand duration or timeout: 87 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027L-MAA-00438946\u0027, ip: \u002710.239.38.156\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_11\u0027\n*** Element info: {Using\u003dname, value\u003duserName}\nSession ID: 499ed400-0d7b-45ca-9c8e-87467bd4171b\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dWINDOWS, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, nativeEvents\u003dfalse, webStorageEnabled\u003dtrue, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d15.0}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:525)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:461)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.csc.devops.ft.web.FunctionDefinition.invalidCredentials(FunctionDefinition.java:27)\r\n\tat ✽.Given Invalid credentials raj and mohan(login.feature:4)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"name\",\"selector\":\"userName\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027L-MAA-00438946\u0027, ip: \u002710.239.38.156\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_11\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/RBOOPA~1/AppData/Local/Temp/anonymous7066508212587688573webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/RBOOPA~1/AppData/Local/Temp/anonymous7066508212587688573webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/RBOOPA~1/AppData/Local/Temp/anonymous7066508212587688573webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/RBOOPA~1/AppData/Local/Temp/anonymous7066508212587688573webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/RBOOPA~1/AppData/Local/Temp/anonymous7066508212587688573webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n"
});
formatter.match({
  "location": "FunctionDefinition.whenTryToLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 26
    }
  ],
  "location": "FunctionDefinition.applicationShouldReturnPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "login;valid-login;;3",
  "description": "",
  "name": "Valid login",
  "keyword": "Scenario Outline",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "Invalid credentials aaa and asadasd",
  "keyword": "Given ",
  "line": 4,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "I try to login",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "application should return login page",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "aaa",
      "offset": 20
    },
    {
      "val": "asadasd",
      "offset": 28
    }
  ],
  "location": "FunctionDefinition.invalidCredentials(String,String)"
});
formatter.result({
  "duration": 8371055321,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"name\",\"selector\":\"userName\"}\nCommand duration or timeout: 54 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027L-MAA-00438946\u0027, ip: \u002710.239.38.156\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_11\u0027\n*** Element info: {Using\u003dname, value\u003duserName}\nSession ID: 3ea19925-23b6-41d3-b0bd-79af26ba5f1d\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dWINDOWS, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, nativeEvents\u003dfalse, webStorageEnabled\u003dtrue, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d15.0}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:525)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:461)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.csc.devops.ft.web.FunctionDefinition.invalidCredentials(FunctionDefinition.java:27)\r\n\tat ✽.Given Invalid credentials aaa and asadasd(login.feature:4)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"name\",\"selector\":\"userName\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027L-MAA-00438946\u0027, ip: \u002710.239.38.156\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_11\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/RBOOPA~1/AppData/Local/Temp/anonymous4874799733213255402webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/RBOOPA~1/AppData/Local/Temp/anonymous4874799733213255402webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/RBOOPA~1/AppData/Local/Temp/anonymous4874799733213255402webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/RBOOPA~1/AppData/Local/Temp/anonymous4874799733213255402webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/RBOOPA~1/AppData/Local/Temp/anonymous4874799733213255402webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n"
});
formatter.match({
  "location": "FunctionDefinition.whenTryToLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 26
    }
  ],
  "location": "FunctionDefinition.applicationShouldReturnPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "login;valid-login;;4",
  "description": "",
  "name": "Valid login",
  "keyword": "Scenario Outline",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "Invalid credentials 2323 and w3434",
  "keyword": "Given ",
  "line": 4,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "I try to login",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "application should return login page",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "2323",
      "offset": 20
    },
    {
      "val": "w3434",
      "offset": 29
    }
  ],
  "location": "FunctionDefinition.invalidCredentials(String,String)"
});
formatter.result({
  "duration": 8818379083,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027L-MAA-00438946\u0027, ip: \u002710.239.38.156\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_11\u0027\nDriver info: driver.version: RemoteWebDriver\nSession ID: 87e82489-d051-4cd9-916f-b921bcf52388\nCapabilities [{platform\u003dWINDOWS, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, nativeEvents\u003dfalse, webStorageEnabled\u003dtrue, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d15.0}]\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:316)\r\n\tat com.csc.devops.ft.web.FunctionDefinition.invalidCredentials(FunctionDefinition.java:25)\r\n\tat ✽.Given Invalid credentials 2323 and w3434(login.feature:4)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 127.0.0.1:7057 [/127.0.0.1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:151)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:353)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:380)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:184)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:88)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:184)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:71)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:162)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:160)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:380)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:316)\r\n\tat com.csc.devops.ft.web.FunctionDefinition.invalidCredentials(FunctionDefinition.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:354)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:312)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:261)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1191)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1116)\r\n\tat org.testng.TestNG.run(TestNG.java:1024)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:75)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:339)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:200)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:182)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:157)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:391)\r\n\tat java.net.Socket.connect(Socket.java:579)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:74)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:134)\r\n\t... 61 more\r\n"
});
formatter.match({
  "location": "FunctionDefinition.whenTryToLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 26
    }
  ],
  "location": "FunctionDefinition.applicationShouldReturnPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "login;valid-login;;5",
  "description": "",
  "name": "Valid login",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "Invalid credentials admin and P@ssw0rd!",
  "keyword": "Given ",
  "line": 4,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "I try to login",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "application should return home page",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 20
    },
    {
      "val": "P@ssw0rd!",
      "offset": 30
    }
  ],
  "location": "FunctionDefinition.invalidCredentials(String,String)"
});
formatter.result({
  "duration": 8149006023,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"name\",\"selector\":\"userName\"}\nCommand duration or timeout: 95 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027L-MAA-00438946\u0027, ip: \u002710.239.38.156\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_11\u0027\n*** Element info: {Using\u003dname, value\u003duserName}\nSession ID: 37586a1e-2f83-4550-833c-979e842e6bf2\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dWINDOWS, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, nativeEvents\u003dfalse, webStorageEnabled\u003dtrue, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d15.0}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:525)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:461)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.csc.devops.ft.web.FunctionDefinition.invalidCredentials(FunctionDefinition.java:27)\r\n\tat ✽.Given Invalid credentials admin and P@ssw0rd!(login.feature:4)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"name\",\"selector\":\"userName\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027L-MAA-00438946\u0027, ip: \u002710.239.38.156\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_11\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/RBOOPA~1/AppData/Local/Temp/anonymous6764952500964093847webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/RBOOPA~1/AppData/Local/Temp/anonymous6764952500964093847webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/RBOOPA~1/AppData/Local/Temp/anonymous6764952500964093847webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/RBOOPA~1/AppData/Local/Temp/anonymous6764952500964093847webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/RBOOPA~1/AppData/Local/Temp/anonymous6764952500964093847webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n"
});
formatter.match({
  "location": "FunctionDefinition.whenTryToLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 26
    }
  ],
  "location": "FunctionDefinition.applicationShouldReturnPage(String)"
});
formatter.result({
  "status": "skipped"
});
});