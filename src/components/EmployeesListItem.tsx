import { useState } from 'react';

const EmployeesListItem = ({ employee }: { employee: any }) => {

    const [activeStep, setActiveStep] = useState<number>(0)

    const steps = [
        {
            text: "added"
        },
        {
            text: "in-check"
        },
        {
            text: "approved"
        },
        {
            text: "active"
        },
        {
            text: "inactive"
        }
    ]

    return (
        <>
            {
                employee && (
                    <div className="employeesListItem__container">
                        <span>{employee.name}</span>
                        <div className="employeesListItemStatus__container">
                            {steps.map((step, index) => {
                                return (
                                    <div
                                        key={index}
                                        onClick={() => setActiveStep(index)}
                                        className={`${index === 0 ? 'step1' : 'step'} step${index+1} ${activeStep === index ? 'active' : ''}`}>
                                        <span className="step__text">{step.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default EmployeesListItem