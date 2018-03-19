# CyberSmart-Logger-API
###### An API for create Logs, initially created for use in a Smart Home network

## CyberSmart
CyberSmart is a system designed to control and manage locations within your home by utilising a range of low cost hardware and Open Source Software solutions. This project is being developed as a University Group Project. The goal of this project is to create a low-cost, low-resource, eco-friendly Smart Home System. Our solution to this is to use a RESTful backend sitting on a hub that calls out to RESTful endpoints of nodes on the network, in order to update their state. In turn, each endpoint on the network polls every half an hour with a state update and timestamp. Each aspect of the system has been designed as a Microservice, allowing for interoperability with other systems.

#### A big thanks to the following projects and people, without them, CyberSmart would not be possible.
* [NodeJS](https://nodejs.org/en/) - For creating a fast, lightweight solution for RESTful web servers! All APIs have been developed in Node. 
* [ReactJS](https://reactjs.org/) - For creating an easy to work with UI design solution. The Frontend design has been developed in ReactJS.
* [Python](https://www.python.org/) - For hardware level interaction (GPIO pins).
* [Raspberry Pi Foundation](https://www.raspberrypi.org/about/) - For consistently providing great quality hardware at brilliant prices! All CyberSmarts Nodes use the [Raspberry Pi Zero](https://www.raspberrypi.org/products/raspberry-pi-zero/), running [Jessie Pixel Headless](https://www.raspberrypi.org/blog/introducing-pixel/) and the main hub uses a [Raspberry Pi 3 Model B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)
* [Lubuntu](https://lubuntu.net/) - For creating a neat, lightweight OS solution. The main hub uses Lubuntu.

### CyberSmart Related Repositories
* [Locations API](https://github.com/UniversityGroup/CyberSmart-Locations-API) - For handling of Locations
* [Devices API](https://github.com/UniversityGroup/CyberSmart-Devices-API) - For the handling of Devices
* [Logger API](https://github.com/UniversityGroup/CyberSmart-Logger-API) - For creating logs
* [Mobile App](https://github.com/UniversityGroup/CyberSmart-Mobile-App) - For the Mobile App
* [Database](https://github.com/UniversityGroup/CyberSmart-DB) - CyberSmart Database
* [User Interface](https://github.com/UniversityGroup/CyberSmart-React-UI) - CyberSmart User Interface 
* [Node](https://github.com/UniversityGroup/CyberSmart-Node) - CyberSmart Nodes (Plugs)

### Contributors
* [The Slackers](https://github.com/UniversityGroup) - Group Name
* [Signal-Fire](https://www.github.com/Signal-Fire) - Lead Developer
* [DeanoLingardo](https://github.com/DeanoLingardo) - UI Design & Development
* [Brandon P](https://github.com/brandonjamesparkinson) - App Development
* [Jafoolly](https://github.com/Jafoolly) - UX & Hardware Design
* [gilesbain](https://github.com/gilesbain) - AI & Data Analysis

### License
* [GNU-GPL](https://www.gnu.org/licenses/gpl-3.0.en.html) - Have fun bros!

## Documentation
### Routes
#### Add
##### route.post('/create', function(req, res)
This route posts data to the Creater handler. It can take up to three parameters.
The parameters are:
* `message`
    - `String`
    - `Required`
* `created_by_user`
    - `String`
    - `Required`
* `timestamp`
    - `Date`
    - `Default` : `Date.now`
The possible returns are:
* `200 - OK` : This means the request was successful, and should return the log created.
* `401 - Bad Request` : This means the request failed and a log was not created.
* `500 - Server Error` : This means something went wrong with the function being called in the controller.

#### Find
##### route.get('/all', function(req, res)
This route returns all logs. It takes no parameters. 
The possible returns are:
* `200 - OK` : This means the request was successful. It should return an array of JSON Objects with all logs in the given log.
* `404 - Not Found` : This means the request failed or no logs were found in the location.
* `500 - Server Error` : This means something went wrong with the function being called in the controller.

##### route.get('/:id', function(req, res) 
This route finds a Log by its ID. It takes on parameter, ID, which must be passed in in the format `/<id>` in the URL.
The possible returns are:
* `200 - OK` : This means the request was successful. It should return a JSON Object containing information about the Log with the ID requested.
* `404 - Not Found` : This means the request failed or no Log with the ID requested were found.
* `500 - Server Error` : This means something went wrong with the function being called in the controller.

##### route.get('/user/:user', function(req, res) 
This route finds logs created by a user. It takes on parameter, User, which must be passed in in the format `/user/<user>` in the URL.
The possible returns are:
* `200 - OK` : This means the request was successful. It should return an array of JSON Objects, containing the logs created by the user.
* `404 - Not Found` : This means the request failed or no logs have been created by the user.
* `500 - Server Error` : This means something went wrong with the function being called in the controller.

#### Insert
#### Delete
##### route.post('/delete', function(req, res) 
This route calls the delete Location function in the Delete handler. The possible parameters are:
* `_id` : The ID of the Location being deleted
The possible returns are:
* `200 - OK` - The function executed successfully, resulting in the deletion of a Location.
* `401 - Unauthorized` : This means the request was unauthorized, meaning something went wrong.
* `500 - Server Error` : This means something went wrong with the delete function, resulting in a server crash.

### Handlers
#### Find
##### FindAll()
This method searches the database for all logs. If none found or an error, it rejects the request.
It takes no parameters.
If the request succeeds, all logs in the database will be returned.

##### FindById(id)
This method searches the database for any logs matching the ID of the id parameter.
If no logs are found or an error occurs, the request is rejected.
If the request succeeds, the log matching that ID will be returned.

##### FindByCreatedUser(user)
This method searches the database for any logs matching the username of the user parameter.
If no logs are found or an error occurs, the request is rejected.
If the request succeeds, the log matching that ID will be returned.

#### Add
##### CreateLog(Log)
This method adds a log to the database, given a log object. The Log object is then parsed into a new log object.
If it fails to add a Log to the database, the request is rejected and the method fails.
If the request succeeds, it will return the created Log.

#### Update
##### UpdateStateById(id, state)
This method finds a Location given an ID and updates the state. If no Location is found or an error occurs, the request is rejected.
If the request succeeds, it will return the Location matching the given ID and its updated state.

#### Delete
##### Location(id)
This method finds a Location given an ID and deletes it. If there is an error during execution or the result is null, the method fails and is rejected.
If the method executes correctly, it sets active to false on the given Location.