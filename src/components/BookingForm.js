import React, { useRef, useState } from 'react';
import './AirlineBookingForm.css'
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
    const navigate = useNavigate();
    const src = useRef('Source 1');
    const dest = useRef('Destination 1');
    const passengersName = useRef({});
    const date = useRef();
    const travelClass = useRef({});
    const insurance = useRef();
    const [ arr, setArr ] = useState([]);

    function handleSourceChange(event){
        console.log(src);
        src.current = event.target.value;
        console.log(event.target.value);
    }

    function handleDestinationChange(event){
        console.log(dest);
        dest.current = event.target.value;
        console.log(event.target.value);
    }

    function handleRadioChange(val){
        travelClass.current = val;
        console.log(travelClass.current);
    }

    function handleNumPasChange(event){
        // numberOfPassengers.current.value = event.target.value;
        // setNumberOfPassengers(event.target.value);
        // const tempArr = [...Array(event.target.value).keys()];
        if(parseInt(event.target.value) < 0) return;
        const tempArr = new Array(parseInt(event.target.value || '0'));
        console.log(tempArr);
        // console.log(numberOfPassengers);
        
        setArr([...tempArr]);
        // console.log(Array(numberOfPassengers).fill(0));
        console.log(event.target.value);
    }

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(src,dest);
        console.log(passengersName.current);
        console.log(travelClass.current);
        console.log(date.current.value);
        console.log(insurance.current.checked);
        let string = '';
        string += src.current;
        string += ',';
        string += dest.current;
        string += ','
        string += arr.length
        string += ' '
        for(const name in passengersName.current){
            console.log(name,passengersName.current[name]);
            string += passengersName.current[name];
            string += ' ';
        }
        string += ',';
        string += travelClass.current;
        string += ',';
        string += date.current.value.toString();
        string += ',';
        string += insurance.current.checked ? 'Yes' : 'No';
        // console.log();
        console.log(string);
        localStorage.setItem('data',string);
        alert('Booking has been made, to know about pricing and to confirm ticket please click OK');
        navigate('/confirm-ticket');
    }

    function setSource(val){
        src.current = val;
        console.log(src.current);
    }

    function setDestination(val){
        dest.current = val;
    }

    function handleDateChange(val){
        
    }

    function nameSubmit(event, index){
        // console.log(event, index);
        console.log(event);
        passengersName.current[`name${index}`] = event;
    }

    return (
        <div>
            <div>
                Airline ticket booking form
            </div>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        Source :
                        <select id='source' name='source' onChange={handleSourceChange} required>
                            <option value='Source 1' onClick={() => setSource('Source 1')}>
                                Source 1
                            </option>
                            <option value='Source 2' onClick={() => setSource('Source 2')}>
                                Source 2
                            </option>
                            <option value='Source 3' onClick={() => setSource('Source 3')}>
                                Source 3
                            </option>
                        </select>
                    </div>
                    <div>
                        Destination :
                        <select id='destination' name='destination' onChange={handleDestinationChange} required>
                            <option value='Destination 1' onClick={() => setDestination('Destination 1')}>
                                Destination 1
                            </option>
                            <option value='Destination 2' onClick={() => setDestination('Destination 2')}>
                                Destination 2
                            </option>
                            <option value='Destination 3' onClick={() => setDestination('Destination 3')}>
                                Destination 3
                            </option>
                        </select>
                    </div>
                    <div>
                        Enter the number of passengers travelling : <input type='number' onChange={handleNumPasChange} required/>
                    </div>
                    <div>
                        {arr.length ? arr.map((val, index) => <div key={index}> <input required type='text' placeholder={`Passenger ${index+1}`} onChange={(event) => {
                            nameSubmit(event.target.value, index)
                        }}/> </div>) : ''}
                    </div>
                    <div>
                        Select class
                        <input required type='radio' name='class' value='Economy' onChange={() => {
                            handleRadioChange('Economy');
                        }}/> Economy
                        <input required type='radio' name='class' value='Business' onChange={() => {
                            handleRadioChange('Business');
                        }}/> Business
                    </div>
                    <div>
                        <input required type='date' ref={date}/>
                    </div>
                    <div>
                        Want travel insurance ? <input type='checkbox' ref={insurance}/>
                    </div>
                    <div>
                        <button type='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BookingForm