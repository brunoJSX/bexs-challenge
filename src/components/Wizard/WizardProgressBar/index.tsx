import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FiChevronRight } from 'react-icons/fi';

import { useWizard } from '../index';

import { NumberCircleIcon } from '../../NumberCircleIcon';

import { Container } from './styles';

export function WizardProgressBar() {
  const { currentStep, steps } = useWizard();

  return (
    <Container>
      {steps.map((step, index) => (
        <div key={Math.random()}>
          {index <= currentStep ? (
            <BsCheckCircleFill size={20} />
          ) : (
            <NumberCircleIcon number={index + 1} color="#4bde95" />
          )}

          <span>{step.title}</span>

          {index < steps.length - 1 && <FiChevronRight size={20} />}
        </div>
      ))}
    </Container>
  );
}
