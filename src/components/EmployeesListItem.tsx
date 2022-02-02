import { useState } from 'react';

const EmployeesListItem = ({ employee }: { employee: any }) => {

    const [activeStep, setActiveStep] = useState<number>(1)

    return (
        <>
            {
                employee && (
                    <div className="employeesListItem__container">
                        <span>{employee.name}</span>
                        <div className="employeesListItemStatus__container">
                            <div
                                onClick={() => setActiveStep(1)}
                                className={`status1 step1 ${activeStep === 1 ? 'active' : ''}`}>
                                <span className="step__text">Added</span>
                            </div>
                            <div
                                onClick={() => setActiveStep(2)}

                                className={`status step2 ${activeStep === 2 ? 'active' : ''}`}>
                                <span className="step__text">In-check</span>
                            </div>
                            <div
                                onClick={() => setActiveStep(3)}
                                className={`status step3 ${activeStep === 3 ? 'active' : ''}`}>
                                <span className="step__text">approved</span>
                            </div>
                            <div
                                onClick={() => setActiveStep(4)}
                                className={`status step4 ${activeStep === 4 ? 'active' : ''}`}>
                                <span className="step__text">Active</span>
                            </div>
                            <div
                                onClick={() => setActiveStep(5)}
                                className={`status step5 ${activeStep === 5 ? 'active' : ''}`}>
                                <span className="step__text">Inactive</span>
                            </div>
                        </div>

                    </div>
                )
            }
        </>
    )
}

export default EmployeesListItem