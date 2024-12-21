package com.example.mycrud.service;

import com.example.mycrud.entity.Role;

import java.util.List;
import java.util.Optional;

public interface RoleService {

    Role createRole(Role role);

    void deleteRoleById(Integer id);

    Role findById(Integer id);

    List<Role> getAll();

    Optional<Role> getRoleByName(String name);
}
