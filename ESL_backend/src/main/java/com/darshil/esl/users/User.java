package com.darshil.esl.users;

import java.util.Objects;

public class User {
    int UserId;
    String email;
    String password;
    String teamName;
    Integer totalPoint;

    public User(int userId, String email, String password, String teamName, Integer totalPoint) {
        UserId = userId;
        this.email = email;
        this.password = password;
        this.teamName = teamName;
        this.totalPoint = totalPoint;
    }

    public int getUserId() {
        return UserId;
    }

    public void setUserId(int userId) {
        UserId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public Integer getTotalPoint() {
        return totalPoint;
    }

    public void setTotalPoint(Integer totalPoint) {
        this.totalPoint = totalPoint;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return UserId == user.UserId && Objects.equals(email, user.email) && Objects.equals(password, user.password) && Objects.equals(teamName, user.teamName) && Objects.equals(totalPoint, user.totalPoint);
    }

    @Override
    public int hashCode() {
        return Objects.hash(UserId, email, password, teamName, totalPoint);
    }

    @Override
    public String toString() {
        return "User{" +
                "UserId=" + UserId +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", teamName='" + teamName + '\'' +
                ", totalPoint=" + totalPoint +
                '}';
    }
}
