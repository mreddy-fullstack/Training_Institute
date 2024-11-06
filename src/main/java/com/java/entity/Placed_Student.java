package com.java.entity;

import java.util.Arrays;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Table(name = "Placed_Student")
@Entity
public class Placed_Student {

	@Id
	private String email;
	private String name;
	private float rating;
	private String review;
	@Lob
	private byte[] image;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public Placed_Student(String email, String name, float rating, String review, byte[] image) {
		super();
		this.email = email;
		this.name = name;
		this.rating = rating;
		this.review = review;
		this.image = image;
	}

	public Placed_Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Placed_Student [email=" + email + ", name=" + name + ", rating=" + rating + ", review=" + review
				+ ", image=" + Arrays.toString(image) + "]";
	}
}
