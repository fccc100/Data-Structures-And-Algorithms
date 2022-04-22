package com.bjpo;

public class Test {
    public static void main(String[] args) {
        Test test = new Test();
        test = null;
        test.add();
        System.out.println("dsfsf");
    }

    public static void add() {
        System.out.println("add");
    }
}
