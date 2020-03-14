package com.cts.training.stockexchangeservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
@EnableDiscoveryClient
@SpringBootApplication
public class StockexchangeServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockexchangeServiceApplication.class, args);
	}

}
