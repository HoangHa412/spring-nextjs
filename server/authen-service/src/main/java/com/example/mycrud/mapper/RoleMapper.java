package com.example.mycrud.mapper;

import com.example.mycrud.entity.Permissions;
import com.example.mycrud.entity.Role;
import com.example.mycrud.model.RoleDto;
import com.example.mycrud.service.PermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;


@Component
public class RoleMapper {

    @Autowired
    private PermissionService permissionService;
    public Role toRole(RoleDto roleDto){
        Role role = new Role();
        role.setRoleId(roleDto.getId());
        role.setName(role.getName());
        Set<Permissions> permissions = new HashSet<>();
        roleDto.getPermissions().forEach(permissionsName ->{
            Optional<Permissions> permission = permissionService.getPermissionsByName(permissionsName);
            permission.ifPresent(permissions::add);
        });
        role.setPermissions(permissions);
        return role;
    }


    public RoleDto toRoleDto(Role role){
        RoleDto roleDto = new RoleDto();
        roleDto.setId(role.getRoleId());
        roleDto.setName(role.getName());
        roleDto.setPermissions(role.getPermissions().stream().map(Permissions::getName).collect(Collectors.toSet()));
        return roleDto;
    }
}


