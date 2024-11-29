type Difficulty = {
  label: DifficultyLabel;
};

export type DifficultyLabel =
  | 'Beginner'
  | 'Intermediate'
  | 'Advanced';

export const difficulties: Difficulty[] = [
  {
    label: 'Beginner',
  },
  {
    label: 'Intermediate',
  },
  {
    label: 'Advanced',
  },
];
