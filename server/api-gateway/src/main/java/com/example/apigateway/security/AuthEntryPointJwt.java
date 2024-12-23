package com.example.apigateway.security;

import com.example.common.constants.ErrorCodes;
import com.example.common.model.BaseResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.server.ServerAuthenticationEntryPoint;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.nio.charset.StandardCharsets;

public class AuthEntryPointJwt implements ServerAuthenticationEntryPoint {
    private static final Logger logger = LoggerFactory.getLogger(AuthEntryPointJwt.class);

    @Override
    public Mono<Void> commence(ServerWebExchange exchange, AuthenticationException ex) {
        logger.error("Unauthorized error: {}", ex.getMessage());

        ServerHttpResponse response = exchange.getResponse();
        response.setStatusCode(HttpStatus.UNAUTHORIZED);
        response.getHeaders().set(HttpHeaders.CONTENT_TYPE, "application/json");
        ObjectMapper objectMapper = new ObjectMapper();
        byte[] resultAsByteArr;
        try {
            String result =
                    objectMapper.writeValueAsString(BaseResponse.builder()
                            .code(ErrorCodes.UNAUTHORIZED.getCode())
                            .message(ErrorCodes.UNAUTHORIZED.getMessage()).build());
            resultAsByteArr = result.getBytes(StandardCharsets.UTF_8);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        return response.writeWith(
                Mono.just(
                        response.bufferFactory().allocateBuffer(resultAsByteArr.length).write(resultAsByteArr)
                )
        );
    }
}
