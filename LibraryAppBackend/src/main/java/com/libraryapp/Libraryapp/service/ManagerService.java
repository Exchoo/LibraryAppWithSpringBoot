package com.libraryapp.Libraryapp.service;

import com.libraryapp.Libraryapp.exception.UserNotFoundException;
import com.libraryapp.Libraryapp.model.Manager;
import com.libraryapp.Libraryapp.repository.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ManagerService {

    private final ManagerRepository managerRepository;

    @Autowired
    public ManagerService(ManagerRepository managerRepository) {
        this.managerRepository = managerRepository;
    }
    public Manager addManager(Manager manager){
        manager.setEmployeeCode(UUID.randomUUID().toString());//Rastgele EmployeeCode verir
        return managerRepository.save(manager); //employee'yi kaydeder
    }

    public List<Manager> findAllManager(){
        return managerRepository.findAll();
    }

    public Manager updateManager(Manager manager){
        return  managerRepository.save(manager);
    }

    public Manager findManagerById(Long id) {
        return managerRepository.findManagerById(id).orElseThrow(()-> new UserNotFoundException( "User by ıd "+ id +"was not found.")); //UserNotFound'un classını biz oluşturduk.
    }

    public void deleteManagerById(Long id){
        managerRepository.deleteById(id);
    }

    public void findBookById(Long id){
        managerRepository.deleteById(id);
    }

}
