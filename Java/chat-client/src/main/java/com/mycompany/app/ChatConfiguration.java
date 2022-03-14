package com.mycompany.app;

import com.fasterxml.jackson.annotation.JsonProperty;

import org.jvnet.hk2.annotations.Service;

import io.dropwizard.Configuration;

@Service
public class ChatConfiguration extends Configuration {
    // TODO: implement service configuration

    @JsonProperty("GrpcConnectionUrl")
    public String tokenUrl;
    @JsonProperty("dynamoDBUrl")
    public String dynamoDBUrl;

    public String getTokenUrl() {
        return tokenUrl;
    }

    public void setTokenUrl(String tokenUrl) {
        this.tokenUrl = tokenUrl;
    }

    public String getDynamoDBUrl() {
        return dynamoDBUrl;
    }

    public void setDynamoDBUrl(String dynamoDBUrl) {
        this.dynamoDBUrl = dynamoDBUrl;
    }

    

    
}
