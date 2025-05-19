package com;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class StudentTest {
    @Test
    void getName(){
        Student student = new Student("Ajay");

        assertEquals(student.getName(), "Ajay");
    }
}
