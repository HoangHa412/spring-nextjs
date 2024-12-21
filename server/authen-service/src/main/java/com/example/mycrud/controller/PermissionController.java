package com.example.mycrud.controller;

import com.example.common.constants.ErrorCodes;
import com.example.mycrud.entity.Permissions;
import com.example.mycrud.mapper.PermissionMapper;
import com.example.mycrud.model.PermissionsDto;
import com.example.common.model.BaseResponse;
import com.example.mycrud.service.PermissionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("permissions")
public class PermissionController {

    private final PermissionService permissionService;

    private final PermissionMapper permissionMapper;

    public PermissionController(PermissionService permissionService, PermissionMapper permissionMapper) {
        this.permissionService = permissionService;
        this.permissionMapper = permissionMapper;
    }

    @GetMapping
    public ResponseEntity<?> getAllPermission(){
        List<Permissions> permissions = permissionService.getAll();

        List<PermissionsDto> permissionsDto = new ArrayList<>();
        for(Permissions per: permissions){
            permissionsDto.add(permissionMapper.toPermissionDto(per));
        }
        return ResponseEntity.ok()
                .body(BaseResponse.builder().code(ErrorCodes.SUCCESS.getCode()).message(ErrorCodes.SUCCESS.getMessage()).content(permissionsDto).build());
    }

    @PostMapping
    public ResponseEntity<?> createPermission(@RequestBody PermissionsDto permissionsDto){
        Permissions permissions = permissionMapper.toPermission(permissionsDto);
        permissionService.createPermissions(permissions);
        return ResponseEntity.ok()
                .body(BaseResponse.builder().code(ErrorCodes.SUCCESS.getCode()).message(ErrorCodes.SUCCESS.getMessage()).content(permissions).build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePermission(@PathVariable Integer id){
       if(permissionService.findById(id) != null ){
           permissionService.deletePermissionsById(id);
            return ok(new BaseResponse<>(ErrorCodes.SUCCESS.getCode(), ErrorCodes.SUCCESS.getMessage(), null));
       }else{
           return ok(BaseResponse.builder().code(ErrorCodes.USER_NOT_FOUND.getCode()).message(ErrorCodes.USER_NOT_FOUND.getMessage()).build());
       }
    }

    @PutMapping("{id}")
    public ResponseEntity<?> updatePermission(@RequestBody PermissionsDto permissionsDto, @PathVariable Integer id){
        Permissions permissions = permissionService.updatePermissionsById(permissionMapper.toPermission(permissionsDto), id);
        return ResponseEntity.ok()
                .body(BaseResponse.builder().code(ErrorCodes.SUCCESS.getCode()).message(ErrorCodes.SUCCESS.getMessage()).content(permissions).build());
    }
}
