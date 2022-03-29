package com.darshil.esl.users;

import com.darshil.esl.players.Player;

import java.util.List;
import java.util.Objects;

public class User {
    private Integer id;
    private String email;
    private String password;
    private String teamName;
    private Integer totalPoints;
    public User(){
    }

    public User(String email, String password, String teamName, Integer totalPoints) {
        this.email = email;
        this.password = password;
        this.teamName = teamName;
        this.totalPoints = totalPoints;
//        this.players = players;
    }
    public User(Integer id,String email, String password, String teamName, Integer totalPoints) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.teamName = teamName;
        this.totalPoints = totalPoints;
//        this.players = players;
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

    public Integer getTotalPoints() {
        return totalPoints;
    }

    public void setTotalPoints(Integer totalPoints) {
        this.totalPoints = totalPoints;
    }

//    public List<Player> getPlayers() {
////        return players;
//    }
//
//    public void setPlayers(List<Player> players) {
//        this.players = players;
//    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(email, user.email) && Objects.equals(password, user.password) && Objects.equals(teamName, user.teamName) && Objects.equals(totalPoints, user.totalPoints);
    }

    @Override
    public int hashCode() {
        return Objects.hash(email, password, teamName, totalPoints);
    }

    @Override
    public String toString() {
        return "User{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", teamName='" + teamName + '\'' +
                ", totalPoints=" + totalPoints +
//                ", players=" + players +
                '}';
    }
}
