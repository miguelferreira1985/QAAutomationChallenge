@run
  Feature: As a user, I want to see all my collections on my postman

    Background:
      Given I have some collections in Postman

      Scenario: Verify that 200 code is returned for a susccess reponse
        When I send a "valid" GET request
        Then I get a 200 status code in the response

      Scenario: Verify that collections array is in the response
        When I send a "valid" GET request
        Then "collections" array is in the response


      Scenario Outline: Verify that collections array contains "id", "name", "owner" and "uid" elements
        When I send a "valid" GET request
        Then "<array>" array contains "<field>" field into the array
        Examples:
        | array       | field  |
        | collections | id      |
        | collections | name    |
        | collections | owner   |
        | collections | uid     |

      Scenario Outline: Verify that the data in the collections response is the correct
        When I send a "valid" GET request
        And I get "<field>" data from the DB
        Then Data in "<field>" field on "<array>" array in the response match with the data in the DB
        Examples:
          | array       | field  |
          | collections | id      |
          | collections | name    |
          | collections | owner   |
          | collections | uid     |

    Scenario: Verify that 401 code returned from the service when the request is made without token
      When I send a "invalid" GET request
      Then I get a 401 status code in the response


