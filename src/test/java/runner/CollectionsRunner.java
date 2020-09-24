package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:reports/cucumber-html-report",
                "json:reports/cucumber.json",
                "pretty"},
        tags = {"@run"},
        features = {"src/test/resources/collections.feature"},
        glue = {"stepsdefinitions"}
)

public class CollectionsRunner {

}
