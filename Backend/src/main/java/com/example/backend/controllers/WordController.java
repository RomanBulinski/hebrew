package com.example.backend.controllers;

import com.example.backend.models.Letter;
import com.example.backend.models.Word;
import com.example.backend.services.LetterService;
import com.example.backend.services.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;


@CrossOrigin
@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/words")
public class WordController {

    @Autowired
    private WordService wordService;

    @GetMapping()
    public List<Word> findLetters(HttpServletResponse response) {
        List<Word> words = wordService.findAllWords();
        response.setStatus(201);
        return words;
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
