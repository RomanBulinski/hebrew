package com.example.backend.repositories;

import com.example.backend.models.Letter;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface LetterRepository extends JpaRepository<Letter, Long> {


//    void delete(Letter letter);

}
