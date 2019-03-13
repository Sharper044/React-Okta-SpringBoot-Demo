package com.okta.developer.demo.startrek;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.util.stream.Stream;

/**
 * StarTrekCommandLineRunner
 */
@Component
public class StarTrekCommandLineRunner implements CommandLineRunner {

  private final StarTrekRepository repository;

  public StarTrekCommandLineRunner(StarTrekRepository repository) {
    this.repository = repository;
  }

  @Override
  public void run(String... strings) throws Exception {
    // Top Star Trek quotes
    Stream.of("Live Long and Prosper", "Highly Illogical...", "Beam Me Up, Scotty", "I'm A Doctor, Not A...", "Make It So", "To Boldly Go Where No Man Has Gone Before...", "Khaaaannnn!", "I'm Givin' Her All She's Got, Captain!", "Nuclear Wessels", "Resistance Is Futile", "Set Phasers To Stun").forEach(phrase -> repository.save(new StarTrek(phrase)));
    repository.findAll().forEach(System.out::println);
  }
  
}