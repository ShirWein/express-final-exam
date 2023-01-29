/**
 * BMI Calculator
 */

export const BmiStatus = {
    Underweight: 0,
    HealthyWeight: 1,
    Overweight: 2,
    Obesity: 3
}

export const WeightUnits = {
    KG: 0,     // kilograms
    G: 1,      // grams
    Pound: 2,  // lbs
}

export const HeightUnits = {
    CM: 0,     // centimeter
    M: 1,      // meter
    In: 2,     // inch
    Ft: 3,     // feet
}

export interface BmiInput {
    weight: number;
    weightUnit: number;
    height: number;
    heightUnit: number;
}

export interface BmiOutput {
    bmi: number;
    status: number;
}

/**
 * Takes a BmiInput object and return BmiOutput response
 */
export default function bmi(input: BmiInput): BmiOutput {
    let bmiCalc = Math.round(input.weight / (input.height**2)); 
    console.log("The Bmi calculation is:", bmiCalc); 
    if (bmiCalc < 18.5) {
        return {status: BmiStatus.Underweight, bmi: bmiCalc}
    }
    else if (bmiCalc >= 18.5 && bmiCalc < 25) {
        return {status: BmiStatus.HealthyWeight, bmi: bmiCalc}
    }
    else if (bmiCalc >= 25 && bmiCalc < 30) {
        return {status: BmiStatus.Overweight, bmi: bmiCalc}
    }
    else if (bmiCalc > 30) {
        return {status: BmiStatus.Obesity, bmi: bmiCalc}
    }
    else {
        return {status: 0, bmi: 0}
    }
}
