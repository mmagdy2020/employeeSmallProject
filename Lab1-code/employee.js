"use strict";

/**
 * An Employee class
 */


//Your job will be to implement methods that interact with the salaryRecord. Salary records are stored in
// the Map where the keys are Date strings, and the values are Numbers (a paycheck amount) Here is the
// typical data that will be stored in the salaryRecord Map

// 1/15/2019 3005.50
// 2/15/2019 3150.00
// 3/15/2019 4200.00
// 4/15/2019 2988.50

class Employee {
    /**
     * Constructor for Employee
     * @param {String} firstName a firstname
     * @param {String} lastName a lastname
     */
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._salaryRecord = new Map();
    }



    /**
     * Adds the arguments to the salary record
     * @param {String} dateStr a string representing a date 
     * @param {Number} amount the amount paid
     * @returns {undefined}
     */
    addEntry(dateStr, amount) {
        this._salaryRecord.set(dateStr, amount)
    }

    /**
     * Retrieves a String that describes how much 
     * this Employee was paid on that date
     * @param {String} date a date string
     * @returns {String} text describing how much was paid
     */
    printPaymentAmount(date) {

        if (this._salaryRecord.has(date)) {

            return `${this.firstName} ${this.lastName} was paid ${this._salaryRecord.get(date)} on ${date}`

        } else {

            return `${this.firstName} ${this.lastName} did not receive a paycheck on ${date}`

        }

    }

    /**
     * Returns a String desribing the average amount paid
     * @returns {String} describes average amount for this Employee
     */
    printAveragePaycheck() {

        let totalSal = 0;
        for (const key of this._salaryRecord.values()) {
            totalSal += key
        }


        return `Average paycheck for Jim Jones was ${totalSal / this._salaryRecord.size}`
    }


}