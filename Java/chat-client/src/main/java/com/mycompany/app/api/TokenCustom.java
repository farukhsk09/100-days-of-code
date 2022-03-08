package com.mycompany.app.api;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TokenCustom {

    @JsonProperty
    private String token;

    @JsonProperty
    private String expiry;

    @JsonProperty
    private String refresh_token;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getExpiry() {
        return expiry;
    }

    public void setExpiry(String expiry) {
        this.expiry = expiry;
    }

    public String getRefresh_token() {
        return refresh_token;
    }

    public void setRefresh_token(String refresh_token) {
        this.refresh_token = refresh_token;
    }

    @Override
    public String toString() {
        return "TokenCustom [expiry=" + expiry + ", refresh_token=" + refresh_token + ", token=" + token + "]";
    }

    
    

}
