package com.kolozsin.SG_TASK.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Objects;

@Entity
@Table(name = "Passwords")
public class Password {
    @Id
    private long id;

    @Column(name = "password")
    private String password;


    public Password()
    {}

    public Password(String password) {
        this.password = password;
    }


    public long getId() {
        return id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Password password1 = (Password) o;
        return id == password1.id && Objects.equals(password, password1.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, password);
    }
}
