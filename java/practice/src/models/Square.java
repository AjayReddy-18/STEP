package models;

import interfaces.Polygon;

public class Square implements Polygon {
    private final int side;

    public Square(int side) {
        this.side = side;
    }

    @Override
    public int area() {
        return side * side;
    }

    @Override
    public int perimeter() {
        return side * 4;
    }
}
