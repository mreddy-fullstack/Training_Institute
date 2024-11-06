package com.java.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.entity.Placed_Student;
import com.java.repository.Placed_Student_Repository;

@Service
public class Student_Placed_Service {

	@Autowired
	private Placed_Student_Repository repo;

	public Student_Placed_Service(Placed_Student_Repository repo) {
		super();
		this.repo = repo;
	}

	public Placed_Student save(Placed_Student student) {
		return repo.save(student);
	}

	public Placed_Student getByMail(String email) {
		return repo.findById(email).orElse(null);
	}

	public List<Placed_Student> getAll() {
		return repo.findAll();
	}

}
