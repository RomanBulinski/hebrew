package com.example.backend.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "letters")
//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Letter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(fetch = FetchType.EAGER)
    private Long id;
    private String letterh;
    private String letterp;
    private String pronunciation;
    private String letterh2;

    public Letter() {
    }

    public Letter(String letterh, String letterp, String pronunciation, String letterh2) {
        this.letterh = letterh;
        this.letterp = letterp;
        this.pronunciation = pronunciation;
        this.letterh2 = letterh2;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLetterh() {
        return letterh;
    }

    public void setLetterh(String letterh) {
        this.letterh = letterh;
    }

    public String getLetterp() {
        return letterp;
    }

    public void setLetterp(String letterp) {
        this.letterp = letterp;
    }

    public String getPronuncation() {
        return pronunciation;
    }

    public void setPronuncation(String pronuncation) {
        this.pronunciation = pronuncation;
    }

    public String getLetterh2() {
        return letterh2;
    }

    public void setLetterh2(String letterh2) {
        this.letterh2 = letterh2;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Letter letter = (Letter) o;
        return Objects.equals(id, letter.id) &&
                Objects.equals(letterh, letter.letterh) &&
                Objects.equals(letterp, letter.letterp) &&
                Objects.equals(pronunciation, letter.pronunciation) &&
                Objects.equals(letterh2, letter.letterh2);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, letterh, letterp, pronunciation, letterh2);
    }
}
