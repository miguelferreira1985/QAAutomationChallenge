$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/collections.feature");
formatter.feature({
  "line": 2,
  "name": "As a user, I want to see all my collections on my postman",
  "description": "",
  "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have some collections in Postman",
  "keyword": "Given "
});
formatter.match({
  "location": "CollectionsDefinition.i_have_some_collections_in_postman()"
});
formatter.result({
  "duration": 465971400,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify that 200 code is returned for a success response",
  "description": "",
  "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-200-code-is-returned-for-a-success-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I send a \"valid\" GET request",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I get a 200 status code in the response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 10
    }
  ],
  "location": "CollectionsDefinition.i_send_a_get_request(String)"
});
formatter.result({
  "duration": 3531733000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 8
    }
  ],
  "location": "CollectionsDefinition.i_get_a_status_code_in_the_response(int)"
});
formatter.result({
  "duration": 7099700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have some collections in Postman",
  "keyword": "Given "
});
formatter.match({
  "location": "CollectionsDefinition.i_have_some_collections_in_postman()"
});
formatter.result({
  "duration": 121800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify that collections array is in the response",
  "description": "",
  "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-collections-array-is-in-the-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I send a \"valid\" GET request",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "\"collections\" array is in the response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 10
    }
  ],
  "location": "CollectionsDefinition.i_send_a_get_request(String)"
});
formatter.result({
  "duration": 764935400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "collections",
      "offset": 1
    }
  ],
  "location": "CollectionsDefinition.collections_array_is_in_the_response(String)"
});
formatter.result({
  "duration": 249100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Verify that collections array contains \"id\", \"name\", \"owner\" and \"uid\" elements",
  "description": "",
  "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-collections-array-contains-\"id\",-\"name\",-\"owner\"-and-\"uid\"-elements",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I send a \"valid\" GET request",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "\"\u003carray\u003e\" array contains \"\u003cfield\u003e\" field into the array",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-collections-array-contains-\"id\",-\"name\",-\"owner\"-and-\"uid\"-elements;",
  "rows": [
    {
      "cells": [
        "array",
        "field"
      ],
      "line": 20,
      "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-collections-array-contains-\"id\",-\"name\",-\"owner\"-and-\"uid\"-elements;;1"
    },
    {
      "cells": [
        "collections",
        "id"
      ],
      "line": 21,
      "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-collections-array-contains-\"id\",-\"name\",-\"owner\"-and-\"uid\"-elements;;2"
    },
    {
      "cells": [
        "collections",
        "name"
      ],
      "line": 22,
      "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-collections-array-contains-\"id\",-\"name\",-\"owner\"-and-\"uid\"-elements;;3"
    },
    {
      "cells": [
        "collections",
        "owner"
      ],
      "line": 23,
      "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-collections-array-contains-\"id\",-\"name\",-\"owner\"-and-\"uid\"-elements;;4"
    },
    {
      "cells": [
        "collections",
        "uid"
      ],
      "line": 24,
      "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-collections-array-contains-\"id\",-\"name\",-\"owner\"-and-\"uid\"-elements;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have some collections in Postman",
  "keyword": "Given "
});
formatter.match({
  "location": "CollectionsDefinition.i_have_some_collections_in_postman()"
});
formatter.result({
  "duration": 79500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify that collections array contains \"id\", \"name\", \"owner\" and \"uid\" elements",
  "description": "",
  "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-collections-array-contains-\"id\",-\"name\",-\"owner\"-and-\"uid\"-elements;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I send a \"valid\" GET request",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "\"collections\" array contains \"id\" field into the array",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 10
    }
  ],
  "location": "CollectionsDefinition.i_send_a_get_request(String)"
});
formatter.result({
  "duration": 774792900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "collections",
      "offset": 1
    },
    {
      "val": "id",
      "offset": 30
    }
  ],
  "location": "CollectionsDefinition.collections_array_contains_field_into_the_the_array(String,String)"
});
formatter.result({
  "duration": 325200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have some collections in Postman",
  "keyword": "Given "
});
formatter.match({
  "location": "CollectionsDefinition.i_have_some_collections_in_postman()"
});
formatter.result({
  "duration": 94400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify that collections array contains \"id\", \"name\", \"owner\" and \"uid\" elements",
  "description": "",
  "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-collections-array-contains-\"id\",-\"name\",-\"owner\"-and-\"uid\"-elements;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I send a \"valid\" GET request",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "\"collections\" array contains \"name\" field into the array",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 10
    }
  ],
  "location": "CollectionsDefinition.i_send_a_get_request(String)"
});
formatter.result({
  "duration": 767907600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "collections",
      "offset": 1
    },
    {
      "val": "name",
      "offset": 30
    }
  ],
  "location": "CollectionsDefinition.collections_array_contains_field_into_the_the_array(String,String)"
});
formatter.result({
  "duration": 208300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have some collections in Postman",
  "keyword": "Given "
});
formatter.match({
  "location": "CollectionsDefinition.i_have_some_collections_in_postman()"
});
formatter.result({
  "duration": 72500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify that collections array contains \"id\", \"name\", \"owner\" and \"uid\" elements",
  "description": "",
  "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-collections-array-contains-\"id\",-\"name\",-\"owner\"-and-\"uid\"-elements;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I send a \"valid\" GET request",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "\"collections\" array contains \"owner\" field into the array",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 10
    }
  ],
  "location": "CollectionsDefinition.i_send_a_get_request(String)"
});
formatter.result({
  "duration": 567805100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "collections",
      "offset": 1
    },
    {
      "val": "owner",
      "offset": 30
    }
  ],
  "location": "CollectionsDefinition.collections_array_contains_field_into_the_the_array(String,String)"
});
formatter.result({
  "duration": 179200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have some collections in Postman",
  "keyword": "Given "
});
formatter.match({
  "location": "CollectionsDefinition.i_have_some_collections_in_postman()"
});
formatter.result({
  "duration": 93200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that collections array contains \"id\", \"name\", \"owner\" and \"uid\" elements",
  "description": "",
  "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-collections-array-contains-\"id\",-\"name\",-\"owner\"-and-\"uid\"-elements;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I send a \"valid\" GET request",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "\"collections\" array contains \"uid\" field into the array",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 10
    }
  ],
  "location": "CollectionsDefinition.i_send_a_get_request(String)"
});
formatter.result({
  "duration": 765073900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "collections",
      "offset": 1
    },
    {
      "val": "uid",
      "offset": 30
    }
  ],
  "location": "CollectionsDefinition.collections_array_contains_field_into_the_the_array(String,String)"
});
formatter.result({
  "duration": 178800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Verify that the data in the collections response is the correct",
  "description": "",
  "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-the-data-in-the-collections-response-is-the-correct",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I send a \"valid\" GET request",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I get \"\u003cfield\u003e\" data from the DB",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Data in \"\u003cfield\u003e\" field on \"\u003carray\u003e\" array in the response match with the data in the DB",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-the-data-in-the-collections-response-is-the-correct;",
  "rows": [
    {
      "cells": [
        "array",
        "field"
      ],
      "line": 31,
      "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-the-data-in-the-collections-response-is-the-correct;;1"
    },
    {
      "cells": [
        "collections",
        "id"
      ],
      "line": 32,
      "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-the-data-in-the-collections-response-is-the-correct;;2"
    },
    {
      "cells": [
        "collections",
        "name"
      ],
      "line": 33,
      "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-the-data-in-the-collections-response-is-the-correct;;3"
    },
    {
      "cells": [
        "collections",
        "owner"
      ],
      "line": 34,
      "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-the-data-in-the-collections-response-is-the-correct;;4"
    },
    {
      "cells": [
        "collections",
        "uid"
      ],
      "line": 35,
      "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-the-data-in-the-collections-response-is-the-correct;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have some collections in Postman",
  "keyword": "Given "
});
formatter.match({
  "location": "CollectionsDefinition.i_have_some_collections_in_postman()"
});
formatter.result({
  "duration": 207400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify that the data in the collections response is the correct",
  "description": "",
  "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-the-data-in-the-collections-response-is-the-correct;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I send a \"valid\" GET request",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I get \"id\" data from the DB",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Data in \"id\" field on \"collections\" array in the response match with the data in the DB",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 10
    }
  ],
  "location": "CollectionsDefinition.i_send_a_get_request(String)"
});
formatter.result({
  "duration": 778312300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id",
      "offset": 7
    }
  ],
  "location": "CollectionsDefinition.i_get_data_from_db(String)"
});
formatter.result({
  "duration": 22539600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id",
      "offset": 9
    },
    {
      "val": "collections",
      "offset": 23
    }
  ],
  "location": "CollectionsDefinition.data_in_field_on_array_is_correct(String,String)"
});
formatter.result({
  "duration": 335500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have some collections in Postman",
  "keyword": "Given "
});
formatter.match({
  "location": "CollectionsDefinition.i_have_some_collections_in_postman()"
});
formatter.result({
  "duration": 122500,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify that the data in the collections response is the correct",
  "description": "",
  "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-the-data-in-the-collections-response-is-the-correct;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I send a \"valid\" GET request",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I get \"name\" data from the DB",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Data in \"name\" field on \"collections\" array in the response match with the data in the DB",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 10
    }
  ],
  "location": "CollectionsDefinition.i_send_a_get_request(String)"
});
formatter.result({
  "duration": 783268500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 7
    }
  ],
  "location": "CollectionsDefinition.i_get_data_from_db(String)"
});
formatter.result({
  "duration": 1847000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 9
    },
    {
      "val": "collections",
      "offset": 25
    }
  ],
  "location": "CollectionsDefinition.data_in_field_on_array_is_correct(String,String)"
});
formatter.result({
  "duration": 206900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have some collections in Postman",
  "keyword": "Given "
});
formatter.match({
  "location": "CollectionsDefinition.i_have_some_collections_in_postman()"
});
formatter.result({
  "duration": 125300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify that the data in the collections response is the correct",
  "description": "",
  "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-the-data-in-the-collections-response-is-the-correct;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I send a \"valid\" GET request",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I get \"owner\" data from the DB",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Data in \"owner\" field on \"collections\" array in the response match with the data in the DB",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 10
    }
  ],
  "location": "CollectionsDefinition.i_send_a_get_request(String)"
});
formatter.result({
  "duration": 521524000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "owner",
      "offset": 7
    }
  ],
  "location": "CollectionsDefinition.i_get_data_from_db(String)"
});
formatter.result({
  "duration": 1282300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "owner",
      "offset": 9
    },
    {
      "val": "collections",
      "offset": 26
    }
  ],
  "location": "CollectionsDefinition.data_in_field_on_array_is_correct(String,String)"
});
formatter.result({
  "duration": 280900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have some collections in Postman",
  "keyword": "Given "
});
formatter.match({
  "location": "CollectionsDefinition.i_have_some_collections_in_postman()"
});
formatter.result({
  "duration": 101300,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify that the data in the collections response is the correct",
  "description": "",
  "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-the-data-in-the-collections-response-is-the-correct;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I send a \"valid\" GET request",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I get \"uid\" data from the DB",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Data in \"uid\" field on \"collections\" array in the response match with the data in the DB",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 10
    }
  ],
  "location": "CollectionsDefinition.i_send_a_get_request(String)"
});
formatter.result({
  "duration": 773285700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "uid",
      "offset": 7
    }
  ],
  "location": "CollectionsDefinition.i_get_data_from_db(String)"
});
formatter.result({
  "duration": 1143000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "uid",
      "offset": 9
    },
    {
      "val": "collections",
      "offset": 24
    }
  ],
  "location": "CollectionsDefinition.data_in_field_on_array_is_correct(String,String)"
});
formatter.result({
  "duration": 218000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have some collections in Postman",
  "keyword": "Given "
});
formatter.match({
  "location": "CollectionsDefinition.i_have_some_collections_in_postman()"
});
formatter.result({
  "duration": 72300,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify that 401 code returned from the service when the request is made without token",
  "description": "",
  "id": "as-a-user,-i-want-to-see-all-my-collections-on-my-postman;verify-that-401-code-returned-from-the-service-when-the-request-is-made-without-token",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "I send a \"invalid\" GET request",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I get a 401 status code in the response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 10
    }
  ],
  "location": "CollectionsDefinition.i_send_a_get_request(String)"
});
formatter.result({
  "duration": 148557300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 8
    }
  ],
  "location": "CollectionsDefinition.i_get_a_status_code_in_the_response(int)"
});
formatter.result({
  "duration": 210400,
  "status": "passed"
});
});