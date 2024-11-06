package com.java.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.entity.Contact_Us;
import com.java.repository.Contact_Us_Repository;

@Service
public class Contact_Us_Service {

	@Autowired
	private Contact_Us_Repository repo;

	public Contact_Us_Service(Contact_Us_Repository repo) {
		super();
		this.repo = repo;
	}

	public void saveContact(Contact_Us contcat) {
		repo.save(contcat);

	}

}
