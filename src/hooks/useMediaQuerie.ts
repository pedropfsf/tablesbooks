import { useMemo, useEffect, useState } from "react"

type Callback = () => void;
type Events = {
  onMatchesTrue?: Callback;
  onMatchesFalse?: Callback;
}

export default function useMediaQuerie(
  value: string, 
  { onMatchesTrue, onMatchesFalse }: Events = {}
) {
  if (typeof window === 'undefined') {
    return false;
  }
  const [ valueSaveMatches, setValueSaveMatches ] = useState(false);
  const mediaQuerie = useMemo(() => matchMedia(`(max-width: ${value})`), [value]);
  
  useEffect(() => {
    const handleMediaQuerie = ({ matches }: any) => {
      setValueSaveMatches(matches);

      if (matches) {
        if (onMatchesTrue) {
          onMatchesTrue();
        }
      } else {
        if (onMatchesFalse) {
          onMatchesFalse();
        }
      }
    };

    mediaQuerie.addEventListener("change", handleMediaQuerie);
    handleMediaQuerie(mediaQuerie);
  }, []);

  return valueSaveMatches;
} 