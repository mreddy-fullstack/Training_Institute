package com.java.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.java.entity.Placed_Student;
import com.java.services.Student_Placed_Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/student")
public class Placed_Student_Controller {

	@Autowired
	private Student_Placed_Service service;

	@PostMapping("/saveStudent")
	public ResponseEntity<Placed_Student> saveStudent(@RequestParam("name") String name,
			@RequestParam("email") String email, @RequestParam("rating") float rating,
			@RequestParam("review") String reviewText, @RequestParam("image") MultipartFile image) throws Exception {

		Placed_Student review = new Placed_Student();
		review.setName(name);
		review.setEmail(email);
		review.setRating(rating);
		review.setReview(reviewText);
		review.setImage(image.getBytes());
		Placed_Student save = service.save(review);
		return new ResponseEntity<>(save, HttpStatus.OK);
	}

	@GetMapping("/getReview")
	public ResponseEntity<List<Placed_Student>> getALL() {
		return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
	}
	@GetMapping("/getStudentReview")
	public ResponseEntity<Placed_Student> getStudent(@RequestParam ("email")String email) {
		return new ResponseEntity<Placed_Student>(service.getByMail(email),HttpStatus.OK);
	}
	

}
