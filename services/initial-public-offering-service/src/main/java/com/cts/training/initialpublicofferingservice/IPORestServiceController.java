package com.cts.training.initialpublicofferingservice;

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
public class IPORestServiceController {
	
	@Autowired
	IPORepo ir;
	
	@GetMapping("/ipos")
	public List<IPO> findAll() {
		return ir.findAll();
	}
	
	@GetMapping("/ipos/{id}")
	public IPO findOne(@PathVariable int id) {
		Optional<IPO> isr = ir.findById(id);
		IPO is = isr.get();
		return is;
	}
	
	@PostMapping("/ipos")
	public IPO save(@RequestBody IPO isr) {
		IPO is = ir.save(isr);
		return is;
	}
	
	@DeleteMapping("/ipos/{id}")
	public void delete(@PathVariable int id) {
		ir.deleteById(id);
	}
	
	@PutMapping("/ipos")
	public IPO update(@RequestBody IPO isr) {
		IPO is = ir.save(isr);
		return is;
	}
}
