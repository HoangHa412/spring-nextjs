package com.example.apigateway.security;

import com.example.common.utils.JwtUtil;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.ReactiveAuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class AuthenticationManager implements ReactiveAuthenticationManager {

    @Value("${mycrud.jwtSecret}")
    private String jwtSecret;

    @Override
    public Mono<Authentication> authenticate(Authentication authentication) {
        String authToken = authentication.getCredentials().toString();

        return Mono.just(JwtUtil.validateJwtToken(authToken, jwtSecret))
                .filter(valid -> valid)
                .switchIfEmpty(Mono.empty())
                .map(jwt -> {
                    Claims claims = JwtUtil.getAllClaimsFromToken(authToken, jwtSecret);
                    List<String> rolesMap = claims.get("authorities", ArrayList.class);
                    if(rolesMap == null) rolesMap = new ArrayList<>();

                    List<GrantedAuthority> list = rolesMap.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
                    return new UsernamePasswordAuthenticationToken(
                            claims.get("sub", String.class),
                            null,
                            list
                    );
                });
    }
}
