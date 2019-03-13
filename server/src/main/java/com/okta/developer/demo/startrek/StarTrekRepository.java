package com.okta.developer.demo.startrek;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
interface StarTrekRepository extends JpaRepository<StarTrek, Long> {

}