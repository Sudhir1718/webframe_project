package com.Sudir_Industries.CricketBat.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Sudir_Industries.CricketBat.Entity.Cricket;
import com.Sudir_Industries.CricketBat.Service.CricketService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CricketController {

	@Autowired
	public CricketService vk;

	@GetMapping("/show")
	public List<Cricket> get() {
		return vk.getaddress();
	}
	
	@GetMapping("/show/{id}")
	public Cricket get(@PathVariable("id") int id) {
		return vk.getById(id);
	}


	@PostMapping("/add")
	public Cricket post(@RequestBody Cricket q) {
		return vk.addaddress(q);
	}

	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable int id) {
		vk.deleteaddress(id);
		return "Deleted";	
	}

	@PutMapping("/update/{id}")
	public Cricket put(@PathVariable int id, @RequestBody Cricket e) {
		return vk.updateaddress(id, e);
	}
	
		

}
