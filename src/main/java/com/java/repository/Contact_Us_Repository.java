package com.java.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.java.entity.Contact_Us;

@Repository
public interface Contact_Us_Repository extends JpaRepository<Contact_Us, Long> {

}
