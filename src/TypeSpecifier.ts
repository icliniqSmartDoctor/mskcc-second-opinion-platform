type KeyType  = 'Benign Blood Disorders' | 'Brain Tumors and Cancers';

export type Specialities = {
    [key in KeyType]: string;
  } & { [key: string]: string };

