package com.example.mycrud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
@EnableCaching
public class MycrudApplication {

    public static void main(String[] args) {
        SpringApplication.run(MycrudApplication.class, args);
    }
    // Implementing simple caching for demonstration purposes

}
