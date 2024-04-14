# Bake-My-Cake-Project
This is the first major project I have created. It is based on Angular and for the data saving I have used the JSON server. 
To run this application: you need to first create a new project on angular and enable the routing. : command : ng new application_name (for older versions) and for new versions you can use the command : ng new application_name --no-standalone --routing --ssr=false 
after this you need to install the angular materials using cli : command : ng add @angular/material
then you have to check and import modules correctly by going in the appmodule.ts file
you also need to create a Data file for JSON-Server, no need to define the model as running the application will automatically identify and set a model in JSON.
run the application : ng serve --o
