package com.example.backend.words.doamin;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
@Table(name = "words")
//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Word {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(fetch = FetchType.EAGER)
    private Long id;
    private String hebrew;
    private String pronunciation;
    private String polish;
    private String description;

}
