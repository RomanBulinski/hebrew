package com.example.backend.models;

import javax.persistence.*;

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

    public Word() {
    }

    public String getHebrew() {
        return hebrew;
    }

    public void setHebrew(String hebrew) {
        this.hebrew = hebrew;
    }

    public String getPronunciation() {
        return pronunciation;
    }

    public void setPronunciation(String pronunciation) {
        this.pronunciation = pronunciation;
    }

    public String getPolish() {
        return polish;
    }

    public void setPolish(String polish) {
        this.polish = polish;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
