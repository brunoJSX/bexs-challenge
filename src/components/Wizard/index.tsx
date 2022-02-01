import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import _ from 'lodash';

import { WizardProgressBar } from './WizardProgressBar';
import { WizardFormStep } from './WizardFormStep';

import { Container } from './styles';

type IWizardStep = {
  title: React.ReactNode;
  content: React.ReactNode;
};

interface IWizardContextData<T> {
  data: T;
  updateData(data: T): void;
  nextStep(): void;
  previousStep(): void;
  onNextStep?(data: T): void;
  onPreviousStep?(data: T): void;
  onFinish?(data: T): void;
  currentStep: number;
  steps: IWizardStep[];
}

const WizardContext = createContext<IWizardContextData<any>>(
  {} as IWizardContextData<any>,
);

type IWizardProps = {
  // hiddenProgressBar?: boolean;
  onNextStep?(data: any): void;
  onPreviousStep?(data: any): void;
  onFinish?(data: any): void;
};

function Wizard({
  children,
  onNextStep,
  onPreviousStep,
  onFinish,
}: PropsWithChildren<IWizardProps>) {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({});
  const steps = useMemo(() => {
    const wizardSteps: IWizardStep[] = [];

    React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        if (child.type === WizardFormStep) {
          wizardSteps.push({
            title: child.props.title,
            content: child,
          });
        }
      }
    });

    return wizardSteps;
  }, [children]);

  const updateData = useCallback((newData: any) => {
    setData(state => ({ ...state, ...newData }));
  }, []);

  const nextStep = useCallback(() => {
    if (_.size(steps) - 1 === currentStep) {
      if (onFinish) onFinish(data);

      return;
    }

    if (onNextStep) onNextStep(data);

    setCurrentStep(state => state + 1);
  }, [steps, currentStep, onNextStep, data, onFinish]);

  const previousStep = useCallback(() => {
    if (currentStep === 0) return;

    if (onPreviousStep) onPreviousStep(data);

    setCurrentStep(state => state - 1);
  }, [currentStep, data, onPreviousStep]);

  return (
    <WizardContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        updateData,
        nextStep,
        previousStep,
        onNextStep,
        onPreviousStep,
        onFinish,
        currentStep,
        steps,
      }}
    >
      <Container>
        <header>
          <WizardProgressBar />
        </header>

        <main>{_.size(steps) >= 1 && steps[currentStep].content}</main>
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
