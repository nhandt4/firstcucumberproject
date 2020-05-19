package firstcucumber;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

public class ToDo {
    WebDriver driver;
    List<Map<String, String>> lst;
    ArrayList<String> expected = new ArrayList<>();
    public ToDo(){
        this.driver = Hooks.driver;
    }
    @Given("The ToDo link is displayed on screen and enter list keyword")
    public void theToDoLinkIsDisplayedOnScreenAndEnterListKeyword(DataTable dataTable) {
        lst = dataTable.asMaps(String.class, String.class);
        this.driver.get("http://todomvc.com/examples/backbone/");
        this.driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        WebElement txtInput = this.driver.findElement(By.xpath("//input[@class=\"new-todo\"]"));
        for (Map<String, String> a:lst){
            txtInput.clear();
            txtInput.sendKeys(a.get("keyword"));
            txtInput.sendKeys(Keys.ENTER);
            expected.add(a.get("keyword"));
        }
    }

    @When("User attempt to refresh the Toto link")
    public void userAttemptToRefreshTheTotoLink() {
        this.driver.navigate().refresh();
        this.driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    @Then("The system displays the list that looks like the original list")
    public void theSystemDisplaysTheListThatLooksLikeTheOriginalList() {
        List<WebElement> webElements = this.driver.findElements(By.xpath("//ul[@class='todo-list']/li"));
        ArrayList<String> results = new ArrayList<>();
        for (int i = 0; i< webElements.size(); i++){
            results.add(webElements.get(i).getText().trim());
        }
        System.out.println(results);
        System.out.println(expected);
        Assert.assertEquals(expected, results);

    }
}
