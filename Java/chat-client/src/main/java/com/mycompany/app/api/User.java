package com.mycompany.app.api;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

/**User Json that needs to be inserted into the table */
public class User {

    @Override
    public String toString() {
        return "User [age=" + age + ", gender=" + gender + ", password=" + password + ", preferences=" + preferences
                + ", username=" + username + "]";
    }

    @JsonProperty
    @NotNull
    @NotBlank
    private String username;

    @JsonProperty
    @NotNull
    @NotBlank
    private String password;

    @JsonProperty
    @NotNull
    @NotBlank
    private int age;

    @JsonProperty
    @NotNull
    @NotBlank
    private String gender;

    //at the Ui we will have to restrict 
    @JsonProperty
    private String preferences;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPreferences() {
        return preferences;
    }

    public void setPreferences(String preferences) {
        this.preferences = preferences;
    }
    
}
