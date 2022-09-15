package com.example.servicoshow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"com.example.servicoshow"})
@ComponentScan({"Servicos","com.example.servicoshow"})
@EntityScan("Models")
@EnableJpaRepositories("Repository")
public class ServicoShowApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServicoShowApplication.class, args);
	}

}
