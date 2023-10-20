import { zodResolver } from '@hookform/resolvers/zod';
import { FormContainer, MinutesAmoutInput, TaskInput } from './styles';
import * as zod from 'zod';

export function NewCycleForm() {
  const newCycleFormSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
      .number()
      .min(1, { message: 'Mínimo 5 minutos' })
      .max(60, { message: 'Máximo 60 minutos' }),
  });

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  type NewCycleFormData = zod.infer<typeof newCycleFormSchema>;

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        placeholder="Dê um nome para seu projeto"
        type="text"
        id="task"
        list="tasksSuggestion"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="tasksSuggestion">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="">Durante</label>
      <MinutesAmoutInput
        placeholder="00"
        type="number"
        id="minutesAmount"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
