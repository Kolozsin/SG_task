package com.kolozsin.SG_TASK.repository;

import com.kolozsin.SG_TASK.Model.Password;
import com.kolozsin.SG_TASK.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PasswordRepository extends JpaRepository<Password, Long> {
}
