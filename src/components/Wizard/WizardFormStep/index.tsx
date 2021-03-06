import React, { PropsWithChildren, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Yup from '@utils/schemaValidator';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useWizard } from '@components/Wizard';

import { Select } from '@components/Select';
import { Container, Footer } from './styles';

type IWizardFormStepProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  title: string;
  schemaValidation?: Yup.AnyObjectSchema;
  className?: string;
};

export function WizardFormStep({
  schemaValidation,
  children,
  className,
}: PropsWithChildren<IWizardFormStepProps>) {
  const { currentStep, nextStep, previousStep, updateData, data } =
    useWizard<{ [key: string]: any }>();
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: schemaValidation && yupResolver(schemaValidation),
    defaultValues: data,
  });

  const onSubmit = useCallback(
    (formData: any) => {
      updateData(formData);
      nextStep();
    },
    [nextStep, updateData],
  );

  return (
    <Container className={className}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            const props = { ...child.props };

            if (child.props.name) {
              if (child.type === Input) {
                Object.assign(props, {
                  register,
                  key: child.props.name,
                  error: errors[child.props.name],
                });
              } else if (child.type === Select) {
                Object.assign(props, {
                  control,
                  key: child.props.name,
                });
              } else if (child.type === 'input') {
                Object.assign(props, {
                  ...register(child.props.name),
                  key: child.props.name,
                });
              }
            }

            return React.createElement(child.type, { ...props });
          }

          return child;
        })}

        <Footer isFirstStep={currentStep === 0}>
          <div>
            {currentStep > 0 && <Button onClick={previousStep}>VOLTAR</Button>}
          </div>

          <div>
            <Button type="submit">CONTINUAR</Button>
          </div>
        </Footer>
      </form>
    </Container>
  );
}
