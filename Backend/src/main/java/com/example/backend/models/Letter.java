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
    private String letterp;
    private String letterh;
    private String letterh2;
    private String nazwa;
    private Long wartoscnumeryczna;
    private String opis;
    private String pronunciation;

    public Letter() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLetterp() {
        return letterp;
    }

    public void setLetterp(String letterp) {
        this.letterp = letterp;
    }

    public String getLetterh() {
        return letterh;
    }

    public void setLetterh(String letterh) {
        this.letterh = letterh;
    }

    public String getLetterh2() {
        return letterh2;
    }

    public void setLetterh2(String letterh2) {
        this.letterh2 = letterh2;
    }

    public String getNazwa() {
        return nazwa;
    }

    public void setNazwa(String nazwa) {
        this.nazwa = nazwa;
    }

    public Long getWartoscnumeryczna() {
        return wartoscnumeryczna;
    }

    public void setWartoscnumeryczna(Long wartoscnumeryczna) {
        this.wartoscnumeryczna = wartoscnumeryczna;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public String getPronunciation() {
        return pronunciation;
    }

    public void setPronunciation(String pronunciation) {
        this.pronunciation = pronunciation;
    }
}
