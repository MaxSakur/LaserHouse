// recordsService.ts

import api from '../../../api';

// Интерфейсы ответов API

// Интерфейс для адресов
export interface Address {
  id: number;
  street: string;
  city: string;
  // Добавьте остальные поля согласно вашему API
}

export interface AddressesResponse {
  data: Address[];
}

export interface ScheduledRecord {
  id: number;
  location: string;
  duration: number;
  addressLink: string;
  name: string;
  doctor: string;
  dateTime: string;
}

export interface ScheduledResponse {
  data: ScheduledRecord[];
}

// Интерфейс для предыдущих записей
export interface PreviousRecord {
  data: any;
  id: number;
  location: string;
  name: string;
  doctor: string;
  dateTime: string;
}

export interface PreviousResponse {
  data: PreviousRecord[];
}

// Интерфейс для оплаченных записей
export interface PaidRecord {
  id: number;
  amount: number;
  date: string;
  // Добавьте остальные поля согласно вашему API
}

export interface PaidResponse {
  data: PaidRecord[];
}

// Интерфейс для записей товаров
export interface GoodsRecord {
  id: number;
  name: string;
  quantity: number;
  // Добавьте остальные поля согласно вашему API
}

export interface GoodsResponse {
  data: GoodsRecord[];
}

// Реализация recordsService
export const recordsService = {
  /**
   * Получение адресов
   */
  getAddresses: async (): Promise<AddressesResponse | null> => {
    try {
      const response = await api.get<AddressesResponse>('/records/addresses');
      return response.data;
    } catch (error) {
      console.error('Error fetching addresses:', error);
      return null;
    }
  },

  /**
   * Получение запланированных записей для пользователя
   * @param userID Идентификатор пользователя
   */
  getScheduled: async (): Promise<ScheduledResponse | null> => {
    try {
      const response = await api.get<ScheduledResponse>('/records/scheduled');
      return response.data;
    } catch (error) {
      console.error('Error fetching scheduled records:', error);
      return null;
    }
  },

  /**
   * Получение предыдущих записей для пользователя
   * @param userID Идентификатор пользователя
   */
  getPrevious: async (): Promise<PreviousResponse | null> => {
    try {
      const response = await api.get<PreviousResponse>('/records/previous');
      return response.data;
    } catch (error) {
      console.error('Error fetching previous records:', error);
      return null;
    }
  },

  /**
   * Получение оплаченных записей для пользователя
   * @param userID Идентификатор пользователя
   */
  getPaid: async (): Promise<PreviousRecord | null> => {
    try {
      const response = await api.get<PreviousRecord>('/records/paid');
      return response.data;
    } catch (error) {
      console.error('Error fetching paid records:', error);
      return null;
    }
  },

  /**
   * Получение записей товаров для пользователя
   * @param userID Идентификатор пользователя
   */
  getGoods: async (): Promise<GoodsResponse | null> => {
    try {
      const response = await api.get<GoodsResponse>('/records/goods');
      return response.data;
    } catch (error) {
      console.error('Error fetching goods records:', error);
      return null;
    }
  },
};
