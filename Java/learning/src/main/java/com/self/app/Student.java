package com.self.app;


public class Student {
    @Override
    public String toString() {
        return "Student [age=" + age + ", classId=" + classId + ", fatherName=" + fatherName + ", motherName="
                + motherName + ", name=" + name + ", studentId=" + studentId + "]";
    }

    private final int studentId;
    private final String name;
    private final String age;
    private final String classId;
    private final String fatherName;
    private final String motherName;

    public Student(StudentBuilder builder){
        this.studentId=builder.studentId;
        this.name=builder.name;
        this.age=builder.age;
        this.classId=builder.classId;
        this.fatherName=builder.fatherName;
        this.motherName=builder.motherName;
    }

    public int getStudentId() {
        return studentId;
    }

    public String getName() {
        return name;
    }

    public String getAge() {
        return age;
    }

    public String getClassId() {
        return classId;
    }

    public String getFatherName() {
        return fatherName;
    }

    public String getMotherName() {
        return motherName;
    }

    public static class StudentBuilder {
        private final int studentId;
        private final String name;
        private final String age;
        private final String classId;
        private  String fatherName;
        private  String motherName;

        public StudentBuilder(int studentId,String name,String age,String classId){
            this.studentId=studentId;
            this.name=name;
            this.age=age;
            this.classId=classId;
        }

        public StudentBuilder fatherName(String fatherName){
            this.fatherName=fatherName;
            return this;
        }
        public StudentBuilder motherName(String motherName){
            this.motherName=motherName;
            return this;
        }
        public Student build(){
            Student student = new Student(this);
            return student;
        }

    }

}
