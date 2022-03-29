package com.darshil.esl.assignment;

import java.util.Objects;

public class Assignments {
    private Integer id;
    private Integer user_id;
    private Integer player_id;

    public Assignments() {
    }

    public Assignments(Integer user_id) {
        this.user_id = user_id;
    }

    public Assignments(Integer id, Integer user_id, Integer player_id) {
        this.id = id;
        this.user_id = user_id;
        this.player_id = player_id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public Integer getPlayer_id() {
        return player_id;
    }

    public void setPlayer_id(Integer player_id) {
        this.player_id = player_id;
    }

    @Override
    public String toString() {
        return "Assignment{" +
                "id=" + id +
                ", user_id=" + user_id +
                ", player_id=" + player_id +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Assignments that = (Assignments) o;
        return Objects.equals(id, that.id) && Objects.equals(user_id, that.user_id) && Objects.equals(player_id, that.player_id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, user_id, player_id);
    }
}
