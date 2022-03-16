package com.self.app;

public class User implements Comparable<User>{

    public String name,fatherName;
    public int age;
    public int salary;

    public User(String name,int age,int salary){
        this.age=age;
        this.salary=salary;
        this.name=name;

    }

    @Override
    public int compareTo(User o) {
        if(age > o.age){
            return -1;
        }else if(age < o.age){
            return 1;
        }else{
            if(salary > o.salary){
                return -1;
            }else if(salary < o.salary){
                return 1;
            }else{
                return 0;
            }
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "User [age=" + age + ", fatherName=" + fatherName + ", name=" + name + ", salary=" + salary + "]";
    }

    
    
}
