package com.cts.training.stockexchangeservice;

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
public class StockExchangeRestServiceController {
	
	@Autowired
	StockExchangeRepo ser;
	
	@GetMapping("/stockexchanges")
	public List<StockExchange> findAll() {
		return ser.findAll();
	}
	
	@GetMapping("/stockexchanges/{id}")
	public StockExchange findOne(@PathVariable int id) {
		Optional<StockExchange> sesr = ser.findById(id);
		StockExchange ses = sesr.get();
		return ses;
	}
	
	@PostMapping("/stockexchanges")
	public StockExchange save(@RequestBody StockExchange sesr) {
		StockExchange ses = ser.save(sesr);
		return ses;
	}
	
	@DeleteMapping("/stockexchanges/{id}")
	public void delete(@PathVariable int id) {
		ser.deleteById(id);
	}
	
	@PutMapping("/stockexchanges")
	public StockExchange update(@RequestBody StockExchange sesr) {
		StockExchange ses = ser.save(sesr);
		return ses;
	}
}
