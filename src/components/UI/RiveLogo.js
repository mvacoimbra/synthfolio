import { useRive } from '@rive-app/react-canvas';
import projectsRiv from '../../projects.riv';
//
import riveWasmUrl from '@rive-app/canvas/rive.wasm';
import { RuntimeLoader } from '@rive-app/react-canvas';

RuntimeLoader.setWasmUrl(riveWasmUrl);

export default function RiveLogo({ className }) {
  const STATE_MACHINE = 'SM-1';
  const ARTBOARD = 'synth-logo';

  const { rive, RiveComponent } = useRive({
    src: projectsRiv,
    artboard: ARTBOARD,
    stateMachines: STATE_MACHINE,
    autoplay: true,
  });

  return (
    <div className={className}>
      <link
        rel="preload"
        href={projectsRiv}
        as="fetch"
        crossOrigin="anonymous"
      />
      <RiveComponent />
    </div>
  );
}
