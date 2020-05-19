$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/firstcucumber/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Show Homepage after Log with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sprint1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The login screen is displayed on browser",
  "keyword": "Given "
});
formatter.match({
  "location": "firstcucumber.StepDefinitions.the_login_screen_is_displayed_on_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User login with hist credentials",
  "keyword": "When "
});
formatter.match({
  "location": "firstcucumber.StepDefinitions.the_User_login_with_hist_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The homepage will be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "firstcucumber.StepDefinitions.the_homepage_will_be_shown()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Show Error Message after logining with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "name": "The login screen is displayed on browser",
  "keyword": "Given "
});
formatter.step({
  "name": "The user attempt to login with valid \"\u003cusername\u003e\" and invalid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The system displays the error \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ]
    },
    {
      "cells": [
        "khanh.tx@live.com",
        "abc",
        "password incorrect"
      ]
    },
    {
      "cells": [
        "khanh.tx",
        "abc123",
        "Email is invalid"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Show Error Message after logining with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sprint2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The login screen is displayed on browser",
  "keyword": "Given "
});
formatter.match({
  "location": "firstcucumber.StepDefinitions.the_login_screen_is_displayed_on_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user attempt to login with valid \"khanh.tx@live.com\" and invalid \"abc\"",
  "keyword": "When "
});
formatter.match({
  "location": "firstcucumber.StepDefinitions.theUserAttemptToLoginWithValidAndInvalid(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The system displays the error \"password incorrect\"",
  "keyword": "Then "
});
formatter.match({
  "location": "firstcucumber.StepDefinitions.theSystemDisplaysTheError(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cLogin [Page ]- Testmaster.vn\u003e but was:\u003cLogin []- Testmaster.vn\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat firstcucumber.StepDefinitions.theSystemDisplaysTheError(StepDefinitions.java:77)\r\n\tat ✽.The system displays the error \"password incorrect\"(file:///D:/Source%20Code/firstcucumberproject/src/test/resources/firstcucumber/login.feature:12)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Show Error Message after logining with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sprint2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The login screen is displayed on browser",
  "keyword": "Given "
});
formatter.match({
  "location": "firstcucumber.StepDefinitions.the_login_screen_is_displayed_on_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user attempt to login with valid \"khanh.tx\" and invalid \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "firstcucumber.StepDefinitions.theUserAttemptToLoginWithValidAndInvalid(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The system displays the error \"Email is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "firstcucumber.StepDefinitions.theSystemDisplaysTheError(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cLogin [Page ]- Testmaster.vn\u003e but was:\u003cLogin []- Testmaster.vn\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat firstcucumber.StepDefinitions.theSystemDisplaysTheError(StepDefinitions.java:77)\r\n\tat ✽.The system displays the error \"Email is invalid\"(file:///D:/Source%20Code/firstcucumberproject/src/test/resources/firstcucumber/login.feature:12)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/firstcucumber/todo.feature");
formatter.feature({
  "name": "Todo",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Hien thi dung danh sach da them sau khi refresh",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sprint1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The ToDo link is displayed on screen and enter list keyword",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "firstcucumber.ToDo.theToDoLinkIsDisplayedOnScreenAndEnterListKeyword(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User attempt to refresh the Toto link",
  "keyword": "When "
});
formatter.match({
  "location": "firstcucumber.ToDo.userAttemptToRefreshTheTotoLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The system displays the list that looks like the original list",
  "keyword": "Then "
});
formatter.match({
  "location": "firstcucumber.ToDo.theSystemDisplaysTheListThatLooksLikeTheOriginalList()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});