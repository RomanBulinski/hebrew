package com.example.backend.repositories;

import com.example.backend.models.Letter;
import com.example.backend.models.Word;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface WordRepository extends JpaRepository<Word, Long> {


//    void delete(Letter letter);

}
