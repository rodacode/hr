import { useState } from 'react';

const EmployeesListItem = ({ employee }: { employee: any }) => {
    const steps = [
        "added",
        "in-check",
        "approved",
        "active",
        "inactive"
    ]

    const [activeStep, setActiveStep] = useState<number>(steps.indexOf(employee.status))

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
                                        className={`${index === 0 ? 'step1' : 'step'} step${index + 1} ${activeStep === index ? 'active' : ''}`}>
                                        <span className="step__text">{step}</span>
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