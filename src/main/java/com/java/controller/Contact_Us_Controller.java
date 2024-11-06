package com.java.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.entity.Contact_Us;
import com.java.services.Contact_Us_Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/contact")
public class Contact_Us_Controller {

	@Autowired
	private Contact_Us_Service service;

	@PostMapping("/contact")
	public ResponseEntity<String> Contact_Us(@RequestBody Contact_Us contcat) {
		service.saveContact(contcat);
		return new ResponseEntity<String>("We will get back shortly.....", HttpStatus.OK);
	}

}
