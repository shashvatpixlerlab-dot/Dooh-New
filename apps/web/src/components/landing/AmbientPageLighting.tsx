import shared from "@/components/landing/styles/shared.module.css";

export function AmbientPageLighting() {
  return (
    <div className={shared.ambientLighting} aria-hidden>
      <div className={shared.ambientSweepPrimary} />
      <div className={`${shared.ambientLight} ${shared.ambientLightTl}`} />
      <div className={`${shared.ambientLight} ${shared.ambientLightTr}`} />
      <div className={`${shared.ambientLight} ${shared.ambientLightCenter}`} />
      <div className={shared.ambientPageGrid} />
      <div className={shared.ambientPageNoise} />
    </div>
  );
}
