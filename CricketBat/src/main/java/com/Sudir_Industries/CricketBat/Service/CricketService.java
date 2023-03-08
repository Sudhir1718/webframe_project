package com.Sudir_Industries.CricketBat.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Sudir_Industries.CricketBat.Entity.Cricket;
import com.Sudir_Industries.CricketBat.Repository.CricketRepo;

@Service
public class CricketService {

	@Autowired
	public CricketRepo r;
	
	//get
	public List<Cricket> getaddress(){
		List<Cricket> arr=new ArrayList<>();
				return r.findAll();
	}
	//post
	public Cricket addaddress(Cricket s) {
		return r.saveAndFlush(s);
	}
	//delete
	public void deleteaddress(int id) {
     r.deleteById(id);
	}
	//put
	public Cricket updateaddress(int id,Cricket e) {
		return r.saveAndFlush(e);
	}
	public Cricket getById(int id) {
		return r.findById(id).get();
	}
	
	
}
