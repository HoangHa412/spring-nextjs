package com.example.mycrud.repository;

import com.example.mycrud.entity.Permissions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PermissionsRepository extends JpaRepository<Permissions, Integer> {
    Optional<Permissions> findByName(String name);
}
