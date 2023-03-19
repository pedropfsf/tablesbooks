import { useMemo, useEffect } from "react"

type Callback = () => void;
type Events = {
  onMatchesTrue?: Callback;
  onMatchesFalse?: Callback;
}

export default function useMediaQuerie(
  value: string, 
  { onMatchesTrue, onMatchesFalse }: Events = {}
) {
  const mediaQuerie = useMemo(() => matchMedia(`(max-width: ${value})`), [value]);
  
  useEffect(() => {
    const handleMediaQuerie = ({ matches }: any) => {
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

  return mediaQuerie.matches;
} 