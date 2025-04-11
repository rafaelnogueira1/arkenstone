import { MoveDownRight, MoveUpRight } from 'lucide-react';

const variationType = {
  up: {
    color: 'text-green-700',
    icon: MoveUpRight,
  },
  down: {
    color: 'text-red-700',
    icon: MoveDownRight,
  },
};

export function ShowVariation({ variation }: { variation: number }) {
  const type = variation > 0 ? variationType.up : variationType.down;

  return (
    <div
      className={`flex items-center justify-center gap-1 font-semibold ${type.color}`}
    >
      <type.icon className={`size-4 ${type.color}`} />
      {variation}
    </div>
  );
}
