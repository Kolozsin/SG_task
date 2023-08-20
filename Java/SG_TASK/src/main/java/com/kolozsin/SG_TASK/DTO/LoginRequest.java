package com.kolozsin.SG_TASK.DTO;

import com.kolozsin.SG_TASK.Model.User;

public class LoginRequest {
    private User loginUser;
    private String password;

    public User getLoginUser() {
        return loginUser;
    }

    public void setLoginUser(User loginUser) {
        this.loginUser = loginUser;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
