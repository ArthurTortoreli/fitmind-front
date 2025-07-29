import React, { createContext, useContext, useState, ReactNode } from 'react';

export type FormData = {
  profileType?: 'aluno' | 'profissional';
  // common
  name?: string;
  // professional
  email?: string;
  password?: string;
  cpf?: string;
  role?: 'nutricionista' | 'personal';
  service?: string;
  volume?: string;
  // student
  age?: string;
  height?: string;
  weight?: string;
  // goals
  goals?: string[];
};

type FormContextType = {
  data: FormData;
  setProfileType: (value: FormData['profileType']) => void;
  setName: (value: string) => void;
  setContact: (email: string, password: string, cpf: string) => void;
  setRole: (value: FormData['role']) => void;
  setService: (value: string) => void;
  setVolume: (value: string) => void;
  setStudentDetails: (name: string, age: string, height: string, weight: string) => void;
  setGoals: (goals: string[]) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useForm = (): FormContextType => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error('useForm must be used within FormProvider');
  return ctx;
};

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<FormData>({});

  const setProfileType = (profileType: FormData['profileType']) => setData(d => ({ ...d, profileType }));
  const setName = (name: string) => setData(d => ({ ...d, name }));
  const setContact = (email: string, password: string, cpf: string) => setData(d => ({ ...d, email, password, cpf }));
  const setRole = (role: FormData['role']) => setData(d => ({ ...d, role }));
  const setService = (service: string) => setData(d => ({ ...d, service }));
  const setVolume = (volume: string) => setData(d => ({ ...d, volume }));
  const setStudentDetails = (name: string, age: string, height: string, weight: string) =>
    setData(d => ({ ...d, name, age, height, weight }));
  const setGoals = (goals: string[]) => setData(d => ({ ...d, goals }));

  return (
    <FormContext.Provider
      value={{ data, setProfileType, setName, setContact, setRole, setService, setVolume, setStudentDetails, setGoals }}
    >
      {children}
    </FormContext.Provider>
  );
};