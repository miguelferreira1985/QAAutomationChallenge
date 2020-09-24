package helpers;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.util.ArrayList;
import java.util.List;

public class Helpers {

    public JSONObject jsonResponse;

    static List<String> data = new ArrayList<>();

    public JSONObject getJsonFromResponse(HttpURLConnection connection) throws IOException, ParseException {

        JSONParser parser = new JSONParser();

        jsonResponse = (JSONObject) parser.parse(getResponse(connection));

        return jsonResponse;

    }

    public boolean isArrayInResponse(JSONObject response, String array){
        return response.containsKey(array);
    }

    public boolean isElementInArrayResponse(JSONObject response, String array, String element){

        boolean result =false;

        JSONArray collectionArray = (JSONArray) response.get(array);

        for(int i = 0; i < collectionArray.size(); i++){
            JSONObject collection = (JSONObject) collectionArray.get(i);
            result = collection.containsKey(element);
            if(!result){break;}
        }

        return result;
    }

    public void readData(String field){

        try(
                BufferedReader br = new BufferedReader(new FileReader("C:\\Users\\H412354\\IdeaProjects\\QAAutomationChallenge\\src\\test\\java\\resources\\Data.txt"));
                CSVParser parser = CSVFormat.DEFAULT.withDelimiter(',').withHeader().parse(br);
        ) {

            for (CSVRecord record: parser){
                data.add(record.get(field));
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public boolean validateData(JSONObject response, String array){

        boolean result =false;

        JSONArray collectionArray = (JSONArray) response.get(array);

        for(int i = 0; i < collectionArray.size(); i++){
            JSONObject collection = (JSONObject) collectionArray.get(i);
            for (int j = 0; i < data.size(); i++){
                result = collection.containsValue(data.get(j));
            }
            if(result){break;}
        }

        return result;

    }

    private String getResponse(HttpURLConnection connection) throws IOException {

        BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));

        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }

        in.close();

        return response.toString();
    }
}
