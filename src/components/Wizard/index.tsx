import React, { createContext, useCallback, useContext, useState } from 'react';
import _ from 'lodash';

import { Button } from '../Button';

import { Container } from './styles';
import { WizardProgressBar } from './WizardProgressBar';

type IWizardStep = {
  title: React.ReactNode;
  content: React.ReactNode;
};

interface IWizardContextData<T> {
  data: T;
  updateData(data: T): void;
  currentStep: number;
  steps: IWizardStep[];
}

const WizardContext = createContext<IWizardContextData<any>>(
  {} as IWizardContextData<any>,
);

type IWizardProps = {
  steps: IWizardStep[];
};

function Wizard({ steps }: IWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({});

  const updateData = useCallback((newData: any) => {
    setData(state => ({ ...state, ...newData }));
  }, []);

  const nextStep = useCallback(() => {
    if (_.size(steps) - 1 === currentStep) return;

    setCurrentStep(state => state + 1);
  }, [steps, currentStep]);

  const previousStep = useCallback(() => {
    if (currentStep === 0) return;

    setCurrentStep(state => state - 1);
  }, [currentStep]);

  return (
    <WizardContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        updateData,
        currentStep,
        steps,
      }}
    >
      <Container>
        <header>
          <WizardProgressBar />
        </header>

        <main>{steps[currentStep].content}</main>

        <footer>
          <div>
            {currentStep > 0 && <Button onClick={previousStep}>VOLTAR</Button>}
          </div>

          <div>
            <Button onClick={nextStep}>CONTINUAR</Button>
          </div>
        </footer>
      </Container>
    </WizardContext.Provider>
  );
}

function useWizard<T>(): IWizardContextData<T> {
  const context = useContext(WizardContext);

  if (!context) {
    throw new Error('useWizard must be used within and Wizard');
  }

  return context;
}

export { Wizard, useWizard };
