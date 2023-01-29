import express, {request, response, NextFunction} from 'express';
import validator from './validator';
import bmi,  { BmiInput, HeightUnits } from './bmi';

const app = express();

app.post('/bmi', (req, res) => {
    return res.json({ message: 'Success' });
  });


app.post('/bmi', validator, (req, res) => {
    const height = parseFloat(req.body.height);
    const heightUnits = parseFloat(req.body.heightUnits);
    const weight = parseFloat(req.body.weight);
    const WeightUnits = parseFloat(req.body.WeightUnits)
    // let bmic = weight / (height ** 2);
    bmi({weight: weight, height: height,  weightUnit: WeightUnits, 
        heightUnit: heightUnits});
    res.send(bmi);
});

app.get('/bmi?height/1.1&weight/weightUnit/heightUnit', validator, (req, res) => {
    const height = req.query.height;
    const weight = req.query.weight;
    const weightUnit = req.query.weighUnit;
    const heightUnit = req.query.heighUnit;
    let bmi = Number(weight) / (Number(height) ** 2);
    res.send(Math.round(bmi));
})




export default app;
