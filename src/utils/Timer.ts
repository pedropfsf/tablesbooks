let timer: NodeJS.Timeout;

type Callback = () => void;

class Timer {
  static applyDelay(callback: Callback, miliseconds: number = 1000) {
    clearTimeout(timer);
    timer = setTimeout(callback, miliseconds)
  }
};

export default Timer;