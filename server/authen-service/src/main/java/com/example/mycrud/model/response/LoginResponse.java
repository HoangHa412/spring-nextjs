package com.example.mycrud.model.response;

import com.example.common.model.BaseResponse;
import lombok.*;
import lombok.experimental.SuperBuilder;

@EqualsAndHashCode(callSuper = true)
@SuperBuilder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponse extends BaseResponse<Object> {
    private String accessToken;
    private String refreshToken;
}
