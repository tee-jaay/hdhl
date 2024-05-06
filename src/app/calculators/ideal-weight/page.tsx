"use client";

import { useState } from "react";

import * as Yup from "yup";
import { Field, Form, Formik, FormikErrors, FormikTouched } from "formik";
import { faWeight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalculatorShowResult from "@/components/common/calculators/CalculatorShowResult";


interface FormValues {
    height: number;
    gender: string;
}

const IdealWeightCalculator: React.FC = () => {
    const [result, setResult] = useState<number | null>(null);

    const calculateIdealWeight = (values: FormValues) => {
        const { height, gender } = values;

        // Calculate ideal weight based on the given formulas
        let idealWeight: number;

        if (gender === "male") {
            idealWeight = 50 + 0.9 * (height - 152);
        } else {
            idealWeight = 45.5 + 0.9 * (height - 152);
        }

        // Set the result state with the calculated ideal weight
        setResult(idealWeight);
    };

    return (
        <div className="flex flex-col items-center justify-center align-middle w-full py-4">
            <h1 className="flex justify-start items-start align-middle w-full text-[#222]"><span className="mr-1"><FontAwesomeIcon icon={faWeight} /></span> Ideal Weight</h1>
            <Formik
                initialValues={{ height: 160, gender: "male" }}
                validationSchema={Yup.object({
                    height: Yup.number().required("Height is required"),
                    gender: Yup.string().required("Gender is required"),
                })}
                onSubmit={calculateIdealWeight}
            >
                {({ errors, touched }: { errors: FormikErrors<FormValues>; touched: FormikTouched<FormValues> }) => (
                    <Form className="w-full">
                        <div className="flex flex-col mb-4">
                            <label className="mb-2" htmlFor="height">
                                Height (in cm):
                            </label>
                            <Field
                                type="number"
                                name="height"
                                className="border border-gray-300 p-2"
                            />
                            <span className="error-message text-red-500 text-sm">
                                {errors.height && touched.height ? errors.height : ""}
                            </span>
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="gender">
                                Gender:
                            </label>
                            <Field
                                as="select"
                                name="gender"
                                className="border border-gray-300 p-2 focus:border-[#43A047] focus:outline-none focus:ring"
                            >
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Field>
                            <span className="error-message">
                                {errors.gender && touched.gender ? errors.gender : ""}
                            </span>
                        </div>

                        <button
                            className="text-white bg-[#161B2B] hover:bg-[#43A047] transition ease-in-out duration-200 py-2 px-4 mt-1"
                            type="submit"
                        >
                            Calculate
                        </button>
                    </Form>
                )}
            </Formik>

            {result && <CalculatorShowResult
                preStr="Your ideal weight is"
                value={result}
                postStr="kg"
            />}

            <div className="mt-32 text-gray-500 w-full">
                <h6>References:</h6>
                <div className="flex flex-col justify-start">
                    <a target="_blank" href="https://en.wikipedia.org/wiki/Human_body_weight">Human Body Weight | https://en.wikipedia.org/wiki/Human_body_weight</a>
                </div>
            </div>
        </div>
    );
};

export default IdealWeightCalculator;