import React, { useState } from "react";
import { Field, useFormik } from "formik";
import * as Yup from "yup";
import "./styles.css"; // Your TailwindCSS stylesheet

// Define the form validation schema
const validationSchema = Yup.object().shape({
    headaches: Yup.boolean(),
    muscleTension: Yup.boolean(),
    fatigue: Yup.boolean(),
    appetiteChanges: Yup.boolean(),
    sleepChanges: Yup.boolean(),
    anxiety: Yup.boolean(),
    irritability: Yup.boolean(),
    moodSwings: Yup.boolean(),
    concentrationDifficulties: Yup.boolean(),
    substanceUse: Yup.boolean(),
    socialWithdrawal: Yup.boolean(),
    routineChanges: Yup.boolean(),
    workload: Yup.boolean(),
    timeManagement: Yup.boolean(),
    relationshipConcerns: Yup.boolean(),
    financialConcerns: Yup.boolean(),
});

// Create the Stress Level Calculator component using Formik
const StressLevelCalculator = () => {
    // Define the state to store the stress level
    const [stressLevel, setStressLevel] = useState(0);

    // Use Formik for form handling
    const formik = useFormik({
        initialValues: {
            headaches: false,
            muscleTension: false,
            fatigue: false,
            appetiteChanges: false,
            sleepChanges: false,
            anxiety: false,
            irritability: false,
            moodSwings: false,
            concentrationDifficulties: false,
            substanceUse: false,
            socialWithdrawal: false,
            routineChanges: false,
            workload: false,
            timeManagement: false,
            relationshipConcerns: false,
            financialConcerns: false,
        },
        validationSchema: validationSchema,
        onSubmit: (values: { [key: string]: boolean }) => {
            // Calculate the stress level based on the user's responses
            let stressLevel = 0;
            for (const key in values) {
                if (values[key] === true) {
                    stressLevel += 1;
                }
            }

            // Set the stress level in state
            setStressLevel(stressLevel);
        },
    });

    return (
        <div className="container">
            <h1>Stress Level Calculator</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="symptom-section">
                    <h2>Physical Symptoms:</h2>
                    <Field
                        type="checkbox"
                        name="headaches"
                        id="headaches"
                        className="checkbox-input"
                    />
                    <label htmlFor="headaches">Headaches</label>
                    <br />
                    <Field
                        type="checkbox"
                        name="muscleTension"
                        id="muscleTension"
                        className="checkbox-input"
                    />
                    <label htmlFor="muscleTension">Muscle Tension</label>
                    <br />
                    <Field
                        type="checkbox"
                        name="fatigue"
                        id="fatigue"
                        className="checkbox-input"
                    />
                    <label htmlFor="fatigue">Fatigue</label>
                    <br />
                    <Field
                        type="checkbox"
                        name="appetiteChanges"
                        id="appetiteChanges"
                        className="checkbox-input"
                    />
                    <label htmlFor="appetiteChanges">Changes in Appetite</label>
                    <br />
                    <Field
                        type="checkbox"
                        name="sleepChanges"
                        id="sleepChanges"
                        className="checkbox-input"
                    />
                    <label htmlFor="sleepChanges">Changes in Sleep Patterns</label>
                </div>
                <div className="symptom-section">
                    <h2>Emotional Symptoms:</h2>
                    <Field
                        type="checkbox"
                        name="anxiety"
                        id="anxiety"
                        className="checkbox-input"
                    />
                    <label htmlFor="anxiety">Anxiety</label>
                    <br />
                    <Field
                        type="checkbox"
                        name="irritability"
                        id="irritability"
                        className="checkbox-input"
                    />
                    <label htmlFor="irritability">Irritability</label>
                    <br />
                    <Field
                        type="checkbox"
                        name="moodSwings"
                        id="moodSwings"
                        className="checkbox-input"
                    />
                    <label htmlFor="moodSwings">Mood Swings</label>
                    <br />
                    <Field
                        type="checkbox"
                        name="concentrationDifficulties"
                        id="concentrationDifficulties"
                        className="checkbox-input"
                    />
                    <label htmlFor="concentrationDifficulties">Difficulty Concentrating</label>
                    <br />
                </div>
                <div className="symptom-section">
                    <h2>Behavioral Symptoms:</h2>
                    <Field
                        type="checkbox"
                        name="substanceUse"
                        id="substanceUse"
                        className="checkbox-input"
                    />
                    <label htmlFor="substanceUse">Increased Substance Use</label>
                    <br />
                    <Field
                        type="checkbox"
                        name="socialWithdrawal"
                        id="socialWithdrawal"
                        className="checkbox-input"
                    />
                    <label htmlFor="socialWithdrawal">Social Withdrawal</label>
                    <br />
                    <Field
                        type="checkbox"
                        name="routineChanges"
                        id="routineChanges"
                        className="checkbox-input"
                    />
                    <label htmlFor="routineChanges">Changes in Daily Routines</label>
                </div>
                <div className="lifestyle-section">
                    <h2>Lifestyle Factors:</h2>
                    <label htmlFor="workload">Workload:</label>
                    <Field
                        as="select"
                        name="workload"
                        id="workload"
                        className="input-field"
                    >
                        <option value="manageable">Manageable</option>
                        <option value="overwhelming">Overwhelming</option>
                    </Field>
                    <br />
                    <label htmlFor="timeManagement">Time Management:</label>
                    <Field
                        as="select"
                        name="timeManagement"
                        id="timeManagement"
                        className="input-field"
                    >
                        <option value="effective">Effective</option>
                        <option value="ineffective">Ineffective</option>
                    </Field>
                    <br />
                    <Field
                        type="checkbox"
                        name="relationshipConcerns"
                        id="relationshipConcerns"
                        className="checkbox-input"
                    />
                    <label htmlFor="relationshipConcerns">Relationship Concerns</label>
                    <br />
                    <Field
                        type="checkbox"
                        name="financialConcerns"
                        id="financialConcerns"
                        className="checkbox-input"
                    />
                    <label htmlFor="financialConcerns">Financial Concerns</label>
                </div>
                <button type="submit">Calculate Stress Level</button>
            </form>
            {stressLevel > 0 && (
                <div className="result">
                    <h2>Your stress level is:</h2>
                    <h1>{stressLevel}</h1>
                    <p>
                        A stress level of {stressLevel} indicates that you may be
                        experiencing significant stress. It's important to take steps to
                        manage your stress, such as practicing relaxation techniques,
                        getting regular exercise, and seeking support from friends, family,
                        or a mental health professional.
                    </p>
                </div>
            )}
        </div>
    );
};

export default StressLevelCalculator;