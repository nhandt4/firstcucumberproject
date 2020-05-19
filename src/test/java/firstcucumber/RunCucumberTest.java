package firstcucumber;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:target/report"}, features = "src\\test\\resources\\firstcucumber\\")
public class RunCucumberTest {

}

//mvn test -Dbrowser=chrome -Dcucumber.options="--tags '@Sprint1 or @Sprint2'"