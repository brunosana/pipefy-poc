export type RegisterField = {
    name: string;
    value: string;
    filled_at: string;
    field: {
        id: string;
    };
};

export type RegisterEntity = {
    currentPhase: string;
    fields: RegisterField[];
    id: string;
    title: string;
  }