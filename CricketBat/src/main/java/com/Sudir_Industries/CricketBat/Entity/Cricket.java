package com.Sudir_Industries.CricketBat.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Cricket {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bat_size;
	private String bat_type;
	private String cricket_bat_brands;
	private String weight;
	private String grip;
	private String different_shapes;
	private String price;

	public Cricket(int bat_size, String bat_type, String cricket_bat_brands, String weight, String grip,
			String different_shapes, String price) {
		super();
		this.bat_size = bat_size;
		this.bat_type = bat_type;
		this.cricket_bat_brands = cricket_bat_brands;
		this.weight = weight;
		this.grip = grip;
		this.different_shapes = different_shapes;
		this.price = price;
	}

	public int getBat_size() {
		return bat_size;
	}

	public void setBat_size(int bat_size) {
		this.bat_size = bat_size;
	}

	public String getBat_type() {
		return bat_type;
	}

	public void setBat_type(String bat_type) {
		this.bat_type = bat_type;
	}

	public String getCricket_bat_brands() {
		return cricket_bat_brands;
	}

	public void setCricket_bat_brands(String cricket_bat_brands) {
		this.cricket_bat_brands = cricket_bat_brands;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public String getGrip() {
		return grip;
	}

	public void setGrip(String grip) {
		this.grip = grip;
	}

	public String getDifferent_shapes() {
		return different_shapes;
	}

	public void setDifferent_shapes(String different_shapes) {
		this.different_shapes = different_shapes;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public Cricket() {

	}
}
