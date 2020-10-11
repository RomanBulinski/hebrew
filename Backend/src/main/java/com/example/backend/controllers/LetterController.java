package com.example.backend.controllers;

import com.example.backend.models.Letter;
import com.example.backend.services.LetterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;


@CrossOrigin
@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/letters")
public class LetterController {

    @Autowired
    private LetterService letterService;

    @GetMapping()
    public List<Letter> findLetters(HttpServletResponse response) {
        List<Letter> letters = letterService.findAllLetters();
        response.setStatus(201);
        return letters;
    }

//    @GetMapping(path = {"/{id}"})
//    public Owner findOne(@PathVariable("id") int id) {
//        return ownerService.findById(id);
//    }

//    @DeleteMapping(path = {"/{id}"})
//    public Owner delete(@PathVariable("id") int id) {
//        return ownerService.delete(id);
//    }

//    @PostMapping()
//    public Owner create(@RequestBody Owner owner) {
//        return ownerService.create(owner);
//    }

//    @PutMapping
//    public Owner update(@RequestBody Owner owner){
//        return ownerService.update(owner);
//    }

//    @PutMapping(path = {"/{id}"})
//    public Owner update(@RequestBody Owner owner, @PathVariable long id) {
//        return ownerService.update(owner, id);
//    }


}
