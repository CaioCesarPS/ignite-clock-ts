import { HandPalm, Play } from '@phosphor-icons/react';
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles';
import { useState } from 'react';
import { NewCycleForm } from './NewCycleForm';
import { Countdown } from './Countdown';

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interuptedDate?: Date;
  finishedDate?: Date;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(newCycle.id);
    setAmountSecondsPassed(0);
    reset();
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            interuptedDate: new Date(),
          };
        } else {
          return cycle;
        }
      })
    );
    setActiveCycleId(null);
  }

  const currentSeconds = activeCycle ? totalSeconds - AmountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  // useEffect(() => {
  //   if (activeCycle) {
  //     document.title = `${minutes}:${seconds} | Pomodoro`;
  //   }
  // }, [minutes, seconds, activeCycle]);

  const taskValue = watch('task');
  const isSubmitDisabled = !taskValue;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <NewCycleForm />
        <Countdown activeCycle={activeCycle}/>

        {/* <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton> */}

        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
