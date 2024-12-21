package com.example.mycrud.service;
import com.example.mycrud.entity.Permissions;

import java.util.List;
import java.util.Optional;

public interface PermissionService {
    void createPermissions(Permissions permissions);

    List<Permissions> getAll();

    void deletePermissionsById(Integer id);

    Permissions findById(Integer id);

    Permissions updatePermissionsById (Permissions permissions, Integer id);

    Optional<Permissions> getPermissionsByName(String name);

}
