import api from '@services/api';

export type ICreditCard = {
  cardNumber: number;
  personName: string;
  cardExpiration: string;
  cardCvv: string;
  installments: number;
};

interface IUserApi {
  addCreditCard(personId: string, creditCard: ICreditCard): Promise<boolean>;
}

export const useUserApi = (): IUserApi => {
  const addCreditCard = async (
    personId: string,
    creditCard: ICreditCard,
  ): Promise<boolean> => {
    const response = await api.post(
      `persons/${personId}/credit-cards`,
      creditCard,
    );

    return response.status === 200;
  };

  return {
    addCreditCard,
  };
};
