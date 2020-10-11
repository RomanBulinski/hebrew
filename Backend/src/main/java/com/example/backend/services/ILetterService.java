package com.example.backend.services;

import com.example.backend.models.Letter;

import java.util.List;

public interface ILetterService {

    List<Letter> findAllLetters();
//    Letter delete(long id);
//    Owner create(Owner owner);
//    Owner findById(int id);
//    Owner update(Owner owner, long id);

}
