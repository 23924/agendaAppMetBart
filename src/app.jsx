import React from 'react';
import Student from './components/student';
import Agenda from './components/agenda';
import Button from './components/button';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.students = [
            { name : "Bob", age : 17 },
            { name : "Bob2", age : 18 },
            { name : "Bob3", age : 19 },
            { name : "Bob4", age : 20 },
            { name : "Bob5", age : 33 }
        ];

    }

    renderStudent(currentStudent, i){
        return (
            <Student
                name={currentStudent.name}
                age={currentStudent.age}
            />
        );
    }

    render() {
        return (
            <div className="app">
                <div id="title">Agenda App with react js</div>


                <div class="weekday">
                <Agenda
                    day="Monday"
                    arrangement="slapen"
                    time="06:00"
                />
                <Agenda
                    day="Monday"
                    arrangement="opstaan"
                    time="07:00"
                />
                <Agenda
                    day="Monday"
                    arrangement="ontbijten"
                    time="07:40"
                />
                <Agenda
                    day="Monday"
                    arrangement="douchen"
                    time="08:10"
                />
                <Agenda
                    day="Monday"
                    arrangement="bus pakken"
                    time="08:45"
                />
                <Agenda
                    day="Monday"
                    arrangement="school"
                    time="09:30"
                />

                <Agenda
                    day="Monday"
                    arrangement="naar huis"
                    time="18:00"
                />
                </div>

                <div class="weekday">
                <Agenda
                    day="Tuesday"
                    arrangement="slapen"
                    time="06:00"
                />
                <Agenda
                    day="Tuesday"
                    arrangement="opstaan"
                    time="07:00"
                />
                <Agenda
                    day="Tuesday"
                    arrangement="ontbijten"
                    time="07:40"
                />
                <Agenda
                    day="Tuesday"
                    arrangement="douchen"
                    time="08:10"
                />
                <Agenda
                    day="Tuesday"
                    arrangement="bus pakken"
                    time="08:45"
                />
                <Agenda
                    day="Tuesday"
                    arrangement="school"
                    time="09:30"
                />

                <Agenda
                    day="Tuesday"
                    arrangement="naar huis"
                    time="18:00"
                />
                </div>

                <div class="weekday">
                <Agenda
                    day="Wednesday"
                    arrangement="slapen"
                    time="06:00"
                />
                <Agenda
                    day="Wednesday"
                    arrangement="opstaan"
                    time="07:00"
                />
                <Agenda
                    day="Wednesday"
                    arrangement="ontbijten"
                    time="07:40"
                />
                <Agenda
                    day="Wednesday"
                    arrangement="douchen"
                    time="08:10"
                />
                <Agenda
                    day="Wednesday"
                    arrangement="bus pakken"
                    time="08:45"
                />
                <Agenda
                    day="Wednesday"
                    arrangement="school"
                    time="09:30"
                />

                <Agenda
                    day="Wednesday"
                    arrangement="naar huis"
                    time="18:00"
                />
                </div>

                <div class="weekday">
                <Agenda
                    day="Thursday"
                    arrangement="slapen"
                    time="06:00"
                />
                <Agenda
                    day="Thursday"
                    arrangement="opstaan"
                    time="07:00"
                />
                <Agenda
                    day="Thursday"
                    arrangement="ontbijten"
                    time="07:40"
                />
                <Agenda
                    day="Thursday"
                    arrangement="douchen"
                    time="08:10"
                />
                <Agenda
                    day="Thursday"
                    arrangement="bus pakken"
                    time="08:45"
                />
                <Agenda
                    day="Thursday"
                    arrangement="school"
                    time="09:30"
                />

                <Agenda
                    day="Thursday"
                    arrangement="naar huis"
                    time="18:00"
                />
                </div>

                <div class="weekday">
                <Agenda
                    day="Friday"
                    arrangement="slapen"
                    time="06:00"
                />
                <Agenda
                    day="Friday"
                    arrangement="opstaan"
                    time="07:00"
                />
                <Agenda
                    day="Friday"
                    arrangement="ontbijten"
                    time="07:40"
                />
                <Agenda
                    day="Friday"
                    arrangement="douchen"
                    time="08:10"
                />
                <Agenda
                    day="Friday"
                    arrangement="bus pakken"
                    time="08:45"
                />
                <Agenda
                    day="Friday"
                    arrangement="school"
                    time="09:30"
                />

                <Agenda
                    day="Friday"
                    arrangement="naar huis"
                    time="18:00"
                />
                </div>

                <div class="weekday">
                <Agenda
                    day="Saterday"
                    arrangement="slapen"
                    time="06:00"
                />
                <Agenda
                    day="Saterday"
                    arrangement="opstaan"
                    time="07:00"
                />
                <Agenda
                    day="Saterday"
                    arrangement="ontbijten"
                    time="07:40"
                />
                <Agenda
                    day="Saterday"
                    arrangement="douchen"
                    time="08:10"
                />
                <Agenda
                    day="Saterday"
                    arrangement="bus pakken"
                    time="08:45"
                />
                <Agenda
                    day="Saterday"
                    arrangement="school"
                    time="09:30"
                />

                <Agenda
                    day="Saterday"
                    arrangement="naar huis"
                    time="18:00"
                />
                </div>

                <div class="weekday">
                <Agenda
                    day="Sunday"
                    arrangement="slapen"
                    time="06:00"
                />
                <Agenda
                    day="Sunday"
                    arrangement="opstaan"
                    time="07:00"
                />
                <Agenda
                    day="Sunday"
                    arrangement="ontbijten"
                    time="07:40"
                />
                <Agenda
                    day="Sunday"
                    arrangement="douchen"
                    time="08:10"
                />
                <Agenda
                    day="Sunday"
                    arrangement="bus pakken"
                    time="08:45"
                />
                <Agenda
                    day="Sunday"
                    arrangement="school"
                    time="09:30"
                />

                <Agenda
                    day="Sunday"
                    arrangement="naar huis"
                    time="18:00"
                />
                </div>


            </div>
        );
    }

}
export default App;
