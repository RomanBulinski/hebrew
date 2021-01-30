package com.example.backend.services;

import com.example.backend.models.Word;
import com.example.backend.repositories.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WordService implements IWordService {

    @Autowired
    private WordRepository wordRepository;

    @Override
    public List<Word> findAllWords() {
        return (List<Word>) wordRepository.findAll();
    }

//    @Override
//    public Letter delete(long id) {
//        Letter letter = letterRepository.findById(id).get();
//        if(letter != null){
//            letterRepository.delete(letter);
//        }
//        return letter;
//    }

//    @Override
//    public Owner create(Owner owner) {
//        return ownerRepository.save(owner);
//    }

//    @Override
//    public Owner findById(int id) {
//        long longId = (long) id;
//        return ownerRepository.getOne(longId);
//    }

//    @Override
//    public Owner update(Owner owner, long id) {
//        Owner ownerFromRepository = ownerRepository.findById(id).get();
//        if (ownerFromRepository != null) {
//            owner.setId(id);
//            ownerRepository.save(owner);
//        }else{
//            return null;
//        }
//        return owner;
//    }
}
