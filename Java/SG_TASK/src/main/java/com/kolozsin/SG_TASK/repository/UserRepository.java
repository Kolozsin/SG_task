package com.kolozsin.SG_TASK.repository;

import com.kolozsin.SG_TASK.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {


}
