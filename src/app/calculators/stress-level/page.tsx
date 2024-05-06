"use client";

import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import CalculatorShowResult from "@/components/common/calculators/CalculatorShowResult";
import { faLevelUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    workload: Yup.string(),
    timeManagement: Yup.string(),
    relationshipConcerns: Yup.boolean(),
    financialConcerns: Yup.boolean(),
});

const initialValues = {
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
    workload: "",
    timeManagement: "",
    relationshipConcerns: false,
    financialConcerns: false,
};

const StressLevelCalculator: React.FC<{}> = () => {
    // State to store the stress level
    const [stressLevel, setStressLevel] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center align-middle w-full py-4">
            <h1 className="flex justify-start items-start align-middle w-full text-[#222]"><span className="mr-1"><FontAwesomeIcon icon={faLevelUp} /></span> Stress Level</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values: { [key: string]: boolean | string }) => {
                    // Calculate the stress level based on the user's responses
                    let stressLevel = 0;
                    for (const key in values) {
                        if (values[key] === true) {
                            stressLevel += 1;
                        }
                    }

                    // Set the stress level in state
                    setStressLevel(stressLevel);
                }}
            >
                <Form className="w-full">
                    <div className="symptom-section">
                        <h2>Physical Symptoms:</h2>
                        <Field
                            type="checkbox"
                            id="headaches"
                            className="checkbox-input"
                            name="headaches"
                        />
                        <label className="pl-1" htmlFor="headaches">Headaches</label>
                        <br />
                        <Field
                            type="checkbox"
                            id="muscleTension"
                            className="checkbox-input"
                            name="muscleTension"
                        />
                        <label className="pl-1" htmlFor="muscleTension">Muscle Tension</label>
                        <br />
                        <Field
                            type="checkbox"
                            id="fatigue"
                            className="checkbox-input"
                            name="fatigue"
                        />
                        <label className="pl-1" htmlFor="fatigue">Fatigue</label>
                        <br />
                        <Field
                            type="checkbox"
                            id="appetiteChanges"
                            className="checkbox-input"
                            name="appetiteChanges"
                        />
                        <label className="pl-1" htmlFor="appetiteChanges">Changes in Appetite</label>
                        <br />
                        <Field
                            type="checkbox"
                            id="sleepChanges"
                            className="checkbox-input"
                            name="sleepChanges"
                        />
                        <label className="pl-1" htmlFor="sleepChanges">Changes in Sleep Patterns</label>
                    </div>
                    <div className="symptom-section">
                        <h2>Emotional Symptoms:</h2>
                        <Field
                            type="checkbox"
                            id="anxiety"
                            className="checkbox-input"
                            name="anxiety"
                        />
                        <label className="pl-1" htmlFor="anxiety">Anxiety</label>
                        <br />
                        <Field
                            type="checkbox"
                            id="irritability"
                            className="checkbox-input"
                            name="irritability"
                        />
                        <label className="pl-1" htmlFor="irritability">Irritability</label>
                        <br />
                        <Field
                            type="checkbox"
                            id="moodSwings"
                            className="checkbox-input"
                            name="moodSwings"
                        />
                        <label className="pl-1" htmlFor="moodSwings">Mood Swings</label>
                        <br />
                        <Field
                            type="checkbox"
                            id="concentrationDifficulties"
                            className="checkbox-input"
                            name="concentrationDifficulties"
                        />
                        <label className="pl-1" htmlFor="concentrationDifficulties">Difficulty Concentrating</label>
                        <br />
                    </div>
                    <div className="symptom-section">
                        <h2>Behavioral Symptoms:</h2>
                        <Field
                            type="checkbox"
                            id="substanceUse"
                            className="checkbox-input"
                            name="substanceUse"
                        />
                        <label className="pl-1" htmlFor="substanceUse">Increased Substance Use</label>
                        <br />
                        <Field
                            type="checkbox"
                            id="socialWithdrawal"
                            className="checkbox-input"
                            name="socialWithdrawal"
                        />
                        <label className="pl-1" htmlFor="socialWithdrawal">Social Withdrawal</label>
                        <br />
                        <Field
                            type="checkbox"
                            id="routineChanges"
                            className="checkbox-input"
                            name="routineChanges"
                        />
                        <label className="pl-1" htmlFor="routineChanges">Changes in Daily Routines</label>
                    </div>
                    <div className="lifestyle-section">
                        <h2>Lifestyle Factors:</h2>
                        <div className="flex flex-col mb-4">
                            <label className="pl-1 block mb-2 text-sm font-medium text-gray-900" htmlFor="workload">Workload:</label>
                            <Field
                                as="select"
                                id="workload"
                                className="input-field border border-gray-300 p-2 focus:border-[#43A047] focus:outline-none focus:ring"
                                name="workload"
                            >
                                <option value="manageable">Manageable</option>
                                <option value="overwhelming">Overwhelming</option>
                            </Field>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="pl-1 block mb-2 text-sm font-medium text-gray-900" htmlFor="timeManagement">Time Management:</label>
                            <Field
                                as="select"
                                id="timeManagement"
                                className="input-field border border-gray-300 p-2 focus:border-[#43A047] focus:outline-none focus:ring"
                                name="timeManagement"
                            >
                                <option value="effective">Effective</option>
                                <option value="ineffective">Ineffective</option>
                            </Field>
                        </div>

                        <Field
                            type="checkbox"
                            id="relationshipConcerns"
                            className="checkbox-input"
                            name="relationshipConcerns"
                        />
                        <label className="pl-1" htmlFor="relationshipConcerns">Relationship Concerns</label>
                        <br />
                        <Field
                            type="checkbox"
                            id="financialConcerns"
                            className="checkbox-input"
                            name="financialConcerns"
                        />
                        <label className="pl-1" htmlFor="financialConcerns">Financial Concerns</label>
                    </div>
                    <br />
                    <button
                        className="text-white bg-[#161B2B] hover:bg-[#43A047] transition ease-in-out duration-200 py-2 px-4 mt-1"
                        type="submit"
                    >
                        Calculate
                    </button>
                </Form>
            </Formik>

            {stressLevel > 0 && <CalculatorShowResult preStr="Your stress level is" value={stressLevel} postStr="" />}

            <div className="mt-32 text-gray-500 w-full">
                <h6>References:</h6>
                <div className="flex flex-col justify-start">
                    <a target="_blank" href="https://www.nih.gov/health-information/stress">National Institutes of Health (NIH):  | https://www.nih.gov/health-information/stress</a>
                    <a target="_blank" href="https://www.apa.org/topics/stress">American Psychological Association (APA) | https://www.apa.org/topics/stress</a>
                    <a target="_blank" href="https://www.helpguide.org/articles/stress/stress-management.htm">HelpGuide | https://www.helpguide.org/articles/stress/stress-management.htm</a>
                    <a target="_blank" href="https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress-management/art-20046037">Mayo Clinic | https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress-management/art-20046037</a>
                    <a target="_blank" href="https://www.webmd.com/balance/stress-management/stress-management">WebMD | https://www.webmd.com/balance/stress-management/stress-management</a>
                </div>
            </div>
        </div>
    );
};

export default StressLevelCalculator;