package com.darshil.esl.players;

import java.util.Objects;

public class Player {
    private Integer id;
    private String name;
    private Position position;
    private Club club;
    private Integer price;
    private Integer goals;
    private Integer assists;
    private Integer red_cards;
    private Integer yellow_cards;
    private Integer clean_sheets;
    private Integer points;

    public Player(){

    };

    public Player(Integer id, String name, Position position, Club club, Integer price, Integer goals,
                  Integer assists, Integer red_cards, Integer yellow_cards, Integer clean_sheets, Integer points) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.club = club;
        this.price = price;
        this.goals = goals;
        this.assists = assists;
        this.red_cards = red_cards;
        this.yellow_cards = yellow_cards;
        this.clean_sheets = clean_sheets;
        this.points = points;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public Club getClub() {
        return club;
    }

    public void setClub(Club club) {
        this.club = club;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getGoals() {
        return goals;
    }

    public void setGoals(Integer goals) {
        this.goals = goals;
    }

    public Integer getAssists() {
        return assists;
    }

    public void setAssists(Integer assists) {
        this.assists = assists;
    }

    public Integer getRed_cards() {
        return red_cards;
    }

    public void setRed_cards(Integer red_cards) {
        this.red_cards = red_cards;
    }

    public Integer getYellow_cards() {
        return yellow_cards;
    }

    public void setYellow_cards(Integer yellow_cards) {
        this.yellow_cards = yellow_cards;
    }

    public Integer getClean_sheets() {
        return clean_sheets;
    }

    public void setClean_sheets(Integer clean_sheets) {
        this.clean_sheets = clean_sheets;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Player player = (Player) o;
        return Objects.equals(id, player.id) && Objects.equals(name, player.name) && position == player.position && club == player.club && Objects.equals(price, player.price) && Objects.equals(goals, player.goals) && Objects.equals(assists, player.assists) && Objects.equals(red_cards, player.red_cards) && Objects.equals(yellow_cards, player.yellow_cards) && Objects.equals(clean_sheets, player.clean_sheets) && Objects.equals(points, player.points);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, position, club, price, goals, assists, red_cards, yellow_cards, clean_sheets, points);
    }

    @Override
    public String toString() {
        return "Player{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", position=" + position +
                ", club=" + club +
                ", price=" + price +
                ", goals=" + goals +
                ", assists=" + assists +
                ", red_cards=" + red_cards +
                ", yellow_cards=" + yellow_cards +
                ", clean_sheets=" + clean_sheets +
                ", points=" + points +
                '}';
    }
}


