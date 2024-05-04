"use client";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

const CalorieCalculator = () => {
    const [calories, setCalories] = useState(0);

    const calculateCalories = (values: { weight: number; height: number; age: number; gender: string; activityLevel: any; goal: any; }) => {
        // Calculate the basal metabolic rate (BMR) using the Mifflin-St Jeor equation
        let bmr = 10 * values.weight + 6.25 * values.height - 5 * values.age;
        if (values.gender === "female") {
            bmr -= 161;
        }

        // Adjust BMR based on activity level
        let activityMultiplier = 1;
        switch (values.activityLevel) {
            case "sedentary":
                activityMultiplier = 1.2;
                break;
            case "lightly active":
                activityMultiplier = 1.375;
                break;
            case "moderately active":
                activityMultiplier = 1.55;
                break;
            case "very active":
                activityMultiplier = 1.725;
                break;
            case "extremely active":
                activityMultiplier = 1.9;
                break;
        }

        // Calculate total daily energy expenditure (TDEE)
        let tdee = bmr * activityMultiplier;

        // Adjust TDEE based on weight loss goal
        let goalMultiplier = 1;
        switch (values.goal) {
            case "lose weight":
                goalMultiplier = 0.8;
                break;
            case "maintain weight":
                goalMultiplier = 1;
                break;
            case "gain weight":
                goalMultiplier = 1.2;
                break;
        }

        // Calculate the recommended daily calorie intake
        let calories = Math.round(tdee * goalMultiplier);

        setCalories(calories);
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center align-middle w-full py-4">
                <h1 className="flex justify-start items-start align-middle w-full text-[#222]"><span className="mr-1"><FontAwesomeIcon icon={faCalculator} /></span> Calorie Intake Calculator</h1>
                <Formik
                    initialValues={{
                        age: 25,
                        gender: "male",
                        weight: 70,
                        height: 170,
                        activityLevel: "moderate",
                        goal: "lose weight",
                    }}
                    onSubmit={calculateCalories}
                >
                    <Form className="w-full">
                        <div className="flex flex-col mb-4">
                            <label className="mb-2" htmlFor="age">
                                Age:
                            </label>
                            <Field
                                className="border border-gray-300 p-2"
                                name="age"
                                type="number"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="mb-2" htmlFor="gender">
                                Gender:
                            </label>
                            <Field
                                className="border border-gray-300 p-2"
                                name="gender"
                                as="select"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Field>
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="mb-2" htmlFor="weight">
                                Weight (kg):
                            </label>
                            <Field
                                className="border border-gray-300 p-2"
                                name="weight"
                                type="number"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="mb-2" htmlFor="height">
                                Height (cm):
                            </label>
                            <Field
                                className="border border-gray-300 p-2"
                                name="height"
                                type="number"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="mb-2" htmlFor="activityLevel">
                                Activity Level:
                            </label>
                            <Field
                                className="border border-gray-300 p-2"
                                name="activityLevel"
                                as="select"
                            >
                                <option value="sedentary">Sedentary</option>
                                <option value="lightly active">Lightly Active</option>
                                <option value="moderately active">Moderately Active</option>
                                <option value="very active">Very Active</option>
                                <option value="extremely active">Extremely Active</option>
                            </Field>
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="mb-2" htmlFor="goal">
                                Goal:
                            </label>
                            <Field
                                className="border border-gray-300 p-2"
                                name="goal"
                                as="select"
                            >
                                <option value="lose weight">Lose Weight</option>
                                <option value="maintain weight">Maintain Weight</option>
                                <option value="gain weight">Gain Weight</option>
                            </Field>
                        </div>

                        <button
                            className="text-white bg-[#161B2B] hover:bg-[#43A047] transition ease-in-out duration-200 py-2 px-4 mt-1"
                            type="submit"
                        >
                            Calculate
                        </button>
                    </Form>

                </Formik>

                {calories > 0 && <div className="mt-10 mb-4">Your recommended daily calorie intake is <span className="text-[#43A047]">{calories}</span> calories.</div>}

                <div className="mt-32 text-gray-500 w-full">
                    <h6>References:</h6>
                    <div className="flex flex-col justify-start">
                        <a target="_blank" href="https://en.wikipedia.org/wiki/Basal_metabolic_rate">Basal metabolic rate (BMR) | https://en.wikipedia.org/wiki/Basal_metabolic_rate</a>
                        <a target="_blank" href="https://en.wikipedia.org/wiki/Total_daily_energy_expenditure">Total daily energy expenditure (TDEE) | https://en.wikipedia.org/wiki/Basal_metabolic_rate</a>
                        <a target="_blank" href="https://en.wikipedia.org/wiki/Mifflin-St_Jeor_equation">Mifflin-St Jeor equation | https://en.wikipedia.org/wiki/Basal_metabolic_rate</a>
                        <a target="_blank" href="https://en.wikipedia.org/wiki/Physical_activity_level#Activity_multipliers">Activity multipliers | https://en.wikipedia.org/wiki/Basal_metabolic_rate</a>
                        <a target="_blank" href="https://en.wikipedia.org/wiki/Weight_loss#Goals">Weight loss goals | https://en.wikipedia.org/wiki/Basal_metabolic_rate</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalorieCalculator;