package com.mycompany.app;

import com.mycompany.app.resources.CreateTableResource;

import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class ChatApplication extends Application<ChatConfiguration> {

    public static void main(final String[] args) throws Exception {
        new ChatApplication().run(args);
    }

    @Override
    public String getName() {
        return "Chat";
    }

    @Override
    public void initialize(final Bootstrap<ChatConfiguration> bootstrap) {
        // TODO: application initialization
    }

    @Override
    public void run(final ChatConfiguration configuration,
                    final Environment environment) {
        // TODO: implement application
        final CreateTableResource resource = new CreateTableResource();
        environment.jersey().register(resource);
    }

}
