package com.darshil.esl.players;

import java.util.Objects;

public class Player {
    private Integer id;
    private Integer price;
    private Integer goals;
    private Integer assists;
    private Integer red_cards;
    private Integer yellow_cards;
    private Integer clean_sheets;
    private Integer points;
    private String name;
    private Club club;
    private Position position;

    public Player(Integer id, Integer price, Integer goals, Integer assists,
                  Integer red_cards, Integer yellow_cards, Integer clean_sheets,
                  Integer points, String name, Club club, Position position) {
        this.id = id;
        this.price = price;
        this.goals = goals;
        this.assists = assists;
        this.red_cards = red_cards;
        this.yellow_cards = yellow_cards;
        this.clean_sheets = clean_sheets;
        this.points = points;
        this.name = name;
        this.club = club;
        this.position = position;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Club getClub() {
        return club;
    }

    public void setClub(Club club) {
        this.club = club;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Player player = (Player) o;
        return id.equals(player.id) && price.equals(player.price) && goals.equals(player.goals) && assists.equals(player.assists) && red_cards.equals(player.red_cards) && yellow_cards.equals(player.yellow_cards) && clean_sheets.equals(player.clean_sheets) && points.equals(player.points) && name.equals(player.name) && club == player.club && position == player.position;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, price, goals, assists, red_cards, yellow_cards, clean_sheets, points, name, club, position);
    }

    @Override
    public String toString() {
        return "Player{" +
                "id=" + id +
                ", price=" + price +
                ", goals=" + goals +
                ", assists=" + assists +
                ", red_cards=" + red_cards +
                ", yellow_cards=" + yellow_cards +
                ", clean_sheets=" + clean_sheets +
                ", points=" + points +
                ", name='" + name + '\'' +
                ", club=" + club +
                ", position=" + position +
                '}';
    }
}


