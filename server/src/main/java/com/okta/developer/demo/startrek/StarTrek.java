package com.okta.developer.demo.startrek;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * StarTrek
 */
@Entity
public class StarTrek {

  @Id
  @GeneratedValue
  private Long id;
  private String phrase;

  public StarTrek() {}

  public StarTrek(String phrase) {
    this.phrase = phrase;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getPhrase() {
    return phrase;
  }

  public void setPhrase(String phrase) {
    this.phrase = phrase;
  }

  @Override
  public String toString() {
    return "StarTrek{" + "id=" + id + ", phrase='" + phrase + "'" + "}"; 
  }
  
}