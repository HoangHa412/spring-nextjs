package com.example.mycrud.service.Impl;

import com.example.mycrud.entity.Role;
import com.example.mycrud.repository.PermissionsRepository;
import com.example.mycrud.repository.RoleRepository;
import com.example.mycrud.service.RoleService;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class RoleServiceImpl implements RoleService {
    private final RoleRepository roleRepository;

    private final PermissionsRepository permissionsRepository;

    public RoleServiceImpl(RoleRepository roleRepository, PermissionsRepository permissionsRepository) {
        this.roleRepository = roleRepository;
        this.permissionsRepository = permissionsRepository;
    }

    @Override
    public Role createRole(Role role) {
       return roleRepository.save(role);
    }

    @Override
    public void deleteRoleById(Integer id) {
        roleRepository.deleteById(id);
    }

    @Override
    public Role findById(Integer id) {
        return roleRepository.findById(id).orElse(null);
    }

    @Override
    public List<Role> getAll() {
        return roleRepository.findAll();
    }

    @Override
    public Optional<Role> getRoleByName(String name) {
        return roleRepository.findByName(name);
    }
}
