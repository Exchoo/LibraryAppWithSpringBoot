package com.libraryapp.Libraryapp.Control;

import com.libraryapp.Libraryapp.model.Manager;
import com.libraryapp.Libraryapp.service.ManagerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/manager")
public class ManagerControl {


    private final ManagerService managerService;


    public ManagerControl(ManagerService managerService) {
        this.managerService = managerService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Manager>> getAllManagers(){ //ResponseE. içine direkt manager list alıyor
        List<Manager> managers = managerService.findAllManager();
        return new ResponseEntity<>(managers, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Manager>getManagersById(@PathVariable("id") Long id){ //ResponseE. içine direkt manager alıyor
        Manager managers= managerService.findManagerById(id);
        return new ResponseEntity<>(managers, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Manager> addManager(@RequestBody Manager manager){
        Manager newEmployee= managerService.addManager(manager);
        return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Manager> updateManager(@RequestBody Manager manager){
        Manager updateEmployee= managerService.updateManager(manager);
        return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
    }

    @DeleteMapping(value="/delete/{id}")
    public ResponseEntity<Boolean> deleteManager(@PathVariable("id") Long id){
        managerService.deleteManagerById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
