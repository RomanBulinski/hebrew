package com.example.backend.words.db;

import com.example.backend.words.doamin.Word;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface WordJpaRepository extends JpaRepository<Word, Long> {


//    void delete(Letter letter);

}
