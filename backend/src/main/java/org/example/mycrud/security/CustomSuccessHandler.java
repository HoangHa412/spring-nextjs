package org.example.mycrud.security;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.example.mycrud.entity.User;
import org.example.mycrud.repository.UserRepository;
import org.example.mycrud.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Component
public class CustomSuccessHandler implements AuthenticationSuccessHandler {

    private final UserRepository userRepository;

    private final JwtUtils jwtUtils;

    final
    RedisTemplate<String, Object> redisTemplate;

    @Value("${mycrud.jwtRefreshExperition}")
    private int jwtRefreshExprition;

    public CustomSuccessHandler(UserRepository userRepository, JwtUtils jwtUtils, RedisTemplate<String, Object> redisTemplate) {
        this.userRepository = userRepository;
        this.jwtUtils = jwtUtils;
        this.redisTemplate = redisTemplate;
    }

    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        String redirect = null;
        String token = null;
        String refreshToken = null;
        if (authentication.getPrincipal() instanceof DefaultOAuth2User oAuth2User) {
            String username = oAuth2User.getAttribute("email");
            User user = userRepository.findUsersByEmail(username);
            UserDetailsImpl userDetails = UserDetailsImpl.build(user);
            List<String> permission = userDetails.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .toList();
            token = jwtUtils.generateToken(userDetails, permission);
            refreshToken = jwtUtils.generateRefreshToken(userDetails);
            redisTemplate.opsForValue().set(refreshToken, true, jwtRefreshExprition, TimeUnit.MINUTES);
        }

        redirect = "http://localhost:3000/login/loading?token=" + token;
        new DefaultRedirectStrategy().sendRedirect(request, response, redirect);
    }
}
