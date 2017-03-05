package com.zsoltfabok;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class MonitoringApi {
  @RequestMapping(value = "/monitoring", method = RequestMethod.GET, produces = {"application/json"})
  public String get() {
    return "{"
      + "\"generated_at\": \"generated_at\",\n"
      + "\"graphs\": [{\n"
          + "\"title\": \"title\",\n"
          + "\"data\": [\n"
          + "  {\"date\": \"2017-03-05 15:01\", \"200\":3, \"404\":37, \"500\":0},\n"
          + "  {\"date\": \"2017-03-05 15:02\", \"200\":30, \"404\":2, \"500\":3},\n"
          + "  {\"date\": \"2017-03-05 15:03\", \"200\":10, \"404\":4, \"500\":7},\n"
          + "  {\"date\": \"2017-03-05 15:04\", \"200\":3, \"404\":7, \"500\":0},\n"
          + "  {\"date\": \"2017-03-05 15:05\", \"200\":10, \"404\":4, \"500\":1}\n"
          + "]\n"
        + "}]}\n";
  }
}
