package com.example.backend.words.application.port;

import com.example.backend.words.doamin.Word;

import java.util.List;

public interface WordUseCase {

    List<Word> findAllWords();
//    Letter delete(long id);
//    Owner create(Owner owner);
//    Owner findById(int id);
//    Owner update(Owner owner, long id);

}
