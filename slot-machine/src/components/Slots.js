import { useState, useRef } from 'react';

const Slots = ({ slotsNumber, pokemon }) => {
  const [slotsState, setSlotsState] = useState({
    rolling: false
  });
  const ref = useRef();
  const slots = Array(slotsNumber).fill();

  const roll = () => {
    setSlotsState(prev => ({ ...prev, rolling: true }));
    setTimeout(() => {
      setSlotsState(prev => ({ ...prev, rolling: false }));
    }, 700);
    slots.forEach((slot, i) => {
      const selected = triggerSlotRotation(ref.current.children[i]);
      setSlotsState(prev => ({ ...prev, [`pokemon${i + 1}`]: selected }));
    });
  };

  const triggerSlotRotation = slot => {
    const setTop = top => (slot.children[0].children[0].style.top = `${top}px`);
    let options = slot.children[0].children[0].children;
    let randomOption = Math.floor(Math.random() * pokemon.length);
    let choosenOption = options[randomOption];
    setTop(-choosenOption.offsetTop + 2);
    return pokemon[randomOption].id;
  };

  return (
    <div className='SlotMachine' ref={ref}>
      {slots &&
        slots.map(slot => (
          <div key={slot} className='slot'>
            <section>
              <div className='container'>
                {pokemon.map(({ id, sprite }) => (
                  <div key={id}>
                    <span>
                      <img src={sprite} alt={id} />
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ))}
      <div
        className={!slotsState.rolling ? 'roll rolling' : 'roll'}
        onClick={!slotsState.rolling ? roll : undefined}
        disabled={slotsState.rolling}
      >
        {slotsState.rolling ? 'Rolling...' : 'ROLL'}
      </div>
    </div>
  );
};

export default Slots;
