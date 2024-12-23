package com.cozinhahub.cozinhahub.WebConfig;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Permite CORS em todas as rotas
                .allowedOrigins("http://localhost:4200")  // Permite requisições de localhost:4200
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Permite os métodos desejados
                .allowCredentials(true);
    }
}
