package com.okta.developer.demo.startrek;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.CrossOrigin;


/**
 * StarTrekController
 */
@RestController
public class StarTrekController {

  private StarTrekRepository repository;

  public StarTrekController(StarTrekRepository repository) {
    this.repository = repository;
  }

  @GetMapping("/real")
  @CrossOrigin(origins = "http://localhost:3000")
  public Collection<StarTrek> realPhrases() {
      return repository.findAll().stream().filter(this::isReal).collect(Collectors.toList());
  }
  @GetMapping("/")
  @CrossOrigin(origins = "http://localhost:3000")
  public Collection<StarTrek> phrases() {
      return repository.findAll().stream().collect(Collectors.toList());
  }

  private boolean isReal(StarTrek starTrek) {
    return !starTrek.getPhrase().equals("I'm Givin' Her All She's Got, Captain!") && !starTrek.getPhrase().equals("Beam Me Up, Scotty");    
  }
  
}
