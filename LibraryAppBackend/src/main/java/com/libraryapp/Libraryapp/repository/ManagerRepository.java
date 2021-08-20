package com.libraryapp.Libraryapp.repository;

import com.libraryapp.Libraryapp.model.Manager;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ManagerRepository extends JpaRepository<Manager,Long> {


    Optional<Manager> findManagerById(Long id);
}
