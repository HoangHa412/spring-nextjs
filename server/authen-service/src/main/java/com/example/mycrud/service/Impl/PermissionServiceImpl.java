package com.example.mycrud.service.Impl;

import com.example.mycrud.entity.Permissions;
import com.example.mycrud.repository.PermissionsRepository;
import com.example.mycrud.repository.RoleRepository;
import com.example.mycrud.service.PermissionService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PermissionServiceImpl implements PermissionService {

    private final PermissionsRepository permissionsRepository;
    private final RoleRepository roleRepository;

    public PermissionServiceImpl(PermissionsRepository permissionsRepository, RoleRepository roleRepository) {
        this.permissionsRepository = permissionsRepository;
        this.roleRepository = roleRepository;
    }


    @Override
    public void createPermissions(Permissions permissions) {
        permissionsRepository.save(permissions);
    }

    @Override
    public List<Permissions> getAll() {
        return permissionsRepository.findAll();
    }

    @Override
    public void deletePermissionsById(Integer id) {
        permissionsRepository.deleteById(id);
    }

    @Override
    public Permissions findById(Integer id) {
        return permissionsRepository.findById(id).orElse(null);
    }

    @Override
    public Permissions updatePermissionsById(Permissions permissions, Integer id) {
        Permissions permissionsToUpdate = findById(id);
        if(permissionsToUpdate != null){
            permissionsToUpdate.setName(permissions.getName());
            permissionsToUpdate.setDescription(permissions.getDescription());
        }
        createPermissions(permissions);
        return permissionsToUpdate;
    }

    @Override
    public Optional<Permissions> getPermissionsByName(String name) {
        return permissionsRepository.findByName(name);
    }

}
