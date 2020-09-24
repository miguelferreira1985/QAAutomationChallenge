package stepsdefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;

import static org.junit.Assert.*;

import org.json.simple.parser.ParseException;

import helpers.Helpers;
import support.APIRequest;

public class CollectionsDefinition {

    private APIRequest  request = new APIRequest();
    private Helpers helper = new Helpers();

    @Given("^I have some collections in Postman$")
    public void i_have_some_collections_in_postman(){

    }

    @When("^I send a \"([^\"]*)\" GET request$")
    public void i_send_a_get_request(String type) throws ParseException {
        request.sendRequest(type);
    }

    @Then("^I get a (\\d+) status code in the response$")
    public void i_get_a_status_code_in_the_response(int statusCode){
        assertEquals(request.getStatusCode(), statusCode);
    }

    @Then("^\"([^\"]*)\" array is in the response$")
    public void collections_array_is_in_the_response(String array){
        assertTrue(request.isArrayInResponse(array));
    }

    @Then("^\"([^\"]*)\" array contains \"([^\"]*)\" field into the array$")
    public void collections_array_contains_field_into_the_the_array(String array, String field){
        assertTrue(request.isElementInArrayResponse(array, field));
    }

    @And("^I get \"([^\"]*)\" data from the DB$")
    public void i_get_data_from_db(String field){
        helper.readData(field);
    }

    @Then("^Data in \"([^\"]*)\" field on \"([^\"]*)\" array in the response match with the data in the DB$")
    public void data_in_field_on_array_is_correct(String field, String array){
        assertTrue(request.validateData(array));
    }
}
