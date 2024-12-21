package com.example.mycrud.model.request;

import lombok.*;
import org.jetbrains.annotations.NotNull;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SignupRequest {
    private String username;
    @NotNull
    private String password;
    @NonNull
    private String cfPassword;
    private String email;
    private String phone;
    private Set<String> roles;
}
