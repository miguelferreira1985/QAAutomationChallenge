package support;

import java.io.IOException;
import java.net.URL;
import java.net.HttpURLConnection;

import helpers.Helpers;

import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import resources.config;

public class APIRequest {

    public int statusCode = 0;
    public JSONObject response;

    private config config = new config();
    private Helpers helper = new Helpers();

    public void sendRequest(String type) throws  ParseException {

        try{

            URL url = new URL( config.POSTMAN_URL + "/" + config.COLLECTIONS_ENDPOINT);

            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            if(type.equals("valid")){
                connection.setRequestProperty("X-Api-Key", config.POSTMAN_API_KEY);
            }

            statusCode = connection.getResponseCode();

            response = helper.getJsonFromResponse(connection);

        }catch (IOException e){
            e.printStackTrace();
        }

    }

    public int getStatusCode(){
        return statusCode;
    }

    public boolean validateData(String array){
        return helper.validateData(response, array);
    }

    public boolean isArrayInResponse(String array){
        return helper.isArrayInResponse(response, array);
    }

    public boolean isElementInArrayResponse(String array, String element){
        return helper.isElementInArrayResponse(response, array, element);
    }



}
