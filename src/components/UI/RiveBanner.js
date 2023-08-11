import { useRive } from '@rive-app/react-canvas';
import projectsRiv from '../../projects.riv';

export default function RiveBanner({ className }) {
  const STATE_MACHINE = 'SM-1';
  const ARTBOARD = 'synth-banner';

  const { rive, RiveComponent } = useRive({
    src: projectsRiv,
    artboard: ARTBOARD,
    stateMachines: STATE_MACHINE,
    autoplay: true,
  });

  return (
    <div className={className}>
      <RiveComponent />
    </div>
  );
}
