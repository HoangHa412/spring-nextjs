package com.example.mycrud.exception;

import com.example.common.constants.ErrorCodes;
import io.jsonwebtoken.JwtException;
import com.example.common.model.BaseResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.nio.file.AccessDeniedException;

@ControllerAdvice
public class GobalExceptionHandler {
    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<BaseResponse<?>> handleBadCredentialsException(Exception ex) {

        BaseResponse<String> response = new BaseResponse<>();

        response.setCode(ErrorCodes.INVALID_CREDENTIALS.getCode());
        response.setMessage(ErrorCodes.INVALID_CREDENTIALS.getMessage());
        response.setContent(ex.getMessage());

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
    }

    @ExceptionHandler(value = UsernameNotFoundException.class)
    ResponseEntity<BaseResponse<String>> handlingCustomException(UsernameNotFoundException exception) {
        BaseResponse<String> response = new BaseResponse<>();

        response.setCode(ErrorCodes.USER_NOT_FOUND.getCode());
        response.setMessage(ErrorCodes.USER_NOT_FOUND.getMessage());

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
    }

    @ExceptionHandler(value = Exception.class)
    ResponseEntity<?> handlingException(Exception exception) {

        BaseResponse<String> response = new BaseResponse();

        response.setCode(ErrorCodes.UNCATEGORIZED_EXCEPTION.getCode());
        response.setMessage(ErrorCodes.UNCATEGORIZED_EXCEPTION.getMessage());
        response.setContent(exception.getMessage());

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }

    @ExceptionHandler(value = AccessDeniedException.class)
    ResponseEntity<BaseResponse<String>> handlingJwtException(JwtException exception) {
        BaseResponse<String> response = new BaseResponse<>();

        response.setCode(ErrorCodes.FORBIDDEN.getCode());
        response.setMessage(ErrorCodes.FORBIDDEN.getMessage());
        response.setContent(exception.getMessage());

        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(response);

    }

//    @ExceptionHandler(value = AuthenticationException.class)
//    ResponseEntity<BaseResponse<String>> handlingCustomException(AuthenticationException exception) {
//        BaseResponse<String> response = new BaseResponse<>();
//
//        response.setCode(ErrorCodes.INVALID_CREDENTIALS.getCode());
//        response.setMessage(ErrorCodes.INVALID_CREDENTIALS.getMessage());
//
//
//        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
//    }

}
