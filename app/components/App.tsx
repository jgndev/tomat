import { useState } from "react";
import Timer from "~/components/Timer";

function App() {

  const focus = 'focus';
  const shortBreak = 'shortBreak';
  const longBreak = 'longBreak';

  const [activeTab, setActiveTab] = useState(focus)
  const [key, setKey] = useState(Date.now());
  const workDuration = 25; // TODO: Get this from local storage
  const shortBreakDuration = 5; // TODO: Get this from local storage
  const longBreakDuration = 15; // TODO: Get this from local storage

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // The `key` prop in React forces a component to unmount and remount, effectively
    // resetting its state whenever the key changes. This helps to ensure the timer is
    // reset when we switch tabs.
    setKey(Date.now());
  }

  return (
    <div className="mt-8 grid place-content-center place-items-center">
      <div className="flex justify-center items-center space-x-4">
        <button
          className="w-[160px] px-4 py-3 text-zinc-100 bg-black rounded-md"
          onClick={() => handleTabChange(focus)}>
          Focus
        </button>
        <button
          className="w-[160px] px-4 py-3 text-zinc-100 bg-black rounded-md"
          onClick={() => handleTabChange(shortBreak)}>
          Short Break
        </button>
        <button
          className="w-[160px] px-4 py-3 text-zinc-100 bg-black rounded-md"
          onClick={() => handleTabChange(longBreak)}>
          Long Break
        </button>
      </div>

      {activeTab === focus &&
        <Timer
          key={key}
          initialMinutes={workDuration}
          initialSeconds={0} />}
      {activeTab === shortBreak &&
        <Timer
          key={key}
          initialMinutes={shortBreakDuration}
          initialSeconds={0} />}
      {activeTab === longBreak &&
        <Timer
          key={key}
          initialMinutes={longBreakDuration}
          initialSeconds={0} />}
    </div>
  )
}

export default App;
