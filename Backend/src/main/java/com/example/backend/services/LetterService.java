package com.example.backend.services;

import com.example.backend.models.Letter;
import com.example.backend.repositories.LetterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LetterService implements ILetterService {

    @Autowired
    private LetterRepository letterRepository;

    @Override
    public List<Letter> findAllLetters() {
        return (List<Letter>) letterRepository.findAll();
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
