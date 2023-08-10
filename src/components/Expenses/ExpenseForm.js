import "./ExpenseForm.css";
import React, {useState} from "react";

function ExpenseForm(){

// state returns the state and a function to change the state in an array.
const [enteredTitle,setEnteredTitle]=useState("");
const [enteredAmount,setEnteredAmount]=useState("");
const [enteredDate,setEnteredDate]=useState("");

//each  function below sets the new value that the user inputs in to each field,
//event.target.value is the location, 
//and we pass it the whole (event).
const titleChangeHandler =(event)=>{
    setEnteredTitle(event.target.value);
};
const amountChangeHandler =(event)=>{
    setEnteredAmount(event.target.value);
};
const dateChangeHandler =(event)=>{
    setEnteredDate(event.target.value);
};
// Handles the form Data from the form
function submitHandler(event){
 event.preventDefault();// prevents the page from reloading when the "submit button" is pressed

 //data is pulled witht the value indentifier 
 const expenseData ={
    title:enteredTitle,
    amount:enteredAmount,
    date: new Date(enteredDate)
 };

   console.log(expenseData);
   setEnteredTitle('');
   setEnteredAmount('');
   setEnteredDate('');
};

    return (
        //  when you press submit, onSubmit is the function that runs, in this case {submitHandler}
         <form onSubmit={submitHandler}> 
            <div className="new-expense__controls">
                <div className="new-expense__control">
                   <label >Title</label>
                   <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                   <label>Amount</label>
                   <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                   <label>Date</label>
                   <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div> 
                <div  className="new-expense__actions">
                   <button type="submit">Add Expense</button>
                </div>
        </form>
    );
};

export default ExpenseForm;