package com.cts.training.sectorservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "*")
@RestController
public class SectorRestServiceController {
	
	@Autowired
	SectorRepo sr;
	
	@GetMapping("/sectors")
	public List<Sector> findAll() {
		return sr.findAll();
	}
	
	@GetMapping("/sectors/{id}")
	public Sector findOne(@PathVariable int id) {
		Optional<Sector> ssr = sr.findById(id);
		Sector ss = ssr.get();
		return ss;
	}
	
	@PostMapping("/sectors")
	public Sector save(@RequestBody Sector ssr) {
		Sector ss = sr.save(ssr);
		return ss;
	}
	
	@DeleteMapping("/sectors/{id}")
	public void delete(@PathVariable int id) {
		sr.deleteById(id);
	}
	
	@PutMapping("/sectors")
	public Sector update(@RequestBody Sector ssr) {
		Sector ss = sr.save(ssr);
		return ss;
	}
}
