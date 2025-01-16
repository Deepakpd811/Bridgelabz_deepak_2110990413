// enmus is a group of constants which can also used to as defining types

enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500,
}
  
function getStatus(status:Status):string{
    switch (status) {
        case Status.Success:
            return "request is sucessfull"    
        case Status.NotFound:
            return "request not found"
        case Status.ServerError:
            return "server error"
    }
}

console.log(getStatus(Status.NotFound))



enum Day{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}


function isWeekend(day:Day):boolean{
    return day===Day.Sunday || day == Day.Saturday
}

console.log(isWeekend(Day.Friday))





enum ValidationState {
    Valid,
    Invalid,
    Pending,
  }
  
  function validateInput(state: ValidationState) {
    if (state === ValidationState.Valid) {
      console.log("Input is valid.");
    } else if (state === ValidationState.Invalid) {
      console.log("Input is invalid.");
    } else {
      console.log("Validation is pending.");
    }
  }
  
  validateInput(ValidationState.Pending);            // Validation is pending.
  