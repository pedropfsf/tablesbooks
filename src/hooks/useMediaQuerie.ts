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
  const [ valueSaveMatches, setValueSaveMatches ] = useState(false);
  
  
  const mediaQuerie = useMemo(() => {
    if (typeof window !== 'undefined') {
      return matchMedia(`(max-width: ${value})`);
    }
    
    return null;
  }, [value]);
  
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

    if (mediaQuerie === null) {
      return;
    }
  
    mediaQuerie.addEventListener("change", handleMediaQuerie);
    handleMediaQuerie(mediaQuerie);
  }, []);

  
  return valueSaveMatches;
} 