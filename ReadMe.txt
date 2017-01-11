SF Performances/Movies-'Search Movie Locations'
Problem Description-
SF open data provides a large data of Film Locations in San Francisco. This open data has a number of movies with their film locations in the bay area along with more details about the film such as Production company, Writer, Director and Actors in the film. 
So there is a need of, an application to display all the locations of a movie on the map when provided with te movie name. 
'Search Movie Locations' application handles this request.

Application Summary-
This application allows a user to search on a map where movies have been filmed in the San Francisco Bay Area. The user can search any movie (available on the database) using the search input field, which suggests a maximum of 10 movie name suggestions to the user as soon as the user starts writing in the text field. 
Now, if the user selects a movie and clicks on the Search button, the user interface will display all the locations of that movie shot in San Francisco Bay Area. 
Google maps API's are used to display all the result locations from the search request.
These locations will be displayed with the help of the markers, clicking on which user can read the address of the location where the movie was being shot. 
The user can select and search any other movie and the user interface will be altered according to the locations of the movie and new markers are displayed on the map. 
Note: String 'San Francisco Bay Area' added to each address result for better accuracy of markers on each location. If the address is null, single marker with 'San Francisco Bay Area' is displayed on the map to represent the filming location in Bay Area of the movie.

Application Architecture- 
This is a full stack application with HTML,CSS,BootStrap and JavaScript used on the front-end and PHP and MySQL on the backend development. MySQL is used as the database because of the amount of open data provided (more than 1000 rows) and it will be easy to scale the data in the future with more addition of movies in the database.

Extra Features possible -
With this application, the user can search a movie and will get only the locations of where the movie was shot in. But there is a lot of information available from the database which can be used to show more details about the movie, to user. For a movie that has been searched, we can display the names of actors in the movie, the director of the movie and year of release as well.
Because of the time constraints, only the search with movie name was provided to the user. But we can view the locations of the movies by various other parameters as well. We can view all the movie locations by providing a particular actor or by providing directors name, or by providing productions companies name in the search field. The results will be interesting as it will provide a particular pattern for a particular director or a production company and also locate which areas and locations are generally preferred by those individuals.
As an additional feature, we can find an optimal shortest path for a user to visit all the locations displayed on the user interface.
 
Link to the Github repository of this application: https://github.com/NikhilChavan10/SF-Movie-Locations

Link to the Public profile: http://nikhils-chavan.com

Resume: http://nikhils-chavan.com/Resume.pdf

Link to the application: http://nikhils-chavan.com/movieProject/index.html
