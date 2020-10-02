# Hospital Inventory Management

First Microproject 

   It manages the equipment in hospitals .

## Setup

### MongoDB 
navigate to the folder where you want to host the data and perform the following

create a folder named data

```sh
$ cd path/to/data/folder
$ mkdir data
$ mongod --datapath=data --bind_ip 127.0.0.1 --port 27017
```

## Installation

Install the dependencies and devDependencies and start the server.

```bash
$ cd HospitalAPI
$ npm install
$ npm start
```

## Usage

### Routes

#### 🏥 Hospitals Route

| Route | Method |  Funtion | 
| ------ | ------ | ------ |
| /hospitals | GET | gets all the hospitals |
| /hospitals | POST | Adds new hospital |
| /hospitals/{Id} | GET | gets the hospital with Id equal to hid |
| /hospitals/{Name} | POST | gets the hospital with name equal to Name |

#### 🏢 Ventilators Route

| Route | Method |  Funtion | 
| ------ | ------ | ------ |
| /ventilators | GET | gets all the ventilators |
| /ventilators/one/{Id} | GET | gets the ventilator with ventilatorId equal to Id |
| /ventilators/one/{Id} | PUT | Updates ventilator with ventilatorId equal to Id with the content sent in the body |
| /ventilators/one/{Id} | POST | deletes the ventilator with ventilatorId equal to Id |
| /ventilators/searchbystatus | POST| gets the ventilator with status equal to the status sent in the body |
| /ventilators/ventilatorsearch| POST| gets the ventilator with status equal to the status sent and the hospital name equal to the name in hospital collection sent in the body  |

Note 🗒 : body should in json format .
