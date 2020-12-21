{/* This file just defines some basic settings variables 
– API_SERVER and the SESSION_DURATION. 
The API_SERVER defines the URL at which our django_app backend is running. 
This URL would be different for the development and production environments, 
as in production we would be hosting our app on a cloud server. 
Therefore instead of changing it within the actual code, 
we are defining a settings file, where we can change the values really 
easily. The other environment variable SESSION_DUARTION defines the time 
after which the user is automatically logged out from the browser */}

let API_SERVER_VAL = '' ;

switch(process.env.NODE_ENV){
    case 'development':
        API_SERVER_VAL =  'http://localhost:8000';
        break;
    case 'production':
        API_SERVER_VAL = process.env.REACT_APP_API_SERVER;
        break;
    default:
        API_SERVER_VAL = 'http://localhost:8000';
        break;
}

export const API_SERVER = API_SERVER_VAL;
export const SESSION_DURATION = 5*3600*1000 ;