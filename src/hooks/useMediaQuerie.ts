import { useEffect, useState } from "react";

type Callback = () => void;
type Events = {
  onMatchesTrue?: Callback;
  onMatchesFalse?: Callback;
};

export default function useMediaQuerie(
  value: string,
  { onMatchesTrue, onMatchesFalse }: Events = {}
) {
  const [valueSaveMatches, setValueSaveMatches] = useState(false);

  function getMediaQuerie() {
    if (typeof window !== "undefined") {
      return matchMedia(`(max-width: ${value})`);
    }
    return null;
  }

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
    const mediaQuerie = getMediaQuerie();
    if (mediaQuerie === null) {
      return;
    }
    mediaQuerie.addEventListener("change", handleMediaQuerie);
    handleMediaQuerie(mediaQuerie);
  }, [getMediaQuerie]);

  return valueSaveMatches;
}
