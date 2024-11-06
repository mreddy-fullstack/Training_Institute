package com.java.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.entity.Placed_Student;

@Repository
public interface Placed_Student_Repository extends JpaRepository<Placed_Student, String> {

}
