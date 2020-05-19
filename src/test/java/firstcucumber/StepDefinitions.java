package firstcucumber;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;
import java.util.Map;

import static org.junit.Assert.*;

public class StepDefinitions {
      WebDriver driver;
//    @Before
//    public void initTest(){
//        System.setProperty("webdriver.chrome.driver","C:\\Users\\ADMIN\\Downloads\\chromedriver_win32\\chromedriver.exe");
//        this.driver = new ChromeDriver();
//    }
//    @After
//    public void finishTC(Scenario scenario){
//        if(scenario.isFailed()){
//            final byte[] screenshots = ((TakesScreenshot)this.driver).getScreenshotAs(OutputType.BYTES);
//            scenario.embed(screenshots, "image/png");
//        }
//        this.driver.quit();
//    }
    public StepDefinitions(){
        this.driver = Hooks.driver;
    }
    @Given("The login screen is displayed on browser")
    public void the_login_screen_is_displayed_on_browser() {
        this.driver.get("http://testmaster.vn/Account/Login");

    }
    @When("The User login with hist credentials")
    public void the_User_login_with_hist_credentials() {
        WebElement txtUserName = this.driver.findElement(By.cssSelector("input[type=\"email\"]"));
        WebElement txtPassword = this.driver.findElement(By.cssSelector("input[type=\"password\"]"));
        WebElement btnLogin = this.driver.findElement(By.cssSelector("button.btn-login"));
        txtUserName.sendKeys("khanh.tx@live.com");
        txtPassword.sendKeys("abc123");
        btnLogin.click();
    }
    @Then("The homepage will be shown")
    public void the_homepage_will_be_shown() throws InterruptedException {
        Thread.sleep(5000);
        String title = this.driver.getTitle();
        System.out.println(title);
//        Assert.assertEquals("Home Page - Testmaster.vn", title);

    }


    @When("The user attempt to login with valid {string} and invalid {string}")
    public void theUserAttemptToLoginWithValidAndInvalid(String arg0, String arg1) {
        WebElement txtUserName = this.driver.findElement(By.cssSelector("input[type=\"email\"]"));
        WebElement txtPassword = this.driver.findElement(By.cssSelector("input[type=\"password\"]"));
        WebElement btnLogin = this.driver.findElement(By.cssSelector("button.btn-login"));
        txtUserName.sendKeys(arg0);
        txtPassword.sendKeys(arg1);
        btnLogin.click();
    }

    @Then("The system displays the error {string}")
    public void theSystemDisplaysTheError(String arg0) throws InterruptedException {
        Thread.sleep(5000);
        String title = this.driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("Login Page - Testmaster.vn", title);
    }

    @Given("^The user input information for 10 record$")
    public void the_user_input_information_for_10_record(DataTable data) throws Throwable {
        List<Map<String, String>> lst = data.asMaps(String.class, String.class);
        for (Map<String, String> a:lst){
            System.out.println(a.get("fullname"));
            System.out.println(a.get("birthday"));
            System.out.println(a.get("whereborn"));
        }

    }

    @Then("^The information about abc is shown$")
    public void the_information_about_abc_is_shown() throws Throwable {

    }

    @And("^The user find with the keyword \"([^\"]*)\"$")
    public void the_user_find_with_the_keyword_something(String strArg1) throws Throwable {

    }

}
